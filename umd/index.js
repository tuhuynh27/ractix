(function () {var w={};Object.defineProperty(w,"__esModule",{value:!0});var d=void 0;w.globalState=d,d={notFromRouter:!1,currentFn:void 0,currentComponent:void 0},w.globalState=d;var j={};Object.defineProperty(j,"__esModule",{value:!0});var x=(A=void 0,j.diffAtts=A);j.addDefaultAtts=x;var y=["checked","selected","value","hide"];function z(t,e){var a=t.filter(e);return a.length<1?null:a[0]}function na(t,e){var a=V(t,!0),r=V(e),$=r.filter(function(t){return!(y.indexOf(t.att)>-1)&&null===z(a,function(e){return t.att===e.att})});X(e,a.filter(function(t){var e=z(r,function(e){return t.att===e.att});return null===e||e.value!==t.value})),Z(e,$)}var A=na;function oa(t,e,a){y.forEach(function(r){!t[r]&&0!==t[r]||a&&"option"===t.tagName.toLowerCase()&&"selected"===r||a&&"select"===t.tagName.toLowerCase()&&"value"===r||e.push(s(r,t[r]))})}function pa(t,e){return Array.prototype.reduce.call(t.attributes,function(t,a){return!(y.indexOf(a.name)<0||e&&"selected"===a.name)||a.name.length>7&&"default"===a.name.slice(0,7)||t.push(s(a.name,a.value)),t},[])}function s(t,e){return{att:t,value:e}}function V(t,e){if(1!==t.nodeType)return[];var a=pa(t,e);return oa(t,a,e),a}function X(t,e){e.forEach(function(e){if("class"===e.att)t.className=e.value;else if("style"===e.att)qa(t,e.value);else{if(e.att in t)try{t[e.att]=e.value,t[e.att]||0===t[e.att]||(t[e.att]=!0)}catch(a){}try{t.setAttribute(e.att,e.value)}catch(a){}}})}function Y(t){1===t.nodeType&&(Array.prototype.forEach.call(t.attributes,function(e){e.name.length<8||"default"!==e.name.slice(0,7)||(X(t,[s(e.name.slice(7).toLowerCase(),e.value)]),Z(t,[s(e.name,e.value)]))}),t.childNodes&&Array.prototype.forEach.call(t.childNodes,function(t){Y(t)}))}function Z(t,e){e.forEach(function(e){if("class"===e.att)t.className="";else{if(e.att in t)try{t[e.att]=""}catch(a){}try{t.removeAttribute(e.att)}catch(a){}}})}function qa(t,e){var a=ra(e),r=Array.prototype.filter.call(t.style,function(e){return null===z(a,function(a){return a.name===e&&a.value===t.style[e]})});sa(t,r),ta(t,a)}function ra(t){return t.split("").reduce(function(t,e){var a=e.indexOf(":");return a&&t.push({name:e.slice(0,a).trim(),value:e.slice(a+1).trim()}),t},[])}function sa(t,e){e.forEach(function(e){t.style[e]=""})}function ta(t,e){e.forEach(function(e){t.style[e.name]=e.value})}j.diffAtts=A,x=Y,j.addDefaultAtts=x;var k={};Object.defineProperty(k,"__esModule",{value:!0});var B=(C=void 0,k.stringToHTML=C);k.patch=B;function ua(e){return new DOMParser().parseFromString(e,"text/html").body}var C=ua;k.stringToHTML=C;var _={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,COMMENT_NODE:8};function D(e,t){var r=Array.prototype.slice.call(t.childNodes),$=Array.prototype.slice.call(e.childNodes),o=r.length-$.length;if(o>0)for(;o>0;o--)r[r.length-o].parentNode.removeChild(r[r.length-o]);function n(e){return e.nodeType===_.TEXT_NODE?"text":e.nodeType===_.COMMENT_NODE?"comment":e.tagName.toLowerCase()}function a(e){return e.childNodes&&e.childNodes.length>0?null:e.textContent}$.forEach(function(e,$){if(!r[$])return x(e),void t.appendChild(e.cloneNode(!0));if(n(e)===n(r[$])){A(e,r[$]);var o=a(e);if(o&&o!==a(r[$])&&(r[$].textContent=o),r[$].childNodes.length>0&&e.childNodes.length<1)r[$].innerHTML="";else{if(r[$].childNodes.length<1&&e.childNodes.length>0){var i=document.createDocumentFragment();return D(e,i),void r[$].appendChild(i)}e.childNodes.length>0&&D(e,r[$])}}else r[$].parentNode.replaceChild(e.cloneNode(!0),r[$])})}B=D,k.patch=B;var E={};Object.defineProperty(E,"__esModule",{value:!0});var h=void 0;E.lifeCycle=h;function va(){var t=[];return{addComponent:function(e,o,n){if(document.querySelector(e)&&!t.find(function(t){return t.component===o})){var r={component:o,onMountedHooks:[],onUnmountedHooks:[]};t.push(r),d.currentComponent=o;var i=o();d.currentComponent=void 0;var a=!1,$=0,c=document.querySelector(e);new MutationObserver(function(e,n){e.forEach(function(e){if(e.removedNodes.length&&!e.addedNodes.length&&e.removedNodes.length===$)return t=t.filter(function(t){return t.component!==o}),n.disconnect(),r.onUnmountedHooks.forEach(function(t){return t()}),void($=0);a||(a=!0,r.onMountedHooks.forEach(function(t){return t()})),$=$+e.addedNodes.length-e.removedNodes.length})}).observe(c,{childList:!0}),function(t){d.notFromRouter=n,d.currentFn=t,t(),d.currentFn=void 0}(function(){var t=C("function"!=typeof i?i:i()),o=document.querySelector(e);B(t,o)})}},addOnMountedHook:function(e,o){t.find(function(t){return t.component===o}).onMountedHooks.push(e)},addOnUnmountedHook:function(e,o){t.find(function(t){return t.component===o}).onUnmountedHooks.push(e)}}}h=va(),E.lifeCycle=h;var m={};Object.defineProperty(m,"__esModule",{value:!0});var F=(f=void 0,m.createRouterComponent=f);m.createComponent=F;function wa(e,o){h.addComponent(e,o)}var f=wa;function xa(e,o){h.addComponent(e,o,!0)}m.createRouterComponent=f,F=xa,m.createComponent=F;var g={};Object.defineProperty(g,"__esModule",{value:!0});var G=(H=void 0,I=g.getParams=H,g.onRouterChange=I);g.useRouter=G;var aa=Object.create(null);function ya(){return aa}var H=ya;function ba(e){window.addEventListener("hashchange",function(){e()})}g.getParams=H;var I=ba;function za(){var e=Object.create(null);function t(){aa={};for(var e=location.hash;e.startsWith("/")||e.startsWith("#");)e=e.substring(1);for(;e.endsWith("/");)e=e.substring(0,e.length-1);return e}function r(t,r){if("function"!=typeof e[t]){for(var o=function(o){if(o.includes(":")){var n=t.split("/"),$=o.split("/"),a=[];if($.forEach(function(e,t){e.startsWith(":")&&a.push(t)}),a.forEach(function(e){n[e]=$[e]}),n.join("/")===o){var u=t.split("/");return a.forEach(function(e){aa[$[e].substring(1)]=u[e]}),f(r,e[o]),{value:void 0}}}if(o.endsWith("**")){var l=o.slice(0,-2);if(t.startsWith(l))return f(r,e[o]),{value:void 0}}},n=0,$=Object.keys(e);n<$.length;n++){var a=o($[n]);if("object"==typeof a)return a.value}"function"!=typeof e["*"]?f(r,function(){return function(){return"<p>404 Not Found</p>"}}):f(r,e["*"])}else f(r,e[t])}return{route:function(t,r){for(;t.startsWith("/");)t=t.substring(1);e[t]=r},render:function(e){ba(function(){document.querySelector(e).innerHTML=null,r(t(),e)}),r(t(),e)}}}g.onRouterChange=I,G=za,g.useRouter=G;var J={};Object.defineProperty(J,"__esModule",{value:!0});var K=void 0;J.useDependency=K;function Aa(){var e=new Set,o=new Set;return I(function(){e.clear()}),{depend:function(){"function"==typeof d.currentFn&&(d.notFromRouter?o.add(d.currentFn):e.add(d.currentFn))},notify:function(){e.forEach(function(e){return e()}),o.forEach(function(e){return e()})}}}K=Aa,J.useDependency=K;var p={};Object.defineProperty(p,"__esModule",{value:!0});var v=(da=void 0,p.useAsyncUpdateQueue=da);function ca(){var e=new Set,u=!0;function $(){e.size&&(e.forEach(function(e){e()}),e.clear(),u=!0)}return{add:function(t){e.has(t)||(e.add(t),u&&(u=!1,setTimeout($,0)))},nextTick:$}}p.asyncUpdateQueue=v;var da=ca;p.useAsyncUpdateQueue=da,v=ca(),p.asyncUpdateQueue=v;var L={};Object.defineProperty(L,"__esModule",{value:!0});var M=void 0;L.createState=M;function Ba(e){var t={get:function(e,$,a){return["[object Object]","[object Array]"].indexOf(Object.prototype.toString.call(e[$]))>-1?new Proxy(e[$],t):(r.depend(),Reflect.get(e,$,a))},set:function(e,t,$,a){var W=Reflect.set(e,t,$,a);return v.add(r.notify),W}},r=K();return new Proxy(e,t)}M=Ba,L.createState=M;var N={};Object.defineProperty(N,"__esModule",{value:!0});var O=void 0;N.onMounted=O;function Ca(e){d.currentComponent&&h.addOnMountedHook(e,d.currentComponent)}O=Ca,N.onMounted=O;var P={};Object.defineProperty(P,"__esModule",{value:!0});var Q=void 0;P.onUnmounted=Q;function Da(e){d.currentComponent&&h.addOnUnmountedHook(e,d.currentComponent)}Q=Da,P.onUnmounted=Q;var q={};Object.defineProperty(q,"__esModule",{value:!0});var R=(S=void 0,q.on=S);function Ea(e,$,o){setTimeout(function(){var r=document.querySelector(e);r&&r.addEventListener($,o,!1)},0)}q.removeOn=R;var S=Ea;function Fa(e,$,o){setTimeout(function(){var r=document.querySelector(e);r&&r.removeEventListener($,o,!1)},0)}q.on=S,R=Fa,q.removeOn=R;var T={};Object.defineProperty(T,"__esModule",{value:!0});var U=void 0;function Ga(e){return new Proxy(e,{get:function(e,r,o){return Reflect.get(e,r,o)},set:function(){throw new Error("Cannot set a readonly object")}})}T.readonly=U,U=Ga,T.readonly=U;var b={};Object.defineProperty(b,"__esModule",{value:!0});var ea=(fa=void 0,ga=b.reactive=fa,ha=b.render=ga,ia=b.onMounted=ha,ja=b.onUnmounted=ia,ka=b.on=ja,la=b.removeOn=ka,ma=b.Router=la,b.nextTick=ma);b.readonly=ea;var fa=M;b.reactive=fa;var ga=F;b.render=ga;var ha=O;b.onMounted=ha;var ia=Q;b.onUnmounted=ia;var ja=S;b.on=ja;var ka=R;b.removeOn=ka;var la={getParams:H,useRouter:G};b.Router=la;var ma=v.nextTick;b.nextTick=ma,ea=U,b.readonly=ea;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}else{this["ReOdd"]=b}})();