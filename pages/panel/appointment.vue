<template>
  <div class="flex flex-col items-center w-full h-full">
    <div class="flex items-center justify-between w-full">
      <span class="font-medium text-xl">وقت های ملاقات</span>
      <div class="flex items-center gap-2">
        <select class="border px-3 py-1 rounded-md outline-none focus:ring-1 focus:ring-sky-400">
          <option value="EY">امروز</option>
          <option value="GY">فردا</option>
          <option value="PS">پس فردا</option>
        </select>
        <NuxtLink to="/appointment" class="bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600 duration-500">وقت ملاقات</NuxtLink>
      </div>
    </div>

    <div class="flex flex-wrap gap-5 w-full h-full mt-5">

      <div class="w-1/2 border rounded-xl p-2 shadow-full-rounded hover:shadow-pink-500 transition-all duration-300 ease-in flex items-center gap-3 relative">
        <div class="absolute rounded-full size-8 border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white duration-500 bg-white flex justify-center items-center -top-4 -right-4 font-medium"><span>1</span></div>
        <div>
          <img class="object-cover rounded-lg" src="https://doctris-landing.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg" alt="user" draggable="false">
        </div>
        <div class="flex flex-col gap-4 w-full">
          <div class="flex items-center justify-between">
            <span class="font-medium">نام:</span>
            <span class="font-medium">احسان فولادی</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-medium">سن:</span>
            <span class="font-medium">20</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-medium">جنسیت:</span>
            <span class="font-medium">مرد</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-medium">بخش:</span>
            <span class="font-medium">قلب و عروق</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-medium">تاریخ:</span>
            <span class="font-medium">1403/4/1</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-medium">زمان:</span>
            <span class="font-medium">11:00</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-medium">دکتر:</span>
            <span class="font-medium">احسان فولادی</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-medium">هزینه:</span>
            <span class="font-medium">50 تومان</span>
          </div>
        </div>
      </div>

    </div>
    
  </div>
</template>
<script setup>
definePageMeta({
    layout: 'panel',
})
</script>