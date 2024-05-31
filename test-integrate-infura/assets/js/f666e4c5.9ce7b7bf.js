"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[10632],{16301:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(74848),o=t(28453);const i={description:"Use WebSockets to subscribe to events."},r="Subscribe to events",c={id:"api/networks/polygon-pos/how-to/subscribe-to-events",title:"Subscribe to events",description:"Use WebSockets to subscribe to events.",source:"@site/services/api/networks/polygon-pos/how-to/subscribe-to-events.md",sourceDirName:"api/networks/polygon-pos/how-to",slug:"/api/networks/polygon-pos/how-to/subscribe-to-events",permalink:"/test-integrate-infura/services/api/networks/polygon-pos/how-to/subscribe-to-events",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/polygon-pos/how-to/subscribe-to-events.md",tags:[],version:"current",frontMatter:{description:"Use WebSockets to subscribe to events."},sidebar:"servicesSidebar",previous:{title:"Get test MATIC tokens",permalink:"/test-integrate-infura/services/api/networks/polygon-pos/how-to/get-test-tokens"},next:{title:"JSON-RPC methods",permalink:"/test-integrate-infura/services/api/networks/polygon-pos/json-rpc-methods/"}},a={},l=[{value:"Example event subscription",id:"example-event-subscription",level:3}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"subscribe-to-events",children:"Subscribe to events"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.a,{href:"/test-integrate-infura/services/api/learn/websockets",children:"WebSockets"})," to ",(0,n.jsx)(s.a,{href:"/test-integrate-infura/services/api/networks/polygon-pos/json-rpc-methods/subscription-methods/",children:"subscribe"})," to events\non the blockchain. For example, monitor an NFT smart contract to alert you when a new NFT is minted."]}),"\n",(0,n.jsx)(s.p,{children:"Stateless HTTP WebSockets are supported, however, we recommend using the WSS protocol to set up bidirectional stateful\nsubscriptions."}),"\n",(0,n.jsx)(s.p,{children:"You need to be aware of the following when sending HTTP RPC requests:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Silent failures - ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#pings_and_pongs_the_heartbeat_of_websockets",children:"Users need to manage client-side silent failures"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Load balancing - Unlike HTTP requests, WSS requests are not load-balanced to the fastest possible server."}),"\n",(0,n.jsx)(s.li,{children:"Retries - Retrying failed WebSocket requests typically requires custom JSON-RPC ID-based tracking, whereas support for\nretrying failed HTTP requests often is automatic, or easily configured."}),"\n",(0,n.jsxs)(s.li,{children:["Status codes - WebSockets use its own set of ",(0,n.jsx)(s.a,{href:"https://pkg.go.dev/github.com/gorilla/websocket#pkg-constants",children:"status codes"}),"\nto provide users with a disconnection reason. The service will respond with the standard\n",(0,n.jsx)(s.a,{href:"/test-integrate-infura/services/api/networks/ethereum/json-rpc-methods/#error-codes",children:"EVM response codes"})," for each JSON-RPC request."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Refer to the ",(0,n.jsx)(s.a,{href:"/test-integrate-infura/services/api/learn/websockets",children:"WebSockets"})," topic for more information about WebSockets, including pricing\nand use case information."]}),"\n",(0,n.jsx)(s.h3,{id:"example-event-subscription",children:"Example event subscription"}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["You can use the ",(0,n.jsx)(s.a,{href:"https://github.com/websockets/wscat",children:"WebSocket cat (wscat)"})," tool to make WebSocket calls."]})}),"\n",(0,n.jsx)(s.p,{children:"The following WebSocket subscription example fires a notification each time a new header is appended to the chain:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'$ wscat -c wss://polygon-mainnet.infura.io/ws/v3/YOUR-API-KEY\n> {"jsonrpc":  "2.0",  "id":  1,  "method":  "eth_subscribe",  "params":  ["newHeads"]}\n'})})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(96540);const o={},i=n.createContext(o);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);