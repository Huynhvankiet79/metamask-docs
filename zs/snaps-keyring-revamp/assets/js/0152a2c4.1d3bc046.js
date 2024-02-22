"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8236],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=o(r),f=a,y=l["".concat(u,".").concat(f)]||l[f]||m[f]||s;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83013:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const s={},i="Variable: RejectRequestRequestStruct",c={unversionedId:"reference/keyring-api/variables/RejectRequestRequestStruct",id:"reference/keyring-api/variables/RejectRequestRequestStruct",title:"Variable: RejectRequestRequestStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/RejectRequestRequestStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/RejectRequestRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/RejectRequestRequestStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/RejectRequestRequestStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: ListRequestsResponseStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/ListRequestsResponseStruct"},next:{title:"Variable: RejectRequestResponseStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/RejectRequestResponseStruct"}},u={},o=[{value:"Source",id:"source",level:2}],p={toc:o},l="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-rejectrequestrequeststruct"},"Variable: RejectRequestRequestStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const RejectRequestRequestStruct: Struct<{\n  id: null | string | number;\n  jsonrpc: "2.0";\n  method: "keyring_rejectRequest";\n  params: { id: string; };\n  }, {\n  id: Struct<null | string | number, null>;\n  jsonrpc: Struct<"2.0", "2.0">;\n  method: Struct<"keyring_rejectRequest", "keyring_rejectRequest">;\n  params: Struct<{\n     id: string;\n     }, {\n     id: Struct<string, null>;\n  }>;\n  }>;\n')),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/internal/api.ts#L214"},"external/keyring-api/src/internal/api.ts:214")))}m.isMDXComponent=!0}}]);