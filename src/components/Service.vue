<template>
    <RouterLink to="/users">
        <div class="main cursor-pointer h-[200px] py-3 rounded-3xl text-white flex  flex-col text-center justify-center flex-wrap content-center">
            <div class="text-center flex justify-center mb-4">
                <slot name="icon"></slot>
            </div>
            <h3 class="w-full text-2xl text-center">
                <slot name="title"></slot>
            </h3>
            <p class="text-[#7E848E]">
                توضیح مختصر در مورد لورم ایپسوم قرار گیرد
            </p>
        </div>    
    </RouterLink>
</template>
<script setup>
import { UserGroupIcon} from "@heroicons/vue/24/outline";
</script>
<style scoped>
.main{
    background: linear-gradient(225.27deg, rgba(2, 11, 31, 0.5) -0.06%, rgba(24, 32, 64, 0.5) 50%);
}
</style>