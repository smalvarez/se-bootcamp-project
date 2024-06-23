(this["webpackJsonpse-bootcamp-project"]=this["webpackJsonpse-bootcamp-project"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),s=a(9),o=a.n(s),n=a(1);var l=()=>Object(n.jsx)("header",{className:"bg-dark text-white text-center py-4",children:Object(n.jsx)("h1",{children:"SE Boot Camp Project 2"})}),i=a(34),d=a(51),j=a(52),m=a(53);a(25);var h=e=>{let{show:t,handleClose:a}=e;const[c,s]=Object(r.useState)(""),[o,l]=Object(r.useState)(""),[d,h]=Object(r.useState)(""),[u,b]=Object(r.useState)(""),[p,O]=Object(r.useState)(""),[x,g]=Object(r.useState)("");return Object(n.jsxs)(j.a,{show:t,onHide:a,children:[Object(n.jsx)(j.a.Header,{closeButton:!0,children:Object(n.jsx)(j.a.Title,{children:"Sign Up"})}),Object(n.jsx)(j.a.Body,{children:Object(n.jsxs)(m.a,{onSubmit:async e=>{if(e.preventDefault(),u.length<6)alert("Password must be at least 6 characters long!");else if(u===p)try{const e=await fetch("http://localhost:3001/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:c,last_name:o,email:d,password:u})}),t=await e.json();if(!e.ok){if(409!==e.status||"Email already exists."!==t.message)throw new Error("HTTP error! status: ".concat(e.status));return void g("Email address is already in use. Please use a different email.")}alert("Signup successful!"),a()}catch(x){console.error("Error:",x),alert("An error occurred. Please try again.")}else alert("Passwords do not match!")},children:[Object(n.jsx)(m.a.Group,{controlId:"formFirstName",children:Object(n.jsx)(m.a.Control,{type:"text",placeholder:"First Name*",value:c,onChange:e=>s(e.target.value),required:!0})}),Object(n.jsx)(m.a.Group,{controlId:"formLastName",children:Object(n.jsx)(m.a.Control,{type:"text",placeholder:"Last Name*",value:o,onChange:e=>l(e.target.value),required:!0})}),Object(n.jsx)(m.a.Group,{controlId:"formEmail",children:Object(n.jsx)(m.a.Control,{type:"email",placeholder:"Email Address*",value:d,onChange:e=>h(e.target.value),required:!0})}),Object(n.jsx)(m.a.Group,{controlId:"formPassword",children:Object(n.jsx)(m.a.Control,{type:"password",placeholder:"Password*",value:u,onChange:e=>b(e.target.value),required:!0})}),Object(n.jsx)(m.a.Group,{controlId:"formConfirmPassword",children:Object(n.jsx)(m.a.Control,{type:"password",placeholder:"Confirm Password*",value:p,onChange:e=>O(e.target.value),required:!0})}),x&&Object(n.jsx)("p",{style:{color:"red"},children:x}),Object(n.jsx)(i.a,{variant:"primary",type:"submit",block:!0,children:"Sign Up"})]})})]})},u=a(50),b=a(3);var p=function(e){let{show:t,handleClose:a,user:c,setIsLoggedIn:s}=e;const[o,l]=Object(r.useState)(""),[d,h]=Object(r.useState)(""),[p,O]=Object(r.useState)(""),[x,g]=Object(r.useState)(""),[y,f]=Object(r.useState)(""),[v,w]=Object(r.useState)(""),[S,C]=Object(r.useState)(!1),[N,E]=Object(r.useState)(!1),[k,P]=Object(r.useState)(!1),[I,M]=Object(r.useState)(""),[T,A]=Object(r.useState)(!1),U=Object(b.o)();return Object(r.useEffect)((()=>{c&&(l(c.email),h(c.first_name),O(c.last_name))}),[c]),Object(n.jsxs)(j.a,{show:t,onHide:a,children:[Object(n.jsx)(j.a.Header,{closeButton:!0,children:Object(n.jsx)(j.a.Title,{children:"Profile Settings"})}),Object(n.jsxs)(j.a.Body,{children:[Object(n.jsx)(u.a,{src:"".concat(".","/images/profilepic.png"),roundedCircle:!0,className:"mb-3"}),Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(m.a.Group,{children:[Object(n.jsx)(m.a.Label,{children:"Full Name"}),k?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a.Control,{type:"text",placeholder:"Enter new first name",value:d,onChange:e=>h(e.target.value)}),Object(n.jsx)(m.a.Control,{type:"text",placeholder:"Enter new last name",value:p,onChange:e=>O(e.target.value)}),Object(n.jsx)(i.a,{variant:"secondary",onClick:()=>P(!1),children:"Cancel"}),Object(n.jsx)(i.a,{variant:"primary",onClick:async e=>{e.preventDefault(),A(!0);try{const e=await fetch("".concat("http://localhost:3001","/api/updateName"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({email:o,firstName:d,lastName:p})});if(!e.ok){const t=await e.text();throw new Error(t)}alert("Name updated successfully"),P(!1)}catch(t){console.error("Error updating name:",t),alert("An error occurred. Please try again.")}finally{A(!1)}},children:"Update Name"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a.Control,{type:"text",value:"".concat(d," ").concat(p),readOnly:!0}),Object(n.jsx)(i.a,{variant:"secondary",onClick:()=>P(!0),children:"Edit"})]})]}),Object(n.jsxs)(m.a.Group,{children:[Object(n.jsx)(m.a.Label,{children:"Email Address"}),S?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a.Control,{type:"email",placeholder:"Enter new email",value:x,onChange:e=>g(e.target.value)}),Object(n.jsx)(i.a,{variant:"secondary",onClick:()=>C(!1),children:"Cancel"}),Object(n.jsx)(i.a,{variant:"primary",onClick:async e=>{if(e.preventDefault(),x.includes("@")&&x.includes(".")){A(!0);try{const e=await(async e=>{try{const t=await fetch("".concat("http://localhost:3001","/api/checkEmail?email=").concat(e));return(await t.json()).exists}catch(t){return console.error("Error checking email:",t),!1}})(x);if(e)return alert("Email already exists. Please choose a different one."),void A(!1);const t=await fetch("".concat("http://localhost:3001","/api/updateEmail"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({currentEmail:o,newEmail:x})});if(!t.ok){const e=await t.text();throw new Error(e)}l(x),alert("Email updated successfully"),C(!1)}catch(t){console.error("Error updating email:",t),alert("Email already exists"===t.message?"Email already exists. Please choose a different one.":"An error occurred. Please try again.")}finally{A(!1)}}else alert("Please enter a valid email address")},children:"Update Email"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a.Control,{type:"text",value:o,readOnly:!0}),Object(n.jsx)(i.a,{variant:"secondary",onClick:()=>C(!0),children:"Edit"})]})]}),Object(n.jsxs)(m.a.Group,{children:[Object(n.jsx)(m.a.Label,{children:"Password"}),N?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a.Control,{type:"password",placeholder:"Enter old password",value:I,onChange:e=>M(e.target.value)}),Object(n.jsx)(m.a.Control,{type:"password",placeholder:"Enter new password",value:y,onChange:e=>f(e.target.value)}),Object(n.jsx)(m.a.Control,{type:"password",placeholder:"Confirm new password",value:v,onChange:e=>w(e.target.value)}),Object(n.jsx)(i.a,{variant:"secondary",onClick:()=>E(!1),children:"Cancel"}),Object(n.jsx)(i.a,{variant:"primary",onClick:async e=>{if(e.preventDefault(),y.length<6)alert("Password must be at least 6 characters long");else if(y===v){A(!0);try{const e=await fetch("".concat("http://localhost:3001","/api/updatePassword"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({email:o,oldPassword:I,newPassword:y})});if(!e.ok){const t=await e.text();throw new Error(t)}alert("Password updated successfully"),E(!1)}catch(t){console.error("Error updating password:",t),alert("An error occurred. Please try again.")}finally{A(!1)}}else alert("New passwords do not match")},children:"Update Password"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(m.a.Control,{type:"password",value:"********",readOnly:!0}),Object(n.jsx)(i.a,{variant:"secondary",onClick:()=>E(!0),children:"Edit"})]})]}),Object(n.jsx)(i.a,{variant:"danger",onClick:async()=>{A(!0);try{const e=await fetch("".concat("http://localhost:3001","/api/deleteAccount"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({email:o})});if(!e.ok){const t=await e.text();throw new Error(t)}alert("Account deleted successfully"),localStorage.removeItem("token"),s(!1),a(),U("/")}catch(e){console.error("Error deleting account:",e),alert("An error occurred. Please try again.")}finally{A(!1)}},children:"Delete Account"})]})]})]})};a(44);var O=function(e){let{setIsLoggedIn:t,isLoggedIn:a}=e;const[c,s]=Object(r.useState)({currentModal:null,navMenuVisible:!1}),[o,l]=Object(r.useState)(""),[u,b]=Object(r.useState)(""),[O,x]=Object(r.useState)(null),g=e=>{s((t=>({...t,currentModal:e})))},y=()=>{s((e=>({...e,currentModal:null})))},f=async()=>{try{const e=localStorage.getItem("token");if(!e)return;const t=await fetch("".concat("http://localhost:3001","/api/getProfile"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok)throw new Error("Failed to fetch user profile");const a=await t.json();x(a)}catch(e){console.error("Error fetching user profile:",e.message||e),alert("Failed to fetch user profile. Please try again.")}};return Object(r.useEffect)((()=>{a&&f()}),[a]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("main",{className:"container my-4",children:[Object(n.jsxs)("section",{id:"part1",children:[Object(n.jsx)("h2",{children:"Part 1"}),Object(n.jsxs)("div",{className:"position-relative",children:[Object(n.jsx)("img",{src:"./images/img1.jpg",className:"img-fluid rounded",alt:"Studio workspace"}),Object(n.jsx)("div",{className:"text-studio",children:"STUDIO"}),Object(n.jsx)("div",{className:"text-work-hard",children:"WE WORK HARD, WE PLAY HARD"}),Object(n.jsx)("div",{className:"button-container",children:a?Object(n.jsxs)(d.a,{show:c.navMenuVisible,onToggle:()=>{s((e=>({...e,navMenuVisible:!e.navMenuVisible})))},children:[Object(n.jsx)(d.a.Toggle,{variant:"secondary",id:"burgerButton",children:"\u2630"}),Object(n.jsxs)(d.a.Menu,{children:[Object(n.jsx)(d.a.Item,{href:"#part1",children:"Part 1"}),Object(n.jsx)(d.a.Item,{href:"#part2",children:"Part 2"}),Object(n.jsx)(d.a.Item,{onClick:()=>g("profileSettingsModal"),children:"Profile Settings"}),Object(n.jsx)(d.a.Item,{onClick:()=>{localStorage.removeItem("token"),t(!1),x(null),alert("You have been signed off.")},children:"Sign Off"})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i.a,{className:"mr-2",onClick:()=>g("loginModal"),children:"Login"}),Object(n.jsx)(i.a,{onClick:()=>g("signUpModal"),children:"Sign Up"})]})})]})]}),a&&Object(n.jsx)("section",{id:"part2"})]}),Object(n.jsxs)(j.a,{show:"loginModal"===c.currentModal,onHide:y,children:[Object(n.jsx)(j.a.Header,{closeButton:!0,children:Object(n.jsx)(j.a.Title,{children:"Login"})}),Object(n.jsx)(j.a.Body,{children:Object(n.jsxs)(m.a,{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("".concat("http://localhost:3001","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,password:u})}),a=e.headers.get("content-type");if(!a||!a.includes("application/json")){const t=await e.text();throw new Error("Unexpected response type: ".concat(t))}const r=await e.json();e.ok?(localStorage.setItem("token",r.token),t(!0),f(),alert("Login successful"),y()):alert(r.message)}catch(a){console.error("Error:",a.message||a),alert("An error occurred. Please try again.")}},children:[Object(n.jsx)(m.a.Group,{children:Object(n.jsx)(m.a.Control,{type:"email",placeholder:"Email Address*",value:o,onChange:e=>l(e.target.value),required:!0})}),Object(n.jsx)(m.a.Group,{children:Object(n.jsx)(m.a.Control,{type:"password",placeholder:"Password*",value:u,onChange:e=>b(e.target.value),required:!0})}),Object(n.jsx)(i.a,{variant:"primary",type:"submit",block:!0,children:"LOGIN"})]})})]}),Object(n.jsx)(h,{show:"signUpModal"===c.currentModal,handleClose:y}),Object(n.jsx)(p,{show:"profileSettingsModal"===c.currentModal,handleClose:y,user:O,setIsLoggedIn:t})]})};var x=function(){const[e,t]=Object(r.useState)({currentModal:null,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}}),a=e=>{t({currentModal:e,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}})},c=()=>{t({...e,currentModal:null})},s=(a,r,s,o,l)=>Object(n.jsxs)(j.a,{show:e.currentModal===a,onHide:c,children:[Object(n.jsx)(j.a.Header,{closeButton:!0,children:Object(n.jsx)(j.a.Title,{children:r})}),Object(n.jsxs)(j.a.Body,{children:[Object(n.jsx)("p",{children:s}),Object(n.jsxs)("p",{children:["Unit Price: $",o]}),Object(n.jsx)("img",{src:"."+l,className:"img-fluid",alt:r}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"quantity".concat(a.replace("modal","")),children:"Enter quantity:"}),Object(n.jsx)("input",{type:"number",className:"form-control",id:"quantity".concat(a.replace("modal","")),min:"1"})]}),Object(n.jsx)(i.a,{className:"mt-3",onClick:()=>((e,a)=>{const r=parseInt(document.getElementById("quantity".concat(e.replace("modal",""))).value);if(isNaN(r)||r<=0)alert("Please enter a valid quantity.");else{const c=a*r;t((t=>({...t,summaries:{...t.summaries,[e]:"Great! Order of ".concat(r," items is received, total price is $").concat(c,".")}})))}})(a,o),children:"Add to Cart"}),Object(n.jsx)("p",{id:"summary".concat(a.replace("modal","")),className:"mt-3",children:e.summaries[a]})]})]});return Object(n.jsxs)("main",{className:"container my-4",children:[Object(n.jsxs)("section",{id:"part2",className:"bg-light p-4 rounded",children:[Object(n.jsx)("h2",{children:"Part 2"}),Object(n.jsxs)("div",{className:"text-center mb-3",children:[Object(n.jsx)("h3",{children:"Simplified project development"}),Object(n.jsx)("h3",{children:"for a complex world"})]}),Object(n.jsxs)("div",{className:"card-deck",children:[Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"./images/img2.bmp",className:"card-img-top",alt:"Residential Solutions"}),Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h4",{className:"card-title",children:"Residential Solutions"}),Object(n.jsx)("p",{className:"card-text",children:"Save on your electricity bills, reduce your carbon footprint and increase the value of your home."}),Object(n.jsx)(i.a,{variant:"outline-primary",onClick:()=>a("modal1"),children:"More"})]})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"./images/img3.bmp",className:"card-img-top",alt:"Utility-Scale Solutions"}),Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h4",{className:"card-title",children:"Utility-Scale Solutions"}),Object(n.jsx)("p",{className:"card-text",children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),Object(n.jsx)(i.a,{variant:"outline-primary",onClick:()=>a("modal2"),children:"More"})]})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"./images/img4.bmp",className:"card-img-top",alt:"Commercial Solutions"}),Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h4",{className:"card-title",children:"Commercial Solutions"}),Object(n.jsx)("p",{className:"card-text",children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),Object(n.jsx)(i.a,{variant:"outline-primary",onClick:()=>a("modal3"),children:"More"})]})]})]}),Object(n.jsxs)("div",{className:"card-deck mt-4",children:[Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"./images/img5.bmp",className:"card-img-top",alt:"New Residential Solutions"}),Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h4",{className:"card-title",children:"New Residential Solutions"}),Object(n.jsx)("p",{className:"card-text",children:"Innovative solutions for modern homes, enhancing energy efficiency."}),Object(n.jsx)(i.a,{variant:"outline-primary",onClick:()=>a("modal4"),children:"More"})]})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"./images/img6.bmp",className:"card-img-top",alt:"New Utility-Scale Solutions"}),Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h4",{className:"card-title",children:"New Utility-Scale Solutions"}),Object(n.jsx)("p",{className:"card-text",children:"Advanced technology for large-scale projects, ensuring reliability."}),Object(n.jsx)(i.a,{variant:"outline-primary",onClick:()=>a("modal5"),children:"More"})]})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:"./images/img7.bmp",className:"card-img-top",alt:"New Commercial Solutions"}),Object(n.jsxs)("div",{className:"card-body text-center",children:[Object(n.jsx)("h4",{className:"card-title",children:"New Commercial Solutions"}),Object(n.jsx)("p",{className:"card-text",children:"Customizable options for businesses, maximizing operational efficiency."}),Object(n.jsx)(i.a,{variant:"outline-primary",onClick:()=>a("modal6"),children:"More"})]})]})]})]}),s("modal1","Residential Solutions","Product Description for Residential Solutions.",100,"/images/img2.bmp"),s("modal2","Utility-Scale Solutions","Product Description for Utility-Scale Solutions.",200,"/images/img3.bmp"),s("modal3","Commercial Solutions","Product Description for Commercial Solutions.",300,"/images/img4.bmp"),s("modal4","New Residential Solutions","Product Description for New Residential Solutions.",120,"/images/img5.bmp"),s("modal5","New Utility-Scale Solutions","Product Description for New Utility-Scale Solutions.",220,"/images/img6.bmp"),s("modal6","New Commercial Solutions","Product Description for New Commercial Solutions.",320,"/images/img7.bmp")]})};var g=function(){return Object(n.jsx)("footer",{className:"bg-dark text-white text-center py-4",children:Object(n.jsx)("p",{children:"\xa9 2024 SE Boot Camp - Steven Moses Alvarez"})})};class y extends c.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error",e,t)}render(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):this.props.children}}var f=y;var v=function(e){let{setCurrentUser:t}=e;const[a,c]=Object(r.useState)(""),[s,o]=Object(r.useState)(""),l=Object(b.o)();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Login"}),Object(n.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("".concat("http://localhost:3001","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,password:s})}),r=await e.json();if(e.ok){localStorage.setItem("token",r.token),alert("Login successful");const e=await fetch("".concat("http://localhost:3001","/api/getProfile"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)}});if(!e.ok)throw new Error("Failed to fetch user profile");{const a=await e.json();t(a),l("/profile-settings")}}else alert(r.message)}catch(r){console.error("Error logging in:",r),alert("An error occurred. Please try again.")}},children:[Object(n.jsx)("input",{type:"email",placeholder:"Email",value:a,onChange:e=>c(e.target.value),required:!0}),Object(n.jsx)("input",{type:"password",placeholder:"Password",value:s,onChange:e=>o(e.target.value),required:!0}),Object(n.jsx)("button",{type:"submit",children:"Login"})]})]})},w=a(29);var S=function(){const[e,t]=Object(r.useState)(!1);return Object(n.jsx)(w.a,{children:Object(n.jsxs)(f,{children:[Object(n.jsx)(l,{}),Object(n.jsx)("main",{className:"container my-4",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{path:"/login",element:Object(n.jsx)(v,{})})," ",Object(n.jsx)(b.a,{path:"/profile-settings",element:Object(n.jsx)(p,{})}),Object(n.jsx)(b.a,{path:"/",element:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{setIsLoggedIn:t,isLoggedIn:e}),e&&Object(n.jsx)(x,{})]})})]})}),Object(n.jsx)(g,{})]})})};a(45);o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.deb7cbf3.chunk.js.map