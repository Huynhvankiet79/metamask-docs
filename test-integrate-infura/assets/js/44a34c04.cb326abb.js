"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[48188],{90639:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=s(74848),c=s(28453);const i={description:"Learning about curl",sidebar_position:5},t="curl",l={id:"concepts/curl",title:"curl",description:"Learning about curl",source:"@site/services/concepts/curl.md",sourceDirName:"concepts",slug:"/concepts/curl",permalink:"/test-integrate-infura/services/concepts/curl",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/concepts/curl.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learning about curl",sidebar_position:5},sidebar:"servicesSidebar",previous:{title:"Ethereum transaction types",permalink:"/test-integrate-infura/services/concepts/transaction-types"},next:{title:"Gas",permalink:"/test-integrate-infura/services/concepts/gas"}},a={},o=[{value:"Install curl",id:"install-curl",level:3},{value:"curl commands",id:"curl-commands",level:3},{value:"curl analysis",id:"curl-analysis",level:3},{value:"curl command",id:"curl-command",level:4},{value:"-X flag",id:"-x-flag",level:4},{value:"-H flag",id:"-h-flag",level:4},{value:"-d flag",id:"-d-flag",level:4},{value:"Running curl",id:"running-curl",level:4},{value:"Output",id:"output",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"curl",children:"curl"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://curl.se/",children:"Client Uniform Resource Locator (curl)"})," command line tool sends API requests via URLs and returns responses."]}),"\n",(0,r.jsx)(n.p,{children:"Requests to Infura APIs commonly use curl."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["We recommend the resource ",(0,r.jsx)(n.a,{href:"https://everything.curl.dev",children:(0,r.jsx)(n.em,{children:"Everything curl"})}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"install-curl",children:"Install curl"}),"\n",(0,r.jsxs)(n.p,{children:["Your operating system may include curl, or you may need to ",(0,r.jsx)(n.a,{href:"https://everything.curl.dev/install",children:"download and install it"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"curl-commands",children:"curl commands"}),"\n",(0,r.jsx)(n.p,{children:"Many Infura requests take the form:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n    -X POST \\\n    -H "Content-Type: application/json" \\\n    -d \'{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"The code snippet above is an API call to Infura's Ethereum mainnet endpoint."}),"\n",(0,r.jsxs)(n.p,{children:["It requests the latest block number using the method ",(0,r.jsx)(n.code,{children:"eth_blockNumber"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"curl-analysis",children:"curl analysis"}),"\n",(0,r.jsx)(n.p,{children:"Let's step through each line of the code snippet to understand what's happening."}),"\n",(0,r.jsxs)(n.p,{children:["The first line uses the ",(0,r.jsx)(n.code,{children:"curl"})," command to send a request to the URL ",(0,r.jsx)(n.code,{children:"https://mainnet.infura.io/v3/"}),"YOUR-API-KEY."]}),"\n",(0,r.jsx)(n.h4,{id:"curl-command",children:"curl command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl https://mainnet.infura.io/v3/YOUR-API-KEY \\\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.code,{children:"YOUR-API-KEY"})," with a specific ",(0,r.jsx)(n.a,{href:"../../dashboard/create-api.md",children:"API key"}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"-x-flag",children:"-X flag"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"-X"})," flag specifies a common ",(0,r.jsx)(n.a,{href:"https://www.w3schools.com/tags/ref_httpmethods.asp",children:"HTTP method"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"-X POST \\\n"})}),"\n",(0,r.jsx)(n.h4,{id:"-h-flag",children:"-H flag"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"-H"})," or ",(0,r.jsx)(n.code,{children:"--header"})," flag specifies ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",children:"header"})," information."]}),"\n",(0,r.jsxs)(n.p,{children:["The example specifies the ",(0,r.jsx)(n.code,{children:"Content-Type"})," to be ",(0,r.jsx)(n.code,{children:"application/json"})," which means the requested resource is a JavaScript Object Notation (JSON) object."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'-H "Content-Type: application/json" \\\n'})}),"\n",(0,r.jsx)(n.h4,{id:"-d-flag",children:"-d flag"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"-d"})," or ",(0,r.jsx)(n.code,{children:"--data"})," flag specifies more information sent along with the curl request."]}),"\n",(0,r.jsxs)(n.p,{children:["In the example, the data object is a list of key value pairs in JSON format. This follows the ",(0,r.jsx)(n.a,{href:"https://www.jsonrpc.org/specification",children:"JSON RPC 2.0 specification "}),"which requires the four specific keys seen here."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"method"})," , ",(0,r.jsx)(n.code,{children:"params"})," , and ",(0,r.jsx)(n.code,{children:"id"})," values are modifiable."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"jsonrpc"})," value is required by the specification."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'-d \'{"jsonrpc":"2.0","method":"eth_blockNumber","params": [],"id":1}\'\n'})}),"\n",(0,r.jsx)(n.h4,{id:"running-curl",children:"Running curl"}),"\n",(0,r.jsx)(n.p,{children:"Enter curl code in a terminal window, or a command line tool from your computer's operating system and click return."}),"\n",(0,r.jsx)(n.h4,{id:"output",children:"Output"}),"\n",(0,r.jsx)(n.p,{children:"curl returns a response object if the request is successful."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","id":3,"result":"0xe0a763"}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>l});var r=s(96540);const c={},i=r.createContext(c);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);