(this["webpackJsonpmarrietapo.web"]=this["webpackJsonpmarrietapo.web"]||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),r=t(15),c=t.n(r),i=(t(22),t(23),t(8)),o=t(0),l=n.a.createContext(),d=function(e){var a=Object(s.useState)("dark"),t=Object(i.a)(a,2),n=t[0],r=t[1];return Object(o.jsx)(l.Provider,{value:{theme:n,themes:{light:{foreground:"rgba(33, 33, 33, 1)",color:"rgba(33, 33, 33, 1)",background:"rgba(242, 242, 242, 0.9)"},dark:{foreground:"rgba(240, 240, 240, 1)",color:"rgba(240, 240, 240, 1)",background:"rgba(33, 33, 33, 0.9)"}},setTheme:r},children:e.children})},j=n.a.createContext("english"),u=function(e){var a=Object(s.useState)("english"),t=Object(i.a)(a,2),n=t[0],r=t[1];return Object(o.jsx)(j.Provider,{value:{language:n,setLanguage:r},children:e.children})},b=t(16),m=t(2);t(25);function h(e){var a=e.toggled,t=e.onClick,s=n.a.useContext(l),r=s.theme,c=s.setTheme;return Object(o.jsx)("div",{onClick:function(){c("dark"===r?"light":"dark")},className:"header_theme_switch",children:Object(o.jsxs)("div",{onClick:t,className:"toggle".concat(a?" night":""),children:[Object(o.jsxs)("div",{className:"notch",children:[Object(o.jsx)("div",{className:"crater"}),Object(o.jsx)("div",{className:"crater"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"shape sm"}),Object(o.jsx)("div",{className:"shape sm"}),Object(o.jsx)("div",{className:"shape md"}),Object(o.jsx)("div",{className:"shape lg"})]})]})})}var p=function(){var e=n.a.useContext(j),a=e.language,t=e.setLanguage;return Object(o.jsx)("div",{className:"header_lang_options pointer",onClick:function(){t("english"===a?"espa\xf1ol":"english")},children:a})},x=function(){var e=n.a.useState(!1),a=Object(i.a)(e,2),t=a[0],s=a[1];return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(p,{}),Object(o.jsx)(h,{toggled:t,onClick:function(){s((function(e){return!e}))}})]})},O=function(){return Object(o.jsxs)("div",{className:"body_title",children:["  marrietapo",Object(o.jsx)("span",{className:"body_title_point",children:"."}),"dev"]})},g=function(){var e=n.a.useContext(j).language;return Object(o.jsxs)("div",{className:"body_paragraph",children:[Object(o.jsxs)("p",{className:"body_paragraph_p",children:[Object(o.jsx)("i",{className:"fas fa-terminal fa-0.5x"}),"espa\xf1ol"===e?" It's nice to see you here! I take this opportunity to tell you that I try to pay my bills developing software, alone or with friends, on my own or someone else's projects, but always with intensity and the premise of learning and discovering in the process.":" Es un gusto verte por aqu\xed! Aprovecho la visita para contarte que actualmente estoy viviendo en Montevideo - UY, me gusta viajar, tomar caf\xe9 y escuchar m\xfasica. Adem\xe1s, procuro pagar mis cuentas desarrollando software, solo o con amigos, en proyectos propios o ajenos, pero siempre con intensidad y la premisa de aprender y explorar en el proceso."]}),Object(o.jsxs)("p",{children:["espa\xf1ol"===e?"If you are interested, I leave my":"Si te interesa, dejo a disposici\xf3n mi",Object(o.jsx)("a",{className:"link",href:"#",children:Object(o.jsxs)("span",{className:"body_paragraph_span",children:[" ","espa\xf1ol"===e?"resume":"curr\xedculum"]})}),"espa\xf1ol"===e?" available, although sometimes it may not be up to date, I try to gather relevant information about my training and professional profile there.":". Algunas veces puede no estar actualizado pero procuro reunir all\xed la informaci\xf3n de relevancia sobre mi formaci\xf3n y perfil profesional."]}),Object(o.jsx)("p",{children:"espa\xf1ol"===e?"Finally, if you wish, you can snoop and contact me on the social networks that are available on this site.":"Finalmente, si lo deseas, puedes husmear y contactarme en las redes sociales que se encuentran disponibles sobre el margen izquierdo de este sitio."})]})},f=function(e){var a=e.item;return Object(o.jsxs)("div",{className:"media_icon",children:[Object(o.jsx)("i",{className:a.icon,onClick:function(){return window.open(a.link)}}),Object(o.jsx)("span",{className:"overlay",children:a.text})]})},v=function(){return Object(o.jsx)("div",{className:"social_media_icons",children:[{icon:"fab fa-github-alt fa-2x",text:"GitHub",link:"https://github.com/marrietapo"},{icon:"fab fa-linkedin-in fa-2x",text:"LinkedIn",link:"https://www.linkedin.com/in/marrietapo"},{icon:"fab fa-instagram fa-2x",text:"Instagram",link:"https://www.instagram.com/marrietapo/"},{icon:"fab fa-spotify fa-2x",text:"Spotify",link:"https://open.spotify.com/user/m.arrieta?si=NjpO7ir9T4GKnnC5cux4Pw"}].map((function(e,a){return Object(o.jsx)(f,{item:e},a)}))})},y=function(){return Object(o.jsx)("aside",{className:"navbar",children:Object(o.jsx)(v,{})})},k=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)(O,{}),Object(o.jsx)(g,{})]})]})},N=function(){return Object(o.jsx)("div",{className:"footer"})},w=function(){var e=n.a.useContext(l),a=e.theme,t=e.themes;return"dark"===a?Object(o.jsxs)("div",{className:"main",style:{color:t.dark.color,backgroundColor:t.dark.background},children:[Object(o.jsx)(x,{}),Object(o.jsx)(k,{}),Object(o.jsx)(N,{})]}):Object(o.jsxs)("div",{className:"main",style:{color:t.light.color,backgroundColor:t.light.background},children:[Object(o.jsx)(x,{}),Object(o.jsx)(k,{}),Object(o.jsx)(N,{})]})},C=function(){return Object(o.jsx)(b.a,{children:Object(o.jsx)("div",{className:"",children:Object(o.jsxs)(m.d,{children:[Object(o.jsx)(m.b,{path:"/",component:w,exact:!0}),Object(o.jsx)(m.a,{to:"/"})]})})})};var _=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d,{children:Object(o.jsx)(u,{children:Object(o.jsx)(C,{})})})})};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(_,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c97bba68.chunk.js.map