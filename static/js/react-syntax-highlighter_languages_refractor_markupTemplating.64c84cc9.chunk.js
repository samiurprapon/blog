(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[126],{154:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=i.length;-1!==t.code.indexOf(o=n(a,c));)++c;return i[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(c){for(var s=0;s<c.length&&!(o>=r.length);s++){var u=c[s];if("string"===typeof u||u.content&&"string"===typeof u.content){var p=r[o],g=t.tokenStack[p],l="string"===typeof u?u:u.content,f=n(a,p),k=l.indexOf(f);if(k>-1){++o;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),d=l.substring(k+f.length),y=[];h&&y.push.apply(y,i([h])),y.push(m),d&&y.push.apply(y,i([d])),"string"===typeof u?c.splice.apply(c,[s,1].concat(y)):u.content=y}}else u.content&&i(u.content)}return c}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.64c84cc9.chunk.js.map