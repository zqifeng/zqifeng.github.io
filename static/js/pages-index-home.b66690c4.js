(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-home"],{"444b":function(n,t,e){var a=e("6300");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("23c11b3a",a,!0,{sourceMap:!1,shadowMode:!1})},"48b2":function(n,t,e){"use strict";e.r(t);var a=e("6e2f"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},6300:function(n,t,e){var a=e("4bad");t=a(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/*伸缩盒子模型*/\n/*从左至右*/\n/*从右至左*/\n/*从上至下*/\n/*从下至上*/\n/*主轴居中*/\n/*主轴居左*/\n/*主轴居右*/\n/*主轴左右不留白*/\n/*主轴左右留白*/\n/*交叉轴居中对齐*/\n/*交叉轴居左对齐*/\n/*交叉轴居右对齐*/\n/**单个指定的子元素自定义对齐方式，可以不同于其他子元素对齐方式**/\n/**指定子元素居中对齐**/\n/**指定子元素顶部对齐**/\n/**指定子元素底部对齐**/\n/**指定子元素拉伸**/\n/**子元素换行**/\n/**子元素不换行**/\n/*允许子元素伸展（1倍）*/\n/* flex:1 是 flex-grow、flex-shrink、flex-basis的缩写。故其取值可以考虑以下情况：\n flex-grow:0表示不会拉伸 flex-shrink:1表示 可以缩小\n flex 的默认值是以上三个属性值的组合。假设以上三个属性同样取默认值，则 flex 的默认值是 0 1 auto*/\n/*允许子元素收缩(1倍)*/\n/**水平居中*/\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.home[data-v-ed7ef456]{padding:%?0?% %?30?%}.home .logo[data-v-ed7ef456]{height:%?200?%;width:%?200?%;margin:%?200?% auto %?50?% auto}.home .title[data-v-ed7ef456]{padding:%?40?% %?40?% %?10?%;font-size:%?36?%;font-weight:600;color:#333}.home .title uni-text[data-v-ed7ef456]{line-height:%?80?%}.home .time[data-v-ed7ef456]{padding:%?0?% %?40?% %?30?%;font-weight:400;color:#333}.home .describe[data-v-ed7ef456]{font-weight:400;color:#333}.home .btn_submit[data-v-ed7ef456]{width:%?240?%;height:%?72?%;margin-top:%?200?%;background:#ad3641;font-weight:600;color:#fff}',""]),n.exports=t},6735:function(n,t,e){"use strict";var a=e("444b"),i=e.n(a);i.a},"6e2f":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{data:"Hello"}},mounted:function(){this.get_answer_kinds()},methods:{get_answer_kinds:function(){var n=this;this.axios.get("http://localhost:8080/get_answer_kinds").then((function(t){200===t.data.code&&(n.data=t.data.data,console.log(n.data))}))},jump:function(){uni.reLaunch({url:"/pages/topic/topic"})}}};t.default=a},"9bb5":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"home"},[e("v-uni-view",{staticClass:"title uni-flex"},[e("v-uni-text",[n._v(n._s(n.data.name))])],1),e("v-uni-view",{staticClass:"time uni-flex"},[e("v-uni-text",[n._v("答题时间："+n._s(n.data.minute)+"分钟")])],1),e("v-uni-view",{staticClass:"describe"},[e("v-uni-text",[n._v(n._s(n.data.content))])],1),e("v-uni-button",{staticClass:"btn_submit",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.jump()}}},[n._v("开始测试")])],1)},o=[]},e79a:function(n,t,e){"use strict";e.r(t);var a=e("9bb5"),i=e("48b2");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("6735");var s,u=e("f0c5"),d=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"ed7ef456",null,!1,a["a"],s);t["default"]=d.exports}}]);