!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);Vue.component("steps-widget",{delimiters:["((","))"],props:["steps","primaryColor","secondaryColor"],component:["step-content"],template:'<div><div v-if="!isMobile()" class="step-list col-12"><h1 class="step col-lg-3" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1></div><div v-else class="step-list col-12"><h1 v-if="activeIndex === index" class="step mobile col-lg-12" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1></div><slot></slot><div class="text-right"><button v-if="activeIndex !== 0" class="col-3 btn btn-primary mr-1" @click="prev">Zurück</button><button v-if="activeIndex !== steps.length - 1" class="col-3 btn btn-primary" @click="next">Weiter</button></div></div>',data:function(){return{activeIndex:0,width:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.addEventListener("resize",this.handleResize)},computed:{cssVars:function(){return{"--primaryColor":this.primaryColor,"--secondaryColor":this.secondaryColor}}},methods:{handleResize:function(e){this.width=e.currentTarget.innerWidth},isMobile:function(){return this.width<=768},next:function(){this.activeIndex!==this.steps.length-1&&(this.activeIndex+=1)},setActive:function(e){this.activeIndex=e},prev:function(){0!==this.activeIndex&&(this.activeIndex-=1)},isActive:function(e){return{active:this.activeIndex===e}}}}),Vue.component("step-content",{props:["index"],delimiters:["((","))"],template:'<div v-if="isActiveStep"><slot></slot></div>',computed:{isActiveStep:function(){return this.$parent.activeIndex===this.index}}})},function(e,t,n){var r=n(2),o=n(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},s=(r(o,i),o.locals?o.locals:{});e.exports=s},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function c(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l=n[a]||0,d="".concat(a," ").concat(l);n[a]=l+1;var u=c(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:m(f,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=v||(v=l(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);s[o].references--}for(var i=a(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,'.step{background:var(--primaryColor);font-size:1.6rem;color:white;line-height:3rem;text-align:center;vertical-align:middle;display:inline-block;position:relative;margin-right:20px;padding:0 30px}.step:not(.mobile)::before{content:"";position:absolute;right:-1.5rem;bottom:0;width:0;height:0;border-left:1.5rem solid var(--primaryColor);border-top:1.5rem solid transparent;border-bottom:1.5rem solid transparent}.step:not(.mobile)::after{content:"";position:absolute;left:0;bottom:0;width:0;height:0;border-left:1.6rem solid #f7f7f9;border-top:1.6rem solid transparent;border-bottom:1.6rem solid transparent}.step:not(.mobile):hover{transform:scale(1, 1.2);cursor:pointer;background-color:var(--secondaryColor)}.step:not(.mobile):hover::before{border-left:1.5rem solid var(--secondaryColor)}.step.active{background-color:var(--secondaryColor)}.step.active::before{border-left:1.5rem solid var(--secondaryColor)}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var s,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}}]);
//# sourceMappingURL=steps-component-min.js.map