(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{21:function(e,c,t){},22:function(e,c,t){},31:function(e,c,t){},32:function(e,c,t){},34:function(e,c,t){},51:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){},54:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(11),a=t.n(i),r=(t(21),t(22),t(12)),l=t(13),o=t(16),j=t(15),d=t(14),b=t.n(d),h=(t(31),t(5)),u=n.a.createContext(),m=u.Provider,O=(u.Consumer,u),x=(t(32),t(0)),k=function(){var e=Object(s.useState)(!1),c=Object(h.a)(e,2),t=c[0],n=c[1],i=Object(s.useContext)(O);return Object(x.jsxs)("label",{className:"switch",children:[Object(x.jsx)("input",{type:"checkbox",checked:t,onChange:function(){i.changeTheme(),n(!t)}}),Object(x.jsx)("span",{className:"slider round"})]})};var f=function(){var e=Object(s.useContext)(O).isDark;return Object(x.jsx)(b.a,{children:Object(x.jsxs)("header",{className:e?"dark-menu header":"header",children:[Object(x.jsxs)("a",{href:"http://samiurprapon.github.io",className:e?"dark-menu logo":"logo",children:[Object(x.jsx)("span",{className:"grey-color",children:" <"}),Object(x.jsx)("span",{className:"logo-name",children:"SamiurPrapon"}),Object(x.jsx)("span",{className:"grey-color",children:"/>"})]}),Object(x.jsx)("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),Object(x.jsx)("label",{className:"menu-icon",htmlFor:"menu-btn",style:{color:"white"},children:Object(x.jsx)("span",{className:e?"navicon navicon-dark":"navicon"})}),Object(x.jsxs)("ul",{className:e?"dark-menu menu":"menu",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/blog",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#philosophy",children:"Philosophy"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#learning",children:"Programmings"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#projects",children:"Projects"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#tools",children:"Tools"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{children:Object(x.jsx)(k,{})})})]})]})})},p=(t(34),t(8)),v=t(10),N=t.n(v);function g(){var e=Object(s.useContext)(O).isDark;return Object(x.jsx)(p.Fade,{bottom:!0,duration:1e3,distance:"5px",children:Object(x.jsx)("div",{className:"footer-div",children:Object(x.jsx)("p",{className:e?"dark-mode footer-text":"footer-text",children:N()("Made with \u2764\ufe0f by Samiur Prapon")})})})}t(51);function y(){return Object(x.jsx)("div",{className:"centerContent",children:Object(x.jsxs)("div",{className:"sk-circle",children:[Object(x.jsx)("div",{className:"sk-circle1 sk-child"}),Object(x.jsx)("div",{className:"sk-circle2 sk-child"}),Object(x.jsx)("div",{className:"sk-circle3 sk-child"}),Object(x.jsx)("div",{className:"sk-circle4 sk-child"}),Object(x.jsx)("div",{className:"sk-circle5 sk-child"}),Object(x.jsx)("div",{className:"sk-circle6 sk-child"}),Object(x.jsx)("div",{className:"sk-circle7 sk-child"}),Object(x.jsx)("div",{className:"sk-circle8 sk-child"}),Object(x.jsx)("div",{className:"sk-circle9 sk-child"}),Object(x.jsx)("div",{className:"sk-circle10 sk-child"}),Object(x.jsx)("div",{className:"sk-circle11 sk-child"}),Object(x.jsx)("div",{className:"sk-circle12 sk-child"})]})})}var w=Object(s.lazy)((function(){return t.e(3).then(t.bind(null,57))}));function D(){var e=Object(s.useState)([]),c=Object(h.a)(e,2),t=c[0],n=c[1];return Object(s.useEffect)((function(){n({name:"Samiur Prapon",bio:"\u2666\ufe0f World is Diamond Shaped.",avatarUrl:"https://avatars.githubusercontent.com/u/25266703",location:"Bangladesh"})}),[]),Object(x.jsx)(s.Suspense,{fallback:Object(x.jsx)(y,{}),children:Object(x.jsx)(w,{prof:t},t.id)})}t(52);function C(){function e(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("topButton").style.visibility="visible":document.getElementById("topButton").style.visibility="hidden"}return window.onscroll=function(){e()},window.onload=function(){e()},Object(x.jsx)("button",{onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},id:"topButton",title:"Go to top",children:Object(x.jsx)("i",{className:"fas fa-hand-point-up","aria-hidden":"true"})})}t(53);var S=function(e){Object(o.a)(t,e);var c=Object(j.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=c.call(this,e)).changeTheme=function(){s.setState({isDark:!s.state.isDark})},s.state={isDark:!1},s}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(prefers-color-scheme: dark)");this.setState({isDark:e.matches})}},{key:"render",value:function(){return Object(x.jsx)("div",{className:this.state.isDark?"dark-mode":null,children:Object(x.jsxs)(m,{value:{isDark:this.state.isDark,changeTheme:this.changeTheme},children:[Object(x.jsx)(f,{}),Object(x.jsx)(D,{}),Object(x.jsx)(g,{}),Object(x.jsx)(C,{})]})})}}]),t}(s.Component);var T=function(){return Object(x.jsx)(S,{})};a.a.render(Object(x.jsx)(T,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.07c1d877.chunk.js.map