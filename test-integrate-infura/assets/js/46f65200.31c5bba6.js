"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[78068],{45957:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=i(74848),n=i(28453);const s={description:"Failover protection for API requests."},o="Failover protection",a={id:"api/networks/optimism/concepts/failover-protection",title:"Failover protection",description:"Failover protection for API requests.",source:"@site/services/api/networks/optimism/concepts/failover-protection.md",sourceDirName:"api/networks/optimism/concepts",slug:"/api/networks/optimism/concepts/failover-protection",permalink:"/test-integrate-infura/services/api/networks/optimism/concepts/failover-protection",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/optimism/concepts/failover-protection.md",tags:[],version:"current",frontMatter:{description:"Failover protection for API requests."},sidebar:"servicesSidebar",previous:{title:"Concepts",permalink:"/test-integrate-infura/services/networks/oiptimism-pos/concepts"},next:{title:"How to",permalink:"/test-integrate-infura/services/api/networks/optimism/how-to/"}},c={},l=[{value:"Partners and privacy policies",id:"partners-and-privacy-policies",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"failover-protection",children:"Failover protection"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Optimism failover support is available on Mainnet only."})}),"\n",(0,r.jsx)(t.p,{children:"Failover protection is available on the Optimism Mainnet network for customers on the Growth or Custom plans.\nThis feature ensures API requests are fulfilled even if Infura experiences a service issue or\noutage. This is achieved by routing requests to a select partner."}),"\n",(0,r.jsxs)(t.p,{children:["Failover protection is enabled on a per-request basis by adding the failover header to your API\nrequest (see ",(0,r.jsx)(t.a,{href:"/test-integrate-infura/services/api/networks/optimism/how-to/failover-protection-imp-optimism",children:"Enable API request forwarding"}),"). This gives\nyou control over which requests you'd like fulfilled by Infura's partner if failover protection should be needed."]}),"\n",(0,r.jsx)(t.h2,{id:"partners-and-privacy-policies",children:"Partners and privacy policies"}),"\n",(0,r.jsx)(t.p,{children:"No personal information is sent as part of partner requests, only information necessary to fulfill\nyour API request. This means that Infura's partner service provider can service your request, but not\nstore the content of your request."}),"\n",(0,r.jsx)(t.p,{children:"For any parameters required in an RPC request, these could be the type that describe the method,\naddresses, gas, and session."}),"\n",(0,r.jsxs)(t.p,{children:["Bware Labs (",(0,r.jsx)(t.a,{href:"https://bwarelabs.com/terms",children:"Terms of Service"}),", ",(0,r.jsx)(t.a,{href:"https://bwarelabs.com/privacy",children:"Privacy Policy"}),") is\nInfura's failover-protection partner. While Bware Labs supports most Infura methods, it does not yet support\nthe following methods:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_accounts"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_coinbase"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_protocolVersion"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_feeHistory"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_maxPriorityFeePerGas"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_sendTransaction"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_sign"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_syncing"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"eth_submitWork"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var r=i(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);