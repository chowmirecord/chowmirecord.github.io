!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).algoliasearch=e()}(function(){return function e(t,o,r){function n(s,a){if(!o[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=o[s]={exports:{}};t[s][0].call(l.exports,function(e){return n(t[s][1][e]||e)},l,l.exports,e,t,o,r)}return o[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)n(r[s]);return n}({1:[function(e,t,o){(function(r){function n(){var e;try{e=o.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=r.env.DEBUG),e}(o=t.exports=e(2)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},o.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+o.humanize(this.diff),t){var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var n=0,i=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(n++,"%c"===e&&(i=n))}),e.splice(i,0,r)}},o.save=function(e){try{null==e?o.storage.removeItem("debug"):o.storage.debug=e}catch(e){}},o.load=n,o.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},o.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),o.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],o.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},o.enable(n())}).call(this,e(11))},{11:11,2:2}],2:[function(e,t,o){function r(e){function t(){if(t.enabled){var e=t,r=+new Date,i=r-(n||r);e.diff=i,e.prev=n,e.curr=r,n=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=o.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(t,r){if("%%"===t)return t;c++;var n=o.formatters[r];if("function"==typeof n){var i=s[c];t=n.call(e,i),s.splice(c,1),c--}return t}),o.formatArgs.call(e,s),(t.log||o.log||console.log.bind(console)).apply(e,s)}}return t.namespace=e,t.enabled=o.enabled(e),t.useColors=o.useColors(),t.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return o.colors[Math.abs(r)%o.colors.length]}(e),"function"==typeof o.init&&o.init(t),t}(o=t.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},o.disable=function(){o.enable("")},o.enable=function(e){o.save(e),o.names=[],o.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length,n=0;n<r;n++)t[n]&&("-"===(e=t[n].replace(/\*/g,".*?"))[0]?o.skips.push(new RegExp("^"+e.substr(1)+"$")):o.names.push(new RegExp("^"+e+"$")))},o.enabled=function(e){var t,r;for(t=0,r=o.skips.length;t<r;t++)if(o.skips[t].test(e))return!1;for(t=0,r=o.names.length;t<r;t++)if(o.names[t].test(e))return!0;return!1},o.humanize=e(8),o.names=[],o.skips=[],o.formatters={};var n},{8:8}],3:[function(e,t,o){(function(r,n){!function(e,r){"object"==typeof o&&void 0!==t?t.exports=r():e.ES6Promise=r()}(this,function(){"use strict";function t(e){return"function"==typeof e}function o(){var e=setTimeout;return function(){return e(i,1)}}function i(){for(var e=0;e<x;e+=2)(0,C[e])(C[e+1]),C[e]=void 0,C[e+1]=void 0;x=0}function s(e,t){var o=arguments,r=this,n=new this.constructor(c);void 0===n[q]&&v(n);var i=r._state;return i?function(){var e=o[i-1];j(function(){return g(i,n,e,r._result)})}():d(r,n,e,t),n}function a(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(c);return p(t,e),t}function c(){}function u(e){try{return e.then}catch(e){return M.error=e,M}}function l(e,o,r){o.constructor===e.constructor&&r===s&&o.constructor.resolve===a?function(e,t){t._state===D?f(e,t._result):t._state===U?h(e,t._result):d(t,void 0,function(t){return p(e,t)},function(t){return h(e,t)})}(e,o):r===M?(h(e,M.error),M.error=null):void 0===r?f(e,o):t(r)?function(e,t,o){j(function(e){var r=!1,n=function(e,t,o,r){try{e.call(t,o,r)}catch(e){return e}}(o,t,function(o){r||(r=!0,t!==o?p(e,o):f(e,o))},function(t){r||(r=!0,h(e,t))},e._label);!r&&n&&(r=!0,h(e,n))},e)}(e,o,r):f(e,o)}function p(e,t){e===t?h(e,new TypeError("You cannot resolve a promise with itself")):function(e){return"function"==typeof e||"object"==typeof e&&null!==e}(t)?l(e,t,u(t)):f(e,t)}function f(e,t){e._state===P&&(e._result=t,e._state=D,0!==e._subscribers.length&&j(y,e))}function h(e,t){e._state===P&&(e._state=U,e._result=t,j(function(e){e._onerror&&e._onerror(e._result),y(e)},e))}function d(e,t,o,r){var n=e._subscribers,i=n.length;e._onerror=null,n[i]=t,n[i+D]=o,n[i+U]=r,0===i&&e._state&&j(y,e)}function y(e){var t=e._subscribers,o=e._state;if(0!==t.length){for(var r=void 0,n=void 0,i=e._result,s=0;s<t.length;s+=3)r=t[s],n=t[s+o],r?g(o,r,n,i):n(i);e._subscribers.length=0}}function m(){this.error=null}function g(e,o,r,n){var i=t(r),s=void 0,a=void 0,c=void 0,u=void 0;if(i){if((s=function(e,t){try{return e(t)}catch(e){return H.error=e,H}}(r,n))===H?(u=!0,a=s.error,s.error=null):c=!0,o===s)return void h(o,new TypeError("A promises callback cannot return that same promise."))}else s=n,c=!0;o._state!==P||(i&&c?p(o,s):u?h(o,a):e===D?f(o,s):e===U&&h(o,s))}function v(e){e[q]=J++,e._state=void 0,e._result=void 0,e._subscribers=[]}function b(e,t){this._instanceConstructor=e,this.promise=new e(c),this.promise[q]||v(this.promise),T(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?f(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&f(this.promise,this._result))):h(this.promise,new Error("Array Methods must be provided an Array"))}function w(e){this[q]=J++,this._result=this._state=void 0,this._subscribers=[],c!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof w?function(e,t){try{t(function(t){p(e,t)},function(t){h(e,t)})}catch(t){h(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}var _=void 0,T=_=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},x=0,S=void 0,A=void 0,j=function(e,t){C[x]=e,C[x+1]=t,2===(x+=2)&&(A?A(i):N())},O="undefined"!=typeof window?window:void 0,k=O||{},I=k.MutationObserver||k.WebKitMutationObserver,E="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),R="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,C=new Array(1e3),N=void 0;N=E?function(){return r.nextTick(i)}:I?function(){var e=0,t=new I(i),o=document.createTextNode("");return t.observe(o,{characterData:!0}),function(){o.data=e=++e%2}}():R?function(){var e=new MessageChannel;return e.port1.onmessage=i,function(){return e.port2.postMessage(0)}}():void 0===O&&"function"==typeof e?function(){try{var t=e("vertx");return void 0!==(S=t.runOnLoop||t.runOnContext)?function(){S(i)}:o()}catch(e){return o()}}():o();var q=Math.random().toString(36).substring(16),P=void 0,D=1,U=2,M=new m,H=new m,J=0;return b.prototype._enumerate=function(){for(var e=this.length,t=this._input,o=0;this._state===P&&o<e;o++)this._eachEntry(t[o],o)},b.prototype._eachEntry=function(e,t){var o=this._instanceConstructor,r=o.resolve;if(r===a){var n=u(e);if(n===s&&e._state!==P)this._settledAt(e._state,t,e._result);else if("function"!=typeof n)this._remaining--,this._result[t]=e;else if(o===w){var i=new o(c);l(i,e,n),this._willSettleAt(i,t)}else this._willSettleAt(new o(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},b.prototype._settledAt=function(e,t,o){var r=this.promise;r._state===P&&(this._remaining--,e===U?h(r,o):this._result[t]=o),0===this._remaining&&f(r,this._result)},b.prototype._willSettleAt=function(e,t){var o=this;d(e,void 0,function(e){return o._settledAt(D,t,e)},function(e){return o._settledAt(U,t,e)})},w.all=function(e){return new b(this,e).promise},w.race=function(e){var t=this;return new t(T(e)?function(o,r){for(var n=e.length,i=0;i<n;i++)t.resolve(e[i]).then(o,r)}:function(e,t){return t(new TypeError("You must pass an array to race."))})},w.resolve=a,w.reject=function(e){var t=new this(c);return h(t,e),t},w._setScheduler=function(e){A=e},w._setAsap=function(e){j=e},w._asap=j,w.prototype={constructor:w,then:s,catch:function(e){return this.then(null,e)}},w.polyfill=function(){var e=void 0;if(void 0!==n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var o=null;try{o=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===o&&!t.cast)return}e.Promise=w},w.Promise=w,w})}).call(this,e(11),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{11:11}],4:[function(e,t,o){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;t.exports=function(e,t,o){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var i=e.length;if(i===+i)for(var s=0;s<i;s++)t.call(o,e[s],s,e);else for(var a in e)r.call(e,a)&&t.call(o,e[a],a,e)}},{}],5:[function(e,t,o){(function(e){var o;o="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,o){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var o=function(){};o.prototype=t.prototype,e.prototype=new o,e.prototype.constructor=e}},{}],7:[function(e,t,o){var r={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},{}],8:[function(e,t,o){function r(e,t,o){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+o:Math.ceil(e/t)+" "+o+"s"}var n=1e3,i=6e4,s=36e5,a=24*s;t.exports=function(e,t){t=t||{};var o=typeof e;if("string"===o&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var o=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*o;case"days":case"day":case"d":return o*a;case"hours":case"hour":case"hrs":case"hr":case"h":return o*s;case"minutes":case"minute":case"mins":case"min":case"m":return o*i;case"seconds":case"second":case"secs":case"sec":case"s":return o*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o;default:return}}}}(e);if("number"===o&&!1===isNaN(e))return t.long?function(e){return r(e,a,"day")||r(e,s,"hour")||r(e,i,"minute")||r(e,n,"second")||e+" ms"}(e):function(e){return e>=a?Math.round(e/a)+"d":e>=s?Math.round(e/s)+"h":e>=i?Math.round(e/i)+"m":e>=n?Math.round(e/n)+"s":e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],9:[function(e,t,o){"use strict";var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString,i=Array.prototype.slice,s=e(10),a=Object.prototype.propertyIsEnumerable,c=!a.call({toString:null},"toString"),u=a.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(e){var t=e.constructor;return t&&t.prototype===e},f={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!f["$"+e]&&r.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),d=function(e){var t=null!==e&&"object"==typeof e,o="[object Function]"===n.call(e),i=s(e),a=t&&"[object String]"===n.call(e),f=[];if(!t&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var d=u&&o;if(a&&e.length>0&&!r.call(e,0))for(var y=0;y<e.length;++y)f.push(String(y));if(i&&e.length>0)for(var m=0;m<e.length;++m)f.push(String(m));else for(var g in e)d&&"prototype"===g||!r.call(e,g)||f.push(String(g));if(c)for(var v=function(e){if("undefined"==typeof window||!h)return p(e);try{return p(e)}catch(e){return!1}}(e),b=0;b<l.length;++b)v&&"constructor"===l[b]||!r.call(e,l[b])||f.push(l[b]);return f};d.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var e=Object.keys;Object.keys=function(t){return e(s(t)?i.call(t):t)}}}else Object.keys=d;return Object.keys||d},t.exports=d},{10:10}],10:[function(e,t,o){"use strict";var r=Object.prototype.toString;t.exports=function(e){var t=r.call(e),o="[object Arguments]"===t;return o||(o="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&"[object Function]"===r.call(e.callee)),o}},{}],11:[function(e,t,o){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===r||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function s(){if(!d){var e=i(function(){d&&f&&(d=!1,f.length?h=f.concat(h):y=-1,h.length&&s())});d=!0;for(var t=h.length;t;){for(f=h,h=[];++y<t;)f&&f[y].run();y=-1,t=h.length}f=null,d=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function a(e,t){this.fun=e,this.array=t}function c(){}var u,l,p=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:r}catch(e){u=r}try{l="function"==typeof clearTimeout?clearTimeout:n}catch(e){l=n}}();var f,h=[],d=!1,y=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];h.push(new a(e,t)),1!==h.length||d||i(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],12:[function(e,t,o){"use strict";function r(e,t){if(e.map)return e.map(t);for(var o=[],r=0;r<e.length;r++)o.push(t(e[r],r));return o}var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,o,a){return t=t||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e?r(s(e),function(s){var a=encodeURIComponent(n(s))+o;return i(e[s])?r(e[s],function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[s]))}).join(t):a?encodeURIComponent(n(a))+o+encodeURIComponent(n(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=Object.keys||function(e){var t=[];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.push(o);return t}},{}],13:[function(e,t,o){(function(o){function r(t,o,r){var i=e(1)("algoliasearch"),s=e(21),c=e(7),u=e(26),l="Usage: algoliasearch(applicationID, apiKey, opts)";if(!0!==r._allowEmptyCredentials&&!t)throw new a.AlgoliaSearchError("Please provide an application ID. "+l);if(!0!==r._allowEmptyCredentials&&!o)throw new a.AlgoliaSearchError("Please provide an API key. "+l);this.applicationID=t,this.apiKey=o,this.hosts={read:[],write:[]};var p=(r=r||{}).protocol||"https:";if(this._timeouts=r.timeouts||{connect:1e3,read:2e3,write:3e4},r.timeout&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=r.timeout),/:$/.test(p)||(p+=":"),"http:"!==r.protocol&&"https:"!==r.protocol)throw new a.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+r.protocol+"`)");if(this._checkAppIdData(),r.hosts)c(r.hosts)?(this.hosts.read=s(r.hosts),this.hosts.write=s(r.hosts)):(this.hosts.read=s(r.hosts.read),this.hosts.write=s(r.hosts.write));else{var f=u(this._shuffleResult,function(e){return t+"-"+e+".algolianet.com"});this.hosts.read=[this.applicationID+"-dsn.algolia.net"].concat(f),this.hosts.write=[this.applicationID+".algolia.net"].concat(f)}this.hosts.read=u(this.hosts.read,n(p)),this.hosts.write=u(this.hosts.write,n(p)),this.extraHeaders={},this.cache=r._cache||{},this._ua=r._ua,this._useCache=!(void 0!==r._useCache&&!r._cache)||r._useCache,this._useFallback=void 0===r.useFallback||r.useFallback,this._setTimeout=r._setTimeout,i("init done, %j",this)}function n(e){return function(t){return e+"//"+t.toLowerCase()}}function i(e){if(void 0===Array.prototype.toJSON)return JSON.stringify(e);var t=Array.prototype.toJSON;delete Array.prototype.toJSON;var o=JSON.stringify(e);return Array.prototype.toJSON=t,o}function s(e){var t={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r;r="x-algolia-api-key"===o||"x-algolia-application-id"===o?"**hidden for security purposes**":e[o],t[o]=r}return t}t.exports=r;var a=e(24),c=e(25),u=e(14),l=e(30),p=o.env.RESET_APP_DATA_TIMER&&parseInt(o.env.RESET_APP_DATA_TIMER,10)||12e4;r.prototype.initIndex=function(e){return new u(this,e)},r.prototype.setExtraHeader=function(e,t){this.extraHeaders[e.toLowerCase()]=t},r.prototype.getExtraHeader=function(e){return this.extraHeaders[e.toLowerCase()]},r.prototype.unsetExtraHeader=function(e){delete this.extraHeaders[e.toLowerCase()]},r.prototype.addAlgoliaAgent=function(e){-1===this._ua.indexOf(";"+e)&&(this._ua+=";"+e)},r.prototype._jsonRequest=function(t){function o(e,c){function g(){return u("retrying request"),f._incrementHostIndex(t.hostType),o(e,c)}f._checkAppIdData();var v,b=new Date;if(f._useCache&&(v=t.url),f._useCache&&r&&(v+="_body_"+c.body),f._useCache&&p&&void 0!==p[v])return u("serving response from cache"),f._promise.resolve(JSON.parse(p[v]));if(h>=f.hosts[t.hostType].length)return!y||d?(u("could not get any response"),f._promise.reject(new a.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+f.applicationID,{debugData:m}))):(u("switching to fallback"),h=0,c.method=t.fallback.method,c.url=t.fallback.url,c.jsonBody=t.fallback.body,c.jsonBody&&(c.body=i(c.jsonBody)),n=f._computeRequestHeaders(l),c.timeouts=f._getTimeoutsForRequest(t.hostType),f._setHostIndexByType(0,t.hostType),d=!0,o(f._request.fallback,c));var w=f._getHostByType(t.hostType),_=w+c.url,T={body:c.body,jsonBody:c.jsonBody,method:c.method,headers:n,timeouts:c.timeouts,debug:u};return u("method: %s, url: %s, headers: %j, timeouts: %d",T.method,_,T.headers,T.timeouts),e===f._request.fallback&&u("using fallback"),e.call(f,_,T).then(function(e){var t=e&&e.body&&e.body.message&&e.body.status||e.statusCode||e&&e.body&&200;u("received response: statusCode: %s, computed statusCode: %d, headers: %j",e.statusCode,t,e.headers);var o=2===Math.floor(t/100),i=new Date;if(m.push({currentHost:w,headers:s(n),content:r||null,contentLength:void 0!==r?r.length:null,method:c.method,timeouts:c.timeouts,url:c.url,startTime:b,endTime:i,duration:i-b,statusCode:t}),o)return f._useCache&&p&&(p[v]=e.responseText),e.body;if(4!==Math.floor(t/100))return h+=1,g();u("unrecoverable error");var l=new a.AlgoliaSearchError(e.body&&e.body.message,{debugData:m,statusCode:t});return f._promise.reject(l)},function(i){u("error: %s, stack: %s",i.message,i.stack);var l=new Date;return m.push({currentHost:w,headers:s(n),content:r||null,contentLength:void 0!==r?r.length:null,method:c.method,timeouts:c.timeouts,url:c.url,startTime:b,endTime:l,duration:l-b}),i instanceof a.AlgoliaSearchError||(i=new a.Unknown(i&&i.message,i)),h+=1,i instanceof a.Unknown||i instanceof a.UnparsableJSON||h>=f.hosts[t.hostType].length&&(d||!y)?(i.debugData=m,f._promise.reject(i)):i instanceof a.RequestTimeout?(u("retrying request with higher timeout"),f._incrementHostIndex(t.hostType),f._incrementTimeoutMultipler(),c.timeouts=f._getTimeoutsForRequest(t.hostType),o(e,c)):g()})}this._checkAppIdData();var r,n,u=e(1)("algoliasearch:"+t.url),l=t.additionalUA||"",p=t.cache,f=this,h=0,d=!1,y=f._useFallback&&f._request.fallback&&t.fallback;this.apiKey.length>500&&void 0!==t.body&&(void 0!==t.body.params||void 0!==t.body.requests)?(t.body.apiKey=this.apiKey,n=this._computeRequestHeaders(l,!1)):n=this._computeRequestHeaders(l),void 0!==t.body&&(r=i(t.body)),u("request start");var m=[],g=o(f._request,{url:t.url,method:t.method,body:r,jsonBody:t.body,timeouts:f._getTimeoutsForRequest(t.hostType)});if("function"!=typeof t.callback)return g;g.then(function(e){c(function(){t.callback(null,e)},f._setTimeout||setTimeout)},function(e){c(function(){t.callback(e)},f._setTimeout||setTimeout)})},r.prototype._getSearchParams=function(e,t){if(void 0===e||null===e)return t;for(var o in e)null!==o&&void 0!==e[o]&&e.hasOwnProperty(o)&&(t+=""===t?"":"&",t+=o+"="+encodeURIComponent("[object Array]"===Object.prototype.toString.call(e[o])?i(e[o]):e[o]));return t},r.prototype._computeRequestHeaders=function(t,o){var r=e(4),n={"x-algolia-agent":t?this._ua+";"+t:this._ua,"x-algolia-application-id":this.applicationID};return!1!==o&&(n["x-algolia-api-key"]=this.apiKey),this.userToken&&(n["x-algolia-usertoken"]=this.userToken),this.securityTags&&(n["x-algolia-tagfilters"]=this.securityTags),r(this.extraHeaders,function(e,t){n[t]=e}),n},r.prototype.search=function(t,o,r){var n=e(7),i=e(26);if(!n(t))throw new Error("Usage: client.search(arrayOfQueries[, callback])");"function"==typeof o?(r=o,o={}):void 0===o&&(o={});var s=this,a={requests:i(t,function(e){var t="";return void 0!==e.query&&(t+="query="+encodeURIComponent(e.query)),{indexName:e.indexName,params:s._getSearchParams(e.params,t)}})},c=i(a.requests,function(e,t){return t+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(e.indexName)+"?"+e.params)}).join("&"),u="/1/indexes/*/queries";return void 0!==o.strategy&&(u+="?strategy="+o.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:u,body:a,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:c}},callback:r})},r.prototype.setSecurityTags=function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var t=[],o=0;o<e.length;++o)if("[object Array]"===Object.prototype.toString.call(e[o])){for(var r=[],n=0;n<e[o].length;++n)r.push(e[o][n]);t.push("("+r.join(",")+")")}else t.push(e[o]);e=t.join(",")}this.securityTags=e},r.prototype.setUserToken=function(e){this.userToken=e},r.prototype.clearCache=function(){this.cache={}},r.prototype.setRequestTimeout=function(e){e&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=e)},r.prototype.setTimeouts=function(e){this._timeouts=e},r.prototype.getTimeouts=function(){return this._timeouts},r.prototype._getAppIdData=function(){var e=l.get(this.applicationID);return null!==e&&this._cacheAppIdData(e),e},r.prototype._setAppIdData=function(e){return e.lastChange=(new Date).getTime(),this._cacheAppIdData(e),l.set(this.applicationID,e)},r.prototype._checkAppIdData=function(){var e=this._getAppIdData(),t=(new Date).getTime();return null===e||t-e.lastChange>p?this._resetInitialAppIdData(e):e},r.prototype._resetInitialAppIdData=function(e){var t=e||{};return t.hostIndexes={read:0,write:0},t.timeoutMultiplier=1,t.shuffleResult=t.shuffleResult||function(e){for(var t,o,r=e.length;0!==r;)o=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[o],e[o]=t;return e}([1,2,3]),this._setAppIdData(t)},r.prototype._cacheAppIdData=function(e){this._hostIndexes=e.hostIndexes,this._timeoutMultiplier=e.timeoutMultiplier,this._shuffleResult=e.shuffleResult},r.prototype._partialAppIdDataUpdate=function(t){var o=e(4),r=this._getAppIdData();return o(t,function(e,t){r[t]=e}),this._setAppIdData(r)},r.prototype._getHostByType=function(e){return this.hosts[e][this._getHostIndexByType(e)]},r.prototype._getTimeoutMultiplier=function(){return this._timeoutMultiplier},r.prototype._getHostIndexByType=function(e){return this._hostIndexes[e]},r.prototype._setHostIndexByType=function(t,o){var r=e(21)(this._hostIndexes);return r[o]=t,this._partialAppIdDataUpdate({hostIndexes:r}),t},r.prototype._incrementHostIndex=function(e){return this._setHostIndexByType((this._getHostIndexByType(e)+1)%this.hosts[e].length,e)},r.prototype._incrementTimeoutMultipler=function(){var e=Math.max(this._timeoutMultiplier+1,4);return this._partialAppIdDataUpdate({timeoutMultiplier:e})},r.prototype._getTimeoutsForRequest=function(e){return{connect:this._timeouts.connect*this._timeoutMultiplier,complete:this._timeouts[e]*this._timeoutMultiplier}}}).call(this,e(11))},{1:1,11:11,14:14,21:21,24:24,25:25,26:26,30:30,4:4,7:7}],14:[function(e,t,o){function r(e,t){this.indexName=t,this.as=e,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}var n=e(20),i=e(22),s=e(23);t.exports=r,r.prototype.clearCache=function(){this.cache={}},r.prototype.search=n("query"),r.prototype.similarSearch=n("similarQuery"),r.prototype.browse=function(t,o,r){var n,i,s=e(27);0===arguments.length||1===arguments.length&&"function"==typeof arguments[0]?(n=0,r=arguments[0],t=void 0):"number"==typeof arguments[0]?(n=arguments[0],"number"==typeof arguments[1]?i=arguments[1]:"function"==typeof arguments[1]&&(r=arguments[1],i=void 0),t=void 0,o=void 0):"object"==typeof arguments[0]?("function"==typeof arguments[1]&&(r=arguments[1]),o=arguments[0],t=void 0):"string"==typeof arguments[0]&&"function"==typeof arguments[1]&&(r=arguments[1],o=void 0),o=s({},o||{},{page:n,hitsPerPage:i,query:t});var a=this.as._getSearchParams(o,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{params:a},hostType:"read",callback:r})},r.prototype.browseFrom=function(e,t){return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{cursor:e},hostType:"read",callback:t})},r.prototype.searchForFacetValues=function(t,o){var r=e(21),n=e(28);if(void 0===t.facetName||void 0===t.facetQuery)throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");var i=t.facetName,s=n(r(t),function(e){return"facetName"===e}),a=this.as._getSearchParams(s,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/facets/"+encodeURIComponent(i)+"/query",hostType:"read",body:{params:a},callback:o})},r.prototype.searchFacet=i(function(e,t){return this.searchForFacetValues(e,t)},s("index.searchFacet(params[, callback])","index.searchForFacetValues(params[, callback])")),r.prototype._search=function(e,t,o,r){return this.as._jsonRequest({cache:this.cache,method:"POST",url:t||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:e},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:e}},callback:o,additionalUA:r})},r.prototype.getObject=function(e,t,o){1!==arguments.length&&"function"!=typeof t||(o=t,t=void 0);var r="";if(void 0!==t){r="?attributes=";for(var n=0;n<t.length;++n)0!==n&&(r+=","),r+=t[n]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/"+encodeURIComponent(e)+r,hostType:"read",callback:o})},r.prototype.getObjects=function(t,o,r){var n=e(7),i=e(26);if(!n(t))throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");var s=this;1!==arguments.length&&"function"!=typeof o||(r=o,o=void 0);var a={requests:i(t,function(e){var t={indexName:s.indexName,objectID:e};return o&&(t.attributesToRetrieve=o.join(",")),t})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:a,callback:r})},r.prototype.as=null,r.prototype.indexName=null,r.prototype.typeAheadArgs=null,r.prototype.typeAheadValueOption=null},{20:20,21:21,22:22,23:23,26:26,27:27,28:28,7:7}],15:[function(e,t,o){"use strict";var r=e(13),n=e(16);t.exports=n(r,"(lite) ")},{13:13,16:16}],16:[function(e,t,o){(function(o){"use strict";var r=e(5),n=r.Promise||e(3).Promise;t.exports=function(t,i){function s(t,o,r){var n=e(21),i=e(17);return void 0===(r=n(r||{})).protocol&&(r.protocol=i()),r._ua=r._ua||s.ua,new a(t,o,r)}function a(){t.apply(this,arguments)}var c=e(6),u=e(24),l=e(18),p=e(19),f=e(29);i=i||"","debug"===o.env.NODE_ENV&&e(1).enable("algoliasearch*"),s.version=e(31),s.ua="Algolia for vanilla JavaScript "+i+s.version,s.initPlaces=f(s),r.__algolia={debug:e(1),algoliasearch:s};var h={hasXMLHttpRequest:"XMLHttpRequest"in r,hasXDomainRequest:"XDomainRequest"in r};return h.hasXMLHttpRequest&&(h.cors="withCredentials"in new XMLHttpRequest),c(a,t),a.prototype._request=function(e,t){return new n(function(o,r){function n(){a=!0,p.abort(),r(new u.RequestTimeout)}function i(){f=!0,clearTimeout(s),s=setTimeout(n,t.timeouts.complete)}if(h.cors||h.hasXDomainRequest){e=l(e,t.headers);var s,a,c=t.body,p=h.cors?new XMLHttpRequest:new XDomainRequest,f=!1;s=setTimeout(n,t.timeouts.connect),p.onprogress=function(){f||i()},"onreadystatechange"in p&&(p.onreadystatechange=function(){!f&&p.readyState>1&&i()}),p.onload=function(){if(!a){clearTimeout(s);var e;try{e={body:JSON.parse(p.responseText),responseText:p.responseText,statusCode:p.status,headers:p.getAllResponseHeaders&&p.getAllResponseHeaders()||{}}}catch(t){e=new u.UnparsableJSON({more:p.responseText})}e instanceof u.UnparsableJSON?r(e):o(e)}},p.onerror=function(e){a||(clearTimeout(s),r(new u.Network({more:e})))},p instanceof XMLHttpRequest?p.open(t.method,e,!0):p.open(t.method,e),h.cors&&(c&&("POST"===t.method?p.setRequestHeader("content-type","application/x-www-form-urlencoded"):p.setRequestHeader("content-type","application/json")),p.setRequestHeader("accept","application/json")),p.send(c)}else r(new u.Network("CORS not supported"))})},a.prototype._request.fallback=function(e,t){return e=l(e,t.headers),new n(function(o,r){p(e,t,function(e,t){e?r(e):o(t)})})},a.prototype._promise={reject:function(e){return n.reject(e)},resolve:function(e){return n.resolve(e)},delay:function(e){return new n(function(t){setTimeout(t,e)})}},s}}).call(this,e(11))},{1:1,11:11,17:17,18:18,19:19,21:21,24:24,29:29,3:3,31:31,5:5,6:6}],17:[function(e,t,o){"use strict";t.exports=function(){var e=window.document.location.protocol;return"http:"!==e&&"https:"!==e&&(e="http:"),e}},{}],18:[function(e,t,o){"use strict";t.exports=function(e,t){return/\?/.test(e)?e+="&":e+="?",e+r(t)};var r=e(12)},{12:12}],19:[function(e,t,o){"use strict";t.exports=function(e,t,o){function i(){t.debug("JSONP: success"),f||c||(f=!0,a||(t.debug("JSONP: Fail. Script loaded but did not call the callback"),s(),o(new r.JSONPScriptFail)))}function s(){clearTimeout(h),l.onload=null,l.onreadystatechange=null,l.onerror=null,u.removeChild(l)}if("GET"===t.method){t.debug("JSONP: start");var a=!1,c=!1;n+=1;var u=document.getElementsByTagName("head")[0],l=document.createElement("script"),p="algoliaJSONP_"+n,f=!1;window[p]=function(e){!function(){try{delete window[p],delete window[p+"_loaded"]}catch(e){window[p]=window[p+"_loaded"]=void 0}}(),c?t.debug("JSONP: Late answer, ignoring"):(a=!0,s(),o(null,{body:e}))},e+="&callback="+p,t.jsonBody&&t.jsonBody.params&&(e+="&"+t.jsonBody.params);var h=setTimeout(function(){t.debug("JSONP: Script timeout"),c=!0,s(),o(new r.RequestTimeout)},t.timeouts.complete);l.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||i()},l.onload=i,l.onerror=function(){t.debug("JSONP: Script error"),f||c||(s(),o(new r.JSONPScriptError))},l.async=!0,l.defer=!0,l.src=e,u.appendChild(l)}else o(new Error("Method "+t.method+" "+e+" is not supported by JSONP."))};var r=e(24),n=0},{24:24}],20:[function(e,t,o){t.exports=function(e,t){return function(o,n,i){if("function"==typeof o&&"object"==typeof n||"object"==typeof i)throw new r.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");0===arguments.length||"function"==typeof o?(i=o,o=""):1!==arguments.length&&"function"!=typeof n||(i=n,n=void 0),"object"==typeof o&&null!==o?(n=o,o=void 0):void 0!==o&&null!==o||(o="");var s="";void 0!==o&&(s+=e+"="+encodeURIComponent(o));var a;return void 0!==n&&(n.additionalUA&&(a=n.additionalUA,delete n.additionalUA),s=this.as._getSearchParams(n,s)),this._search(s,t,i,a)}};var r=e(24)},{24:24}],21:[function(e,t,o){t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],22:[function(e,t,o){t.exports=function(e,t){var o=!1;return function(){return o||(console.warn(t),o=!0),e.apply(this,arguments)}}},{}],23:[function(e,t,o){t.exports=function(e,t){return"algoliasearch: `"+e+"` was replaced by `"+t+"`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#"+e.toLowerCase().replace(/[\.\(\)]/g,"")}},{}],24:[function(e,t,o){"use strict";function r(t,o){var r=e(4),n=this;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):n.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=t||"Unknown error",o&&r(o,function(e,t){n[t]=e})}function n(e,t){function o(){var o=Array.prototype.slice.call(arguments,0);"string"!=typeof o[0]&&o.unshift(t),r.apply(this,o),this.name="AlgoliaSearch"+e+"Error"}return i(o,r),o}var i=e(6);i(r,Error),t.exports={AlgoliaSearchError:r,UnparsableJSON:n("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:n("RequestTimeout","Request timedout before getting a response"),Network:n("Network","Network issue, see err.more for details"),JSONPScriptFail:n("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:n("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:n("Unknown","Unknown error occured")}},{4:4,6:6}],25:[function(e,t,o){t.exports=function(e,t){t(e,0)}},{}],26:[function(e,t,o){var r=e(4);t.exports=function(e,t){var o=[];return r(e,function(r,n){o.push(t(r,n,e))}),o}},{4:4}],27:[function(e,t,o){var r=e(4);t.exports=function e(t){var o=Array.prototype.slice.call(arguments);return r(o,function(o){for(var r in o)o.hasOwnProperty(r)&&("object"==typeof t[r]&&"object"==typeof o[r]?t[r]=e({},t[r],o[r]):void 0!==o[r]&&(t[r]=o[r]))}),t}},{4:4}],28:[function(e,t,o){t.exports=function(t,o){var r=e(9),n={};return e(4)(r(t),function(e){!0!==o(e)&&(n[e]=t[e])}),n}},{4:4,9:9}],29:[function(e,t,o){t.exports=function(t){return function(o,n,i){var s=e(21);(i=i&&s(i)||{}).hosts=i.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"],0!==arguments.length&&"object"!=typeof o&&void 0!==o||(o="",n="",i._allowEmptyCredentials=!0);var a=t(o,n,i).initIndex("places");return a.search=r("query","/1/places/query"),a.getObject=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/places/"+encodeURIComponent(e),hostType:"read",callback:t})},a}};var r=e(20)},{20:20,21:21}],30:[function(e,t,o){(function(o){function r(e,t){return a("localStorage failed with",t),function(){try{o.localStorage.removeItem(c)}catch(e){}}(),(s=u).get(e)}function n(e,t){return 1===arguments.length?s.get(e):s.set(e,t)}function i(){try{return"localStorage"in o&&null!==o.localStorage&&(o.localStorage[c]||o.localStorage.setItem(c,JSON.stringify({})),!0)}catch(e){return!1}}var s,a=e(1)("algoliasearch:src/hostIndexState.js"),c="algoliasearch-client-js",u={state:{},set:function(e,t){return this.state[e]=t,this.state[e]},get:function(e){return this.state[e]||null}},l={set:function(e,t){u.set(e,t);try{var n=JSON.parse(o.localStorage[c]);return n[e]=t,o.localStorage[c]=JSON.stringify(n),n[e]}catch(t){return r(e,t)}},get:function(e){try{return JSON.parse(o.localStorage[c])[e]||null}catch(t){return r(e,t)}}};s=i()?l:u,t.exports={get:n,set:n,supportsLocalStorage:i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],31:[function(e,t,o){"use strict";t.exports="3.24.3"},{}]},{},[15])(15)});