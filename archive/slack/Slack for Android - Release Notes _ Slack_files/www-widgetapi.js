(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=la;
function u(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype}
function ra(){this.u=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.v=0;this.I=this.j=null}
function sa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ra.prototype.A=function(a){this.i=a};
function ta(a,b){a.j={Ma:b,Qa:!0};a.h=a.v||a.m}
ra.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
ra.prototype.o=function(a){this.h=a};
function ua(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function va(a,b){a.h=b;a.v=0}
function wa(a){a.v=0;var b=a.j.Ma;a.j=null;return b}
function xa(a){a.I=[a.j];a.v=0;a.m=0}
function ya(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.Qa?a.h=a.v||a.m:void 0!=b.o&&a.m<b.o?(a.h=b.o,a.j=null):a.h=a.m:a.h=0}
function za(a){this.h=new ra;this.i=a}
function Aa(a,b){sa(a.h);var c=a.h.l;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.u=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Ca(a)}a.h.l=null;d.call(a.h,f);return Ca(a)}
function Ca(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.u=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.u=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Qa)throw b.Ma;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){sa(a.h);a.h.l?b=Ba(a,a.h.l.next,b,a.h.A):(a.h.A(b),b=Ca(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Ba(a,a.h.l["throw"],b,a.h.A):(ta(a.h,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ea(new Da(new za(a)))}
function Ha(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.wa),reject:g(this.m)}};
b.prototype.wa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.cb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.la(g):this.v(g)}};
b.prototype.la=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.eb(h,g):this.v(g)};
b.prototype.m=function(g){this.A(2,g)};
b.prototype.v=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.bb();this.I()};
b.prototype.bb=function(){var g=this;e(function(){if(g.O()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.O=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.cb=function(g){var h=this.l();g.na(h.resolve,h.reject)};
b.prototype.eb=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,p){return"function"==typeof v?function(z){try{l(v(z))}catch(y){n(y)}}:p}
var l,n,q=new b(function(v,p){l=v;n=p});
this.na(k(g,l),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.na=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),n=l.next();!n.done;n=l.next())d(n.value).na(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(z){return function(y){v[z]=y;p--;0==p&&l(v)}}
var v=[],p=0;do v.push(void 0),p++,d(k.value).na(q(v.length-1),n),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ha(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&ha(h.data_,l))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:h,entry:q}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(){}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua=Ra:Ua=Sa;return Ua.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Nb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.gb=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Za(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var $a=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){b=$a(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function cb(a){return Array.prototype.concat.apply([],arguments)}
function eb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function fb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function gb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hb(a){var b=ib,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=qb(a[c]);return b}
var rb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<rb.length;f++)c=rb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var tb;function ub(){}
function vb(a){return new ub(wb,a)}
var wb={};vb("");var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Fb().indexOf(a)}
;function Gb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Hb={};function Ib(a){this.h=Hb===Hb?a:""}
Ib.prototype.toString=function(){return this.h.toString()};var Jb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kb(a){return a?decodeURI(a):a}
function Lb(a){return Kb(a.match(Jb)[3]||null)}
function Mb(a){var b=a.match(Jb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Nb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Nb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ob(a){var b=[],c;for(c in a)Nb(c,a[c],b);return b.join("&")}
var Tb=/#|$/;function Ub(a,b){var c=a.search(Tb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function Vb(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function Wb(a){Wb[" "](a);return a}
Wb[" "]=Ka;var Xb=E("Opera"),Yb=E("Trident")||E("MSIE"),Zb=E("Edge"),$b=E("Gecko")&&!(-1!=Fb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),ac=-1!=Fb().toLowerCase().indexOf("webkit")&&!E("Edge");function bc(){var a=A.document;return a?a.documentMode:void 0}
var cc;a:{var dc="",ec=function(){var a=Fb();if($b)return/rv:([^\);]+)(\)|;)/.exec(a);if(Zb)return/Edge\/([\d\.]+)/.exec(a);if(Yb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ac)return/WebKit\/(\S+)/.exec(a);if(Xb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ec&&(dc=ec?ec[1]:"");if(Yb){var fc=bc();if(null!=fc&&fc>parseFloat(dc)){cc=String(fc);break a}}cc=dc}var gc=cc,hc;if(A.document&&Yb){var jc=bc();hc=jc?jc:parseInt(gc,10)||void 0}else hc=void 0;var kc=hc;var lc=Vb()||E("iPod"),mc=E("iPad");!E("Android")||Gb();Gb();var nc=E("Safari")&&!(Gb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(Vb()||E("iPad")||E("iPod"));var oc={},pc=null;
function qc(a,b){Ma(a);void 0===b&&(b=0);if(!pc){pc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));oc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===pc[h]&&(pc[h]=g)}}}b=oc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var uc="function"===typeof Uint8Array;var vc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function wc(a,b){Object.isFrozen(a)||(vc?a[vc]|=b:void 0!==a.ra?a.ra|=b:Object.defineProperties(a,{ra:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function xc(a){var b;vc?b=a[vc]:b=a.ra;return null==b?0:b}
function yc(a){wc(a,1);return a}
function zc(a){return Array.isArray(a)?!!(xc(a)&2):!1}
function Ac(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");wc(a,2)}
;function Bc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Cc,Dc=Object.freeze(yc([]));function Ec(a){if(zc(a.C))throw Error("Cannot mutate an immutable Message");}
var Fc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Gc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Hc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&uc&&null!=a&&a instanceof Uint8Array)return qc(a)}return a}
;function Ic(a,b){b=void 0===b?Jc:b;return Kc(a,b)}
function Lc(a,b){if(null!=a){if(Array.isArray(a))a=Kc(a,b);else if(Bc(a)){var c={},d;for(d in a)c[d]=Lc(a[d],b);a=c}else a=b(a);return a}}
function Kc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Lc(c[d],b);Array.isArray(a)&&xc(a)&1&&yc(c);return c}
function Mc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Hc(a);return Array.isArray(a)?Ic(a,Mc):a}
function Jc(a){return uc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Nc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.C[b+a.j]}
function G(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Ec(a);b<a.l&&!d?a.C[b+a.j]=c:(a.i||(a.i=a.C[a.l+a.j]={}))[b]=c;return a}
function Oc(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=Nc(a,b,d);null==e&&(e=Dc);if(zc(a.C))c&&(Ac(e),Object.freeze(e));else if(e===Dc||zc(e))e=yc(e.slice()),G(a,b,e,d);return e}
function Pc(a,b,c,d){Ec(a);(c=Qc(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),G(a,c,void 0));return G(a,b,d)}
function Qc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Nc(a,e)&&(0!==c&&G(a,c,void 0,!1,!0),c=e)}return c}
function Rc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Nc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);zc(a.C)&&Ac(b.C);return a.h[c]=b}
function Sc(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=zc(a.C),f=a.h[c];if(!f){d=Oc(a,c,!0,d);f=[];e=e||zc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Ac(f[g].C);e&&(Ac(f),Object.freeze(f));a.h[c]=f}return f}
function H(a,b,c,d){d=void 0===d?!1:d;Ec(a);a.h||(a.h={});var e=c?c.C:c;a.h[b]=c;return G(a,b,e,d)}
function Tc(a,b,c,d){Ec(a);a.h||(a.h={});var e=d?d.C:d;a.h[b]=d;Pc(a,b,c,e)}
function Uc(a,b,c,d){var e=void 0===e?!1:e;Ec(a);e=Sc(a,c,b,e);c=d?d:new c;a=Oc(a,b);e.push(c);a.push(c.C)}
function Vc(a,b){a=Nc(a,b);return null==a?"":a}
;function Wc(a){A.setTimeout(function(){throw a;},0)}
;function Xc(a,b,c){a||(a=Yc);Yc=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.C=a;a:{d=this.C.length;a=d-1;if(d&&(d=this.C[a],Bc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.C[a])?Array.isArray(d)&&yc(d):this.C[a]=Dc;else{d=this.i||(this.i=this.C[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
yc(e):d[a]=Dc}}
Xc.prototype.toJSON=function(){var a=this.C;return Cc?a:Ic(a,Mc)};
function Zc(a){Cc=!0;try{return JSON.stringify(a.toJSON(),$c)}finally{Cc=!1}}
Xc.prototype.clone=function(){var a=Ic(this.C);Yc=a;a=new this.constructor(a);Yc=null;ad(a,this);return a};
Xc.prototype.toString=function(){return this.C.toString()};
function $c(a,b){return Hc(b)}
function ad(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Sc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ad(f[g],e[g])}else(f=Rc(a,e.constructor,g,void 0,f))&&ad(f,e)}}}}
var Yc;function bd(){Xc.apply(this,arguments)}
u(bd,Xc);if(Fc){var cd={};Object.defineProperties(bd,(cd[Symbol.hasInstance]=Gc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),cd))};function dd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;Ec(a);if(b){var e=yc([]);for(var f=0;f<b.length;f++)e[f]=b[f].C;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Dc;a=G(a,c,e,d)}else a=H(a,c,b,!0);return a}
;function I(){bd.apply(this,arguments)}
u(I,bd);if(Fc){var ed={};Object.defineProperties(I,(ed[Symbol.hasInstance]=Gc(Object[Symbol.hasInstance]),ed))};var fd=window;vb("csi.gstatic.com");vb("googleads.g.doubleclick.net");vb("partner.googleadservices.com");vb("pubads.g.doubleclick.net");vb("securepubads.g.doubleclick.net");vb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function gd(a,b){this.width=a;this.height=b}
m=gd.prototype;m.clone=function(){return new gd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function hd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function id(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function jd(a){var b=kd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ld(){var a=[];jd(function(b){a.push(b)});
return a}
var kd={vb:"allow-forms",wb:"allow-modals",xb:"allow-orientation-lock",yb:"allow-pointer-lock",zb:"allow-popups",Ab:"allow-popups-to-escape-sandbox",Bb:"allow-presentation",Cb:"allow-same-origin",Db:"allow-scripts",Eb:"allow-top-navigation",Fb:"allow-top-navigation-by-user-activation"},md=Za(function(){return ld()});
function nd(){var a=od(),b={};D(md(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function od(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var pd=(new Date).getTime();function qd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function rd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var v=g,p=0;64>p;p+=4)v[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=v[p-3]^v[p-8]^v[p-14]^v[p-16],v[p]=(q<<1|q>>>31)&4294967295;q=e[0];var z=e[1],y=e[2],F=e[3],M=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var J=F^z&(y^F);var O=1518500249}else J=z^y^F,O=1859775393;else 60>p?(J=z&y|F&(z|y),O=2400959708):(J=z^y^F,O=3395469782);J=((q<<5|q>>>27)&4294967295)+J+M+O+v[p]&4294967295;M=F;F=y;y=(z<<30|z>>>2)&4294967295;z=q;q=J}e[0]=e[0]+q&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+M&4294967295}
function c(q,v){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],z=0,y=q.length;z<y;++z)p.push(q.charCodeAt(z));q=p}v||(v=q.length);p=0;if(0==l)for(;p+64<v;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<v;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<v;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],v=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=v&255,v>>>=8;b(f);for(p=v=0;5>p;p++)for(var z=24;0<=z;z-=8)q[v++]=e[p]>>z&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,ib:function(){for(var q=d(),v="",p=0;p<q.length;p++)v+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return v}}}
;function sd(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,wd(qd(d),a,c||null)].join(" "):null}
function wd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),xd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=xd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function xd(a){var b=rd();b.update(a);return b.ib().toLowerCase()}
;var yd={};function zd(a){this.h=a||{cookie:""}}
m=zd.prototype;m.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ba:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Sb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ba}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ba:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ad=new zd("undefined"==typeof document?null:document);function Bd(a){return!!yd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Cd(a,b,c,d){(a=A[a])||(a=(new zd(document)).get(b));return a?sd(a,c,d):null}
function Dd(a){var b=void 0===b?!1:b;var c=qd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Bd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new zd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Bd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new zd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?sd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Bd(b)&&((b=Cd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Cd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Ed(a){if(Fc){var b={};Object.defineProperties(a,(b[Symbol.hasInstance]=Gc(Object[Symbol.hasInstance]),b))}}
;function Fd(){this.l=this.l;this.v=this.v}
Fd.prototype.l=!1;Fd.prototype.dispose=function(){this.l||(this.l=!0,this.fa())};
Fd.prototype.fa=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function Gd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Gd.prototype.stopPropagation=function(){this.j=!0};
Gd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Hd(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Id(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Jd[c])c=Jd[c];else{c=String(c);if(!Jd[c]){var f=/function\s+([^\(]+)/m.exec(c);Jd[c]=f?f[1]:"[Anonymous]"}c=Jd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Id(a,b){b||(b={});b[Kd(a)]=!0;var c=a.stack||"";(a=a.gb)&&!b[Kd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Id(a,b));return c}
function Kd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Jd={};var Ld=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",Ka,b),A.removeEventListener("test",Ka,b)}catch(c){}return a}();function Md(a,b){Gd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Va(Md,Gd);var Nd={2:"touch",3:"pen",4:"mouse"};
Md.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if($b){a:{try{Wb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Nd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Md.N.preventDefault.call(this)};
Md.prototype.stopPropagation=function(){Md.N.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Md.prototype.preventDefault=function(){Md.N.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Od="closure_listenable_"+(1E6*Math.random()|0);var Pd=0;function Qd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qa=e;this.key=++Pd;this.ha=this.ma=!1}
function Rd(a){a.ha=!0;a.listener=null;a.proxy=null;a.src=null;a.qa=null}
;function Sd(a){this.src=a;this.listeners={};this.h=0}
Sd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Td(a,b,d,e);-1<g?(b=a[g],c||(b.ma=!1)):(b=new Qd(b,this.src,f,!!d,e),b.ma=c,a.push(b));return b};
Sd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Td(e,b,c,d);return-1<b?(Rd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ud(a,b){var c=b.type;c in a.listeners&&bb(a.listeners[c],b)&&(Rd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Td(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ha&&f.listener==b&&f.capture==!!c&&f.qa==d)return e}return-1}
;var Vd="closure_lm_"+(1E6*Math.random()|0),Wd={},Xd=0;function Yd(a,b,c,d,e){if(d&&d.once)Zd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Yd(a,b[f],c,d,e);else c=$d(c),a&&a[Od]?a.R(b,c,Na(d)?!!d.capture:!!d,e):ae(a,b,c,!1,d,e)}
function ae(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=be(a);h||(a[Vd]=h=new Sd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ce();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ld||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(de(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Xd++}}
function ce(){function a(c){return b.call(a.src,a.listener,c)}
var b=ee;return a}
function Zd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Zd(a,b[f],c,d,e);else c=$d(c),a&&a[Od]?a.j.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):ae(a,b,c,!0,d,e)}
function fe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)fe(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=$d(c),a&&a[Od])?a.j.remove(String(b),c,d,e):a&&(a=be(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Td(b,c,d,e)),(c=-1<a?b[a]:null)&&ge(c))}
function ge(a){if("number"!==typeof a&&a&&!a.ha){var b=a.src;if(b&&b[Od])Ud(b.j,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(de(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Xd--;(c=be(b))?(Ud(c,a),0==c.h&&(c.src=null,b[Vd]=null)):Rd(a)}}}
function de(a){return a in Wd?Wd[a]:Wd[a]="on"+a}
function ee(a,b){if(a.ha)a=!0;else{b=new Md(b,this);var c=a.listener,d=a.qa||a.src;a.ma&&ge(a);a=c.call(d,b)}return a}
function be(a){a=a[Vd];return a instanceof Sd?a:null}
var he="__closure_events_fn_"+(1E9*Math.random()>>>0);function $d(a){if("function"===typeof a)return a;a[he]||(a[he]=function(b){return a.handleEvent(b)});
return a[he]}
;function K(){Fd.call(this);this.j=new Sd(this);this.wa=this;this.I=null}
Va(K,Fd);K.prototype[Od]=!0;K.prototype.addEventListener=function(a,b,c,d){Yd(this,a,b,c,d)};
K.prototype.removeEventListener=function(a,b,c,d){fe(this,a,b,c,d)};
function ie(a,b){var c=a.I;if(c){var d=[];for(var e=1;c;c=c.I)d.push(c),++e}a=a.wa;c=b.type||b;"string"===typeof b?b=new Gd(b,a):b instanceof Gd?b.target=b.target||a:(e=b,b=new Gd(c,a),sb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=je(g,c,!0,b)&&e}b.j||(g=b.h=a,e=je(g,c,!0,b)&&e,b.j||(e=je(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=je(g,c,!1,b)&&e}
K.prototype.fa=function(){K.N.fa.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Rd(d[e]);delete a.listeners[c];a.h--}}this.I=null};
K.prototype.R=function(a,b,c,d){return this.j.add(String(a),b,!1,c,d)};
function je(a,b,c,d){b=a.j.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ha&&g.capture==c){var h=g.listener,k=g.qa||g.src;g.ma&&Ud(a.j,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ke(a){K.call(this);var b=this;this.A=this.i=0;this.J=null!=a?a:{L:function(e,f){return setTimeout(e,f)},
Y:clearTimeout};var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,le(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||me(this)}
u(ke,K);function ne(){var a=oe;ke.h||(ke.h=new ke(a));return ke.h}
ke.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.J.Y(this.A);delete ke.h};
ke.prototype.F=function(){return this.h};
function me(a){a.A=a.J.L(function(){var b;return x(function(c){if(1==c.h)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.o(3):w(c,le(a),3):w(c,le(a),3);me(a);c.h=0})},3E4)}
function le(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ua(h,2,3),d&&(a.i=a.J.L(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:xa(h);a.u=void 0;a.i&&(a.J.Y(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?ie(a,"networkstatus-online"):ie(a,"networkstatus-offline"));c(g);ya(h);break;case 2:wa(h),g=!1,h.o(3)}})})}
;function pe(){this.data_=[];this.h=-1}
pe.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
pe.prototype.get=function(a){return!!this.data_[a]};
function qe(a){-1==a.h&&(a.h=ab(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function re(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
re.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function se(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var te;function ue(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=hd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ja;c.Ja=null;e()}};
return function(e){d.next={Ja:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function ve(){this.i=this.h=null}
ve.prototype.add=function(a,b){var c=we.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
ve.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var we=new re(function(){return new xe},function(a){return a.reset()});
function xe(){this.next=this.scope=this.h=null}
xe.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
xe.prototype.reset=function(){this.next=this.scope=this.h=null};function ye(a,b){ze||Ae();Be||(ze(),Be=!0);Ce.add(a,b)}
var ze;function Ae(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);ze=function(){a.then(De)}}else ze=function(){var b=De;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!E("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(te||(te=ue()),te(b)):A.setImmediate(b)}}
var Be=!1,Ce=new ve;function De(){for(var a;a=Ce.remove();){try{a.h.call(a.scope)}catch(b){Wc(b)}se(we,a)}Be=!1}
;function Fe(a,b){this.h=a[A.Symbol.iterator]();this.i=b}
Fe.prototype[Symbol.iterator]=function(){return this};
Fe.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ge(a,b){return new Fe(a,b)}
;function He(){this.blockSize=-1}
;function Ie(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.v=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Va(Ie,He);Ie.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Je(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ie.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Je(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Je(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Je(this,e);f=0;break}}this.i=f;this.l+=b}};
Ie.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Je(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};var Ke="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function Le(){}
Le.prototype.h=function(){throw Ke;};
Le.prototype.next=function(){return Me};
var Me={done:!0,value:void 0};function Ne(a){return{value:a,done:!1}}
function Oe(a){if(a.done)throw Ke;return a.value}
Le.prototype.K=function(){return this};function Pe(a){if(a instanceof Qe||a instanceof Re||a instanceof Se)return a;if("function"==typeof a.next)return new Qe(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Qe(function(){return a[Symbol.iterator]()});
if("function"==typeof a.K)return new Qe(function(){return a.K()});
throw Error("Not an iterator or iterable.");}
function Qe(a){this.h=a}
Qe.prototype.K=function(){return new Re(this.h())};
Qe.prototype[Symbol.iterator]=function(){return new Se(this.h())};
Qe.prototype.j=function(){return new Se(this.h())};
function Re(a){this.i=a}
u(Re,Le);Re.prototype.h=function(){var a=this.i.next();if(a.done)throw Ke;return a.value};
Re.prototype.next=function(){return this.i.next()};
Re.prototype[Symbol.iterator]=function(){return new Se(this.i)};
Re.prototype.j=function(){return new Se(this.i)};
function Se(a){Qe.call(this,function(){return a});
this.i=a}
u(Se,Qe);Se.prototype.next=function(){return this.i.next()};function Te(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Te)for(c=Ue(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ue(a){Ve(a);return a.h.concat()}
m=Te.prototype;m.has=function(a){return We(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Xe;Ve(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Xe(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.j=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return We(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Ve(this),!0):!1};
function Ve(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];We(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],We(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return We(this.i,a)?this.i[a]:b};
m.set=function(a,b){We(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Ue(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Te(this)};
m.keys=function(){return Pe(this.K(!0)).j()};
m.values=function(){return Pe(this.K(!1)).j()};
m.entries=function(){var a=this;return Ge(this.keys(),function(b){return[b,a.get(b)]})};
m.K=function(a){Ve(this);var b=0,c=this.j,d=this,e=new Le;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Me;var g=d.h[b++];return Ne(a?g:d.i[g])};
var f=e.next;e.h=function(){return Oe(f.call(e))};
return e};
function We(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Ye=A.JSON.stringify;function Ze(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function $e(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.v=!1;if(a!=Ka)try{var b=this;a.call(void 0,function(c){af(b,2,c)},function(c){af(b,3,c)})}catch(c){af(this,3,c)}}
function bf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
bf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var cf=new re(function(){return new bf},function(a){a.reset()});
function df(a,b,c){var d=cf.get();d.i=a;d.onRejected=b;d.context=c;return d}
$e.prototype.then=function(a,b,c){return ef(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
$e.prototype.$goog_Thenable=!0;$e.prototype.cancel=function(a){if(0==this.h){var b=new ff(a);ye(function(){gf(this,b)},this)}};
function gf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?gf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):hf(c),jf(c,e,3,b)))}a.j=null}else af(a,3,b)}
function kf(a,b){a.i||2!=a.h&&3!=a.h||lf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function ef(a,b,c,d){var e=df(null,null,null);e.h=new $e(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ff?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;kf(a,e);return e.h}
$e.prototype.I=function(a){this.h=0;af(this,2,a)};
$e.prototype.O=function(a){this.h=0;af(this,3,a)};
function af(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.I,f=a.O;if(d instanceof $e){kf(d,df(e||Ka,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if("function"===typeof k){mf(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,lf(a),3!=b||c instanceof ff||nf(a,c))}}
function mf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function lf(a){a.v||(a.v=!0,ye(a.A,a))}
function hf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
$e.prototype.A=function(){for(var a;a=hf(this);)jf(this,a,this.h,this.u);this.v=!1};
function jf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,of(b,c,d);else try{b.j?b.i.call(b.context):of(b,c,d)}catch(e){pf.call(null,e)}se(cf,b)}
function of(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function nf(a,b){a.m=!0;ye(function(){a.m&&pf.call(null,b)})}
var pf=Wc;function ff(a){Xa.call(this,a)}
Va(ff,Xa);ff.prototype.name="cancel";function L(a){Fd.call(this);this.u=1;this.j=[];this.m=0;this.h=[];this.i={};this.A=!!a}
Va(L,Fd);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
function qf(a,b,c){var d=rf;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.ka(a)}}
m.ka=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.m?(this.j.push(a),this.h[a+1]=Ka):(c&&bb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ca=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Pf(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.j.length&&0==this.m)for(;c=this.j.pop();)this.ka(c)}}return 0!=e}return!1};
function Pf(a,b,c){ye(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.ka,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.fa=function(){L.N.fa.call(this);this.clear();this.j.length=0};function Qf(a){this.h=a}
Qf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Ye(b))};
Qf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qf.prototype.remove=function(a){this.h.remove(a)};function Rf(a){this.h=a}
Va(Rf,Qf);function Sf(a){this.data=a}
function Tf(a){return void 0===a||a instanceof Sf?a:new Sf(a)}
Rf.prototype.set=function(a,b){Rf.N.set.call(this,a,Tf(b))};
Rf.prototype.i=function(a){a=Rf.N.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Uf(a){this.h=a}
Va(Uf,Rf);Uf.prototype.set=function(a,b,c){if(b=Tf(b)){if(c){if(c<Date.now()){Uf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Uf.N.set.call(this,a,b)};
Uf.prototype.i=function(a){var b=Uf.N.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Uf.prototype.remove.call(this,a);else return b}};function Vf(){}
;function Wf(){}
Va(Wf,Vf);Wf.prototype[Symbol.iterator]=function(){return Pe(this.K(!0)).j()};
Wf.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xf(a){this.h=a}
Va(Xf,Wf);m=Xf.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.K=function(a){var b=0,c=this.h,d=new Le;d.next=function(){if(b>=c.length)return Me;var f=c.key(b++);if(a)return Ne(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Ne(f)};
var e=d.next;d.h=function(){return Oe(e.call(d))};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Yf(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Va(Yf,Xf);function Zf(a,b){this.i=a;this.h=null;var c;if(c=Yb)c=!(9<=Number(kc));if(c){$f||($f=new Te);this.h=$f.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),$f.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Va(Zf,Wf);var ag={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},$f=null;function bg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ag[b]})}
m=Zf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(bg(a),b);cg(this)};
m.get=function(a){a=this.h.getAttribute(bg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(bg(a));cg(this)};
m.K=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Le;d.next=function(){if(b>=c.length)return Me;var f=c[b++];if(a)return Ne(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Ne(f)};
var e=d.next;d.h=function(){return Oe(e.call(d))};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);cg(this)};
function cg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function dg(a,b){this.i=a;this.h=b+"::"}
Va(dg,Wf);dg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
dg.prototype.get=function(a){return this.i.get(this.h+a)};
dg.prototype.remove=function(a){this.i.remove(this.h+a)};
dg.prototype.K=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Le;d.next=function(){var f=b.next();if(f.done)return f;for(f=f.value;f.substr(0,c.h.length)!=c.h;){f=b.next();if(f.done)return f;f=f.value}return Ne(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.h=function(){return Oe(e.call(d))};
return d};function eg(a){I.call(this,a)}
u(eg,I);eg.prototype.getKey=function(){return Nc(this,1)};
eg.prototype.W=function(){return Nc(this,2===Qc(this,fg)?2:-1)};
eg.prototype.setValue=function(a){return Pc(this,2,fg,a)};
var fg=[2,3,4,5,6];function gg(a){I.call(this,a)}
u(gg,I);function hg(a){I.call(this,a)}
u(hg,I);function ig(a){I.call(this,a)}
u(ig,I);function jg(a){I.call(this,a,-1,kg)}
u(jg,I);jg.prototype.getPlayerType=function(){return Nc(this,36)};
jg.prototype.setHomeGroupInfo=function(a){return H(this,81,a)};
var kg=[9,66,24,32,86,100,101];function lg(a){I.call(this,a,-1,mg)}
u(lg,I);var mg=[15,26,28];function ng(a){I.call(this,a)}
u(ng,I);ng.prototype.setToken=function(a){return G(this,2,a)};function og(a){I.call(this,a,-1,pg)}
u(og,I);og.prototype.setSafetyMode=function(a){return G(this,5,a)};
var pg=[12];function qg(a){I.call(this,a,-1,rg)}
u(qg,I);var rg=[12];function sg(a){I.call(this,a,-1,tg)}
u(sg,I);function ug(a){I.call(this,a)}
u(ug,I);ug.prototype.getKey=function(){return Vc(this,1)};
ug.prototype.W=function(){return Vc(this,2)};
ug.prototype.setValue=function(a){return G(this,2,a)};
var tg=[4,5];function vg(a){I.call(this,a)}
u(vg,I);function wg(a){I.call(this,a)}
u(wg,I);var xg=[2,3];function yg(a){I.call(this,a)}
u(yg,I);function zg(a){I.call(this,a)}
u(zg,I);function Ag(a){I.call(this,a)}
u(Ag,I);function Bg(a){I.call(this,a,-1,Cg)}
u(Bg,I);var Cg=[10,17];function Dg(a){I.call(this,a)}
u(Dg,I);function Eg(a){I.call(this,a)}
u(Eg,I);function Fg(a){I.call(this,a)}
u(Fg,I);function Gg(a){I.call(this,a,428)}
u(Gg,I);
var Hg=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,423,424,425,426,427,117];function Ig(a){I.call(this,a)}
u(Ig,I);function Jg(a){I.call(this,a)}
u(Jg,I);Jg.prototype.setVideoId=function(a){return Pc(this,1,Kg,a)};
Jg.prototype.getPlaylistId=function(){return Nc(this,2===Qc(this,Kg)?2:-1)};
var Kg=[1,2];function Lg(a){I.call(this,a,-1,Mg)}
u(Lg,I);var Mg=[3];function Ng(a){I.call(this,a,1)}
u(Ng,I);function Og(a){I.call(this,a)}
u(Og,I);var Pg;Pg=new function(a,b){this.h=a;this.fieldName=b;this.isRepeated=0;this.i=dd}(406606992,{Pb:0},Og);function Qg(){Og.apply(this,arguments)}
u(Qg,Og);Ed(Qg);var Rg=A.window,Sg,Tg,Ug=(null==Rg?void 0:null==(Sg=Rg.yt)?void 0:Sg.config_)||(null==Rg?void 0:null==(Tg=Rg.ytcfg)?void 0:Tg.data_)||{},Vg,Wg=(null==Rg?void 0:null==(Vg=Rg.ytcfg)?void 0:Vg.obfuscatedData_)||[];function Xg(){Ng.apply(this,arguments)}
u(Xg,Ng);Ed(Xg);var Yg=new Xg(Wg),Zg=Ug.EXPERIMENT_FLAGS;if(!Zg||!Zg.jspb_i18n_extension){var $g=new Qg;Pg.i(Yg,$g)}C("yt.config_",Ug);C("yt.configJspb_",Wg);function ah(){var a=arguments;1<a.length?Ug[a[0]]=a[1]:1===a.length&&Object.assign(Ug,a[0])}
function N(a,b){return a in Ug?Ug[a]:b}
function bh(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0)}
function ch(){var a=Ug.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var dh=[];function eh(a){dh.forEach(function(b){return b(a)})}
function fh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){gh(b)}}:a}
function gh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=N("ERRORS",[]),e.push([a,"ERROR",b,c,d]),ah("ERRORS",e));eh(a)}
function hh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=N("ERRORS",[]),e.push([a,"WARNING",b,c,d]),ah("ERRORS",e))}
;var ih=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++ih});var jh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function kh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in jh||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
kh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
kh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
kh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ib=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",ib);var lh=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",lh);
function mh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&jb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function nh(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in ib){var c=ib[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?oh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ib[b]}}))}
var oh=Za(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ph(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=mh(a,b,c,d);if(!e){e=++lh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new kh(h);if(!id(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new kh(h);
h.currentTarget=a;return c.call(a,h)};
g=fh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),oh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ib[e]=[a,b,c,g,d]}}}
;function qh(a,b){"function"===typeof a&&(a=fh(a));return window.setTimeout(a,b)}
function rh(a){"function"===typeof a&&(a=fh(a));return window.setInterval(a,250)}
;var sh=/^[\w.]*$/,th={q:!0,search_query:!0};function uh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=vh(f[0]||""),h=vh(f[1]||"");g in c?Array.isArray(c[g])?fb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],n=String(uh);k.args=[{key:l,value:f[1],query:a,method:wh==n?"unchanged":n}];th.hasOwnProperty(l)||hh(k)}}return c}
var wh=String(uh);function xh(a){var b=[];gb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function yh(a){"?"==a.charAt(0)&&(a=a.substr(1));return uh(a,"&")}
function zh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=yh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ob(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Ah(a){if(!b)var b=window.location.href;var c=a.match(Jb)[1]||null,d=Lb(a);c&&d?(a=a.match(Jb),b=b.match(Jb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Lb(b)==d&&(Number(b.match(Jb)[4]||null)||null)==(Number(a.match(Jb)[4]||null)||null):!0;return a}
function vh(a){return a&&a.match(sh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function P(a){a=Bh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Ch(a,b){a=Bh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Bh(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function Dh(){var a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=N("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Eh(a){var b=Fh;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=pd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ka){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?fd:g;try{var h=g.history.length}catch(ka){h=0}e.u_his=h;var k;e.u_h=null==(k=fd.screen)?void 0:k.height;var l;e.u_w=null==(l=fd.screen)?void 0:l.width;var n;e.u_ah=null==(n=fd.screen)?void 0:n.availHeight;var q;e.u_aw=
null==(q=fd.screen)?void 0:q.availWidth;var v;e.u_cd=null==(v=fd.screen)?void 0:v.colorDepth}catch(ka){}h=b.h;try{var p=h.screenX;var z=h.screenY}catch(ka){}try{var y=h.outerWidth;var F=h.outerHeight}catch(ka){}try{var M=h.innerWidth;var J=h.innerHeight}catch(ka){}try{var O=h.screenLeft;var db=h.screenTop}catch(ka){}try{M=h.innerWidth,J=h.innerHeight}catch(ka){}try{var ic=h.screen.availWidth;var Ee=h.screen.availTop}catch(ka){}p=[O,db,p,z,ic,Ee,y,F,M,J];z=b.h.top;try{var Z=(z||window).document,S=
"CSS1Compat"==Z.compatMode?Z.documentElement:Z.body;var U=(new gd(S.clientWidth,S.clientHeight)).round()}catch(ka){U=new gd(-12245933,-12245933)}Z=U;U={};var V=void 0===V?A:V;S=new pe;V.SVGElement&&V.document.createElementNS&&S.set(0);z=nd();z["allow-top-navigation-by-user-activation"]&&S.set(1);z["allow-popups-to-escape-sandbox"]&&S.set(2);V.crypto&&V.crypto.subtle&&S.set(3);V.TextDecoder&&V.TextEncoder&&S.set(4);V=qe(S);U.bc=V;U.bih=Z.height;U.biw=Z.width;U.brdim=p.join();b=b.i;b=(U.vis=b.prerendering?
3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,U.wgl=!!fd.WebGLRenderingContext,U);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Fh=new function(){var a=window.document;this.h=window;this.i=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return xh(Eh(a))});Date.now();var Gh="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function Hh(){if(!Gh)return null;var a=Gh();return"open"in a?a:null}
;var Ih={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Jh="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),Kh=!1;
function Lh(a,b){b=void 0===b?{}:b;var c=Ah(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in Ih){var f=N(Ih[e]);!f||!c&&Lb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Lb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Lb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Lb(a))b["X-YouTube-Ad-Signals"]=xh(Eh(void 0));return b}
function Mh(a){var b=window.location.search,c=Lb(a);P("debug_handle_relative_url_for_query_forward_killswitch")||c||!Ah(a)||(c=document.location.hostname);var d=Kb(a.match(Jb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=yh(b),f={};D(Jh,function(g){e[g]&&(f[g]=e[g])});
return zh(a,f||{},!1)}
function Nh(a,b){var c=b.format||"JSON";a=Oh(a,b);var d=Ph(a,b),e=!1,f=Qh(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,q=400<=k.status&&500>k.status,v=500<=k.status&&600>k.status;if(l||q||v)n=Rh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=
!!n}n=n||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=qh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},b.timeout)}}
function Oh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=zh(a,b||{},!0);return a}
function Ph(a,b){var c=N("XSRF_FIELD_NAME",void 0),d=N("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Lb(a)&&!b.withCredentials&&Lb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=yh(e),sb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Ob(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=
!1;break a}f=!0}a=!f}!Kh&&a&&"POST"!=b.method&&(Kh=!0,gh(Error("AJAX request with postData should use POST")));return e}
function Rh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,hh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Sh(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Th(g)})}d&&Uh(e);
return e}
function Uh(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;vb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===tb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){A.console&&A.console.error(g.message)}tb=e}else tb=e}d=(e=tb)?e.createHTML(d):d;a[c]=new Ib(d)}else Uh(a[b])}}
function Sh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Th(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Qh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&fh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Hh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=Mh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Lh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Vh={Kb:"WEB_DISPLAY_MODE_UNKNOWN",Gb:"WEB_DISPLAY_MODE_BROWSER",Ib:"WEB_DISPLAY_MODE_MINIMAL_UI",Jb:"WEB_DISPLAY_MODE_STANDALONE",Hb:"WEB_DISPLAY_MODE_FULLSCREEN"};function Wh(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function Xh(){var a=Wh();a=Object.keys(Vh).indexOf(a);return-1===a?null:a}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var Yh={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Zh={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},$h={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},ai={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function bi(){var a=A.navigator;return a?a.connection:void 0}
;function ci(){return"INNERTUBE_API_KEY"in Ug&&"INNERTUBE_API_VERSION"in Ug}
function di(){return{innertubeApiKey:N("INNERTUBE_API_KEY",void 0),innertubeApiVersion:N("INNERTUBE_API_VERSION",void 0),za:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Aa:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),lb:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Pa:N("INNERTUBE_CONTEXT_HL",void 0),Oa:N("INNERTUBE_CONTEXT_GL",void 0),mb:N("INNERTUBE_HOST_OVERRIDE",void 0)||"",ob:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),nb:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function ei(a){var b={client:{hl:a.Pa,gl:a.Oa,clientName:a.Aa,clientVersion:a.innertubeContextClientVersion,configInfo:a.za}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Dh();0<c.length&&(b.request={internalExperimentFlags:c});fi(a,void 0,b);gi(a,void 0,b);hi(void 0,b);ii(a,void 0,b);ji(void 0,b);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&
(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(yh(N("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function ki(a){var b=new qg,c=new jg;G(c,1,a.Pa);G(c,2,a.Oa);G(c,16,a.lb);G(c,17,a.innertubeContextClientVersion);if(a.za){var d=a.za,e=new gg;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,62,e)}(d=A.devicePixelRatio)&&1!=d&&G(c,65,d);d=N("EXPERIMENTS_TOKEN","");""!==d&&G(c,54,d);d=Dh();if(0<d.length){e=new lg;for(var f=0;f<d.length;f++){var g=new eg;G(g,1,d[f].key);g.setValue(d[f].value);
Uc(e,15,eg,g)}H(b,5,e)}fi(a,c);gi(a,c);hi(c);ii(a,c);ji(c);N("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new og,G(a,3,N("DELEGATED_SESSION_ID")));a=t(Object.entries(yh(N("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);H(b,1,c);return b}
function fi(a,b,c){a=a.Aa;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Rc(b,hg,96)||new hg;var d=Xh();null!==d&&G(c,3,d);H(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Wh())}
function gi(a,b,c){a=a.Aa;if(("WEB_REMIX"===a||76===a)&&!P("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=Rc(b,ig,70))?d:new ig;d=Xh();null!==d&&G(c,10,d);H(b,70,c)}else if(c){var e;c.client.Sa=null!=(e=c.client.Sa)?e:{};c.client.Sa.webDisplayMode=Wh()}}
function hi(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function ii(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Rc(b,gg,62))?d:new gg;G(c,6,a.appInstallData);H(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function ji(a,b){a:{var c=bi();if(c){var d=Yh[c.type||"unknown"]||"CONN_UNKNOWN";c=Yh[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?G(a,61,Zh[d]):b&&(b.client.connectionType=d));P("web_log_effective_connection_type")&&(d=bi(),d=null!=d&&d.effectiveType?ai.hasOwnProperty(d.effectiveType)?ai[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?G(a,94,$h[d]):
b&&(b.client.effectiveConnectionType=d)))}
function li(a,b,c){c=void 0===c?{}:c;var d={};P("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Mb||N("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Lb:b=Dd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),P("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function mi(a){a=Object.assign({},a);delete a.Authorization;var b=Dd();if(b){var c=new Ie;c.update(N("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=qc(c.digest(),3)}return a}
;function ni(a){var b=new Yf;(b=b.isAvailable()?a?new dg(b,a):b:null)||(a=new Zf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Uf(a):null;this.i=document.domain||window.location.hostname}
ni.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ye(b))}catch(f){return}else e=escape(b);b=this.i;Ad.set(""+a,e,{Ba:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ni.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ad.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ni.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Ad.remove(""+a,"/",void 0===b?"youtube.com":b)};var oi=window,Q=oi.ytcsi&&oi.ytcsi.now?oi.ytcsi.now:oi.performance&&oi.performance.timing&&oi.performance.now&&oi.performance.timing.navigationStart?function(){return oi.performance.timing.navigationStart+oi.performance.now()}:function(){return(new Date).getTime()};var pi;function qi(){pi||(pi=new ni("yt.innertube"));return pi}
function ri(a,b,c,d){if(d)return null;d=qi().get("nextId",!0)||1;var e=qi().get("requests",!0)||{};e[d]={method:a,request:b,authState:mi(c),requestTime:Math.round(Q())};qi().set("nextId",d+1,86400,!0);qi().set("requests",e,86400,!0);return d}
function si(a){var b=qi().get("requests",!0)||{};delete b[a];qi().set("requests",b,86400,!0)}
function ti(a){var b=qi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=mi(li(!1));jb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),ui(a,d.method,e,{}));delete b[c]}}qi().set("requests",b,86400,!0)}}
;function vi(){}
function wi(a,b){return xi(a,0,b)}
vi.prototype.L=function(a,b){return xi(a,1,b)};
function yi(a,b){xi(a,2,b)}
;function zi(){vi.apply(this,arguments)}
u(zi,vi);function Ai(){zi.h||(zi.h=new zi);return zi.h}
function xi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):qh(a,c||0)}
zi.prototype.Y=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
zi.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var oe=Ai();var Bi=lc||mc;var Ci=function(){var a;return function(){a||(a=new ni("ytidb"));return a}}();
function Di(){var a;return null==(a=Ci())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Ei=[],Fi=!1;function Gi(a){Fi||(Ei.push({type:"ERROR",payload:a}),10<Ei.length&&Ei.shift())}
function Hi(a,b){Fi||(Ei.push({type:"EVENT",eventType:a,payload:b}),10<Ei.length&&Ei.shift())}
;function Ii(a){var b=Ha.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
u(Ii,Error);function Ji(){try{return Ki(),!0}catch(a){return!1}}
function Ki(){if(void 0!==N("DATASYNC_ID",void 0))return N("DATASYNC_ID",void 0);throw new Ii("Datasync ID not set","unknown");}
;function Li(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Mi(a){return a.substr(0,a.indexOf(":"))||a}
;var Ni={},Oi=(Ni.AUTH_INVALID="No user identifier specified.",Ni.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ni.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ni.MISSING_INDEX="Index not created.",Ni.MISSING_OBJECT_STORES="Object stores not created.",Ni.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ni.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ni.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ni.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ni.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ni.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ni.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ni),Pi={},Qi=(Pi.AUTH_INVALID="ERROR",Pi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Pi.EXPLICIT_ABORT="IGNORED",Pi.IDB_NOT_SUPPORTED="ERROR",Pi.MISSING_INDEX=
"WARNING",Pi.MISSING_OBJECT_STORES="ERROR",Pi.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Pi.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Pi.QUOTA_EXCEEDED="WARNING",Pi.QUOTA_MAYBE_EXCEEDED="WARNING",Pi.UNKNOWN_ABORT="WARNING",Pi.INCOMPATIBLE_DB_VERSION="WARNING",Pi),Ri={},Si=(Ri.AUTH_INVALID=!1,Ri.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ri.EXPLICIT_ABORT=!1,Ri.IDB_NOT_SUPPORTED=!1,Ri.MISSING_INDEX=!1,Ri.MISSING_OBJECT_STORES=!1,Ri.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ri.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ri.QUOTA_EXCEEDED=!1,Ri.QUOTA_MAYBE_EXCEEDED=!0,Ri.UNKNOWN_ABORT=!0,Ri.INCOMPATIBLE_DB_VERSION=!1,Ri);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Oi[a]:c;d=void 0===d?Qi[a]:d;e=void 0===e?Si[a]:e;Ii.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,T.prototype)}
u(T,Ii);function Ti(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Oi.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ti.prototype)}
u(Ti,T);function Ui(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ui.prototype)}
u(Ui,Error);var Vi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Wi(a,b,c,d){b=Mi(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(nc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ui)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Vi.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Rb:e.name})];e.level="WARNING";return e}
function Xi(a,b,c){var d=Di();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Yi(a){if(!a)throw Error();throw a;}
function Zi(a){return a}
function $i(a){this.h=a}
function W(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
W.all=function(a){return new W(new $i(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Z:0};f.Z<a.length;f={Z:f.Z},++f.Z)aj(W.resolve(a[f.Z]).then(function(g){return function(h){d[g.Z]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
W.resolve=function(a){return new W(new $i(function(b,c){a instanceof W?a.then(b,c):b(a)}))};
W.reject=function(a){return new W(new $i(function(b,c){c(a)}))};
W.prototype.then=function(a,b){var c=this,d=null!=a?a:Zi,e=null!=b?b:Yi;return new W(new $i(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){bj(c,c,d,f,g)}),c.onRejected.push(function(){cj(c,c,e,f,g)})):"FULFILLED"===c.state.status?bj(c,c,d,f,g):"REJECTED"===c.state.status&&cj(c,c,e,f,g)}))};
function aj(a,b){a.then(void 0,b)}
function bj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof W?dj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function cj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof W?dj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof W?dj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ej(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function fj(a){return new Promise(function(b,c){ej(a,b,c)})}
function X(a){return new W(new $i(function(b,c){ej(a,b,c)}))}
;function gj(a,b){return new W(new $i(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function hj(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
m=hj.prototype;m.add=function(a,b,c){return ij(this,[a],{mode:"readwrite",H:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return ij(this,[a],{mode:"readwrite",H:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return ij(this,[a],{mode:"readonly",H:!0},function(c){return c.objectStore(a).count(b)})};
function jj(a,b,c){a=a.h.createObjectStore(b,c);return new kj(a)}
m.delete=function(a,b){return ij(this,[a],{mode:"readwrite",H:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return ij(this,[a],{mode:"readonly",H:!0},function(c){return c.objectStore(a).get(b)})};
function lj(a,b){return ij(a,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(c){c=c.objectStore("LogsRequestsStore");return X(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ij(a,b,c,d){var e,f,g,h,k,l,n,q,v,p,z,y;return x(function(F){switch(F.h){case 1:var M={mode:"readonly",H:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.H?3:1;g=0;case 2:if(h){F.o(3);break}g++;k=Math.round(Q());ua(F,4);l=a.h.transaction(b,e.mode);M=new mj(l);M=nj(M,d);return w(F,M,6);case 6:return n=F.i,q=Math.round(Q()),oj(a,k,q,g,void 0,b.join(),e),F.return(n);case 4:v=wa(F);p=Math.round(Q());z=Wi(v,a.h.name,b.join(),a.h.version);
if((y=z instanceof T&&!z.h)||g>=f)oj(a,k,p,g,z,b.join(),e),h=z;F.o(2);break;case 3:return F.return(Promise.reject(h))}})}
function oj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Hi("QUOTA_EXCEEDED",{dbName:Mi(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Hi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),pj(a,!1,d,f,b,g.tag),Gi(e)):pj(a,!0,d,f,b,g.tag)}
function pj(a,b,c,d,e,f){Hi("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function kj(a){this.h=a}
m=kj.prototype;m.add=function(a,b){return X(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return X(this.h.clear()).then(function(){})};
m.count=function(a){return X(this.h.count(a))};
function qj(a,b){return rj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?qj(this,a):X(this.h.delete(a))};
m.get=function(a){return X(this.h.get(a))};
m.index=function(a){try{return new sj(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ui(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function rj(a,b,c){a=a.h.openCursor(b.query,b.direction);return tj(a).then(function(d){return gj(d,c)})}
function mj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=T;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function nj(a,b){var c=new Promise(function(d,e){try{aj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
mj.prototype.abort=function(){this.h.abort();this.i=!0;throw new T("EXPLICIT_ABORT");};
mj.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new kj(a),this.j.set(a,b));return b};
function sj(a){this.h=a}
m=sj.prototype;m.count=function(a){return X(this.h.count(a))};
m.delete=function(a){return uj(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return X(this.h.get(a))};
m.getKey=function(a){return X(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function uj(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return tj(a).then(function(d){return gj(d,c)})}
function kk(a,b){this.request=a;this.cursor=b}
function tj(a){return X(a).then(function(b){return b?new kk(a,b):null})}
m=kk.prototype;m.advance=function(a){this.cursor.advance(a);return tj(this.request)};
m.continue=function(a){this.cursor.continue(a);return tj(this.request)};
m.delete=function(){return X(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.W=function(){return this.cursor.value};
m.update=function(a){return X(this.cursor.update(a))};function lk(a,b,c){return new Promise(function(d,e){function f(){v||(v=new hj(g.result,{closed:q}));return v}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.tb,n=c.upgrade,q=c.closed,v;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Hi("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Mi(a)});var z=f(),y=new mj(g.transaction);
n&&n(z,function(F){return p.oldVersion<F&&p.newVersion>=F},y);
y.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Hi("IDB_UNEXPECTEDLY_CLOSED",{dbName:Mi(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mk(a,b,c){c=void 0===c?{}:c;return lk(a,b,c)}
function nk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,fj(c),4);
if(2!=g.h)return va(g,0);f=wa(g);throw Wi(f,a,"",-1);})}
;function ok(a){return new Promise(function(b){yi(function(){b()},a)})}
function pk(a,b){this.name=a;this.options=b;this.l=!0;this.v=this.m=0;this.i=500}
pk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return mk(a,b,c)};
pk.prototype.delete=function(a){a=void 0===a?{}:a;return nk(this.name,a)};
function qk(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function rk(a,b){if(!b)throw Xi("openWithToken",Mi(a.name));return a.open()}
pk.prototype.open=function(){function a(){var f,g,h,k,l,n,q,v,p,z;return x(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",ua(y,2),w(y,c.j(c.name,c.options.version,e),4);case 4:h=y.i;for(var F=c.options,M=[],J=t(Object.keys(F.ga)),O=J.next();!O.done;O=J.next()){O=O.value;var db=F.ga[O],ic=void 0===db.rb?Number.MAX_VALUE:db.rb;!(h.h.version>=db.xa)||h.h.version>=ic||h.h.objectStoreNames.contains(O)||M.push(O)}k=M;if(0===k.length){y.o(5);break}l=Object.keys(c.options.ga);n=h.objectStoreNames();
if(c.v<Ch("ytidb_reopen_db_retries",0))return c.v++,h.close(),Gi(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.m<Ch("ytidb_remake_db_retries",1))){y.o(6);break}c.m++;if(!P("ytidb_remake_db_enable_backoff_delay")){y.o(7);break}return w(y,ok(c.i),8);case 8:c.i*=2;case 7:return w(y,c.delete(),9);case 9:return Gi(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());
case 6:throw new Ti(n,l);case 5:return y.return(h);case 2:q=wa(y);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){y.o(10);break}return w(y,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:v=y.i;p=v.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw v.close(),
c.l=!1,qk(c,p);return y.return(v);case 10:throw b(),q instanceof Error&&!P("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),Wi(q,c.name,"",null!=(z=c.options.version)?z:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw qk(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,tb:b,upgrade:this.options.upgrade};return this.h=d=a()};var sk=new pk("YtIdbMeta",{ga:{databases:{xa:1}},upgrade:function(a,b){b(1)&&jj(a,"databases",{keyPath:"actualName"})}});
function tk(a,b){var c;return x(function(d){if(1==d.h)return w(d,rk(sk,b),2);c=d.i;return d.return(ij(c,["databases"],{H:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return X(f.h.put(a,void 0)).then(function(){})})}))})}
function uk(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,rk(sk,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function vk(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,rk(sk,b),2)):3!=e.h?(d=e.i,w(e,ij(d,["databases"],{H:!0,mode:"readonly"},function(f){c.length=0;return rj(f.objectStore("databases"),{},function(g){a(g.W())&&c.push(g.W());return g.continue()})}),3)):e.return(c)})}
function wk(a){return vk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var xk,yk=new function(){}(new function(){});
function zk(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=Di();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Bi)f=/WebKit\/([0-9]+)/.exec(Fb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Fb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Zb)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ua(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,tk(d,yk),4);case 4:return w(e,uk("yt-idb-test-do-not-use",yk),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Ak(){if(void 0!==xk)return xk;Fi=!0;return xk=zk().then(function(a){Fi=!1;var b;if(null!=(b=Ci())&&b.h){var c;b={hasSucceededOnce:(null==(c=Di())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Ci())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Bk(){return B("ytglobal.idbToken_")||void 0}
function Ck(){var a=Bk();return a?Promise.resolve(a):Ak().then(function(b){(b=b?yk:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new Ze;function Dk(a){if(!Ji())throw a=new T("AUTH_INVALID",{dbName:a}),Gi(a),a;var b=Ki();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ek(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",w(n,Ck(),2);case 2:g=n.i;if(!g)throw h=Xi("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Gi(h),h;Li(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Dk(a);ua(n,3);return w(n,tk(k,g),5);case 5:return w(n,mk(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=wa(n),ua(n,7),w(n,uk(k.actualName,g),9);case 9:va(n,
8);break;case 7:wa(n);case 8:throw l;}})}
function Fk(a,b,c){c=void 0===c?{}:c;return Ek(a,b,!1,c)}
function Gk(a,b,c){c=void 0===c?{}:c;return Ek(a,b,!0,c)}
function Hk(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Ck(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Li(a);d=Dk(a);return w(e,nk(d.actualName,b),3)}return w(e,uk(d.actualName,c),0)})}
function Ik(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,nk(d.actualName,b),2):w(e,uk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Jk(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Ck(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Li("LogsDatabaseV2");return w(d,wk(b),3)}c=d.i;return w(d,Ik(c,a,b),0)})}
function Kk(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Ck(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Li(a);return w(d,nk(a,b),3)}return w(d,uk(a,c),0)})}
;function Lk(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ba=function(){};
this.now=Date.now;this.ea=!1;var b;this.Za=null!=(b=a.Za)?b:100;var c;this.Ya=null!=(c=a.Ya)?c:1;var d;this.Wa=null!=(d=a.Wa)?d:2592E6;var e;this.Va=null!=(e=a.Va)?e:12E4;var f;this.Xa=null!=(f=a.Xa)?f:5E3;var g;this.s=null!=(g=a.s)?g:void 0;this.pa=!!a.pa;var h;this.oa=null!=(h=a.oa)?h:.1;var k;this.ta=null!=(k=a.ta)?k:10;a.handleError&&(this.handleError=a.handleError);a.ba&&(this.ba=a.ba);a.ea&&(this.ea=a.ea);this.B=a.B;this.J=a.J;this.D=a.D;this.G=a.G;this.T=a.T;this.Ea=a.Ea;this.Da=a.Da;this.s&&
(!this.B||this.B("networkless_logging"))&&Mk(this)}
function Mk(a){a.s&&!a.ea&&(a.h=!0,a.pa&&Math.random()<=a.oa&&a.D.hb(a.s),Nk(a),a.G.F()&&a.ja(),a.G.R(a.Ea,a.ja.bind(a)),a.G.R(a.Da,a.Ia.bind(a)))}
m=Lk.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D.set(d,this.s).then(function(e){d.id=e;c.G.F()&&Ok(c,d)}).catch(function(e){Ok(c,d);
Pk(c,e)})}else this.T(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.s&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.G.F()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.D.set(e,d.s).catch(function(l){Pk(d,l)}),2);
f(g,h);k.h=0})}}this.T(a,b,e.skipRetry)}else this.D.set(e,this.s).catch(function(g){d.T(a,b,e.skipRetry);
Pk(d,g)})}else this.T(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.s&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.D.aa(d.id,c.s):e=!0;c.G.S&&c.B&&c.B("vss_network_hint")&&c.G.S(!0);f(g,h)};
this.T(d.url,d.options);this.D.set(d,this.s).then(function(g){d.id=g;e&&c.D.aa(d.id,c.s)}).catch(function(g){Pk(c,g)})}else this.T(a,b)};
m.ja=function(){var a=this;if(!this.s)throw Xi("throttleSend");this.i||(this.i=this.J.L(function(){var b;return x(function(c){if(1==c.h)return w(c,a.D.Na("NEW",a.s),2);if(3!=c.h)return b=c.i,b?w(c,Ok(a,b),3):(a.Ia(),c.return());a.i&&(a.i=0,a.ja());c.h=0})},this.Za))};
m.Ia=function(){this.J.Y(this.i);this.i=0};
function Ok(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.s)throw c=Xi("immediateSend"),c;if(void 0===b.id){e.o(2);break}return w(e,a.D.pb(b.id,a.s),3);case 3:(d=e.i)?b=d:a.ba(Error("The request cannot be found in the database."));case 2:if(Qk(a,b,a.Wa)){e.o(4);break}a.ba(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.o(5);break}return w(e,a.D.aa(b.id,a.s),5);case 5:return e.return();case 4:b.skipRetry||(b=Rk(a,b));if(!b){e.o(0);break}if(!b.skipRetry||
void 0===b.id){e.o(8);break}return w(e,a.D.aa(b.id,a.s),8);case 8:a.T(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Rk(a,b){if(!a.s)throw Xi("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.h){case 1:g=Sk(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ta)){l.o(2);break}if(!a.G.U){l.o(3);break}return w(l,a.G.U(),3);case 3:if(a.G.F()){l.o(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.o(6);break}return w(l,a.D.Fa(b.id,a.s,!1),6);case 6:return l.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.ta)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.o(8);break}return b.sendCount<a.Ya?w(l,a.D.Fa(b.id,a.s),12):w(l,a.D.aa(b.id,a.s),8);case 12:a.J.L(function(){a.G.F()&&a.ja()},a.Xa);
case 8:c(e,f),l.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.o(2):w(h,a.D.aa(b.id,a.s),2);a.G.S&&a.B&&a.B("vss_network_hint")&&a.G.S(!0);d(e,f);h.h=0})};
return b}
function Qk(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Nk(a){if(!a.s)throw Xi("retryQueuedRequests");a.D.Na("QUEUED",a.s).then(function(b){b&&!Qk(a,b,a.Va)?a.J.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.o(2):w(c,a.D.Fa(b.id,a.s),2);Nk(a);c.h=0})}):a.G.F()&&a.ja()})}
function Pk(a,b){a.ab&&!a.G.F()?a.ab(b):a.handleError(b)}
function Sk(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Tk=B("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.ca;L.prototype.clear=L.prototype.clear;C("ytPubsub2Pubsub2Instance",Tk);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function Uk(a,b){pk.call(this,a,b);this.options=b;Li(a)}
u(Uk,pk);function Vk(a,b){var c;return function(){c||(c=new Uk(a,b));return c}}
Uk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ga?Gk:Fk)(a,b,Object.assign({},c))};
Uk.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ga?Kk:Hk)(this.name,a)};
function Wk(a,b){return Vk(a,b)}
;var Xk;
function Yk(){if(Xk)return Xk();var a={};Xk=Wk("LogsDatabaseV2",{ga:(a.LogsRequestsStore={xa:2},a),Ga:!1,upgrade:function(b,c,d){c(2)&&jj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Xk()}
;function Zk(a){return rk(Yk(),a)}
function $k(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Zk(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:N("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,lj(d,e),3);f=g.i;c.ub=Q();al(c);return g.return(f)})}
function bl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Zk(b),2);if(3!=l.h)return d=l.i,e=N("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,ij(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(n){return uj(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.W()&&(k=q.W(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.ub=Q();al(c);return l.return(k)})}
function cl(a,b){var c;return x(function(d){if(1==d.h)return w(d,Zk(b),2);c=d.i;return d.return(ij(c,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",X(f.h.put(g,void 0)).then(function(){return g})})}))})}
function dl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,Zk(b),2);d=e.i;return e.return(ij(d,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),X(g.h.put(h,void 0)).then(function(){return h})):W.resolve(void 0)})}))})}
function el(a,b){var c;return x(function(d){if(1==d.h)return w(d,Zk(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function fl(a){var b,c;return x(function(d){if(1==d.h)return w(d,Zk(a),2);b=d.i;c=Q()-2592E6;return w(d,ij(b,["LogsRequestsStore"],{mode:"readwrite",H:!0},function(e){return rj(e.objectStore("LogsRequestsStore"),{},function(f){if(f.W().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function gl(){x(function(a){return w(a,Jk(),0)})}
function al(a){if(!P("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var hl={},il=Wk("ServiceWorkerLogsDatabase",{ga:(hl.SWHealthLog={xa:1},hl),Ga:!0,upgrade:function(a,b){b(1)&&jj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function jl(a){return rk(il(),a)}
function kl(a){var b,c;x(function(d){if(1==d.h)return w(d,jl(a),2);b=d.i;c=Q()-2592E6;return w(d,ij(b,["SWHealthLog"],{mode:"readwrite",H:!0},function(e){return rj(e.objectStore("SWHealthLog"),{},function(f){if(f.W().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ll(a){var b;return x(function(c){if(1==c.h)return w(c,jl(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var ml={},nl=0;function ol(a){var b=void 0===b?"":b;if(a)if(b)Qh(a,void 0,"POST",b,void 0);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Qh(a,void 0,"GET","",void 0);else{b:{try{var c=new Ya({url:a});if(c.j&&c.i||c.l){var d=Kb(a.match(Jb)[5]||null);var e=!(!d||!d.endsWith("/aclk")||"1"!==Ub(a,"ri"));break b}}catch(g){}e=!1}if(e){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var f=!0;break b}}catch(g){}f=!1}b=f?!0:!1}else b=!1;b||pl(a)}}
function pl(a){var b=new Image,c=""+nl++;ml[c]=b;b.onload=b.onerror=function(){delete ml[c]};
b.src=a}
;function ql(){this.h=new Map;this.i=!1}
function rl(){if(!ql.h){var a=B("yt.networkRequestMonitor.instance")||new ql;C("yt.networkRequestMonitor.instance",a);ql.h=a}return ql.h}
ql.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
ql.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
ql.prototype.removeParams=function(a){return a.split("?")[0]};
ql.prototype.removeParams=ql.prototype.removeParams;ql.prototype.isEndpointCFR=ql.prototype.isEndpointCFR;ql.prototype.requestComplete=ql.prototype.requestComplete;ql.getInstance=rl;var sl;function tl(){sl||(sl=new ni("yt.offline"));return sl}
function ul(a){if(P("offline_error_handling")){var b=tl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);tl().set("errors",b,2592E3,!0)}}
function vl(){if(P("offline_error_handling")){var a=tl().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Ii(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;gh(c)}tl().set("errors",{},2592E3,!0)}}}
;var wl=Ch("network_polling_interval",3E4);function Y(){K.call(this);var a=this;this.la=0;this.A=this.m=!1;this.i=this.ya();P("use_shared_nsm")?(this.h=ne(),P("use_shared_nsm_and_keep_yt_online_updated")&&(this.h.R("networkstatus-online",function(){a.i=!0;a.A&&vl()}),this.h.R("networkstatus-offline",function(){a.i=!1}))):(xl(this),yl(this))}
u(Y,K);function zl(){if(!Y.h){var a=B("yt.networkStatusManager.instance")||new Y;C("yt.networkStatusManager.instance",a);Y.h=a}return Y.h}
m=Y.prototype;m.F=function(){if(P("use_shared_nsm")&&this.h){var a;return null==(a=this.h)?void 0:a.F()}return this.i};
m.S=function(a){if(P("use_shared_nsm")&&this.h){var b;null!=(b=this.h)&&(b.h=a)}else a!==this.i&&(this.i=a)};
m.qb=function(a){!P("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.la||Al(this))};
m.ya=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.jb=function(){this.A=!0};
m.R=function(a,b){return P("use_shared_nsm")&&this.h?this.h.R(a,b):K.prototype.R.call(this,a,b)};
function yl(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.U(),2);a.A&&vl();b.h=0})})}
function xl(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.U(),0)})})}
function Al(a){a.la=wi(function(){return x(function(b){if(1==b.h)return a.i?a.ya()||!a.m?b.o(3):w(b,a.U(),3):w(b,a.U(),3);Al(a);b.h=0})},wl)}
m.U=function(a){var b=this;if(P("use_shared_nsm")&&this.h){var c=le(this.h,a);c.then(function(d){P("use_cfr_monitor")&&rl().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return x(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,ua(k,2,3),e&&(b.O=oe.L(function(){e.abort()},a||2E4)),w(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:xa(k);P("use_cfr_monitor")&&rl().requestComplete("generate_204",h);b.u=void 0;b.O&&oe.Y(b.O);h!==b.i&&(b.i=h,b.i&&b.m?ie(b,"ytnetworkstatus-online"):b.m&&ie(b,"ytnetworkstatus-offline"));d(h);ya(k);break;case 2:wa(k),h=!1,k.o(3)}})})};
Y.prototype.sendNetworkCheckRequest=Y.prototype.U;Y.prototype.listen=Y.prototype.R;Y.prototype.enableErrorFlushing=Y.prototype.jb;Y.prototype.getWindowStatus=Y.prototype.ya;Y.prototype.monitorNetworkStatusChange=Y.prototype.qb;Y.prototype.networkStatusHint=Y.prototype.S;Y.prototype.isNetworkAvailable=Y.prototype.F;Y.getInstance=zl;function Bl(a){a=void 0===a?{}:a;K.call(this);var b=this;this.i=this.O=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";P("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.h=zl();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.h);c&&c(a.La);a.Ra&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.h))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.h))a.va?(this.va=a.va,c(this.u,
function(){Cl(b,"publicytnetworkstatus-online")}),c(this.m,function(){Cl(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){ie(b,"publicytnetworkstatus-online")}),c(this.m,function(){ie(b,"publicytnetworkstatus-offline")}))}
u(Bl,K);Bl.prototype.F=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.h)():!0};
Bl.prototype.S=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.h);b&&b(a)};
Bl.prototype.U=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.h);return P("skip_network_check_if_cfr")&&rl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.S((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.F())})):c?d.return(c(a)):d.return(!0)})};
function Cl(a,b){a.va?a.i?(oe.Y(a.O),a.O=oe.L(function(){a.A!==b&&(ie(a,b),a.A=b,a.i=Q())},a.va-(Q()-a.i))):(ie(a,b),a.A=b,a.i=Q()):ie(a,b)}
;var Dl;function El(){Lk.call(this,{D:{hb:fl,aa:el,Na:bl,pb:cl,Fa:dl,set:$k},G:Fl(),handleError:gh,ba:hh,T:Gl,now:Q,ab:ul,J:Ai(),Ea:"publicytnetworkstatus-online",Da:"publicytnetworkstatus-offline",pa:!0,oa:.1,ta:Ch("potential_esf_error_limit",10),B:P,ea:!(Ji()&&(P("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==Lb(document.location.toString()):1))});this.j=new Ze;P("networkless_immediately_drop_all_requests")&&gl();Kk("LogsDatabaseV2")}
u(El,Lk);function Hl(){var a=B("yt.networklessRequestController.instance");a||(a=new El,C("yt.networklessRequestController.instance",a),P("networkless_logging")&&Ck().then(function(b){a.s=b;Mk(a);a.j.resolve();a.pa&&Math.random()<=a.oa&&a.s&&kl(a.s);P("networkless_immediately_drop_sw_health_store")&&Il(a)}));
return a}
El.prototype.writeThenSend=function(a,b){b||(b={});Ji()||(this.h=!1);Lk.prototype.writeThenSend.call(this,a,b)};
El.prototype.sendThenWrite=function(a,b,c){b||(b={});Ji()||(this.h=!1);Lk.prototype.sendThenWrite.call(this,a,b,c)};
El.prototype.sendAndWrite=function(a,b){b||(b={});Ji()||(this.h=!1);Lk.prototype.sendAndWrite.call(this,a,b)};
El.prototype.awaitInitialization=function(){return this.j.promise};
function Il(a){var b;x(function(c){if(!a.s)throw b=Xi("clearSWHealthLogsDb"),b;return c.return(ll(a.s).catch(function(d){a.handleError(d)}))})}
function Gl(a,b,c){P("use_cfr_monitor")&&Jl(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q());c&&0===Object.keys(b).length?ol(a):Nh(a,b)}
function Fl(){Dl||(Dl=new Bl({Ra:!0,La:!0}));return Dl}
function Jl(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){rl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){rl().requestComplete(a,!0);d(e,f)}}
;var Kl=0,Ll=0,Ml,Nl=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:Ll};C("ytNetworklessLoggingInitializationOptions",Nl);function Ol(a,b){function c(d){var e=Pl().F();if(!Ql()||!d||e&&P("vss_networkless_bypass_write"))Rl(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};$k(f,d).then(function(g){f.id=g;Pl().F()&&Sl(f)}).catch(function(g){Sl(f);
Pl().F()?gh(g):ul(g)})}}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Ck().then(function(d){c(d)}):c(Bk())}
function Tl(a,b){function c(d){if(Ql()&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){P("use_cfr_monitor")&&rl().requestComplete(e.url,!0);void 0!==e.id?el(e.id,d):f=!0;P("vss_network_hint")&&Pl().S(!0);g(k,l)};
if(P("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){rl().requestComplete(e.url,!1);h(k,l)}}Rl(e.url,e.options);
$k(e,d).then(function(k){e.id=k;f&&el(e.id,d)}).catch(function(k){Pl().F()?gh(k):ul(k)})}else Rl(a,b)}
b=void 0===b?{}:b;P("skip_is_supported_killswitch")?Ck().then(function(d){c(d)}):c(Bk())}
function Ul(){var a=Bk();if(!a)throw Xi("throttleSend");Kl||(Kl=oe.L(function(){var b;return x(function(c){if(1==c.h)return w(c,bl("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,Sl(b),3):(oe.Y(Kl),Kl=0,c.return());Kl&&(Kl=0,Ul());c.h=0})},100))}
function Sl(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=Bk();if(!b)throw c=Xi("immediateSend"),c;if(void 0===a.id){e.o(2);break}return w(e,cl(a.id,b),3);case 3:(d=e.i)?a=d:hh(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=Q()-f)){e.o(4);break}hh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.o(5);break}return w(e,el(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Vl(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());a=f;if(!a){e.o(0);break}if(!a.skipRetry||void 0===a.id){e.o(8);break}return w(e,el(a.id,b),8);case 8:Rl(a.url,a.options,!!a.skipRetry),e.h=0}})}
function Vl(a){var b=Bk();if(!b)throw Xi("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.h){case 1:P("use_cfr_monitor")&&rl().requestComplete(a.url,!1);g=Sk(f);if(!(P("nwl_consider_error_code")&&g||!P("nwl_consider_error_code")&&Wl()<=Ch("potential_esf_error_limit",10))){l.o(2);break}if(P("skip_checking_network_on_cfr_failure")&&(!P("skip_checking_network_on_cfr_failure")||rl().isEndpointCFR(a.url))){l.o(3);break}return w(l,Pl().U(),3);case 3:if(Pl().F()){l.o(2);break}c(e,f);if(!P("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.o(6);break}return w(l,dl(a.id,b,!1),6);case 6:return l.return();case 2:if(P("nwl_consider_error_code")&&!g&&Wl()>Ch("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&Nl.potentialEsfErrorCounter++;Ll++;if(void 0===(null==(k=a)?void 0:k.id)){l.o(8);break}return 1>a.sendCount?w(l,dl(a.id,b),12):w(l,el(a.id,b),8);case 12:oe.L(function(){Pl().F()&&Ul()},5E3);
case 8:c(e,f),l.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return P("use_cfr_monitor")&&rl().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.o(2):w(h,el(a.id,b),2);P("vss_network_hint")&&Pl().S(!0);d(e,f);h.h=0})};
return a}
function Pl(){if(P("use_new_nwl"))return Fl();Ml||(Ml=new Bl({Ra:!0,La:!0}));return Ml}
function Rl(a,b,c){c&&0===Object.keys(b).length?ol(a):Nh(a,b)}
function Ql(){return B("ytNetworklessLoggingInitializationOptions")?Nl.isNwlInitialized:!1}
function Wl(){return B("ytNetworklessLoggingInitializationOptions")?Nl.potentialEsfErrorCounter:Ll}
;function Xl(a){var b=this;this.config_=null;a?this.config_=a:ci()&&(this.config_=di());wi(function(){ti(b)},5E3)}
Xl.prototype.isReady=function(){!this.config_&&ci()&&(this.config_=di());return!!this.config_};
function ui(a,b,c,d){function e(z){z=void 0===z?!1:z;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=ri(b,c,l,k)),y)){var F=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(J,O){si(y);F(J,O)};
c.onFetchSuccess=function(J,O){si(y);M(J,O)}}try{z&&d.retry&&!d.Ta.bypassNetworkless?(g.method="POST",d.Ta.writeThenSend?P("use_new_nwl_wts")?Hl().writeThenSend(p,g):Ol(p,g):P("use_new_nwl_saw")?Hl().sendAndWrite(p,g):Tl(p,g)):(g.method="POST",g.postParams||(g.postParams={}),Nh(p,g))}catch(J){if("InvalidAccessError"==J.name)y&&(si(y),y=0),hh(Error("An extension is blocking network request."));
else throw J;}y&&wi(function(){ti(a)},5E3)}
!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&hh(new Ii("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Ii("innertube xhrclient not ready",b,c,d);gh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,y){if(d.onError)d.onError(y)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.mb)&&(h=f);var k=a.config_.ob||!1,l=li(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},v=a.config_.nb&&f;v=v&&f.startsWith("Bearer");v||(q.key=a.config_.innertubeApiKey);var p=zh(""+h+n,q||{},!0);P("use_new_nwl")&&Hl().h||!P("use_new_nwl")&&
Ql()?Ak().then(function(z){e(z)}):e(!1)}
;var Yl={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},Zl={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function $l(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var am=A.ytPubsubPubsubInstance||new L,bm=A.ytPubsubPubsubSubscribedKeys||{},cm=A.ytPubsubPubsubTopicToKeys||{},dm=A.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ka;L.prototype.publish=L.prototype.ca;L.prototype.clear=L.prototype.clear;C("ytPubsubPubsubInstance",am);C("ytPubsubPubsubTopicToKeys",cm);C("ytPubsubPubsubIsSynchronous",dm);C("ytPubsubPubsubSubscribedKeys",bm);var em=Ch("initial_gel_batch_timeout",2E3),fm=Math.pow(2,16)-1,gm=void 0;function hm(){this.j=this.h=this.i=0}
var im=new hm,jm=new hm,km=!0,lm=A.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",lm);var mm=A.ytLoggingTransportGELProtoQueue_||new Map;C("ytLoggingTransportGELProtoQueue_",mm);var nm=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",nm);var om=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",om);
function pm(a,b){if("log_event"===a.endpoint){var c=qm(a),d=lm.get(c)||[];lm.set(c,d);d.push(a.payload);rm(b,d,c)}}
function sm(a,b){if("log_event"===a.endpoint){var c=qm(a,!0),d=mm.get(c)||[];mm.set(c,d);a=Zc(a.payload);d.push(a);rm(b,d,c,!0)}}
function rm(a,b,c,d){d=void 0===d?!1:d;a&&(gm=new a);a=Ch("tvhtml5_logging_max_batch")||Ch("web_logging_max_batch")||100;var e=Q(),f=d?jm.j:im.j;b.length>=a?tm({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d):10<=e-f&&(um(d),d?jm.j=e:im.j=e)}
function vm(a,b){if("log_event"===a.endpoint){var c=qm(a),d=new Map;d.set(c,[a.payload]);b&&(gm=new b);return new $e(function(e){gm&&gm.isReady()?wm(d,e,{bypassNetworkless:!0},!0):e()})}}
function xm(a,b){if("log_event"===a.endpoint){var c=qm(a,!0),d=new Map;d.set(c,[Zc(a.payload)]);b&&(gm=new b);return new $e(function(e){gm&&gm.isReady()?ym(d,e,{bypassNetworkless:!0},!0):e()})}}
function qm(a,b){var c="";if(a.da)c="visitorOnlyApprovedKey";else if(a.P){if(void 0===b?0:b){b=a.P.token;c=a.P;var d=new Jg;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Pc(d,2,Kg,c.playlistId);om[b]=d}else b=a.P,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),nm[a.P.token]=c;c=a.P.token}return c}
function tm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new $e(function(d){c?(window.clearTimeout(jm.i),window.clearTimeout(jm.h),jm.h=0):(window.clearTimeout(im.i),window.clearTimeout(im.h),im.h=0);if(gm&&gm.isReady())if(void 0!==b)if(c){var e=new Map,f=mm.get(b)||[];e.set(b,f);ym(e,d,a);mm.delete(b)}else e=new Map,f=lm.get(b)||[],e.set(b,f),wm(e,d,a),lm.delete(b);else c?(ym(mm,d,a),mm.clear()):(wm(lm,d,a),lm.clear());else um(c),d()})}
function um(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!im.h||a&&!jm.h)){var b=qh(function(){tm({writeThenSend:!0},void 0,a)},6E4);
a?jm.h=b:im.h=b}window.clearTimeout(a?jm.i:im.i);b=N("LOGGING_BATCH_TIMEOUT",Ch("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&km&&(b=em);b=qh(function(){tm({writeThenSend:!0},void 0,a)},b);
a?jm.i=b:im.i=b}
function wm(a,b,c,d){var e=gm;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=qb({context:ei(e.config_||di())});k.events=l;(l=nm[h])&&zm(k,h,l);delete nm[h];h="visitorOnlyApprovedKey"===h;Am(k,f,h);Bm(c);ui(e,"log_event",k,Cm(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
km=!1}}
function ym(a,b,c,d){var e=gm;c=void 0===c?{}:c;var f=Math.round(Q()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new Lg;var n=ki(e.config_||di());H(k,1,n);l=Dm(l);for(n=0;n<l.length;n++)Uc(k,3,Gg,l[n]);(l=om[h])&&Em(k,h,l);delete om[h];h="visitorOnlyApprovedKey"===h;Fm(k,f,h);Bm(c);k=Zc(k);h=Cm(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;ui(e,"log_event","",h);km=!1}}
function Bm(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function Cm(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Ta:a,da:b,Ob:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Am(a,b,c){a.requestTimeMs=String(b);P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID",void 0))&&(c=Gm(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Fm(a,b,c){G(a,2,b);if(!c&&(b=N("EVENT_ID",void 0))){c=Gm();var d=new Ig;G(d,1,b);G(d,2,c);H(a,5,d)}}
function Gm(){var a=N("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*fm/2));a++;a>fm&&(a=1);ah("BATCH_CLIENT_COUNTER",a);return a}
function zm(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Em(a,b,c){if(Nc(c,1===Qc(c,Kg)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,4,c);a=Rc(a,qg,1)||new qg;c=Rc(a,og,3)||new og;var e=new ng;e.setToken(b);G(e,1,d);Uc(c,12,ng,e);H(a,3,c)}
function Dm(a){for(var b=[],c=0;c<a.length;c++)try{var d=b,e=d.push;var f=String(a[c]),g=Gg;if(null==f||""==f)var h=new g;else{var k=JSON.parse(f);Array.isArray(k)||Wc(Error("Expected to deserialize an Array but got "+La(k)+": "+k));Yc=k;var l=new g(k);Yc=null;h=l}e.call(d,h)}catch(n){gh(new Ii("Transport failed to deserialize "+String(a[c])))}return b}
;var Hm=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Hm);function Im(a){Hm[a]=a in Hm?Hm[a]+1:0;return Hm[a]}
;function Jm(a,b){var c=void 0===c?{}:c;var d=Xl;N("ytLoggingEventsDefaultDisabled",!1)&&Xl==Xl&&(d=null);a:{c=void 0===c?{}:c;if(P("lr_drop_other_and_business_payloads")){if(Zl[a]||Yl[a])break a}else if(P("lr_drop_other_payloads")&&Zl[a])break a;var e={},f=Math.round(c.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=$l();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&c.ia&&(a=e.context,b=c.ia,b={index:Im(b),groupKey:b},a.sequence=
b,c.kb&&delete Hm[c.ia]);(c.sb?vm:pm)({endpoint:"log_event",payload:e,P:c.P,da:c.da},d)}}
;var Km=[{Ca:function(a){return"Cannot read property '"+a.key+"'"},
sa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ca:function(a){return"Cannot call '"+a.key+"'"},
sa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ca:function(a){return a.key+" is not defined"},
sa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Mm={X:[],V:[{fb:Lm,weight:500}]};function Lm(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Nm(){this.V=[];this.X=[]}
var Om;function Pm(){if(!Om){var a=Om=new Nm;a.X.length=0;a.V.length=0;Mm.X&&a.X.push.apply(a.X,Mm.X);Mm.V&&a.V.push.apply(a.V,Mm.V)}return Om}
;var Qm=new L;function Rm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Sm(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Sm(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Sm(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Sm(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Tm(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Um(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Rm(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Um(e+".ve",f,g,h):0;d+=g;d+=Um(e,a[e],b,c);if(500<d)break}}else c[b]=Vm(a),d+=c[b].length;else c[b]=Vm(a),d+=c[b].length;return d}
function Um(a,b,c,d){c+="."+a;a=Vm(b);d[c]=a;return c.length+a.length}
function Vm(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Wm=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Wm);function Xm(a){var b=void 0;b=void 0===b?{}:b;var c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&Xl===Xl&&(c=!0);c=c?null:Xl;b=void 0===b?{}:b;var d=Math.round(b.timestamp||Q());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=$l();d=new Fg;G(d,1,b.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&b.ia){e=b.ia;var f=Im(e),g=new Eg;G(g,2,f);G(g,1,e);H(d,3,g);b.kb&&delete Wm[b.ia]}H(a,33,d);(b.sb?xm:sm)({endpoint:"log_event",payload:a,P:b.P,da:b.da},c)}
;var Ym=new Set,Zm=0,$m=0,an=0,bn=[],cn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function dn(){for(var a=t(cn),b=a.next();!b.done;b=a.next()){var c=Fb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;var en={};function fn(a){return en[a]||(en[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var gn={},hn=[],rf=new L,jn={};function kn(){for(var a=t(hn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function ln(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[fn(b)]:a.getAttribute("data-"+b):null;return c}
function mn(a){rf.ca.apply(rf,arguments)}
;function nn(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function on(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function pn(a,b,c){qn||(qn={},ph(window,"message",function(d){a:{if(d.origin===on(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=qn[e.id])d.u=!0,d.u&&(D(d.v,d.sendMessage,d),d.v.length=0),d.Ha(e)}e=void 0}return e}));
qn[c]=b}
var qn=null;function rn(a,b,c){this.m=this.h=this.i=null;this.j=0;this.u=!1;this.v=[];this.l=null;this.I={};if(!a)throw Error("YouTube player element ID required.");this.id=Oa(this);this.A=c;this.setup(a,b)}
m=rn.prototype;m.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
m.getIframe=function(){return this.h};
m.Ha=function(a){sn(this,a.event,a)};
m.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);tn(this,a);return this};
function un(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.A===b[0]&&tn(a,c)}}
m.destroy=function(){this.h&&this.h.id&&(gn[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);qn&&(qn[this.id]=null);this.i=null;a=this.h;for(var c in ib)ib[c][0]==a&&nh(c);this.m=this.h=null};
m.Ka=function(){return{}};
function vn(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.v.push(b)}
function sn(a,b,c){a.l.l||(c={target:a,data:c},a.l.ca(b,c),mn(a.A+"."+b,c))}
function wn(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+on(a.i,"title"));(b=on(a.i,"width"))&&c.setAttribute("width",b.toString());(b=on(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ka();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(h){var k=Ub(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=on(a.i,"host")+("/embed/"+on(a.i,"videoId"))+"?"+Ob(g);return c}
m.Ua=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function xn(a){pn(a.i,a,a.id);a.j=rh(a.Ua.bind(a));ph(a.h,"load",function(){window.clearInterval(a.j);a.j=rh(a.Ua.bind(a))})}
m.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Mb(a.src):"https://www.youtube.com"),this.i=new nn(b),c||(b=wn(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.h=a,this.h.id||(this.h.id="widget"+Oa(this.h)),gn[this.h.id]=this,window.postMessage){this.l=new L;xn(this);b=on(this.i,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in jn)jn.hasOwnProperty(e)&&
un(this,e)}};
function tn(a,b){a.I[b]||(a.I[b]=!0,vn(a,"addEventListener",[b]))}
m.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=Ye(a),c=[Mb(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(Pb){if(Pb.name&&"SyntaxError"===Pb.name){if(!(Pb.message&&0<Pb.message.indexOf("target origin ''"))){var e=void 0,f=Pb;e=void 0===e?{}:e;e.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(P("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Zm)){var n=void 0,q=void 0,v=void 0,p=f,z=g,y=Hd(p),F=y.message||"Unknown Error",M=y.name||
"UnknownError",J=y.stack||p.i||"Not available";if(J.startsWith(M+": "+F)){var O=J.split("\n");O.shift();J=O.join("\n")}var db=y.lineNumber||"Not available",ic=y.fileName||"Not available",Ee=J,Z=z,S=0;if(p.hasOwnProperty("args")&&p.args&&p.args.length)for(var U=0;U<p.args.length&&!(S=Tm(p.args[U],"params."+U,Z,S),500<=S);U++);else if(p.hasOwnProperty("params")&&p.params){var V=p.params;if("object"===typeof p.params)for(q in V){if(V[q]){var ka="params."+q,vj=Vm(V[q]);Z[ka]=vj;S+=ka.length+vj.length;
if(500<S)break}}else Z.params=Vm(V)}if(bn.length)for(var td=0;td<bn.length&&!(S=Tm(bn[td],"params.context."+td,Z,S),500<=S);td++);navigator.vendor&&!Z.hasOwnProperty("vendor")&&(Z["device.vendor"]=navigator.vendor);var kb={message:F,name:M,lineNumber:db,fileName:ic,stack:Ee,params:Z,sampleWeight:1},wj=Number(p.columnNumber);isNaN(wj)||(kb.lineNumber=kb.lineNumber+":"+wj);if("IGNORED"===p.level)n=0;else a:{for(var xj=Pm(),yj=t(xj.X),sf=yj.next();!sf.done;sf=yj.next()){var zj=sf.value;if(kb.message&&
kb.message.match(zj.Qb)){n=zj.weight;break a}}for(var Aj=t(xj.V),tf=Aj.next();!tf.done;tf=Aj.next()){var Bj=tf.value;if(Bj.fb(kb)){n=Bj.weight;break a}}n=1}kb.sampleWeight=n;v=kb;for(var Cj=t(Km),uf=Cj.next();!uf.done;uf=Cj.next()){var vf=uf.value;if(vf.sa[v.name])for(var Dj=t(vf.sa[v.name]),wf=Dj.next();!wf.done;wf=Dj.next()){var Ej=wf.value,ud=v.message.match(Ej.regexp);if(ud){v.params["params.error.original"]=ud[0];for(var xf=Ej.groups,Fj={},Qb=0;Qb<xf.length;Qb++)Fj[xf[Qb]]=ud[Qb+1],v.params["params.error."+
xf[Qb]]=ud[Qb+1];v.message=vf.Ca(Fj);break}}}v.params||(v.params={});var Gj=Pm();v.params["params.errorServiceSignature"]="msg="+Gj.X.length+"&cb="+Gj.V.length;v.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(v.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));vb("sample").constructor!==ub&&(v.params["params.fconst"]="true");var pa=v;window.yterr&&"function"===typeof window.yterr&&window.yterr(pa);if(0!==pa.sampleWeight&&!Ym.has(pa.message)){if("ERROR"===
h){Qm.ca("handleError",pa);if(P("record_app_crashed_web")&&0===an&&1===pa.sampleWeight)if(an++,P("errors_via_jspb")){var yf=new Dg;G(yf,1,1);if(!P("report_client_error_with_app_crash_ks")){var Hj=new yg;G(Hj,1,pa.message);var Ij=new zg;H(Ij,3,Hj);var Jj=new Ag;H(Jj,5,Ij);var Kj=new Bg;H(Kj,9,Jj);H(yf,4,Kj)}var Dn=yf,Lj=new Gg;Tc(Lj,20,Hg,Dn);Xm(Lj)}else{var Mj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(Mj.systemHealth={crashData:{clientError:{logMessage:{message:pa.message}}}});
Jm("appCrashed",Mj)}$m++}else"WARNING"===h&&Qm.ca("handleWarning",pa);if(P("kevlar_gel_error_routing"))a:{var zf=void 0,Af=void 0,rc=h,R=pa;if(P("errors_via_jspb")){if(dn())Af=void 0;else{var Rb=new vg;G(Rb,1,R.stack);R.fileName&&G(Rb,4,R.fileName);var Fa=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Fa.length&&(1!==Fa.length||isNaN(Number(Fa[0]))?2!==Fa.length||isNaN(Number(Fa[0]))||isNaN(Number(Fa[1]))||(G(Rb,2,Number(Fa[0])),G(Rb,3,Number(Fa[1]))):G(Rb,2,Number(Fa[0])));var lb=
new yg;G(lb,1,R.message);G(lb,3,R.name);G(lb,6,R.sampleWeight);"ERROR"===rc?G(lb,2,2):"WARNING"===rc?G(lb,2,1):G(lb,2,0);var Bf=new wg;G(Bf,1,!0);Tc(Bf,3,xg,Rb);var mb=new sg;G(mb,3,window.location.href);for(var Nj=N("FEXP_EXPERIMENTS",[]),Cf=0;Cf<Nj.length;Cf++){var Oj=mb,En=Nj[Cf];Ec(Oj);Oc(Oj,5).push(En)}var Df=bh();if(!ch()&&Df)for(var Pj=t(Object.keys(Df)),nb=Pj.next();!nb.done;nb=Pj.next()){var Qj=nb.value,Ef=new ug;G(Ef,1,Qj);Ef.setValue(String(Df[Qj]));Uc(mb,4,ug,Ef)}var Ff=R.params;if(Ff){var Rj=
t(Object.keys(Ff));for(nb=Rj.next();!nb.done;nb=Rj.next()){var Sj=nb.value,Gf=new ug;G(Gf,1,"client."+Sj);Gf.setValue(String(Ff[Sj]));Uc(mb,4,ug,Gf)}}var Tj=N("SERVER_NAME",void 0),Uj=N("SERVER_VERSION",void 0);if(Tj&&Uj){var Hf=new ug;G(Hf,1,"server.name");Hf.setValue(Tj);Uc(mb,4,ug,Hf);var If=new ug;G(If,1,"server.version");If.setValue(Uj);Uc(mb,4,ug,If)}var vd=new zg;H(vd,1,mb);H(vd,2,Bf);H(vd,3,lb);Af=vd}var Vj=Af;if(!Vj)break a;var Wj=new Gg;Tc(Wj,163,Hg,Vj);Xm(Wj)}else{if(dn())zf=void 0;else{var sc=
{stackTrace:R.stack};R.fileName&&(sc.filename=R.fileName);var Ga=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Ga.length&&(1!==Ga.length||isNaN(Number(Ga[0]))?2!==Ga.length||isNaN(Number(Ga[0]))||isNaN(Number(Ga[1]))||(sc.lineNumber=Number(Ga[0]),sc.columnNumber=Number(Ga[1])):sc.lineNumber=Number(Ga[0]));var Jf={level:"ERROR_LEVEL_UNKNOWN",message:R.message,errorClassName:R.name,sampleWeight:R.sampleWeight};"ERROR"===rc?Jf.level="ERROR_LEVEL_ERROR":"WARNING"===rc&&(Jf.level="ERROR_LEVEL_WARNNING");
var Fn={isObfuscated:!0,browserStackInfo:sc},Sb={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(Sb.experimentIds=N("FEXP_EXPERIMENTS"));var Kf=bh();if(!ch()&&Kf)for(var Xj=t(Object.keys(Kf)),ob=Xj.next();!ob.done;ob=Xj.next()){var Yj=ob.value;Sb.kvPairs.push({key:Yj,value:String(Kf[Yj])})}var Lf=R.params;if(Lf){var Zj=t(Object.keys(Lf));for(ob=Zj.next();!ob.done;ob=Zj.next()){var ak=ob.value;Sb.kvPairs.push({key:"client."+ak,value:String(Lf[ak])})}}var bk=N("SERVER_NAME",void 0),
ck=N("SERVER_VERSION",void 0);bk&&ck&&(Sb.kvPairs.push({key:"server.name",value:bk}),Sb.kvPairs.push({key:"server.version",value:ck}));zf={errorMetadata:Sb,stackTrace:Fn,logMessage:Jf}}var dk=zf;if(!dk)break a;Jm("clientError",dk)}("ERROR"===rc||P("errors_flush_gel_always_killswitch"))&&tm()}if(!P("suppress_error_204_logging")){var pb=pa,tc=pb.params||{},Ta={urlParams:{a:"logerror",t:"jserror",type:pb.name,msg:pb.message.substr(0,250),line:pb.lineNumber,level:h,"client.name":tc.name},postParams:{url:N("PAGE_NAME",
window.location.href),file:pb.fileName},method:"POST"};tc.version&&(Ta["client.version"]=tc.version);if(Ta.postParams){pb.stack&&(Ta.postParams.stack=pb.stack);for(var ek=t(Object.keys(tc)),Mf=ek.next();!Mf.done;Mf=ek.next()){var fk=Mf.value;Ta.postParams["client."+fk]=tc[fk]}var Nf=bh();if(Nf)for(var gk=t(Object.keys(Nf)),Of=gk.next();!Of.done;Of=gk.next()){var hk=Of.value;Ta.postParams[hk]=Nf[hk]}var ik=N("SERVER_NAME",void 0),jk=N("SERVER_VERSION",void 0);ik&&jk&&(Ta.postParams["server.name"]=
ik,Ta.postParams["server.version"]=jk)}Nh(N("ECATCHER_REPORT_HOST","")+"/error_204",Ta)}try{Ym.add(pa.message)}catch(Kn){}Zm++}}}}}else throw Pb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function yn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function zn(a){return 0===a.search("get")||0===a.search("is")}
;function An(a,b){rn.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.M={};this.playerInfo={}}
u(An,rn);m=An.prototype;m.Ka=function(){var a=on(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=on(this.i,"embedConfig")){if(Na(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
m.Ha=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Na(a))for(var c in a)a.hasOwnProperty(c)&&(this.M[c]=a[c]);break;case "infoDelivery":Bn(this,a);break;case "initialDelivery":Na(a)&&(window.clearInterval(this.j),this.playerInfo={},this.M={},Cn(this,a.apiInterface),Bn(this,a));break;default:sn(this,b,a)}};
function Bn(a,b){if(Na(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Cn(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:yn(c)?this[c]=function(){this.playerInfo={};
this.M={};vn(this,c,arguments);return this}:zn(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){vn(this,c,arguments);
return this})},a)}
m.getVideoEmbedCode=function(){var a=on(this.i,"host")+("/embed/"+on(this.i,"videoId")),b=Number(on(this.i,"width")),c=Number(on(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);Eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(Db,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
m.getOptions=function(a){return this.M.namespaces?a?this.M[a]?this.M[a].options||[]:[]:this.M.namespaces||[]:[]};
m.getOption=function(a,b){if(this.M.namespaces&&a&&b&&this.M[a])return this.M[a][b]};
function Gn(a){if("iframe"!==a.tagName.toLowerCase()){var b=ln(a,"videoid");b&&(b={videoId:b,width:ln(a,"width"),height:ln(a,"height")},new An(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return gn[a]});
C("YT.scan",kn);C("YT.subscribe",function(a,b,c){rf.subscribe(a,b,c);jn[a]=!0;for(var d in gn)gn.hasOwnProperty(d)&&un(gn[d],a)});
C("YT.unsubscribe",function(a,b,c){qf(a,b,c)});
C("YT.Player",An);rn.prototype.destroy=rn.prototype.destroy;rn.prototype.setSize=rn.prototype.setSize;rn.prototype.getIframe=rn.prototype.getIframe;rn.prototype.addEventListener=rn.prototype.addEventListener;An.prototype.getVideoEmbedCode=An.prototype.getVideoEmbedCode;An.prototype.getOptions=An.prototype.getOptions;An.prototype.getOption=An.prototype.getOption;
hn.push(function(a){var b=a;b||(b=document);a=eb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=$a(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=eb(b);D(cb(a,b),Gn)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||kn();var Hn=A.onYTReady;Hn&&Hn();var In=A.onYouTubeIframeAPIReady;In&&In();var Jn=A.onYouTubePlayerAPIReady;Jn&&Jn();}).call(this);
