(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-topic-topic"],{"03ba":function(e,t,n){"use strict";n.r(t);var i=n("d2ab"),a=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a},"0f57":function(e,t,n){"use strict";var i=n("3f85"),a=n.n(i);a.a},"34ce":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"topic"},[e._l(e.answerTopicObj.answer,(function(t,i){return n("v-uni-view",{key:i},[e.topicActiveIndex===i?n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"topic_header_box"},[n("v-uni-view",{staticClass:"same"},[n("v-uni-text",[e._v(e._s(i+1>9?"":"0")+e._s(i+1)+"/"+e._s(e.topicListLen))]),n("v-uni-text",[e._v(e._s(t.title))])],1),n("v-uni-view",[n("v-uni-view",{staticClass:"same"},[e._v("A:"+e._s(t.selecta)+"（ ）")]),n("v-uni-view",{staticClass:"same"},[e._v("B:"+e._s(t.selectb)+"（ ）")])],1)],1),n("v-uni-view",{staticClass:"topic_option_box"},[n("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeOption(t,i)}}},e._l(e.mitList,(function(t,i){return n("v-uni-label",{key:i,staticClass:"same uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:t.value,checked:t.checked}})],1),n("v-uni-view",[e._v(e._s(t.name))])],1)})),1)],1)],1):e._e()],1)})),e.topicActiveIndex+1>e.topicListLen?n("v-uni-view",{staticClass:"result_box"},[n("v-uni-view",{staticClass:"score"},[n("v-uni-text",[e._v("您的得分：")]),n("v-uni-text",[e._v(e._s(e.resultObj.score)+"分")])],1),n("v-uni-view",[e._v(e._s(e.resultObj.describe))]),n("v-uni-view",{staticClass:"btn_box"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.answer_reset()}}},[e._v("重新测试")])],1)],1):e._e()],2)},s=[]},"3f85":function(e,t,n){var i=n("64ee");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("21c3dd3a",i,!0,{sourceMap:!1,shadowMode:!1})},"64ee":function(e,t,n){var i=n("4bad");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*伸缩盒子模型*/\n/*从左至右*/\n/*从右至左*/\n/*从上至下*/\n/*从下至上*/\n/*主轴居中*/\n/*主轴居左*/\n/*主轴居右*/\n/*主轴左右不留白*/\n/*主轴左右留白*/\n/*交叉轴居中对齐*/\n/*交叉轴居左对齐*/\n/*交叉轴居右对齐*/\n/**单个指定的子元素自定义对齐方式，可以不同于其他子元素对齐方式**/\n/**指定子元素居中对齐**/\n/**指定子元素顶部对齐**/\n/**指定子元素底部对齐**/\n/**指定子元素拉伸**/\n/**子元素换行**/\n/**子元素不换行**/\n/*允许子元素伸展（1倍）*/\n/* flex:1 是 flex-grow、flex-shrink、flex-basis的缩写。故其取值可以考虑以下情况：\n flex-grow:0表示不会拉伸 flex-shrink:1表示 可以缩小\n flex 的默认值是以上三个属性值的组合。假设以上三个属性同样取默认值，则 flex 的默认值是 0 1 auto*/\n/*允许子元素收缩(1倍)*/\n/**水平居中*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.topic[data-v-48df16cd]{padding:%?20?% %?30?% 0}.topic .content .topic_header_box .same[data-v-48df16cd]{margin:%?20?% 0}.topic .content .topic_option_box .same[data-v-48df16cd]{display:-webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */display:-moz-box; /* 老版本语法: Firefox (buggy) */display:-ms-flexbox; /* 混合版本语法: IE 10 */display:-webkit-flex; /* 新版本语法: Chrome 21+ */display:flex; /* 新版本语法: Opera 12.1, Firefox 22+ */-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-moz-align-items:center;-webkit-align-items:center;align-items:center;margin:%?30?% 0}.topic .result_box .score[data-v-48df16cd]{text-align:center;margin:%?30?% auto}.topic .result_box .score uni-text[data-v-48df16cd]:nth-child(2){color:#ad3641}.topic .result_box .btn_box[data-v-48df16cd]{display:-webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */display:-moz-box; /* 老版本语法: Firefox (buggy) */display:-ms-flexbox; /* 混合版本语法: IE 10 */display:-webkit-flex; /* 新版本语法: Chrome 21+ */display:flex; /* 新版本语法: Opera 12.1, Firefox 22+ */-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-moz-justify-content:center;-webkit-justify-content:center;justify-content:center;padding:%?50?% %?0?%}.topic .result_box .btn_box uni-button[data-v-48df16cd]{width:%?375?%;background-color:#ad3641;color:#fff}',""]),e.exports=t},"8b11":function(e,t,n){"use strict";n.r(t);var i=n("34ce"),a=n("03ba");for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("0f57");var o,c=n("f0c5"),r=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"48df16cd",null,!1,i["a"],o);t["default"]=r.exports},d2ab:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4de4"),n("d3b7");var i={name:"topic",data:function(){return{answerTopicObj:{},topicListLen:0,topicActiveIndex:0,mitList:[{name:"A-0分 B-5分",value:"0",option:{A:0,B:5},checked:!1},{name:"A-1分 B-4分",value:"1",option:{A:1,B:4},checked:!1},{name:"A-2分 B-3分",value:"2",option:{A:2,B:3},checked:!1},{name:"A-4分 B-1分",value:"3",option:{A:4,B:1},checked:!1},{name:"A-5分 B-0分",value:"4",option:{A:5,B:0},checked:!1}],answerResults:[],resultObj:{score:"0",describe:"1.安静、和善、负责任且有良心。 \n2.行事尽责投入。 \n3.安定性高，常居项目工作或团体之安定力量。 \n4.愿投入、吃苦及力求精确。 \n5.兴趣通常不在于科技方面。对细节事务有耐心。 \n6.忠诚、考虑周到、知性且会关切他人感受。 \n7.致力于创构有序及和谐的工作与家庭环境。 "}}},mounted:function(){this.get_answer_topic()},methods:{get_answer_topic:function(){var e=this;this.axios.get("http://localhost:8080/get_answer_topic").then((function(t){200===t.data.code&&(e.answerTopicObj=t.data.data,e.topicListLen=t.data.data.answer.length,console.log("111111",e.answerTopicObj))}))},changeOption:function(e,t){this.topicActiveIndex++;var n=this.mitList.filter((function(t){if(t.value===e.detail.value)return!0}));this.answerResults.push({id:this.answerTopicObj.answer[t].id,question:n[0].option})},answer_reset:function(){console.log("answerResults",this.answerResults),this.topicActiveIndex=0,this.answerResults=[]}}};t.default=i}}]);