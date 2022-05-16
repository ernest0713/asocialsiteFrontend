<template>
  <div>
    <ul class="nav nav-tabs border-0 pl-3">
      <li class="nav-item" role="presentation">
        <router-link to="updateInfo" class="nav-link border bg-dark text-white"
          >暱稱修改</router-link
        >
      </li>
      <li class="nav-item" role="presentation">
        <router-link to="updatePwd" class="nav-link border bg-white text-dark"
          >重設密碼</router-link
        >
      </li>
    </ul>
    <div class="container border rounded-lg">
      <ValidationObserver v-slot="{ invalid, errors }">
        <form
          class="form-row flex-column justify-content-center align-items-center p-5"
          @submit.prevent="sendData()"
        >
          <ValidationProvider rules="required|min:5|max:15|confirmed:comfirmPwd|alpha_num" class="w-75">
            <label for="password" class="w-100 mb-3">
              輸入新密碼
              <input
                v-model="password"
                type="password"
                class="w-100 p-3 mt-1"
                name="Password"
                id="password"
              />
            </label>
          </ValidationProvider>
          <ValidationProvider rule="required" class="d-flex flex-column w-75" vid="comfirmPwd">
            <label for="comfirmPwd" class="w-100 mb-3">
              再次輸入
              <input
                v-model="comfirmPwd"
                type="password"
                class="w-100 p-3 mt-1"
                name="comfirmPwd"
                id="comfirmPwd"
              />
            </label>
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
/* eslint-disable camelcase */
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, max, min, confirmed, alpha_num } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: '{_field_}欄位需填寫'
})
extend('min', {
  ...min,
  message: '{_field_}至少 {length} 個字元以上'
})
extend('max', {
  ...max,
  message: '{_field_}需小於 {length} 個字元'
})
extend('confirmed', {
  ...confirmed,
  message: '{_field_}不一致'
})
extend('alpha_num', {
  ...alpha_num,
  message: '{_field_}需中英混合'
})

export default {
  data () {
    return {
      password: '',
      comfirmPwd: ''
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
    }
  },
  created () {
    this.sendData()
  }
}
</script>
<style>
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
</style>
