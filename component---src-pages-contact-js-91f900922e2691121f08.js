(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a(198),o=a(196),l=a(181),s=a.n(l);t.default=function(e){var t=Object(c.e)();return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:t.formatMessage({id:"Meta.contact.title"}),description:t.formatMessage({id:"Meta.contact.text"}),keywords:["bytesandbrains"]}),r.a.createElement("div",null,r.a.createElement("div",{className:s.a.outer},r.a.createElement("div",{className:s.a.headline},r.a.createElement("h1",null,r.a.createElement(c.a,{id:"Contact.formular.headline"})),r.a.createElement("p",null,r.a.createElement(c.a,{id:"Contact.formular.text"}))),r.a.createElement("form",{action:"https://formspree.io/hello@bytesandbrains.com",method:"POST"},r.a.createElement("div",{className:s.a.inputSection},r.a.createElement("input",{type:"text",id:"name",name:"user_name",placeholder:t.formatMessage({id:"Contactform.name"})})),r.a.createElement("div",{className:s.a.inputSection},r.a.createElement("input",{type:"tel",id:"phone",name:"user_phone",placeholder:t.formatMessage({id:"Contactform.phone"})})),r.a.createElement("div",{className:s.a.inputSection},r.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:t.formatMessage({id:"Contactform.email"})})),r.a.createElement("div",{className:s.a.inputSection},r.a.createElement("textarea",{rows:10,id:"besked",name:"message",placeholder:t.formatMessage({id:"Contactform.message"})})),r.a.createElement("div",{className:s.a.inputSection},r.a.createElement("button",{type:"submit"},"Send"))))))}},191:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(39),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.withPrefix});a(192);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},192:function(e,t,a){var n;e.exports=(n=a(194))&&n.default||n},193:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a(63);var n=a(0),r=[],c=function(e){"undefined"!=typeof window&&(localStorage.setItem("consent",JSON.stringify(e)),window["ga-disable-UA-115579130-1"]=!e,r.forEach(function(e){return e()}))},i=function(){return"undefined"==typeof window?"":JSON.parse(localStorage.getItem("consent"))};function o(){var e=Object(n.useState)(i()),t=e[0],a=e[1],o=function(){return a(i())};return Object(n.useEffect)(function(){return r.push(o),window.addEventListener("storage",o),function(){r=r.filter(function(e){return e!==o}),window.removeEventListener("storage",o)}}),[t,function(){c(!t),o()}]}},194:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(64),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},195:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Bytes & Brains logo"),n.createElement("path",{className:"left",d:"M64.55.38a47.35,47.35,0,0,1-.08,15.18c-1.39,1-3,.58-4.6.59-8.79,0-17.59,0-26.39,0a42.44,42.44,0,0,0-4.79.16A13.84,13.84,0,0,0,16.37,29c-.14,1.59-.12,3.2-.12,4.8V518.55c0,1.6,0,3.21.12,4.8A13.64,13.64,0,0,0,29.2,536c1.43.11,2.88.07,4.32.07q13.44,0,26.87,0c1.57,0,3.13.14,4.59.2A50.81,50.81,0,0,1,65.11,552a13.84,13.84,0,0,1-2.59.46c-11,0-22.08.11-33.11-.07C19.67,552.24,11.86,548,6,540.3a28.62,28.62,0,0,1-5.86-16C0,522.24,0,520.16,0,518.08V34.31c0-2.23,0-4.48.15-6.71C1.39,11.75,14.42.34,28.43.12,39.79-.07,51.15,0,62.5,0A12.34,12.34,0,0,1,64.55.38Z",key:1}),n.createElement("path",{className:"right",d:"M495,552.11a57.88,57.88,0,0,1,0-15.34c1.2-1.1,2.71-.69,4.1-.7,9.12,0,18.24,0,27.36,0,1.44,0,2.88,0,4.31-.06a13.59,13.59,0,0,0,13-13c.1-1.59.06-3.2.06-4.8V34c0-1.6,0-3.2-.07-4.79a13.75,13.75,0,0,0-12.18-12.8,40.21,40.21,0,0,0-4.79-.18c-8.8,0-17.6,0-26.4,0-1.56,0-3.13-.14-4.57-.21-1.08-3.62-1.15-11.32-.19-15.55a17.77,17.77,0,0,1,2.69-.4c11,0,22.08,0,33.11.08a27.8,27.8,0,0,1,18.37,7.21,28.46,28.46,0,0,1,10.14,19.5c.21,2.39.29,4.79.29,7.19q0,242.13,0,484.26c0,2.24-.1,4.48-.24,6.71-.89,14.68-13.6,26.81-27.92,27.37-5.75.23-11.52.16-17.27.19q-7.92,0-15.84,0C497.67,552.48,496.43,552.26,495,552.11Z",key:2}),n.createElement("g",{className:"inside",key:3},[n.createElement("path",{d:"M343.07,396.09c.05-16,1.5-31.11,5.69-45.83a79.74,79.74,0,0,1,9.81-21.76c8.19-12.57,19.75-19.49,34.57-21.66,15.84-2.32,28.57,3,39,14.64,7.72,8.65,12.41,18.89,15.42,30a129.21,129.21,0,0,1,3.63,19.3,41,41,0,0,0,7.28,18.56c2,2.9,4,5.79,5.87,8.76a40.89,40.89,0,0,1,3.19,5.89c1.79,4.27.75,8.19-2.77,11.22a20.42,20.42,0,0,1-8.08,4c-5.34,1.5-5.29,1.54-6.17,6.9-2,12.07-5.29,23.7-11.85,34.19-4.73,7.57-10.69,13.91-18.6,18.27-13.94,7.69-37.25,8.91-53.74-7.36a63,63,0,0,1-14.25-21.39,114.86,114.86,0,0,1-7.28-28.23A224.86,224.86,0,0,1,343.07,396.09Z",key:0}),n.createElement("path",{d:"M218.25,156.94A171.43,171.43,0,0,1,216,186.31c-2,11.39-5.25,22.42-11.13,32.51a51.16,51.16,0,0,1-18.17,18.73,45.62,45.62,0,0,1-56-7.24,62.87,62.87,0,0,1-12.8-19.55,105.93,105.93,0,0,1-7-24.86c-.16-1-.27-1.9-.43-2.85a3.89,3.89,0,0,0-3-3.34,31.61,31.61,0,0,1-4.1-1.32,38,38,0,0,1-6-2.92,8.48,8.48,0,0,1-3.73-10,21,21,0,0,1,2.35-5.21c3.08-5.06,6.19-10.09,9.46-15a29.35,29.35,0,0,0,4.52-13.45c1.49-13.27,4.48-26.16,11-38C124.73,86.52,129.55,80,136.22,75a41.34,41.34,0,0,1,17.37-7.74c20-3.72,35.82,3.07,47.85,19.17,5.83,7.81,9.36,16.71,11.87,26C217.14,126.81,218.48,141.42,218.25,156.94Z",key:1}),n.createElement("path",{d:"M114.59,482.57c-.82-3.57-.82-3.57,0-7.68,1.26-1.33,3.08-1.4,4.78-1.69,8.66-1.49,17.34-2.92,26-4.39,1.87-.32,3.72-.73,5.56-1.09a13.09,13.09,0,0,0,.54-2.11c.09-1.27.08-2.56.08-3.83q0-61.65,0-123.29c0-1.88.38-3.84-.65-5.75-2.82-1-5.63.16-8.45.26s-5.43.33-8.14.52c-2.87.21-5.73.53-8.61.65-2.67.11-5.34.78-8.34.38A25.14,25.14,0,0,1,117,326a2.4,2.4,0,0,1,1.77-2.06c.91-.32,1.81-.64,2.74-.88q22.5-5.83,45-11.64c.46-.12.94-.18,1.4-.29,3.12-.71,6.22.44,6.05,5.13-.35,9.27-.67,18.54-.76,27.81Q173,374.5,172.93,405c0,12.47.08,24.94.18,37.41.06,7.2.21,14.39.37,21.58a28,28,0,0,0,.42,3.22c1.63,1.25,3.43,1.29,5.13,1.57,8.83,1.48,17.67,2.9,26.5,4.38,1.7.28,3.38.75,5.13,1.14a17.14,17.14,0,0,1,.12,8.48c-1.5.14-2.89.37-4.27.38-7.36,0-14.71,0-22.07,0q-32.15,0-64.28,0C118.29,483.1,116.33,483.49,114.59,482.57Z",key:2}),n.createElement("path",{d:"M446.69,235.45c.52,3,.89,5.65-.19,8.21-4.51.76-57.92,1-92.16.49-1.24,0-2.49-.19-3.65-.29-1-3.76-1-4.32.08-8.43,11.89-2.82,24.31-4,36.6-6.78.11-1.75.27-3.16.28-4.56.54-46.6.21-125.92-.58-130.19a12.08,12.08,0,0,0-2.6-.34c-8.92.7-17.84,1.46-26.76,2.18-1.42.12-2.85.15-4.39.23-1.1-3.13-.67-6.15-.41-9.12,0-.61.9-1.32,1.54-1.65a15.82,15.82,0,0,1,3.19-1q22-5.7,44.1-11.37a19.09,19.09,0,0,1,4.24-.65,3.44,3.44,0,0,1,3.72,3,21.89,21.89,0,0,1,.2,4.29c-.25,13.11-.66,26.21-.78,39.32-.15,16.63-.14,33.26-.1,49.89q.06,27.09.29,54.2c.05,6.06.12,6,5.88,6.95,9.62,1.58,19.24,3.22,28.85,4.86C444.81,234.84,445.56,235.13,446.69,235.45Z",key:3})])])}r.defaultProps={id:"logo-svg",viewBox:"0 0 560.18 552.53"},e.exports=r,r.default=r},196:function(e,t,a){"use strict";var n=a(197),r=a(0),c=a.n(r),i=a(4),o=a.n(i),l=a(200),s=a.n(l),m=a(191);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return c.a.createElement(m.b,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,link:[{rel:"shortcut icon",type:"image/png",href:Object(m.c)("favicon.ico")}],meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d;var u="1025518380"},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Bytes & Brains",description:"..",author:"@bytesandbrains"}}}}},198:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=a(25),l=a(193),s=a(191),m=a(170),d=a.n(m),u=function(){var e=Object(l.a)(),t=e[0],a=e[1];return t?null:r.a.createElement("div",{className:d.a.wrapper},r.a.createElement("p",null,r.a.createElement(o.a,{id:"Cookie.consent.tekst"}),r.a.createElement(s.a,{to:"/cookie-policy"},r.a.createElement(o.a,{id:"Cookie.consent.link"}))),r.a.createElement("button",{className:d.a.acceptButton,type:"button",onClick:a},r.a.createElement(o.a,{id:"Cookie.consent.button"})))},p=a(171),f=a.n(p),E=function(){return r.a.createElement("div",{className:f.a.wrapper},r.a.createElement("div",null,r.a.createElement("p",null," ",r.a.createElement(o.a,{id:"Footer.all.sites.tekst"})),r.a.createElement("a",{href:"https://www.google.dk/maps/place/Bytes+%26+Brains/@55.66802,12.5920971,17z/data=!3m1!4b1!4m5!3m4!1s0x465252f6afb5318b:0x7e50a531f24c413a!8m2!3d55.668017!4d12.5942911"},r.a.createElement("p",null,r.a.createElement(o.a,{id:"Footer.all.sites.address"})))))},g=a(195),y=a.n(g),h=a(172),w=a.n(h),v=a(199),k=1,b=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],c=function(){return a(!t)};return r.a.createElement("div",null,r.a.createElement("div",{className:w.a.header},r.a.createElement(s.a,{className:w.a.logoPicture,to:"/"},r.a.createElement(y.a,{key:k++,className:w.a.logo})),r.a.createElement("div",{className:w.a.textHeader},r.a.createElement(s.a,{className:w.a.logoHeadline,to:"/"},r.a.createElement("span",null,"Bytes & Brains")),r.a.createElement("button",{className:w.a.burgerIcon,onClick:c},r.a.createElement(v.g,null)),r.a.createElement("h2",{className:t?w.a.sideLinks:w.a.responsiveSideLinks},r.a.createElement(s.a,{to:"/what-we-do",className:w.a.linksHeader,id:"whatWeDoLink",onClick:c},r.a.createElement(o.a,{id:"Header.whatwedo"})),r.a.createElement(s.a,{to:"/who-we-are",className:w.a.linksHeader,id:"whoweare",onClick:c},r.a.createElement(o.a,{id:"Header.whoweare"})),r.a.createElement(s.a,{to:"/contact",className:w.a.linksHeader,id:"contact",onClick:c},r.a.createElement(o.a,{id:"Header.contact"}))))))},N=a(173),C=a.n(N),q=(a(85),function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.app},r.a.createElement(b,null),t,r.a.createElement(E,null)),r.a.createElement(u,null))});q.propTypes={children:i.a.node.isRequired};t.a=q}}]);
//# sourceMappingURL=component---src-pages-contact-js-91f900922e2691121f08.js.map