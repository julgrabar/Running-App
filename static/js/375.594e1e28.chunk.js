"use strict";(self.webpackChunkrun_app=self.webpackChunkrun_app||[]).push([[375],{5375:function(e,n,s){s.r(n),s.d(n,{default:function(){return k}});var i,r=s(168),a=s(3504),d=s(6031),t=s(1413),o=s(887),l=d.ZP.form(i||(i=(0,r.Z)(["\n  input {\n    width: 100%;\n    padding: 15px;\n    background: #f7f8f8;\n    border: 1px solid #f7f8f8;\n    border-radius: 14px;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 1.5;\n\n    &:not(:last-child) {\n      margin-bottom: 15px;\n    }\n  }\n\n  button {\n    margin-top: auto;\n  }\n\n  p {\n    font-size: 10px;\n    color: red;\n  }\n"]))),m=s(4695),u=s(776),p=s(6046),c=s(8430),h=s(1156),x=s(1480),g=s(2995),f=s(184),v=function(){var e,n,s,i,r,a,d,u,v=(0,p.T)(),j=(0,p.C)(h.aT),b=(0,o.cI)({resolver:(0,m.X)(w),reValidateMode:"onChange"}),Z=b.register,y=b.handleSubmit,q=b.formState.errors;return(0,f.jsxs)(l,{onSubmit:y((function(e){v((0,c.IU)(e))})),children:[(null===(e=q.username)||void 0===e?void 0:e.message)&&(0,f.jsx)("p",{children:null===(n=q.username)||void 0===n?void 0:n.message}),(0,f.jsx)("input",(0,t.Z)((0,t.Z)({},Z("username")),{},{placeholder:"User name",type:"text",autoComplete:"off"})),(null===(s=q.password)||void 0===s?void 0:s.message)&&(0,f.jsx)("p",{children:null===(i=q.password)||void 0===i?void 0:i.message}),(0,f.jsx)("input",(0,t.Z)((0,t.Z)({},Z("password")),{},{placeholder:"Password",type:"password"})),(null===(r=q.password2)||void 0===r?void 0:r.message)&&(0,f.jsx)("p",{children:null===(a=q.password2)||void 0===a?void 0:a.message}),(0,f.jsx)("input",(0,t.Z)((0,t.Z)({},Z("password2")),{},{placeholder:"Repeate the password",type:"password",autoComplete:"off"})),(null===(d=q.email)||void 0===d?void 0:d.message)&&(0,f.jsx)("p",{children:null===(u=q.email)||void 0===u?void 0:u.message}),(0,f.jsx)("input",(0,t.Z)((0,t.Z)({},Z("email")),{},{placeholder:"E-mail",type:"email",autoComplete:"off"})),j?(0,f.jsx)(x.a,{}):(0,f.jsx)(g.z,{primary:!0,title:"Sign up",type:"submit"})]})},w=u.Ry().shape({username:u.Z_().required("Field is required").max(150,"Username must be less, than 150 characters"),password:u.Z_().required("Field is required").min(9,"Password must be at least 9 characters"),password2:u.Z_().required("Confirm Password is required").oneOf([u.iH("password")],"Passwords must match"),email:u.Z_().required("Field is required").email("Enter valid e-mail")}),j=s(4009);s(2791);var b,Z,y=s.p+"static/media/auth.b638e662c2abd7799b3bace0afa3db84.svg",q=function(){var e,n,s,i,r=(0,p.T)(),a=(0,p.C)(h.aT),d=(0,o.cI)({resolver:(0,m.X)(C),reValidateMode:"onChange"}),u=d.register,v=d.handleSubmit,w=d.formState.errors;return(0,f.jsxs)(l,{onSubmit:v((function(e){r((0,c.x4)(e))})),children:[(null===(e=w.username)||void 0===e?void 0:e.message)&&(0,f.jsx)("p",{children:null===(n=w.username)||void 0===n?void 0:n.message}),(0,f.jsx)("input",(0,t.Z)((0,t.Z)({},u("username")),{},{placeholder:"User name",type:"text",autoComplete:"off"})),(null===(s=w.password)||void 0===s?void 0:s.message)&&(0,f.jsx)("p",{children:null===(i=w.password)||void 0===i?void 0:i.message}),(0,f.jsx)("input",(0,t.Z)((0,t.Z)({},u("password")),{},{placeholder:"Password",type:"password"})),a?(0,f.jsx)(x.a,{}):(0,f.jsx)(g.z,{primary:!0,title:"Sign in",type:"submit"})]})},C=u.Ry().shape({username:u.Z_().required("Field is required").max(150,"Username must be less, than 150 characters"),password:u.Z_().required("Field is required").min(9,"Password must be at least 9 characters")}),k=function(e){var n=e.signup,s=e.login;return(0,f.jsxs)(P,{children:[(0,f.jsx)("img",{src:y,alt:"Hello, user!"}),(0,f.jsxs)(S,{children:[n&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j.X6,{dark:!0,children:"Create an Account"}),(0,f.jsx)(v,{}),(0,f.jsxs)("p",{children:["Already have an account? ",(0,f.jsx)(a.rU,{to:"/login",children:"Login"})]})]}),s&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(j.X6,{dark:!0,children:"Welcome Back"}),(0,f.jsx)(q,{}),(0,f.jsxs)("p",{children:["Don\u2019t have an account yet? ",(0,f.jsx)(a.rU,{to:"/signup",children:"Sign up"})]})]})]})]})},P=d.ZP.div(b||(b=(0,r.Z)(["\n  width: 100%;\n  min-height: 100%;\n  margin: 0 auto;\n\n  img {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    img {\n      display: inline-block;\n      width: 50%;\n      margin: auto;\n      max-width: 450px;\n    }\n  }\n"]))),S=d.ZP.div(Z||(Z=(0,r.Z)(["\n  max-width: 350px;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  text-align: center;\n  margin: 0 auto;\n\n  form {\n    margin-bottom: auto;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-left: 30px;\n    min-height: auto;\n    width: 350px;\n\n    form {\n      margin-bottom: 15px;\n    }\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 400px;\n    margin: auto;\n  }\n"])))}}]);
//# sourceMappingURL=375.594e1e28.chunk.js.map