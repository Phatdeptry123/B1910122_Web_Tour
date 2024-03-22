<template>
    <div class="container">
        <header>
            <component :is="isAdmin ? LayoutVHeader : LayoutVHeader_User" />
        </header>
        <slot />
        <footer>
            <LayoutVFotter />
        </footer>
    </div>
</template>

<script setup>
const isAdmin = true; // Thay đổi giá trị này dựa vào quyền admin của người dùng
import LayoutVHeader from '../components/layout/vHeader';
import LayoutVHeader_User from '../components/layout/vHeader_User';

const components = { LayoutVHeader, LayoutVHeader_User };
console.log(isAdmin);
</script>

<style></style>