<template>
    <Header />
    <div class="min-h-screen bg-gray-50 flex flex-col items-center p-8">
        <div class="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8">
            <h1 class="text-2xl font-bold text-center text-[#00b477] mb-6">
                افزودن مقاله جدید
            </h1>

            <form @submit.prevent="saveBlog" class="space-y-6">
                <!-- عنوان -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-700">عنوان مقاله</label>
                    <input
                        v-model="blog.title"
                        type="text"
                        placeholder="مثال: معرفی فریمورک Vue.js"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b477] focus:outline-none"
                    />
                </div>

                <!-- نویسنده -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-700">نام نویسنده</label>
                    <input
                        v-model="blog.author"
                        type="text"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b477] focus:outline-none"
                    />
                </div>

                <!-- آدرس تصویر -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-700">آدرس تصویر مقاله</label>
                    <input
                        v-model="blog.image_url"
                        type="text"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b477] focus:outline-none"
                    />
                </div>

                <!-- تاریخ -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-700">تاریخ انتشار</label>
                    <!-- <input
                        type="text"
                        placeholder="مثال: 1402/05/15"
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b477] focus:outline-none"
                    /> -->
                    <DatePicker
                        v-model="blog.date"
                    />

                </div>

                <!-- متن مقاله -->
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-700">متن مقاله</label>
                    <textarea
                        v-model="blog.text"
                        rows="6"
                        placeholder="متن مقاله را وارد کنید..."
                        class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#00b477] focus:outline-none"
                    ></textarea>
                </div>

                <!-- دکمه -->
                <div class="text-center">
                    <button
                        type="submit"
                        class="px-6 py-3 cursor-pointer rounded-xl bg-[#00b477] hover:bg-[#006846] text-white font-semibold hover:bg-[#00a06b] transition"
                    >
                        ثبت مقاله
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import Header from "@/components/Header.vue";
import DatePicker from 'vue3-persian-datetime-picker'
import { useRouter } from "vue-router";

const blog = reactive({
    id: "1543",
    image_url : "",
    title : "",
    author : "",
    text : "",
    date :""
});
let router = useRouter();

async function saveBlog(){
    try {
        await fetch("http://localhost:3000/posts",{
            method:"POST",
            body: JSON.stringify(blog)
        })
        router.push("/");
    } catch (error) {
        throw new Error("Error");
    }
}

</script>