<template>
    <Header />
    <div class="px-4 py-20 w-full h-full ">
        <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-4xl font-bold text-gray-800 mb-6">وبلاگ سپهر</h1>
            <p class="text-xl leading-relaxed text-gray-600">
                جایی که شما می‌توانید جدیدترین و علمی‌ترین مقالات در حوزه مهندسی نرم‌افزار را مطالعه کنید
            </p>
        </div>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style>
body {
  direction: rtl;
  font-family: 'Vazir', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>