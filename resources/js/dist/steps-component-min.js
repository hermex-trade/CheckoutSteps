!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);Vue.component("steps-widget",{delimiters:["((","))"],props:["steps"],component:["step-content"],template:'<div><div v-if="!isMobile()" v-on class="step-list col-12"><h1 class="step col-lg-3" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1></div><div v-else class="step-list col-12"><h1 v-if="activeIndex === index" class="step mobile col-lg-12" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1></div><slot></slot><div class="text-right"><button v-if="activeIndex !== 0" class="col-3 btn btn-primary mr-1" @click="prev">Zurück</button><button v-if="activeIndex !== steps.length - 1" class="col-3 btn btn-primary" @click="next">Weiter</button></div></div>',data:function(){return{activeIndex:0,width:window.innerWidth}},mounted:function(){window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.addEventListener("resize",this.handleResize)},methods:{handleResize:function(e){this.width=e.currentTarget.innerWidth},isMobile:function(){return this.width<=768},next:function(){this.activeIndex!==this.steps.length-1&&(this.activeIndex+=1)},setActive:function(e){this.activeIndex=e},prev:function(){0!==this.activeIndex&&(this.activeIndex-=1)},isActive:function(e){return{active:this.activeIndex===e}}}}),Vue.component("step-content",{props:["index"],delimiters:["((","))"],template:'<div v-if="isActiveStep"><slot></slot></div>',computed:{isActiveStep:function(){return this.$parent.activeIndex===this.index}}})},function(e,t,n){var i=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},s=(i(r,o),r.locals?r.locals:{});e.exports=s},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function c(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],l=n[a]||0,d="".concat(a," ").concat(l);n[a]=l+1;var u=c(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:b(f,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,h=0;function b(e,t){var n,i,r;if(t.singleton){var o=h++;n=v||(v=l(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=l(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=c(n[i]);s[r].references--}for(var o=a(e,t),l=0;l<n.length;l++){var d=c(n[l]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=o}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,'.step{background:black;font-size:1.6rem;color:white;line-height:3rem;text-align:center;vertical-align:middle;display:inline-block;position:relative;margin-right:30px;padding:0px 40px}.step:not(.mobile)::before{content:"";position:absolute;right:-1.4rem;bottom:0;width:0;height:0;border-left:1.4rem solid black;border-top:1.4rem solid transparent;border-bottom:1.4rem solid transparent}.step:not(.mobile)::before.active{border-left:1.4rem solid #94ba06}.step:not(.mobile)::after{content:"";position:absolute;left:0;bottom:0;width:0;height:0;border-left:1.6rem solid white;border-top:1.6rem solid transparent;border-bottom:1.6rem solid transparent}.step:not(.mobile):hover{transform:scale(1, 1.2);cursor:pointer;background-color:#94ba06}.step:not(.mobile):hover::before{border-left:1.5rem solid #94ba06}.step.active{background-color:#94ba06}@media only screen and (min-width: 992px){.step:not(:last-child){border-right:2px solid black}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var s,c,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var a=[].concat(e[c]);i&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}}]);
//# sourceMappingURL=steps-component-min.js.map