import Home from './components/Home.vue'
import About from './components/About.vue'
import News from './components/News.vue'
import Products from './components/Products.vue'
import Technology from './components/Technology.vue'
import Contact from './components/Contact.vue'
export default[
	{
		path:'/home',
		component:Home
	},
	{
		path:'/home/about',
		component:About
	},
	{
		path:'/home/news',
		component:News
	},
	{
		path:'/home/products',
		component:Products
	},
	{
		path:'/home/technology',
		component:Technology
	},
	{
		path:'/home/contact',
		component:Contact
	}
]
