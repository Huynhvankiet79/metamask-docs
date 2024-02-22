"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,y=p["".concat(o,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(y,c(c({ref:t},l),{},{components:r})):n.createElement(y,c({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},c="Variable: FilterAccountChainsStruct",s={unversionedId:"reference/keyring-api/variables/FilterAccountChainsStruct",id:"reference/keyring-api/variables/FilterAccountChainsStruct",title:"Variable: FilterAccountChainsStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/FilterAccountChainsStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/FilterAccountChainsStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/FilterAccountChainsStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/FilterAccountChainsStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: FilterAccountChainsResponseStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/FilterAccountChainsResponseStruct"},next:{title:"Variable: GetAccountRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/GetAccountRequestStruct"}},o={},u=[{value:"Source",id:"source",level:2}],l={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-filteraccountchainsstruct"},"Variable: FilterAccountChainsStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const FilterAccountChainsStruct: Struct<{\n  id: null | string | number;\n  jsonrpc: "2.0";\n  method: "keyring_filterAccountChains";\n  params: { id: string; chains: string[]; };\n  }, {\n  id: Struct<null | string | number, null>;\n  jsonrpc: Struct<"2.0", "2.0">;\n  method: Struct<"keyring_filterAccountChains", "keyring_filterAccountChains">;\n  params: Struct<{\n     chains: string[];\n     id: string;\n     }, {\n     chains: Struct<string[], Struct<string, null>>;\n     id: Struct<string, null>;\n  }>;\n  }>;\n')),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/internal/api.ts#L77"},"external/keyring-api/src/internal/api.ts:77")))}f.isMDXComponent=!0}}]);