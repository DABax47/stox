(this.webpackJsonpstox=this.webpackJsonpstox||[]).push([[0],{160:function(e,t,n){},161:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(49),c=n.n(o),i=(n(58),n(23)),l=n.n(i),u=n(50),s=n(5),m=(n(60),function(e){var t=e.handleFormSubmit,n=e.handleInputChange,a=e.input;return r.a.createElement("form",{onSubmit:function(e){t(e)}},r.a.createElement("span",null,r.a.createElement("input",{onChange:function(e){n(e.target)},type:"text",value:a,placeholder:"ibm"}),r.a.createElement("button",{type:"submit",name:"button"},"Search")))}),h=(n(61),function(e){var t=e.stockData;e.ticker,e.getnum;return r.a.createElement("ul",null,r.a.createElement("li",null,"open: ",t["1. open"]),r.a.createElement("li",null,"close: ",t["4. close"]),r.a.createElement("li",null,"high: ",t["2. high"]),r.a.createElement("li",null,"low: ",t["3. low"]),r.a.createElement("li",null,"volume: ",t["5. volume"]))}),p=n(51),f=(n(160),function(e){var t=e.chartData,n=e.ticker;return r.a.createElement("div",{className:"graph"},r.a.createElement(p.Bar,{data:t,options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:n.toUpperCase(),fontSize:45,fontFamily:"Helvetica",fontStyle:"normal"},legend:{display:!1,position:"right"}}}))}),d=(n(161),n(52)),E=n.n(d),w=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)("ibm"),i=Object(s.a)(c,2),p=i[0],d=i[1],w=Object(a.useState)([]),g=Object(s.a)(w,2),b=g[0],v=g[1],S=Object(a.useState)({}),O=Object(s.a)(S,2),k=O[0],j=O[1],y=Object(a.useState)({height:window.innerHeight,width:window.innerWidth}),D=Object(s.a)(y,2),I=D[0],x=D[1],C=r.a.createElement("h5",null," Refresh and enter a stock that exists!"),H=function(){var e=(new Date).getFullYear(),t=(new Date).getMonth()+1,n=(new Date).getDate()-1;return[e,(t>9?"":"0")+t,(n>9?"":"0")+n].join("-")};H(),console.log(H());var N=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("3OGIZIGNERYD9HS8",!p){e.next=5;break}return e.next=4,E()("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=".concat(p,"&outputsize=compact&apikey=").concat("3OGIZIGNERYD9HS8")).then((function(e){console.log(e);var t=e.data["Time Series (Daily)"][H()];v(t),j({labels:["Open","Close","High","Low"],datasets:[{data:[t["1. open"],t["4. close"],t["2. high"],t["3. low"]],backgroundColor:"rgba(196, 159, 108, .7)",hoverBackgroundColor:"#667697",pointBackgroundColor:"#555",pointStyle:"circle",hitRadius:"2"}]})})).catch((function(e){console.error(new Error("something went wrong"))}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){N()}),[p]),Object(a.useEffect)((function(){var e=function(){x({height:window.innerHeight,width:window.innerWidth})};return window.addEventListener("resize",e()),function(t){window.removeEventListener("resize",e)}}),[I]),r.a.createElement("div",{className:"component-div"},r.a.createElement("div",{className:"main-content"},r.a.createElement("h1",null," STOX "),r.a.createElement(m,{handleFormSubmit:function(e){e.preventDefault(),d(n)},handleInputChange:function(e){o(e.value)},input:n}),r.a.createElement("h3",null,H()),r.a.createElement(h,{stockData:b,ticker:p})),b?r.a.createElement(f,{className:"graph",chartData:k,ticker:p}):C)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))},53:function(e,t,n){e.exports=n(178)},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.bd34fdee.chunk.js.map