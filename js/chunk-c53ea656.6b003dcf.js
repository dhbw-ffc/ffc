(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c53ea656"],{2677:function(t,e,n){"use strict";var r=n("8654");e["a"]=r["a"]},"42d9":function(t,e,n){"use strict";var r=n("d855"),i=n.n(r);i.a},"4d63":function(t,e,n){var r=n("83ab"),i=n("da84"),o=n("94ca"),a=n("7156"),c=n("9bf2").f,s=n("241c").f,l=n("44e7"),u=n("ad6d"),h=n("9f7f"),f=n("6eeb"),p=n("d039"),d=n("69f3").set,v=n("2626"),g=n("b622"),m=g("match"),y=i.RegExp,b=y.prototype,w=/a/g,x=/a/g,C=new y(w)!==w,k=h.UNSUPPORTED_Y,S=r&&o("RegExp",!C||k||p((function(){return x[m]=!1,y(w)!=w||y(x)==x||"/a/i"!=y(w,"i")})));if(S){var L=function(t,e){var n,r=this instanceof L,i=l(t),o=void 0===e;if(!r&&i&&t.constructor===L&&o)return t;C?i&&!o&&(t=t.source):t instanceof L&&(o&&(e=u.call(t)),t=t.source),k&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=a(C?new y(t,e):y(t,e),r?this:b,L);return k&&n&&d(c,{sticky:n}),c},O=function(t){t in L||c(L,t,{configurable:!0,get:function(){return y[t]},set:function(e){y[t]=e}})},F=s(y),E=0;while(F.length>E)O(F[E++]);b.constructor=L,L.prototype=b,f(i,"RegExp",L)}v("RegExp")},5803:function(t,e,n){},"8adc":function(t,e,n){},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new E(r||[]);return o._invoke=S(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var u="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function v(){}function g(){}function m(){}var y={};y[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==n&&r.call(w,o)&&(y=w);var x=m.prototype=v.prototype=Object.create(y);function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t,e){function n(i,o,a,c){var s=l(t[i],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function S(t,e,n){var r=u;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return V()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:V}}function V(){return{value:e,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,m[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new k(s(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(x),x[c]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a2ac:function(t,e,n){"use strict";var r=n("e176"),i=n.n(r);i.a},d855:function(t,e,n){},e176:function(t,e,n){},f28b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addnewdeck"},[n("AddNewDeckComponent")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings"},[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("ImportDeckFromURL"),n("ImportDeckFromFile"),n("DeckCreator")],1)],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[n("v-card",{attrs:{height:"100%",raised:""}},[n("v-card-title",[t._v("Import Deck From URL")]),n("v-card-text",[n("v-text-field",{staticClass:"deck-input",attrs:{label:"Provide a File URL",outlined:"",clearable:"",rules:t.urlRules},model:{value:t.chosenURL,callback:function(e){t.chosenURL=e},expression:"chosenURL"}},[n("v-icon",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("mdi-web")])],1)],1),n("v-card-actions",{staticClass:"button-padding"},[n("v-spacer"),n("v-btn",{attrs:{color:"indigo",right:""},on:{click:t.loadFileFromURL}},[t._v("Import File")])],1)],1)],1)},s=[];n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("96cf");function l(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){l(o,r,i,a,c,"next",t)}function c(t){l(o,r,i,a,c,"throw",t)}a(void 0)}))}}var h={name:"ImportDeckFromURL",data:function(){return{chosenURL:"https://raw.githubusercontent.com/fancy-flashcard/ffc/master/cli/test.json",fileContent:"",urlRules:[function(t){return null!==new RegExp("^https://.*/.*.json$").exec(t)||"Please provide a correct URL"}]}},methods:{loadFileFromURL:function(){var t=this;return u(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.chosenURL);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t.$eventHub.$emit("addDecksFromJSON",r),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.$eventHub.$emit("snackbarEvent","An Error Occurred While Loading The File");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}},f=h,p=(n("a2ac"),n("2877")),d=n("6544"),v=n.n(d),g=n("8336"),m=n("b0af"),y=n("99d9"),b=n("62ad"),w=n("132d"),x=n("2fa4"),C=n("8654"),k=Object(p["a"])(f,c,s,!1,null,"935f441e",null),S=k.exports;v()(k,{VBtn:g["a"],VCard:m["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:b["a"],VIcon:w["a"],VSpacer:x["a"],VTextField:C["a"]});var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[n("v-card",{attrs:{height:"100%",raised:""}},[n("v-card-title",[t._v("Import a JSON File")]),n("v-card-text",[n("v-file-input",{staticClass:"deck-input",attrs:{outlined:"",clearable:"",label:"Select a JSON File",accept:".json"},model:{value:t.chosenFile,callback:function(e){t.chosenFile=e},expression:"chosenFile"}})],1),n("v-card-actions",{staticClass:"button-padding"},[n("v-spacer"),n("v-btn",{attrs:{color:"indigo",right:""},on:{click:t.importFile}},[t._v("Import File")])],1)],1)],1)},O=[],F=(n("b0c0"),{name:"ImportDeckFromFile",data:function(){return{chosenFile:null,fileContent:""}},methods:{importFile:function(){var t=this,e=new FileReader;try{if(null===this.chosenFile)throw new Error("No file chosen.");if(".json"!==this.chosenFile.name.substr(this.chosenFile.name.length-5))throw new Error("Wrong file format!");e.readAsText(this.chosenFile),e.onload=function(){t.$eventHub.$emit("addDecksFromFile",e.result)}}catch(n){this.$eventHub.$emit("snackbarEvent",n)}}}}),E=F,j=(n("42d9"),n("99af"),n("a623"),n("4160"),n("caad"),n("d81d"),n("13d5"),n("fb6a"),n("a434"),n("a9e3"),n("159b"),n("2909")),V=n("5530"),$=n("53ca"),_=(n("5803"),n("2677")),I=(n("4de4"),n("3835")),R=(n("8adc"),n("58df")),D=n("0789"),T=n("9d26"),N=n("a9ad"),B=n("4e82"),z=n("7560"),A=n("f2e7"),P=n("1c87"),U=n("af2b"),G=n("d9bd"),M=Object(R["a"])(N["a"],U["a"],P["a"],z["a"],Object(B["a"])("chipGroup"),Object(A["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(V["a"])(Object(V["a"])(Object(V["a"])(Object(V["a"])({"v-chip":!0},P["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(P["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var n=Object(I["a"])(e,2),r=n[0],i=n[1];t.$attrs.hasOwnProperty(r)&&Object(G["a"])(r,i,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(T["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(D["b"],t)},genClose:function(){var t=this;return this.$createElement(T["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),r=n.tag,i=n.data;i.attrs=Object(V["a"])(Object(V["a"])({},i.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex}),i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);var o=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(o,i),e)}}),J=n("80d2"),H=n("d9f7"),Y=_["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(J["w"])(t).every((function(t){return null!=t&&"object"===Object($["a"])(t)}))}}},computed:{classes:function(){return Object(V["a"])(Object(V["a"])({},_["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size,r=void 0===n?0:n;return t+r}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(J["o"])(e,1024===this.base))},internalArrayValue:function(){return Object(J["w"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var n=e.name,r=void 0===n?"":n,i=e.size,o=void 0===i?0:i,a=t.truncateText(r);return t.showSize?"".concat(a," (").concat(Object(J["o"])(o,1024===t.base),")"):a})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(G["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(J["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:void 0,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,n){return t.$createElement(M,{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(n,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=_["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(H["b"])(t.data.style,{display:"none"})),t},genInput:function(){var t=_["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,r){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[r],file:n,index:r}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=_["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(V["a"])(Object(V["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(j["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),W=Object(p["a"])(E,L,O,!1,null,"bb3ec5b8",null),K=W.exports;v()(W,{VBtn:g["a"],VCard:m["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:b["a"],VFileInput:Y,VSpacer:x["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"4",xl:"4"}},[n("v-card",{attrs:{height:"100%",raised:""}},[n("v-card-title",[t._v("Deck Creator")]),n("v-card-text",[n("p",[t._v("You will be able to natively create a new deck here.")])])],1)],1)},Q=[],X={name:"DeckCreator"},Z=X,tt=Object(p["a"])(Z,q,Q,!1,null,"68497c0e",null),et=tt.exports;v()(tt,{VCard:m["a"],VCardText:y["b"],VCardTitle:y["c"],VCol:b["a"]});var nt={name:"AddNewDeck",components:{ImportDeckFromURL:S,ImportDeckFromFile:K,DeckCreator:et}},rt=nt,it=n("a523"),ot=n("0fd9"),at=Object(p["a"])(rt,o,a,!1,null,"4a4b71a8",null),ct=at.exports;v()(at,{VContainer:it["a"],VRow:ot["a"]});var st={name:"AddNewDeck",props:{},components:{AddNewDeckComponent:ct}},lt=st,ut=Object(p["a"])(lt,r,i,!1,null,"2e41e751",null);e["default"]=ut.exports}}]);
//# sourceMappingURL=chunk-c53ea656.6b003dcf.js.map