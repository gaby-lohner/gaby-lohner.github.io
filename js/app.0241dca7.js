(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"078d":function(e,t,n){},"10bb":function(e,t,n){"use strict";n("75b8")},1586:function(e,t,n){},"16a4":function(e,t,n){"use strict";n("078d")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const i={id:"app"};function o(e,t,n,o,r,s){const c=Object(a["w"])("NavBar"),l=Object(a["w"])("router-view"),d=Object(a["w"])("Footer");return Object(a["r"])(),Object(a["e"])("div",i,[Object(a["h"])(c),Object(a["h"])(l,{class:"component"}),Object(a["h"])(d)])}const r={class:"bg-light nav-container sticky-top"},s=Object(a["f"])("div",{class:"d-flex justify-content-center name-line"},[Object(a["f"])("h1",{class:"display-1 text-center m-2"},"Gaby Lohner")],-1),c={class:"navbar navbar-expand-lg"},l={class:"container justify-content-center"},d=Object(a["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["f"])("h3",{class:"m-0 menu"},"Menu")],-1),u={class:"collapse navbar-collapse justify-content-center",id:"navbarNavAltMarkup"},f={class:"navbar-nav"},h={class:"menu"};function g(e,t,n,i,o,g){const p=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["e"])("div",r,[s,Object(a["f"])("nav",c,[Object(a["f"])("div",l,[d,Object(a["f"])("div",u,[Object(a["f"])("div",f,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["v"])(o.pages,e=>(Object(a["r"])(),Object(a["d"])(p,{key:e.name,class:"nav-link text-center","active-class":"active",to:e.path},{default:Object(a["C"])(()=>[Object(a["f"])("h4",h,Object(a["z"])(e.name),1)]),_:2},1032,["to"]))),128))])])])])])}var p={data(){return{pages:[{name:"About",path:"/"},{name:"Research",path:"/research"},{name:"Contact",path:"/contact"}]}}},b=(n("8774"),n("d959")),m=n.n(b);const v=m()(p,[["render",g]]);var y=v;const j={class:"footer-container fixed-bottom justify-content-center"},O=["href"],w={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"},x=["d"];function k(e,t,n,i,o,r){return Object(a["r"])(),Object(a["e"])("div",j,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["v"])(o.links,e=>(Object(a["r"])(),Object(a["e"])("a",{key:e.name,class:"nav-link icons text-light",href:e.url,target:"_blank"},[(Object(a["r"])(),Object(a["e"])("svg",w,[Object(a["f"])("path",{d:e.svg},null,8,x)]))],8,O))),128))])}var C={data(){return{links:[{name:"twitter",url:"https://twitter.com/gabylohner",svg:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"},{name:"linkedin",url:"https://www.linkedin.com/in/gabylohner",svg:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"},{name:"google",url:"https://scholar.google.com/citations?user=TKYo0wMAAAAJ&hl=en&oi=ao",svg:"M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"}]}}};n("97d9");const A=m()(C,[["render",k]]);var P=A,S={components:{NavBar:y,Footer:P},data(){}};n("16a4");const z=m()(S,[["render",o]]);var M=z,T=n("6605");const I=Object(a["f"])("div",{class:"d-flex justify-content-center"},[Object(a["f"])("h2",{class:"text-center page-title display-5"},"About Me")],-1),D={class:"d-flex justify-content-center mx-5"},V=["src"],B={class:"d-flex flex-column text-container"},E=Object(a["f"])("h3",{class:"text-center my-3"},"Hi there!",-1),L=Object(a["f"])("p",{class:"bio"},"My name is Gaby Lohner, and I am a PhD student in Public Policy at UC Berkeley. I was previously a research assistant at the Nudge4 Solutions Lab at the University of Virginia. My research interests center around poverty and policy analysis, specifically how education and social welfare policy affect low-income families. ",-1),N={class:"text-dark"},_=["href"];function H(e,t,n,i,o,r){return Object(a["r"])(),Object(a["e"])("div",null,[I,Object(a["f"])("div",D,[Object(a["f"])("img",{src:o.gabyHeadshot,class:"rounded img-fluid shadow headshot",alt:"Gaby"},null,8,V)]),Object(a["f"])("div",B,[E,L,Object(a["f"])("p",N,[Object(a["g"])("You can find my CV "),Object(a["f"])("a",{href:o.cv,target:"_blank",class:""},"here",8,_),Object(a["g"])(".")])])])}var F=n("d563"),R=n.n(F),U={data(){return{cv:n("c8a8"),gabyHeadshot:R.a}}};n("5817");const W=m()(U,[["render",H]]);var q=W;const G=Object(a["f"])("div",{class:"d-flex justify-content-center"},[Object(a["f"])("h2",{class:"text-center page-title display-5"},"Contact Me")],-1),J={class:"d-flex flex-column justify-content-center text-container mb-4"},K=Object(a["f"])("p",null,[Object(a["g"])("Please feel free to contact me at "),Object(a["f"])("strong",null,"gaby.lohner@berkeley.edu"),Object(a["g"])(" or via any of the social media links below. If you are interested in grad school and have any questions, please don't hesitate to reach out!")],-1),Y=Object(a["f"])("p",null,"Please enjoy this picture of my dog loving life in the East Bay 🙂",-1),Z=["src"];function Q(e,t,n,i,o,r){return Object(a["r"])(),Object(a["e"])("div",null,[G,Object(a["f"])("div",J,[K,Y,Object(a["f"])("img",{class:"img-fluid",src:o.lilySunset,alt:"Lily on the beach at sunset."},null,8,Z)])])}var X=n("74b4"),$=n.n(X),ee={data(){return{lilySunset:$.a}}};n("b3b5");const te=m()(ee,[["render",Q]]);var ne=te;const ae=Object(a["f"])("div",{class:"d-flex justify-content-center"},[Object(a["f"])("h2",{class:"text-center page-title display-5"},"Working Papers")],-1),ie={class:"d-flex flex-column"},oe=["onClick"],re={class:"card-body"},se={class:"fw-bold"},ce={class:"authors"},le=Object(a["f"])("hr",null,null,-1),de={class:"m-0"};function ue(e,t,n,i,o,r){return Object(a["r"])(),Object(a["e"])("div",null,[ae,Object(a["f"])("div",ie,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["v"])(o.workingPapers,e=>(Object(a["r"])(),Object(a["e"])("div",{key:e.url,class:"col-12 p-0"},[Object(a["f"])("div",{class:"card papers shadow",onClick:t=>r.navigateTo(e.url)},[Object(a["f"])("div",re,[Object(a["f"])("h4",se,Object(a["z"])(e.title),1),Object(a["f"])("p",ce,Object(a["z"])("with "+e.authors),1),Object(a["f"])("p",null,Object(a["z"])(e.date),1),le,Object(a["f"])("p",de,Object(a["z"])(e.abstract),1)])],8,oe)]))),128))])])}var fe=n("6b71"),he={data(){return{workingPapers:fe}},methods:{navigateTo(e){window.open(e)}}};n("10bb");const ge=m()(he,[["render",ue]]);var pe=ge;const be=[{path:"/",name:"About",component:q},{path:"/research",name:"Research",component:pe},{path:"/contact",name:"Contact",component:ne}],me=Object(T["a"])({history:Object(T["b"])(),routes:be});var ve=me,ye=n("5502"),je=Object(ye["a"])({state:{},mutations:{},actions:{},modules:{}});n("ab8b"),n("7b17");Object(a["c"])(M).use(je).use(ve).mount("#app")},5817:function(e,t,n){"use strict";n("a51a")},"5f72":function(e,t,n){},"6b71":function(e){e.exports=JSON.parse('[{"title":"College Advising at a National Scale: Experimental Evidence from the CollegePoint Initiative","authors":["Zach Sullivan, Benjamin L. Castleman, and Eric Bettinger"],"date":"10/2021","abstract":"In-person college advising programs generate large improvements in college persistence and success for low-income students but face numerous barriers to scale. Remote advising models offer a promising strategy to address informational and assistance barriers facing the substantial majority of low-income students who do not have access to community-based advising, yet the existing evidence base on the efficacy of remote advising is limited. We present a comprehensive, multi-cohort experimental evaluation of CollegePoint, a national remote college advising program for high-achieving low- and moderate-income students. Students assigned to CollegePoint are modestly more likely (1.3 percentage points) to attend higher-quality institutions. Results from mechanism experiments we conducted within CollegePoint indicate that moderate changes to the program model, such as a longer duration of advising and modest expansions of the pool of students academically eligible to participate, do not lead to larger program effects. We also capitalize on across-cohort variation in whether students were affected by COVID-19 to investigate whether social distancing required by the pandemic increased the value of remote advising. CollegePoint increased attendance at higher-quality institutions by 3.2 percentage points for the COVID-19-affected cohort.","url":"https://www.edworkingpapers.com/ai19-123"},{"title":"Pushing College Advising Forward: Experimental Evidence on Intensive Advising and College Success","authors":"Benjamin L. Castleman and Denise Deutschlander","date":"11/2020","abstract":"Growing experimental evidence demonstrates that low-touch informational, nudge, and virtual advising interventions are ineffective at improving postsecondary educational outcomes for economically-disadvantaged students at scale. Intensive in-person college advising programs are a considerably higher-touch and more resource intensive strategy; some programs provide students with dozen of hours of individualized assistance starting in high school and continuing through college, and can cost thousands of dollars per student served. Despite the magnitude of this investment, causal evidence on these programs\' impact is quite limited, particularly for programs that serve Hispanic students, the fastest growing segment of U.S. college enrollees. We contribute new evidence on the impact of intensive college advising programs through a multi-cohort RCT of College Forward, which provides individualized advising from junior year of high school through college for a majority Hispanic student population in Texas. College Forward leads to a 7.5 percentage point increase in enrollment in college, driven entirely by increased enrollment at four-year universities. Students who receive College Forward advising are nearly 12 percentage points more likely to persist to their third year of college. While more costly and harder to scale than low-touch interventions, back of the envelope calculations suggest that the benefit from increased college graduation likely induced by the program outweighs operating costs in less than two years following college completion.","url":"https://www.edworkingpapers.com/ai20-326"},{"title":"Negative Impacts from the Shift to Online Learning During the COVID-19 Crisis: Evidence from a Statewide Community College System","authors":["Benjamin L. Castleman and Kelli A. Bird"],"date":"08/2021","abstract":"The COVID-19 pandemic led to an abrupt shift from in-person to virtual instruction in Spring 2020. Using a difference-in-differences framework that leverages within-course variation on whether students started their Spring 2020 courses in person or online, we estimate the impact of this shift on the academic performance of Virginia’s community college students. We find that the shift to virtual instruction resulted in a 6.7 percentage point decrease in course completion, driven by increases in both course withdrawal and failure. Faculty experience teaching a course online did not mitigate the negative effects of moving to virtual instruction.","url":"https://www.edworkingpapers.com/ai20-299"},{"title":"The Impact of a Cash Transfer Program on Life Outcomes: Evidence from Uruguay","authors":["Eric Ramirez-Diaz and Karina Colombo"],"date":"11/2020","abstract":"This paper analyzes the impact of a cash transfer program targeting households in extreme poverty, Tarjeta Uruguay Social, on a variety of life outcomes. A fuzzy Regression Discontinuity Design is implemented by using administrative data for the period 2013-2017, exploiting a doubling of the transfer to the poorest members of the program based on a poverty score. The results show significant improvements in both household and individual outcomes, specifically regarding dwelling attributes, durable goods, and formal work. Our results highlight the significant impact that the amount of the transfer and duration of the benefit have on the treatment effects.","url":"https://repositori.upf.edu/handle/10230/35895"}]')},"74b4":function(e,t,n){e.exports=n.p+"img/lily-sunset.35496f27.jpg"},"75b8":function(e,t,n){},8774:function(e,t,n){"use strict";n("1586")},"97d9":function(e,t,n){"use strict";n("5f72")},a51a:function(e,t,n){},b3b5:function(e,t,n){"use strict";n("e614")},c8a8:function(e,t,n){e.exports=n.p+"7237efcc9b616f22e1e41ddf1fdfa43a.pdf"},d563:function(e,t,n){e.exports=n.p+"img/headshot.c4ccd50e.png"},e614:function(e,t,n){}});
//# sourceMappingURL=app.0241dca7.js.map