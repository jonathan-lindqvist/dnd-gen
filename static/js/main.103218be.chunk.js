(this["webpackJsonpdnd-gen"]=this["webpackJsonpdnd-gen"]||[]).push([[0],{233:function(e,t,a){e.exports=a(414)},238:function(e,t,a){},245:function(e,t){},247:function(e,t){},289:function(e,t){},290:function(e,t){},414:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(218),o=a.n(i),s=a(154),l=a(62),c=(a(238),a(83)),h=a(33),u=a(34),m=a(36),d=a(35),p=a(29),f=a(37),g=function(e){return Math.floor(Math.random()*Math.floor(e+1))},b=["You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.","You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You\u2019re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.","You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.","You are haunted by something so terrible that you dare not speak of it. You\u2019ve tried to bury it and run away from it, to no avail. Whatever this thing is that haunts you can\u2019t be slain with a sword or banished with a spell. It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, or a demonic whisper in the dark. The burden has taken its toll, isolating you from most people and making you question your sanity. You must find a way to overcome it before it destroys you.","You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.","War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield."],y=["Lollidra","Legogriffin Alelf","Grintroll","Agaffin Alexandrager","Griphine Pickergriffin","Harmraham Evilbinson","Moraspell Grangrobinson","Barabba Robertsett","Faye Walsh","Jenna Turner","Adam Blaese","Aaliyah Mendoza","Joshua Castillo","Isobel O'Quinn"],v=["human","orc","duck","elf","dwarf"],C=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},E=function(e,t){var a=Object.entries(e),n=0;return a.map((function(e){return e[1]&&(n+=1),e})),!(n>t)},O=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name;this.props.onChange(a,t.value)}},{key:"render",value:function(){return r.a.createElement("label",null,this.props.name.toUpperCase(),":",r.a.createElement("input",{type:"number",name:this.props.name,value:this.props.value,onChange:this.handleChange}))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name;this.props.onChange(a,t.value)}},{key:"render",value:function(){return r.a.createElement("label",null,this.props.text,":",r.a.createElement("input",{name:this.props.name,type:"text",value:this.props.value,onChange:this.handleChange}))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name;this.props.onChange(a,t.value)}},{key:"listOptions",value:function(e){return e.map((function(e){return r.a.createElement("option",{key:e,value:e},C(e))}))}},{key:"render",value:function(){return r.a.createElement("label",null,this.props.text,":",r.a.createElement("select",{name:this.props.name,value:this.props.value,onChange:this.handleChange},this.listOptions(this.props.options)))}}]),t}(r.a.Component),w=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name;this.props.onChange(a,t.value)}},{key:"render",value:function(){return r.a.createElement("label",null,this.props.text,":",r.a.createElement("textarea",{name:this.props.name,type:"text",value:this.props.value,onChange:this.handleChange}))}}]),t}(r.a.Component),S=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={name:"",race:"",str:0,dex:0,con:0,int:0,wis:0,cha:0,background:"",redirect:!1},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),Object.entries(this.state).map((function(e){if(0===e[1]||""===e[1])if(0===e[1]){var a=Object(c.a)({},e[0],g(20));t.setState(a)}else"name"===e[0]&&""===e[1]?t.setState(Object(c.a)({},e[0],function(){var e=g(y.length-1);return y[e]}())):"background"===e[0]&&""===e[1]?t.setState(Object(c.a)({},e[0],function(){var e=g(b.length-1);return b[e]}())):"race"===e[0]&&""===e[1]&&t.setState(Object(c.a)({},e[0],function(){var e=g(v.length-1);return v[e]}()));return e})),this.setState({redirect:!0})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(l.a,{to:{pathname:"/pdf",state:this.state}}):r.a.createElement("div",{className:"flex-center column align-items-center"},r.a.createElement("p",{className:"tip"},"(Leaving stuff blank will generate it for you)"),r.a.createElement("form",{className:"flex-center column",onSubmit:this.handleSubmit},r.a.createElement(j,{text:"Character name",name:"name",value:this.state.name,onChange:this.handleChange}),r.a.createElement(k,{text:"Pick your race",name:"race",value:this.state.race,options:["human","orc","duck","elf","dwarf"],onChange:this.handleChange}),r.a.createElement(O,{name:"str",value:this.state.str,onChange:this.handleChange}),r.a.createElement(O,{name:"dex",value:this.state.dex,onChange:this.handleChange}),r.a.createElement(O,{name:"con",value:this.state.con,onChange:this.handleChange}),r.a.createElement(O,{name:"int",value:this.state.int,onChange:this.handleChange}),r.a.createElement(O,{name:"wis",value:this.state.wis,onChange:this.handleChange}),r.a.createElement(O,{name:"cha",value:this.state.cha,onChange:this.handleChange}),r.a.createElement(w,{text:"Background",name:"background",value:this.state.background,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:E(this.state,8)?"Randomize & Submit":"Submit"})))}}]),t}(r.a.Component);var x=function(){return r.a.createElement("div",{className:"width100"},r.a.createElement("h1",{className:"flex-center"},"Welcome to DnD Generator"),r.a.createElement(S,null))},Y=function(){return r.a.createElement("h1",null,"Nothing here")},N=a(25),A=N.d.create({page:{flexDirection:"column",backgroundColor:"#E4E4E4"},section:{margin:10,padding:10},stats:{fontSize:"12pt"},border:{border:!0}}),z=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"styleString",value:function(e){return JSON.stringify(e).substring(1,e.length+1)}},{key:"render",value:function(){var e=this.styleString(this.props.location.state.name),t=this.props.location.state.race,a=this.styleString(this.props.location.state.str),n=this.styleString(this.props.location.state.dex),i=this.styleString(this.props.location.state.con),o=this.styleString(this.props.location.state.int),s=this.styleString(this.props.location.state.wis),l=this.styleString(this.props.location.state.cha),c=this.styleString(this.props.location.state.background);return r.a.createElement("div",null,r.a.createElement(N.b,null,r.a.createElement(N.a,null,r.a.createElement(N.c,{size:"A4",style:A.page},r.a.createElement(N.f,{style:A.section},r.a.createElement(N.e,null,e),r.a.createElement(N.e,{style:A.stats},C(t))),r.a.createElement(N.f,{style:[A.section,A.border]},r.a.createElement(N.e,null,"Stats"),r.a.createElement(N.f,null,r.a.createElement(N.e,{style:A.stats},"STR: ",a),r.a.createElement(N.e,{style:A.stats},"DEX: ",n),r.a.createElement(N.e,{style:A.stats},"CON: ",i),r.a.createElement(N.e,{style:A.stats},"INT: ",o),r.a.createElement(N.e,{style:A.stats},"WIS: ",s),r.a.createElement(N.e,{style:A.stats},"CHA: ",l))),r.a.createElement(N.f,{style:[A.section,A.border]},r.a.createElement(N.e,null,"Background"),r.a.createElement(N.e,{style:A.stats},c))))))}}]),t}(r.a.Component),B=r.a.createElement(s.a,null,r.a.createElement("div",{className:"width100"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:x}),r.a.createElement(l.b,{exact:!0,path:"/pdf",component:z}),r.a.createElement(l.b,{component:Y}))));o.a.render(B,document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.103218be.chunk.js.map