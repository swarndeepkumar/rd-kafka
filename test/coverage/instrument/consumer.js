"use strict";
var __cov_r_Xd_xzQpykHpe2M0lOJIg = (Function('return this'))();
if (!__cov_r_Xd_xzQpykHpe2M0lOJIg.__coverage__) { __cov_r_Xd_xzQpykHpe2M0lOJIg.__coverage__ = {}; }
__cov_r_Xd_xzQpykHpe2M0lOJIg = __cov_r_Xd_xzQpykHpe2M0lOJIg.__coverage__;
if (!(__cov_r_Xd_xzQpykHpe2M0lOJIg['consumer.js'])) {
   __cov_r_Xd_xzQpykHpe2M0lOJIg['consumer.js'] = {"path":"consumer.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":32}}},"2":{"name":"(anonymous_2)","line":9,"loc":{"start":{"line":9,"column":16},"end":{"line":9,"column":38}}},"3":{"name":"(anonymous_3)","line":27,"loc":{"start":{"line":27,"column":28},"end":{"line":27,"column":42}}},"4":{"name":"(anonymous_4)","line":32,"loc":{"start":{"line":32,"column":30},"end":{"line":32,"column":44}}},"5":{"name":"(anonymous_5)","line":38,"loc":{"start":{"line":38,"column":24},"end":{"line":38,"column":38}}},"6":{"name":"(anonymous_6)","line":47,"loc":{"start":{"line":47,"column":23},"end":{"line":47,"column":41}}},"7":{"name":"(anonymous_7)","line":55,"loc":{"start":{"line":55,"column":31},"end":{"line":55,"column":45}}}},"statementMap":{"1":{"start":{"line":2,"column":0},"end":{"line":2,"column":36}},"2":{"start":{"line":4,"column":0},"end":{"line":66,"column":2}},"3":{"start":{"line":6,"column":2},"end":{"line":6,"column":41}},"4":{"start":{"line":11,"column":3},"end":{"line":11,"column":64}},"5":{"start":{"line":12,"column":3},"end":{"line":12,"column":22}},"6":{"start":{"line":13,"column":3},"end":{"line":25,"column":4}},"7":{"start":{"line":14,"column":4},"end":{"line":19,"column":5}},"8":{"start":{"line":16,"column":5},"end":{"line":18,"column":6}},"9":{"start":{"line":17,"column":6},"end":{"line":17,"column":59}},"10":{"start":{"line":22,"column":4},"end":{"line":24,"column":5}},"11":{"start":{"line":23,"column":5},"end":{"line":23,"column":58}},"12":{"start":{"line":27,"column":3},"end":{"line":29,"column":6}},"13":{"start":{"line":28,"column":4},"end":{"line":28,"column":21}},"14":{"start":{"line":32,"column":3},"end":{"line":35,"column":6}},"15":{"start":{"line":33,"column":4},"end":{"line":33,"column":41}},"16":{"start":{"line":34,"column":4},"end":{"line":34,"column":23}},"17":{"start":{"line":37,"column":3},"end":{"line":37,"column":36}},"18":{"start":{"line":38,"column":3},"end":{"line":44,"column":6}},"19":{"start":{"line":39,"column":4},"end":{"line":39,"column":57}},"20":{"start":{"line":41,"column":4},"end":{"line":41,"column":34}},"21":{"start":{"line":43,"column":4},"end":{"line":43,"column":23}},"22":{"start":{"line":47,"column":3},"end":{"line":53,"column":6}},"23":{"start":{"line":49,"column":4},"end":{"line":49,"column":32}},"24":{"start":{"line":50,"column":4},"end":{"line":50,"column":59}},"25":{"start":{"line":51,"column":7},"end":{"line":51,"column":59}},"26":{"start":{"line":55,"column":3},"end":{"line":57,"column":6}},"27":{"start":{"line":56,"column":4},"end":{"line":56,"column":65}},"28":{"start":{"line":60,"column":3},"end":{"line":60,"column":22}},"29":{"start":{"line":68,"column":0},"end":{"line":68,"column":40}}},"branchMap":{"1":{"line":13,"type":"if","locations":[{"start":{"line":13,"column":3},"end":{"line":13,"column":3}},{"start":{"line":13,"column":3},"end":{"line":13,"column":3}}]},"2":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":5},"end":{"line":16,"column":5}},{"start":{"line":16,"column":5},"end":{"line":16,"column":5}}]},"3":{"line":16,"type":"binary-expr","locations":[{"start":{"line":16,"column":9},"end":{"line":16,"column":51}},{"start":{"line":16,"column":55},"end":{"line":16,"column":97}}]},"4":{"line":22,"type":"if","locations":[{"start":{"line":22,"column":4},"end":{"line":22,"column":4}},{"start":{"line":22,"column":4},"end":{"line":22,"column":4}}]},"5":{"line":22,"type":"binary-expr","locations":[{"start":{"line":22,"column":8},"end":{"line":22,"column":50}},{"start":{"line":22,"column":54},"end":{"line":22,"column":96}}]}}};
}
__cov_r_Xd_xzQpykHpe2M0lOJIg = __cov_r_Xd_xzQpykHpe2M0lOJIg['consumer.js'];
__cov_r_Xd_xzQpykHpe2M0lOJIg.s['1']++;var kafka=require('node-rdkafka');__cov_r_Xd_xzQpykHpe2M0lOJIg.s['2']++;var consumeMessage={getMessage:function(settings){__cov_r_Xd_xzQpykHpe2M0lOJIg.f['1']++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['3']++;consumeMessage.authorization(settings);},authorization:function(settingsObj){__cov_r_Xd_xzQpykHpe2M0lOJIg.f['2']++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['4']++;var consumer=new kafka.KafkaConsumer(settingsObj.settings);__cov_r_Xd_xzQpykHpe2M0lOJIg.s['5']++;var topicName=[];__cov_r_Xd_xzQpykHpe2M0lOJIg.s['6']++;if(settingsObj.topicDetail.length>1){__cov_r_Xd_xzQpykHpe2M0lOJIg.b['1'][0]++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['7']++;for(var i=0;i<settingsObj.topicDetail.length;i++){__cov_r_Xd_xzQpykHpe2M0lOJIg.s['8']++;if((__cov_r_Xd_xzQpykHpe2M0lOJIg.b['3'][0]++,settingsObj.topicDetail[i].Permission==1)||(__cov_r_Xd_xzQpykHpe2M0lOJIg.b['3'][1]++,settingsObj.topicDetail[i].Permission==2)){__cov_r_Xd_xzQpykHpe2M0lOJIg.b['2'][0]++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['9']++;topicName.push(settingsObj.topicDetail[i].TopicName);}else{__cov_r_Xd_xzQpykHpe2M0lOJIg.b['2'][1]++;}}}else{__cov_r_Xd_xzQpykHpe2M0lOJIg.b['1'][1]++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['10']++;if((__cov_r_Xd_xzQpykHpe2M0lOJIg.b['5'][0]++,settingsObj.topicDetail[0].Permission==1)||(__cov_r_Xd_xzQpykHpe2M0lOJIg.b['5'][1]++,settingsObj.topicDetail[0].Permission==2)){__cov_r_Xd_xzQpykHpe2M0lOJIg.b['4'][0]++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['11']++;topicName.push(settingsObj.topicDetail[0].TopicName);}else{__cov_r_Xd_xzQpykHpe2M0lOJIg.b['4'][1]++;}}__cov_r_Xd_xzQpykHpe2M0lOJIg.s['12']++;consumer.on('event.log',function(log){__cov_r_Xd_xzQpykHpe2M0lOJIg.f['3']++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['13']++;console.log(log);});__cov_r_Xd_xzQpykHpe2M0lOJIg.s['14']++;consumer.on('event.error',function(err){__cov_r_Xd_xzQpykHpe2M0lOJIg.f['4']++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['15']++;console.error('Error from consumer');__cov_r_Xd_xzQpykHpe2M0lOJIg.s['16']++;console.error(err);});__cov_r_Xd_xzQpykHpe2M0lOJIg.s['17']++;console.log('topics',topicName);__cov_r_Xd_xzQpykHpe2M0lOJIg.s['18']++;consumer.on('ready',function(arg){__cov_r_Xd_xzQpykHpe2M0lOJIg.f['5']++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['19']++;console.log('consumer ready.'+JSON.stringify(arg));__cov_r_Xd_xzQpykHpe2M0lOJIg.s['20']++;consumer.subscribe(topicName);__cov_r_Xd_xzQpykHpe2M0lOJIg.s['21']++;consumer.consume();});__cov_r_Xd_xzQpykHpe2M0lOJIg.s['22']++;consumer.on('data',function(message){__cov_r_Xd_xzQpykHpe2M0lOJIg.f['6']++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['23']++;console.log('--Consumer--');__cov_r_Xd_xzQpykHpe2M0lOJIg.s['24']++;console.log('Topic Name: '+message.topic.toString());__cov_r_Xd_xzQpykHpe2M0lOJIg.s['25']++;console.log('Message: '+message.value.toString());});__cov_r_Xd_xzQpykHpe2M0lOJIg.s['26']++;consumer.on('disconnected',function(arg){__cov_r_Xd_xzQpykHpe2M0lOJIg.f['7']++;__cov_r_Xd_xzQpykHpe2M0lOJIg.s['27']++;console.log('consumer disconnected. '+JSON.stringify(arg));});__cov_r_Xd_xzQpykHpe2M0lOJIg.s['28']++;consumer.connect();}};__cov_r_Xd_xzQpykHpe2M0lOJIg.s['29']++;exports.consumeMessage=consumeMessage;
