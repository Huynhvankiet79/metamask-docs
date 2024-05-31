"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[79385],{60096:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=s(74848),o=s(28453);const n={description:"View your Infura usage stats."},r="View API request stats",i={id:"how-to/dashboard-stats",title:"View API request stats",description:"View your Infura usage stats.",source:"@site/developer-tools/dashboard/how-to/dashboard-stats.md",sourceDirName:"how-to",slug:"/how-to/dashboard-stats",permalink:"/test-integrate-infura/developer-tools/dashboard/how-to/dashboard-stats",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/developer-tools/dashboard/how-to/dashboard-stats.md",tags:[],version:"current",frontMatter:{description:"View your Infura usage stats."},sidebar:"dashboardSidebar",previous:{title:"Troubleshoot account issues",permalink:"/test-integrate-infura/developer-tools/dashboard/how-to/troubleshoot"},next:{title:"Submit a help ticket",permalink:"/test-integrate-infura/developer-tools/dashboard/how-to/submit-a-help-ticket"}},l={},d=[{value:"Specify stats to view",id:"specify-stats-to-view",level:2},{value:"Web3 stats charts",id:"web3-stats-charts",level:2},{value:"Requests Volume chart",id:"requests-volume-chart",level:3},{value:"Product Request Volumes",id:"product-request-volumes",level:3},{value:"Method Request Volumes",id:"method-request-volumes",level:3},{value:"Requests Activity",id:"requests-activity",level:3},{value:"Eth_call activity",id:"eth_call-activity",level:3},{value:"IPFS stats charts",id:"ipfs-stats-charts",level:2},{value:"Data Transfer Up",id:"data-transfer-up",level:3},{value:"Data Transfer Down",id:"data-transfer-down",level:3},{value:"Total Storage",id:"total-storage",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"view-api-request-stats",children:"View API request stats"}),"\n",(0,a.jsx)(t.p,{children:"The dashboard provides detailed analytics and real-time statistics about your API usage.\nYou can monitor the number of requests, track the most used methods, and identify any potential\nissues or bottlenecks.\nThis data is crucial for optimizing your applications and ensuring they run smoothly."}),"\n",(0,a.jsx)(t.h2,{id:"specify-stats-to-view",children:"Specify stats to view"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["In the top menu of the ",(0,a.jsx)(t.a,{href:"https://app.infura.io/",children:"Infura dashboard"}),", select ",(0,a.jsx)(t.strong,{children:"Stats"}),".\nThe stats page displays the total volume of requests sent to Infura over the specified time period.\nBy default, data is shown from the last 24 hours from all Web3 API keys."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"To change the API key, make a selection from the API keys dropdown."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"To change the stats time range, make a selection from the time dropdown.\nTime values are given in Coordinated Universal Time (UTC).\nFor Web3 API usage, you can choose from the following options:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Last 15 Minutes"})," - The last completed 15 minutes.\nThis updates once a minute."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Last 1 Hour"})," - The last fully completed hour, from 0 to 59 minutes and 59 seconds."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Last 24 Hours"})," - The last fully completed 24 consecutive hours.\nThis is the default."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Last 7 Days"})," - The last fully completed seven consecutive days.\nA day appears once it has completed."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Last 30 Days"})," - The last fully completed 30 days.\nA day appears once it has completed."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["To view your IPFS usage, select ",(0,a.jsx)(t.strong,{children:"IPFS Usage"})," in the toggle in the top-right corner.\nYou can choose to show data from the ",(0,a.jsx)(t.strong,{children:"Last 24 Hours"})," (default) or the ",(0,a.jsx)(t.strong,{children:"Last 7 Days"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"web3-stats-charts",children:"Web3 stats charts"}),"\n",(0,a.jsx)(t.p,{children:"You can view your Web3 API usage stats in the following charts and tables."}),"\n",(0,a.jsx)(t.h3,{id:"requests-volume-chart",children:"Requests Volume chart"}),"\n",(0,a.jsx)(t.p,{children:"This chart displays the total volume of requests sent to Infura using the selected API key(s) over\nthe selected time period."}),"\n",(0,a.jsx)(t.h3,{id:"product-request-volumes",children:"Product Request Volumes"}),"\n",(0,a.jsxs)(t.p,{children:["This chart displays the aggregate request volumes for the top five API methods called using the\nselected API key(s) over the selected time period.\nTo view stats for a particular product (network) instead of the default of all products, make a\nselection from the products dropdown.\nThis change will impact what API methods are displayed in the\n",(0,a.jsx)(t.a,{href:"#method-request-volumes",children:"Method Request Volumes"})," chart."]}),"\n",(0,a.jsx)(t.h3,{id:"method-request-volumes",children:"Method Request Volumes"}),"\n",(0,a.jsx)(t.p,{children:"This chart displays the aggregate request volumes for requests made on the top five networks using\nthe selected API key(s) over the selected time period.\nTo view stats for a particular method instead of the default of all methods, make a selection from\nthe methods dropdown."}),"\n",(0,a.jsx)(t.h3,{id:"requests-activity",children:"Requests Activity"}),"\n",(0,a.jsx)(t.p,{children:"This table displays the total request volumes and successful and failed requests, based on each\nproduct (network) and method called using the selected API key(s) over the selected time period."}),"\n",(0,a.jsxs)(t.p,{children:["For more details about the failure status codes, select the two diagonal arrows to the right of the\n",(0,a.jsx)(t.strong,{children:"FAILED REQUESTS (%)"})," values.\nThis opens the Failed Requests Breakdown table, which displays an aggregated count of failed API\nrequests, grouped by the returned status codes."]}),"\n",(0,a.jsx)(t.h3,{id:"eth_call-activity",children:"Eth_call activity"}),"\n",(0,a.jsxs)(t.p,{children:["This table displays the activities made on the ",(0,a.jsx)(t.code,{children:"eth_call"})," method, including contract addresses that\ninteracted with the selected API key(s).\nThis table only shows the ",(0,a.jsx)(t.code,{children:"eth_call"})," activity for the last 30 minutes, and is not impacted by any\ntime period selection."]}),"\n",(0,a.jsx)(t.p,{children:"To view smart contract details on Etherscan, select any contract address.\nA new tab opens with the details."}),"\n",(0,a.jsx)(t.h2,{id:"ipfs-stats-charts",children:"IPFS stats charts"}),"\n",(0,a.jsx)(t.p,{children:"You can view your IPFS usage stats in the following charts."}),"\n",(0,a.jsx)(t.h3,{id:"data-transfer-up",children:"Data Transfer Up"}),"\n",(0,a.jsx)(t.p,{children:"This chart displays the amount of data sent to the IPFS service using the selected API key(s) over\nthe selected time period."}),"\n",(0,a.jsx)(t.h3,{id:"data-transfer-down",children:"Data Transfer Down"}),"\n",(0,a.jsx)(t.p,{children:"This chart displays the amount of data retrieved from the IPFS service using the selected API key(s)\nover the selected time period."}),"\n",(0,a.jsx)(t.h3,{id:"total-storage",children:"Total Storage"}),"\n",(0,a.jsx)(t.p,{children:"This chart displays the total amount of data stored by the selected API key(s) over the selected\ntime period."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var a=s(96540);const o={},n=a.createContext(o);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);