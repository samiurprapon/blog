(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[204],{166:function(t,e,a){"use strict";function n(t){!function(t){function e(t,e,a){return{pattern:RegExp("<#"+t+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+t+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:e,alias:a}}}}t.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(a){var n=t.languages[a],i="language-"+a;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:e("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:e("=",n,i),"class-feature":e("\\+",n,i),standard:e("",n,i)}}}}})}(t)}t.exports=n,n.displayName="t4Templating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Templating.7ad5c2dd.chunk.js.map