<template>
  <div class="">
    <p>Please login to your account</p>
    <p class="" v-if="loginError">{{ loginError }}</p>



    <form @submit="handleLogin">
      <div class="field">
        <label class="label">User Name</label>
        <div class="">
          <input
            type="text"
            class="input"
            name="username"
           v-model="users.username"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="">
          <input
            type="password"
            class="input"
            name="password"
            v-model="users.password"
          />
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary fa-lg gradient-custom-2 mb-3 my-2"
      >
        Đăng Nhập
      </button>
    </form>
    <a class="text-muted" href="#!">Forgot password?</a>
    <div class="d-flex align-items-center justify-content-center pb-4">
      <p class="mb-0 me-2">Don't have an account?</p>
      <nuxt-link to="Registration" class="btn btn-outline-danger">
        Tạo Tài Khoản
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const users = ref({
  username: "",
  password: "",
});
const loginError = ref("");

const handleLogin = async (event) => {
  const body = users.value
  event.preventDefault();
  console.log(users.value);
  const { data, error } = await useFetch(
    `${runtimeConfig.public.apiBase}/login`,
    { method: "post", body: body , watch:false}
  );
  if (error.value) {
    loginError.value = "Tài Khoản Hoặc Mật Khâu Không Đúng, Vui Lòng Nhập Lại";
    return;
  }
  alert("Đăng Nhập Thành Công")
  navigateTo("/");
};
</script>

<style></style>
