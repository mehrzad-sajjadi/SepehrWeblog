<template>
    <Header></Header>
    <div class="max-w-3xl mx-auto py-8 px-4">
        <!-- بخش مقاله -->
        <article class="mb-12">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
                {{ article.title }}
            </h1>

            <div class="flex items-center mb-6 text-gray-600">
                <span class="ml-2">
                    {{ article.author }}
                </span>
                <span class="mx-2">•</span>
                <span>
                    {{ article.date }}
                </span>
            </div>

            <img
                :src="article.image_url"
                alt="Vue.js"
                class="w-full h-64 object-cover rounded-lg mb-8"
            />

            <div class="prose max-w-none text-gray-700">
                <!-- <p>Vue.js یک فریمورک پیشرفته جاوااسکریپت برای ساخت رابط کاربری است. این فریمورک به دلیل سادگی و انعطاف پذیری بالا بسیار محبوب شده است.</p> -->
                <p class="mt-4">
                    {{ article.text }}
                </p>
            </div>
        </article>

        <!-- بخش کامنت‌ها -->
        <section class="border-t pt-8">
            <h2 class="text-2xl font-bold mb-6">نظرات ({{ commentNums }})</h2>
            <div class="space-y-6">
                <div
                    v-for="(comment, index) in comments"
                    :key="index"
                    class="pl-4 border-l-2 border-blue-200"
                >
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <div class="flex justify-between items-start">
                            <div>
                                <span class="font-medium text-gray-800">{{
                                    comment.author
                                }}</span>
                                <span class="text-sm text-gray-500 mr-2">{{
                                    comment.date
                                }}</span>
                            </div>
                        </div>
                        <p class="mt-2 text-gray-700">
                            {{ comment.text }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- فرم افزودن کامنت جدید -->
            <div class="bg-gray-50 p-4 rounded-lg mb-8">
                <h3 class="font-medium mb-4">
                    دیدگاه ارزشمند خود را برای ما بنویسید
                </h3>
                <form @submit.prevent="sendComment">
                    <textarea
                        v-model="newComment.text"
                        class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                        rows="4"
                        required
                    >
                    </textarea>
                    <div class="flex items-center mt-4">
                        <button
                            type="submit"
                            class="bg-[#00b477] cursor-pointer hover:bg-[#366b59] text-white px-6 py-3 rounded-lg mr-4 transition-colors"
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
import { ref, onBeforeMount, reactive } from "vue";
import Header from "@/components/Header.vue";
import { useRoute } from "vue-router";
import PersianDate from "persian-date";

const route = useRoute();
const id = route.params.id;
const userName = localStorage.getItem("name");
const comments = ref([]);
let now = new PersianDate();
let liveTime = now.format("YYYY/MM/DD");
const commentNums = ref(0);
const article = ref([]);

const newComment = ref({
    postId: id ,
    text: "",
    author: userName,
    date: liveTime,
});

async function getArticle() {
    try {
        let response = await fetch(`http://localhost:3000/posts/${id}`);
        article.value = await response.json();
        console.log(article.value);
    } catch (error) {
        throw new Error("ERROR");
    }
}

async function sendComment() {
    try {
        await fetch("http://localhost:3000/comments", {
            method: "POST",
            body: JSON.stringify(newComment.value),
        });
    } catch (error) {
        throw new Error("Error");
    }
}
async function getComments() {
    try {
        let response = await fetch(
            `http://localhost:3000/comments?postId=${id}`
        );
        comments.value = await response.json();
        console.log(comments.value);
        commentNums.value = comments.value.length ;
    } catch (error) {
        throw new Error("ERROR: " + error.message);
    }
}

onBeforeMount(() => {
    getArticle(),
    getComments();
});
</script>

<style scoped>
.prose p {
    margin-bottom: 1rem;
    line-height: 1.7;
}
</style>
