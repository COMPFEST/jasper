(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{156:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return l})),t.d(e,"rightToc",(function(){return d})),t.d(e,"default",(function(){return p}));var r=t(2),i=t(9),a=(t(0),t(187)),o=t(189),c={id:"form-fields",title:"Form Fields"},l={id:"form-fields",title:"Form Fields",description:'import {Input} from "jasper-ui"',source:"@site/docs/form-fields.md",permalink:"/docs/form-fields",editUrl:"https://github.com/COMPFEST/jasper/edit/master/docusaurus/docs/form-fields.md",sidebar:"someSidebar",previous:{title:"Footer",permalink:"/docs/footer"},next:{title:"Small Nav",permalink:"/docs/small-nav"}},d=[{value:"Dropdown",id:"dropdown",children:[{value:"Usage",id:"usage",children:[]},{value:"Code",id:"code",children:[]},{value:"Result",id:"result",children:[]}]},{value:"Text Input",id:"text-input",children:[{value:"Usage",id:"usage-1",children:[]},{value:"Code",id:"code-1",children:[]}]},{value:"Radio Input",id:"radio-input",children:[{value:"Usage",id:"usage-2",children:[]},{value:"Code",id:"code-2",children:[]}]},{value:"Number Input",id:"number-input",children:[{value:"Usage",id:"usage-3",children:[]},{value:"Code",id:"code-3",children:[]}]},{value:"TextArea Input",id:"textarea-input",children:[{value:"Usage",id:"usage-4",children:[]},{value:"Code",id:"code-4",children:[]}]},{value:"Phone Input",id:"phone-input",children:[{value:"Usage",id:"usage-5",children:[]},{value:"Code",id:"code-5",children:[]}]},{value:"Checkbox Input",id:"checkbox-input",children:[{value:"Usage",id:"usage-6",children:[]},{value:"Code",id:"code-6",children:[]}]}],u={rightToc:d};function p(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Form fields are used in forms where input from user is required. They are part of the django form fields implemented on our web. Typically used for registration, login, and signup."),Object(a.b)("h2",{id:"dropdown"},"Dropdown"),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("p",null,"We implement dropdown input field to contain user input in a scenario where user is required to select one from multiple choices. Usually used for signup and registration."),Object(a.b)("h3",{id:"code"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Dropdown\n  placeholder="Finance"\n  choices={["Finance", "Academy", "Competition"]}\n  label="Departments"\n  name="DropdownInput"\n/>\n')),Object(a.b)("h3",{id:"result"},"Result"),Object(a.b)(o.d,{placeholder:"Finance",choices:["Finance","Academy","Competition"],label:"Departments",name:"DropdownInput",mdxType:"Dropdown"}),Object(a.b)("h2",{id:"text-input"},"Text Input"),Object(a.b)("h3",{id:"usage-1"},"Usage"),Object(a.b)("p",null,"Text input field is a commonly-defined single-line text field that a user can enter text into. Usually used for username in registration form."),Object(a.b)("h3",{id:"code-1"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Text\n  name="name"\n  placeholder="text placeholder"\n/>\n')),Object(a.b)("h2",{id:"radio-input"},"Radio Input"),Object(a.b)("h3",{id:"usage-2"},"Usage"),Object(a.b)("p",null,"We add Radio input field to display many options with only one radio can be selected at the same time."),Object(a.b)("h3",{id:"code-2"},"Code"),Object(a.b)("p",null,"The name parameter must be the same to be detected as one Radio Input."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Radio name="name" value="One">\n  One\n</Input.Radio>\n<Input.Radio name="name" value="Two">\n  Two\n</Input.Radio>\n<Input.Radio name="name" value="Three">\n  Three\n</Input.Radio>\n')),Object(a.b)("h2",{id:"number-input"},"Number Input"),Object(a.b)("h3",{id:"usage-3"},"Usage"),Object(a.b)("p",null,"Number input define a field for entering a number. Usually used to write down a price, or count."),Object(a.b)("h3",{id:"code-3"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Number\n  name="input-name" \n  placeholder="number placeholder"\n/>\n')),Object(a.b)("h2",{id:"textarea-input"},"TextArea Input"),Object(a.b)("h3",{id:"usage-4"},"Usage"),Object(a.b)("p",null,"TextArea input is multi-line text field that usually used to collect user inputs like comments or reviews."),Object(a.b)("h3",{id:"code-4"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.TextArea\n  name="input-name"\n  placeholder="placeholder"\n/>\n')),Object(a.b)("h2",{id:"phone-input"},"Phone Input"),Object(a.b)("h3",{id:"usage-5"},"Usage"),Object(a.b)("p",null,"We implement phone input field similiar to number input with a phone span. As the name said, it is used for a phone number input in a form."),Object(a.b)("h3",{id:"code-5"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Phone\n  name="input-name"\n  placeholder="phone placeholder"\n/>\n')),Object(a.b)("h2",{id:"checkbox-input"},"Checkbox Input"),Object(a.b)("h3",{id:"usage-6"},"Usage"),Object(a.b)("p",null,"Checkbox input is used to display one or more options with the user and the user can select one or more from the options."),Object(a.b)("h3",{id:"code-6"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<Input.Checkbox name="input-name">\n  Hello\n</Input.Checkbox>\n')))}p.isMDXComponent=!0},189:function(n,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return w})),t.d(e,"c",(function(){return fn})),t.d(e,"d",(function(){return q})),t.d(e,"e",(function(){return H})),t.d(e,"f",(function(){return xn}));t(194),t(195),t(199),t(196),t(192),t(23),t(18),t(19),t(53),t(52);var r=t(0),i=t.n(r),a=t(38),o=t.n(a),c=t(197),l=t(201),d=t(200),u=t.n(d);function p(){return(p=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function s(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}function m(n,e){return e||(e=n.slice(0)),n.raw=e,n}function f(){var n=m(["\n  background: ",";\n  border-radius: 100px;\n  border: none;\n  padding: 12px 22px;\n  cursor: pointer;\n  color: white;\n  font-size: 16px;\n\n  &.secondary {\n    background: transparent;\n    border: 2px solid #FF008B;\n    padding: 10px 20px;\n    color: #FF008B;\n  }\n\n  &.nude {\n    background: transparent;\n  }\n\n  &.bold {\n    font-weight: bold;\n  }\n\n  &:hover {\n    opacity: 0.75;\n  }\n"]);return f=function(){return n},n}var h=c.a.button(f(),(function(n){try{if(n.theme.colors.primary)return n.theme.colors.primary;throw new Error("primary-undefined")}catch(e){return"linear-gradient(111.34deg, #D418B6 0%, #F1185E 100%)"}})),b=function(n){return n.href?n.download?i.a.createElement("a",{href:n.href,download:!0},i.a.createElement(h,n,n.children)):i.a.createElement("a",{href:n.href},i.a.createElement(h,n,n.children)):i.a.createElement(h,n,n.children)};function g(){var n=m(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  position: fixed;\n  z-index: 1000;\n  background-color: ",";\n  overflow: hidden;\n  padding-bottom: 500px;\n\n  .container {\n    width: 100%;\n    text-align: center;\n    align-self: center;\n  }\n\n  .info-message {\n    margin: auto;\n    max-width: 650px;\n    width: 80%;\n    padding-bottom: 30px;\n    font-size: 20px;\n    color: #fff;\n  }\n\n  button {\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n\n  button:nth-of-type(1) {\n    background: transparent;\n    border: 1px solid #f3f3f3;\n  }\n"]);return g=function(){return n},n}b.propTypes={href:o.a.string,children:o.a.string},b.defaultProps={type:"button"};c.a.div(g(),(function(n){try{if(n.theme.colors.background)return n.theme.colors.background;throw new Error("background color not defined")}catch(e){return"#000"}}));function x(){var n=m(["\n  & * {\n    margin: 0;\n  }\n\n  #card-body {\n    background: ",";\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n  }\n\n  #mini-information-card {\n    & div {\n      padding: 25px 20px;\n      width: 13rem;\n    }\n  }\n\n  #title {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 22px;\n    color: #fff;\n    margin: 0;\n  }\n\n  #content {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 177%;\n    color: #fff;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n\n  #link {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 14px;\n    color: #747373;\n    text-decoration: none;\n  }\n\n  #large-card {\n    width: 50rem;\n\n    #img-container {\n      margin-right: 24px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    #text {\n      line-height: 140%;\n      text-align: justify;\n    }\n\n    #body {\n      color:#fff;\n      padding: 32px 0;\n    }\n\n    & #card-body {\n      display: flex;\n    }\n\n    .btn-container {\n      padding: 20px 0 32px 0;\n    }\n  }\n\n  #article-card {\n    width: 30rem;\n    & #card-body {\n      color:#fff;\n      padding: 24px;\n    }\n\n    #img-container {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n\n    h2 {\n      font-weight: normal;\n      font-size: 1rem;\n      margin-top: 20px;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 1.5rem;\n    }\n  }\n\n  #carousel-card {\n    & #card-body {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 32px;\n      width: max-content;\n    }\n\n    h1 {\n      font-weight: bold;\n      font-size: 2em;\n    }\n  }\n"]);return x=function(){return n},n}var v=c.a.div(x(),(function(n){try{if(n.theme.colors.secondary)return n.theme.colors.secondary;throw new Error("secondary color not defined")}catch(e){return"#131313"}})),w=function(n){return i.a.createElement(v,null,function(n){switch(n.type){case"large-card":return e=n.title,t=n.text,r=n.image,a=n.miniTitle,o=n.buttonTop,c=n.buttonBottom,i.a.createElement("div",{id:"large-card"},i.a.createElement("div",{id:"card-body"},i.a.createElement("div",{id:"img-container"},i.a.createElement("img",{src:r,alt:""})),i.a.createElement("div",{id:"body"},i.a.createElement("h3",{id:"mini-title"},a),i.a.createElement("h1",{id:"title"},e),i.a.createElement("div",{className:"btn-container"},o),i.a.createElement("p",{id:"text"},t),c)));case"article-card":return function(n,e,t){return i.a.createElement("div",{id:"article-card"},i.a.createElement("div",{id:"card-body"},i.a.createElement("div",{id:"img-container"},i.a.createElement("img",{src:t,alt:""})),i.a.createElement("h2",null,e),i.a.createElement("h1",null,n)))}(n.title,n.category,n.image);case"carousel-card":return function(n,e){return i.a.createElement("div",{id:"carousel-card"},i.a.createElement("div",{id:"card-body"},i.a.createElement("div",{id:"img-container"},i.a.createElement("img",{src:e,alt:""})),i.a.createElement("h1",{id:"title"},n)))}(n.caption,n.image);default:return function(n,e,t,r){return i.a.createElement("div",{id:"mini-information-card"},i.a.createElement("div",{id:"card-body"},i.a.createElement("h1",{id:"title"},n),i.a.createElement("p",{id:"content"},e),i.a.createElement("a",{id:"link",href:r},t)))}(n.title,n.text,n.linkContent,n.href)}var e,t,r,a,o,c}(n))};function y(){var n=m(["\n  color: white;\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  /* Hide the browser's default checkbox */\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border: 1px solid ",";\n    border-radius: 2px;\n  }\n\n  /* On mouse-over, add a grey background color */\n  &:hover input ~ .checkmark {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  /* When the checkbox is checked, add a blue background */\n  input:checked ~ .checkmark {\n    background-color: ",';\n  }\n\n  /* Style the checkmark/indicator */\n  .checkmark:after {\n    content: "";\n    display: none;\n    position: absolute;\n    left: 7px;\n    top: 3px;\n    width: 5px;\n    height: 10px;\n    border: solid #000;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg);\n  }\n\n  /* Show the checkmark when checked */\n  input:checked ~ .checkmark:after {\n    display: block;\n  }\n']);return y=function(){return n},n}function j(){var n=m(['\n  position: absolute;\n  margin: 15px;\n  color: white;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: -5px;\n    display: block;\n    left: 2.5rem;\n    width: 1px;\n    height: calc(1rem + 10px);\n    background: ',";\n  }\n"]);return j=function(){return n},n}function k(){var n=m(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n\n  &:checked + ",":before {\n    background: ",";\n  }\n"]);return k=function(){return n},n}function E(){var n=m(['\n  display: block;\n  color: white;\n\n  &:before {\n    content: "";\n    display: inline-block;\n    width: 1.2rem;\n    height: 1.2rem;\n    vertical-align: -0.25rem;\n    border-radius: 1.2rem;\n    border: 1px solid ',";\n    margin-right: 0.6rem;\n    transition: background 0.2s ease;\n    box-shadow: inset 0 0 0 0.3rem #000;\n  }\n"]);return E=function(){return n},n}function O(){var n=m(["\n  width: calc(100% - 34px);\n  padding: 10px 15px;\n  color:white;\n  background-color: transparent;\n  border: 2px solid ",";\n  border-radius: 5px;\n  font-family: inherit;\n\n  &::placeholder {\n    color: #f3f3f3;\n    opacity: 0.5;\n  }\n"]);return O=function(){return n},n}w.propTypes={text:o.a.string,linkContent:o.a.string,href:o.a.string,type:o.a.string,title:o.a.string,caption:o.a.string,miniTitle:o.a.string,buttonTop:o.a.object,buttonBottom:o.a.object};Object(c.a)(l.a)(O(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}));var C=c.a.span(E(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}));Object(c.a)(l.a)(k(),C,(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}})),c.a.span(j(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}})),c.a.label(y(),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}),(function(n){try{if(n.theme.colors.inputColor)return n.theme.colors.inputColor;throw new Error("inputcolor-not-defined")}catch(e){return"#f3f3f3"}}));function N(){var n=m(["\n  padding: 8px 12px;\n  width: 100%;\n"]);return N=function(){return n},n}function T(){var n=m(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.5;\n  }\n"]);return T=function(){return n},n}function I(){var n=m(["\n  list-style-type: none;\n  height: fit-content;\n  width: 300px;\n  padding-left: 0;\n  background: #f3f3f3;\n  z-index: 100;\n  overflow: auto;\n  margin-top: 0;\n  font-weight: 400;\n\n  .accent-background {\n    background: #e5e5e5;\n  }\n"]);return I=function(){return n},n}function _(){var n=m(["\n  display: flex;\n  align-items: center;\n  border: 2px solid #000000;\n  border-radius: 5px;\n  background: #dbdbdb;\n  font-weight: 400;\n  padding: 8px 12px;\n  justify-content: space-between;\n  width: 300px;\n  box-sizing: border-box;\n  &:active,\n  &:focus {\n    outline: 0;\n  }\n"]);return _=function(){return n},n}function S(){var n=m(["\n  margin-top: 8px;\n  width: fit-content;\n"]);return S=function(){return n},n}function U(){var n=m(["\n  p {\n    margin: 0;\n  }\n\n  .rotated {\n    transform-box: fill-box;\n    transform-origin: center;\n    transform: rotate(180deg);\n  }\n\n  .background-active {\n    background: #f3f3f3;\n  }\n"]);return U=function(){return n},n}function z(){var n=m(["\n  font-weight: 500;\n"]);return z=function(){return n},n}var F=c.a.label(z()),R=c.a.div(U()),B=c.a.div(S()),A=c.a.div(_()),D=c.a.ul(I()),P=c.a.div(T()),L=c.a.li(N()),W=function(n){var e=n.active;return i.a.createElement("svg",{width:"15",height:"7",viewBox:"0 0 15 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e?"rotated":void 0},i.a.createElement("path",{d:"M12.853 1H1.71826L7.28561 6L12.853 1Z",fill:"#252C29",stroke:"#252C29"}))},q=function(n){var e=n.field,t=n.form,a=s(n,["field","form"]),o=Object(r.useState)(!1),c=o[0],l=o[1],d=Object(r.useState)(a.placeholder),u=d[0],p=d[1],m=Object(r.useRef)(),f=function(n){m.current.contains(n.target)||l(!1)};return Object(r.useEffect)((function(){return c?document.addEventListener("mousedown",f):document.removeEventListener("mousedown",f),function(){document.removeEventListener("mousedown",f)}}),[c]),Object(r.useEffect)((function(){t&&t.setFieldValue(e.name,u)}),[a.defaultValue]),i.a.createElement(R,null,i.a.createElement(F,null,a.label),i.a.createElement(B,{ref:m,className:c?"background-active":void 0},i.a.createElement(A,{onClick:function(n){return l(!c)}},i.a.createElement("p",null,u),i.a.createElement(W,{active:c})),c&&i.a.createElement(D,null,a.choices.map((function(n,r){return i.a.createElement(P,{key:n.index||n.id,onClick:function(){return r=n,a.onChange&&a.onChange(r),l(!1),p(r),void(t&&t.setFieldValue(e.name,r));var r}},i.a.createElement(L,{key:n.index||n.id,value:n.value,className:r%2!=0?"accent-background":void 0},i.a.createElement("p",null,n)))})))))};function M(){var n=m(["\n  .small-nav {\n    margin-top: 30px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    font-size: 1.2rem;\n    overflow-x: auto;\n    color: white;\n  }\n\n  .small-nav div {\n    display: block;\n    margin: 0 10px;\n    cursor: pointer;\n    white-space: nowrap;\n\n    &:first-child {\n      margin-left: 0;\n    }\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n\n  @media (max-width: 992px) {\n    .small-nav {\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .nav-content {\n    display: flex;\n    justify-content: center;\n  }\n"]);return M=function(){return n},n}var V=c.a.div(M()),H=function(n){var e,t;function r(e){var t;return(t=n.call(this,e)||this).state={index:0},t}return t=n,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.prototype.render=function(){var n=this,e=this.props.navItems;return i.a.createElement(V,null,i.a.createElement("div",{className:"small-nav"},e.map((function(e,t){return i.a.createElement("div",{key:t,onClick:function(){return n.setState({index:t})},style:{fontWeight:n.state.index===t?"bold":"normal"}},e.title)}))),i.a.createElement("div",{className:"nav-content"},e[this.state.index].component))},r}(r.Component);H.propTypes={navItems:o.a.array.isRequired};var J="_2ZSOL",G="_39QAT",X="_1UCGB",K="_1JVUU",Z="_3UchF",Q="_1MoLE",Y="_1TbKk",$="_1BqmE",nn=function(n,e){var t=[],r=Array.of(e.displayName||e.name);return i.a.Children.forEach(n,(function(n){var e=n&&n.type&&(n.type.displayName||n.type.name);r.includes(e)&&t.push(n)})),t},en=function(){return null},tn=function(){return null},rn=function(){return null},an=function(n){var e,t,a,o,c=n.children,l=(t=Object(r.useState)("undefined"!=typeof window?window.innerWidth:0),a=t[0],o=t[1],Object(r.useEffect)((function(){var n=function(){o(window.innerWidth)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),a)<768,d=nn(c,tn)[0],u=null===(e=d.props)||void 0===e?void 0:e.show,p=function(){var n,e=nn(c,rn)[0],t=(null===(n=e.props)||void 0===n?void 0:n.setShow)||function(){},r=e.props.children;if(r){var a=r.filter((function(n){var e;return null===(e=n.props)||void 0===e?void 0:e.open}))[0],o=r.filter((function(n){var e;return null===(e=n.props)||void 0===e?void 0:e.close}))[0];return i.a.createElement("div",{className:$,onClick:function(){return t((function(n){return!n}))}},u?o:a)}};return i.a.createElement("div",{className:J},i.a.createElement("div",{className:G},function(){var n,e,t=nn(c,en)[0];if(t){var r,a,o=(null===(n=t.props)||void 0===n?void 0:n.children)||"";Array.isArray(o)?(a=o.filter((function(n){return n.props.mobile})),r=o.filter((function(n){return!n.props.mobile}))):r=a=o;var d=(null===(e=t.props)||void 0===e?void 0:e.href)||"#";return i.a.createElement("div",{className:K},i.a.createElement("div",{className:Z},i.a.createElement("a",{href:d},i.a.createElement("div",{className:X},l?a:r)),p()))}}(),function(){if(d)return i.a.createElement("div",{className:Q+" "+(u||!l?Y:"")},d.props.children)}()))};function on(){var n=m(["\n  cursor: pointer;\n  width: 12px;\n  height: 12px;\n  margin: 0 4px;\n  border-radius: 6px;\n  background-color: #530330;\n  transition: background-color 0.3s, width 0.3s;\n  ","\n"]);return on=function(){return n},n}function cn(){var n=m(["\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  transition: transform 0.3s, width 0.3s;\n\n  &.next-dept {\n    right: 60px;\n    transform: translate(50%, -50%);\n    &:not(.enabled) {\n      transform: translate(50%, -50%) scale(0.00001);\n    }\n  }\n  &.prev-dept {\n    left: 60px;\n    transform: translate(-50%, -50%);\n    &:not(.enabled) {\n      transform: translate(-50%, -50%) scale(0.00001);\n    }\n  }\n\n  @media (max-width: 1200px) {\n    &.next-dept {\n      right: 48px;\n    }\n    &.prev-dept {\n      left: 48px;\n    }\n  }\n\n  @media (max-width: 992px) {\n    &.next-dept {\n      right: 32px;\n    }\n    &.prev-dept {\n      left: 32px;\n    }\n  }\n\n  @media (max-width: 768px) {\n    top: auto;\n    bottom: -150px;\n    position: initial;\n    width: 75px;\n    transform: initial !important;\n\n    &:not(.enabled) {\n      width: 0px;\n    }\n\n    &.next-dept {\n      right: auto;\n    }\n    &.prev-dept {\n      left: auto;\n      transform: initial;\n    }\n  }\n"]);return cn=function(){return n},n}function ln(){var n=m(["\n  display: flex;\n  justify-content: center;\n\n  @media (max-width: 768px) {\n    margin-top: 30px;\n    height: 75px;\n  }\n"]);return ln=function(){return n},n}function dn(){var n=m(["\n  position: relative;\n  margin: 50px 0;\n"]);return dn=function(){return n},n}an.propTypes={children:o.a.node},an.Brand=en,an.Collapse=tn,an.Toggle=rn;var un=c.a.div(dn()),pn=c.a.div(ln()),sn=c.a.div(cn()),mn=c.a.div(on(),(function(n){return n.selected?"width: 32px; background-color: #A70660;":""})),fn=function(n){var e=n.children,t=n.prevButton,a=n.nextButton,o=Object(r.useState)(null),c=o[0],l=o[1],d=Object(r.useState)(!0),p=d[0],s=d[1],m=Object(r.useState)(!0),f=m[0],h=m[1],b=Object(r.useState)(0),g=b[0],x=b[1],v=Object(r.useState)([]),w=v[0],y=v[1],j=Object(r.useCallback)((function(n){return c.scrollTo(n)}),[c]),k=Object(r.useCallback)((function(){return c.scrollPrev()}),[c]),E=Object(r.useCallback)((function(){return c.scrollNext()}),[c]);return Object(r.useEffect)((function(){var n=function(){x(c.selectedScrollSnap()),s(c.canScrollPrev()),h(c.canScrollNext())};c&&(y(c.scrollSnapList()),c.on("select",n),n())}),[c]),i.a.createElement(un,null,i.a.createElement("div",{style:{position:"relative"}},i.a.createElement(u.a,{className:"testimony_carousel__viewport",options:{align:"center",draggable:!1},htmlTagName:"div",emblaRef:l},i.a.createElement("div",{style:{display:"flex"}},e.map((function(n,e){return i.a.createElement("div",{style:{position:"relative",flex:"0 0 100%"},key:e},i.a.createElement("div",{style:{display:"flex",minHeight:"400px",width:"80%",margin:"auto"}},n))}))))),e.length>1?i.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:10}},w.map((function(n,e){return i.a.createElement(mn,{selected:e===g,onClick:function(){return j(e)},key:e})}))):i.a.createElement("div",null),i.a.createElement(pn,null,i.a.createElement(sn,{className:"prev-dept "+(p?" enabled":""),onClick:k},t),i.a.createElement(sn,{className:"next-dept "+(f?" enabled":""),onClick:E},a)))};function hn(){var n=m(["\n  display: flex;\n  justify-content: space-between;\n\n  .email-input {\n    background-color: rgba(243, 243, 243, 0.4);\n    border-radius: 5px;\n    color: white;\n    padding: 0.5rem;\n    padding-right: 2.5rem;\n    border: 0;\n    margin-right: 1rem;\n  }\n\n  .email-input::placeholder {\n    color: rgba(243, 243, 243, 0.5);\n  }\n\n  .subscribe-button {\n    border-radius: 50px;\n    background-color: #fdd262;\n    color: #001c2c;\n    font-size: 1rem;\n    border: 0;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    cursor: pointer;\n    padding: 0.5rem 1rem;\n\n    &:hover {\n      opacity: 0.75;\n    }\n  }\n\n  .disabled {\n    cursor: initial;\n    opacity: 0.8;\n  }\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n\n    .email-input {\n      width: 75%;\n      margin-bottom: 0.5rem;\n    }\n\n    .subscribe-button {\n      max-width: 50%;\n      margin-top: 0.7rem;\n      margin-bottom: 0.5rem;\n    }\n  }\n"]);return hn=function(){return n},n}fn.propTypes={children:o.a.array,prevButton:o.a.node.isRequired,nextButton:o.a.node.isRequired};c.a.div(hn());function bn(){var n=m(["\n  background-color: ",';\n  height: 240px;\n  padding: 3rem 7rem;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-family: "DM Sans", "itc";\n\n  #ft-left {\n    max-width: 40%;\n  }\n\n  div.row {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  div.column {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .ft-section-title {\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    display: block;\n  }\n\n  .slogan {\n    font-size: 18px;\n    letter-spacing: 0.04em;\n    margin-top: .5rem;\n  }\n\n  .deskripsi-singkat {\n    line-height: 1.5;\n  }\n\n  .separator {\n    /* border: 0.4px solid white; */\n    margin: 1.5rem 0;\n  }\n\n  #copyright {\n    font-weight: bold;\n    margin-bottom: 1rem;\n    display: block;\n  }\n\n  #footer-link > a {\n    margin-right: 1rem;\n  }\n\n  #socmed {\n    display: flex;\n    margin-bottom: 1.5rem;\n    #fb {\n      height: 25px;\n      width: 25px;\n      margin-right: 22px;\n    }\n\n    #tw {\n      width: 30px;\n      height: 25px;\n      margin-right: 22px;\n    }\n\n    #yb {\n      width: 32px;\n      height: 23px;\n      margin-right: 22px;\n    }\n\n    #ig,\n    #ln {\n      width: 23px;\n      height: 23px;\n      margin-right: 22px;\n    }\n\n    #in {\n      width: 23px;\n      height: 22px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    height: auto;\n    padding: 2rem 2rem;\n    text-align: center;\n\n    div.row,\n    div.column {\n      flex-direction: column;\n      align-items: center;\n    }\n\n    #ft-left {\n      max-width: 100%;\n      margin-bottom: 1rem;\n    }\n\n    #socmed {\n      margin-bottom: 2.5rem;\n      #fb {\n        height: 17px;\n        width: 16px;\n        padding-right: 5px;\n      }\n\n      #tw {\n        width: 20px;\n        height: 16px;\n        padding-right: 5px;\n      }\n\n      #yb {\n        width: 21px;\n        height: 15px;\n        padding-right: 5px;\n      }\n\n      #ig,\n      #ln {\n        width: 15px;\n        height: 15px;\n        padding-right: 5px;\n      }\n\n      #in {\n        width: 15px;\n        height: 15px;\n        padding-right: 5px;\n      }\n    }\n  }\n']);return bn=function(){return n},n}c.a.div(bn(),(function(n){try{if(n.theme.colors.secondary)return n.theme.colors.secondary;throw new Error("secondary color not defined")}catch(e){return"#131313"}}));var gn={spinner:"_3XhrC",default:"_2VC4g",spin:"_B5F01",regular:"_2JCBW",xs:"_1hYRi",sm:"_ia40B",md:"_3KmjG",lg:"_19i6n",xl:"_4vP9i",slow:"_36t5W",normal:"_2ykm8",fast:"_3fOfO",linear:"_WEkOn",ease:"_1qGnP",bouncy:"_2cBdP"},xn=function(n){var e=n.variant,t=n.size,r=n.speed,a=n.animation,o=s(n,["variant","size","speed","animation"]);return i.a.createElement("div",{className:gn.spinner},i.a.createElement("div",p({className:gn[e]+" "+gn[t]+" "+gn[r]+" "+gn[a]},o)))};xn.propTypes={variant:o.a.string,size:o.a.string,speed:o.a.string,animation:o.a.string},xn.defaultProps={variant:"default",size:"md",speed:"normal",animation:"linear"}}}]);