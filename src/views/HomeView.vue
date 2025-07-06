<template>
    <Header></Header>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20 ">
        <BlogBox 
            v-for="(blog,index) in blogs" 
            :key="index" 
            :data="blog"
            class="rounded-xl"
        />
    </div>

</template>
<script setup>
import {reactive, ref, onBeforeMount} from "vue" ;
import BlogBox from "@/components/BlogBox.vue" ;
import Header from "@/components/Header.vue" ;

const blogs = ref([]);

async function getData(){
    try{
        let response = await fetch("http://localhost:3000/posts");
        let json = await response.json();
        blogs.value = json;
    }catch(error){
        console.log("error");
    }
}
onBeforeMount(()=>{
    getData()
});


</script>