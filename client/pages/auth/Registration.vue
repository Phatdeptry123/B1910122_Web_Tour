<template>
    <div>
        <section class="vh-100" style="background-color: #eee;">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" style="border-radius: 25px;">
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    <p class="" v-if="loginError">{{ signUpError }}</p>

                                        <form @submit="addUser" class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input v-model="formData.username" type="text" id="username"
                                                        name="username" class="form-control" />
                                                    <label class="form-label" for="form3Example1c">Tài Khoản</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input v-model="formData.name" type="text" id="name" name="name"
                                                        class="form-control" />
                                                    <label class="form-label" for="form3Example1c">Họ Tên</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input v-model="formData.email" type="email" id="email" name="email"
                                                        class="form-control" />
                                                    <label class="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input v-model="formData.password" type="password" id="form3Example4c"
                                                        class="form-control" />
                                                    <label class="form-label">Password</label>
                                                </div>
                                            </div>



                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" class="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            class="img-fluid" alt="Sample image">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script setup>

const formData = ref({
    username: '',
    email: '',
    password: '',
    name: '',
})

const runtimeConfig = useRuntimeConfig()
const addUser = async (event) => {
    event.preventDefault();
    const { data: users } = await useFetch(`${runtimeConfig.public.apiBase}/users/create`, { method: "post", body: formData.value })
    alert("Thêm Thành Công")
    navigateTo('/auth/Login')
}

</script>

<style></style>