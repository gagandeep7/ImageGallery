(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{29:function(e,t,a){e.exports=a(55)},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a.n(n),c=a(0),i=a.n(c),s=a(13),o=a.n(s),l=a(23),u=a(5),m=a(6),p=a(8),h=a(7),d=a(9),f=a(58),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onAppsubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e,t=this;return i.a.createElement("div",{className:"ui segment ",style:{border:"0px",backgroundColor:"transparent",color:"white"}},i.a.createElement("form",{onSubmit:this.onFormSubmit},i.a.createElement("label",{htmlFor:"text"}," Search "),i.a.createElement(f.a,(e={id:"text",type:"text",mt:"0px",placeholder:"Search Here",value:this.state.term},Object(d.a)(e,"mt","2px"),Object(d.a)(e,"border","soild 1px gray "),Object(d.a)(e,"height"," 20px"),Object(d.a)(e,"onChange",(function(e){return t.setState({term:e.target.value})})),e))))}}]),a}(i.a.Component),g=a(28),v=a.n(g).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID KBN7JCsfdXH3Y9VFDCnab5aNPN24IcY2aGchAp-NCxs"}}),y=(a(54),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).SetSpan=function(){var e=n.ImageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({span:t})},n.state={span:0},n.ImageRef=i.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.ImageRef.current.addEventListener("load",this.SetSpan)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return i.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.span)}},i.a.createElement("img",{ref:this.ImageRef,alt:t,src:a.small}))}}]),a}(i.a.Component)),E=function(e){var t=e.images.map((function(e){return i.a.createElement(y,{image:e,key:e.id})}));return i.a.createElement("div",{className:"image-list"},t)},S=function(e){return i.a.createElement("div",{class:"ui active dimmer"},i.a.createElement("div",{class:"ui big text loader"},e.message," "))};S.defaultProps={message:"Loading .... "};var j=S,O=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],isload:!0,isclicked:!1},e.onSearchSubmit=function(){var t=Object(l.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({isclicked:!0,isload:!0}),v.get("/search/photos",{params:{query:a,orientation:"landscape",per_page:20,page:1}}).then((function(t){return e.setState({images:t.data.results,isload:!1,isclicked:!1})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return this.state.isclicked&&this.state.isload?i.a.createElement(j,{style:{backgroundColor:"#302F4D"}}):i.a.createElement("div",{style:{backgroundColor:"#0D1317",height:"100vh",overflow:"auto"}},i.a.createElement("div",{class:"ui menu",style:{backgroundColor:"#302F4D"}},i.a.createElement("div",{class:"header item primary",style:{color:"white"}},"Image Gallery")),i.a.createElement("div",{className:"ui container",style:{marginTop:"30px",border:"none"}},i.a.createElement("h1",null,i.a.createElement(b,{onAppsubmit:this.onSearchSubmit})),i.a.createElement(E,{images:this.state.images})))}}]),a}(i.a.Component);r.a.render(i.a.createElement(O,null),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.1b5ea1ae.chunk.js.map