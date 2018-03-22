<template>
  <div id="app">  
  	<Header></Header>
  	<div class="contect"><router-view></router-view></div>  	
  	<Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
//import Content from './components/content.vue'
import Footer from './components/footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Footer
//  Content
  }
}
</script>

<style>
.contect{
	margin: 80px auto 0;
	border: 1px solid red ;
}
</style>
