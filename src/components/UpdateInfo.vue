<template>
  <div>
    <ul class="nav nav-tabs border-0 pl-3" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <router-link
          to="updateInfo"
          class="nav-link border bg-dark text-white"
          >暱稱修改</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link
          to="updatePwd"
          class="nav-link border bg-white text-dark"
          >重設密碼</router-link
        >
      </li>
    </ul>
    <div class="container border rounded-lg">
      <ValidationObserver v-slot="{ invalid, errors }">
        <form
          class="form-row flex-column justify-content-center align-items-center p-5"
        >
          <div class="border rounded-circle mb-4 headPhoto">
            <img :src="headPhotoSrc" />
          </div>
          <div class="input-group mb-2 justify-content-center mb-2">
            <label for="imgUpload" class="btn btn-dark">
              上傳大頭照
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
          <ValidationProvider rules="required" class="w-75">
            <label for="nickName" class="w-100 mb-3">
              暱稱
              <input
                v-model="nickName"
                type="text"
                class="w-100 p-3 mt-1"
                name="暱稱"
                id="nickName"
              />
            </label>
          </ValidationProvider>
          <ValidationProvider rule="required" class="d-flex flex-column w-75">
            <h6>性別</h6>
            <div class="d-flex">
              <input
                ref="male"
                v-model="sex"
                type="radio"
                class="mx-2"
                name="gender"
                value="male"
                id="male"
              />
              <label for="male" class="m-0">男性</label>
              <input
                v-model="sex"
                type="radio"
                class="mx-2"
                name="gender"
                id="female"
                value="female"
              /><label for="female" class="m-0">女性</label>
            </div>
          </ValidationProvider>
          <template v-if="invalid">
            <ul class="list-unstyled">
              <li
                v-for="(error, index) in errors"
                :key="index"
                class="text-danger"
              >
                {{ error[0] }}
              </li>
            </ul>
          </template>
          <button
            :class="{ 'bg-primary': invalid }"
            :disabled="invalid"
            type="submit"
            class="btn btn-warning btn-shadow border w-75 p-3 mt-2"
          >
            送出更新
          </button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: '{_field_}欄位需填寫'
})

export default {
  data () {
    return {
      nickName: '',
      sex: '',
      headPhotoSrc: ''
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    sendData () {},
    fileUpload (filedata) {
      console.log(filedata)
    },
    checked () {
      this.$refs.male.checked = true
      this.sex = 'male'
    }
  },
  created () {
    this.sendData()
  },
  mounted () {
    this.checked()
  }
}
</script>
<style>
.headPhoto {
  height: 107px;
  width: 107px;
}
.card {
  box-shadow: 0px 3px 0px #000400;
  border: 2px solid #000400;
  border-radius: 8px;
}
.border {
  border: 2px solid #000400 !important;
}
.btn-shadow {
  box-shadow: -2px 2px 0px #000400;
}
.btn-primary {
  background: #03438d 0% 0% no-repeat padding-box;
}
input[type='radio'] {
  height: 20px;
  width: 20px;
}
</style>
