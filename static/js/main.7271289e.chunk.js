(this["webpackJsonpse-bootcamp-project"]=this["webpackJsonpse-bootcamp-project"]||[]).push([[0],{33:function(e,a,t){e.exports=t(43)},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(8),c=t.n(n);var o=()=>r.a.createElement("header",{className:"bg-dark text-white text-center py-4"},r.a.createElement("h1",null,"SE Boot Camp Project 2")),i=t(31),m=t(47),s=t(48),d=t(49);t(23);var u=e=>{let{show:a,handleClose:t}=e;const[n,c]=Object(l.useState)(""),[o,m]=Object(l.useState)("");return r.a.createElement(s.a,{show:a,onHide:t},r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,null,"Sign Up")),r.a.createElement(s.a.Body,null,r.a.createElement(d.a,{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("https://se-bootcamp-project.stevenalvarez.me/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})});if(!e.ok)throw new Error("HTTP error! status: ".concat(e.status));await e.json();alert("Signup successful!"),t()}catch(a){console.error("Error:",a),alert("An error occurred. Please try again.")}}},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{type:"email",id:"email",placeholder:"Email Address*",value:n,onChange:e=>c(e.target.value)})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{type:"password",id:"password",placeholder:"Password*",value:o,onChange:e=>m(e.target.value)})),r.a.createElement(i.a,{variant:"primary",type:"submit",block:!0},"SIGN UP"))))};t(42);var p=function(){const[e,a]=Object(l.useState)({currentModal:null,navMenuVisible:!1}),[t,n]=Object(l.useState)(""),[c,o]=Object(l.useState)(""),p=e=>{a(a=>({...a,currentModal:e}))},E=()=>{a(e=>({...e,currentModal:null}))};return r.a.createElement("div",null,r.a.createElement("main",{className:"container my-4"},r.a.createElement("section",{id:"part1"},r.a.createElement("h2",null,"Part 1"),r.a.createElement("div",{className:"position-relative"},r.a.createElement("img",{src:"./images/img1.jpg",className:"img-fluid rounded",alt:"Studio workspace"}),r.a.createElement("div",{className:"text-studio"},"STUDIO"),r.a.createElement("div",{className:"text-work-hard"},"WE WORK HARD, WE PLAY HARD"),r.a.createElement("div",{className:"button-container"},r.a.createElement(i.a,{className:"mr-2",onClick:()=>p("loginModal")},"Login"),r.a.createElement(i.a,{onClick:()=>p("signUpModal")},"Sign Up"),r.a.createElement(m.a,{show:e.navMenuVisible,onToggle:()=>{a(e=>({...e,navMenuVisible:!e.navMenuVisible}))}},r.a.createElement(m.a.Toggle,{variant:"secondary",id:"burgerButton"},"\u2630"),r.a.createElement(m.a.Menu,null,r.a.createElement(m.a.Item,{href:"#part1"},"Part 1"),r.a.createElement(m.a.Item,{href:"#part2"},"Part 2"))))))),r.a.createElement(s.a,{show:"loginModal"===e.currentModal,onHide:E},r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,null,"Login")),r.a.createElement(s.a.Body,null,r.a.createElement(d.a,{onSubmit:async e=>{e.preventDefault();try{const e=await fetch("https://se-bootcamp-project.stevenalvarez.me/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:c})}),a=await e.json();e.ok?(localStorage.setItem("token",a.token),alert("Login successful"),E()):alert(a.message)}catch(a){console.error("Error:",a),alert("An error occurred. Please try again.")}}},r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{type:"email",placeholder:"Email Address*",value:t,onChange:e=>n(e.target.value)})),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Control,{type:"password",placeholder:"Password*",value:c,onChange:e=>o(e.target.value)})),r.a.createElement(i.a,{variant:"primary",type:"submit",block:!0},"LOGIN")))),r.a.createElement(u,{show:"signUpModal"===e.currentModal,handleClose:E}))};var E=function(){const[e,a]=Object(l.useState)({currentModal:null,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}}),t=e=>{a({currentModal:e,summaries:{modal1:"",modal2:"",modal3:"",modal4:"",modal5:"",modal6:""}})},n=()=>{a({...e,currentModal:null})},c=(t,l,c,o,m)=>r.a.createElement(s.a,{show:e.currentModal===t,onHide:n},r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,null,l)),r.a.createElement(s.a.Body,null,r.a.createElement("p",null,c),r.a.createElement("p",null,"Unit Price: $",o),r.a.createElement("img",{src:"."+m,className:"img-fluid",alt:l}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"quantity".concat(t.replace("modal",""))},"Enter quantity:"),r.a.createElement("input",{type:"number",className:"form-control",id:"quantity".concat(t.replace("modal","")),min:"1"})),r.a.createElement(i.a,{className:"mt-3",onClick:()=>((e,t)=>{const l=parseInt(document.getElementById("quantity".concat(e.replace("modal",""))).value);if(isNaN(l)||l<=0)alert("Please enter a valid quantity.");else{const r=t*l;a(a=>({...a,summaries:{...a.summaries,[e]:"Great! Order of ".concat(l," items is received, total price is $").concat(r,".")}}))}})(t,o)},"Add to Cart"),r.a.createElement("p",{id:"summary".concat(t.replace("modal","")),className:"mt-3"},e.summaries[t])));return r.a.createElement("main",{className:"container my-4"},r.a.createElement("section",{id:"part2",className:"bg-light p-4 rounded"},r.a.createElement("h2",null,"Part 2"),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement("h3",null,"Simplified project development"),r.a.createElement("h3",null,"for a complex world")),r.a.createElement("div",{className:"card-deck"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"./images/img2.bmp",className:"card-img-top",alt:"Residential Solutions"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("h4",{className:"card-title"},"Residential Solutions"),r.a.createElement("p",{className:"card-text"},"Save on your electricity bills, reduce your carbon footprint and increase the value of your home."),r.a.createElement(i.a,{variant:"outline-primary",onClick:()=>t("modal1")},"More"))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"./images/img3.bmp",className:"card-img-top",alt:"Utility-Scale Solutions"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("h4",{className:"card-title"},"Utility-Scale Solutions"),r.a.createElement("p",{className:"card-text"},"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."),r.a.createElement(i.a,{variant:"outline-primary",onClick:()=>t("modal2")},"More"))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"./images/img4.bmp",className:"card-img-top",alt:"Commercial Solutions"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("h4",{className:"card-title"},"Commercial Solutions"),r.a.createElement("p",{className:"card-text"},"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."),r.a.createElement(i.a,{variant:"outline-primary",onClick:()=>t("modal3")},"More")))),r.a.createElement("div",{className:"card-deck mt-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"./images/img5.bmp",className:"card-img-top",alt:"New Residential Solutions"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("h4",{className:"card-title"},"New Residential Solutions"),r.a.createElement("p",{className:"card-text"},"Innovative solutions for modern homes, enhancing energy efficiency."),r.a.createElement(i.a,{variant:"outline-primary",onClick:()=>t("modal4")},"More"))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"./images/img6.bmp",className:"card-img-top",alt:"New Utility-Scale Solutions"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("h4",{className:"card-title"},"New Utility-Scale Solutions"),r.a.createElement("p",{className:"card-text"},"Advanced technology for large-scale projects, ensuring reliability."),r.a.createElement(i.a,{variant:"outline-primary",onClick:()=>t("modal5")},"More"))),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"./images/img7.bmp",className:"card-img-top",alt:"New Commercial Solutions"}),r.a.createElement("div",{className:"card-body text-center"},r.a.createElement("h4",{className:"card-title"},"New Commercial Solutions"),r.a.createElement("p",{className:"card-text"},"Customizable options for businesses, maximizing operational efficiency."),r.a.createElement(i.a,{variant:"outline-primary",onClick:()=>t("modal6")},"More"))))),c("modal1","Residential Solutions","Product Description for Residential Solutions.",100,"/images/img2.bmp"),c("modal2","Utility-Scale Solutions","Product Description for Utility-Scale Solutions.",200,"/images/img3.bmp"),c("modal3","Commercial Solutions","Product Description for Commercial Solutions.",300,"/images/img4.bmp"),c("modal4","New Residential Solutions","Product Description for New Residential Solutions.",120,"/images/img5.bmp"),c("modal5","New Utility-Scale Solutions","Product Description for New Utility-Scale Solutions.",220,"/images/img6.bmp"),c("modal6","New Commercial Solutions","Product Description for New Commercial Solutions.",320,"/images/img7.bmp"))};var g=function(){return r.a.createElement("footer",{className:"bg-dark text-white text-center py-4"},r.a.createElement("p",null,"\xa9 2024 SE Boot Camp - Steven Moses Alvarez"))};class v extends r.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){console.error("ErrorBoundary caught an error",e,a)}render(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}var y=v;var N=function(){return r.a.createElement(y,null,r.a.createElement(o,null),r.a.createElement("main",{className:"container my-4"},r.a.createElement(p,null),r.a.createElement(E,null)),r.a.createElement(g,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7271289e.chunk.js.map