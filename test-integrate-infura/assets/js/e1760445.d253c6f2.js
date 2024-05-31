"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[45959],{67191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var s=n(74848),r=n(28453);const c={title:"Trace methods"},d="Trace methods",i={id:"api/networks/linea/json-rpc-methods/trace-methods/index",title:"Trace methods",description:"Infura provides access to the following trace API methods to allow users to gain insights into the execution of smart contracts and transactions:",source:"@site/services/api/networks/linea/json-rpc-methods/trace-methods/index.md",sourceDirName:"api/networks/linea/json-rpc-methods/trace-methods",slug:"/api/networks/linea/json-rpc-methods/trace-methods/",permalink:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/trace-methods/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/linea/json-rpc-methods/trace-methods/index.md",tags:[],version:"current",frontMatter:{title:"Trace methods"},sidebar:"servicesSidebar",previous:{title:"eth_unsubscribe",permalink:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/subscription-methods/eth_unsubscribe"},next:{title:"trace_block",permalink:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/trace-methods/trace_block"}},a={},o=[{value:"<code>trace</code>",id:"trace",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"trace-methods",children:"Trace methods"}),"\n",(0,s.jsx)(t.p,{children:"Infura provides access to the following trace API methods to allow users to gain insights into the execution of smart contracts and transactions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/trace-methods/trace_block",children:(0,s.jsx)(t.code,{children:"trace_block"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/test-integrate-infura/services/api/networks/linea/json-rpc-methods/trace-methods/trace_transaction",children:(0,s.jsx)(t.code,{children:"trace_transaction"})})}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Trace API is currently an open beta feature, available to paying Infura customers."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"trace_block"})," and ",(0,s.jsx)(t.code,{children:"trace_transaction"})," returns ",(0,s.jsx)(t.a,{href:"#trace",children:(0,s.jsx)(t.code,{children:"trace"})})," diagnostic information."]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"trace",children:(0,s.jsx)(t.code,{children:"trace"})}),"\n",(0,s.jsx)(t.p,{children:"Provides an ordered trace of the instructions executed by the Ethereum Virtual Machine (EVM) during the execution of a\nsmart contract transaction. Excludes precompiled contracts."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="Trace example"',children:'"trace":[\n  {\n    "action":{\n      "callType":"call",\n      "from":"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n      "gas":"0xffadea",\n      "input":"0x",\n      "to":"0x0100000000000000000000000000000000000000",\n      "value":"0x0"\n    },\n    "result":{\n      "gasUsed":"0x1e",\n      "output":"0x"\n    },\n    "subtraces":0,\n    "traceAddress":[\n    ],\n    "type":"call"\n  }\n]\n'})}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{width:"242",children:"Key"}),(0,s.jsx)("th",{children:"Value"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)("code",{children:"action"})," "]}),(0,s.jsx)("td",{children:"Transaction details."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"callType"})}),(0,s.jsxs)("td",{children:[" Whether the transaction is ",(0,s.jsx)("code",{children:"call"})," or ",(0,s.jsx)("code",{children:"create"}),"."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"from"})}),(0,s.jsx)("td",{children:"Address of the transaction sender."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"gas"})}),(0,s.jsx)("td",{children:"Gas provided by sender."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"input"})}),(0,s.jsx)("td",{children:"Transaction data."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"to"})}),(0,s.jsx)("td",{children:"Target of the transaction."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"value"})}),(0,s.jsx)("td",{children:"Value transferred in the transaction."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"result"})}),(0,s.jsx)("td",{children:"Transaction result."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"gasUsed"})}),(0,s.jsx)("td",{children:"Gas used by the transaction. Includes any refunds of unused gas."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"output"})}),(0,s.jsxs)("td",{children:["Return value of the contract call. Contains only the actual value sent by a ",(0,s.jsx)("code",{children:"RETURN"})," operation. If a ",(0,s.jsx)("code",{children:"RETURN"})," was not executed, the output is empty bytes."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"subTraces"})}),(0,s.jsx)("td",{children:"Traces of contract calls made by the transaction."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"traceAddress"})}),(0,s.jsx)("td",{children:"Tree list address of where the call occurred, address of the parents, and order of the current sub call."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"transactionHash"})}),(0,s.jsx)("td",{children:"Hash of the transaction."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"transactionPosition"})}),(0,s.jsx)("td",{children:"Transaction position."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"type"})}),(0,s.jsxs)("td",{children:["Whether the transaction is a ",(0,s.jsx)("code",{children:"CALL"})," or ",(0,s.jsx)("code",{children:"CREATE"})," series operation."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var s=n(96540);const r={},c=s.createContext(r);function d(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);