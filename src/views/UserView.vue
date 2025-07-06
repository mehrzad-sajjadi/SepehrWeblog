<template>
    <Header></Header>
    <div class="flex justify-end ">
        <button @click="target=true" class="my-5 flex flex-wrap content-center mx-10 bg-[#00b477] rounded-md cursor-pointer hover:bg-[#366b59] text-white px-3 py-1">
            <UserPlusIcon class="size-5 mx-1" />
            افزودن کاربر 
        </button>
    </div>
    <div class="w-full flex justify-center py-10">
        <Table
            :header="headerTable"
            :datas="users"
            @userId="removeUser"
        />
    </div>
    <teleport to="body">
        <Modal
            v-if="target"
            @closeModal="
                () => {
                    target = !target;
                }
            "
        >
            <template #header_title>
                افزودن کاربر جدید
            </template>
            <template #content>
                <div
                    class="flex flex-col w-full h-full"
                >
                    <form @submit.prevent="addUser" class="text-[#014329] h-full flex flex-col justify-between">                            
                        <!-- اطلاعات کاربر -->
                        <div>
                            <div class="grid grid-cols-2 gap-3 my-5">
                                <div class="w-full">
                                    <label>نام کاربر</label>
                                    <input 
                                        v-model="newUser.name"
                                        placeholder="نام کاربری را وارد کنید"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                                <div class="w-full">
                                    <label>سن</label>
                                    <input 
                                        v-model="newUser.age"
                                        placeholder="سن کاربر جدید را وارد کنید"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-3 my-5">
                                <div class="w-full">
                                    <label>کشور</label>
                                    <input 
                                        v-model="newUser.country"
                                        placeholder="نام کشور را وارد کنید"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                                <div class="w-full">
                                    <label>شغل</label>
                                    <input 
                                        v-model="newUser.job"
                                        placeholder="شغل کاربر جدید را وارد کنید"
                                        type="text" 
                                        class="rounded-md py-2 px-1 border border-[#7E848E] mt-2 w-full"
                                    >
                                </div>
                            </div>

                        </div>
                        <!-- دکمه ها -->
                        <div class="grid grid-cols-2 gap-3 mt-12">
                            <button 
                                @click="target=false"
                                type="button"
                                class="rounded-xl border text-[#007a49] border-[#007a49] text-xl py-1 cursor-pointer "
                            >
                                لغو
                            </button>
                            <button
                                type="submit"
                                class="bg-[#007a49] text-white rounded-xl py-1 cursor-pointer "
                            >
                                تایید
                            </button>
                        </div>
                        
                    </form>
                </div>
            </template>
        </Modal>
    </teleport>
</template>
<script setup>
import Header from "@/components/Header.vue" ;
import Table from "@/components/Table.vue" ;
import {ref, onBeforeMount, reactive} from "vue" ;
import { UserPlusIcon } from "@heroicons/vue/16/solid";
import Modal from "@/components/Modal.vue";

const users = ref([]);
const headerTable = reactive(["ID","نام کاربر","سن","کشور","شغل"])
const target = ref(false);
const newUser = ref({
    name: "",
    age: "",
    country: "",
    job: ""
});

async function removeUser(id){
    if(confirm("ایا از حذف کاربر مطمئن هستید ؟")){
        try {
            let remove = await fetch(`http://localhost:3000/users/${id}`,{method:"DELETE"});
        } catch {
            console.log("Erorr");        
        }
    }
}
async function addUser(){
    try {
        await fetch("http://localhost:3000/users",{
            method:"POST",
            body: JSON.stringify(newUser.value)
        })
        target.value = false ;
    } catch (error) {
        throw new Error("Error");
    }
}

async function getUsers(){
    try{
        let response = await fetch("http://localhost:3000/users");
        let json = await response.json();
        users.value = json ;
        console.log(users.value);
    }catch{
        console.log("Erorr");
    }
}
onBeforeMount(()=>{
    getUsers();
})
</script>