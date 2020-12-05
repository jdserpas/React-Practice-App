(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),i=c(8),r=c.n(i),d=(c(14),c(3)),o=c(4),l=c(2),h=c(6),j=c(5),m=(c(15),"https://api.football-data.org/v2/"),b="4f80031c8e09431dbc3846f5480fb600";function u(e){var t=e.info;return"FINISHED"===t.status?Object(a.jsxs)("table",{id:"match",children:[Object(a.jsxs)("tr",{id:"ScoreInfo",children:[Object(a.jsx)("td",{class:"HomeOrAway",children:"H"}),Object(a.jsx)("td",{class:"Team",children:t.homeTeam.name}),Object(a.jsx)("td",{class:"Score",children:t.score.fullTime.homeTeam}),Object(a.jsx)("td",{class:"HomeOrAway",children:"VS"}),Object(a.jsx)("td",{class:"Score",children:t.score.fullTime.awayTeam}),Object(a.jsx)("td",{class:"Team",children:t.awayTeam.name}),Object(a.jsx)("td",{class:"HomeOrAway",children:"A"})]}),Object(a.jsx)("tr",{id:"time",children:"FINAL SCORE"})]}):Object(a.jsxs)("table",{id:"match",children:[Object(a.jsxs)("tr",{id:"ScoreInfo",children:[Object(a.jsx)("td",{class:"HomeOrAway",children:"H"}),Object(a.jsx)("td",{class:"Team",children:t.homeTeam.name}),Object(a.jsx)("td",{class:"Score",children:t.score.fullTime.homeTeam}),Object(a.jsx)("td",{class:"HomeOrAway",children:"VS"}),Object(a.jsx)("td",{class:"Score",children:t.score.fullTime.awayTeam}),Object(a.jsx)("td",{class:"Team",children:t.awayTeam.name}),Object(a.jsx)("td",{class:"HomeOrAway",children:"A"})]}),Object(a.jsx)("tr",{id:"time",children:t.status})]})}var O=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).state={currentMatchDay:[],matchDay:e.matchDay,isLoaded:!1,matches:[]},a.changeMatchDay=a.changeMatchDay.bind(Object(l.a)(a)),a}return Object(o.a)(c,[{key:"changeMatchDay",value:function(e){this.setState({matchDay:e.target.selectedIndex}),this.callMatches(this.props.comp,this.state.matchDay)}},{key:"callMatches",value:function(e,t){var c=this;fetch(m+"competitions/"+e+"/matches?matchday="+t,{method:"GET",headers:{"X-Auth-Token":b}}).then((function(e){return e.json()})).then((function(e){c.setState({isLoaded:!0,matches:e.matches})}))}},{key:"componentDidUpdate",value:function(e,t){if(this.props.comp&&this.props.comp!==e.comp){this.callMatches(this.props.comp,this.state.matchDay);for(var c=[],a=0;a<this.props.matchDay;a++)c[a]=a+1;this.state.currentMatchDay=c}}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,c=e.matches,s=e.currentMatchDay;return t?Object(a.jsxs)("div",{id:"matchContainer",children:[Object(a.jsx)("select",{id:"MatchDay",onChange:this.changeMatchDay,children:s.map((function(e,t){return s.length===t+1?Object(a.jsx)("option",{selected:!0,children:e},e):Object(a.jsx)("option",{children:e},e)}))}),c.map((function(e){return Object(a.jsx)("div",{class:"matchDisplay",children:Object(a.jsx)(u,{info:e})},e.id)}))]}):Object(a.jsx)("div",{children:"Please Pick a League."})}}]),c}(n.a.Component);function p(e){var t=e.info;return Object(a.jsxs)("tr",{id:"team",children:[Object(a.jsx)("td",{className:"tableData Pos",children:t.position}),Object(a.jsx)("td",{className:"tableData TeamName",children:t.team.name}),Object(a.jsx)("td",{className:"tableData GP",children:t.playedGames}),Object(a.jsx)("td",{className:"tableData Won",children:t.won}),Object(a.jsx)("td",{className:"tableData Loss",children:t.lost}),Object(a.jsx)("td",{className:"tableData GD",children:t.goalDifference}),Object(a.jsx)("td",{className:"tableData Points",id:"points",children:t.points})]})}var x=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).state={isLoaded:!1,prevCompId:-1,compId:0,standings:null},a}return Object(o.a)(c,[{key:"componentDidUpdate",value:function(e,t){var c=this;0!==this.props.comp&&this.props.comp!==e.comp&&fetch(m+"competitions/"+this.props.comp+"/standings",{method:"GET",headers:{"X-Auth-Token":b}}).then((function(e){return e.json()})).then((function(e){var t=e.standings[0].table;c.setState({prevCompId:c.state.compId,compId:e.id,isLoaded:!0,standings:t})}))}},{key:"render",value:function(){return this.state.isLoaded?Object(a.jsxs)("table",{id:"TableStand",cellSpacing:"0",children:[Object(a.jsxs)("tr",{id:"StandHeaders",children:[Object(a.jsx)("th",{class:"Pos",children:"Pos."}),Object(a.jsx)("th",{class:"TeamName",children:"Team"}),Object(a.jsx)("th",{class:"GP",children:"GP"}),Object(a.jsx)("th",{class:"Won",children:"W"}),Object(a.jsx)("th",{class:"Loss",children:"L"}),Object(a.jsx)("th",{class:"GD",children:"GD"}),Object(a.jsx)("th",{class:"Points",children:"P"})]}),this.state.standings.map((function(e){return Object(a.jsx)(p,{info:e},e.position)}))]}):Object(a.jsx)("div",{children:"Please Pick a League"})}}]),c}(n.a.Component),f=function(e){Object(h.a)(c,e);var t=Object(j.a)(c);function c(e){var a;return Object(d.a)(this,c),(a=t.call(this,e)).setLeague=function(e){a.setState({selectedComp:e.target.selectedIndex})},a.state={error:null,isLoaded:!1,comps:[],selectedComp:0},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch(m+"competitions/",{method:"GET",headers:{"X-Auth-Token":b}}).then((function(e){return e.json()})).then((function(t){var c=t.competitions.filter((function(e){switch(e.id){case 2002:case 2003:case 2013:case 2014:case 2015:case 2016:case 2017:case 2019:case 2021:return!0;default:return!1}}));e.setState({isLoaded:!0,comps:c})}))}},{key:"render",value:function(){var e=this.state,t=e.error,c=e.isLoaded,s=e.comps,n=e.selectedComp;return t?Object(a.jsxs)("div",{children:["Error: ",t.message]}):c?(console.log(s[n].id),Object(a.jsxs)("div",{id:"container",children:[Object(a.jsx)("div",{id:"compSelect",children:Object(a.jsx)("select",{id:"compList",onChange:this.setLeague,children:s.map((function(e){return Object(a.jsxs)("option",{id:e.id,children:[e.area.name," : ",e.name]},e.id)}))})}),Object(a.jsx)("div",{id:"standings",children:Object(a.jsx)(x,{comp:s[n].id})}),Object(a.jsx)("div",{id:"results",children:Object(a.jsx)(O,{comp:s[n].id,matchDay:s[n].currentSeason.currentMatchday})})]})):Object(a.jsx)("div",{children:"Loading..."})}}]),c}(n.a.Component);r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3d843445.chunk.js.map