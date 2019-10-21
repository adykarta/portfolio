(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(n,e,t){n.exports=t(55)},41:function(n,e,t){},42:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},52:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(28),o=t.n(r),c=(t(41),t(31)),l=t(13),s=(t(42),t(3)),m=t(4),d=t(6),u=t(5),p=t(19),g=t(7),h=t(1),f=t(2);function b(){var n=Object(h.a)(["\n    .logo {\n        animation: logo-spin infinite 7s linear;\n        height: 40vmin;\n        pointer-events: none;\n        max-width:300px;\n        max-height:300px;\n    }\n    .wrapper{\n        height:100vh;\n        width:100vw;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n        background-color:white;\n    }\n\n    @keyframes logo-spin {\n        from {\n          transform: rotate(0deg);\n        }\n        to {\n          transform: rotate(360deg);\n        }\n      }\n"]);return b=function(){return n},n}var v=f.a.div(b()),E=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(v,null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/206/206078.svg",className:"logo"})))}}]),e}(a.Component);function w(){var n=Object(h.a)(["\n\n    .HomeWrapper{\n        background-color: #F5F5F5\n        height:100vh;\n        width:100%;\n       \n    }\n\n    .main-box{\n        justify-content:center;\n        display:flex;\n        height:100vh;\n        align-items:center;\n        padding:auto;\n    }\n\n    .img-ady{\n        width:100%;\n        height:auto;\n    }\n    .landing-text{\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        flex-direction:column;\n        padding:auto;\n       \n    }\n    .landing-name{\n        font-size:3rem;\n    }\n    .landing-about{\n        font-size:1.25rem;\n    }\n    .text-bold{\n        font-weight:bolder;\n    }\n    .arrow{\n        cursor:pointer;\n        display: inline-block;\n        width: 100px;\n        position: relative;\n        animation-name: ",";\n        animation-duration: 2s;\n        animation-timing-function: ease;\n        animation-delay: 0s;\n        animation-iteration-count: infinite;\n        animation-direction: normal;\n        animation-fill-mode: forwards;\n        animation-play-state: running;\n        color:black;\n     \n    }\n    .animation-right{\n        position:relative;\n        animation-duration: 0.4s;\n        animation-timing-function: ease;\n        animation-delay: 0s;\n        animation-iteration-count: 1;\n        animation-direction: normal;\n        animation-fill-mode: none;\n        animation-play-state: running;\n        animation-name: ",";\n    }\n\n    @media only screen and (max-width:767px){\n        .landing-text{\n            padding:8%;\n        }\n        .main-box{\n            padding:22%;\n        }\n        .landing-name{\n            font-size:1.4rem;\n        }\n        .landing-about{\n            font-size:0.8rem;\n        }\n       \n    }\n    \n"]);return w=function(){return n},n}function x(){var n=Object(h.a)(["\n0% {\n    right: -300px;\n    opacity: 0;\n}\n100% {\n    right: 0;\n    opacity: 1;\n}\n"]);return x=function(){return n},n}function y(){var n=Object(h.a)(["\n    0%{\n        top:0px;\n       \n    }\n    50%{\n        top:50px;\n    }\n    100%{\n        top:0px;\n    }\n"]);return y=function(){return n},n}var j=Object(f.b)(y()),O=Object(f.b)(x()),N=f.a.div(w(),j,O),k=t(14),F=t.n(k),C=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(N,null,i.a.createElement("div",{className:"HomeWrapper",id:this.props.id},i.a.createElement("div",{className:"main-box"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("img",{className:"img-ady animation-opacity",src:"/assets/img/ady.png"})),i.a.createElement("div",{className:"col-md-6 landing-text"},i.a.createElement("div",{className:"row"},i.a.createElement("h2",{className:"animation-right landing-name"},"Hello, My name is ",i.a.createElement("span",{className:"text-bold"},"Muhamad Istiady Kartadibrata"))),i.a.createElement("div",{className:"row"},i.a.createElement("h6",{className:"animation-right landing-about"},"I am a ",i.a.createElement("span",{className:"text-bold"},"Computer Science")," undergraduate student at ",i.a.createElement("span",{className:"text-bold"},"Univesitas Indonesia")," in 3rd years.")),i.a.createElement("div",{className:"row"},i.a.createElement("div",null,i.a.createElement(F.a,{href:this.props.href},i.a.createElement("h1",{className:"arrow"},"\u21e3"))))))))))}}]),e}(i.a.Component);function I(){var n=Object(h.a)(["\n  .cardExperiencesContainer{\n       height:auto;\n       background-color: #F5F5F5;\n       padding-left:4%;\n  }\n  .body-text{\n    color:#797979;\n  }\n    \n"]);return I=function(){return n},n}function P(){var n=Object(h.a)(["\n .box{\n   height:80vh;\n   background-color:#F5F5F5;\n   overflow-x:scroll;\n   overflow-y:hidden;\n   flex-wrap:nowrap;\n\n }\n .work-container{\n   display:inline-block;\n\n }\n .work-project{\n   height:100%;\n   justify-content:space-between;\n   display:flex;\n   align-items:center;\n\n\n }\n .box::-webkit-scrollbar{\n   display:none;\n }\n.col-arrow{\n  width:100%;\n}\n .card-a{\n  background-color:#F5F5F5;\n  height:100%;\n  width:200vw;\n  justify-content:center;\n  align-items:center;\n }\n .full-height{\n   height:100%;\n   flex-wrap:nowrap !important\n }\n .arrow{\n   font-size:700%;\n  display: inline-block;\n  width: 100px;\n  position: relative;\n  animation-name: ",";\n  animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n  animation-fill-mode: forwards;\n  animation-play-state: running;\n\n}\n.arrow-back{\n  font-size:700%;\n  display: inline-block;\n  width: 100px;\n  position: relative;\n  animation-name: ",";\n  animation-duration: 2s;\n  animation-timing-function: ease;\n  animation-delay: 0s;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n  animation-fill-mode: forwards;\n  animation-play-state: running;\n}\n.center{\n  height:100%;\n  display:flex;\n  justify-content:center;\n  align-items:Center;\n}\n@media only screen and (max-width:767px){\n  .box{\n    height:100vh;\n    \n  }\n  .card-a{\n    width:400vw;\n  }\n  .col-arrow{\n    width:10%;\n  }\n\n}\n\n"]);return P=function(){return n},n}function z(){var n=Object(h.a)(["\n    0%{\n        right:0px;\n       \n    }\n    50%{\n        right:50px;\n    }\n    100%{\n        right:0px;\n    }\n"]);return z=function(){return n},n}function S(){var n=Object(h.a)(["\n    0%{\n        left:0px;\n       \n    }\n    50%{\n        left:50px;\n    }\n    100%{\n        left:0px;\n    }\n"]);return S=function(){return n},n}function B(){var n=Object(h.a)(["\n.container-card{\n  height:100%;\n  width:100%;\n  justify-content:center;\n  align-items:center;\n  display:flex;\n  flex-direction: column;\n}\n.body-text{\n  color:#797979;\n  text-align:center;\n}\n.full-img{\n  width:60%;\n  height:auto;\n}\n#padding{\n  padding-top:4px;\n  padding-bottom:4px;\n}\n.work-h1{\n  font-size:2rem;\n}\n.work-h3{\n  font-size:1.4rem;\n}\n.work-h6{\n  font-size:0.8rem;\n}\n.work-h5{\n  font-size:1rem;\n}\n@media only screen and (max-width:767px){\n  .work-h1{\n    font-size:1.8rem;\n  }\n  .work-h3{\n    font-size:1.25rem;\n  }\n  .work-h6{\n    font-size:0.8rem;\n  }\n  .work-h5{\n    font-size:1rem;\n  }\n\n\n}\n"]);return B=function(){return n},n}function A(){var n=Object(h.a)(["\n  .experiencesContainer{\n       height:auto;\n       background-color: #F5F5F5;\n       overflow-x:hidden;\n   \n  }\n  .container-fluid{\n    padding-left:10%;\n    padding-right:10%;\n  }\n  .field{\n    padding-top:4%;\n    margin-bottom:0;\n  }\n  .text-bold{\n    font-weight:bolder;\n  }\n  .header-field{\n    font-weight:bolder;\n    padding-bottom:4%;\n  }\n\n  @media only screen and (max-width:767px){\n    .field{\n      margin-bottom:8%;\n    }\n  }\n\n    \n"]);return A=function(){return n},n}var M=f.a.div(A()),L=f.a.div(B()),R=Object(f.b)(S()),T=Object(f.b)(z()),D=f.a.div(P(),R,T),W=f.a.div(I());function J(){var n=Object(h.a)(["\n    .logo-container {\n        max-width:3rem;\n        max-height:3rem;\n        margin-top:0;\n        margin-bottom:0;\n        \n        display:flex;\n        justify-content:center;\n        align-items:center;\n    }\n    .logo{\n        width:100%;\n        height:100%;\n    }\n    @media only screen and (max-width:767px){\n        .logo-container{\n            margin-bottom:4%;\n            margin-top:4%\n        }\n    }\n    \n \n"]);return J=function(){return n},n}var U=f.a.div(J()),K=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(U,null,i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{className:"logo",src:this.props.image})))}}]),e}(a.Component),H=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(M,null,i.a.createElement("div",{className:"experiencesContainer"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"field"},i.a.createElement("h1",{className:"header-field",id:this.props.exp},"Education"),i.a.createElement(Q,{location:"Depok, Indonesia",time:"August 2017 - Present",image:"/assets/img/ui.png",subbody:"Passed Courses: ",title:"Computer Science",place:"University of Indonesia",bodytext:"Basic of Programming Language 1 (Python), Basic of Programming Language 2 (Java), Data Structures and ALgorithm, Introduction to Computer Organization, Linear Algebra, Statistics & Probability, Web Programming & Design, Advanced Programming, Database, Operating Systems, Theory of Language & Automata "})),i.a.createElement("div",{className:"field"},i.a.createElement("h1",{className:"header-field"},"Organization"),i.a.createElement(Q,{location:"Depok, Indonesia",time:"March 2019 - Present",image:"/assets/img/ristek.svg",title:"Member of Project Management",place:"RISTEK Fasilkom UI",subbody:"What did i do: ",bodytext:"Become the Project Manager for internal or external projects in RISTEK and Managing Ristek TechTalk (seminar)"}))),i.a.createElement(G,{id:this.props.id})))}}]),e}(i.a.Component),G=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(D,null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"field"},i.a.createElement("h1",{className:"header-field",id:this.props.id},"Works"))),i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"card-a"},i.a.createElement("div",{className:"row full-height"},i.a.createElement("div",{className:"col-md-2 col-arrow"},i.a.createElement("div",{className:"center arrow-container"},i.a.createElement("h1",{className:"arrow"},"\u21e2"))),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"work-project"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"work-container"},i.a.createElement(q,{title:"Front End Engineer Intern",place:"bagidata",time:"June 2019 - September 2019",logoimg:"/assets/img/bagidata.png",image:"/assets/img/bagidataandroid.png",text:"\u200bImplement new design for Bagitrip Feature for Android using React Native and \u200bImplement new design for Bagidata Admin web app using ReactJS"}))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"work-container"},i.a.createElement(q,{title:"Front End Developer Part Time",place:"adaTeman",time:"February 2019 - June 2019",logoimg:"/assets/img/adateman.png",image:"/assets/img/adatemanproject2.png",text:"Creating and Maintaining adaTeman official website\u200b \u200busing ReactJS"}))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"work-container"},i.a.createElement(q,{title:"Front End Developer Intern",place:"adaTeman",time:"January 2019 - February 2019",logoimg:"/assets/img/adateman.png",image:"/assets/img/adatemanproject.png",text:"\u200bCreating adaTeman official websit using ReactJS."}))))),i.a.createElement("div",{className:"col-md-2 col-arrow"},i.a.createElement("div",{className:"center arrow-container"},i.a.createElement("h1",{className:"arrow-back"},"\u21e0")))))))}}]),e}(i.a.Component),q=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(L,null,i.a.createElement("div",{className:"container-card"},i.a.createElement(K,{image:this.props.logoimg,id:"padding"}),i.a.createElement("h1",{id:"padding",className:"text-bold work-h1"},this.props.title),i.a.createElement("h3",{id:"padding",className:"text-bold work-h3"},this.props.place),i.a.createElement("h6",{className:"work-h6",id:"padding"},this.props.time),i.a.createElement("img",{id:"padding",src:this.props.image,className:"full-img"}),i.a.createElement("h5",{id:"padding",className:"body-text work-h5"},this.props.text)))}}]),e}(i.a.Component),Q=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(W,null,i.a.createElement("div",{className:"cardExperiencesContainer"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("h6",null,this.props.location),i.a.createElement("h6",null,this.props.time)),i.a.createElement("div",{className:"col-md-1"},i.a.createElement(K,{image:this.props.image})),i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"row"},i.a.createElement("h5",null,this.props.title," \xa0 \u2014 \xa0",i.a.createElement("span",{className:"text-bold"},this.props.place))),i.a.createElement("div",{className:"row"},i.a.createElement("h6",{className:"text-bold body-text"},this.props.subbody)),i.a.createElement("div",{className:"row"},i.a.createElement("h6",{className:"body-text"},this.props.bodytext))))))}}]),e}(i.a.Component),$=H;function _(){var n=Object(h.a)(["\n   .ProjectsWrapper{\n       height:auto;\n       background-color: #F5F5F5;\n       display:flex;\n       justify-content:center;\n       text-align:center;\n       padding-top:8%;\n   }\n   .text-bold{\n    font-weight:bolder;\n  }\n  .project-container{\n    width:100%;\n    justify-content:center;\n    align-items:center;\n    display:flex;\n    flex-direction: column;\n    padding-top:4%;\n    padding-bottom:4%;\n  }\n  .body-text{\n    color:#797979;\n    text-align:center;\n  }\n  .full-img{\n    width:60%;\n    height:auto;\n  }\n  #padding{\n    padding-top:4px;\n    padding-bottom:4px;\n  }\n  .projects-h1{\n    font-size:2rem;\n  }\n  @media only screen and (max-width:767px){\n    .projects-h1{\n      font-size:1.8rem;\n    }\n  }\n"]);return _=function(){return n},n}var V=f.a.div(_()),X=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(V,null,i.a.createElement("div",{className:"ProjectsWrapper"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{class:"text-bold",id:this.props.id},"Projects"),i.a.createElement(Y,{title:"Personal Website",image:"/assets/img/personal.png",text:"A Personal Website built using React JS"}),i.a.createElement(Y,{title:"Risk Analytics - BPKP",image:"/assets/img/bpkpproject.png",text:"Risk Analytics Platform that belongs to BPKP (Badan Pengawasan Keuangan dan Pembangunan). Built using Laravel and MariaDB for database"}),i.a.createElement(Y,{title:"Business Law Society FH UI",image:"/assets/img/blsproject.png",text:"An Organization Profile of Business Law Society Faculty of Law UI. Built using Django"}),i.a.createElement(Y,{title:"MWA UIUM",image:"/assets/img/mwaproject.png",text:"An Organization Profile of MWA UI UM (Unsur Mahasiswa). Built using Django"}),i.a.createElement(Y,{title:"Admin Page - bagidata",image:"/assets/img/bagidataproject.png",text:"Bagidata admin page that contains KTP verification, Scrapper Feature, and Dashboard. Built using React JS and Redux"}))))}}]),e}(i.a.Component),Y=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"project-container"},i.a.createElement("h1",{id:"padding",className:"text-bold projects-h1"},this.props.title),i.a.createElement("div",{className:"image-container"},i.a.createElement("img",{id:"padding",src:this.props.image,className:"full-img"})),i.a.createElement("h5",{id:"padding",className:"body-text"},this.props.text))}}]),e}(i.a.Component),Z=X;function nn(){var n=Object(h.a)(["\n.menu-wrapper{\nbackground-color: transparent;\nposition:fixed;\ntop: 20%;\nleft:3%;\nz-index:100000;\n\ndisplay:flex;\nflex-direction:column;\n\n}\n.menu-a,.menu-b,.menu-c,.menu-d{\n    font-weight:bolder;\n    cursor:pointer;\n    transition: 0.3s;\n    color:black;\n    z-index:100000;\n}\n.menu-a:hover,.menu-b:hover,.menu-c:hover,.menu-d:hover{\n    font-size:2rem;\n}\n\n"]);return nn=function(){return n},n}function en(){var n=Object(h.a)(["\n    .wrapper-all{\n        background-color:#F5F5F5;\n        overflow-x:hidden;\n    }\n\n    .wrapper{\n        height:100vh;\n        width:100vw;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n        background-color:white;\n        \n    }\n    .portfolio-screen{\n        display-flex;\n        flex-direction:row;\n    }\n    .animation-opacity{\n        position:relative;\n        animation-duration: 0.8s;\n        animation-timing-function: ease;\n        animation-delay: 0s;\n        animation-iteration-count: 1;\n        animation-direction: normal;\n        animation-fill-mode: none;\n        animation-play-state: running;\n        animation-name: ",";\n    }\n    .animation-left{\n        position:relative;\n        animation-duration: 0.4s;\n        animation-timing-function: ease;\n        animation-delay: 0s;\n        animation-iteration-count: 1;\n        animation-direction: normal;\n        animation-fill-mode: none;\n        animation-play-state: running;\n        animation-name: ",";\n    }\n    .animation-right{\n        position:relative;\n        animation-duration: 0.4s;\n        animation-timing-function: ease;\n        animation-delay: 0s;\n        animation-iteration-count: 1;\n        animation-direction: normal;\n        animation-fill-mode: none;\n        animation-play-state: running;\n        animation-name: ",";\n    }\n    .left{\n        font-weight: bold;\n    }     \n\n    .logoImg{\n        max-width:300px;\n        max-height:300px;\n        padding-bottom:2%;\n    \n    }\n    .resume{\n        cursor:pointer;\n        color:black;\n        font-weight:bolder;\n        \n    }\n    .resume-wrapper{\n        padding:2%;\n        background-color: #F5F5F5;\n\n    }\n    .social-container{\n        background-color:#F5F5F5;\n        padding:2%;\n        display:flex;\n        \n    }\n    .social{\n        padding-right:4px;\n        justify-content:inline-block;\n    }\n    .text-portfolio{\n        font-size:2.5rem;\n    }\n    .footer-wrapper{\n        height:auto;\n    }\n    @media only screen and (max-width:414px){\n        .logoImg{\n            max-width:200px;\n            max-height:200px;\n\n        }\n        .text-portfolio{\n            font-size:1.8rem;\n        }\n    }\n\n\n\n\n\n\n\n    "]);return en=function(){return n},n}function tn(){var n=Object(h.a)(["\n    height:auto;\n    width:100vw;\n\n"]);return tn=function(){return n},n}function an(){var n=Object(h.a)(["\n0% {\n    right: -300px;\n    opacity: 0;\n}\n100% {\n    right: 0;\n    opacity: 1;\n}\n\n"]);return an=function(){return n},n}function rn(){var n=Object(h.a)(["\n0% {\n    left: -300px;\n    opacity: 0;\n}\n\n100% {\n    left: 0;\n    opacity: 1;\n}\n\n\n"]);return rn=function(){return n},n}function on(){var n=Object(h.a)(["\n    0%{\n        opacity:0;\n    }\n    100%{\n        opacity:1;\n    }\n"]);return on=function(){return n},n}var cn=Object(f.b)(on()),ln=Object(f.b)(rn()),sn=Object(f.b)(an()),mn=(f.a.div(tn()),f.a.div(en(),cn,ln,sn)),dn=f.a.div(nn()),un=t(16),pn=function(n){function e(n){var t;return Object(s.a)(this,e),(t=Object(d.a)(this,Object(u.a)(e).call(this,n))).state={isLoading:!0,isIntro:!0},t.removeIntro.bind(Object(p.a)(t)),t}return Object(g.a)(e,n),Object(m.a)(e,[{key:"removeIntro",value:function(){setTimeout(function(){this.setState({isIntro:!1})}.bind(this),4e3)}},{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({isLoading:!1})}.bind(this),2e3),this.removeIntro()}},{key:"render",value:function(){return i.a.createElement(mn,null,i.a.createElement("div",null,this.state.isLoading?i.a.createElement(E,null):this.state.isIntro?i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"portfolio-screen"},i.a.createElement("img",{className:"logoImg animation-opacity",src:"/assets/img/logo.jpeg"}),i.a.createElement("h1",{className:"text-portfolio"},i.a.createElement("span",{className:"left animation-left"},"kartadibrata's"),i.a.createElement("span",{className:"right animation-right"},"portfolio")))):i.a.createElement("mainContainer",null,i.a.createElement("div",{className:"wrapper-all"},i.a.createElement(hn,null),i.a.createElement(C,{href:"#work-href",id:"home"}),i.a.createElement($,{id:"work-href",exp:"experiences"}),i.a.createElement(Z,{id:"projects"}),i.a.createElement(gn,{id:"resume"})))))}}]),e}(a.Component),gn=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer-wrapper"},i.a.createElement("div",{className:"resume-wrapper",id:this.props.id},i.a.createElement("h5",null,"Click ",i.a.createElement("a",{href:"https://docs.google.com/document/d/1sbcdL1-qMUAcnRjOG8i-b37UG_QnlFddfOhTDAL5J0I/edit?usp=sharing",className:"resume"},"here")," to see my resume!")),i.a.createElement("div",{className:"social-container"},i.a.createElement("div",{className:"social"},i.a.createElement(un.SocialIcon,{url:"http://linkedin.com/in/adykarta",network:"linkedin",bgColor:"grey",fgColor:"white",style:{height:35,width:35}})),i.a.createElement("div",{className:"social"},i.a.createElement(un.SocialIcon,{url:"https://wa.me/6281317250076",network:"whatsapp",bgColor:"grey",fgColor:"white",style:{height:35,width:35}})),i.a.createElement("div",{className:"social"},i.a.createElement(un.SocialIcon,{url:"https://gitlab.com/adykarta",network:"github",bgColor:"grey",fgColor:"white",style:{height:35,width:35}})),i.a.createElement("div",{className:"social"},i.a.createElement(un.SocialIcon,{url:"https://www.instagram.com/adykartaa/",network:"instagram",bgColor:"grey",fgColor:"white",style:{height:35,width:35}})),i.a.createElement("div",{className:"social"},i.a.createElement(un.SocialIcon,{url:"mailto:mkartadibrata@gmail.com",network:"mailto",bgColor:"grey",fgColor:"white",style:{height:35,width:35}}))))}}]),e}(i.a.Component),hn=function(n){function e(){return Object(s.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(g.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement(dn,null,i.a.createElement("div",{className:"menu-wrapper"},i.a.createElement(F.a,{href:"#home"},i.a.createElement("h6",{class:"menu-a"},"Home")),i.a.createElement(F.a,{href:"#experiences"},i.a.createElement("h6",{class:"menu-b"}," Experiences")),i.a.createElement(F.a,{href:"#projects"},i.a.createElement("h6",{class:"menu-c"},"Projects")),i.a.createElement(F.a,{href:"#resume"},i.a.createElement("h6",{class:"menu-d"},"Resume"))))}}]),e}(i.a.Component),fn=[{path:"/",exact:!0,name:"home",component:pn}];t(52);var bn=function(){return i.a.createElement(c.a,null,i.a.createElement(l.c,null,fn.map(function(n,e){return n.component?i.a.createElement(l.a,{key:e,path:n.path,exact:n.exact,name:n.name,render:function(e){return i.a.createElement(n.component,e)}}):null})))};t(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(bn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.5705df6f.chunk.js.map