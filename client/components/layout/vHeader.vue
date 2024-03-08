<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/img/logo.png" alt="Nón Lá Tourist" class="navbar-logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <nuxt-link @click="navigateTo('/')" class="nav-link active" aria-current="page" href="">Home
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link @click="navigateTo('/tours/listTours')" href="" class=" nav-link active"
                            aria-current="page">Danh Sách Tour</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link @click="navigateTo('/areas/listAreas')" href="" class=" nav-link active"
                            aria-current="page">Danh Sách Khu Vực</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link @click="navigateTo('/users/listUser')" href="" class=" nav-link active"
                            aria-current="page">Danh Sách Người Dùng</nuxt-link>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <nuxt-link to="/auth/Login" class="mx-3"><font-awesome-icon :icon="['fas', 'user']" /></nuxt-link>
            </div>
        </div>
    </nav>
</div>

</template>

<script setup></script>

<style>
.navbar-logo {
    width: 50px; /* Điều chỉnh kích thước chiều rộng */
    height: auto; /* Chiều cao tự động điều chỉnh theo tỉ lệ */
    margin-right: 10px; /* Tùy chỉnh khoảng cách giữa logo và văn bản */
}

</style>
