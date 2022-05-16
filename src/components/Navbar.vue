<template>
  <div>
    <section>
      <nav
        class="navbar navbar-expand-lg navbar-light border-bottom"
      >
        <div class="container">
          <h1 class="fontPaytone mb-0">
            <router-link to="/wall" class="navbar-brand">MetaWall</router-link>
          </h1>
          <div class="btn-group">
            <img
              :src="headPhoto"
              class="mr-2 img-fluid rounded-circle"
              style="width:50px; height:50px;"
            />
            <button
              type="button"
              class="btn member border-bottom dropdown-toggle"
              data-toggle="dropdown"
              data-display="static"
              aria-expanded="false"
            >
              Member
            </button>
            <div class="dropdown-menu dropdown-menu-lg-right p-0">
              <button class="dropdown-item border rounded-0 text-center px-5 py-3" type="button">我的貼文牆</button>
              <button class="dropdown-item border rounded-0 text-center px-5 py-3" type="button">
                修改資料
              </button>
              <button class="dropdown-item border rounded-0 text-center px-5 py-3" type="button">
                登出
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headPhoto: 'https://photos.google.com'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Paytone+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@700&family=Paytone+One&display=swap');

.navbar-brand {
  font: normal normal normal 26px/36px Paytone One !important;
}
.member {
  font: normal normal bold 16px/19px Azeret Mono;
}
.border{
  border: 2px solid #000400 !important;
  &-bottom{
    border-bottom: 2px solid #000400 !important;
  }
}
.dropdown-toggle::after{
  display: none;
}
</style>
