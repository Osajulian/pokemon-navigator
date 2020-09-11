(this["webpackJsonppokemon-navigator"]=this["webpackJsonppokemon-navigator"]||[]).push([[0],{21:function(e,t,n){e.exports=n(50)},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),o=n.n(c),s=(n(26),n(27),n(3)),i=n.n(s),l=n(2),u=n(7),m=n(4),p=(n(29),{name:"start",classes:"start",useOnce:!0}),f={name:"finish",classes:"finish",useOnce:!0},d={name:"rock",classes:"rock",useOnce:!1},v=[p,f,{name:"grass",classes:"grass",useOnce:!1},d],y=function(e){var t=e.onClick,n=e.tile,a=null,c=v.find((function(e){return e.name===n.type}));c&&(a=c.classes);var o=r.a.useCallback((function(){t(n)}),[t,n]);return r.a.createElement("div",{className:"tile",onClick:o},r.a.createElement("span",{className:["type",a].join(" ")}),n.paths&&r.a.createElement("span",{className:["nav-path","path-"+n.paths.join("")].join(" ")}))},b=(n(30),function(e){var t=e.tiles,n=e.onTileClick,a={width:33*e.gridSize+"px"};return r.a.createElement("div",{className:"grid"},r.a.createElement("div",{className:"tiles",style:a},t.map((function(e,t){return r.a.createElement(y,{onClick:n,key:"tile-".concat(t),tile:e})}))))}),h=(n(31),function(e){var t=e.onClose,n=e.children,a={display:e.isOpen?"block":"none"};return r.a.createElement("div",{style:a},r.a.createElement("div",{className:"modal-bg"}),r.a.createElement("div",{className:"modal-wrapper"},r.a.createElement("span",{className:"modal-close",onClick:t},"X"),r.a.createElement("div",{className:"modal-item"},n)))}),E=n(6),g=(n(32),function(e){var t=e.onSubmit,n=e.types,c=e.selected,o=Object(a.useState)({type:c}),s=Object(m.a)(o,2),i=s[0],l=s[1],u=r.a.useCallback((function(e){e.preventDefault(),t(e,i)}),[t,i]),p=r.a.useCallback((function(e){l(Object(E.a)({},e.target.name,e.target.value))}),[]);return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"select-type"},n.map((function(e){return r.a.createElement("div",{key:"selectType-"+e.name,className:"form-control"},r.a.createElement("input",{id:"selectType-"+e.name,type:"radio",name:"type",value:e.name,onChange:p,checked:i.type===e.name}),r.a.createElement("label",{htmlFor:"selectType-"+e.name},r.a.createElement("span",{className:"type "+e.classes})))}))),r.a.createElement("button",{type:"submit"},"Confirm"))}),k=n(20),O=n.n(k),j={x:0,y:0},C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,c,o,s,l,u,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.sideLength,a=void 0===n?4:n,r=t.impassables,c=void 0===r?[]:r,o=t.startingLoc,s=void 0===o?j:o,l=t.endingLoc,u=void 0===l?j:l,e.prev=1,e.next=4,O.a.post("https://frozen-reef-96768.herokuapp.com/find-path",{sideLength:a,impassables:c,startingLoc:s,endingLoc:u});case 4:return m=e.sent,e.abrupt("return",m.data);case 8:e.prev=8,e.t0=e.catch(1),console.log("error on getPath",e.t0),alert("Unable to retrieve the path");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),w=n(9),x=function(e,t){return{y:e/t<<0,x:e%t,tileId:e}},N=function(e,t,n){var a=Object(w.a)(e);a.forEach((function(e){return e.paths=void 0}));for(var r=0;r<t.moves.length;r++){var c=t.moves[r],o=t.moves.length>r+1,s=o&&t.moves[r+1];"R"===c&&n.x++,"D"===c&&n.y++,"L"===c&&n.x--,"U"===c&&n.y--;var i=e.findIndex((function(e){return e.x===n.x&&e.y===n.y})),l=[c];s&&c!==s&&l.push(s),o&&(a[i].paths=l)}return a},S=["select",4,5,6,7,8],L=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),s=Object(m.a)(o,2),y=s[0],E=s[1],k=Object(a.useState)(null),O=Object(m.a)(k,2),j=O[0],L=O[1],T=r.a.useCallback((function(e){L(e)}),[]),I=r.a.useCallback((function(e,t){if(t.type){var a=function(e,t,n){var a=Object(w.a)(e),r=a.indexOf(t),c=Object(l.a)({},t);c.type=n.type;var o=v.find((function(e){return e.name===n.type}));if(n.type===o.name&&o.useOnce){var s=a.findIndex((function(e){return e.type===o.name}));if(s>=0){var i=Object(l.a)({},a[s]);i.type=void 0,a[s]=i}}return a[r]=c,a}(n,j,t);L(null),c(a)}else alert("Please select a type")}),[n,j]),z=r.a.useCallback((function(e){E(e.target.value)}),[]),D=n.find((function(e){return e.type===p.name})),P=n.find((function(e){return e.type===f.name})),A=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.type===d.name})),e.next=3,C({sideLength:y,impassables:t,startingLoc:D,endingLoc:P});case 3:a=e.sent,r=Object(l.a)({},D),o=N(n,a,r),c(o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=function(e){var t=[];return Object(w.a)(Array(Math.pow(e,2)).keys()).forEach((function(n,a){t[a]=Object(l.a)(Object(l.a)({},x(a,e)),{},{number:n})})),t}(y);c(e)}),[y]);var B=D&&P,J=j&&r.a.createElement(h,{onClose:function(){return L(null)},isOpen:!0},r.a.createElement("h3",null,"Select your type"),r.a.createElement(g,{types:v,selected:j?j.type:null,onSubmit:I}));return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},J,r.a.createElement(b,{gridSize:y,tiles:n,onTileClick:T}),r.a.createElement("select",{onChange:z,value:y},S.map((function(e){return r.a.createElement("option",{key:e},e)}))),r.a.createElement("button",{className:"button-primary",type:"button",disabled:!B,onClick:A},"Calculate"),r.a.createElement("button",{type:"button",disabled:!B,onClick:function(){return E(0)}},"Reset"))};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h3",{style:{wrap:"nowrap"}},"Pokemon Navigator"),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.cd8a4e74.chunk.js.map