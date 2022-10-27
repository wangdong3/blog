(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{422:function(s,e,n){"use strict";n.r(e);var r=n(56),t=Object(r.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"vuepress搭建静态网站"}},[s._v("vuepress搭建静态网站")]),s._v(" "),n("ul",[n("li",[s._v("全局安装vuepress")])]),s._v(" "),n("blockquote",[n("p",[s._v("npm config set registry "),n("a",{attrs:{href:"https://registry.npm.taobao.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://registry.npm.taobao.org"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("npm config get registry")]),s._v(" "),n("p",[s._v("npm install -g vuepress")])]),s._v(" "),n("ul",[n("li",[s._v("初始化项目")])]),s._v(" "),n("blockquote",[n("p",[s._v("npm init -y")])]),s._v(" "),n("ul",[n("li",[s._v("新建docs文件夹\ndocs文件夹作为项目文档根目录，主要放置Markdown类型的文章和.vuepress文件夹。")])]),s._v(" "),n("blockquote",[n("p",[s._v("mkdir docs")])]),s._v(" "),n("ul",[n("li",[s._v("设置package.json"),n("br"),s._v("\nVuePress中有两个命令:"),n("br"),s._v("\nvuepress dev docs命令运行本地服务，通过访问http://localhost:8080即可预览网站;"),n("br"),s._v("\nvuepress build docs命令用来生成静态文件，默认情况下，放置在docs/.vuepress/dist目录中;"),n("br"),s._v("\n当然可以在docs/.vuepress/config.js中的dest字段来修改默认存放目录。"),n("br"),s._v("\n在这里将两个命令封装成脚本的方式，直接使用npm run dev和npm run build即可")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n  "scripts": {\n    "dev": "vuepress dev docs",\n    "build": "vuepress build docs"\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("创建.vuepress目录\n在docs目录中，创建.vuepress目录，.vuepress目录主要用于存放VuePress相关的文件。")])]),s._v(" "),n("li",[n("p",[s._v("创建config.js\n进入到.vuepress目录中，然后创建config.js，config.js是VuePress必要的配置文件\nconfig.js的主要配置包括网站的标题、描述等基本信息，以及主题的配置")])]),s._v(" "),n("li",[n("p",[s._v("创建public文件夹\n进入到.vuepress目录中，然后创建public文件夹，此文件夹主要放静态资源文件，例如favicons和 PWA的图标。")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);