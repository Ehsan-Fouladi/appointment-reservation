<template>
  <div class="flex h-screen justify-center items-center">
    <img class="object-cover bg-center bg-cover bg-no-repeat w-screen h-[130%] lg:h-dvh -z-50"
      src="/img/blue-background-6.png" alt="background" draggable="false">
    <div class="absolute flex flex-col justify-center items-center top-20 lg:top-auto h-screen">
      <img class="object-cover select-none" src="/img/logo.png" alt="logo" draggable="false">
      <h1 class="text-7xl font-medium text-pretty mt-5 tracking-tight text-indigo-600">به زودی</h1>
      <div class="flex flex-wrap justify-center items-center gap-4 w-full mt-14">
        <div class="size-32 rounded-xl bg-white/40 backdrop-blur-lg flex flex-col items-center justify-center">
          <span class="text-3xl text-indigo-600 font-medium">00</span>
          <span class="text-lg text-indigo-500 font-medium">روز</span>
        </div>
        <div class="size-32 rounded-xl bg-white/40 backdrop-blur-lg flex flex-col items-center justify-center">
          <span class="text-3xl text-indigo-600 font-medium">00</span>
          <span class="text-lg text-indigo-500 font-medium">ساعت</span>
        </div>
        <div class="size-32 rounded-xl bg-white/40 backdrop-blur-lg flex flex-col items-center justify-center">
          <span class="text-3xl text-indigo-600 font-medium">00</span>
          <span class="text-lg text-indigo-500 font-medium">دقیقه</span>
        </div>
        <div class="size-32 rounded-xl bg-white/40 backdrop-blur-lg flex flex-col items-center justify-center">
          <span class="text-3xl text-indigo-600 font-medium">00</span>
          <span class="text-lg text-indigo-500 font-medium">ثانیه</span>
        </div>
      </div>
      <div class="lg:w-1/2 mt-10">
        <p class="text-gray-400 p-4 lg:p-0 leading-6 text-pretty break-words font-medium">
          Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc
          bibendum mattis. Eget ut felis urna natoque. Sed lacus diam ipsum.
        </p>
      </div>
      <div class="mt-10 p-4 w-full md:w-1/2 lg:w-full flex flex-col justify-center items-center">
        <span class="text-2xl text-pretty font-medium">مشترک شدن در خبرنامه ما</span>
        <form action="#" method="get" class="mt-4 relative w-full text-center">
          <input type="email" placeholder="ایمیل"
            class="px-4 py-2 border-2 placeholder:text-gray-700 placeholder:focus:text-gray-400 outline-none rounded-xl w-full lg:w-1/2">
          <button type="submit"
            class="py-2 px-6 text-center font-semibold text-pretty text-white rounded-xl bg-indigo-500 absolute end-0 lg:end-[16rem]">
            نمایش همه
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: false
})
</script>