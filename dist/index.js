!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue")):"function"==typeof define&&define.amd?define(["vue"],t):"object"==typeof exports?exports["vue-js-popover"]=t(require("vue")):e["vue-js-popover"]=t(e.vue)}(window,function(n){return i={},r.m=o=[function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(6).default)("24dd245c",o,!0,{})},function(e,t){e.exports=n},function(e,t,n){"use strict";var o=n(0);n.n(o).a},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".vue-popover{display:block;position:absolute;background:#fff;box-shadow:0px 4px 20px 0px rgba(52,73,94,0.2);padding:5px;border-radius:5px;z-index:998}.vue-popover:before{display:block;position:absolute;width:0;height:0;content:''}.vue-popover.dropdown-position-bottom:before{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #fff;top:-6px;left:calc(50% - 6px);filter:drop-shadow(0px -2px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-top:before{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid #fff;bottom:-6px;left:calc(50% - 6px);filter:drop-shadow(0px 2px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-left:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid #fff;right:-6px;top:calc(50% - 6px);filter:drop-shadow(2px 0px 2px rgba(52,73,94,0.1))}.vue-popover.dropdown-position-right:before{border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid #fff;left:-6px;top:calc(50% - 6px);filter:drop-shadow(-2px 0px 2px rgba(52,73,94,0.1))}\n",""])},function(e,t,n){"use strict";e.exports=function(n){var s=[];return s.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(o),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},s.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&n[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),s.push(i))}},s}},function(e,t,n){"use strict";n.r(t);var o=n(1),s=new(n.n(o).a);function b(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function i(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={left:[-1,0],right:[1,0],top:[0,1],bottom:[0,-1]},p={name:"Popover",props:{name:{type:String,required:!0},transition:{type:String},width:{type:Number,default:180},pointer:{type:Boolean,default:!0},event:{type:String,default:"click"},anchor:{type:Number,default:.5,validator:function(e){return 0<=e&&e<=1}}},data:function(){return{visible:!1,zIndex:1,positionClass:"",fixedParents:[],position:{left:0,top:0}}},mounted:function(){s.$on(this.showEventName,this.showEventListener),s.$on(this.hideEventName,this.hideEventListener)},beforeDestroy:function(){s.$off(this.showEventName,this.showEventListener),s.$off(this.hideEventName,this.hideEventListener)},computed:{showEventName:function(){return"show:".concat(this.event)},hideEventName:function(){return"hide:".concat(this.event)},className:function(){return["vue-popover",this.pointer&&this.positionClass]},style:function(){var e=this.width,t=this.zIndex,n=0<this.fixedParents.length;console.log(t);var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({width:"".concat(e,"px"),zIndex:t},this.position);return n&&(o.position="fixed"),o}},methods:{showEventListener:function(r){var i=this;this.visible?s.$emit(this.hideEventName):this.$nextTick(function(){var t,n=r.target,e=r.name,o=r.position;e===i.name&&(t=u[o],i.positionClass="dropdown-position-".concat(o),i.visible=!0,i.$nextTick(function(){i.$emit("show",r),i.$nextTick(function(){var e=i.getDropdownPosition(n,i.$refs.dropdown,t);i.position={left:"".concat(e.left,"px"),top:"".concat(e.top,"px")}})}))})},hideEventListener:function(e){this.visible&&(this.visible=!1,this.$emit("hide",e))},getDropdownPosition:function(e,t,n){var o,r=e.getBoundingClientRect(),i=t.getBoundingClientRect();this.fixedParents=(o=[],function(e,t){for(var n=e;t&&n.parentNode&&"BODY"!==n.parentNode.tagName;)t(n),n=n.parentNode}(e,function(e){"fixed"===window.getComputedStyle(e).position&&o.push(e)}),o);var s=[e].concat(b(this.fixedParents)).reduce(function(e,t){var n=parseInt(getComputedStyle(t)["z-index"])||1;return Math.max(e,n)},1)+1;this.zIndex=s;var a,u,p=r.left,c=r.top;0===this.fixedParents.length&&(a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,p=r.left+u,c=r.top+a);var l=.5*(i.height+r.height),d=p-.5*(i.width-r.width),f=c+r.height-l,v=.5*n[0]*(i.width+r.width),h=n[1]*l;return this.pointer&&(v+=6*n[0],h+=6*n[1]),{left:Math.round(d+v),top:Math.round(f-h)}}}};n(2);function c(e,t,n,o,r,i,s,a){var u,p,c,l="function"==typeof e?e.options:e;return t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=u):r&&(u=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),u&&(l.functional?(l._injectStyles=u,p=l.render,l.render=function(e,t){return u.call(t),p(e,t)}):(c=l.beforeCreate,l.beforeCreate=c?[].concat(c,u):[u])),{exports:e,options:l}}var l=c(p,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transition}},[e.visible?n("div",{ref:"dropdown",class:e.className,style:e.style,attrs:{"data-popover":this.name},on:{click:function(e){e.stopPropagation()}}},[e._t("default")],2):e._e()])},[],!1,null,null,null).exports,d=c({name:"Tooltip",props:{event:{type:String,default:"hover"},pointer:{type:Boolean,default:!1},width:{type:Number,default:160}},data:function(){return{value:""}}},function(){var t=this,e=t.$createElement;return(t._self._c||e)("popover",{attrs:{name:"tooltip",pointer:t.pointer,width:t.width,event:t.event},on:{show:function(e){t.value=e.value}}},[t._v("\n  "+t._s(t.value)+"\n")])},[],!1,null,null,null).exports;function f(t,e){var n,o=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)),o}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach(function(e){h(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e){var t,n=e.arg,o=void 0===n?"":n,r=e.modifiers,i=void 0===r?{}:r,s=e.value,a=void 0===s?{}:s,u=Object.keys(i);return{name:"object"===m(a)&&a.name?a.name:o,position:(t=u,(Array.isArray(t)&&0<t.length?t[0]:null)||a.position||"bottom"),value:a}}function g(n,o){function e(e){s.$emit("show:click",v(v({},o),{},{target:n,srcEvent:e})),document.addEventListener("click",function e(t){s.$emit("hide:click",v(v({},o),{},{target:n,srcEvent:t})),document.removeEventListener("click",e)}),e.stopPropagation()}n.addEventListener("click",e),n.$popoverRemoveClickHandlers=function(){n.removeEventListener("click",e)}}function x(t,n){function e(e){s.$emit("show:hover",v(v({},n),{},{target:t,srcEvent:e}))}function o(e){s.$emit("hide:hover",v(v({},n),{},{target:t,srcEvent:e}))}t.addEventListener("mouseenter",e),t.addEventListener("mouseleave",o),t.$popoverRemoveHoverHandlers=function(){t.removeEventListener("mouseenter",e),t.removeEventListener("mouseleave",o)}}t.default={install:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};document.addEventListener("resize",function(e){s.$emit("hide",{srcEvent:e})}),e.component("Popover",l),e.directive("popover",{bind:function(e,t){var n=y(t);g(e,n),x(e,n)},unbind:function(e){e.$popoverRemoveHoverHandlers(),e.$popoverRemoveClickHandlers()}}),n.tooltip&&(n.debug&&console.log("vue-js-popover | tooltip active"),e.component("Tooltip",d))}}},function(e,t,n){"use strict";function u(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],s=i[0],a={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",function(){return v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p={},r=o&&(document.head||document.getElementsByTagName("head")[0]),i=null,s=0,c=!1,a=function(){},l=null,d="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(s,e,t,n){c=t,l=n||{};var a=u(s,e);return h(a),function(e){for(var t=[],n=0;n<a.length;n++){var o=a[n];(r=p[o.id]).refs--,t.push(r)}e?h(a=u(s,e)):a=[];for(var r,n=0;n<t.length;n++){if(0===(r=t[n]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete p[r.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=p[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(m(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var i=[],r=0;r<n.parts.length;r++)i.push(m(n.parts[r]));p[n.id]={id:n.id,refs:1,parts:i}}}}function b(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function m(t){var e,n,o,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return a;r.parentNode.removeChild(r)}return o=f?(e=s++,r=i=i||b(),n=x.bind(null,r,e,!1),x.bind(null,r,e,!0)):(r=b(),n=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);l.ssrId&&e.setAttribute(d,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),function(){r.parentNode.removeChild(r)}),n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}var y,g=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function x(e,t,n,o){var r,i,s=n?"":o.css;e.styleSheet?e.styleSheet.cssText=g(t,s):(r=document.createTextNode(s),(i=e.childNodes)[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r))}}],r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=5);function r(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o,i});
//# sourceMappingURL=index.js.map