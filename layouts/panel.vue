<template>
  <div class="flex flex-col">
    <!-- desktop -->
    <header class="w-full h-16 shadow p-2 md:p-4 flex justify-between items-center z-50">
      <div>
        <img class="object-cover" src="/img/logo.png" alt="logo" draggable="false">
      </div>
      <div class="space-x-3 space-x-reverse flex items-center">
        <div class="bg-indigo-500 rounded-full size-10 hover:bg-indigo-600 duration-500 transition-all flex justify-center items-center relative" @click="dropdown">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          <div class="absolute -right-1 -top-1 bg-pink-600 size-5 text-xs font-medium rounded-full text-white flex justify-center items-center">
            5
          </div>
          <div class="absolute bg-white/80 shadow-lg backdrop-blur w-52 h-40 rounded mt-52 left-0 overflow-auto" v-show="!menu">
            <p class="break-words text-black font-medium border rounded p-2 mt-2" v-for="i in 5">
              سلام کاربر گرامی
            </p>
          </div>
        </div>
        <div class="rounded-full shadow shadow-indigo-400 border size-10 hover:border-indigo-600 duration-500 transition-all flex justify-center items-center">
          <img class="rounded-full object-cover" src="/img/user-4.png" alt="user" draggable="false">
        </div>
      </div>
    </header>

    <div class="flex flex-col items-center gap-x-8 md:items-stretch md:flex-row w-full h-full md:pt-10 pt-5 p-1">
      <nav class="lg:w-[30%] bg-white w-full h-full border rounded-md md:sticky md:top-0 overflow-hidden flex flex-col items-center">
        <div>
          <img class="object-cover w-full h-full" src="/img/background.jpg" alt="banner" draggable="false">
        </div>
        <div class="flex flex-col justify-center items-center w-full -mt-11">
          <img class="object-cover rounded-full size-[80px] shadow-md" src="/img/image-user.jpg" alt="user" draggable="false">
          <span class="font-medium text-xl mt-4">Dr. Calvin Carlo</span>
          <span class="font-medium text-gray-500 mt-1" v-if="true">Orthopedic</span>
        </div>
        <div class="flex flex-col w-full h-full pt-5">
          <div class="w-full border"></div>
          <ul class="flex flex-col gap-7 mt-3 p-5">
            <li class="flex items-center gap-x-2 group">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 13.5333L17.4 20.2C17.5657 20.4209 17.5209 20.7343 17.3 20.9C17.2135 20.9649 17.1082 21 17 21H7C6.72386 21 6.5 20.7761 6.5 20.5C6.5 20.3918 6.53509 20.2865 6.6 20.2L11.6 13.5333C11.7657 13.3124 12.0791 13.2676 12.3 13.4333C12.3379 13.4618 12.3716 13.4954 12.4 13.5333ZM12 16.33L10 19H14L12 16.33ZM18 19V17H20V5H4V17H6V19H2.9918C2.44405 19 2 18.5554 2 17.9991V4.00087C2 3.44811 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44463 22 4.00087V17.9991C22 18.5519 21.5447 19 21.0082 19H18Z"></path></svg>
              <nuxtLink to="/panel/" class="group-hover:text-indigo-600 font-medium">داشتبورد</nuxtLink>
            </li>
            <li class="flex items-center gap-x-2 group">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z"></path></svg>
              <nuxtLink to="/panel/appointment" class="group-hover:text-indigo-600 font-medium">وقت ملاقات</nuxtLink>
            </li>
            <li class="flex items-center gap-x-2 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="size-6 group-hover:text-indigo-600" viewBox="0 0 48 48"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="m16.649 9.326l.055-.24c.105-.446.277-1.102.632-1.748c.362-.658.923-1.325 1.803-1.764c.877-.437 1.976-.6 3.335-.42c1.5.2 4.513.696 7.175 2.05c2.677 1.362 5.185 3.705 5.185 7.607c0 2.016-.78 4.179-1.536 5.589c-.363.678-.794 1.326-1.226 1.675c-.099.08-.24.18-.415.25a8.004 8.004 0 0 1-15.05.738l-.024.004l-.355-.431L17 22l-.772.636l-.001-.002l-.002-.002l-.005-.007l-.017-.02a7 7 0 0 1-.247-.327a14 14 0 0 1-.61-.924c-.47-.778-1.037-1.886-1.4-3.179c-.362-1.293-.528-2.809-.148-4.373c.37-1.522 1.243-3.02 2.824-4.358zm1.68 12.638a6.003 6.003 0 0 0 11.564-.833l.113.038a2 2 0 0 1-.006-.17c0-1.655-.23-2.81-.444-3.53a7 7 0 0 0-.139-.416l-.041.002h-.04a11.5 11.5 0 0 1-2.232-.17c-1.717-.29-4.042-1.014-6.78-2.691q-.09.201-.18.453c-.196.555-.357 1.214-.496 1.91c-.123.613-.224 1.23-.32 1.808l-.037.228c-.103.62-.206 1.229-.326 1.67c-.21.766-.424 1.31-.636 1.7m-1.4-1.863a11 11 0 0 1-1.056-2.465c-.299-1.066-.409-2.22-.131-3.361c.27-1.11.923-2.277 2.266-3.383c.242-.164.352-.384.382-.443v-.001a2 2 0 0 0 .126-.337c.032-.114.067-.27.1-.41l.035-.157c.095-.403.218-.842.438-1.243c.214-.388.507-.72.943-.937c.438-.219 1.116-.369 2.178-.227c1.453.193 4.186.656 6.532 1.85c2.33 1.185 4.092 2.979 4.092 5.824c0 1.31-.44 2.8-.97 3.975c-.1-.766-.244-1.392-.392-1.888a8 8 0 0 0-.385-1.037a5 5 0 0 0-.19-.365l-.017-.027l-.006-.01l-.003-.005l-.002-.003l-.84.54l.84-.54l-.37-.574l-.662.133l-.014.003l-.097.013a5 5 0 0 1-.448.03a9.5 9.5 0 0 1-1.84-.144c-1.613-.272-3.983-1.013-6.862-2.93l-.7-.467l-.579.61c-.477.502-.801 1.187-1.038 1.854c-.242.685-.425 1.45-.572 2.184a53 53 0 0 0-.332 1.88l-.038.224c-.107.651-.194 1.148-.282 1.47q-.054.199-.106.364m13.881.422l.004-.002zm.004-.002l-.004.002z"/><path d="M17.914 28.855c-.212-.422-.473-.943-.914-.842c-5.404 1.23-11 4.781-11 8.557V42h36v-5.43c0-2.974-3.472-5.809-7.587-7.48l-.005-.01l-.014-.027l-.033.016c-1.093-.44-2.231-.8-3.361-1.056c-.503-.115-1.023.577-1.25 1.01H18zm13.489 1.32q.656.182 1.301.407c.012.342-.014.746-.07 1.158a8 8 0 0 1-.272 1.26H31a1 1 0 0 0-.894.553l-1 2A1 1 0 0 0 29 36v2a1 1 0 0 0 1 1h2v-2h-1v-.764L31.618 35h2.764L35 36.236V37h-1v2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-.106-.447l-1-2A1 1 0 0 0 35 33h-.566a11 11 0 0 0 .248-1.609c.975.461 1.881.99 2.666 1.562C39.27 34.355 40 35.667 40 36.57V40H8v-3.43c0-.903.73-2.215 2.652-3.617c.966-.705 2.119-1.343 3.355-1.871a10.2 10.2 0 0 0 .381 2.354l.008.028a3 3 0 1 0 1.956-.444l-.044-.144a8 8 0 0 1-.235-1.136a7 7 0 0 1-.07-1.171q.005-.126.015-.224q.18-.056.36-.107l.415.786h14.164zM16 37.016c.538 0 1-.44 1-1.015c0-.574-.462-1.015-1-1.015s-1 .44-1 1.015c0 .574.462 1.015 1 1.015"/></g></svg>
              <nuxtLink to="" class="group-hover:text-indigo-600 font-medium">دکتر</nuxtLink>
            </li>
            <li class="flex items-center gap-x-2 group">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg"><path d="M18.3643 10.9792C19.9264 12.5413 19.9264 15.0739 18.3643 16.636L12.7075 22.2929C12.317 22.6834 11.6838 22.6834 11.2933 22.2929L5.63642 16.636C4.07432 15.0739 4.07432 12.5413 5.63642 10.9792C7.19851 9.41709 9.73117 9.41709 11.2933 10.9792L11.9997 11.6856L12.7075 10.9792C14.2696 9.41709 16.8022 9.41709 18.3643 10.9792ZM7.05063 12.3934C6.26958 13.1744 6.26958 14.4408 7.05063 15.2218L12.0004 20.1716L16.9501 15.2218C17.7312 14.4408 17.7312 13.1744 16.9501 12.3934C16.1691 11.6123 14.9027 11.6123 14.1203 12.3948L11.9983 14.5126L9.87906 12.3934C9.09801 11.6123 7.83168 11.6123 7.05063 12.3934ZM12.0004 1C14.2095 1 16.0004 2.79086 16.0004 5C16.0004 7.20914 14.2095 9 12.0004 9C9.79124 9 8.00038 7.20914 8.00038 5C8.00038 2.79086 9.79124 1 12.0004 1ZM12.0004 3C10.8958 3 10.0004 3.89543 10.0004 5C10.0004 6.10457 10.8958 7 12.0004 7C13.1049 7 14.0004 6.10457 14.0004 5C14.0004 3.89543 13.1049 3 12.0004 3Z"></path></svg>
              <nuxtLink to="/panel/patients" class="group-hover:text-indigo-600 font-medium">بیمارها</nuxtLink>
            </li>
            <li class="flex items-center gap-x-2 group">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM13 16.083V20H17.6586C16.9423 17.9735 15.1684 16.4467 13 16.083ZM11 20V16.083C8.83165 16.4467 7.05766 17.9735 6.34141 20H11ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.2104 11 16 9.21043 16 7C16 4.78957 14.2104 3 12 3C9.78957 3 8 4.78957 8 7C8 9.21043 9.78957 11 12 11Z"></path></svg>
              <nuxtLink to="" class="group-hover:text-indigo-600 font-medium">پروفایل</nuxtLink>
            </li>
            <li class="flex items-center gap-x-2 group">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-5 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg"><path d="M19 2C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19ZM18 4H6V20H18V4ZM12 7C14.7614 7 17 9.23858 17 12C17 13.7973 16.0517 15.3731 14.6282 16.2544L12.5 12H15C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15L12.9552 16.9089C12.646 16.9687 12.3267 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z"></path></svg>
              <nuxtLink to="/panel/forgot-password" class="group-hover:text-indigo-600 font-medium">
                فراموشی رمز عبور
              </nuxtLink>
            </li>
          </ul>
        </div>
      </nav>
      <div class="w-full h-full pt-7 md:pt-0">
        <NuxtPage />
      </div>
    </div>
    <!-- desktop -->
  </div>
</template>
<script setup>
const menu = ref(true)
function dropdown() {
  menu.value = !menu.value
  console.log("dropdown");
}
</script>
<style scoped>
.active{
  @apply text-indigo-600;
}
</style>