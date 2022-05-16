<template>
  <div>
    <loading :active="isLoading" />
    <div class="card mb-5 rounded-0 border border-dark position-relative">
      <h2 class="text-center py-3 mb-0">我按讚的貼文</h2>
      <div
        class="position-absolute border border-dark border-2 w-100 py-4"
        style="z-index: -1; top: 10px; left: -10px; height: 72px"
      ></div>
    </div>
    <ul class="list-unstyled">
      <li>
        <div class="container-fluid">
          <div
            class="row card border border-dark shadow-black flex-row justify-content-start align-items-center"
          >
            <img
              src="img-fluid rounded-circle"
              class="col-md-1"
              style="height: 40px"
            />
            <div class="d-flex flex-column w-100 col">
              <a href="#">李維</a>
              <div class="d-flex justify-content-between">
                <span>
                  發文時間：{{ Date.now() | moment('YYYY-MM-DD h:mm') }}
                </span>
              </div>
            </div>
            <router-link to="/wall" class="btn col-md-2">
              <span class="material-icons text-primary">thumb_up</span>
              <span class="d-block" style="font-size: 14px">取消</span>
            </router-link>
            <router-link to="/wall" class="btn col-md-2">
              <span class="material-icons text-primary">arrow_circle_right</span>
              <span class="d-block" style="font-size: 14px">查看</span>
            </router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      msg: 'this is likes page'
    }
  },
  created () {
    this.isLoading = true
  },
  mounted () {
    this.isLoading = false
  }
}
</script>

<style lang="scss">
.card {
  box-shadow: 0px 3px 0px #000400;
  border: 2px solid #000400;
  border-radius: 8px;
}
.border {
  border: 2px solid #000400 !important;
}
</style>
