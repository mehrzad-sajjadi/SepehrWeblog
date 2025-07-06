<template>
    <RouterLink
        :to="url"
        :class="{ active: $route.path === url }"
        class="router flex items-center gap-3 py-2 px-4 rounded-lg transition-colors"
    >
        <span class="w-6 h-6">
            <slot name="icon" />
        </span>
        <span>
            {{ title }}
        </span>
    </RouterLink>
</template>
<script setup>
const props = defineProps({
    url : String ,
    title : String
});
</script>

<style scoped>
.router:hover {
    background: linear-gradient(201.1deg,rgba(2, 11, 31, 0.5) 0%,rgba(24, 32, 64, 0.5) 86.08%);
}
.router.active {
    background: linear-gradient(
        201.1deg,rgba(2, 11, 31, 0.5) 0%,rgba(24, 32, 64, 0.5) 86.08%
    );
    color: oklch(0.54 0.25 262.44);
}
</style>
