(this["webpackJsonpuni-nav"]=this["webpackJsonpuni-nav"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){e.exports=n(59)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./1.jpeg":42,"./10.jpeg":43,"./11.jpeg":44,"./12.jpeg":45,"./13.jpeg":46,"./14.jpeg":47,"./15.jpeg":48,"./16.jpeg":49,"./2.jpeg":50,"./3.jpeg":51,"./4.jpeg":52,"./5.jpeg":53,"./6.jpeg":54,"./7.jpeg":55,"./8.jpeg":56,"./9.jpeg":57};function l(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}l.keys=function(){return Object.keys(a)},l.resolve=o,e.exports=l,l.id=41},function(e,t,n){e.exports=n.p+"static/media/1.96ec2b94.jpeg"},function(e,t,n){e.exports=n.p+"static/media/10.6b4380c0.jpeg"},function(e,t,n){e.exports=n.p+"static/media/11.dbcbac2a.jpeg"},function(e,t,n){e.exports=n.p+"static/media/12.e7d23fc1.jpeg"},function(e,t,n){e.exports=n.p+"static/media/13.b931f7ba.jpeg"},function(e,t,n){e.exports=n.p+"static/media/14.12e78932.jpeg"},function(e,t,n){e.exports=n.p+"static/media/15.27576e59.jpeg"},function(e,t,n){e.exports=n.p+"static/media/16.4b890764.jpeg"},function(e,t,n){e.exports=n.p+"static/media/2.58d63d68.jpeg"},function(e,t,n){e.exports=n.p+"static/media/3.c5ae2445.jpeg"},function(e,t,n){e.exports=n.p+"static/media/4.cd01c6db.jpeg"},function(e,t,n){e.exports=n.p+"static/media/5.8b4c2110.jpeg"},function(e,t,n){e.exports=n.p+"static/media/6.7a7ebb66.jpeg"},function(e,t,n){e.exports=n.p+"static/media/7.de255860.jpeg"},function(e,t,n){e.exports=n.p+"static/media/8.465fcaf8.jpeg"},function(e,t,n){e.exports=n.p+"static/media/9.86198bc9.jpeg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(5),c=n.n(o),i=(n(27),n(21)),s=n(6),r=n(3),g=(n(28),function(e){var t=e.panTo,n={timeout:1/0,maximumAge:0,enableHighAccuracy:!0};return l.a.createElement("button",{className:"locate",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lng:e.coords.longitude}),console.log("your loction: ",e)}),(function(){console.log("your loction not found")}),n)}},l.a.createElement("img",{src:"https://www.flaticon.com/svg/static/icons/svg/744/744848.svg",alt:"compass-locate me"}))}),p=(n(29),n(17)),u=n(18),m=function(e){var t=l.a.createElement(p.a,{icon:u.a});return l.a.createElement("h4",{className:"mapTitle"},"Uni-Nav ",l.a.createElement("span",null,t))},d=n(12),f=n.n(d),b=n(19),y=(n(36),n(8)),h=(n(37),n(13)),j=function(e){var t=Object(h.a)({requestOptions:{location:{lat:function(){return 32.77005},lng:function(){return 35.008688}},radius:2e5}}),n=t.ready,a=t.value,o=t.suggestions,c=o.status,i=o.data,s=t.setValue;t.clearSuggestions;return l.a.createElement("div",{className:"search"},l.a.createElement(y.a,{onSelect:function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.b)({address:t});case 3:n=e.sent,console.log(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error");case 10:console.log(t);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},l.a.createElement(y.b,{value:a,onChange:function(e){s(e.target.value)},disabled:!n,placeholder:"Enter an address"}),l.a.createElement(y.d,null,"OK"===c&&i.map((function(e){var t=e.id,n=e.description;return l.a.createElement(y.c,{key:t,value:n})})))))},v=(n(38),function(e){function t(t,n){var a=t.latLng.lat(),l=t.latLng.lng();console.log("lat:",a," lng:",l),e.setSelectedRoute({lat:a,lng:l,route:n})}return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.d,{path:[{lat:32.7640483,lng:35.0166316},{lat:32.763692,lng:35.017082},{lat:32.763361,lng:35.016665},{lat:32.7620995,lng:35.0182302},{lat:32.7623612,lng:35.0200327},{lat:32.763234,lng:35.019025},{lat:32.7628534,lng:35.0185092}],onClick:function(e){t(e,"A"),console.log("roadA")},options:{strokeColor:"#ff00ff",strokeOpacity:0,strokeWeight:8,icons:[{icon:{path:"M 0,-1 0,1",strokeOpacity:1,scale:4},offset:"0",repeat:"20px"}]}}),l.a.createElement(r.d,{path:[{lat:32.762666,lng:35.016366},{lat:32.762135,lng:35.016931},{lat:32.761276,lng:35.018554},{lat:32.760545,lng:35.019495}],onClick:function(e){t(e,"B"),console.log("roadB")},options:{strokeColor:"#00ffff",strokeOpacity:.5,strokeWeight:14,icons:[{icon:"hello",offset:"0",repeat:"50px"}]}}),l.a.createElement(r.d,{path:[{lat:32.761987,lng:35.018321},{lat:32.761033,lng:35.019531},{lat:32.761059,lng:35.019671},{lat:32.760919,lng:35.019733},{lat:32.760482,lng:35.020131},{lat:32.760568,lng:35.020181},{lat:32.760706,lng:35.020186},{lat:32.760803,lng:35.020159},{lat:32.760971,lng:35.02017},{lat:32.761009,lng:35.020162},{lat:32.761205,lng:35.020409}],onClick:function(e){t(e,"C"),console.log("roadC")},options:{strokeColor:"#ffff00",strokeOpacity:1,strokeWeight:4,icons:[{icon:"hello",offset:"0",repeat:"10px"}]}}))}),E=(n(16),function(e){return l.a.createElement(l.a.Fragment,null,e.pois.map((function(t){return l.a.createElement(r.c,{key:t.id,position:{lat:t.location.lat,lng:t.location.lng},onClick:function(){e.setSelected(t)},icon:{url:"https://www.flaticon.com/svg/static/icons/svg/787/787535.svg",scaledSize:new window.google.maps.Size(30,30),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)}})})))}),w=function(e){return e.userLocation?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.c,{position:{lat:e.userLocation.lat,lng:e.userLocation.lng},icon:{url:"https://www.flaticon.com/svg/static/icons/svg/1831/1831908.svg",scaledSize:new window.google.maps.Size(30,30),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)}})):null},k=(n(39),function(e){return l.a.createElement(l.a.Fragment,null,e.selectedRoute?l.a.createElement(r.b,{position:{lat:e.selectedRoute.lat,lng:e.selectedRoute.lng},onCloseClick:function(){e.setSelectedRoute(null)}},l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("span",{role:"img","aria-label":"stars"},"\u2728"),e.selectedRoute.route," \u05de\u05e1\u05dc\u05d5\u05dc"),l.a.createElement("p",null,"\u05dc\u05d4 \u05dc\u05d4 \u05dc\u05d4",l.a.createElement("span",{role:"img","aria-label":"bear"},"\ud83c\udf49")),l.a.createElement("img",{src:"https://static.wixstatic.com/media/c8dca1_b0fb31fc412a4ab192045566f189550d~mv2.jpg",alt:"uni",width:"100px",height:"100px"}))):console.log("fail"))}),x=(n(40),function(e){return l.a.createElement(l.a.Fragment,null,e.selected?l.a.createElement(r.b,{position:{lat:e.selected.location.lat,lng:e.selected.location.lng},onCloseClick:function(){e.setSelected(null)}},l.a.createElement("div",{className:"infoPoi"},l.a.createElement("h2",null,l.a.createElement("span",{role:"img","aria-label":"bear"},"\ud83d\udc3b"),e.selected.desc),l.a.createElement("p",null,e.selected.desc),e.selected.img&&l.a.createElement("img",{src:n(41)("./"+e.selected.img+".jpeg"),alt:"uni",width:"100px",height:"100px"}))):console.log("fail"))}),O=[{id:"1",location:{lat:32.759852654767,lng:35.0223930358948},type:"area",name:"1",img:"1",desc:"\u05d1\u05de\u05ea \u05d9\u05e9\u05d9\u05d1\u05d4"},{id:"2",location:{lat:32.7599465689222,lng:35.0208494110026},type:"area",name:"2",img:"2",desc:"\u05d2\u05df \u05d4\u05d6\u05d9\u05db\u05e8\u05d5\u05df"},{id:"3",location:{lat:32.7592323767394,lng:35.0216806036188},type:"area",name:"3",img:"3",desc:"\u05d2\u05df \u05d4\u05e0\u05d3\u05d9\u05d1\u05d9\u05dd"},{id:"4",location:{lat:32.760306,lng:35.020382},type:"area",name:"4",img:"15",desc:"\u05d2\u05df \u05e4\u05e1\u05dc\u05d9\u05dd \u05e2\u05e9 \u05e4\u05e8\u05d5\u05e4 \u05d0\u05d1\u05e8\u05d4\u05dd \u05e9. \u05e7\u05de\u05e4\u05e3, \u05de\u05d9\u05d9\u05e1\u05d3 \u05d4\u05d7\u05d5\u05d2 \u05dc\u05d0\u05de\u05e0\u05d5\u05ea \u05d1\u05d0\u05d5\u05e0\u05d9\u05d1\u05e8\u05e1\u05d9\u05d8\u05ea \u05d7\u05d9\u05e4\u05d4."},{id:"5",location:{lat:32.7605835160928,lng:35.0218254101482},type:"area",name:"5",img:"4",desc:"\u05d3\u05e9\u05d0 \u05d1\u05e0\u05d9\u05df \u05e8\u05d1 \u05ea\u05db\u05dc\u05d9\u05ea\u05d9"},{id:"6",location:{lat:32.7586747310855,lng:35.0217654032939},type:"area",name:"6",img:"5",desc:"\u05d3\u05e9\u05d0 \u05de\u05d5\u05dc \u05d4\u05de\u05e2\u05d5\u05e0\u05d5\u05ea \u05d5\u05d4\u05d1\u05d9\u05d8\u05d7\u05d5\u05df"},{id:"7",location:{lat:32.7580447864327,lng:35.0237045947527},type:"tourist",name:"7",img:"6",desc:"\u05de\u05d1\u05e0\u05d4 \u05e2\u05ea\u05d9\u05e7, \u05d3\u05e8\u05da \u05d4\u05d3\u05d5\u05e8\u05d5\u05ea"},{id:"8",location:{lat:32.7594507060252,lng:35.0216799312722},type:"bench",name:"8",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"9",location:{lat:32.7594932413072,lng:35.0214790674772},type:"bench",name:"9",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"10",location:{lat:32.7594542657952,lng:35.0213091312899},type:"bench",name:"10",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"11",location:{lat:32.7596544758423,lng:35.0213667012038},type:"bench",name:"11",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"12",location:{lat:32.7594997102279,lng:35.0213560276607},type:"bench",name:"12",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"13",location:{lat:32.7594032817133,lng:35.0214552831551},type:"bench",name:"13",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"14",location:{lat:32.7593985241907,lng:35.0216430362428},type:"bench",name:"14",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"15",location:{lat:32.7594142760234,lng:35.0217842289783},type:"bench",name:"15",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"16",location:{lat:32.7593280071112,lng:35.0216754769756},type:"bench",name:"16",img:"",desc:"\u05e1\u05e4\u05e1\u05dc"},{id:"17",location:{lat:32.7603064,lng:35.0206637},type:"picnic-table",name:"17",img:"16",desc:"\u05e1\u05e4\u05e1\u05dc-\u05e9\u05d5\u05dc\u05d7\u05df"},{id:"18",location:{lat:32.760492170103,lng:35.0222804187132},type:"picnic-table",name:"18",img:"14",desc:"\u05e1\u05e4\u05e1\u05dc-\u05e9\u05d5\u05dc\u05d7\u05df"},{id:"19",location:{lat:32.7584172500081,lng:35.0217915407385},type:"statue",name:"19",img:"7",desc:"\u05d0\u05de\u05d0 \u05d0\u05d5\u05d4\u05d1\u05ea"},{id:"20",location:{lat:32.7591997275392,lng:35.0221845259047},type:"statue",name:"20",img:"8",desc:"\u05e4\u05e1\u05dc \u05d0\u05e0\u05d2\u05f3\u05dc\u05d4 \u05e7\u05dc\u05d9\u05d9\u05df \u05dc\u05dc\u05d0 \u05db\u05d5\u05ea\u05e8\u05ea2013"},{id:"21",location:{lat:32.7596161969653,lng:35.0209926221255},type:"statue",name:"21",img:"9",desc:"\u05e4\u05e1\u05dc \u05d2\u05d3\u05e2\u05d5\u05df \u05d2\u05db\u05d8\u05de\u05df \u05de\u05e1\u05ea\u05dd 198 "},{id:"22",location:{lat:32.7589039896424,lng:35.0218407900494},type:"statue",name:"22",img:"10",desc:"\u05e4\u05e1\u05dc \u05d9\u05e2\u05e7\u05d1 \u05d3\u05d5\u05e8\u05e6\u05d9\u05df \u05db\u05e0\u05e3 2013"},{id:"23",location:{lat:32.7599114081362,lng:35.0224348891075},type:"statue",name:"23",img:"11",desc:"\u05e4\u05e1\u05dc \u05e2\u05e5 \u05d4\u05db\u05e1\u05e3"},{id:"24",location:{lat:32.7601157794675,lng:35.0220610669045},type:"statue",name:"24",img:"12",desc:"\u05e4\u05e1\u05dc \u05e8\u05d5\u05d9\u05ea \u05de\u05e9\u05dc\u05d9 \u05e4\u05dc\u05d8\u05e4\u05d5\u05e8\u05de\u05d4 \u05dc\u05d3\u05e8\u05d0\u05d2 \u05e7\u05d5\u05d5\u05d9\u05df \u05de\u05d6\u05e8\u05d7\u05d9"},{id:"25",location:{lat:32.7593874652566,lng:35.0220849350983},type:"statue",name:"25",img:"13",desc:"\u05e4\u05e1\u05dc \u05e9\u05dc\u05d9 \u05e8\u05d9\u05d9\u05db\u05de\u05df \u05de\u05d2\u05d1\u05d5\u05ea 2014"}];var C=[{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#bfead5"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}];n(58);var T=function(){var e=Object(a.useState)(O),t=Object(s.a)(e,2),n=t[0],o=(t[1],Object(a.useState)([])),c=Object(s.a)(o,2),p=c[0],u=c[1],d=Object(a.useState)(null),f=Object(s.a)(d,2),b=f[0],y=f[1],h=Object(a.useState)(null),T=Object(s.a)(h,2),S=T[0],L=T[1],R=Object(a.useState)(null),A=Object(s.a)(R,2),N=A[0],z=A[1],I={styles:C,disableDefaultUI:!0,zoomControl:!0},P=Object(r.e)({googleMapsApiKey:"AIzaSyAb5I39P1GekwpMaU0BEYI75p04ZaoXIbo",region:"IL",language:"iw",libraries:["places"]}),F=P.isLoaded,B=P.loadError,M=Object(a.useCallback)((function(e){u((function(t){return[].concat(Object(i.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])})),console.log(e)}),[]),U=Object(a.useRef)(),W=Object(a.useCallback)((function(e){U.current=e}),[]),D=Object(a.useCallback)((function(e){var t=e.lat,n=e.lng;y({lat:t,lng:n}),U.current.panTo({lat:t,lng:n}),U.current.setZoom(19)}),[]);return B?"Error loading maps":F?l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement(j,null),l.a.createElement(g,{panTo:D,options:I}),l.a.createElement(r.a,{mapContainerStyle:{width:"100vw",height:"100vh"},zoom:17,center:{lat:32.760803,lng:35.020159},options:I,onClick:M,onLoad:W},l.a.createElement(v,{setSelectedRoute:z}),l.a.createElement(E,{markers:p,setSelected:L,pois:n}),l.a.createElement(x,{selected:S,setSelected:L}),l.a.createElement(k,{selectedRoute:N,setSelectedRoute:z}),l.a.createElement(w,{userLocation:b}))):"Loading maps"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.4bac57ef.chunk.js.map