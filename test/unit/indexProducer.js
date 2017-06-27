'use strict';

describe('Test producer methods', function() {


	var should = require('should'),
		sinon = require('sinon'),
		producer,
		assert = require('assert');
	var requireHelper = require('../require_helper');
	var producer = require("../../producer");
	var indexProducer = requireHelper('producer');
	beforeEach(function(done) {
		delete require.cache[require.resolve('../../producer')];



		done();
	});

	afterEach(function(done) {
		producer.produceMessage.authorization.restore();

		done();
	});


	it('authorization method called from consumer', function(done) {


	//	producer = require('../../producer');
		var ID,
			name,
			message;
		var settings ={ "settings": {
		   "metadata.broker.list":"localhost:9092",
		  "dr_cb":true
},
"topicDetails": [{'Permission': 2, 'TopicName': 'mytesttopic'}, {'Permission': 0, 'TopicName': 'testtopic2'}]
};
var message = {'message': 'my hello word'};

		var callback = sinon.stub();
		callback({
			"error": function(obj) {
				assert.deepEqual(obj,{},"Authorise API return empty object");
			   done();
			}
		});
		sinon.stub(producer.produceMessage, 'authorization').callsFake(function(settings, message) {
			callback.yieldTo("error", {}); 
		});

		//authorize.authorize();
		producer.produceMessage.sendMessage(settings, message);

	});


});
