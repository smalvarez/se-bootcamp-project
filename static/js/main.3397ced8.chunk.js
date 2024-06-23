(this["webpackJsonpse-bootcamp-project"]=this["webpackJsonpse-bootcamp-project"]||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),r=a(8),i=a.n(r),o=a(1);var n=()=>Object(o.jsx)("header",{className:"bg-dark text-white text-center py-4",children:Object(o.jsx)("h1",{children:"SE Boot Camp Project 2"})}),l=a(31),d=a(48),j=a(49),m=a(50);a(23);var h=e=>{let{show:t,handleClose:a}=e;const[s,r]=Object(c.useState)(""),[i,n]=Object(c.useState)("");return Object(o.jsxs)(j.a,{show:t,onHide:a,children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:Object(o.jsx)(j.a.Title,{children:"Sign Up"})}),Object(o.jsx)(j.a.Body,{children:Object(o.jsxs)(m.a,{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("http://localhost:3000/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:i})});if(!e.ok)throw new Error("HTTP error! status: ".concat(e.status));alert("Signup successful!"),a()}catch(t){console.error("Error:",t),alert("An error occurred. Please try again.")}},children:[Object(o.jsx)(m.a.Group,{controlId:"formEmail",children:Object(o.jsx)(m.a.Control,{type:"email",placeholder:"Email Address*",value:s,onChange:e=>r(e.target.value),required:!0})}),Object(o.jsx)(m.a.Group,{controlId:"formPassword",children:Object(o.jsx)(m.a.Control,{type:"password",placeholder:"Password*",value:i,onChange:e=>n(e.target.value),required:!0})}),Object(o.jsx)(l.a,{variant:"primary",type:"submit",block:!0,children:"Sign Up"})]})})]})},u=a(47);var b=function(e){let{show:t,handleClose:a}=e;const[s,r]=Object(c.useState)(""),[i,n]=Object(c.useState)(""),[d,h]=Object(c.useState)("");return Object(o.jsxs)(j.a,{show:t,onHide:a,children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:Object(o.jsx)(j.a.Title,{children:"Profile Settings"})}),Object(o.jsxs)(j.a.Body,{children:[Object(o.jsx)(u.a,{src:"".concat(".","/images/profilepic.png"),roundedCircle:!0,className:"mb-3"}),Object(o.jsxs)(m.a,{onSubmit:async e=>{if(e.preventDefault(),i===d)try{const e=await fetch("".concat("http://localhost:3001","/updateProfile"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:i})}),t=e.headers.get("content-type");if(!t||!t.includes("application/json")){const t=await e.text();throw new Error("Unexpected response type: ".concat(t))}const c=await e.json();e.ok?(alert("Profile updated successfully"),a()):alert(c.message)}catch(t){console.error("Error:",t.message||t),alert("An error occurred. Please try again.")}else alert("Passwords do not match")},children:[Object(o.jsxs)(m.a.Group,{children:[Object(o.jsx)(m.a.Label,{children:"Email Address"}),Object(o.jsx)(m.a.Control,{type:"email",placeholder:"Enter new email",value:s,onChange:e=>r(e.target.value)})]}),Object(o.jsxs)(m.a.Group,{children:[Object(o.jsx)(m.a.Label,{children:"New Password"}),Object(o.jsx)(m.a.Control,{type:"password",placeholder:"Enter new password",value:i,onChange:e=>n(e.target.value)})]}),Object(o.jsxs)(m.a.Group,{children:[Object(o.jsx)(m.a.Label,{children:"Confirm New Password"}),Object(o.jsx)(m.a.Control,{type:"password",placeholder:"Confirm new password",value:d,onChange:e=>h(e.target.value)})]}),Object(o.jsx)(l.a,{variant:"primary",type:"submit",block:!0,children:"Update"}),Object(o.jsx)(l.a,{variant:"danger",onClick:async()=>{try{const e=await fetch("".concat("http://localhost:3001","/deleteAccount"),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s})}),t=e.headers.get("content-type");if(!t||!t.includes("application/json")){const t=await e.text();throw new Error("Unexpected response type: ".concat(t))}const c=await e.json();e.ok?(alert("Account deleted successfully"),a()):alert(c.message)}catch(e){console.error("Error:",e.message||e),alert("An error occurred. Please try again.")}},block:!0,children:"Delete Account"})]})]})]})};a(41);var p=function(e){let{setIsLoggedIn:t,isLoggedIn:a}=e;const[s,r]=Object(c.useState)({currentModal:null,navMenuVisible:!1}),[i,n]=Object(c.useState)(""),[u,p]=Object(c.useState)(""),x=e=>{r((t=>({...t,currentModal:e})))},O=()=>{r((e=>({...e,currentModal:null})))};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("main",{className:"container my-4",children:[Object(o.jsxs)("section",{id:"part1",children:[Object(o.jsx)("h2",{children:"Part 1"}),Object(o.jsxs)("div",{className:"position-relative",children:[Object(o.jsx)("img",{src:"./images/img1.jpg",className:"img-fluid rounded",alt:"Studio workspace"}),Object(o.jsx)("div",{className:"text-studio",children:"STUDIO"}),Object(o.jsx)("div",{className:"text-work-hard",children:"WE WORK HARD, WE PLAY HARD"}),Object(o.jsx)("div",{className:"button-container",children:a?Object(o.jsxs)(d.a,{show:s.navMenuVisible,onToggle:()=>{r((e=>({...e,navMenuVisible:!e.navMenuVisible})))},children:[Object(o.jsx)(d.a.Toggle,{variant:"secondary",id:"burgerButton",children:"\u2630"}),Object(o.jsxs)(d.a.Menu,{children:[Object(o.jsx)(d.a.Item,{href:"#part1",children:"Part 1"}),Object(o.jsx)(d.a.Item,{href:"#part2",children:"Part 2"}),Object(o.jsx)(d.a.Item,{onClick:()=>x("profileSettingsModal"),children:"Profile Settings"}),Object(o.jsx)(d.a.Item,{onClick:()=>{t(!1),alert("You have been signed off.")},children:"Sign Off"})]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l.a,{className:"mr-2",onClick:()=>x("loginModal"),children:"Login"}),Object(o.jsx)(l.a,{onClick:()=>x("signUpModal"),children:"Sign Up"})]})})]})]}),a&&Object(o.jsx)("section",{id:"part2"})]}),Object(o.jsxs)(j.a,{show:"loginModal"===s.currentModal,onHide:O,children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:Object(o.jsx)(j.a.Title,{children:"Login"})}),Object(o.jsx)(j.a.Body,{children:Object(o.jsxs)(m.a,{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("".concat("http://localhost:3001","/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:u})}),a=e.headers.get("content-type");if(!a||!a.includes("application/json")){const t=await e.text();throw new Error("Unexpected response type: ".concat(t))}const c=await e.json();e.ok?(t(!0),alert("Login successful"),O()):alert(c.message)}catch(a){console.error("Error:",a.message||a),alert("An error occurred. Please try again.")}},children:[Object(o.jsx)(m.a.Group,{children:Object(o.jsx)(m.a.Control,{type:"email",placeholder:"Email Address*",value:i,onChange:e=>n(e.target.value),required:!0})}),Object(o.jsx)(m.a.Group,{children:Object(o.jsx)(m.a.Control,{type:"password",placeholder:"Password*",value:u,onChange:e=>p(e.target.value),required:!0})}),Object(o.jsx)(l.a,{variant:"primary",type:"submit",block:!0,children:"LOGIN"})]})})]}),Object(o.jsx)(h,{show:"signUpModal"===s.currentModal,handleClose:O}),Object(o.jsx)(b,{show:"profileSettingsModal"===s.currentModal,handleClose:O})]})};var x=function(){const[e,t]=Object(c.useState)({currentModal:null,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}}),a=e=>{t({currentModal:e,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}})},s=()=>{t({...e,currentModal:null})},r=(a,c,r,i,n)=>Object(o.jsxs)(j.a,{show:e.currentModal===a,onHide:s,children:[Object(o.jsx)(j.a.Header,{closeButton:!0,children:Object(o.jsx)(j.a.Title,{children:c})}),Object(o.jsxs)(j.a.Body,{children:[Object(o.jsx)("p",{children:r}),Object(o.jsxs)("p",{children:["Unit Price: $",i]}),Object(o.jsx)("img",{src:"."+n,className:"img-fluid",alt:c}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"quantity".concat(a.replace("modal","")),children:"Enter quantity:"}),Object(o.jsx)("input",{type:"number",className:"form-control",id:"quantity".concat(a.replace("modal","")),min:"1"})]}),Object(o.jsx)(l.a,{className:"mt-3",onClick:()=>((e,a)=>{const c=parseInt(document.getElementById("quantity".concat(e.replace("modal",""))).value);if(isNaN(c)||c<=0)alert("Please enter a valid quantity.");else{const s=a*c;t((t=>({...t,summaries:{...t.summaries,[e]:"Great! Order of ".concat(c," items is received, total price is $").concat(s,".")}})))}})(a,i),children:"Add to Cart"}),Object(o.jsx)("p",{id:"summary".concat(a.replace("modal","")),className:"mt-3",children:e.summaries[a]})]})]});return Object(o.jsxs)("main",{className:"container my-4",children:[Object(o.jsxs)("section",{id:"part2",className:"bg-light p-4 rounded",children:[Object(o.jsx)("h2",{children:"Part 2"}),Object(o.jsxs)("div",{className:"text-center mb-3",children:[Object(o.jsx)("h3",{children:"Simplified project development"}),Object(o.jsx)("h3",{children:"for a complex world"})]}),Object(o.jsxs)("div",{className:"card-deck",children:[Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:"./images/img2.bmp",className:"card-img-top",alt:"Residential Solutions"}),Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("h4",{className:"card-title",children:"Residential Solutions"}),Object(o.jsx)("p",{className:"card-text",children:"Save on your electricity bills, reduce your carbon footprint and increase the value of your home."}),Object(o.jsx)(l.a,{variant:"outline-primary",onClick:()=>a("modal1"),children:"More"})]})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:"./images/img3.bmp",className:"card-img-top",alt:"Utility-Scale Solutions"}),Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("h4",{className:"card-title",children:"Utility-Scale Solutions"}),Object(o.jsx)("p",{className:"card-text",children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),Object(o.jsx)(l.a,{variant:"outline-primary",onClick:()=>a("modal2"),children:"More"})]})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:"./images/img4.bmp",className:"card-img-top",alt:"Commercial Solutions"}),Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("h4",{className:"card-title",children:"Commercial Solutions"}),Object(o.jsx)("p",{className:"card-text",children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),Object(o.jsx)(l.a,{variant:"outline-primary",onClick:()=>a("modal3"),children:"More"})]})]})]}),Object(o.jsxs)("div",{className:"card-deck mt-4",children:[Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:"./images/img5.bmp",className:"card-img-top",alt:"New Residential Solutions"}),Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("h4",{className:"card-title",children:"New Residential Solutions"}),Object(o.jsx)("p",{className:"card-text",children:"Innovative solutions for modern homes, enhancing energy efficiency."}),Object(o.jsx)(l.a,{variant:"outline-primary",onClick:()=>a("modal4"),children:"More"})]})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:"./images/img6.bmp",className:"card-img-top",alt:"New Utility-Scale Solutions"}),Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("h4",{className:"card-title",children:"New Utility-Scale Solutions"}),Object(o.jsx)("p",{className:"card-text",children:"Advanced technology for large-scale projects, ensuring reliability."}),Object(o.jsx)(l.a,{variant:"outline-primary",onClick:()=>a("modal5"),children:"More"})]})]}),Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{src:"./images/img7.bmp",className:"card-img-top",alt:"New Commercial Solutions"}),Object(o.jsxs)("div",{className:"card-body text-center",children:[Object(o.jsx)("h4",{className:"card-title",children:"New Commercial Solutions"}),Object(o.jsx)("p",{className:"card-text",children:"Customizable options for businesses, maximizing operational efficiency."}),Object(o.jsx)(l.a,{variant:"outline-primary",onClick:()=>a("modal6"),children:"More"})]})]})]})]}),r("modal1","Residential Solutions","Product Description for Residential Solutions.",100,"/images/img2.bmp"),r("modal2","Utility-Scale Solutions","Product Description for Utility-Scale Solutions.",200,"/images/img3.bmp"),r("modal3","Commercial Solutions","Product Description for Commercial Solutions.",300,"/images/img4.bmp"),r("modal4","New Residential Solutions","Product Description for New Residential Solutions.",120,"/images/img5.bmp"),r("modal5","New Utility-Scale Solutions","Product Description for New Utility-Scale Solutions.",220,"/images/img6.bmp"),r("modal6","New Commercial Solutions","Product Description for New Commercial Solutions.",320,"/images/img7.bmp")]})};var O=function(){return Object(o.jsx)("footer",{className:"bg-dark text-white text-center py-4",children:Object(o.jsx)("p",{children:"\xa9 2024 SE Boot Camp - Steven Moses Alvarez"})})};class g extends s.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.error("ErrorBoundary caught an error",e,t)}render(){return this.state.hasError?Object(o.jsx)("h1",{children:"Something went wrong."}):this.props.children}}var y=g;var v=function(){const[e,t]=Object(c.useState)(!1);return Object(o.jsxs)(y,{children:[Object(o.jsx)(n,{}),Object(o.jsxs)("main",{className:"container my-4",children:[Object(o.jsx)(p,{setIsLoggedIn:t,isLoggedIn:e}),e&&Object(o.jsx)(x,{})]}),Object(o.jsx)(O,{})]})};a(42);i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.3397ced8.chunk.js.map