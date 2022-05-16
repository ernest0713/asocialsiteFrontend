<template>
  <div>
    <Navbar/>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
        <Sidemenu/>
      </div>
    </div>
    <BottomMenu/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidemenu from '@/components/Menu.vue'
import BottomMenu from '@/components/BottomMenu.vue'

export default {
  components: {
    // HelloWorld,
    Navbar,
    Sidemenu,
    BottomMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
