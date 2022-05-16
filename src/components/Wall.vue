<template>
  <div>
    <loading :active="isLoading" />
    <div class="row">
      <div class="col-md-4 pr-md-1 mb-md-2 pr-3 mb-3">
        <select
          class="px-3 py-2 w-100"
          style="height: 3rem; border: 2px solid #000400"
        >
          <option selected>最新貼文</option>
        </select>
      </div>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <div class="input-group mb-3">
            <input
              type="text"
              @keyup.enter="getdata()"
              v-model.trim="keyword"
              class="form-control px-3 py-2 rounded-0"
              placeholder="搜尋貼文"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              style="height: 3rem; border: 2px solid #000400"
            />
            <div class="input-group-append" @click="getdata()">
              <button
                class="btn btn-primary py-0"
                type="button"
                id="button-addon2"
                style="
                  border: 2px solid #000400;
                  border-radius: 0px;
                  background-color: #03438d;
                "
              >
                <span class="material-icons"> search </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul v-if="postsData.length > 0" class="p-0">
      <li
        v-for="item in postsData"
        :key="item.id"
        class="card h-100 p-4 mb-3 border-2"
      >
        <div class="d-flex align-items-center mb-3">
          <img
            class="mr-3 rounded-circle"
            :src="item.userPhoto"
            alt="userImg"
            style="width: 50px; height: 50px"
          />
          <div class="d-flex flex-column mt-2">
            <a href="#" class="mb-0 fw-bold">{{ item.userName }}</a>
            <small class="text-muted">{{
              item.datetime_pub | moment('YYYY-MM-DD h:mm a')
            }}</small>
          </div>
        </div>
        <p>{{ item.content }}.&lt;</p>
        <img
          :src="item.image"
          alt="photo1"
          class="img-fluid rounded"
          style="
            border: 2px solid #000400;
            height: 157px;
            object-fit: cover;
            border-radirus: 8px;
          "
        />
        <template v-if="hasComment">
          <div class="my-3 d-flex align-items-center">
            <span class="material-icons text-primary"> thumb_up </span>
            <span class="ml-2">12</span>
          </div>
          <div class="d-flex">
            <img
              class="mr-3 rounded-circle"
              :src="item.userPhoto"
              alt="userImg"
              style="width: 45px; height: 45px"
            />
            <div class="input-group mb-3">
              <input
                type="text"
                @keyup.enter="sendComment()"
                v-model.trim="keyword"
                class="form-control px-3 py-2 rounded-0"
                placeholder="留言..."
                style="height: 40px; border: 2px solid #000400"
              />
              <div class="input-group-append" @click="sendCommentta()">
                <button
                  class="btn btn-primary py-0 px-5"
                  type="button"
                  id="button-addon2"
                  style="
                    border: 2px solid #000400;
                    border-radius: 0px;
                    background-color: #03438d;
                  "
                >
                  留言
                </button>
              </div>
            </div>
          </div>
          <ul class="list-unstyled">
            <li class="bg-light mb-3 rounded">
              <div class="d-flex align-items-center p-3">
                <img
                  class="mr-3 rounded-circle bg-dark"
                  style="width: 40px; height: 40px"
                />
                <div class="d-flex flex-column mt-2">
                  <a href="#" class="mb-0 fw-bold"> item.userName </a>
                  <small class="text-muted">{{
                    Date.now() | moment('YYYY-MM-DD h:mm a')
                  }}</small>
                </div>
              </div>
              <div style="margin-left: 4.5rem">
                <p class="pb-3">真的～我已經準備冬眠了</p>
              </div>
            </li>
          </ul>
        </template>
      </li>
    </ul>
    <div v-else class="w-100 border rounded">
      <div class="d-flex p-3">
        <span class="circle" style="--bgc: #de4b63; margin-right: 6px"></span>
        <span class="circle" style="--bgc: #faa722; margin-right: 6px"></span>
        <span class="circle" style="--bgc: #83c51d"></span>
      </div>
      <div class="d-flex align-items-center justify-content-center py-5 noData">
        <p class="text-muted">目前尚無動態，新增一則貼文吧！</p>
      </div>
    </div>
    <!-- Side menu -->
    <!-- Bottom menu -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      postsData: [],
      keyword: '',
      hasComment: false,
      isLoading: false
    }
  },
  methods: {
    getdata () {
      this.isLoading = true
      const filter = {
        keyword: this.keyword, // 搜尋關鍵字
        sortby: 'datetime_pub', // 本次只提供最新貼文排序
        limit: '', // 每頁幾筆，本次可不提供或強制default
        page: '' // 第幾頁開始，本次可不提供或強制default 或者可改 offset Lastid 之類
      }
      // console.log(msg, filter)
      const api = 'https://safe-brushlands-13562.herokuapp.com/posts/search'
      this.$http
        .post(api, filter)
        .then((res) => {
          this.isLoading = false
          this.postsData = res.data.payload.posts
          // console.log(this.postsData)
        })
        .catch((e) => {
          this.isLoading = false
          console.log(e)
        })
    }
  },
  created () {
    this.getdata()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
.card {
  box-shadow: 0px 3px 0px #000400;
  border: 2px solid #000400;
  border-radius: 8px;
}
.border {
  border: 2px solid #000400 !important;
}
.rounded {
  border-radius: 8px;
}
.noData {
  font: normal normal normal 16px/24px Noto Sans TC;
  border-top: 2px solid #000400;
}
.circle {
  width: 9px;
  height: 9px;
  border: 1px solid #707070;
  background-color: var(--bgc);
  border-radius: 9px;
}
</style>
