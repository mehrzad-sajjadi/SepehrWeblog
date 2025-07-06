<template>
    <Header></Header>
    <div class="max-w-3xl mx-auto py-8 px-4">
        <!-- بخش مقاله -->
        <article class="mb-12">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
                {{ blog.title }}                 
            </h1>
            
            <div class="flex items-center mb-6 text-gray-600">
                <span class="ml-2">
                    {{ blog.author }}  
                </span>
                <span class="mx-2">•</span>
                <span>
                    {{ blog.date }}  
                </span>
            </div>
            
            <img 
                :src="blog.image_url" 
                alt="Vue.js" 
                class="w-full h-64 object-cover rounded-lg mb-8"
            >
            
            <div class="prose max-w-none text-gray-700">
                <!-- <p>Vue.js یک فریمورک پیشرفته جاوااسکریپت برای ساخت رابط کاربری است. این فریمورک به دلیل سادگی و انعطاف پذیری بالا بسیار محبوب شده است.</p> -->
                <p class="mt-4">
                    {{ blog.text }}  
                </p>
            </div>
        </article>
  
        <!-- بخش کامنت‌ها -->
        <section class="border-t pt-8">
            <h2 class="text-2xl font-bold mb-6">نظرات (۳)</h2>
            
            <!-- لیست کامنت‌ها -->
            <div class="space-y-6">
                <!-- کامنت اصلی -->
                <div class="pl-4 border-l-2 border-blue-200">
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <div class="flex justify-between items-start">
                            <div>
                                <span class="font-medium text-gray-800">محمد رضایی</span>
                                <span class="text-sm text-gray-500 mr-2">1402/05/16</span>
                            </div>
                            <button 
                                @click="toggleReply(1)"
                                class="text-blue-600 hover:text-blue-800 text-sm"
                            >
                                پاسخ
                            </button>
                        </div>
                        <p class="mt-2 text-gray-700">مقاله بسیار مفیدی بود، ممنون!</p>
                    </div>
                    
                    <!-- پاسخ به کامنت اصلی -->
                    <div class="mt-4 pl-8">
                        <div class="pl-4 border-l-2 border-blue-100">
                            <div class="bg-white p-4 rounded-lg shadow-sm">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <span class="font-medium text-gray-800">علی محمدی (نویسنده)</span>
                                        <span class="text-sm text-gray-500 mr-2">1402/05/16</span>
                                    </div>
                                    <button 
                                        @click="toggleReply(2)"
                                        class="text-blue-600 hover:text-blue-800 text-sm"
                                    >
                                        پاسخ
                                    </button>
                                </div>
                                <p class="mt-2 text-gray-700">خوشحالم که براتون مفید بود!</p>
                            </div>
                            
                            <!-- پاسخ سطح سوم -->
                            <div class="mt-4 pl-8">
                                <div class="pl-4 border-l-2 border-blue-50">
                                    <div class="bg-white p-4 rounded-lg shadow-sm">
                                        <div>
                                            <span class="font-medium text-gray-800">سارا احمدی</span>
                                            <span class="text-sm text-gray-500 mr-2">1402/05/18</span>
                                        </div>
                                        <p class="mt-2 text-gray-700">مقاله‌های بعدی شما رو هم دنبال می‌کنم!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- کامنت دوم -->
                <div class="pl-4 border-l-2 border-blue-200">
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <div class="flex justify-between items-start">
                            <div>
                                <span class="font-medium text-gray-800">فاطمه کریمی</span>
                                <span class="text-sm text-gray-500 mr-2">1402/05/17</span>
                            </div>
                            <button 
                                @click="toggleReply(3)"
                                class="text-blue-600 hover:text-blue-800 text-sm"
                            >
                                پاسخ
                            </button>
                        </div>
                        <p class="mt-2 text-gray-700">آیا منابع بیشتری برای یادگیری Vue پیشنهاد می‌کنید؟</p>
                    </div>
                </div>
            </div>
            <!-- <form @submit.prevent="sendComment">
                <div class="my-10">
                    <label class="block mb-2 text-xl font-bold text-gray-700">نظر ارزشمند خود را برای ما ثبت کنید</label>
                    <textarea
                        rows="6"
                        placeholder="نظر خود را وارد کنید..."
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b477] focus:outline-none"
                    ></textarea>
                </div>
            </form> -->
                        
            <!-- فرم افزودن کامنت جدید -->
            <div class="bg-gray-50 p-4 rounded-lg mb-8">
                <h3 class="font-medium mb-4">دیدگاه ارزشمند خود را برای ما بنویسید</h3>
                <form @submit.prevent="sendComment">
                    <textarea
                        v-model="newComment.text"
                        class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                        rows="4"
                        required
                    >
                    </textarea>
                    <div class="flex items-center mt-4">
                        <input
                            v-model="newComment.author"
                            type="text"
                            class="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                            placeholder="نام شما"
                            required
                        >
                        <button
                            type="submit"
                            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mr-4 transition-colors"
                        >
                            ارسال نظر
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import { ref, onBeforeMount } from 'vue';
import Header from "@/components/Header.vue" ;
import {useRoute } from "vue-router";


const route = useRoute();
const id = route.params.id ;
const blog = ref([]);
const newComment = ref({
    text: "",
    author: ""
});

async function sendComment() {
    try {
        await fetch("http://localhost:3000/comments",{
            method:"POST",
            body: JSON.stringify(newComment.value)
        })
        router.push("/");
    } catch (error) {
        throw new Error("Error");
    }
}

async function getBlog() {
    try {
        let response = await fetch(`http://localhost:3000/posts/${id}`);
        blog.value = await response.json();
        console.log(blog.value );
    } catch (error) {
        throw new Error("ERROR");
    }
}
onBeforeMount(()=>{
    getBlog() 
});

</script>

<style scoped>
.prose p {
    margin-bottom: 1rem;
    line-height: 1.7;
}
</style>