(this["webpackJsonphooks-basic"]=this["webpackJsonphooks-basic"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),o=n(10),r=n.n(o),s=(n(17),n(7)),a=n.n(s),l=n(11),u=n(2);n(19);function d(){for(var e=Array(3),t=0;t<e.length;t++){for(var n=new Array(3),i=0;i<n.length;i++)n[i]=null;e[t]=n}return e}var h=n(0);function j(e){return"X"===e||"O"===e}function b(e){var t=function(){var e=Object(i.useState)(d),t=Object(u.a)(e,2),n=t[0],c=t[1];return[n,function(e,t,i){for(var o=new Array(3),r=new Array(3),s=0;s<r.length;s++)r[s]=s!==e?n[t][s]:i;for(var a=0;a<o.length;a++)o[a]=a!==t?n[a]:r;c(o)},function(){c(d())}]}(),n=Object(u.a)(t,3),c=n[0],o=n[1],r=n[2],s=Object(i.useState)("X"),a=Object(u.a)(s,2),l=a[0],b=a[1],f=Object(i.useState)("nobody"),O=Object(u.a)(f,2),v=O[0],x=O[1],m=null;return j(l)&&(m=function(e,t){for(var n=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,4,2],[6,7,8]],i=!0,c=!0,o=0,r=0;r<9;r++)null===p(e,r)&&o++;o>=2&&(c=!1);for(var s=0;s<n.length;s++){for(var a={X:0,O:0,empty:0},l=p(e,n[s][0]),u=0;u<3;u++){var d=p(e,n[s][u]);null===d?a.empty++:"X"===d?a.X++:a.O++}if(3===a.X||3===a.O)return l;c&&"X"===t?a.O--:c&&"O"===t&&a.X--,a.X+a.empty!==3&&a.O+a.empty!==3||(i=!1)}return i?"tie":null}(c,l)),null!==m&&"nobody"===v&&x(m),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"game-info",children:"nobody"===v?Object(h.jsxs)("p",{children:[l,"'s turn"]}):"tie"===v?Object(h.jsx)("p",{children:"Tie!"}):Object(h.jsxs)("p",{children:["Winner: ",v]})}),Object(h.jsxs)("div",{className:"game-board",children:[c.map((function(e,t,n){return Object(h.jsx)("div",{className:"board-row",children:n[t].map((function(e,n){if(j(l))return Object(h.jsx)("button",{onClick:function(){o(n,t,l),b("X"===l?"O":"X")},disabled:"nobody"!==v||null!=c[t][n],children:e},Math.floor(t/3)+n%3);throw Error("Invalid player ".concat(l))}))},t)})),Object(h.jsx)("button",{onClick:function(){x("nobody"),r(),b("X")},children:"reset"})]})]})}function p(e,t){return e[Math.floor(t/3)][t%3]}function f(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:Object(h.jsx)("button",{className:"link",onClick:e.enabler,children:"Tic-Tac-Toe"})}),Object(h.jsxs)("p",{children:["This is based on this ",Object(h.jsx)("a",{href:"https://reactjs.org/tutorial/tutorial.html",children:"React tutorial"}),", but it uses hooks and function components instead of the class-based approach. The stying is a slight modification of the css presented in that tutorial."]})]})}function O(e){return e.active?Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(b,{})}),Object(h.jsx)("footer",{children:Object(h.jsx)("button",{className:"small-link",onClick:e.disable,children:"description"})})]}):Object(h.jsx)(f,{enabler:e.enable})}function v(e){return Object(h.jsx)("button",{className:"link",onClick:e.func,children:"Changelog"})}function x(e){if(e.active){var t=new Array,n=new Array,i=new Array;return t.push(n),t.push(i),n.push("Created this page for the portfolio and added my name, email, and the repository this page is being hosted from to it."),n.push("Created the tic-tac-toe game and added it to this page (see the game above for the description.)"),n.push("Added the changelog and the todo list to this page."),n.push("Added a button to hide all open apps to this page."),n.push("Added interface to show or hide react components to view different projects."),n.push("Updated tic-tac-toe game to tie when the game can no longer be won."),i.push("Added checkers board that the pieces can move in (The project is still a work in progress."),i.push("Added the cookie module with a button to add a cookie to the browser and a button to detect if the cookie has been issued."),Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{className:"large-bold",children:["Week ",t+1]}),Object(h.jsx)("ul",{children:e.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("p",{children:e})},t)}))})]})}))}),Object(h.jsx)("footer",{children:Object(h.jsx)("button",{className:"small-link",onClick:e.disable,children:"collapse"})})]})}return Object(h.jsx)("div",{children:Object(h.jsx)(v,{func:e.enable})})}function m(e){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"link",onClick:e.enabler,children:"Todo"})})}function g(e){if(e.active){var t=new Array,n=new Array,i=new Array;return t.push(n),t.push(i),n.push("Add a singleplayer mode with a basic AI to tic-tac-toe."),n.push("Add a game of checkers to the portfolio."),n.push("Add a cookie generator that puts a non-functional cookie in your browser."),i.push("Finish Checkers game"),i.push("Create a bootstrap-styled page"),Object(h.jsxs)("section",{children:[Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{className:"large-bold",children:["Week ",t+2]}),Object(h.jsx)("ul",{children:e.map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsx)("p",{children:e})},t)}))})]})}))}),Object(h.jsx)("footer",{children:Object(h.jsx)("button",{className:"small-link",onClick:e.disable,children:"collapse"})})]})}return Object(h.jsx)("div",{children:Object(h.jsx)(m,{enabler:e.enable})})}var k=n(9),w=n(12);n(21);function y(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:Object(h.jsx)("button",{className:"link",onClick:e.enabler,children:"Checkers (WIP)"})}),Object(h.jsx)("p",{children:"This is a work-in-progress checkers game. It is not directly based on any tutorial. Currently, the pieces can only move to an empty, diagonally-adjacent square. Click on a piece to see where it can move, and click on a highlighted square to move. Click on a piece that was previously selected to deselect it."})]})}var A=n(3);function C(e){var t=e.moves.length>0;return Object(h.jsx)("button",{className:e.square.highlighted?"square highlighted":"black"===e.square.color?"square dark":"square",onClick:function(){if(t){var n,i=Object(A.a)(e.moves);try{for(i.s();!(n=i.n()).done;){var c=n.value;c.destination.position.row===e.square.position.row&&c.destination.position.col===e.square.position.col&&(e.movePiece(c),e.setFirstMove(!1),null!==c.deletes&&e.selectSquare(c.destination))}}catch(o){i.e(o)}finally{i.f()}}else e.selectSquare(e.square),e.selectPiece(e.square.piece)},disabled:t?!e.square.highlighted:!(null!==e.square.piece&&(e.redsTurn&&"red"===e.square.piece.color||!e.redsTurn&&"black"===e.square.piece.color)),children:e.child})}function N(e,t,n){var i=[{row:e.position.row-1,col:e.position.col-1},{row:e.position.row-1,col:e.position.col+1}],c=[{row:e.position.row+1,col:e.position.col-1},{row:e.position.row+1,col:e.position.col+1}],o=i.concat(c),r=new Array;if(void 0===n&&null===e.piece)throw Error("No piece to get targets of!");void 0===n&&(n=e.piece);var s=new Array;r=n.king?o:"red"===n.color?i:c;var a,l=Object(A.a)(r);try{for(l.s();!(a=l.n()).done;){var u=a.value;u.row>=0&&u.row<=7&&u.col>=0&&u.col<=7&&s.push(t[u.row][u.col])}}catch(d){l.e(d)}finally{l.f()}return s}function q(e,t,n){return null==e||null===e.piece?[]:N(e,t,n).filter((function(e){return null===e.piece}))}function S(e){var t,n,c,o=function(){var e=Object(i.useState)((function(){for(var e=new Array(8),t=0;t<8;t++){for(var n=new Array(8),i=0;i<8;i++){var c=t%2!==i%2?"black":"white",o="red";if(t<3){o="black";var r="black"===c?{color:o,king:!1}:null;n[i]={position:{row:t,col:i},piece:r,color:c,highlighted:!1}}else if(t>4){var s="black"===c?{color:o,king:!1}:null;n[i]={position:{row:t,col:i},piece:s,color:c,highlighted:!1}}else n[i]={position:{row:t,col:i},piece:null,color:c,highlighted:!1}}e[t]=n}return e})),t=Object(u.a)(e,2),n=t[0],c=t[1];return[n,function(e,t){var i=(new Array).concat(n);if(null!==t.destination.piece)throw Error("Tried to move to an occupied space!");if(null!==e){i[t.destination.position.row][t.destination.position.col].piece=e.piece,i[e.position.row][e.position.col].piece=null,null!==t.deletes&&(i[t.deletes.position.row][t.deletes.position.col].piece=null);var o,r=Object(A.a)(i);try{for(r.s();!(o=r.n()).done;){var s,a=o.value,l=Object(A.a)(a);try{for(l.s();!(s=l.n()).done;)s.value.highlighted=!1}catch(u){l.e(u)}finally{l.f()}}}catch(u){r.e(u)}finally{r.f()}c(i)}},function(e,t){var i,o=(new Array).concat(n),r=Object(A.a)(e);try{for(r.s();!(i=r.n()).done;){var s=i.value;o[s.position.row][s.position.col].highlighted=t}}catch(a){r.e(a)}finally{r.f()}c(o)}]}(),r=Object(u.a)(o,3),s=r[0],a=r[1],l=r[2],d=Object(i.useState)(null),j=Object(u.a)(d,2),b=j[0],p=j[1],f=Object(i.useState)(!0),O=Object(u.a)(f,2),v=O[0],x=O[1],m=Object(i.useState)(!0),g=Object(u.a)(m,2),k=g[0],w=g[1],y=Object(i.useState)(null),S=Object(u.a)(y,2),T=(S[0],S[1]),X=new Array;if(null!==b){k&&(X=X.concat(q(b,s).map((function(e){return{destination:e,deletes:null}}))));var F,M=(t=b,n=s,c=b.piece,null===t||null===t.piece?[]:N(t,n,c).filter((function(e){return null!==e.piece&&e.piece.color!==t.piece.color}))),I=Object(A.a)(M);try{var P=function(){var e=F.value;X=X.concat(q(e,s,b.piece).map((function(t){return{destination:t,deletes:e}})))};for(I.s();!(F=I.n()).done;)P()}catch(Y){I.e(Y)}finally{I.f()}if(0===X.length){x(!v),w(!0),p(null),T(null);for(var E=new Array(64),W=0;W<64;W++)E[W]=s[Math.floor(W/8)][W%8];l(E,!1)}else{var H,J=Object(A.a)(X);try{for(J.s();!(H=J.n()).done;){var L=H.value;s[L.destination.position.row][L.destination.position.col].highlighted||l([L.destination],!0)}}catch(Y){J.e(Y)}finally{J.f()}}}return Object(h.jsx)("div",{className:"container",children:s.map((function(e,t){return Object(h.jsx)("div",{className:"board-row",children:e.map((function(e,n){var i={square:s[t][n],redsTurn:v,moves:X,selectSquare:p,movePiece:function(e){a(b,e)},firstMove:k,setFirstMove:w,selectPiece:T,child:Object(h.jsx)(h.Fragment,{})};return null!==e.piece&&"black"===e.piece.color?(i.child=Object(h.jsx)("span",{className:"dot"}),C(i)):null!==e.piece&&"red"===e.piece.color?(i.child=Object(h.jsx)("span",{className:"dot red"}),C(i)):C(i)}))})}))})}function T(e){return e.active?Object(h.jsxs)("section",{children:[Object(h.jsx)(S,{}),Object(h.jsx)("footer",{children:Object(h.jsx)("button",{className:"link",onClick:e.disable,children:"description"})})]}):Object(h.jsx)(y,{enabler:e.enable})}var X=function(){var e=Object(i.useState)((function(){return new Array})),t=Object(u.a)(e,2),n=t[0],c=t[1];function o(e){c(n.concat([e]))}function r(e){var t=n.indexOf(e);-1!==t&&c(n.slice(0,t).concat(n.slice(t+1,n.length)))}function s(){return(s=Object(l.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(new k.a).set("test","this is a test");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{children:[Object(h.jsxs)("div",{children:["Hi! my name is Lucas Driscoll (email ",Object(h.jsx)("a",{href:"mailto:lucasd@udel.edu",children:"lucasd@udel.edu"}),"), and this is the first page of my CISC 275-010 portfolio! this page is hosted on github pages using ",Object(h.jsx)("a",{href:"https://github.com/Lukerd-29-00/Portfolio",children:"this repository"}),"."]}),Object(h.jsx)("hr",{}),Object(h.jsx)(O,{disable:function(){r(O)},enable:function(){o(O)},active:n.includes(O)}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:"Click this button to get a cookie! (This was created using the example in the readme of the universal-cookie github repository.)"}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{id:"cookie",onClick:function(){return s.apply(this,arguments)}})}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{children:Object(h.jsx)(w.a,{onClick:function(){(new k.a).get("test")?alert("You have a cookie!"):alert("You are cookieless!")},children:"see if cookie is present"})}),Object(h.jsx)("hr",{}),Object(h.jsx)(T,{disable:function(){r(T)},enable:function(){o(T)},active:n.includes(T)}),Object(h.jsx)("hr",{}),Object(h.jsxs)("footer",{children:[Object(h.jsx)(x,{disable:function(){r(x)},enable:function(){o(x)},active:n.includes(x)}),n.includes(x)||n.includes(g)?Object(h.jsx)("hr",{}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)(g,{disable:function(){r(g)},enable:function(){o(g)},active:n.includes(g)}),n.includes(g)?Object(h.jsx)("hr",{}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("button",{className:"link",onClick:function(){c(new Array)},children:"Hide all"})]})]})})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.419a1b73.chunk.js.map