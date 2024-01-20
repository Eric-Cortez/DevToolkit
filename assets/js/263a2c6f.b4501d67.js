"use strict";(self.webpackChunkdev_toolkit=self.webpackChunkdev_toolkit||[]).push([[907],{8291:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(5893),t=n(1151);const o={sidebar_position:8},l="CSS Basics",r={id:"Web-basics/css",title:"CSS Basics",description:"CSS (Cascading Style Sheets) is a styling language used to control the presentation of web documents. It enhances the look and feel of HTML elements. Here are some fundamental concepts:",source:"@site/docs/Web-basics/css.md",sourceDirName:"Web-basics",slug:"/Web-basics/css",permalink:"/DevToolkit/docs/Web-basics/css",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web-basics/css.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"webDevSidebar",previous:{title:"HTML Basics",permalink:"/DevToolkit/docs/Web-basics/html"},next:{title:"JS",permalink:"/DevToolkit/docs/Web-basics/javascript"}},a={},c=[{value:"Selectors",id:"selectors",level:2},{value:"Applying Styles",id:"applying-styles",level:3},{value:"Common Properties",id:"common-properties",level:2},{value:"Box Model",id:"box-model",level:2},{value:"Responsive Design",id:"responsive-design",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"css-basics",children:"CSS Basics"}),"\n",(0,i.jsx)(s.p,{children:"CSS (Cascading Style Sheets) is a styling language used to control the presentation of web documents. It enhances the look and feel of HTML elements. Here are some fundamental concepts:"}),"\n",(0,i.jsx)(s.h2,{id:"selectors",children:"Selectors"}),"\n",(0,i.jsx)(s.p,{children:"Selectors are patterns used to select and style HTML elements. Three main types:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Tags/Elements:"})," HTML elements (tags) act as selectors, enabling CSS rules to modify their appearances. Styles can enhance or completely transform the default look. For instance, the following css rule styles all ",(0,i.jsx)(s.code,{children:"<p>"})," element with a font size of 24px and a color of #333."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"p {\n   font-size: 24px;\n   color: #333;\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Classes:"})," When class attribute is added to an HTML tag, it modifies the tag's appearance, offering a versatile styling option for multiple tags. The class selector, identified by a period, can be used multiple times on a page. Example of a class declaration:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"  .highlight {\n      background-color: yellow;\n  }\n"})}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"IDs:"})," An ID selector uniquely identifies an element in an HTML document, naming and styling a specific part of the page layout. It is used only once on a page and starts with a pound sign (#).Example of an id declaration:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"  #header {\n  border-bottom: 1px solid #ccc;\n  }\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"applying-styles",children:"Applying Styles"}),"\n",(0,i.jsxs)(s.p,{children:["Styles can be applied inline, within an HTML document using the ",(0,i.jsx)(s.code,{children:"<style>"})," tag, or in an external stylesheet using the ",(0,i.jsx)(s.code,{children:"<link>"}),". It is best practice to use an external style sheet as shown below."]}),"\n",(0,i.jsx)(s.p,{children:"Example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'    <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <title>My Page</title>\n            <link rel="stylesheet" href="styles.css">\n        </head>\n        <body>\n            \x3c!-- Your HTML content here --\x3e\n        </body>\n    </html>\n'})}),"\n",(0,i.jsx)(s.h2,{id:"common-properties",children:"Common Properties"}),"\n",(0,i.jsx)(s.p,{children:"Some commonly used CSS properties include:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"color:"})," Sets the text color."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"font-size:"})," Sets the font size."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"margin:"})," Sets the margin space."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"padding:"})," Sets the padding space."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"border:"})," Sets the border properties."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"background-color:"})," Sets the background color."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"box-model",children:"Box Model"}),"\n",(0,i.jsx)(s.p,{children:"All HTML elements can be considered as boxes. The CSS box model consists of:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Content:"})," Actual content of the box."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Padding:"})," Space between content and border."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Border:"})," Border around the padding."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Margin:"})," Space outside the border."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://commons.wikimedia.org/wiki/File:Boxmodell-detail.png#/media/File:Boxmodell-detail.png",children:(0,i.jsx)(s.img,{src:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png",alt:"Boxmodell-detail.png"})})}),"\n",(0,i.jsxs)(s.p,{children:["By ",(0,i.jsx)(s.a,{href:"//commons.wikimedia.org/wiki/User:G%C3%BCnther_M._Apsel",children:"Matthias Apsel"})," - Own work, ",(0,i.jsx)(s.a,{href:"http://creativecommons.org/publicdomain/zero/1.0/deed.en",children:"CC0"}),", ",(0,i.jsx)(s.a,{href:"https://commons.wikimedia.org/w/index.php?curid=34932417",children:"Link"})]}),"\n",(0,i.jsx)(s.h2,{id:"responsive-design",children:"Responsive Design"}),"\n",(0,i.jsx)(s.p,{children:"CSS allows for the creation of responsive designs that adapt to different screen sizes. Using techniques like media queries, styles can be adjusted based on the device's characteristics."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"@media only screen and (max-width: 600px) {\n   body {\n      font-size: 14px;\n   }\n}\n"})}),"\n",(0,i.jsx)(s.p,{children:"Note: These are just the basics of CSS. As you delve deeper, you'll discover more advanced features and techniques to create stunning web designs."})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var i=n(7294);const t={},o=i.createContext(t);function l(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);