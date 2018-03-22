<template>
	<header>
	<div class="container">
		<el-row>
		  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">222</el-col>
		  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
		  	<ul class="nav">
		  		<router-link tag='li' to="/home"><a href="javascript:;">公司首页</a></router-link>
		  		<router-link tag='li' to="/home/about"><a href="javascript:;">企业简介</a></router-link>
		  		<router-link tag='li' to="/home/news"><a href="javascript:;">行业新闻</a></router-link>
		  		<router-link tag='li' to="/home/products"><a href="javascript:;">公司产品</a></router-link>
		  		<router-link tag='li' to="/home/technology"><a href="javascript:;">技术文档</a></router-link>
		  		<router-link tag='li' to="/home/contact"><a href="javascript:;">联系我们</a></router-link>
		  	</ul>
		  </el-col>
		</el-row>
	</div>
	</header>
	
</template>

<script>
//export default {
//	el:'.nav'
//}
</script>

<style>
	header{
	height: 80px;
	/* height: 60px; */
	/* line-height: 60px; */
	background: #fff;
	width: 100%;
	/* min-width: 1150px; */
	/* border-bottom: 1px solid #EAEAEA; */
	box-shadow: 0 1px 4px rgba(0,0,0,.05);
	border-color: rgba(0,0,0,.08);
	box-shadow: 0 1px 3px rgba(0,0,0,.03);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
}
header img{
	margin-top: 19px;
}
header .nav{
	height: 80px;
	font-size: 15px;
	float: right;
	margin: 0;
}
header .nav li{
	height: 80px;
	width: 77px;
	text-align: center;
	padding: 0;
	margin: 0;
	display: inline-block;
	vertical-align: middle;
	-webkit-transform: translateZ(0);  
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	-moz-transform: translateZ(0);
	transform: translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	-webkit-transition-property: color;
	transition-property: color;
	-webkit-transition-duration: 0.5s;
	-moz-transition-duration: 0.5s;
	transition-duration: 0.5s;
}

header .nav li:before {
	content: "";
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	color:#fff;
	background: rgba(93, 121, 11, 0.98);
	-webkit-transform: scaleY(0);
	-o-transform: scaleY(0);
	-moz-transform: scaleY(0);
	transform: scaleY(0);
	-webkit-transform-origin: 50% 0;
	-o-transform-origin: 50% 0;
	transform-origin: 50% 0;
	-webkit-transition-property: transform;
	-o-transition-property: transform;
	transition-property: transform;
	-webkit-transition-duration: 0.5s;
	transition-duration: 0.5s;
	-webkit-transition-timing-function: ease-out;
	transition-timing-function: ease-out;
	background: #de0f18;
}

header .nav li:hover:before, header .nav li:focus:before, header .nav li:active:before {
	-webkit-transform: scaleY(1);
	-o-transform: scaleY(1);
	transform: scaleY(1);
	-webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
	-moz-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
	transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}



header .nav li a{
	height: 80px;
	border-radius: 0px;
	color: #333;
	padding: 0;
	line-height: 80px;
	transition: 0.5s all;
	-webkit-transition: 0.5s all;
	-moz-transition: 0.5s all;
	-o-transition: 0.5s all;
	-ms-transition: 0.5s all;
	text-decoration: none;
}
header .nav li a:hover, header .nav li a:focus {
	text-decoration: none;
	color: white !important;
	background: #de0f18!important;
}

.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus{
	background-color: #de0f18;
}
</style>