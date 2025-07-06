<template>
  <section class="flex flex-col items-center text-center py-20 bg-gray-100">
    <!-- تصویر پروفایل -->
    <div
      class="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg"
    >
      <img
        src="../../public/img/hero-avatar.webp"
        alt="Profile"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- متن خوش آمدگویی -->
    <h1 class="text-3xl font-bold mt-4">
      سلام، من <span class="text-blue-500">سحر</span> هستم!
    </h1>

    <!-- متن انیمیشنی -->
    <p class="text-xl mt-2 text-gray-600">
      <Typed
        :options="typedOptions"
        class="text-lg font-semibold text-blue-700"
      />
    </p>
  </section>
</template>

<script setup>
import Typed from "vue3-typed-js";

const typedOptions = {
  strings: [
    "یک توسعه‌دهنده Vue هستم.",
    "با Tailwind کار می‌کنم.",
    "به طراحی مدرن علاقه دارم.",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
};
</script>
