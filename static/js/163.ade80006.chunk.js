"use strict";(self.webpackChunkrun_app=self.webpackChunkrun_app||[]).push([[163],{9163:function(n,r,t){t.r(r),t.d(r,{WeekTrainingsPage:function(){return w},default:function(){return k}});var e,a=t(168),i=t(6031),u=t(1933),s=t(6871),c=t(4009),o=t(184),p=function(n){var r=n.items,t=n.weekId,e=(0,s.s0)();return(0,o.jsx)(c.aV,{children:r.map((function(n){var r=n.title,a=n.id,i=n.workout_duration,u=n.is_passed;return(0,o.jsxs)(c.dY,{passed:u,onClick:function(){return e("/trainings/".concat(t,"/").concat(a))},children:[(0,o.jsx)("span",{children:r}),(0,o.jsx)("p",{children:i})]},a)}))})},f=t(7622),d=t(3867),h=t(1480),l=t(6046),x=t(1156),w=function(){var n=(0,s.UO)().weekId,r=(0,l.C)(x.M7),t=(0,u.useQuery)(["week",n,r],(function(){return(0,f.LH)(n)})),e=t.data,a=t.isLoading,i=t.isSuccess,w=t.isError,k=(0,s.s0)();return(0,o.jsxs)(g,{children:[a&&(0,o.jsx)(h.a,{}),w&&(0,o.jsx)("p",{children:"Something went wrong..."}),i&&e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.X6,{dark:!0,children:e.title}),(0,o.jsx)(p,{items:e.trainings,weekId:e.id})]}),(0,o.jsx)(d.z,{primary:!0,type:"button",onClick:function(){return k("/trainings")},style:{marginTop:"30px"},children:(0,o.jsx)("span",{children:"Go back"})})]})},k=w,g=i.ZP.div(e||(e=(0,a.Z)(["\n  text-align: center;\n  width: 100%;\n  max-width: 480px;\n  margin: auto;\n"])))},7622:function(n,r,t){t.d(r,{G3:function(){return o},JG:function(){return s},JU:function(){return p},LH:function(){return c}});var e=t(4165),a=t(5861),i=t(4569),u=t.n(i),s=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(){var r;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/weeks/");case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/week/".concat(r,"/"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){var t;return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/training/".concat(r,"/"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,e.Z)().mark((function n(r){return(0,e.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u().post("/users/pass/training/",{training:r});case 1:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=163.ade80006.chunk.js.map