'use strict';
var kafka = require('node-rdkafka');

var produceMessage = {
	sendMessage: function(settings, msg) {
		produceMessage.authorization(settings, msg);
	},
	authorization: function(settings, msg) {
		//authorize.authorize(settings, function(response) {
			console.log(msg);
			//var message = JSON.parse(msg);
			var message = msg;
			var topicName = [],
				permission;
			var producer = new kafka.Producer(settings.settings);
			//starting the producer

			if (settings.topicDetail.length > 1) {
				for (var i = 0; i < settings.topicDetail.length; i++) {
					// Publish - 0 (OR) Publish / Consume the message = 2
					if (settings.topicDetail[i].Permission == 0 || settings.topicDetail[i].Permission == 2) {
						topicName.push({
							topic: settings.topicDetail[i].TopicName,
							messages: message.message
						});
					}
				}
			} else {
				// Publish - 0 (OR) Publish / Consume the message = 2
				if (settings.topicDetail[0].Permission == 0 || settings.topicDetail[0].Permission == 2) {
					topicName.push({
						topic: settings.topicDetail[0].TopicName,
						messages: message.message
					});
				}
			}
			//logging debug messages, if debug is enabled
			producer.on('event.log', function(log) {
			  console.log(log);
			});
			
			//logging all errors
			producer.on('event.error', function(err) {
				console.error('Error from producer');
				console.error(err);
			});

			//counter to stop this sample after maxMessages are sent
			var counter = 0;
			

			producer.on('delivery-report', function(err, report) {
				console.log('delivery-report: ' + JSON.stringify(report));
				counter++;
			});

			//Wait for the ready event before producing
			producer.on('ready', function(arg) {
				console.log('producer ready.' + JSON.stringify(arg));

				//Create a Topic object with any options our Producer
				//should use when producing to that topic.


				for (var i = 0; i < topicName.length; i++) {
					var topic = producer.Topic(topicName[i].topic, {
						// Make the Kafka broker acknowledge our message (optional)
						'request.required.acks': 1
					});
					var value = new Buffer(topicName[i].messages);
					var key = "key-" + i;
					// if partition is set to -1, librdkafka will use the default partitioner
					var partition = -1;
					producer.produce(topic, partition, value, key);
				}

				//need to keep polling for a while to ensure the delivery reports are received
				var pollLoop = setInterval(function() {
					producer.poll();
					if (counter === topicName.length) {
						clearInterval(pollLoop);
						//producer.disconnect();
					}
				}, 1000);


			});

			producer.on('disconnected', function(arg) {
				console.log('producer disconnected. ' + JSON.stringify(arg));
			});

			//starting the producer
			producer.connect();



		//});
	}
};

exports.produceMessage = produceMessage;
