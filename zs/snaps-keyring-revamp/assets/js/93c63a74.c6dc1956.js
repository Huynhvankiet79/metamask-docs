"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9402],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(r),f=s,g=l["".concat(c,".").concat(f)]||l[f]||m[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[l]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const a={},i="Variable: ListRequestsResponseStruct",o={unversionedId:"reference/keyring-api/variables/ListRequestsResponseStruct",id:"reference/keyring-api/variables/ListRequestsResponseStruct",title:"Variable: ListRequestsResponseStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/ListRequestsResponseStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/ListRequestsResponseStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/ListRequestsResponseStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/ListRequestsResponseStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: ListRequestsRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/ListRequestsRequestStruct"},next:{title:"Variable: RejectRequestRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/RejectRequestRequestStruct"}},c={},u=[{value:"Source",id:"source",level:2}],p={toc:u},l="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"variable-listrequestsresponsestruct"},"Variable: ListRequestsResponseStruct"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const ListRequestsResponseStruct: Struct<{\n  account: string;\n  id: string;\n  request: { method: string; params?: Json[] | Record<string, Json>; };\n  scope: string;\n  }[], Struct<{\n  account: string;\n  id: string;\n  request: { method: string; params?: Json[] | Record<string, Json>; };\n  scope: string;\n  }, {\n  account: Struct<string, null>;\n  id: Struct<string, null>;\n  request: Struct<{\n     method: string;\n     params: Json[] | Record<string, Json>;\n     }, {\n     method: Struct<string, null>;\n     params: Struct<ExactOptionalTag | Json[] | Record<string, Json>, null>;\n  }>;\n  scope: Struct<string, null>;\n  }>>;\n")),(0,s.kt)("h2",{id:"source"},"Source"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/internal/api.ts#L157"},"external/keyring-api/src/internal/api.ts:157")))}m.isMDXComponent=!0}}]);