<template>
  <div class="flex justify-center items-center h-svh">

    <div class="flex flex-col justify-center items-center flex-shrink w-full p-1">
      <img class="object-cover" src="/img/logo.png" alt="logo" draggable="false">
      <form method="post" class="w-full md:w-1/2 lg:w-1/3 h-full p-2 md:p-5 rounded-lg shadow-full-rounded flex flex-col mt-7">
        <span class="text-3xl font-medium text-center">بازیابی حساب</span>
        <p class="break-words whitespace-normal text-gray-500 leading-relaxed mt-3">
          لطفا آدرس ایمیل خود را وارد کنید. لینکی برای ایجاد رمز عبور جدید از طریق ایمیل دریافت خواهید کرد.
        </p>
        <div class="flex flex-col mt-3">
          <label class="font-medium after:content-['*'] after:text-pink-600 after:mr-1">آدرس ایمیل</label>
          <input type="email" placeholder="آدرس ایمیل خود را وارد کنید" class="mt-2 outline-none placeholder:text-gray-700 focus:placeholder:text-gray-500 text-black border-2 border-sky-400 focus:border-sky-200 px-2 py-3 rounded-xl shadow">
        </div>
        <button type="submit" class="py-3 bg-blue-600 hover:bg-blue-700 text-center font-medium rounded-md text-white text-lg mt-4 duration-500">
          ارسال
        </button>
        <div class="flex items-center gap-2 pt-5">
          <span class="text-black font-medium text-sm sm:text-base">رمز عبور خود را به خاطر دارید؟</span>
          <NuxtLink to="/auth/login" class="text-black font-medium hover:text-sky-500 duration-300 ease-in text-sm sm:text-base">
            ورود به سایت
          </NuxtLink>
        </div>
      </form>
    </div>


  </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: false
})
</script>