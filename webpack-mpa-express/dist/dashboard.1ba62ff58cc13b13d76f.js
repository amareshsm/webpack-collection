(()=>{"use strict";var e,t={957:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"intialText","New Button"),a(this,"updatedText","Button clicked")}var t,n;return t=e,(n=[{key:"render",value:function(){var e=this,t=document.createElement("button");t.innerHTML=this.intialText,t.classList.add("btn");var n=document.querySelector("body");t.onclick=function(){t.innerHTML=e.updatedText},n.appendChild(t)}}])&&r(t.prototype,n),e}();var o=n(379),l=n.n(o),c=n(795),s=n.n(c),d=n(695),u=n.n(d),f=n(216),p=n.n(f),h=n(776),b={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=u()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};b.domAPI=s(),b.insertStyleElement=p(),l()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=document.createElement("h1");t.classList.add("heading");var n=document.querySelector("body");t.innerHTML=e,n.appendChild(t)}}])&&v(t.prototype,n),e}();var m=n(486),w=n.n(m);(new i).render(),(new function e(){var t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=function(){var e=document.createElement("div"),t=document.createElement("span");t.innerText="Sample Toast",e.classList.add("toast"),t.classList.add("toast-txt"),e.appendChild(t),document.querySelector("body").appendChild(e)},(t="render")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n}).render(),(new y).render(w().upperCase("dashboard"))},776:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".toast{height:60px;margin:10px 0px;box-shadow:0px 0px 10px 2px #ccc;width:200px;display:flex;justify-content:center;align-items:center;border-radius:4px;font-size:16px;border-top:4.5px solid #289628}",""]);const i=a}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=(t,n,a,i)=>{if(!n){var o=1/0;for(s=0;s<e.length;s++){for(var[n,a,i]=e[s],l=!0,c=0;c<n.length;c++)(!1&i||o>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(l=!1,i<o&&(o=i));l&&(e.splice(s--,1),t=a())}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,a,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={966:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[o,l,c]=n,s=0;for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(c)var d=c(r);for(t&&t(n);s<o.length;s++)i=o[s],r.o(e,i)&&e[i]&&e[i][0](),e[o[s]]=0;return r.O(d)},n=self.webpackChunkwebpack_config=self.webpackChunkwebpack_config||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[906],(()=>r(957)));a=r.O(a)})();