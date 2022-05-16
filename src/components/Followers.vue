<template>
  <div>
    <loading :active="isLoading" />
    <div class="card mb-5 rounded-0 border border-dark position-relative">
      <h2 class="text-center py-3 mb-0">追蹤名單</h2>
      <div
        class="position-absolute border border-dark border-2 w-100 py-4"
        style="z-index: -1; top: 10px; left: -10px; height: 72px"
      ></div>
    </div>
    <ul class="list-unstyled">
      <li>
        <div class="card border border-dark shadow-black p-4 flex-row justify-content-start align-items-center">
          <img src="img-fluid rounded-circle" class="mr-3" style="width: 40px; height: 40px" />
          <div class="d-flex flex-column w-100">
            <a href="#">李維</a>
            <div class="d-flex justify-content-between">
              <p class="mb-0">追蹤時間：{{ Date.now() | moment('YYYY-MM-DD h:mm') }}</p>
              <p class="mb-0">
                您已追蹤90天
              </p>
            </div>
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
      msg: 'this is followers page',
      isLoading: false
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
.border {
  border-width: 2px !important;
}
.card {
  box-shadow: 0px 3px 0px #000400;
  border: 2px solid #000400;
  border-radius: 8px;
}
.border {
  border: 2px solid #000400 !important;
}
.postBtn {
  height: 3.5rem;
  box-shadow: -2px 2px 0px #000400;
  background: #03438d 0% 0% no-repeat padding-box;
  border: 2px solid #000400;
  border-radius: 8px;
}
.fontNSTC {
  font: normal normal bold 16px/24px Noto Sans TC;
}
.loading {
  width: 1rem;
  height: 1rem;
}
</style>
