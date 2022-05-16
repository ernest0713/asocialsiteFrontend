<template>
  <div
    class="list-group border border-dark rounded-pill fixed-bottom bg-secondary d-md-none mx-1"
  >
    <ul class="d-flex justify-content-around mb-0 px-0">
      <li class="list-group-item border-0 bg-secondary rounded-pill">
        <router-link to="/wall">
          <div class="rounded-circle border border-dark p-2 bg-white">
            <span class="material-icons material-icons-outlined"> home </span>
          </div>
        </router-link>
      </li>
      <li class="list-group-item border-0 bg-secondary">
        <router-link to="/user/follower">
          <div
            class="d-flex align-items-center justify-content-center rounded-circle border border-dark ml-2 mr-3 p-2 bg-light"
            style="width: 50px; height: 50px"
          >
            <span class="material-icons"> notifications_none </span>
          </div>
        </router-link>
      </li>
      <li class="list-group-item border-0 bg-secondary">
        <router-link to="/user/like">
          <div class="rounded-circle border border-dark p-2 bg-white">
            <span class="material-icons material-icons-outlined">
              thumb_up
            </span>
          </div>
        </router-link>
      </li>
      <li class="list-group-item border-0 bg-secondary rounded-pill">
        <router-link to="/newpost">
          <div class="rounded-circle border border-dark p-2 bg-primary">
            <span class="material-icons material-icons-outlined text-white">
              add
            </span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.bg-secondary{
  background-color: #EFECE7 !important;
}
</style>
