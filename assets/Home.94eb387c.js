import{f as e,u as t,g as a,h as s,o as i,c as l,a as o,w as n,i as c,t as r,_ as f,p as v,j as d,F as u,k as m,l as k,m as p}from"./app.2f15e172.js";v("data-v-0cb9fda2");const h={key:0,class:"home-hero"},g={key:0,class:"figure"},y={key:1,id:"main-title",class:"title"},x={key:2,class:"description"};d();var _=e({setup(e){const{site:v,frontmatter:d}=t(),u=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),m=a((()=>d.value.heroText||v.value.title));return(e,t)=>s(u)?(i(),l("header",h,[s(d).heroImage?(i(),l("figure",g,[o("img",{class:"image",src:s(n)(s(d).heroImage),alt:s(d).heroAlt},null,8,["src","alt"])])):c("v-if",!0),s(m)?(i(),l("h1",y,r(s(m)),1)):c("v-if",!0),s(d).tagline?(i(),l("p",x,r(s(d).tagline),1)):c("v-if",!0),s(d).actionLink&&s(d).actionText?(i(),l(f,{key:3,item:{link:s(d).actionLink,text:s(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(d).altActionLink&&s(d).altActionText?(i(),l(f,{key:4,item:{link:s(d).altActionLink,text:s(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});_.__scopeId="data-v-0cb9fda2",v("data-v-e39c13e0");const I={key:0,class:"home-features"},T={class:"wrapper"},A={class:"container"},L={class:"features"},b={key:0,class:"title"},$={key:1,class:"details"};d();var j=e({setup(e){const{frontmatter:n}=t(),f=a((()=>n.value.features&&n.value.features.length>0)),v=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(f)?(i(),l("div",I,[o("div",T,[o("div",A,[o("div",L,[(i(!0),l(u,null,m(s(v),((e,t)=>(i(),l("section",{key:t,class:"feature"},[e.title?(i(),l("h2",b,r(e.title),1)):c("v-if",!0),e.details?(i(),l("p",$,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});j.__scopeId="data-v-e39c13e0",v("data-v-30918238");const w={key:0,class:"footer"},C={class:"container"},F={class:"text"};d();var q=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),l("footer",w,[o("div",C,[o("p",F,r(s(a).footer),1)])])):c("v-if",!0)}});q.__scopeId="data-v-30918238",v("data-v-32eddf2f");const z={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};d();var D=e({setup:e=>(e,t)=>{const a=k("Content");return i(),l("main",z,[o(_),p(e.$slots,"hero",{},void 0,!0),o(j),o("div",B,[o(a)]),p(e.$slots,"features",{},void 0,!0),o(q),p(e.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-32eddf2f";export default D;