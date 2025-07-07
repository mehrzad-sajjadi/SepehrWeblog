<template>
    <Header></Header>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
        <articleBox
            v-for="(article, index) in articles"
            :key="index"
            :data="article"
            class="rounded-xl"
        />
    </div>
</template>
<script setup>
import { reactive, ref, onBeforeMount } from "vue";
import articleBox from "@/components/articleBox.vue";
import Header from "@/components/Header.vue";

const articles = ref([]);

async function getData() {
    try {
        let response = await fetch("http://localhost:3000/posts");
        let json = await response.json();
        articles.value = json;
    } catch (error) {
        console.log("error");
    }
}
onBeforeMount(() => {
    getData();
});
</script>
