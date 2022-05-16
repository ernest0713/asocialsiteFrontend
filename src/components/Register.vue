<template>
  <div>
    <loading :active="isLoading" />
    <section class="vh-100 d-flex justify-content-center align-items-center">
      <div
        class="card card-login px-lg-7 px-3 bg-light border-2 shadow-gray rounded-0 py-7"
        style="width: 56rem"
      >
        <div class="row px-md-5 px-2">
          <div
            class="col-md-6 mr-9 d-md-flex justify-content-center align-items-center d-none"
          >
            <img src="../assets/banner.png" alt="signin" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h1
              class="logo h3 mb-3 m-auto d-block text-hidden text-center"
              style="height: 5rem"
            >
              MetaWall
            </h1>
            <p class="h4 text-center mb-4 font-weight-bold">註冊</p>
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="sendRegister">
                <ValidationProvider rules="required|min:2" v-slot="{ errors }">
                  <div class="form-group mb-3">
                    <label class="w-100" for="nickName">
                      <input
                        v-model="userName"
                        type="text"
                        class="form-control px-2 py-4 registerInput"
                        id="nickName"
                        aria-describedby="emailHelp"
                        name="暱稱"
                        placeholder="暱稱"
                      />
                    </label>
                    <span class="d-block text-danger">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <ValidationProvider rules="required|email" v-slot="{ errors }">
                  <div class="form-group mb-3">
                    <label class="w-100" for="userEmail">
                      <input
                        v-model="email"
                        type="email"
                        class="form-control px-2 py-4 registerInput"
                        id="userEmail"
                        aria-describedby="emailHelp"
                        name="帳號"
                        placeholder="Email"
                      />
                    </label>
                    <span class="d-block text-danger">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <ValidationProvider
                  :rules="{
                    required: true,
                    min: 8,
                    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                  }"
                  v-slot="{ errors }"
                >
                  <div class="form-group mb-3">
                    <label class="w-100" for="userPassword">
                      <input
                        v-model="password"
                        type="password"
                        class="form-control px-2 py-4 registerInput"
                        id="userPassword"
                        placeholder="Password"
                        name="密碼"
                      />
                    </label>
                    <span class="text-danger">{{ errors[0] }}</span>
                  </div>
                </ValidationProvider>
                <div class="mb-3">
                  <!-- 成功後要導向個人頁面 -->
                  <button
                    type="submit"
                    class="btn btn-primary w-100 registerBtn"
                    :class="{ 'bg-secondary': invalid }"
                    :disabled="invalid"
                  >
                    註冊
                  </button>
                </div>
                <div class="text-center">
                  <router-link class="text-dark" to="/login">登入</router-link>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, email, min, regex } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_}未填寫'
})
extend('email', {
  ...email,
  message: '帳號為 Email 格式，請填寫正確的 Email'
})
extend('min', {
  ...min,
  message: '{_field_}至少 {length} 個字元以上'
})
extend('regex', {
  ...regex,
  message: '{_field_}需使用英數混合，第一個字母需大寫及包含1個小寫字母'
})

export default {
  data () {
    return {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLoading: false
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  methods: {
    sendRegister () {
      const vm = this
      vm.isLoading = true
      const userData = {
        userName: vm.userName,
        email: vm.email,
        password: vm.password,
        confirmPassword: vm.password
      }
      const api = 'https://safe-brushlands-13562.herokuapp.com/users/sign_up'
      vm.$http.post(api, userData).then((res) => {
        console.log(res.data)
        if (res.data.status === 'success') {
          localStorage.setItem('token', res.data.user.token)
          vm.$router.push('/login')
          vm.isLoading = false
        }
      })
    }
  }
}
</script>

<style lang="scss">
.card-login {
  box-shadow: -8px 8px 0px #00040029;
}
.logo {
  background: url('../assets/MetaWall.png') no-repeat center center;
}
.text-hidden {
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
.registerInput {
  border: 2px solid #000400;
  border-radius: 0px;
}
.registerBtn {
  height: 3rem;
  background: #03438d 0% 0% no-repeat padding-box;
  border: 2px solid #000400;
  border-radius: 8px;
}
.py-7 {
  padding-top: 70px;
  padding-bottom: 70px;
}
</style>
