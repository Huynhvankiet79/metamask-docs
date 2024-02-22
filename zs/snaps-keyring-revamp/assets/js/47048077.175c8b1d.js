"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),y=a,h=l["".concat(o,".").concat(y)]||l[y]||g[y]||s;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=y;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[l]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={},i="Variable: CreateAccountResponseStruct",c={unversionedId:"reference/keyring-api/variables/CreateAccountResponseStruct",id:"reference/keyring-api/variables/CreateAccountResponseStruct",title:"Variable: CreateAccountResponseStruct",description:"Source",source:"@site/snaps/reference/keyring-api/variables/CreateAccountResponseStruct.md",sourceDirName:"reference/keyring-api/variables",slug:"/reference/keyring-api/variables/CreateAccountResponseStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/CreateAccountResponseStruct",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/variables/CreateAccountResponseStruct.md",tags:[],version:"current",frontMatter:{},sidebar:"snapsSidebar",previous:{title:"Variable: CreateAccountRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/CreateAccountRequestStruct"},next:{title:"Variable: DeleteAccountRequestStruct",permalink:"/zs/snaps-keyring-revamp/snaps/reference/keyring-api/variables/DeleteAccountRequestStruct"}},o={},p=[{value:"Source",id:"source",level:2}],u={toc:p},l="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-createaccountresponsestruct"},"Variable: CreateAccountResponseStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const CreateAccountResponseStruct: Struct<{\n  address: string;\n  id: string;\n  methods: (\n     | "personal_sign"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4"\n     | "eth_prepareUserOperation"\n     | "eth_patchUserOperation"\n     | "eth_signUserOperation")[];\n  options: Record<string, Json>;\n  type: "eip155:eoa" | "eip155:erc4337";\n  }, {\n  address: Struct<string, null>;\n  id: Struct<string, null>;\n  methods: Struct<(\n     | "personal_sign"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4"\n     | "eth_prepareUserOperation"\n     | "eth_patchUserOperation"\n     | "eth_signUserOperation")[], Struct<\n     | "personal_sign"\n     | "eth_sign"\n     | "eth_signTransaction"\n     | "eth_signTypedData_v1"\n     | "eth_signTypedData_v3"\n     | "eth_signTypedData_v4"\n     | "eth_prepareUserOperation"\n     | "eth_patchUserOperation"\n     | "eth_signUserOperation", {\n     eth_patchUserOperation: "eth_patchUserOperation";\n     eth_prepareUserOperation: "eth_prepareUserOperation";\n     eth_sign: "eth_sign";\n     eth_signTransaction: "eth_signTransaction";\n     eth_signTypedData_v1: "eth_signTypedData_v1";\n     eth_signTypedData_v3: "eth_signTypedData_v3";\n     eth_signTypedData_v4: "eth_signTypedData_v4";\n     eth_signUserOperation: "eth_signUserOperation";\n     personal_sign: "personal_sign";\n  }>>;\n  options: Struct<Record<string, Json>, null>;\n  type: Struct<"eip155:eoa" | "eip155:erc4337", {\n     eip155:eoa: "eip155:eoa";\n     eip155:erc4337: "eip155:erc4337";\n  }>;\n  }> = KeyringAccountStruct;\n')),(0,a.kt)("h2",{id:"source"},"Source"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/keyring-api/blob/a868ea2/src/internal/api.ts#L70"},"external/keyring-api/src/internal/api.ts:70")))}g.isMDXComponent=!0}}]);