"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3222],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=o(r),m=n,f=y["".concat(c,".").concat(m)]||y[m]||u[m]||p;return r?a.createElement(f,s(s({ref:t},l),{},{components:r})):a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,s=new Array(p);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[y]="string"==typeof e?e:n,s[1]=i;for(var o=2;o<p;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var a=r(87462),n=(r(67294),r(3905));const p={},s="Type alias: ObjectType<Schema>",i={unversionedId:"reference/keyring-api/type-aliases/ObjectType",id:"reference/keyring-api/type-aliases/ObjectType",title:"Type alias: ObjectType<Schema>",description:"Infer a type from an superstruct object schema.",source:"@site/snaps/reference/keyring-api/type-aliases/ObjectType.md",sourceDirName:"reference/keyring-api/type-aliases",slug:"/reference/keyring-api/type-aliases/ObjectType",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/ObjectType",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/type-aliases/ObjectType.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Type alias: ListRequestsResponse",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/ListRequestsResponse"},next:{title:"Type alias: RejectRequestRequest",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/RejectRequestRequest"}},c={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Source",id:"source",level:2}],l={toc:o},y="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(y,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"type-alias-objecttypeschema"},"Type alias: ObjectType",(0,n.kt)("inlineCode",{parentName:"h1"},"<Schema>")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type ObjectType<Schema>: Simplify<ExactOptionalize<Optionalize<{ [K in keyof Schema]: Infer<Schema[K]> }>>>;\n")),(0,n.kt)("p",null,"Infer a type from an superstruct object schema."),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Schema")," extends ",(0,n.kt)("inlineCode",{parentName:"td"},"ObjectSchema"))))),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/superstruct.ts#L48"},"external/keyring-api/src/superstruct.ts:48")))}u.isMDXComponent=!0}}]);