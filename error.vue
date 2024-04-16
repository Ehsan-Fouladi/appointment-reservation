<template>
    <div class="flex justify-center items-center relative" v-if="error.statusCode == 404">
        <div class="bg-center bg-no-repeat bg-cover w-screen h-screen backdrop-blur-md bg-white/50 -z-50 bg-[url('@/assets/background/blue-background-5.png')]"></div>
        <div
            class="w-full lg:w-2/3 h-full lg:h-1/2 lg:min-h-[550px] bg-white/40 lg:bg-white/60 backdrop-blur lg:backdrop-blur-lg absolute rounded-xl flex flex-col items-center justify-around lg:justify-between p-10 overflow-hidden">
            <img src="/img/404.png" alt="404" draggable="false">
            <h1 class="text-3xl lg:text-4xl font-medium text-pretty leading-relaxed lg:leading-none">
                متاسفانه صفحه مورد نظر یافت نشد؟؟
            </h1>
            <button @click="handlerNotFound"
                class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">
                بازگشت به صفحه اصلی
            </button>
        </div>
    </div>
    <div class="flex justify-center items-center relative" v-else>
        <div class="bg-center bg-no-repeat bg-cover w-screen h-screen backdrop-blur-md bg-white/50 -z-50 bg-[url('@/assets/background/blue-background-5.png')]"></div>
        <div
            class="w-full lg:w-2/3 h-full lg:h-1/2 lg:min-h-[550px] bg-white/40 lg:bg-white/60 backdrop-blur lg:backdrop-blur-lg absolute rounded-xl flex flex-col items-center justify-around lg:justify-between p-10 overflow-hidden">
            <span class="font-medium text-9xl text-indigo-600">{{ error.statusCode }}</span>
            <h1 class="text-3xl lg:text-4xl font-medium text-pretty leading-relaxed lg:leading-none">
                مشکل در برقراری با سرور لطف دوباره تلاش کنید؟
            </h1>
            <button @click="handlerNotFound"
                class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">
                بازگشت به صفحه اصلی
            </button>
        </div>
    </div>
</template>
<script setup>
defineProps(['error'])
const handlerNotFound = () => { clearError({ redirect: "/" }) }
</script>