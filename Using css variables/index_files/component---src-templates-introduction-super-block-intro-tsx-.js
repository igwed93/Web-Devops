"use strict";(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[1184],{43914:function(e,t,l){var a=l(37711);function n(){return a.createElement("svg",{viewBox:"0 0 100 100",width:"25px"},a.createElement("polygon",{points:"-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196",style:{stroke:"var(--primary-color)",fill:"var(--primary-color)",strokeWidth:"1px"},transform:"matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)"}))}n.displayName="Caret",t.Z=n},22058:function(e,t,l){var a=l(37711),n=l(25497);function r(e){const{t:t}=(0,n.$G)(),{hushScreenReaderText:l=!1,...r}=e;return a.createElement(a.Fragment,null,a.createElement("svg",Object.assign({},l&&{"aria-hidden":!0},!l&&{"aria-label":t("icons.passed")},{height:"15",viewBox:"0 0 200 200",width:"15",xmlns:"http://www.w3.org/2000/svg"},r),a.createElement("g",{"aria-hidden":"true"},a.createElement("title",null,t("icons.passed")),a.createElement("circle",{cx:"100",cy:"99",fill:"var(--primary-color)",r:"95",stroke:"var(--primary-color)",strokeDasharray:"null"}),a.createElement("rect",{fill:"var(--primary-background)",height:"30",stroke:"var(--primary-background)",strokeDasharray:"null",transform:"rotate(-45, 120, 106.321)",width:"128.85878",x:"55.57059",y:"91.32089"}),a.createElement("rect",{fill:"var(--primary-background)",height:"30",stroke:"var(--primary-background)",strokeDasharray:"null",transform:"rotate(45, 66.75, 123.75)",width:"80.66548",x:"26.41726",y:"108.75"}))))}r.displayName="GreenPass",t.Z=r},59972:function(e,t,l){l.d(t,{k:function(){return n}});var a=l(37711);function n(e){let{now:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:"progress-bar-background"}),a.createElement("div",{className:"progress-bar-percent","data-testid":"fcc-progress-bar-percent",style:{width:t+"%"}}))}},44810:function(e,t,l){l.d(t,{w:function(){return o}});var a=l(37711),n=l(25497),r=l(23278),c=l(5323),s=l(88919);function o(){const e=(0,c.SS)("codeally_down"),{t:t}=(0,n.$G)();return e.on?a.createElement(r.bZ,{variant:"danger"},a.createElement("p",null,a.createElement(n.cC,{i18nKey:"intro:misc-text.course-maintenance"},a.createElement("a",{href:"https://www.freecodecamp.org/news/how-to-run-freecodecamps-relational-databases-curriculum-using-docker-vscode-and-coderoad",rel:"noreferrer",target:"_blank"},"placeholder"))),a.createElement(s.Z,{size:"small"}),a.createElement("p",null,t("intro:misc-text.progress-wont-save"))):null}},57761:function(e,t,l){l.r(t),l.d(t,{default:function(){return ue}});var a=l(90989);var n=function(e){return e&&e.length?(0,a.Z)(e):[]},r=l(37711),c=l(9377),s=l(25497),o=l(48185),i=l(54749),m=l(79448),u=l(90147),d=l(23278),p=l(98527),g=l(63302),h=l(87205),E=l(62111),k=l(61074),b=l(81636),f=l(22126),N=l(47307),v=l(90048),w=l(33660),y=l(43914);function C(){return r.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 389 254",fill:"none"},r.createElement("path",{d:"M194.5 0L388.5 254H307.5L194.5 99L78.5 254H0.5L194.5 0Z",style:{stroke:"var(--primary-color)",fill:"var(--primary-color)",strokeWidth:"1px"}}))}C.displayName="DropDown";var B=C;function x(e){const{t:t}=(0,s.$G)(),{hushScreenReaderText:l=!1,...a}=e;return r.createElement(r.Fragment,null,!l&&r.createElement("span",{className:"sr-only"},t("icons.not-passed")),r.createElement("svg",Object.assign({"aria-hidden":"true",height:"15",viewBox:"0 0 200 200",width:"15",xmlns:"http://www.w3.org/2000/svg"},a),r.createElement("g",null,r.createElement("title",null,t("icons.not-passed")),r.createElement("circle",{cx:"100",cy:"99",fill:"var(--primary-background)",r:"95",stroke:"var(--primary-color)",strokeDasharray:"null",strokeWidth:"10"}))))}x.displayName="GreenNotCompleted";var S=x,Z=l(22058),j=l(59972),L=l(42958),D=l(8463);function P(e){return e===String(p.SuperBlocks.RespWebDesignNew)}function F(e){return e===String(p.SuperBlocks.JsAlgoDataStructNew)}var I=l(39493),T=l(24530);const W=e=>{let{isCompleted:t}=e;return t?r.createElement(Z.Z,null):r.createElement(S,null)};function $(e){let{challengesWithCompleted:t,isProjectBlock:l,superBlock:a,blockTitle:n}=e;const{t:c}=(0,s.$G)(),o=P(a)||F(a),i=t.find((e=>!e.isCompleted)),m=!!t.find((e=>e.isCompleted));return o?r.createElement(r.Fragment,null,i&&r.createElement("div",{className:"challenge-jump-link"},r.createElement(T.Link,{className:"btn btn-primary",to:i.fields.slug},c(m?"buttons.resume-project":"buttons.start-project")," ",n&&r.createElement("span",{className:"sr-only"},n))),r.createElement("nav",{"aria-label":n?c("aria.steps-for",{blockTitle:n}):c("aria.steps")},r.createElement("ul",{className:"map-challenges-ul map-challenges-grid "},t.map(((e,t)=>r.createElement("li",{className:"map-challenge-title map-challenge-title-grid "+(l?"map-project-wrap":"map-challenge-wrap"),id:e.dashedName,key:"map-challenge "+e.fields.slug},l?r.createElement(T.Link,{to:e.fields.slug},e.title,r.createElement("span",{className:" badge map-badge map-project-checkmark"},r.createElement(W,{isCompleted:e.isCompleted}))):r.createElement(T.Link,{to:e.fields.slug,className:"map-grid-item "+(+e.isCompleted?"challenge-completed":"")},r.createElement("span",{className:"sr-only"},c("aria.step")),r.createElement("span",null,t+1),r.createElement("span",{className:"sr-only"},e.isCompleted?c("icons.passed"):c("icons.not-passed"))))))))):r.createElement("ul",{className:"map-challenges-ul"},t.map((e=>r.createElement("li",{className:"map-challenge-title "+(l?"map-project-wrap":"map-challenge-wrap"),id:e.dashedName,key:"map-challenge"+e.fields.slug},l?r.createElement(T.Link,{to:e.fields.slug},e.title,r.createElement("span",{className:"badge map-badge map-project-checkmark"},r.createElement(W,{isCompleted:e.isCompleted}))):r.createElement(T.Link,{to:e.fields.slug},r.createElement("span",{className:"badge map-badge"},r.createElement(W,{isCompleted:e.isCompleted})),e.title)))))}$.displayName="Challenges";var z=(0,o.$j)(null,(e=>(0,m.DE)({executeGA:f.pQ},e)))((0,s.Zh)()($));const{curriculumLocale:G,showUpcomingChanges:U,showNewCurriculum:R}=v,_=e=>{let{intros:t}=e;return r.createElement("div",{className:"block-description"},t.map(((e,t)=>r.createElement("p",{dangerouslySetInnerHTML:{__html:e},key:t}))))};function M(e){let{isCompleted:t}=e;return t?r.createElement(Z.Z,{hushScreenReaderText:!0}):r.createElement(S,{hushScreenReaderText:!0})}class O extends r.Component{constructor(e){super(e),this.handleBlockClick=this.handleBlockClick.bind(this)}handleBlockClick(){const{blockDashedName:e,toggleBlock:t}=this.props;(0,L.v)("block-toggle"),t(e)}render(){const{blockDashedName:e,completedChallengeIds:t,challenges:l,isExpanded:a,superBlock:n,t:c}=this.props,s=P(n),o=F(n),m="the-odin-project"==e,u=function(e){return e===String(p.SuperBlocks.CollegeAlgebraPy)}(n);let d=0;const g=l.map((e=>{let{challenge:l}=e;const{id:a}=l,n=t.some((e=>e===a));return n&&d++,{...l,isCompleted:n}})),h=l.some((t=>{let{challenge:l}=t;const a="take-home-projects"===e;return((0,I.HL)(l.challengeType)||(0,I.V6)(l.challengeType))&&!a})),E=(0,w.C)(G,n,{showNewCurriculum:R,showUpcomingChanges:U}),k=c("intro:"+n+".blocks."+e+".title"),f=c("intro:"+n+".blocks."+e+".intro"),N=c("intro:misc-text.expand"),v=c("intro:misc-text.collapse"),C=d===g.length,x=Math.floor(d/g.length*100),S=r.createElement("div",{"aria-hidden":"true",className:"progress-wrapper"},r.createElement("div",null,r.createElement(j.k,{now:x})),r.createElement("span",null,x+"%")),Z=r.createElement(r.Fragment,null," ",r.createElement(i.ZP,{id:e},r.createElement("div",{className:"block "+(a?"open":"")},r.createElement("div",{className:"block-header"},r.createElement("h3",{className:"big-block-title"},k),!E&&r.createElement("div",{className:"block-cta-wrapper"},r.createElement(b.rU,{className:"block-title-translation-cta",to:c("links:help-translate-link-url")},c("misc.translation-pending")))),r.createElement(_,{intros:f}),r.createElement("button",{"aria-expanded":a,className:"map-title",onClick:()=>{this.handleBlockClick()}},r.createElement(y.Z,null),r.createElement("div",{className:"course-title"},""+(a?v:N)," ",r.createElement("span",{className:"sr-only"},k)),r.createElement("div",{className:"map-title-completed course-title"},r.createElement(M,{isCompleted:C}),r.createElement("span",{"aria-hidden":"true",className:"map-completed-count"},d+"/"+g.length),r.createElement("span",{className:"sr-only"},","," ",c("learn.challenges-completed",{completedCount:d,totalChallenges:g.length})))),a&&r.createElement(z,{challengesWithCompleted:g,isProjectBlock:h,superBlock:n})))),L=r.createElement(r.Fragment,null,r.createElement(i.ZP,{id:e},r.createElement("div",{className:"block"},r.createElement("div",{className:"block-header"},r.createElement("h3",{className:"big-block-title"},k),!E&&r.createElement("div",{className:"block-cta-wrapper"},r.createElement(b.rU,{className:"block-title-translation-cta",to:c("links:help-translate-link-url")},c("misc.translation-pending")))),r.createElement(_,{intros:f}),r.createElement(z,{challengesWithCompleted:g,isProjectBlock:h,superBlock:n})))),D=r.createElement(r.Fragment,null," ",r.createElement(i.ZP,{id:e},r.createElement("div",{className:"block block-grid "+(a?"open":"")},r.createElement("h3",{className:"block-grid-title"},r.createElement("button",{"aria-expanded":a?"true":"false",className:"block-header","data-cy":g[0].block,onClick:()=>{this.handleBlockClick()}},r.createElement("span",{className:"block-header-button-text map-title"},r.createElement(M,{isCompleted:C}),r.createElement("span",null,k,r.createElement("span",{className:"sr-only"},", ",0===d?c("learn.not-started"):d===g.length?c("learn.completed"):x+"% "+c("learn.completed"))),r.createElement(B,null)),!a&&!C&&d>0&&S)),r.createElement("div",{className:"tags-wrapper"},!E&&r.createElement(b.rU,{className:"cert-tag",to:c("links:help-translate-link-url")},c("misc.translation-pending"))),a&&r.createElement(_,{intros:f}),a&&r.createElement(z,{challengesWithCompleted:g,isProjectBlock:h,superBlock:n,blockTitle:k})))),T=r.createElement(i.ZP,{id:e},r.createElement("div",{className:"block block-grid grid-project-block"},r.createElement("div",{className:"tags-wrapper"},r.createElement("span",{className:"cert-tag","aria-hidden":"true"},c("misc.certification-project")),!E&&r.createElement(b.rU,{className:"cert-tag",to:c("links:help-translate-link-url")},c("misc.translation-pending")," ",r.createElement("span",{className:"sr-only"},k," ",c("misc.certification-project")))),r.createElement("div",{className:"title-wrapper map-title"},r.createElement("h3",{className:"block-grid-title"},r.createElement(b.rU,{className:"block-header",onClick:()=>{this.handleBlockClick()},to:g[0].fields.slug},r.createElement(M,{isCompleted:C}),k," ",r.createElement("span",{className:"sr-only"},c("misc.certification-project"))))),r.createElement(_,{intros:f})));return r.createElement(r.Fragment,null,h&&!m?s||o||u?T:L:s||o||u?D:Z,(s||o||u)&&!h?null:r.createElement(b.LZ,{size:"medium"}))}}O.displayName="Block";var H=(0,o.$j)(((e,t)=>{const l=(0,D.RP)(t.blockDashedName);return(0,u.P1)(l,N.Fx,((e,t)=>({isExpanded:e,completedChallengeIds:t.map((e=>{let{id:t}=e;return t}))})))(e)}),(e=>(0,m.DE)({toggleBlock:D.th},e)))((0,s.Zh)()(O)),K=(l(15752),l(76217)),X=l.n(K),A=l(62400),J=l(57239),Q=l(92687),V=l(13807),q=l(41685),Y=l(92068);const ee={type:"info",message:V.b.HonestFirst},te={createFlashMessage:Q.eW,verifyCert:q.cu},le=e=>{let{createFlashMessage:t,currentCerts:l,superBlock:a,verifyCert:n,title:c,fetchState:o,isSignedIn:i,user:{isHonest:m,username:u}}=e;const{t:d}=(0,s.$G)(),[p,g]=(0,r.useState)(!1),[h,E]=(0,r.useState)(!1),k=Y.JI.find((e=>e.title===c));if(!k)throw Error("Certification "+c+" not found");const b=k.certSlug;(0,r.useEffect)((()=>{const{pending:e,complete:t}=o;t&&!e&&E(!0)}),[o]);const f=J.Z3,N=J.DL;(0,r.useEffect)((()=>{var e,t;g(null!==(e=null==l||null===(t=l.find((e=>f[e.certSlug]===N[a])))||void 0===t?void 0:t.show)&&void 0!==e&&e)}),[l]);const v="/certification/"+u+"/"+b;return r.createElement("div",{className:"block"},i&&r.createElement(X(),{block:!0,bsStyle:"primary",className:"cert-btn",href:p?v:"/settings#certification-settings",onClick:()=>!!p&&(e=>l=>(l.preventDefault(),p?(0,A.c4)(v):m?n(e):t(ee)))(b)},d(p&&h?"buttons.show-cert":"buttons.go-to-settings")," ",r.createElement("span",{className:"sr-only"},c)))};le.displayName="CertChallenge";var ae=(0,o.$j)((e=>(0,u.P1)(N._e,N.nl,N.Qi,((e,t,l)=>({currentCerts:e,fetchState:t,isSignedIn:l})))(e)),te)((0,s.Zh)()(le)),ne=l(44810);const{clientLocale:re}=v;var ce=function(e){let{superBlock:t}=e;const{t:l}=(0,s.$G)();return function(e){return e===String(p.SuperBlocks.RespWebDesign)}(t)?r.createElement(r.Fragment,null,r.createElement(d.bZ,{variant:"info"},r.createElement("p",null,l("intro:misc-text.legacy-desc")," ",r.createElement(b.rU,{sameTab:!1,to:"/learn/2022/responsive-web-design"},l("intro:misc-text.legacy-go-back"))))):function(e){return e===String(p.SuperBlocks.RelationalDb)}(t)?r.createElement(r.Fragment,null,r.createElement(ne.w,null),"english"!=re&&r.createElement(d.bZ,{variant:"info"},r.createElement("p",null,l("intro:misc-text.english-only"))),r.createElement(d.bZ,{variant:"info"},r.createElement("p",null,r.createElement(b.rU,{external:!0,sameTab:!1,to:"https://forum.freecodecamp.org/t/how-to-troubleshoot-the-web-version-of-the-relational-database-curriculum/500231"},l("intro:misc-text.read-database-cert-article"))))):r.createElement(r.Fragment,null)},se=l(25011);function oe(e){const{t:t}=(0,s.$G)(),{superBlock:l}=e,a=t("intro:"+l),{title:n,intro:c,note:o}=a;return r.createElement(r.Fragment,null,r.createElement("h1",{id:"content-start",className:"text-center big-heading"},n),r.createElement(b.LZ,{size:"medium"}),r.createElement(se.g,{className:"cert-header-icon",superBlock:l}),r.createElement(b.LZ,{size:"medium"}),c.map(((e,t)=>r.createElement("p",{key:t},e))),o&&r.createElement("div",{className:"alert alert-info",style:{marginTop:"2rem"}},o))}oe.displayName="SuperBlockIntro";var ie=oe;(0,i.XK)({offset:-40,scrollDuration:0});const me=e=>{const{t:t}=(0,s.$G)();(0,r.useEffect)((()=>(l(),e.tryToShowDonationModal(),setTimeout((()=>{(0,i.XK)({offset:-40,scrollDuration:400})}),0),()=>{(0,i.XK)({offset:-40,scrollDuration:0})})),[]);const l=()=>{const{resetExpansion:t,toggleBlock:l}=e;return t(),l((()=>{const{data:{allChallengeNode:{edges:t}},isSignedIn:l,currentChallengeId:a,location:n}=e;if(n.state&&"object"==typeof n.state&&Object.prototype.hasOwnProperty.call(n.state,"breadcrumbBlockClick"))return n.state.breadcrumbBlockClick;if(n.hash)return n.hash.replace("#","").replace("/","");const r=t[0];if(l){const e=t.find((e=>e.node.challenge.id===a));return e?e.node.challenge.block:r.node.challenge.block}return r.node.challenge.block})())},{data:{markdownRemark:{frontmatter:{superBlock:a,title:o,certification:m}},allChallengeNode:{edges:u}},isSignedIn:f,signInLoading:N,user:v}=e,w=u.map((e=>{let{node:t}=e;return t})),y=n(w.map((e=>{let{challenge:{block:t}}=e;return t}))),C=(0,g.c)(a),B=y,x=[p.SuperBlocks.RespWebDesign,p.SuperBlocks.CodingInterviewPrep,p.SuperBlocks.TheOdinProject,p.SuperBlocks.ProjectEuler];return r.createElement(r.Fragment,null,r.createElement(c.Z,null,r.createElement("title",null,C," | freeCodeCamp.org")),r.createElement(d.W2,null,r.createElement("main",null,r.createElement(d.X2,{className:"super-block-intro-page"},r.createElement(d.JX,{md:8,mdOffset:2,sm:10,smOffset:1,xs:12},r.createElement(b.LZ,{size:"large"}),r.createElement(ce,{superBlock:a}),r.createElement(ie,{superBlock:a}),r.createElement(b.LZ,{size:"large"}),r.createElement("h2",{className:"text-center big-subheading"},t("intro:misc-text.courses")),r.createElement(b.LZ,{size:"medium"}),r.createElement("div",{className:"block-ui"},B.map((e=>r.createElement(H,{key:e,blockDashedName:e,challenges:w.filter((t=>t.challenge.block===e)),superBlock:a}))),!x.includes(a)&&r.createElement(ae,{certification:m,superBlock:a,title:o,user:v})),!f&&!N&&r.createElement(r.Fragment,null,r.createElement(b.LZ,{size:"large"}),r.createElement(E.Z,{block:!0},t("buttons.logged-out-cta-btn"))),r.createElement(b.LZ,{size:"large"}),r.createElement("h3",{className:"text-center big-block-title",style:{whiteSpace:"pre-line"}},t("intro:misc-text.browse-other")),r.createElement(b.LZ,{size:"medium"}),r.createElement(k.Z,null),r.createElement(b.LZ,{size:"large"}))))),r.createElement(h.Z,{location:e.location}))};me.displayName="SuperBlockIntroductionPage";var ue=(0,o.$j)((e=>(0,u.P1)(N.km,N.Qi,N.Kt,N.nl,N.np,((e,t,l,a,n)=>({currentChallengeId:e,isSignedIn:t,signInLoading:l,fetchState:a,user:n})))(e)),(e=>(0,m.DE)({tryToShowDonationModal:f.Ij,resetExpansion:D._6,toggleBlock:e=>(0,D.th)(e)},e)))((0,s.Zh)()((0,r.memo)(me)))},33660:function(e,t,l){t.C=void 0;const a=l(98527);t.C=function(e,t,l){let{showNewCurriculum:n,showUpcomingChanges:r}=l;if(!e||!t)throw Error("Both arguments must be provided for auditing");return(0,a.getAuditedSuperBlocks)({showNewCurriculum:n,showUpcomingChanges:r,language:e}).includes(t)}}}]);
//# sourceMappingURL=component---src-templates-introduction-super-block-intro-tsx-1028d389325fdfd5a633.js.map