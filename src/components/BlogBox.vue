<template>
    <div class="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col bg-white">
        <div class="overflow-hidden h-48">
            <img 
                :src="data.image_url" 
                :alt="data.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
        </div>
        

        <div class="p-5 flex-grow flex flex-col">
            <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{{ data.title }}</h3>
            <div class="flex items-center text-sm text-gray-500 mb-3">
                <span class="ml-2">{{ data.author }}</span>
                <span>•</span>
                <span class="mr-2">{{ data.date }}</span>
            </div>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ data.text }}</p>
            <div class="flex items-center text-sm text-blue-500 mt-auto">
                <RouterLink class="cursor-pointer group" :to="{ path: `article/${data.id}` }">  
                    <span>مطالعه مقاله</span>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data:Object
});
</script>