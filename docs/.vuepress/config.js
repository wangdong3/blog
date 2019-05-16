module.exports = {
	title:'文档管理',
	description:'文档管理',
	base: '/blog/',
	host: 'localhost',
    port: 8086,
	themeConfig:{

		logo: '/img/logo.png',
		nav:[	
		  //{text: 'Home', link: '/'},
		  {text: 'Share', link: '/share/'},
		  {text: 'CSDN', link: 'http://blog.csdn.net'},
		  {text: 'Github', link: 'https://github.com/wangdong3'}
		],
		sidebar: {
		  '/share': [
		    {
			  title:'vuepress相关',
			  collapsable:true,
			  children:[
				'/share/vuepress搭建静态网站'
			  ]
		    },
			{
			  title:'Java',
			  collapsable: true,
			  children:[
				'/share/java/多线程',
				'/share/java/jdk8新特性',
				'/share/java/设计模式',
			   
			  ]
			},
			{
			  title:'数据库',
			  collapsable: true,
			  children:[
				'/share/数据库/执行计划',
				'/share/数据库/索引',
				'/share/数据库/执行计划',
			  ]
			},
			{
			  title:'Redis',
			  collapsable: true,
			  children:[
				'/share/Redis',
			  ]
			},
			{
			  title:'ES',
			  collapsable: true,
			  children:[
				'/share/es',
			  ]
			},
			{
			  title:'知识点',
			  collapsable: true,
			  children:[
				'/share/知识点',
			  ]
			},
			{
			  title:'SpringBoot',
			  collapsable: true,
			  children:[
				'/share/springboot',
			  ]
			}
		  ]
		},
		// 这是嵌套标题链接，自动显示当前激活（导航）页面标题的链接，即显示深度（h1-h6的深度）
        sidebarDepth: 0,
	lastUpdated: 'Last Updated', 
		serviceWorker: true
	},
  markdown: {
	lineNumbers: true,
	toc: { includeLevel: [2, 3, 4, 5, 6] }
  },
}