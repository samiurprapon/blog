(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{100:function(e,t,n){},104:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},134:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(65),i=n.n(a),r=(n(90),n(20)),o=n(21),l=n(23),j=n(22),d=n(32),b=n(12),h=n(151),u=n(41),m={githubConvertedToken:"Z2hwX2hjNUxHY2ROMnZOYVFJMFFPazhHM3NFbHkxTmpTcDIyWVFlMw==",githubUserName:"samiurprapon",githubRepo:"blog",title:"Samiur Prapon's Blog",subtitle:"Software Enthusiast"},x=new u.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(atob(m.githubConvertedToken))}})}}),O=s.a.createContext(),p=O.Provider,f=(O.Consumer,O),v=n(70),g=n.n(v),k=(n(99),n(28)),y=(n(100),n(0)),N=function(){var e=Object(c.useState)(!1),t=Object(k.a)(e,2),n=t[0],s=t[1],a=Object(c.useContext)(f);return Object(y.jsxs)("label",{className:"switch",children:[Object(y.jsx)("input",{type:"checkbox",checked:n,onChange:function(){a.changeTheme(),s(!n)}}),Object(y.jsx)("span",{className:"slider round"})]})};var D=function(){var e=Object(c.useContext)(f).isDark;return Object(y.jsx)(g.a,{children:Object(y.jsxs)("header",{className:e?"dark-menu header":"header",children:[Object(y.jsxs)("a",{href:"https://samiurprapon.github.io",className:e?"dark-menu logo":"logo",children:[Object(y.jsx)("span",{className:"grey-color",children:" <"}),Object(y.jsx)("span",{className:"logo-name",children:"SamiurPrapon"}),Object(y.jsx)("span",{className:"grey-color",children:"/>"})]}),Object(y.jsx)("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),Object(y.jsx)("label",{className:"menu-icon",htmlFor:"menu-btn",style:{color:"white"},children:Object(y.jsx)("span",{className:e?"navicon navicon-dark":"navicon"})}),Object(y.jsxs)("ul",{className:e?"dark-menu menu":"menu",children:[Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"/blog/",children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)(d.b,{to:"/philosophy",children:"Philosophy"})}),Object(y.jsx)("li",{children:Object(y.jsx)(d.b,{to:"/learning",children:"Programmings"})}),Object(y.jsx)("li",{children:Object(y.jsx)(d.b,{to:"/projects",children:"Projects"})}),Object(y.jsx)("li",{children:Object(y.jsx)(d.b,{to:"/tools",children:"Tools"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{children:Object(y.jsx)(N,{})})})]})]})})},w=(n(104),n(37)),T=n(62),M=n.n(T);function S(){var e=Object(c.useContext)(f).isDark;return Object(y.jsx)(w.Fade,{bottom:!0,duration:1e3,distance:"5px",children:Object(y.jsx)("div",{className:"footer-div",children:Object(y.jsx)("p",{className:e?"dark-mode footer-text":"footer-text",children:M()("Made with \u2764\ufe0f by Samiur Prapon")})})})}n(121);function C(){function e(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("topButton").style.visibility="visible":document.getElementById("topButton").style.visibility="hidden"}return window.onscroll=function(){e()},window.onload=function(){e()},Object(y.jsx)("button",{onClick:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},id:"topButton",title:"Go to top",children:Object(y.jsx)("i",{className:"fas fa-hand-point-up","aria-hidden":"true"})})}n(122),n(123),n(124);var E,B=n(6),P=n(64),R=n(152),F=n(8);function z(e){var t=e.fill;return Object(y.jsx)("svg",{width:"80",height:"80",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:t,children:Object(y.jsx)("g",{fill:"none","fill-rule":"evenodd",children:Object(y.jsxs)("g",{transform:"translate(1 1)","stroke-width":"2",children:[Object(y.jsx)("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),Object(y.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(y.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})})}var A,U,H,L,I,Y,J,W,V=F.a.span(E||(E=Object(B.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"]))),q=function(){return Object(y.jsx)(V,{children:Object(y.jsx)(z,{fill:"#551A8B"})})},G=F.a.div(A||(A=Object(B.a)(["\n  width: 90%;\n  padding: 20px 10px;\n"]))),Z=n(47),_=n.n(Z),X=F.a.div(U||(U=Object(B.a)(["\n  cursor: pointer;\n  margin-bottom: 2rem;\n  border-radius: 10px;\n  padding-top: 10px;\n  padding-bottom: 2rem;\n  padding-right: 30px;\n  padding-left: 20px;\n  transition: 0.2s;\n  position: relative;\n\n  :hover {\n    background-color: ","; //E4E6EB, 00DEAF, 551A8B\n  }\n"])),(function(e){return"light"!==e.theme.mode?"#DEDEE1E5":"#00DEAF"})),K=F.a.div(H||(H=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),Q=F.a.div(L||(L=Object(B.a)(["\n  display: inline-block;\n  background: #009bbb;\n  border-radius: 4px;\n  padding: 3px 15px;\n  font-size: 14px;\n  // text-transform: uppercase;\n  font-weight: 300;\n  line-height: 28px;\n  margin-right: 10px;\n"]))),$=function(e){var t=e.value;return Object(y.jsx)(Q,{style:{backgroundColor:"#".concat(t.color)},children:t.name},t.id)},ee=F.a.p(I||(I=Object(B.a)(["\n  color: #b5b5b5;\n  font-size: 16px;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n"]))),te=function(e){var t=e.time;return Object(y.jsxs)(ee,{children:[t," Min Read"]})},ne=F.a.h2(Y||(Y=Object(B.a)(["\n  font-size: 30px;\n"]))),ce=F.a.p(J||(J=Object(B.a)(['\n  font-size: 18px;\n  font-family: BalooDa2, "BalooDa2", sans-serif;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n']))),se=function(e){var t=e.blog,n=Object(c.useState)([]),s=Object(k.a)(n,2),a=s[0],i=s[1],r=Object(b.f)();return Object(c.useEffect)((function(){var e=t.labels.nodes.filter((function(e){return"blog"!==e.name}));i(e)}),[t.labels.nodes]),Object(y.jsxs)(X,{children:[Object(y.jsxs)(K,{children:[Object(y.jsx)(y.Fragment,{children:a.map((function(e,t){return Object(y.jsx)($,{value:e},t)}))}),Object(y.jsx)(te,{time:_()(t.body).minutes})]}),Object(y.jsxs)("div",{onClick:function(){return e=t.title,n=t.number,void r.push("/".concat(e,"/").concat(n));var e,n},children:[Object(y.jsx)(ne,{children:t.title}),Object(y.jsx)(ce,{children:t.bodyText})]})]})},ae=function(e){var t,n=Object(c.useState)([]),s=Object(k.a)(n,2),a=s[0],i=s[1],r=Object(R.a)((null==(t=e.label)&&(t="blog"),Object(P.a)(W||(W=Object(B.a)(['\n{\n  repository(owner: "','", name: "','") {\n    issues(first: 100, filterBy: { labels: "','" }, orderBy: { direction: DESC, field: CREATED_AT }) {\n      nodes {\n        title\n        body\n        bodyHTML\n        bodyText\n        number\n        labels(first: 100) {\n          nodes {\n            color\n            name\n            id\n          }\n        }\n        author {\n          url\n          avatarUrl\n          login\n        }\n        updatedAt\n        id\n      }\n    }\n  }\n}\n'])),m.githubUserName,m.githubRepo,t))),o=r.loading,l=r.error,j=r.data;return Object(c.useEffect)((function(){var e,t;o||(l&&console.error(l),j&&i(null===j||void 0===j||null===(e=j.repository)||void 0===e||null===(t=e.issues)||void 0===t?void 0:t.nodes))}),[o,l,j]),Object(y.jsx)("div",{children:Object(y.jsx)(G,{children:o?Object(y.jsx)(q,{}):a.map((function(e,t){return Object(y.jsx)(se,{blog:e},t)}))})})};n(126);function ie(){return Object(y.jsx)("div",{className:"centerContent",children:Object(y.jsxs)("div",{className:"sk-circle",children:[Object(y.jsx)("div",{className:"sk-circle1 sk-child"}),Object(y.jsx)("div",{className:"sk-circle2 sk-child"}),Object(y.jsx)("div",{className:"sk-circle3 sk-child"}),Object(y.jsx)("div",{className:"sk-circle4 sk-child"}),Object(y.jsx)("div",{className:"sk-circle5 sk-child"}),Object(y.jsx)("div",{className:"sk-circle6 sk-child"}),Object(y.jsx)("div",{className:"sk-circle7 sk-child"}),Object(y.jsx)("div",{className:"sk-circle8 sk-child"}),Object(y.jsx)("div",{className:"sk-circle9 sk-child"}),Object(y.jsx)("div",{className:"sk-circle10 sk-child"}),Object(y.jsx)("div",{className:"sk-circle11 sk-child"}),Object(y.jsx)("div",{className:"sk-circle12 sk-child"})]})})}var re=Object(c.lazy)((function(){return n.e(237).then(n.bind(null,423))}));function oe(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){s({name:"Samiur Prapon",bio:"\u2666\ufe0f World is Diamond Shaped.",avatarUrl:"https://avatars.githubusercontent.com/u/25266703",location:"Bangladesh"})}),[]),Object(y.jsx)(c.Suspense,{fallback:Object(y.jsx)(ie,{}),children:Object(y.jsx)(re,{prof:n})})}n(127);function le(e){return Object(y.jsx)(w.Fade,{bottom:!0,duration:1e3,distance:"20px",children:Object(y.jsx)("div",{className:"main",children:Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("h1",{className:"prof-title",children:e.title})})})})}n(128);function je(e){e.prof;return Object(y.jsx)(w.Fade,{bottom:!0,duration:900,distance:"25px",children:Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)("div",{className:"blogList",children:[Object(y.jsx)("div",{className:"blogImg",children:Object(y.jsx)("img",{className:"image",src:"https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",alt:""})}),Object(y.jsxs)("div",{className:"blog-body",children:[Object(y.jsx)("div",{className:"category",children:"Philosophy"}),Object(y.jsx)("div",{className:"reading-time",children:"3 min"}),Object(y.jsx)("h4",{align:"left",className:"title",children:"World is Diamond Shaped"}),Object(y.jsx)("p",{className:"blog-time",children:"June 7, 2017"})]})]})})})}var de,be,he,ue,me,xe,Oe,pe,fe=function(e){return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("section",{className:"blog-posts",children:Object(y.jsx)("div",{children:Object(y.jsx)(ae,{label:e.label})})}),Object(y.jsxs)("section",{className:"sidebar",children:[Object(y.jsxs)("div",{className:"items",children:[Object(y.jsx)(le,{title:e.title}),Object(y.jsx)(je,{}),Object(y.jsx)(je,{}),Object(y.jsx)(je,{}),Object(y.jsx)("br",{})]}),Object(y.jsx)("div",{className:"items",children:Object(y.jsx)(oe,{})})]})]})},ve=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).changeTheme=function(){c.setState({isDark:!c.state.isDark})},c.state={isDark:!1,posts:[]},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(prefers-color-scheme: dark)");this.setState({isDark:e.matches})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:this.state.isDark?"dark-mode":null,children:Object(y.jsx)(p,{value:{isDark:this.state.isDark,changeTheme:this.changeTheme},children:Object(y.jsx)(fe,{title:"Most readed articles"})})})}}]),n}(c.Component),ge=(n(129),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).changeTheme=function(){c.setState({isDark:!c.state.isDark})},c.state={isDark:!1},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(prefers-color-scheme: dark)");this.setState({isDark:e.matches})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:this.state.isDark?"dark-mode":null,children:Object(y.jsx)(p,{value:{isDark:this.state.isDark,changeTheme:this.changeTheme},children:Object(y.jsx)(fe,{title:"Related Post",label:"philosophy"})})})}}]),n}(c.Component)),ke=(n(130),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).changeTheme=function(){c.setState({isDark:!c.state.isDark})},c.state={isDark:!1},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(prefers-color-scheme: dark)");this.setState({isDark:e.matches})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:this.state.isDark?"dark-mode":null,children:Object(y.jsx)(p,{value:{isDark:this.state.isDark,changeTheme:this.changeTheme},children:Object(y.jsx)(fe,{title:"Related Post",label:"programming"})})})}}]),n}(c.Component)),ye=(n(131),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).changeTheme=function(){c.setState({isDark:!c.state.isDark})},c.state={isDark:!1},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(prefers-color-scheme: dark)");this.setState({isDark:e.matches})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:this.state.isDark?"dark-mode":null,children:Object(y.jsx)(p,{value:{isDark:this.state.isDark,changeTheme:this.changeTheme},children:Object(y.jsx)(fe,{title:"Related Post",label:"project"})})})}}]),n}(c.Component)),Ne=(n(132),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).changeTheme=function(){c.setState({isDark:!c.state.isDark})},c.state={isDark:!1},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(prefers-color-scheme: dark)");this.setState({isDark:e.matches})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:this.state.isDark?"dark-mode":null,children:Object(y.jsx)(p,{value:{isDark:this.state.isDark,changeTheme:this.changeTheme},children:Object(y.jsx)(fe,{title:"Related Post",label:"tools"})})})}}]),n}(c.Component)),De=n(74),we=n.n(De),Te=n(75),Me=(n(134),n(83),n(153)),Se=n(150),Ce=function(e){var t=e.children;return Object(y.jsx)(Me.a,{language:"javascript",style:Se.a,children:t.props.children})},Ee=F.a.div(de||(de=Object(B.a)(["\n  padding-top: 0px;\n  padding-right: 10px;\n  padding-bottom: 20px;\n  padding-left:4%;\n"]))),Be=F.a.h1(be||(be=Object(B.a)(["\n  font-size: 32px;\n  line-height: normal;\n"]))),Pe=F.a.p(he||(he=Object(B.a)(["\n  color: ",";\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n"])),(function(e){return e.theme.toggleBorder})),Re=F.a.a(ue||(ue=Object(B.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  transition-duration: 0.15s, 0.15s, 0.15s;\n  transition-timing-function: ease-in, ease-in, ease-in;\n  transition-delay: 0s, 0s, 0s;\n  color: ",";\n\n  :hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.text})),Fe=F.a.img(me||(me=Object(B.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n  margin: 10px;\n  margin-left: 0px;\n"]))),ze=F.a.p(xe||(xe=Object(B.a)(["\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 16px;\n  color: ",";\n"])),(function(e){return e.theme.text})),Ae=F.a.div(Oe||(Oe=Object(B.a)(["\n  display: flex;\n  align-items: center;\n"])));function Ue(){var e=parseInt(window.location.href.split("/").pop()),t=Object(P.a)(pe||(pe=Object(B.a)(['{\n    repository(owner: "','", name: "','") {\n      issue(number: ',") {\n        title\n        body\n        bodyHTML\n        url\n        bodyText\n        number\n        bodyHTML\n        author {\n          url\n          avatarUrl\n          login\n        }\n        reactions(first:100){\n          nodes{\n            content\n            user{\n              id\n              login\n            }\n          }\n        }\n        updatedAt\n        id\n        comments(first:100) {\n          nodes {\n            author {\n              ... on User {\n                avatarUrl\n                name\n                login\n              }\n            }\n            body\n            bodyHTML\n            bodyText\n            publishedAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n  "])),m.githubUserName,m.githubRepo,e),n=Object(c.useState)([]),s=Object(k.a)(n,2),a=s[0],i=s[1],r=Object(R.a)(t),o=r.loading,l=r.error,j=r.data;return Object(c.useEffect)((function(){if(!o&&j){var e=j.repository.issue;i(e)}}),[o,l,j]),o?Object(y.jsx)(q,{}):Object(y.jsxs)("div",{className:"center",children:[Object(y.jsx)("section",{className:"post",children:a.title&&Object(y.jsxs)(Ee,{children:[Object(y.jsx)(Be,{children:a.title}),Object(y.jsx)("div",{children:Object(y.jsxs)(Ae,{children:[Object(y.jsx)(Fe,{src:a.author.avatarUrl,alt:a.author.login}),Object(y.jsxs)("div",{children:[Object(y.jsx)(ze,{children:a.author.login}),Object(y.jsxs)(Pe,{children:[we()(a.updatedAt).format("DD MMM YYYY")," .",_()(a.body).minutes," Min Read .",Object(y.jsx)(Re,{href:a.url,target:"_black",children:"View On Github"})]})]})]})}),Object(y.jsx)("div",{className:"article",children:Object(y.jsx)(Te.a,{options:{overrides:{pre:{component:Ce},slugify:function(e){return e},disableParsingRawHTML:!0,wrapper:"aside",forceWrapper:!0}},children:a.body})})]})}),Object(y.jsxs)("section",{className:"sidebar",children:[Object(y.jsxs)("div",{className:"items",children:[Object(y.jsx)(le,{title:"Related Post"}),Object(y.jsx)(je,{}),Object(y.jsx)(je,{}),Object(y.jsx)(je,{}),Object(y.jsx)("br",{})]}),Object(y.jsx)("div",{className:"items",children:Object(y.jsx)(oe,{})})]})]})}var He=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).changeTheme=function(){c.setState({isDark:!c.state.isDark})},c.state={isDark:!1},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=window.matchMedia("(prefers-color-scheme: dark)");this.setState({isDark:e.matches})}},{key:"render",value:function(){return Object(y.jsx)("div",{className:this.state.isDark?"dark-mode":null,children:Object(y.jsx)(p,{value:{isDark:this.state.isDark,changeTheme:this.changeTheme},children:Object(y.jsxs)(h.a,{client:x,children:[Object(y.jsxs)(d.a,{children:[Object(y.jsx)(D,{}),Object(y.jsxs)(b.c,{children:[Object(y.jsx)(b.a,{exact:!0,path:"/",component:ve}),Object(y.jsx)(b.a,{exact:!0,path:"/philosophy",component:ge}),Object(y.jsx)(b.a,{exact:!0,path:"/learning",component:ke}),Object(y.jsx)(b.a,{exact:!0,path:"/projects",component:ye}),Object(y.jsx)(b.a,{exact:!0,path:"/tools",component:Ne}),Object(y.jsx)(b.a,{exact:!0,path:"/:title/:issueNumber",component:Ue})]})]}),Object(y.jsx)(S,{}),Object(y.jsx)(C,{})]})})})}}]),n}(c.Component);i.a.render(Object(y.jsx)(He,{}),document.getElementById("root"))},90:function(e,t,n){},99:function(e,t,n){}},[[144,234,235]]]);
//# sourceMappingURL=main.a2cc8484.chunk.js.map