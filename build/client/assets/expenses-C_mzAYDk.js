import{o as d,j as e,L as a,i as o,N as r,F as x,a as h,O as l}from"./components-DZCVqqbL.js";import{h as j,i as u}from"./index-D9KS-zZG.js";import{L as p,M as m}from"./MainHeader-CxQ5cGAi.js";function f({id:s,title:n,amount:t}){const i=d();function c(){confirm("Are you sure? Do you want to delete this item?")&&i.submit(null,{method:"delete",action:`/expenses/${s}`})}return i.state!=="idle"?e.jsx("article",{className:"expense-item locked",children:e.jsx("p",{children:"Deleting..."})}):e.jsxs("article",{className:"expense-item",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"expense-title",children:n}),e.jsxs("p",{className:"expense-amount",children:["$",t.toFixed(2)]})]}),e.jsxs("menu",{className:"expense-actions",children:[e.jsx("button",{onClick:c,children:"Delete"}),e.jsx(a,{to:s,children:"Edit"})]})]})}function g({expenses:s}){return e.jsx("ol",{id:"expenses-list",children:s.map(n=>e.jsx("li",{children:e.jsx(f,{id:n.id,title:n.title,amount:n.amount})},n.id))})}function L(){const s=o();return e.jsxs("header",{id:"main-header",children:[e.jsx(p,{}),e.jsx("nav",{id:"main-nav",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/expenses",end:!0,children:"Manage Expenses"})}),e.jsx("li",{children:e.jsx(r,{to:"/expenses/analysis",children:"Analyze Expenses"})})]})}),e.jsx("nav",{id:"cta-nav",children:e.jsx("ul",{children:e.jsxs("li",{children:[s&&e.jsx(x,{method:"post",action:"/logout",id:"logout-form",children:e.jsx("button",{className:"cta-alt",children:"Logout"})}),!s&&e.jsx(a,{to:"/auth",className:"cta",children:"Login"})]})})})]})}const E=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function b(){const n=h().pathname,t=o(),i=t&&t.length>0;return n.length<=10?e.jsxs(e.Fragment,{children:[e.jsx(l,{}),e.jsxs("main",{children:[e.jsx(L,{}),e.jsxs("section",{id:"expenses-actions",children:[e.jsxs(a,{to:"add",children:[e.jsx(j,{}),e.jsx("span",{children:"Add Expense"})]}),e.jsxs("a",{href:"/expenses/raw",children:[e.jsx(u,{}),e.jsx("span",{children:"Load Raw Data"})]})]}),i&&e.jsx(g,{expenses:t}),!i&&e.jsxs("section",{id:"no-expenses",children:[e.jsx("h1",{children:"No expenses found"}),e.jsxs("p",{children:["Start ",e.jsx(a,{to:"add",children:"adding some"})," today."]})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(m,{}),e.jsx(l,{})]})}function D(){return[{title:"RemixExpenses - The Complete App",description:"Manage your expenses with ease."}]}function k(){return[{rel:"stylesheet",href:E}]}export{b as default,k as links,D as meta};
