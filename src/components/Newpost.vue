<template>
  <div>
    <loading :active="isLoading" />
    <div class="card mb-5 rounded-0 border border-dark position-relative">
      <h2 class="text-center py-3 mb-0">張貼動態</h2>
      <div
        class="position-absolute border border-dark border-2 w-100 py-4"
        style="z-index: -1; top: 10px; left: -10px; height: 72px"
      ></div>
    </div>
    <div class="card border border-dark shadow-black p-5">
      <ValidationObserver v-slot="{ invalid }">
        <form class="needs-validation" @submit.prevent="sendData">
          <div class="form-group mb-3">
            <ValidationProvider rules="required" v-slot="{ errors }">
              <label for="content">
                貼文內容
                <span class="text-danger">*</span>
              </label>
              <span class="ml-3 text-danger">{{ errors[0] }}</span>
              <textarea
                v-model="postData.content"
                class="form-control border border-dark"
                id="content"
                rows="5"
                placeholder="輸入您的貼文內容"
              ></textarea>
            </ValidationProvider>
          </div>
          <div class="input-group mb-2">
            <label for="imgUpload" class="btn btn-dark">
              上傳圖片
              <input
                class="d-none w-100 p-2"
                id="imgUpload"
                type="file"
                name="imgUpload"
                placeholder="請輸入網址"
                @change="fileUpload($event.target.files)"
              />
            </label>
          </div>
          <img
            v-if="src"
            :src="src"
            class="w-100 img-fluid mb-2"
            style="height: 157px"
          />
          <p v-show="tooBig" class="text-danger text-center mb-2">
            圖片檔案過大，僅限 1mb 以下檔案
          </p>
          <p v-show="fileType" class="text-danger text-center mb-2">
            圖片格式錯誤，僅限 JPG、PNG 圖片
          </p>
          <div class="d-flex justify-content-center mt-5">
            <a
              type="submit"
              class="w-75 btn btn-light border border-dark text-dark"
              :class="{ 'bg-secondary': invalid }"
              :disabled="invalid"
            >
              送出貼文
            </a>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */

import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '欄位需填寫'
})

export default {
  data () {
    return {
      postData: {
        user: '62741e710b0c853f222d8691',
        content: '',
        image: '',
        type: 'person',
        tags: ['test']
      },
      src: '',
      isLoading: false,
      tooBig: false,
      fileType: false
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    sendData () {
      const addPoatApi =
        'https://safe-brushlands-13562.herokuapp.com/posts/addPost'
      const postData = this.postData
      this.$http
        .post(addPoatApi, postData)
        .then((res) => {
          this.$router.push('wall')
          // console.log(res)
        })
        .catch((e) => console.log(e))
    },
    fileUpload (filedata) {
      const vm = this
      const size = filedata[0].size
      const type = filedata[0].type.split('/')[1]
      const imgurUploadApi = 'https://api.imgur.com/3/image'
      const form = new FormData()
      const config = {
        headers: {
          Authorization: 'Client-ID ' + process.env.VUE_APP_IMGID
        }
      }
      // console.log(filedata)
      size > 1024024 ? (vm.tooBig = true) : (vm.tooBig = false)
      type !== 'png' && type !== 'jpg'
        ? (vm.fileType = true)
        : (vm.fileType = false)
      if (vm.tooBig === false && vm.fileType === false) {
        form.append('image', filedata[0])
        vm.isLoading = true
        vm.$http
          .post(imgurUploadApi, form, config)
          .then((res) => {
            vm.isLoading = false
            if (res.data.success) {
              vm.src = res.data.data.link
              vm.postData.image = res.data.data.link
              console.log(res.data)
            } else {
              console.log('error:', res.data)
            }
          })
          .catch((err) => {
            vm.isLoading = false
            // console.log(err)
            if (err.response.status === 429) {
              // console.log(err.response)
              alert(err.response.data.data.error + '\nimgur 伺服器忙碌中，請稍後在試！')
            }
          })
      }
      // setTimeout(() => {
      //   vm.isLoading = false
      // }, 1000)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@700&display=swap');
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
