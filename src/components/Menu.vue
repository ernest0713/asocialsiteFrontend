<template>
  <div class="col-md-4 d-md-block d-none">
    <!-- col-md-5 d-md-block  -->
    <div class="border px-4 py-5">
      <div class="mb-4">
        <router-link
          to="/newpost"
          class="btn btn-primary menu-btn w-100 d-flex align-items-center justify-content-center p-3"
        >
          張貼動態
        </router-link>
      </div>
      <ul class="p-0 list-unstyled">
        <li class="h-100 border-0 mb-4">
          <router-link to="/perfile/updateInfo" class="text-decoration-none text-dark">
            <div class="d-flex align-items-center">
              <div
                class="d-flex align-items-center ml-2 mr-3"
                style="width: 50px; height: 50px"
              >
                <img
                  class="img-fluid rounded-circle border border-dark"
                  src="https://i.pravatar.cc/50"
                  alt="user1"
                  style="object-fit: cover"
                />
              </div>
              <p class="mt-2 fontNSTC">邊緣小杰</p>
            </div>
          </router-link>
        </li>
        <li class="h-100 mb-4">
          <router-link to="/followers" class="text-decoration-none text-dark">
            <div class="d-flex align-items-center">
              <div
                class="d-flex align-items-center justify-content-center rounded-circle border border-dark ml-2 mr-3 p-2 bg-light"
                style="width: 50px; height: 50px"
              >
                <span class="material-icons"> notifications_none </span>
              </div>
              <p class="mt-2 fontNSTC">追蹤名單</p>
            </div>
          </router-link>
        </li>
        <li class="h-100 border-0">
          <router-link to="/likes" class="text-decoration-none text-dark">
            <div class="media d-flex align-items-center">
              <div
                class="d-flex align-items-center justify-content-center rounded-circle border border-dark ml-2 mr-3 p-2 bg-light hover-primary"
                style="width: 50px; height: 50px"
              >
                <span class="material-icons"> thumb_up </span>
              </div>
              <p class="mt-2 fontNSTC">我按讚的文章</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.border {
  border: 2px solid #000400 !important;
}
.menu-btn {
  box-shadow: -2px 2px 0px #000400;
  background: #03438d 0% 0% no-repeat padding-box;
  border: 2px solid #000400;
  border-radius: 8px;
}
.fontNSTC {
  font: normal normal bold 16px/24px Noto Sans TC;
}
</style>
