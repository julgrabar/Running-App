(self.webpackChunkrun_app=self.webpackChunkrun_app||[]).push([[345],{5345:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return E}});var n=t(168),o=t(2982),i=t(885),a=t(6031),u=t(2791),c=t(1933),s=t(6871);function d(){return d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}var l=function(e,r){void 0===r&&(r={});var n,o=r,i=o.volume,a=void 0===i?1:i,c=o.playbackRate,s=void 0===c?1:c,l=o.soundEnabled,_=void 0===l||l,p=o.interrupt,f=void 0!==p&&p,m=o.onload,k=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(o,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),h=u.useRef(null),w=u.useRef(!1),v=u.useState(null),b=v[0],y=v[1],g=u.useState(null),x=g[0],j=g[1],T=function(){"function"===typeof m&&m.call(this),w.current&&y(1e3*this.duration()),j(this)};n=function(){return t.e(845).then(t.t.bind(t,1845,23)).then((function(r){var t;w.current||(h.current=null!==(t=r.Howl)&&void 0!==t?t:r.default.Howl,w.current=!0,new h.current(d({src:Array.isArray(e)?e:[e],volume:a,rate:s,onload:T},k)))})),function(){w.current=!1}},(0,u.useEffect)(n,[]),u.useEffect((function(){h.current&&x&&j(new h.current(d({src:Array.isArray(e)?e:[e],volume:a,onload:T},k)))}),[JSON.stringify(e)]),u.useEffect((function(){x&&(x.volume(a),x.rate(s))}),[a,s]);var W=u.useCallback((function(e){"undefined"===typeof e&&(e={}),x&&(_||e.forceSoundEnabled)&&(f&&x.stop(),e.playbackRate&&x.rate(e.playbackRate),x.play(e.id))}),[x,_,f]),M=u.useCallback((function(e){x&&x.stop(e)}),[x]),S=u.useCallback((function(e){x&&x.pause(e)}),[x]);return[W,{sound:x,stop:M,pause:S,duration:b}]};var _=t.p+"static/media/pause.1071008aaf34ff48cdc52b9f26506338.svg";var p,f=t.p+"static/media/play.6793b61117f1d66d088536f2c3013b54.svg",m=a.ZP.div(p||(p=(0,n.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span {\n    font-size: 80px;\n    font-weight: 500;\n  }\n"]))),k=t(5686),h=t(2995),w=t(184),v=t(9260),b=function(e){var r=e.exersice,t=e.onTimerFinished,n=r.duration,o=(0,u.useState)(n),a=(0,i.Z)(o,2),c=a[0],s=a[1],d=(0,u.useState)(!0),p=(0,i.Z)(d,2),b=p[0],y=p[1],g=l(v,{volume:.5}),x=(0,i.Z)(g,1)[0],j=(0,u.useRef)();(0,u.useEffect)((function(){return W(),function(){return T()}}),[]),(0,u.useEffect)((function(){0===c&&(T(),x(),t(),W())}),[c,x]),(0,u.useEffect)((function(){s(n)}),[n,r]);var T=function(){"number"===typeof j.current&&((0,k.clearWorkerTimer)(j.current),y(!1))},W=function(){j.current=(0,k.setWorkerInterval)((function(){s((function(e){return e-1}))}),1e3),y(!0)};return(0,w.jsxs)(m,{children:[(0,w.jsxs)("span",{children:[Math.floor(c/60)>0&&"".concat(Math.floor(c/60)," :"),(c%60).toString().padStart(2,"0")]}),(0,w.jsx)(h.z,{title:b?(0,w.jsx)("img",{src:_,alt:"Stop"}):(0,w.jsx)("img",{src:f,alt:"Start"}),onClick:b?T:W,primary:!0,round:{diameter:50}})]})},y=t(4009),g={exercise_type:{image:"https://res.cloudinary.com/hbtwvj70x/image/upload/v1/media/exercises/walking_gif_rlcfoy",title:"Fast walking"},duration:300};var x=t(7622);var j,T,W=t.p+"static/media/finished.64f5cbd0b786fccef8fdd47a0976c54f.svg",M=t(6046),S=t(1156),I=t(1480),O=t(7945),Z="idle",P="inProgress",q="finished",E=function(){var e=(0,M.C)(S.M7),r=(0,u.useState)(Z),t=(0,i.Z)(r,2),n=t[0],a=t[1],d=(0,u.useState)(0),l=(0,i.Z)(d,2),_=l[0],p=l[1],m=(0,s.UO)(),k=m.workoutId,v=m.weekId,j=(0,c.useQuery)(["workout",k],(function(){return(0,x.G3)(k)})),T=j.data,E=j.isLoading,B=(0,u.useMemo)((function(){var e=O.N.reduce((function(e,r){return[].concat((0,o.Z)(e),(0,o.Z)(r.trainings))}),[]).find((function(e){return e.id===Number(k)}));return function(e){if(!e)return null;var r=e.exercises,t=e.repetitions_number,n=[];n.push(g);for(var i=1;i<=t;i+=1)n=[].concat((0,o.Z)(n),(0,o.Z)(r));return n.push(g),{title:e.title,workout:n}}(T||e)}),[k,T]),F=function(){a(q),!e||!k||null!==T&&void 0!==T&&T.is_passed||(0,x.JU)(k)};return(0,w.jsxs)(R,{children:[E&&(0,w.jsx)(I.a,{absolute:!0}),!E&&!B&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("p",{children:"This workout doesn't exist..."}),(0,w.jsx)(h.p,{title:"To program",primary:!0,path:"/trainings",marginTop:"20px"})]}),!E&&B&&(0,w.jsxs)(w.Fragment,{children:[n===Z&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y.X6,{dark:!0,children:B.title}),(0,w.jsx)(h.z,{title:(0,w.jsx)("img",{src:f,alt:"Play"}),onClick:function(){return a(P)},round:{diameter:160},primary:!0})]}),n===P&&B.workout.length>0&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y.X6,{dark:!0,children:B.workout[_].exercise_type.title}),(0,w.jsx)("img",{className:"exercise-img",src:B.workout[_].exercise_type.image,alt:B.workout[_].exercise_type.title}),(0,w.jsx)(b,{exersice:B.workout[_],onTimerFinished:function(){B&&_===B.workout.length-1?F():p((function(e){return e+1}))}}),(0,w.jsxs)(C,{children:[0===_?(0,w.jsx)(h.p,{primary:!0,title:"Go back",path:"/trainings/".concat(v)}):(0,w.jsx)(h.z,{primary:!0,title:"Previous",onClick:function(){return p((function(e){return e-1}))}}),(0,w.jsx)(h.z,{primary:!0,onClick:B.workout.length===_+1?F:function(){return p((function(e){return e+1}))},title:B.workout.length===_+1?"Finish workout":"Next"})]}),(0,w.jsx)("progress",{max:B.workout.length,value:_+1})]}),n===q&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y.X6,{dark:!0,children:"Well done! Workout is finished."}),(0,w.jsx)("img",{src:W,alt:"Workout is finished"}),(0,w.jsx)(h.p,{title:"To program",primary:!0,path:"/trainings",marginTop:"20px"})]})]})]})},R=a.ZP.div(j||(j=(0,n.Z)(["\n  text-align: center;\n  width: 100%;\n  max-width: 360px;\n  margin: auto;\n  span {\n    display: block;\n  }\n\n  img.exercise-img {\n    max-height: 225px;\n  }\n\n  progress {\n    width: 100%;\n  }\n"]))),C=a.ZP.div(T||(T=(0,n.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-top: 20px;\n"])))},5686:function(module){var r;self,r=function(){return function(){"use strict";var __webpack_modules__={902:function(e,r,t){var n=this&&this.__spreadArray||function(e,r){for(var t=0,n=r.length,o=e.length;t<n;t++,o++)e[o]=r[t];return e},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.clearWorkerTimer=r.setWorkerInterval=r.setWorkerTimeout=void 0;var i=o(t(368));window.workerTimer=window.workerTimer instanceof i.default?window.workerTimer:new i.default;var a=window.workerTimer.setWorkerTimer.bind(window.workerTimer);r.setWorkerTimeout=function(e,r){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return a.apply(void 0,n(["timeout",e,r],t))},r.setWorkerInterval=function(e,r){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return a.apply(void 0,n(["interval",e,r],t))},r.clearWorkerTimer=window.workerTimer.clearWorkerTimer.bind(window.workerTimer)},368:function _(__unused_webpack_module,exports,__nested_webpack_require_1712__){var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var WorkerTimer_worker_ts_1=__importDefault(__nested_webpack_require_1712__(612)),WorkerTimer=function(){function WorkerTimer(){var e=this;this._worker=new WorkerTimer_worker_ts_1.default,this._cbMap=new Map,this._worker.addEventListener("message",(function(r){e._callId(r)}))}return WorkerTimer.prototype._genId=function(){for(var e=Math.random();this._cbMap.has(e);)e=Math.random();return e},WorkerTimer.prototype._callId=function(ev){var id=ev.data.payload.id,record=this._cbMap.get(id);record&&("string"==typeof record.cb?eval(record.cb).apply(void 0,record.args):record.cb.apply(record,record.args),"timeout"===record.method&&this._cbMap.delete(id))},WorkerTimer.prototype.setWorkerTimer=function(e,r,t){for(var n=[],o=3;o<arguments.length;o++)n[o-3]=arguments[o];var i=this._genId();return this._cbMap.set(i,{method:e,cb:r,args:n}),this._worker.postMessage({type:"set",payload:{method:e,id:i,delay:t||0}}),i},WorkerTimer.prototype.clearWorkerTimer=function(e){e&&"number"==typeof e&&(this._cbMap.delete(e),this._worker.postMessage({type:"clear",payload:{id:e}}))},WorkerTimer}();exports.default=WorkerTimer},612:function(e,r,t){t.r(r),t.d(r,{default:function(){return i}});var n=t(477),o=t.n(n);function i(){return o()('!function(){"use strict";var t,e,a;t=self,e=new Map,a=function(e){t.postMessage({type:"call",payload:{id:e}})},t.addEventListener("message",(function(t){var d,o,i,n;"set"===t.data.type&&(d=t.data.payload.method,o=t.data.payload.id,i=t.data.payload.delay,n="timeout"===d?setTimeout((function(){a(o),e.delete(o)}),i):setInterval((function(){return a(o)}),i),e.set(o,{method:d,timerId:n})),"clear"===t.data.type&&function(t){var a=e.get(t);a&&("timeout"===a.method?clearTimeout(a.timerId):clearInterval(a.timerId),e.delete(t))}(t.data.payload.id)}))}();',"Worker",void 0,void 0)}},477:function(e){e.exports=function(e,r,t,n){var o=self||window;try{try{var i;try{i=new o.Blob([e])}catch(r){(i=new(o.BlobBuilder||o.WebKitBlobBuilder||o.MozBlobBuilder||o.MSBlobBuilder)).append(e),i=i.getBlob()}var a=o.URL||o.webkitURL,u=a.createObjectURL(i),c=new o[r](u,t);return setTimeout((function(){a.revokeObjectURL(u)})),c}catch(n){return new o[r]("data:application/javascript,".concat(encodeURIComponent(e)),t)}}catch(e){if(!n)throw Error("Inline worker is not supported");return new o[r](n,t)}}}},__webpack_module_cache__={};function __nested_webpack_require_5630__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__nested_webpack_require_5630__),r.exports}__nested_webpack_require_5630__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __nested_webpack_require_5630__.d(r,{a:r}),r},__nested_webpack_require_5630__.d=function(e,r){for(var t in r)__nested_webpack_require_5630__.o(r,t)&&!__nested_webpack_require_5630__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},__nested_webpack_require_5630__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__nested_webpack_require_5630__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__nested_webpack_require_5630__(902);return __webpack_exports__}()},module.exports=r()},9260:function(e,r,t){"use strict";e.exports=t.p+"static/media/sound.fa3551f6fab3f9997888.mp3"}}]);
//# sourceMappingURL=345.6281120f.chunk.js.map