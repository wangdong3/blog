(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{434:function(s,r,a){"use strict";a.r(r);var e=a(56),t=Object(e.a)({},(function(){var s=this,r=s.$createElement,a=s._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rocketmq"}},[s._v("RocketMQ")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[s._v("前言")]),s._v(" "),a("h3",{attrs:{id:"为什么使用mq-优点"}},[s._v("为什么使用MQ（优点）")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("服务之间的"),a("strong",[s._v("解耦")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("异步")]),s._v("的场景")])]),s._v(" "),a("li",[a("p",[s._v("高并发下"),a("strong",[s._v("削峰")])])])]),s._v(" "),a("h3",{attrs:{id:"mq的缺点"}},[s._v("MQ的缺点")]),s._v(" "),a("ol",[a("li",[s._v("服务"),a("strong",[s._v("可用性")]),s._v("降低")]),s._v(" "),a("li",[s._v("系统"),a("strong",[s._v("复杂性")]),s._v("增加")])]),s._v(" "),a("h2",{attrs:{id:"rocketmq设计浅析"}},[s._v("RocketMQ设计浅析")]),s._v(" "),a("h3",{attrs:{id:"几个概念"}},[s._v("几个概念")]),s._v(" "),a("p",[a("code",[s._v("nameServer")]),s._v("、 "),a("code",[s._v("broker")])]),s._v(" "),a("p",[a("code",[s._v("producer")]),s._v("、"),a("code",[s._v("consumer")])]),s._v(" "),a("p",[a("code",[s._v("topic")]),s._v("、"),a("code",[s._v("tag")]),s._v("、"),a("code",[s._v("queue")])]),s._v(" "),a("blockquote",[a("p",[s._v("消息的一个生命周期概括下来就是：生产、存储、消费")])]),s._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("graph")]),s._v(" LR\np"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(producer)")]),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("生产消息")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("m"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(MQ存储)")]),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("消费消息")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"消息生产"}},[s._v("消息生产")]),s._v(" "),a("p",[a("code",[s._v("producer")])]),s._v(" "),a("blockquote",[a("p",[s._v("消息生产者，生产消息的服务")])]),s._v(" "),a("h4",{attrs:{id:"消息消费"}},[s._v("消息消费")]),s._v(" "),a("p",[a("code",[s._v("consumer")])]),s._v(" "),a("blockquote",[a("p",[s._v("消息消费者，消费生产者投放在MQ中的消息")])]),s._v(" "),a("h4",{attrs:{id:"消息存储"}},[s._v("消息存储")]),s._v(" "),a("p",[a("code",[s._v("nameServer")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("nameServer")]),s._v("是"),a("code",[s._v("RocketMQ")]),s._v("的服务注册中心（类似"),a("code",[s._v("zookeeper")]),s._v("），用来保存"),a("code",[s._v("broker")]),s._v("元信息，管理"),a("code",[s._v("topic")]),s._v("和"),a("code",[s._v("broker")]),s._v("路由信息")])]),s._v(" "),a("p",[a("code",[s._v("broker")])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("broker")]),s._v("是消息存储中心，用于存储"),a("code",[s._v("producer")]),s._v("生产的消息，同时还存储一些元信息，包括队列信息、消费进度偏移量；")])]),s._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("graph")]),s._v(" TD\na"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(nameServer注册中心)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" broker集群\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("%%Master 与 Slave 的对应关系通过指定相同的BrokerName，不同的BrokerId 来定义，BrokerId为0表示Master，非0表示Slave")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(master)")]),s._v("\nb1"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(salve)")]),s._v("\nb2"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(salve)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\na"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("---")]),s._v("b\na"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("---")]),s._v("b1\na"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("---")]),s._v("b2\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("需先启动"),a("code",[s._v("nameServer")]),s._v("再启动"),a("code",[s._v("broker")]),s._v("；")]),s._v(" "),a("p",[s._v("（1）"),a("code",[s._v("broker")]),s._v("启动时，会注册到"),a("code",[s._v("nameServer")]),s._v("；")]),s._v(" "),a("p",[s._v("（2）"),a("code",[s._v("nameServer")]),s._v("和"),a("code",[s._v("broker")]),s._v("保持长链接，间隔30秒检查"),a("code",[s._v("broker")]),s._v("是否存活，超过两分钟没有心跳，则断开连接；")]),s._v(" "),a("p",[s._v("（3）"),a("code",[s._v("producer")]),s._v("生产消息，会根据"),a("code",[s._v("topic")]),s._v("到"),a("code",[s._v("nameServer")]),s._v("获取到"),a("code",[s._v("broker")]),s._v("的路由信息，进而和"),a("code",[s._v("broker")]),s._v("取得连接；")]),s._v(" "),a("p",[a("code",[s._v("topic")])]),s._v(" "),a("blockquote",[a("p",[s._v("消息主题，对存储的消息进行逻辑分类")])]),s._v(" "),a("p",[a("code",[s._v("tag")])]),s._v(" "),a("blockquote",[a("p",[s._v("消息标签，"),a("code",[s._v("topic")]),s._v("的下一层级对消息更细粒度的分类")])]),s._v(" "),a("p",[s._v("消费者可订阅指定主题，来消息该主题下的消息")]),s._v(" "),a("p",[s._v("同一个消费者组下的消费者实例订阅的消息"),a("code",[s._v("topic")]),s._v("，"),a("code",[s._v("tag")]),s._v("必须完全一致")]),s._v(" "),a("p",[s._v("订阅关系："),a("code",[s._v("rocketMQ")]),s._v("系统中消费者获取消息、处理消息的规则和状态配置。订阅关系按照消费者分组和主题粒度进行设计。")]),s._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("graph")]),s._v(" LR\np"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(producer)")]),s._v("\n\np"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(topic)")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" topic\nt"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("ta"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(tagA)")]),s._v("\nt"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("ta1"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(tagB)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" consumerGroupA\nc"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\nc1"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\nc2"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" consumerGroupB\nc3"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\nc4"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\nc5"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\nta"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("订阅")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c\nta"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("订阅")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c1\nta"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("订阅")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c2\n\n\nta1"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("订阅")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c3\nta1"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("订阅")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c4\nta1"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("订阅")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c5\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[a("code",[s._v("message queqe")])]),s._v(" "),a("blockquote",[a("p",[s._v("消息队列，消息实际存储单元容器，一个主题包含一个或多个队列")])]),s._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("graph")]),s._v(" LR\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" topic\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" queue\n    m"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(message...message...)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" queue1\n    m1"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(message...message...)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" queue2\n    m2"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(message...message...)")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" producer\na"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(producer)")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("m\na1"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(producer)")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("m1\na2"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(producer)")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("m2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" consumerGroup\nm"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\nm1"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("c1"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\nm2"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("c2"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"数据存储设计-持久化"}},[s._v("数据存储设计（持久化）")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("commitlog")]),s._v("文件：存储消息主体。写入消息过程中追求极致的"),a("strong",[s._v("磁盘顺序写")]),s._v("性能，所有主题的消息写入一个文件，并将第一个消息的物理偏移量作为文件名。")])]),s._v(" "),a("p",[s._v("（消息在文件中的物理地址 = 消息偏移量 - 文件名）")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[s._v("consumequeue")]),s._v("文件：逻辑消息队列，"),a("code",[s._v("commitlog")]),s._v("文件基于"),a("code",[s._v("topic")]),s._v("的索引文件，保存了指定"),a("code",[s._v("topic")]),s._v("下的队列消息在"),a("code",[s._v("commitlog")]),s._v("的"),a("code",[s._v("offset")]),s._v("、"),a("code",[s._v("size")]),s._v("、"),a("code",[s._v("tag")]),s._v("的"),a("code",[s._v("hashcode")])])]),s._v(" "),a("p",[s._v("（"),a("code",[s._v("commitLog")]),s._v(" 与 "),a("code",[s._v("consumequeue")]),s._v(" 文件的关联：消息直接进入"),a("code",[s._v("commitLog")]),s._v(" 文件，存储实际内容；之后 "),a("code",[s._v("broker")]),s._v(" 通过定时任务 "),a("code",[s._v("ReputService")]),s._v(" 每1ms将消息的偏移量写入 "),a("code",[s._v("consumequeue")]),s._v("。）")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[s._v("indexfile")]),s._v("为索引数据文件提供访问服务，根据"),a("code",[s._v("key")]),s._v("进行消息查询")])]),s._v(" "),a("h4",{attrs:{id:"producer端"}},[s._v("producer端")]),s._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("graph")]),s._v(" LR\np"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(producer)")]),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("写消息")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("b"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(broker)")]),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("写入")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("pc"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(PageCache)")]),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("-.")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("OS后台线程异步刷盘")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v(".->")])]),s._v("c"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(commitlog)")]),s._v("\npc"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("-.")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("ack")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v(".->")])]),s._v("p\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("subgraph")]),s._v(" 持久化\nc"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("消息位置写入")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("cq"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumequeue)")]),s._v("\nc"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")]),s._v("if"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(indexfile)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h4",{attrs:{id:"consumer端"}},[s._v("consumer端")]),s._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("graph")]),s._v(" LR\nc"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumer)")]),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("读消息")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("c1"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(consumequeue)")]),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("消息offset")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v("--\x3e")])]),s._v("cl"),a("span",{pre:!0,attrs:{class:"token text string"}},[s._v("(commitlog)")]),s._v("\ncl"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[s._v("-.")]),a("span",{pre:!0,attrs:{class:"token label property"}},[s._v("消息")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[s._v(".->")])]),s._v("c\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"faq"}},[s._v("FAQ")]),s._v(" "),a("h3",{attrs:{id:"高可用"}},[s._v("高可用")]),s._v(" "),a("p",[a("code",[s._v("namesvr")]),s._v("集群、 "),a("code",[s._v("broker")]),s._v("集群 + 主从")]),s._v(" "),a("h3",{attrs:{id:"如何保证消息不重复消费"}},[s._v("如何保证消息不重复消费")]),s._v(" "),a("p",[s._v("消息消费完，会发送确认信息，消息显示"),a("code",[s._v("consumed_success")]),s._v("。\n意外的情况，消息消费了，但是"),a("code",[s._v("MQ")]),s._v("刚好重启，消息没有消费成功的状态，就会再被消费一次。消费者保证，消费幂等。")]),s._v(" "),a("h3",{attrs:{id:"消息可靠性传输"}},[s._v("消息可靠性传输")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("生产者生产消息，可能由于网络问题，没有发送到"),a("code",[s._v("MQ")]),s._v("，程序会抛异常，重试机制")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("MQ")]),s._v("的问题，服务意外挂掉 ，持久化机制，在重启后将持久化数据加载到内存")])]),s._v(" "),a("li",[a("p",[s._v("消费者将消息弄丢，确认机制自动关闭改为手动，只有当消息消费完成，才发送确认"),a("code",[s._v("ack")])])])])])}),[],!1,null,null,null);r.default=t.exports}}]);