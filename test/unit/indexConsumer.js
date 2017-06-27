'use strict';

describe('Test consumer methods', function() {


	var should = require('should'),
		sinon = require('sinon'),
		producer,
		assert = require('assert');
	var requireHelper = require('../require_helper');
	var consumer = require("../../consumer");
	var indexComsumer = requireHelper('consumer');
	beforeEach(function(done) {
		delete require.cache[require.resolve('../../consumer')];



		done();
	});

	afterEach(function(done) {
		consumer.consumeMessage.authorization.restore();

		done();
	});


	it('authorization method called from consumer', function(done) {


	//	producer = require('../../producer');
		var ID,
			name,
			message;
		var settings ={ "settings": {
		   "metadata.broker.list":"localhost:9092",
		  "group.id": "node-rdkafka-consumer-flow-example",
                  "enable.auto.commit": false
},
"topicDetails": [{'Permission': 2, 'TopicName': 'mytesttopic'}, {'Permission': 0, 'TopicName': 'testtopic2'}]
};

		var callback = sinon.stub();
		callback({
			"error": function(obj) {
				assert.deepEqual(obj,{},"Authorization method called");
			   done();
			}
		});
		sinon.stub(consumer.consumeMessage, 'authorization').callsFake(function(settings) {
			callback.yieldTo("error", {}); 
		});

		//authorize.authorize();
		consumer.consumeMessage.getMessage(settings);

	});


});
