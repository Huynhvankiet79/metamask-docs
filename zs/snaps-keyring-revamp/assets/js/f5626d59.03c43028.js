"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||y[f]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={},i="Type alias: KeyringResponse",o={unversionedId:"reference/keyring-api/type-aliases/KeyringResponse",id:"reference/keyring-api/type-aliases/KeyringResponse",title:"Type alias: KeyringResponse",description:"Response to a call to submitRequest.",source:"@site/snaps/reference/keyring-api/type-aliases/KeyringResponse.md",sourceDirName:"reference/keyring-api/type-aliases",slug:"/reference/keyring-api/type-aliases/KeyringResponse",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/KeyringResponse",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/type-aliases/KeyringResponse.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Type alias: KeyringRequest",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/KeyringRequest"},next:{title:"Type alias: ListAccountsRequest",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/type-aliases/ListAccountsRequest"}},p={},c=[{value:"Source",id:"source",level:2}],l={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"type-alias-keyringresponse"},"Type alias: KeyringResponse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type KeyringResponse: Infer<*typeof* KeyringResponseStruct>;\n")),(0,a.kt)("p",null,"Response to a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"submitRequest"),"."),(0,a.kt)("p",null,"Keyring implementations must return a response with ",(0,a.kt)("inlineCode",{parentName:"p"},"pending: true")," if the\nrequest will be handled asynchronously. Otherwise, the response must contain\nthe result of the request and ",(0,a.kt)("inlineCode",{parentName:"p"},"pending: false"),"."),(0,a.kt)("p",null,"In the asynchronous case, the keyring can return a redirect URL and message\nto be shown to the user. The user can choose to follow the link or cancel\nthe request. The main use case for this is to redirect the user to the snap\ndapp to review the request."),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/api.ts#L177"},"external/keyring-api/src/api.ts:177")))}y.isMDXComponent=!0}}]);