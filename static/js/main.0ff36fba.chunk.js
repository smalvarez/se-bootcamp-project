(this["webpackJsonpse-bootcamp-project"]=this["webpackJsonpse-bootcamp-project"]||[]).push([[0],{40:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(9),o=a.n(s),n=a(20),l=a(3),i=(a(40),a(1));var d=()=>Object(i.jsx)("header",{className:"bg-dark text-white text-center py-4",children:Object(i.jsx)("h1",{children:"SE Boot Camp Project 2"})}),j=a(34),m=a(51),h=a(52),u=a(53);a(29);var b=e=>{let{show:t,handleClose:a}=e;const[c,s]=Object(r.useState)(""),[o,n]=Object(r.useState)(""),[l,d]=Object(r.useState)(""),[m,b]=Object(r.useState)(""),[p,O]=Object(r.useState)(""),[x,g]=Object(r.useState)("");return Object(i.jsxs)(h.a,{show:t,onHide:a,children:[Object(i.jsx)(h.a.Header,{closeButton:!0,children:Object(i.jsx)(h.a.Title,{children:"Sign Up"})}),Object(i.jsx)(h.a.Body,{children:Object(i.jsxs)(u.a,{onSubmit:async e=>{if(e.preventDefault(),m.length<6)alert("Password must be at least 6 characters long!");else if(m===p)try{const e=await fetch("http://localhost:3001/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:c,last_name:o,email:l,password:m})}),t=await e.json();if(!e.ok){if(409!==e.status||"Email already exists."!==t.message)throw new Error("HTTP error! status: ".concat(e.status));return void g("Email address is already in use. Please use a different email.")}alert("Signup successful"),a()}catch(x){console.error("Error:",x),alert("An error occurred. Please try again.")}else alert("Passwords do not match!")},children:[Object(i.jsx)(u.a.Group,{controlId:"formFirstName",children:Object(i.jsx)(u.a.Control,{type:"text",placeholder:"First Name*",value:c,onChange:e=>s(e.target.value),required:!0})}),Object(i.jsx)(u.a.Group,{controlId:"formLastName",children:Object(i.jsx)(u.a.Control,{type:"text",placeholder:"Last Name*",value:o,onChange:e=>n(e.target.value),required:!0})}),Object(i.jsx)(u.a.Group,{controlId:"formEmail",children:Object(i.jsx)(u.a.Control,{type:"email",placeholder:"Email Address*",value:l,onChange:e=>d(e.target.value),required:!0})}),Object(i.jsx)(u.a.Group,{controlId:"formPassword",children:Object(i.jsx)(u.a.Control,{type:"password",placeholder:"Password*",value:m,onChange:e=>b(e.target.value),required:!0})}),Object(i.jsx)(u.a.Group,{controlId:"formConfirmPassword",children:Object(i.jsx)(u.a.Control,{type:"password",placeholder:"Confirm Password*",value:p,onChange:e=>O(e.target.value),required:!0})}),x&&Object(i.jsx)("p",{style:{color:"red"},children:x}),Object(i.jsx)(j.a,{variant:"primary",type:"submit",block:!0,children:"Sign Up"})]})})]})},p=a(50);var O=function(e){let{show:t,handleClose:a,user:c,setIsLoggedIn:s}=e;const[o,n]=Object(r.useState)(""),[d,m]=Object(r.useState)(""),[b,O]=Object(r.useState)(""),[x,g]=Object(r.useState)(""),[y,f]=Object(r.useState)(""),[v,w]=Object(r.useState)(""),[S,N]=Object(r.useState)(!1),[C,E]=Object(r.useState)(!1),[k,P]=Object(r.useState)(!1),[I,M]=Object(r.useState)(""),[T,A]=Object(r.useState)(!1),U=Object(l.o)();return Object(r.useEffect)((()=>{c&&(n(c.email),m(c.first_name),O(c.last_name))}),[c]),Object(i.jsxs)(h.a,{show:t,onHide:a,children:[Object(i.jsx)(h.a.Header,{closeButton:!0,children:Object(i.jsx)(h.a.Title,{children:"Profile Settings"})}),Object(i.jsxs)(h.a.Body,{children:[Object(i.jsx)(p.a,{src:"".concat(".","/images/profilepic.png"),roundedCircle:!0,className:"mb-3"}),Object(i.jsxs)(u.a,{children:[Object(i.jsxs)(u.a.Group,{children:[Object(i.jsx)(u.a.Label,{children:"Full Name"}),k?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a.Control,{type:"text",placeholder:"Enter new first name",value:d,onChange:e=>m(e.target.value)}),Object(i.jsx)(u.a.Control,{type:"text",placeholder:"Enter new last name",value:b,onChange:e=>O(e.target.value)}),Object(i.jsx)(j.a,{variant:"secondary",onClick:()=>P(!1),children:"Cancel"}),Object(i.jsx)(j.a,{variant:"primary",onClick:async e=>{e.preventDefault(),A(!0);try{const e=await fetch("".concat("http://localhost:3001","/api/updateName"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({email:o,firstName:d,lastName:b})});if(!e.ok){const t=await e.text();throw new Error(t)}alert("Name updated successfully"),P(!1)}catch(t){console.error("Error updating name:",t),alert("An error occurred. Please try again.")}finally{A(!1)}},children:"Update Name"})]}):Object(i.jsxs)("div",{children:[Object(i.jsx)(u.a.Control,{type:"text",value:"".concat(d," ").concat(b),readOnly:!0}),Object(i.jsx)(j.a,{variant:"secondary",onClick:()=>P(!0),children:"Edit"})]})]}),Object(i.jsxs)(u.a.Group,{children:[Object(i.jsx)(u.a.Label,{children:"Email Address"}),S?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a.Control,{type:"email",placeholder:"Enter new email",value:x,onChange:e=>g(e.target.value)}),Object(i.jsx)(j.a,{variant:"secondary",onClick:()=>N(!1),children:"Cancel"}),Object(i.jsx)(j.a,{variant:"primary",onClick:async e=>{if(e.preventDefault(),x.includes("@")&&x.includes(".")){A(!0);try{const e=await(async e=>{try{const t=await fetch("".concat("http://localhost:3001","/api/checkEmail?email=").concat(e));return(await t.json()).exists}catch(t){return console.error("Error checking email:",t),!1}})(x);if(e)return alert("Email already exists. Please choose a different one."),void A(!1);const t=await fetch("".concat("http://localhost:3001","/api/updateEmail"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({currentEmail:o,newEmail:x})});if(!t.ok){const e=await t.text();throw new Error(e)}n(x),alert("Email updated successfully"),N(!1)}catch(t){console.error("Error updating email:",t),alert("Email already exists"===t.message?"Email already exists. Please choose a different one.":"An error occurred. Please try again.")}finally{A(!1)}}else alert("Please enter a valid email address")},children:"Update Email"})]}):Object(i.jsxs)("div",{children:[Object(i.jsx)(u.a.Control,{type:"text",value:o,readOnly:!0}),Object(i.jsx)(j.a,{variant:"secondary",onClick:()=>N(!0),children:"Edit"})]})]}),Object(i.jsxs)(u.a.Group,{children:[Object(i.jsx)(u.a.Label,{children:"Password"}),C?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u.a.Control,{type:"password",placeholder:"Enter old password",value:I,onChange:e=>M(e.target.value)}),Object(i.jsx)(u.a.Control,{type:"password",placeholder:"Enter new password",value:y,onChange:e=>f(e.target.value)}),Object(i.jsx)(u.a.Control,{type:"password",placeholder:"Confirm new password",value:v,onChange:e=>w(e.target.value)}),Object(i.jsx)(j.a,{variant:"secondary",onClick:()=>E(!1),children:"Cancel"}),Object(i.jsx)(j.a,{variant:"primary",onClick:async e=>{if(e.preventDefault(),y.length<6)alert("Password must be at least 6 characters long");else if(y===v){A(!0);try{const e=await fetch("".concat("http://localhost:3001","/api/updatePassword"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({email:o,oldPassword:I,newPassword:y})});if(!e.ok){const t=await e.text();throw new Error(t)}alert("Password updated successfully"),E(!1)}catch(t){console.error("Error updating password:",t),alert("An error occurred. Please try again.")}finally{A(!1)}}else alert("New passwords do not match")},children:"Update Password"})]}):Object(i.jsxs)("div",{children:[Object(i.jsx)(u.a.Control,{type:"password",value:"********",readOnly:!0}),Object(i.jsx)(j.a,{variant:"secondary",onClick:()=>E(!0),children:"Edit"})]})]}),Object(i.jsx)(j.a,{variant:"danger",onClick:async()=>{A(!0);try{const e=await fetch("".concat("http://localhost:3001","/api/deleteAccount"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({email:o})});if(!e.ok){const t=await e.text();throw new Error(t)}alert("Account deleted successfully"),localStorage.removeItem("token"),s(!1),a(),U("/")}catch(e){console.error("Error deleting account:",e),alert("An error occurred. Please try again.")}finally{A(!1)}},children:"Delete Account"})]})]})]})};a(45);var x=function(e){let{setIsLoggedIn:t,isLoggedIn:a}=e;const[c,s]=Object(r.useState)({currentModal:null,navMenuVisible:!1}),[o,n]=Object(r.useState)(""),[l,d]=Object(r.useState)(""),[p,x]=Object(r.useState)(null),g=e=>{s((t=>({...t,currentModal:e})))},y=()=>{s((e=>({...e,currentModal:null})))},f=async()=>{try{const e=localStorage.getItem("token");if(!e)return;const t=await fetch("".concat("http://localhost:3001","/api/getProfile"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok)throw new Error("Failed to fetch user profile");const a=await t.json();x(a)}catch(e){console.error("Error fetching user profile:",e.message||e),alert("Failed to fetch user profile. Please try again.")}};return Object(r.useEffect)((()=>{a&&f()}),[a]),Object(i.jsxs)("div",{children:[Object(i.jsxs)("main",{className:"container my-4",children:[Object(i.jsxs)("section",{id:"part1",children:[Object(i.jsx)("h2",{children:"Part 1"}),Object(i.jsxs)("div",{className:"position-relative",children:[Object(i.jsx)("img",{src:"./images/img1.jpg",className:"img-fluid rounded",alt:"Studio workspace"}),Object(i.jsx)("div",{className:"text-studio",children:"STUDIO"}),Object(i.jsx)("div",{className:"text-work-hard",children:"WE WORK HARD, WE PLAY HARD"}),Object(i.jsx)("div",{className:"button-container",children:a?Object(i.jsxs)(m.a,{show:c.navMenuVisible,onToggle:()=>{s((e=>({...e,navMenuVisible:!e.navMenuVisible})))},children:[Object(i.jsx)(m.a.Toggle,{variant:"secondary",id:"burgerButton",children:"\u2630"}),Object(i.jsxs)(m.a.Menu,{children:[Object(i.jsx)(m.a.Item,{href:"#part1",children:"Part 1"}),Object(i.jsx)(m.a.Item,{href:"#part2",children:"Part 2"}),Object(i.jsx)(m.a.Item,{onClick:()=>g("profileSettingsModal"),children:"Profile Settings"}),Object(i.jsx)(m.a.Item,{onClick:()=>{localStorage.removeItem("token"),t(!1),x(null),alert("You have been signed off.")},children:"Sign Off"})]})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j.a,{className:"mr-2",onClick:()=>g("loginModal"),children:"Login"}),Object(i.jsx)(j.a,{onClick:()=>g("signUpModal"),children:"Sign Up"})]})})]})]}),a&&Object(i.jsx)("section",{id:"part2"})]}),Object(i.jsxs)(h.a,{show:"loginModal"===c.currentModal,onHide:y,children:[Object(i.jsx)(h.a.Header,{closeButton:!0,children:Object(i.jsx)(h.a.Title,{children:"Login"})}),Object(i.jsx)(h.a.Body,{children:Object(i.jsxs)(u.a,{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("".concat("http://localhost:3001","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:l})}),a=e.headers.get("content-type");if(!a||!a.includes("application/json")){const t=await e.text();throw new Error("Unexpected response type: ".concat(t))}const r=await e.json();e.ok?(localStorage.setItem("token",r.token),t(!0),f(),alert("Login successful"),y()):alert(r.message)}catch(a){console.error("Error:",a.message||a),alert("An error occurred. Please try again.")}},children:[Object(i.jsx)(u.a.Group,{children:Object(i.jsx)(u.a.Control,{type:"email",placeholder:"Email Address*",value:o,onChange:e=>n(e.target.value),required:!0})}),Object(i.jsx)(u.a.Group,{children:Object(i.jsx)(u.a.Control,{type:"password",placeholder:"Password*",value:l,onChange:e=>d(e.target.value),required:!0})}),Object(i.jsx)(j.a,{variant:"primary",type:"submit",block:!0,children:"LOGIN"})]})})]}),Object(i.jsx)(b,{show:"signUpModal"===c.currentModal,handleClose:y}),Object(i.jsx)(O,{show:"profileSettingsModal"===c.currentModal,handleClose:y,user:p,setIsLoggedIn:t})]})};var g=function(){const[e,t]=Object(r.useState)({currentModal:null,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}}),a=e=>{t({currentModal:e,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}})},c=()=>{t({...e,currentModal:null})},s=(a,r,s,o,n)=>Object(i.jsxs)(h.a,{show:e.currentModal===a,onHide:c,children:[Object(i.jsx)(h.a.Header,{closeButton:!0,children:Object(i.jsx)(h.a.Title,{children:r})}),Object(i.jsxs)(h.a.Body,{children:[Object(i.jsx)("p",{children:s}),Object(i.jsxs)("p",{children:["Unit Price: $",o]}),Object(i.jsx)("img",{src:"."+n,className:"img-fluid",alt:r}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"quantity".concat(a.replace("modal","")),children:"Enter quantity:"}),Object(i.jsx)("input",{type:"number",className:"form-control",id:"quantity".concat(a.replace("modal","")),min:"1"})]}),Object(i.jsx)(j.a,{className:"mt-3",onClick:()=>((e,a)=>{const r=parseInt(document.getElementById("quantity".concat(e.replace("modal",""))).value);if(isNaN(r)||r<=0)alert("Please enter a valid quantity.");else{const c=a*r;t((t=>({...t,summaries:{...t.summaries,[e]:"Great! Order of ".concat(r," items is received, total price is $").concat(c,".")}})))}})(a,o),children:"Add to Cart"}),Object(i.jsx)("p",{id:"summary".concat(a.replace("modal","")),className:"mt-3",children:e.summaries[a]})]})]});return Object(i.jsxs)("main",{className:"container my-4",children:[Object(i.jsxs)("section",{id:"part2",className:"bg-light p-4 rounded",children:[Object(i.jsx)("h2",{children:"Part 2"}),Object(i.jsxs)("div",{className:"text-center mb-3",children:[Object(i.jsx)("h3",{children:"Simplified project development"}),Object(i.jsx)("h3",{children:"for a complex world"})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:"./images/img2.bmp",className:"card-img-top",alt:"Residential Solutions"}),Object(i.jsxs)("div",{className:"card-body text-center",children:[Object(i.jsx)("h4",{className:"card-title",children:"Residential Solutions"}),Object(i.jsx)("p",{className:"card-text",children:"Save on your electricity bills, reduce your carbon footprint and increase the value of your home."}),Object(i.jsx)(j.a,{variant:"outline-primary",onClick:()=>a("modal1"),children:"More"})]})]})}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:"./images/img3.bmp",className:"card-img-top",alt:"Utility-Scale Solutions"}),Object(i.jsxs)("div",{className:"card-body text-center",children:[Object(i.jsx)("h4",{className:"card-title",children:"Utility-Scale Solutions"}),Object(i.jsx)("p",{className:"card-text",children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),Object(i.jsx)(j.a,{variant:"outline-primary",onClick:()=>a("modal2"),children:"More"})]})]})}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:"./images/img4.bmp",className:"card-img-top",alt:"Commercial Solutions"}),Object(i.jsxs)("div",{className:"card-body text-center",children:[Object(i.jsx)("h4",{className:"card-title",children:"Commercial Solutions"}),Object(i.jsx)("p",{className:"card-text",children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),Object(i.jsx)(j.a,{variant:"outline-primary",onClick:()=>a("modal3"),children:"More"})]})]})})]}),Object(i.jsxs)("div",{className:"row mt-4",children:[Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:"./images/img5.bmp",className:"card-img-top",alt:"New Residential Solutions"}),Object(i.jsxs)("div",{className:"card-body text-center",children:[Object(i.jsx)("h4",{className:"card-title",children:"New Residential Solutions"}),Object(i.jsx)("p",{className:"card-text",children:"Innovative solutions for modern homes, enhancing energy efficiency."}),Object(i.jsx)(j.a,{variant:"outline-primary",onClick:()=>a("modal4"),children:"More"})]})]})}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:"./images/img6.bmp",className:"card-img-top",alt:"New Utility-Scale Solutions"}),Object(i.jsxs)("div",{className:"card-body text-center",children:[Object(i.jsx)("h4",{className:"card-title",children:"New Utility-Scale Solutions"}),Object(i.jsx)("p",{className:"card-text",children:"Advanced technology for large-scale projects, ensuring reliability."}),Object(i.jsx)(j.a,{variant:"outline-primary",onClick:()=>a("modal5"),children:"More"})]})]})}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("img",{src:"./images/img7.bmp",className:"card-img-top",alt:"New Commercial Solutions"}),Object(i.jsxs)("div",{className:"card-body text-center",children:[Object(i.jsx)("h4",{className:"card-title",children:"New Commercial Solutions"}),Object(i.jsx)("p",{className:"card-text",children:"Customizable options for businesses, maximizing operational efficiency."}),Object(i.jsx)(j.a,{variant:"outline-primary",onClick:()=>a("modal6"),children:"More"})]})]})})]})]}),s("modal1","Residential Solutions","Product Description for Residential Solutions.",100,"/images/img2.bmp"),s("modal2","Utility-Scale Solutions","Product Description for Utility-Scale Solutions.",200,"/images/img3.bmp"),s("modal3","Commercial Solutions","Product Description for Commercial Solutions.",300,"/images/img4.bmp"),s("modal4","New Residential Solutions","Product Description for New Residential Solutions.",120,"/images/img5.bmp"),s("modal5","New Utility-Scale Solutions","Product Description for New Utility-Scale Solutions.",220,"/images/img6.bmp"),s("modal6","New Commercial Solutions","Product Description for New Commercial Solutions.",320,"/images/img7.bmp")]})};var y=function(){return Object(i.jsx)("footer",{className:"bg-dark text-white text-center py-4",children:Object(i.jsx)("p",{children:"\xa9 2024 SE Boot Camp - Steven Moses Alvarez"})})};class f extends c.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error",e,t)}render(){return this.state.hasError?Object(i.jsx)("h1",{children:"Something went wrong."}):this.props.children}}var v=f;var w=function(e){let{setCurrentUser:t}=e;const[a,c]=Object(r.useState)(""),[s,o]=Object(r.useState)(""),n=Object(l.o)();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Login"}),Object(i.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("".concat("http://localhost:3001","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:s})}),r=await e.json();if(e.ok){localStorage.setItem("token",r.token),alert("Login successful");const e=await fetch("".concat("http://localhost:3001","/api/getProfile"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)}});if(!e.ok)throw new Error("Failed to fetch user profile");{const a=await e.json();t(a),n("/profile-settings")}}else alert(r.message)}catch(r){console.error("Error logging in:",r),alert("An error occurred. Please try again.")}},children:[Object(i.jsx)("input",{type:"email",placeholder:"Email",value:a,onChange:e=>c(e.target.value),required:!0}),Object(i.jsx)("input",{type:"password",placeholder:"Password",value:s,onChange:e=>o(e.target.value),required:!0}),Object(i.jsx)("button",{type:"submit",children:"Login"})]})]})};var S=function(){const[e,t]=Object(r.useState)(!1);return Object(i.jsx)(n.a,{children:Object(i.jsxs)(v,{children:[Object(i.jsx)(d,{}),Object(i.jsx)("main",{className:"container my-4",children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/login",element:Object(i.jsx)(w,{})})," ",Object(i.jsx)(l.a,{path:"/profile-settings",element:Object(i.jsx)(O,{})}),Object(i.jsx)(l.a,{path:"/",element:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x,{setIsLoggedIn:t,isLoggedIn:e}),e&&Object(i.jsx)(g,{})]})})]})}),Object(i.jsx)(y,{})]})})};var N=()=>Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Signup"}),Object(i.jsx)(b,{})]});const C=()=>Object(i.jsx)(n.a,{children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{path:"/signup",element:Object(i.jsx)(N,{})}),Object(i.jsx)(l.a,{path:"*",element:Object(i.jsx)(S,{})})]})});o.a.render(Object(i.jsx)(v,{children:Object(i.jsx)(C,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0ff36fba.chunk.js.map