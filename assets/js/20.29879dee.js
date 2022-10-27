(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{426:function(s,t,n){"use strict";n.r(t);var e=n(56),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"restful标准接口设计"}},[s._v("restful标准接口设计")]),s._v(" "),n("h2",{attrs:{id:"一、接口设计原则"}},[s._v("一、接口设计原则")]),s._v(" "),n("ol",[n("li",[s._v("使用"),n("code",[s._v("http")]),s._v("的方法："),n("code",[s._v("post delete put get")]),s._v("来代表资源的增删改查，并且使用"),n("code",[s._v("http状态码")]),s._v("来代表不同的结果")]),s._v(" "),n("li",[s._v("接口需要带版本号"),n("code",[s._v("v1")])]),s._v(" "),n("li",[s._v("接口需要有文档")]),s._v(" "),n("li",[s._v("接口需要做认证")]),s._v(" "),n("li",[s._v("接口需要无状态，不能依赖于会话")])]),s._v(" "),n("h2",{attrs:{id:"二、接口设计细则"}},[s._v("二、接口设计细则")]),s._v(" "),n("ol",[n("li",[n("p",[n("strong",[s._v("URL格式")]),s._v("：接口"),n("code",[s._v("URL定义")]),s._v("中，需要将接口请求的数据抽象为 "),n("strong",[s._v("资源")]),s._v("，接口即是对资源的增加、删除、修改、查询")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("资源名")]),s._v("：")]),s._v(" "),n("ol",[n("li",[s._v("中文名称的资源采用单数，英文名称的资源采用复数")]),s._v(" "),n("li",[s._v("不要在资源上动词描述，比如 "),n("code",[s._v("addUser")]),s._v("、"),n("code",[s._v("deleteUser")]),s._v("、"),n("code",[s._v("modifyUser")]),s._v("、"),n("code",[s._v("queryUser")])]),s._v(" "),n("li",[s._v("特殊情况需要制定行为的，在行为前面加上统一的actions关键字，例如"),n("code",[s._v("/actions/import")])]),s._v(" "),n("li",[s._v("两个词之间使用 "),n("code",[s._v("_")]),s._v("作为连接符")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("采用"),n("code",[s._v("http method")])])]),s._v(" "),n("ol",[n("li",[n("p",[n("strong",[s._v("get")]),s._v(" 方法代表读取，其请求是幂等的，不能修改资源的信息\n如果超长的参数"),n("code",[s._v("get")]),s._v("请求，可采用"),n("code",[s._v("post")]),s._v("请求，并在"),n("code",[s._v("header")]),s._v("中加上"),n("code",[s._v("x-http-method-override:get")]),s._v("，controller层仍是以"),n("code",[s._v("get")]),s._v("来处理\n"),n("code",[s._v("get")]),s._v("请求不允许直接带请求体")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("delete")]),s._v("  方法代表删除资源，删除成功返回"),n("code",[s._v("204")]),s._v("，不反回数据，可带请求体")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("post")]),s._v("  方法代表创建资源，成功返回"),n("code",[s._v("201")]),s._v("，并返回该资源给调用方")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("put")]),s._v("  方法代表覆盖资源，成功返回"),n("code",[s._v("204")]),s._v("，无响应体返回，可带请求体")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("patch")]),s._v("  方法代表修改部分资源，更新成功返回"),n("code",[s._v("204")]),s._v("，我响应体返回，可带请求体，推荐使用patch，大部分场景更新只是更新部分数据")])])]),s._v(" "),n("p",[s._v("注意：URL长度不要超过1024，浏览器会对URL长度进行限制")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("版本信息")]),s._v("：放到URL中"),n("code",[s._v("/api/v1/资源名/{id}")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("统一前缀")])]),s._v(" "),n("p",[s._v("接口都以"),n("code",[s._v("/api")]),s._v("开头，便于统一处理")])]),s._v(" "),n("li",[n("p",[s._v("分页及排序")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("URL中增加"),n("code",[s._v("offset")]),s._v("和"),n("code",[s._v("limit")]),s._v("参数用于分页")])]),s._v(" "),n("li",[n("p",[s._v("URL中增加"),n("code",[s._v("sort")]),s._v("参数用于排序，默认正序，带-表示倒序\n在响应体中：包括")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"offset"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"limit"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"total（非必传）"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[s._v("请求头\n推荐采用"),n("code",[s._v("JWT token")])])]),s._v(" "),n("li",[n("p",[s._v("请求体")])]),s._v(" "),n("li",[n("p",[s._v("文件上传采用"),n("code",[s._v("multipart/form-data")])])]),s._v(" "),n("li",[n("p",[s._v("其他均采用"),n("code",[s._v("application/json")]),s._v("格式，不得使用"),n("code",[s._v("application/x-www-form-urlencoded")])])]),s._v(" "),n("li",[n("p",[s._v("响应状态码\n使用"),n("code",[s._v("http")]),s._v("的响应状态码")])])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("2xx\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" 请求成功，响应体中带有资源的数据\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),s._v(" 资源创建成功\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202")]),s._v(" 请求已接收。对于耗时较长的需要后台异步处理的，服务在接收请求后，返回"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("202")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("204")]),s._v(" 响应中无内容，通常是在执行put post delete后，不返回资源的内容\n\n3xx\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" 如果接口废弃，迁移到新接口中，可以返回"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v("重定向\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),s._v(" 资源未修改。\n\n4xx\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v(" 错误请求，参数格式不正确\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),s._v(" 未授权\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("403")]),s._v(" 请求被拒绝\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" 资源不存在\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),s._v(" 如果接口永久废弃不用，可返回"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("410")]),s._v(".慎用\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("429")]),s._v(" 请求次数超限\n\n5xx\n\t"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" 服务器内部错误\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("ol",{attrs:{start:"10"}},[n("li",[s._v("响应体")])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"message"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);