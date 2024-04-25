<template>
    <header class="w-full lg:max-w-screen-2xl mt-2">
        <nav class="flex flex-row items-center lg:justify-around justify-between">
            <div class="mr-3 lg:mr-0">
                <img class="object-cover object-center" src="/img/logo.png" alt="Logo" draggable="false">
            </div>
            <div>
                <ul class="hidden lg:flex flex-row flex-shrink items-center gap-10 select-none">
                    <NuxtLink to="/" active-class="router-active"
                        class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">خانه
                    </NuxtLink>
                    <NuxtLink to="/about" active-class="router-active"
                        class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">درباره ما
                    </NuxtLink>
                    <li class="flex items-center relative group">
                        <div class="hover:text-indigo-500 duration-300 transition-all flex items-center gap-2">
                            <span class="block text-lg font-medium">سرویس ها</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5 mt-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div
                            class="hidden flex-col z-50 flex-shrink-0 absolute w-52 right-0 top-7 bg-white/70 backdrop-blur-md shadow shadow-slate-400 p-4 rounded-lg space-y-5 group-hover:flex">
                            <NuxtLink to="/service" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                سرویس
                            </NuxtLink>
                            <NuxtLink to="/service/service_detail" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                جزیات سرویس
                            </NuxtLink>
                            <NuxtLink to="/appointment" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                رزرو
                            </NuxtLink>
                        </div>
                    </li>
                    <li class="flex items-center relative group">
                        <div class="flex items-center hover:text-indigo-500 duration-300 transition-all gap-2">
                            <span
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all ">
                                صفحه ها
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div
                            class="hidden flex-col flex-shrink-0 z-50 absolute bg-white/70 backdrop-blur-md w-52 right-0 top-7 shadow shadow-slate-400 p-4 rounded-lg space-y-5 group-hover:flex">
                            <NuxtLink to="/blog" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                مقالات
                            </NuxtLink>
                            <NuxtLink to="/blog/blog_detail" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                جزئیات مقالات
                            </NuxtLink>
                            <NuxtLink to="/pricing" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                پنل قیمت
                            </NuxtLink>
                            <NuxtLink to="/team" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                تیم
                            </NuxtLink>
                            <NuxtLink to="/team/team_detail" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                جزئیات تیم
                            </NuxtLink>
                            <NuxtLink to="/contact" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                ارتباط با ما
                            </NuxtLink>
                            <NuxtLink to="/coming" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                به زودی
                            </NuxtLink>
                            <NuxtLink to="/faqs" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                قوانین
                            </NuxtLink>
                            <NuxtLink to="/auth/register" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                ثبت نام
                            </NuxtLink>
                            <NuxtLink to="/auth/login" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                ورود
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="hidden lg:flex flex-row gap-3 items-center">
                <span class="text-indigo-500 text-pretty font-semibold">
                    09123456789 98+ 
                    <i class="fa fa-phone"></i>
                </span>
                <NuxtLink to="/appointment"
                    class="py-2 px-10 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">
                    رزرو
                </NuxtLink>
            </div>

            <div class="flex lg:hidden sm:ml-4 lg:ml-0 relative">
                <div @click="clickMenu" v-if="menu"
                    class="lg:hidden size-8 ml-2 sm:ml-0 text-gray-600 focus:text-gray-900 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div @click="clickMenu" v-else="menu"
                    class="lg:hidden size-8 ml-2 sm:ml-0 text-gray-600 focus:text-gray-900 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div class="animate__animated animate__slideInDown absolute flex flex-col flex-shrink-0 p-4 sm:w-52 w-dvw top-10 left-0 rounded-lg space-y-5 shadow-xl bg-white/70 backdrop-blur-sm z-50" v-show="!menu">
                    <NuxtLink to="/" active-class="router-active"
                        class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                        خانه
                    </NuxtLink>
                    <NuxtLink to="/about" active-class="router-active"
                        class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                        درباره ما
                    </NuxtLink>
                    <li class="flex flex-col">
                        <div class="hover:text-indigo-500 duration-300 transition-all flex items-center gap-2" v-if="menuMobile" @click="clickMenuMobile">
                            <span class="block text-lg font-medium">سرویس ها</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div class="hover:text-indigo-500 duration-300 transition-all flex items-center gap-2" v-else @click="clickMenuMobile">
                            <span class="block text-lg font-medium">سرویس ها</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <div class="flex flex-col w-52 right-0 p-2 rounded-lg space-y-5 mt-2" v-show="!menuMobile">
                            <NuxtLink to="/service" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                سرویس
                            </NuxtLink>
                            <NuxtLink to="/service/service_detail" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                جزیات سرویس
                            </NuxtLink>
                            <NuxtLink to="/appointment" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                رزرو
                            </NuxtLink>
                        </div>
                    </li>
                    <li class="flex flex-col relative">
                        <div class="flex items-center hover:text-indigo-500 duration-300 transition-all gap-2" v-if="menuMobile2" @click="clickMenuMobile2">
                            <span class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                صفحه ها
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div class="flex items-center hover:text-indigo-500 duration-300 transition-all gap-2" v-else @click="clickMenuMobile2">
                            <span class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                صفحه ها
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                        <div class="flex flex-col w-52 right-0 p-2 rounded-lg space-y-5 mt-2" v-show="!menuMobile2">
                            <NuxtLink to="/blog" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                مقالات
                            </NuxtLink>
                            <NuxtLink to="/blog/blog_detail" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                جزئیات وبلاگ
                            </NuxtLink>
                            <NuxtLink to="/pricing" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                پنل قیمت
                            </NuxtLink>
                            <NuxtLink to="/team" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                تیم
                            </NuxtLink>
                            <NuxtLink to="/team/team_detail" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                جزئیات تیم
                            </NuxtLink>
                            <NuxtLink to="/contact" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                ارتباط با ما
                            </NuxtLink>
                            <NuxtLink to="/coming" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                به زودی
                            </NuxtLink>
                            <NuxtLink to="/faqs" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                قوانین
                            </NuxtLink>
                            <NuxtLink to="/auth/login" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                ورود
                            </NuxtLink>
                            <NuxtLink to="/auth/register" active-class="router-active"
                                class="block text-lg font-medium hover:text-indigo-500 duration-300 transition-all">
                                ثبت نام
                            </NuxtLink>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    </header>
    <slot />
    <footer class="lg:mt-40 mt-60">
        <div class="grid grid-flow-row lg:grid-flow-col lg:justify-around items-center w-full">
            <div class="flex flex-col mt-5 lg:mt-0 p-3 lg:p-0 md:col-start-1 lg:col-start-auto">
                <span class="text-indigo-600 text-lg font-medium">لینک های مهم</span>
                <div class="mt-5 flex flex-row gap-10">
                    <div class="transition-all flex flex-col gap-5 text-lg">
                        <NuxtLink to="/" class="font-medium hover:text-indigo-600 duration-500">خانه</NuxtLink>
                        <NuxtLink to="/about" class="font-medium hover:text-indigo-600 duration-500">درباره ما</NuxtLink>
                        <NuxtLink to="/service" class="font-medium hover:text-indigo-600 duration-500">سرویس</NuxtLink>
                        <NuxtLink to="/service/service_detail" class="font-medium hover:text-indigo-600 duration-500 text-nowrap">جزئیات خدمات
                        </NuxtLink>
                    </div>
                    <div class="transition-all flex flex-col gap-5 text-lg">
                        <NuxtLink to="/team" class="font-medium hover:text-indigo-600 duration-500">تیم</NuxtLink>
                        <NuxtLink to="/blog" class="font-medium hover:text-indigo-600 duration-500">وبلاگ</NuxtLink>
                        <NuxtLink to="/pricing" class="font-medium hover:text-indigo-600 duration-500">قوانین</NuxtLink>
                        <NuxtLink to="/contact" class="font-medium hover:text-indigo-600 duration-500">ارتباط با ما</NuxtLink>
                    </div>
                </div>
            </div>
            <div
                class="flex flex-col w-screen md:w-96 lg:w-80 justify-center items-center -order-1 lg:order-none p-3 lg:p-0 md:mx-[50%] lg:mx-auto">
                <div class="-mt-24">
                    <img class="object-cover" src="/img/logo.png" alt="logo" draggable="false">
                </div>
                <p class="font-medium text-gray-500 text-pretty mt-5">
                    Lorem ipsum dolor sit amet consectetur.
                    Vestibulum elit eu vulputate tristique enim
                    molestie neque. Ultricies arcu sed tempor.
                </p>
                <div class="mt-14 flex flex-col justify-center items-center w-full md:w-auto">
                    <span class="text-2xl text-pretty font-medium">مشترک شدن در خبرنامه ما</span>
                    <form action="#" method="get" class="mt-4 relative w-full">
                        <input type="email" placeholder="ایمیل"
                            class="px-4 py-2 border-2 placeholder:text-gray-700 placeholder:focus:text-gray-400 outline-none w-full md:w-[700px] lg:w-[500px] rounded-xl">
                        <button type="submit"
                            class="py-2 px-6 text-center font-semibold text-pretty text-white rounded-xl bg-indigo-500 absolute end-0">نمایش
                            همه</button>
                    </form>
                </div>
            </div>
            <div class="flex flex-col mt-3 lg:mt-0 p-3 lg:p-0 md:col-end-10 lg:col-end-auto">
                <span class="text-indigo-600 text-lg font-medium">لینک های ارتباط باما</span>
                <div class="flex flex-col space-y-4 mt-5">
                    <div class="flex items-center gap-2">
                        <img src="/img/location.png" alt="location" draggable="false">
                        <span class="mt-2 font-medium text-gray-700">مشهد بلوار سجاد هاشمی 10</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="/img/mail.png" alt="email" draggable="false">
                        <span class="mt-2 font-medium text-gray-700">email@example.com</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="/img/telephone-2.png" alt="phone" draggable="false">
                        <span class="mt-2 font-medium text-gray-700">09123456789 98+</span>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full h-14 p-2 lg:p-0 bg-indigo-500 flex flex-row-reverse justify-between lg:justify-around items-center overflow-hidden">
            <div class="flex items-center justify-center">
                <NuxtLink to="https://github.com/Ehsan-Fouladi/" class="text-white font-medium text-lg text-balance"
                    target="_blank">&COPY; 2024 Ehsan Fouladi</NuxtLink>
            </div>
            <div class="flex justify-center items-center gap-5">
                <NuxtLink to="#" class="mt-1">
                    <img src="/img/twitter-w.png" alt="twitter" draggable="false">
                </NuxtLink>
                <NuxtLink to="#">
                    <img src="/img/linkedin-w.png" alt="linkedin" draggable="false">
                </NuxtLink>
                <NuxtLink to="#" class="mt-1">
                    <img src="/img/facebook-w.png" alt="facebook" draggable="false">
                </NuxtLink>
                <NuxtLink to="#" class="mt-1">
                    <img src="/img/instagram-w.png" alt="instagram" draggable="false">
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>
<script setup>
const menu = ref(true)
function clickMenu() {
    menu.value = !menu.value
}
const menuMobile = ref(true)
function clickMenuMobile() {
    menuMobile.value = !menuMobile.value
}
const menuMobile2 = ref(true)
function clickMenuMobile2() {
    menuMobile2.value = !menuMobile2.value
}
</script>
<style scoped>
.router-active{
    @apply text-indigo-600 text-xl font-bold
}
</style>