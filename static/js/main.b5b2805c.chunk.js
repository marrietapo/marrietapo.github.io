(this["webpackJsonpmarrietapo.web"]=this["webpackJsonpmarrietapo.web"]||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),c=t(15),i=t.n(c),r=(t(22),t(23),t(7)),o=t(0),l=n.a.createContext(),j=function(e){var a=Object(s.useState)("light"),t=Object(r.a)(a,2),n=t[0],c=t[1];return Object(o.jsx)(l.Provider,{value:{theme:n,themes:{light:{foreground:"rgba(33, 33, 33, 1)",color:"rgba(33, 33, 33, 1)",background:"rgba(242, 242, 242, 0.9)"},dark:{foreground:"rgba(240, 240, 240, 1)",color:"rgba(240, 240, 240, 1)",background:"rgba(33, 33, 33, 0.9)"}},setTheme:c},children:e.children})},d=n.a.createContext("espa\xf1ol"),b=function(e){var a=Object(s.useState)("espa\xf1ol"),t=Object(r.a)(a,2),n=t[0],c=t[1];return Object(o.jsx)(d.Provider,{value:{language:n,setLanguage:c},children:e.children})},u=t(16),h=t(2);t(25);function m(e){var a=e.toggled,t=e.onClick,s=n.a.useContext(l),c=s.theme,i=s.setTheme;return Object(o.jsx)("div",{onClick:function(){i("dark"===c?"light":"dark")},className:"header_theme_switch",children:Object(o.jsxs)("div",{onClick:t,className:"toggle".concat(a?" night":""),children:[Object(o.jsxs)("div",{className:"notch",children:[Object(o.jsx)("div",{className:"crater"}),Object(o.jsx)("div",{className:"crater"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"shape sm"}),Object(o.jsx)("div",{className:"shape sm"}),Object(o.jsx)("div",{className:"shape md"}),Object(o.jsx)("div",{className:"shape lg"})]})]})})}var p=function(){var e=n.a.useContext(d),a=e.language,t=e.setLanguage;return Object(o.jsx)("div",{className:"header_lang_options pointer",onClick:function(){t("english"===a?"espa\xf1ol":"english")},children:a})},x=n.a.createContext(!1),f=function(e){var a=Object(s.useState)(!1),t=Object(r.a)(a,2),n=t[0],c=t[1];return Object(o.jsx)(x.Provider,{value:{spotify:n,setSpotify:c},children:e.children})},O=function(){var e=n.a.useContext(x),a=e.spotify,t=e.setSpotify,s=function(){t(!a)};return a?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"header_spot_options pointer",onClick:s,children:Object(o.jsx)("div",{className:"media_icon_spot",children:Object(o.jsx)("i",{className:"fas fa-headphones-alt fa-item orange",onClick:function(){}})})})}):Object(o.jsx)("div",{className:"header_spot_options pointer",onClick:s,children:Object(o.jsx)("div",{className:"media_icon_spot",children:Object(o.jsx)("i",{className:"fas fa-headphones-alt fa-item",onClick:function(){}})})})},g=function(){var e=n.a.useState(!1),a=Object(r.a)(e,2),t=a[0],s=a[1];return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(p,{}),Object(o.jsx)(O,{}),Object(o.jsx)(m,{toggled:t,onClick:function(){s((function(e){return!e}))}})]})},v=function(){return Object(o.jsxs)("div",{className:"body_title",children:["  marrietapo",Object(o.jsx)("span",{className:"body_title_point",children:"."}),"github",Object(o.jsx)("span",{className:"body_title_point",children:"."}),"io"]})},y=function(){return"english"===n.a.useContext(d).language?Object(o.jsxs)("div",{className:"body_paragraph",children:[Object(o.jsxs)("p",{className:"body_paragraph_p",children:[Object(o.jsx)("i",{className:"fas fa-terminal fa-0.5x"})," Es un gusto verte por aqu\xed! Aprovecho la visita para contarte que estoy viviendo en Montevideo - UY, me gusta viajar, tomar caf\xe9 y escuchar m\xfasica. Adem\xe1s, procuro pagar mis cuentas desarrollando software, solo o con amigos, en proyectos propios o ajenos, pero siempre con intensidad y la premisa de aprender y explorar en el proceso."]}),Object(o.jsxs)("p",{children:["Si te interesa, dejo a disposici\xf3n mi",Object(o.jsx)("a",{className:"link",href:"#",children:Object(o.jsxs)("span",{className:"body_paragraph_span",children:[" ","curr\xedculum"]})}),". Algunas veces puede no estar actualizado pero procuro reunir all\xed la informaci\xf3n de relevancia sobre mi formaci\xf3n y perfil profesional."]}),Object(o.jsx)("p",{children:"Finalmente, si lo deseas, puedes husmear y contactarme en las redes sociales que se encuentran disponibles sobre el margen izquierdo de este sitio."})]}):Object(o.jsxs)("div",{className:"body_paragraph",children:[Object(o.jsxs)("p",{className:"body_paragraph_p",children:[Object(o.jsx)("i",{className:"fas fa-terminal fa-0.5x"})," It's a pleasure to see you here. My name is Mauro, and I am a software developer living in Montevideo - UY. I have a passion for creating functional software solutions, and I find joy in using technology to solve complex problems. As a software developer, I have the privilege of working in a field that I love while also being able to pay my bills. It's a win-win situation!"]}),Object(o.jsxs)("p",{children:["If you're interested about my background and experience, please feel free to check out my",Object(o.jsx)("a",{className:"link",href:"#",children:Object(o.jsxs)("span",{className:"body_paragraph_span",children:[" ","resume"]})}),", which I have made available for you to review. Thank you for taking the time to get to know me a little better!"]}),Object(o.jsx)("p",{children:"Finally, if you wish, you can snoop around and contact me on the social networks that are available on the left margin of this site."})]})},N=function(e){var a=e.item;return Object(o.jsxs)("div",{className:"media_icon",children:[Object(o.jsx)("i",{className:a.icon,onClick:function(){return window.open(a.link)}}),Object(o.jsx)("span",{className:"overlay",children:a.text})]})},k=function(){return Object(o.jsx)("div",{className:"social_media_icons",children:[{icon:"fab fa-github-alt fa-2x vibrate-1",text:"GitHub",link:"https://github.com/marrietapo"},{icon:"fab fa-linkedin-in fa-2x vibrate-4",text:"LinkedIn",link:"https://www.linkedin.com/in/marrietapo"},{icon:"fab fa-instagram fa-2x vibrate-3",text:"Instagram",link:"https://www.instagram.com/marrietapo/"},{icon:"fab fa-spotify fa-2x vibrate-2",text:"Spotify",link:"https://open.spotify.com/user/m.arrieta?si=NjpO7ir9T4GKnnC5cux4Pw"},{icon:"fa fa-hashtag fa-2x vibrate-5",text:"Blog",link:"#"}].map((function(e,a){return Object(o.jsx)(N,{item:e},a)}))})},w=function(){return Object(o.jsx)("aside",{className:"navbar",children:Object(o.jsx)(k,{})})},_=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(w,{}),Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)(v,{}),Object(o.jsx)(y,{})]})]})},C=function(){return Object(o.jsx)("div",{className:"footer"})},I=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("iframe",{className:"spotify_embed",style:{borderRadius:"12px"},src:"https://open.spotify.com/embed/album/0wDBZgpdgvEVLBKkavlwDc?utm_source=generator",width:"100%",height:"100%",frameBorder:0,allowFullScreen:!0,allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})})},S=function(){var e=n.a.useContext(l),a=e.theme,t=e.themes,s=n.a.useContext(x).spotify;return"dark"===a?Object(o.jsxs)("div",{className:"main",style:{color:t.dark.color,backgroundColor:t.dark.background},children:[Object(o.jsx)(g,{}),Object(o.jsx)(_,{}),Object(o.jsx)(C,{}),"&&",s?Object(o.jsx)(I,{}):Object(o.jsx)(o.Fragment,{})]}):Object(o.jsxs)("div",{className:"main",style:{color:t.light.color,backgroundColor:t.light.background},children:[Object(o.jsx)(g,{}),Object(o.jsx)(_,{}),Object(o.jsx)(C,{}),"&&",s?Object(o.jsx)(I,{}):Object(o.jsx)(o.Fragment,{})]})},F=function(){return Object(o.jsx)(u.a,{children:Object(o.jsx)("div",{className:"",children:Object(o.jsxs)(h.d,{children:[Object(o.jsx)(h.b,{path:"/",component:S,exact:!0}),Object(o.jsx)(h.a,{to:"/"})]})})})};var A=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j,{children:Object(o.jsx)(b,{children:Object(o.jsx)(f,{children:Object(o.jsx)(F,{})})})})})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b5b2805c.chunk.js.map