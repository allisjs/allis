(self.webpackChunkiscorrect=self.webpackChunkiscorrect||[]).push([[184],{19293:function(t,c,e){"use strict";e.d(c,{i:function(){return U}});var a=e(19632),l=e.n(a),u=e(5574),i=e.n(u),s=e(67294),g=e(12444),I=e.n(g),L=e(72004),N=e.n(L),o=e(25098),r=e.n(o),n=e(31996),d=e.n(n),Y=e(26037),x=e.n(Y),Q=e(9783),b=e.n(Q),h=N()(function v(){I()(this,v)}),m=function(v){d()(M,v);var j=x()(M);function M(f){var y;return I()(this,M),y=j.call(this),b()(r()(y),"el",void 0),y.el=f,y}return N()(M,[{key:"top",get:function(){return this.el.getBoundingClientRect().top}},{key:"outerHeight",get:function(){return this.el.getBoundingClientRect().height}},{key:"scrollTop",get:function(){return this.el.scrollTop}},{key:"scrollHeight",get:function(){return this.el.scrollHeight}},{key:"isScrolledToBottom",value:function(){return this.scrollTop+this.outerHeight>=this.scrollHeight}},{key:"registerScrollEvent",value:function(y){this.el.addEventListener("scroll",y)}},{key:"unregisterScrollEvent",value:function(y){this.el.removeEventListener("scroll",y)}}],[{key:"create",value:function(y){var A=document.querySelector(y);if(!A)throw new Error("element is not found.");return new M(A)}}]),M}(h),R=function(v){d()(M,v);var j=x()(M);function M(){return I()(this,M),j.apply(this,arguments)}return N()(M,[{key:"outerHeight",get:function(){return window.innerHeight}},{key:"scrollTop",get:function(){return document.documentElement.scrollTop}},{key:"scrollHeight",get:function(){return document.documentElement.scrollHeight}},{key:"isScrolledToBottom",value:function(){return this.scrollTop+this.outerHeight>=this.scrollHeight}},{key:"registerScrollEvent",value:function(y){document.addEventListener("scroll",y)}},{key:"unregisterScrollEvent",value:function(y){document.removeEventListener("scroll",y)}}],[{key:"create",value:function(){return new M}}]),M}(h),B=function(){function v(){I()(this,v)}return N()(v,null,[{key:"create",value:function(M){return M?m.create(M):R.create()}}]),v}(),H=function(j){var M=j.sectionRefs,f=j.rootSelector,y=j.offset,A=y===void 0?0:y,p=(0,s.useRef)(null);(0,s.useEffect)(function(){p.current=B.create(f)},[f]);var T=(0,s.useCallback)(function(){return p.current?p.current.isScrolledToBottom():!1},[p]),C=(0,s.useCallback)(function(O){if(!p.current)return!1;var D=p.current.scrollTop,Z=D+p.current.outerHeight,S=O.getBoundingClientRect(),z=p.current instanceof m?D+S.top-p.current.top+A:D+S.top+A,G=z+S.height;return[z<Z,G>D].every(function(F){return F})},[p,A]),P=(0,s.useCallback)(function(){return M.map(function(O){return O.current?C(O.current):!1})},[C,M]),V=(0,s.useState)([]),_=i()(V,2),E=_[0],k=_[1],W=(0,s.useMemo)(function(){return E.findIndex(function(O){return O})},[E]),w=(0,s.useCallback)(function(){var O=T()?[].concat(l()(new Array(M.length-1).fill(!1).map(function(D){return D})),[!0]):P();k(O)},[P,T,M]);return(0,s.useEffect)(function(){return w(),p.current&&p.current.registerScrollEvent(w),function(){p.current&&p.current.unregisterScrollEvent(w)}},[w]),{elementsStatusInViewport:E,currentElementIndexInViewport:W}},U=function(j){var M=j.children,f=j.sectionRefs,y=j.rootSelector,A=j.offset,p=H({sectionRefs:f,rootSelector:y,offset:A}),T=p.elementsStatusInViewport,C=p.currentElementIndexInViewport;return M({elementsStatusInViewport:T,currentElementIndexInViewport:C})}},72678:function(t,c,e){"use strict";e.d(c,{r:function(){return L}});var a=e(67294),l=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(o,r,n)=>r in o?l(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,I=(o,r)=>{for(var n in r||(r={}))i.call(r,n)&&g(o,n,r[n]);if(u)for(var n of u(r))s.call(r,n)&&g(o,n,r[n]);return o};const L=o=>a.createElement("svg",I({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}));var N="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+"},82634:function(t,c,e){"use strict";e.d(c,{r:function(){return L}});var a=e(67294),l=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(o,r,n)=>r in o?l(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,I=(o,r)=>{for(var n in r||(r={}))i.call(r,n)&&g(o,n,r[n]);if(u)for(var n of u(r))s.call(r,n)&&g(o,n,r[n]);return o};const L=o=>a.createElement("svg",I({fillRule:"evenodd",viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 0 1 0 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 0 1 0 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 0 1-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 0 1-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7a.169.169 0 0 1-.06-.07.12.12 0 0 1 0-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7a.199.199 0 0 1-.06-.09.12.12 0 0 1 0-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 0 1 .07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 0 1 .07 0z"}));var N="data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik03OTkuODYgMTY2LjMxYy4wMiAwIC4wNC4wMi4wOC4wNmw1Ny42OSA1Ny43Yy4wNC4wMy4wNS4wNS4wNi4wOGEuMTIuMTIgMCAwIDEgMCAuMDZjMCAuMDMtLjAyLjA1LS4wNi4wOUw1NjkuOTMgNTEybDI4Ny43IDI4Ny43Yy4wNC4wNC4wNS4wNi4wNi4wOWEuMTIuMTIgMCAwIDEgMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMCAxLS4wNyAwYy0uMDMgMC0uMDUtLjAyLS4wOS0uMDZMNTEyIDU2OS45M2wtMjg3LjcgMjg3LjdjLS4wNC4wNC0uMDYuMDUtLjA5LjA2YS4xMi4xMiAwIDAgMS0uMDcgMGMtLjAyIDAtLjA0LS4wMi0uMDgtLjA2bC01Ny42OS01Ny43YS4xNjkuMTY5IDAgMCAxLS4wNi0uMDcuMTIuMTIgMCAwIDEgMC0uMDdjMC0uMDMuMDItLjA1LjA2LS4wOUw0NTQuMDcgNTEybC0yODcuNy0yODcuN2EuMTk5LjE5OSAwIDAgMS0uMDYtLjA5LjEyLjEyIDAgMCAxIDAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMCAxIC4wNyAwYy4wMyAwIC4wNS4wMi4wOS4wNkw1MTIgNDU0LjA3bDI4Ny43LTI4Ny43Yy4wNC0uMDQuMDYtLjA1LjA5LS4wNmEuMTIuMTIgMCAwIDEgLjA3IDB6Ii8+PC9zdmc+"},13373:function(t,c,e){"use strict";e.d(c,{r:function(){return L}});var a=e(67294),l=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(o,r,n)=>r in o?l(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,I=(o,r)=>{for(var n in r||(r={}))i.call(r,n)&&g(o,n,r[n]);if(u)for(var n of u(r))s.call(r,n)&&g(o,n,r[n]);return o};const L=o=>a.createElement("svg",I({viewBox:"0 0 1024 1024"},o),a.createElement("path",{d:"m885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}));var N="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4="},45498:function(t,c,e){"use strict";e.d(c,{r:function(){return L}});var a=e(67294),l=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(o,r,n)=>r in o?l(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,I=(o,r)=>{for(var n in r||(r={}))i.call(r,n)&&g(o,n,r[n]);if(u)for(var n of u(r))s.call(r,n)&&g(o,n,r[n]);return o};const L=o=>a.createElement("svg",I({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}));var N="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg=="},26481:function(t,c,e){"use strict";e.d(c,{r:function(){return L}});var a=e(67294),l=Object.defineProperty,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(o,r,n)=>r in o?l(o,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[r]=n,I=(o,r)=>{for(var n in r||(r={}))i.call(r,n)&&g(o,n,r[n]);if(u)for(var n of u(r))s.call(r,n)&&g(o,n,r[n]);return o};const L=o=>a.createElement("svg",I({viewBox:"64 64 896 896"},o),a.createElement("path",{d:"M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}));var N="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4="},96446:function(t,c,e){var a=e(37923);function l(u){if(Array.isArray(u))return a(u)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},25098:function(t){function c(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},26037:function(t,c,e){var a=e(48374),l=e(21771),u=e(73408);function i(s){var g=l();return function(){var L=a(s),N;if(g){var o=a(this).constructor;N=Reflect.construct(L,arguments,o)}else N=L.apply(this,arguments);return u(this,N)}}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},48374:function(t){function c(e){return t.exports=c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(l){return l.__proto__||Object.getPrototypeOf(l)},t.exports.__esModule=!0,t.exports.default=t.exports,c(e)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},31996:function(t,c,e){var a=e(21314);function l(u,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(i&&i.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),Object.defineProperty(u,"prototype",{writable:!1}),i&&a(u,i)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},21771:function(t){function c(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},96936:function(t){function c(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},88619:function(t){function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},73408:function(t,c,e){var a=e(52677).default,l=e(25098);function u(i,s){if(s&&(a(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return l(i)}t.exports=u,t.exports.__esModule=!0,t.exports.default=t.exports},21314:function(t){function c(e,a){return t.exports=c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(u,i){return u.__proto__=i,u},t.exports.__esModule=!0,t.exports.default=t.exports,c(e,a)}t.exports=c,t.exports.__esModule=!0,t.exports.default=t.exports},19632:function(t,c,e){var a=e(96446),l=e(96936),u=e(96263),i=e(88619);function s(g){return a(g)||l(g)||u(g)||i()}t.exports=s,t.exports.__esModule=!0,t.exports.default=t.exports}}]);
