"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[75856],{53692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(74848),a=t(28453);const i={description:"Learn about archive data.",sidebar_position:2},s="Archive data",o={id:"concepts/archive-data",title:"Archive data",description:"Learn about archive data.",source:"@site/services/concepts/archive-data.md",sourceDirName:"concepts",slug:"/concepts/archive-data",permalink:"/test-integrate-infura/services/concepts/archive-data",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/concepts/archive-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about archive data.",sidebar_position:2},sidebar:"servicesSidebar",previous:{title:"Failover protection",permalink:"/test-integrate-infura/services/concepts/failover-protection"},next:{title:"Filters and subscriptions",permalink:"/test-integrate-infura/services/concepts/filters-and-subscriptions"}},c={},d=[{value:"Full nodes",id:"full-nodes",level:3},{value:"Archive nodes",id:"archive-nodes",level:3},{value:"Methods requiring archive data",id:"methods-requiring-archive-data",level:3},{value:"Rate limits",id:"rate-limits",level:3},{value:"Custom, team, and growth plans",id:"custom-team-and-growth-plans",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"archive-data",children:"Archive data"}),"\n",(0,r.jsx)(n.p,{children:"Archive data is data on the blockchain that is older than 128 blocks."}),"\n",(0,r.jsxs)(n.p,{children:["Infura provides free access to archive data on Ethereum and most networks. Infura provides access to ",(0,r.jsx)(n.a,{href:"#full-nodes",children:"full nodes"}),"\nand ",(0,r.jsx)(n.a,{href:"#archive-nodes",children:"archive nodes"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"success",children:(0,r.jsx)(n.p,{children:"Archive data is automatically enabled and no further action is required by the user."})}),"\n",(0,r.jsx)(n.h3,{id:"full-nodes",children:"Full nodes"}),"\n",(0,r.jsx)(n.p,{children:"Full nodes maintain the current state of the blockchain and are responsible for providing data on request and executing smart contract transactions."}),"\n",(0,r.jsx)(n.p,{children:"Full nodes store enough data to recalculate the chain in the event of a chain reorg. Beyond that, full nodes prune their data; only storing the data required for verifying transactions older than 128 blocks."}),"\n",(0,r.jsx)(n.p,{children:"Pruning conserves disk space and helps with node sync time, thus reducing storage and computation costs. However, a pruned node cannot serve API requests for certain RPC methods older than 128 blocks."}),"\n",(0,r.jsx)(n.h3,{id:"archive-nodes",children:"Archive nodes"}),"\n",(0,r.jsx)(n.p,{children:"Data older than 128 blocks are stored on archive nodes on the blockchain. These are full nodes running in archive mode."}),"\n",(0,r.jsx)(n.p,{children:"Only an archive node can serve API requests for certain RPC methods older than 128 blocks. The Ethereum JSON-RPC and Websocket APIs include several methods which require access to an archive node."}),"\n",(0,r.jsx)(n.h3,{id:"methods-requiring-archive-data",children:"Methods requiring archive data"}),"\n",(0,r.jsx)(n.p,{children:"Requests for data older than the most recent 128 blocks require access to archive data."}),"\n",(0,r.jsx)(n.p,{children:"The following methods include a parameter for specifying a block number for the request."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"eth_getBalance"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"eth_getCode"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"eth_getTransactionCount"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"eth_getStorageAt"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"eth_call"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"rate-limits",children:"Rate limits"}),"\n",(0,r.jsxs)(n.p,{children:["Infura applies ",(0,r.jsx)(n.a,{href:"/test-integrate-infura/services/how-to/avoid-rate-limiting#infura-rate-limiting",children:"rate limits"})," to ensure network efficiency."]}),"\n",(0,r.jsx)(n.p,{children:"Requests for Ethereum archive data are more expensive and are therefore subject to different rate limits."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Free plan"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"25,000 archive requests per day**.**"}),"\n",(0,r.jsx)(n.li,{children:"100,000 total requests per day."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Rate limits kick in on archive requests after 25,000 per day. 75,000 standard requests are still available after this point."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If you need more archive requests, upgrade to the developer plan."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Developer plan"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"100,000 archive requests per day**.**"}),"\n",(0,r.jsx)(n.li,{children:"200,000 total requests per day."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Rate limits kick in on archive requests after 100,000 per day. 100,000 standard requests are still available after this point."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"If you need more archive requests, upgrade to the growth plan."})}),"\n",(0,r.jsx)(n.h4,{id:"custom-team-and-growth-plans",children:"Custom, team, and growth plans"}),"\n",(0,r.jsx)(n.p,{children:"No change. Same as a standard request"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);