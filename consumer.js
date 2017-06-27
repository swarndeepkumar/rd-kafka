'use strict';
var kafka = require('node-rdkafka');

var consumeMessage = {
	getMessage: function(settings) {
		consumeMessage.authorization(settings);
	},

	authorization: function(settingsObj) {
		//authorize.authorize(settingsObj, function(response) {
			var consumer = new kafka.KafkaConsumer(settingsObj.settings);
			var topicName = [];
			if (settingsObj.topicDetail.length > 1) {
				for (var i = 0; i < settingsObj.topicDetail.length; i++) {
					// Consume - 1 (OR) Publish / Consume the message = 2
					if (settingsObj.topicDetail[i].Permission == 1 || settingsObj.topicDetail[i].Permission == 2) {
						topicName.push(settingsObj.topicDetail[i].TopicName);
					}
				}
			} else {
				// Consume - 1 (OR) Publish / Consume the message = 2
				if (settingsObj.topicDetail[0].Permission == 1 || settingsObj.topicDetail[0].Permission == 2) {
					topicName.push(settingsObj.topicDetail[0].TopicName);
				}
			}
			//logging debug messages, if debug is enabled
			consumer.on('event.log', function(log) {
				console.log(log);
			});

			//logging all errors
			consumer.on('event.error', function(err) {
				console.error('Error from consumer');
				console.error(err);
			});

			console.log('topics', topicName);
			consumer.on('ready', function(arg) {
				console.log('consumer ready.' + JSON.stringify(arg));

				consumer.subscribe(topicName);
				//start consuming messages
				consumer.consume();
			});


			consumer.on('data', function(message) {
				
				console.log("--Consumer--");
				console.log("Topic Name: " + message.topic.toString());
			    console.log("Message: " + message.value.toString());
			   // return message;
			});

			consumer.on('disconnected', function(arg) {
				console.log('consumer disconnected. ' + JSON.stringify(arg));
			});

			//starting the consumer
			consumer.connect();



		//});
	}
};

exports.consumeMessage = consumeMessage;
