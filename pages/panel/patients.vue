<template>
  <div class="flex flex-col items-center w-full h-full">
    <div class="flex items-center justify-between w-full">
      <span class="font-medium text-xl px-3 md:px-0">بیمار ها</span>
    </div>
    <div class="w-full h-full mt-5 flex flex-wrap gap-5 lg:gap-10 items-center justify-center md:justify-stretch">
      <div class="md:w-[15rem] w-[24rem] p-4 rounded-xl shadow flex flex-col border md:border-none" v-for="i in 12">
        <div class="flex justify-between w-full">
          <div class="size-[80px]">
            <img class="object-cover rounded-full" src="/img/image-user-panel.jpg" alt="user" draggable="false">
          </div>
          <div class="size-[36px] rounded-full shadow shadow-indigo-500 bg-indigo-50 hover:bg-indigo-500 text-indigo-500 hover:text-white ease-out transition-all duration-500 flex justify-center items-center relative" @click="dropdownMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7 font-medium text-lg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <div class="absolute p-4 rounded-lg shadow top-10 left-2 w-56 text-black text-sm space-y-5 bg-white" v-show="!menu">
              <NuxtLink to="/panel/patients" class="flex items-center hover:text-indigo-600 duration-500 gap-2">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-5" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span class="font-medium">پروفایل</span>
              </NuxtLink>
              <div class="flex items-center hover:text-indigo-600 duration-500 gap-2">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-4" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                <span class="font-medium">حذف</span>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4 flex flex-col w-full">
          <span class="font-medium">علی رضا دلاوری</span>
          <span class="font-medium text-gray-500">#d0001</span>
          <div class="my-4 space-y-3">
            <div class="flex items-center gap-2">
              <span class="font-medium text-gray-500">جنسیت:</span>
              <span class="font-medium">مرد</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-medium text-gray-500">سن:</span>
              <span class="font-medium">26 ساله</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-medium text-gray-500">شهر:</span>
              <span class="font-medium">مشهد</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-medium text-gray-500">بیماری فرد:</span>
              <span class="font-medium">قلب و عروق</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const menu = ref(true)
function dropdownMenu() {
  menu.value = !menu.value
}
definePageMeta({
    layout: 'panel',
})
</script>