<template>
  <div class="flex flex-col items-center w-full sm:w-[28rem] lg:w-[50rem] xl:w-full h-full">
    <div class="flex sm:items-center flex-col sm:flex-row sm:justify-between w-full">
      <span class="font-medium text-xl">وقت های ملاقات</span>
      <div class="flex sm:items-center flex-col sm:flex-row gap-2 pt-3 sm:pt-0">
        <select class="border px-3 py-1 rounded-md outline-none focus:ring-1 focus:ring-sky-400">
          <option value="EY">امروز</option>
          <option value="GY">فردا</option>
          <option value="PS">پس فردا</option>
        </select>
        <NuxtLink to="/appointment" class="bg-indigo-500 text-white rounded px-4 py-2 hover:bg-indigo-600 duration-500 text-center">
          وقت ملاقات
        </NuxtLink>
      </div>
    </div>
    <div class="rounded-lg w-full shadow-full-rounded overflow-auto mt-5">
        <table class="w-full">
          <thead>
            <tr>
              <th class="xl:w-20 min-w-20 xl:min-w-0 p-3 text-right">#</th>
              <th class="xl:w-48 min-w-48 xl:min-w-0 p-3 text-right">نام</th>
              <th class="xl:w-24 min-w-24 xl:min-w-0 p-3 text-right">سن</th>
              <th class="xl:w-24 min-w-24 xl:min-w-0 p-3 text-right">جنسیت</th>
              <th class="xl:w-24 min-w-28 xl:min-w-0 p-3 text-right">بخش</th>
              <th class="xl:w-24 min-w-28 xl:min-w-0 p-3 text-right">تاریخ</th>
              <th class="xl:w-24 min-w-28 xl:min-w-0 p-3 text-right">ساعت</th>
              <th class="xl:w-48 min-w-44 xl:min-w-0 p-3 text-right">دکتر</th>
              <th class="xl:w-20 min-w-24 xl:min-w-0 p-3 text-right">هزینه</th>
              <th class="p-3 text-right"></th>
            </tr>
          </thead>
          <tbody class="border-y-2" v-for="i in 10">
            <tr>
              <td class="font-medium p-3 whitespace-nowrap">1</td>
              <td class="p-3 whitespace-nowrap">
                <NuxtLink to="/panel/patients">
                  <div class="flex items-center gap-2">
                    <img class="rounded-full object-cover size-[45px]" src="/img/image-user-panel.jpg" alt="user" draggable="false">
                    <span class="font-medium text-pretty">احسان فولادی</span>
                  </div>
                </NuxtLink>
              </td>
              <td class="p-3 whitespace-nowrap">21</td>
              <td class="p-3 whitespace-nowrap">مرد</td>
              <td class="p-3 whitespace-nowrap">قلب و عروق</td>
              <td class="p-3 whitespace-nowrap">1403/4/01</td>
              <td class="p-3  whitespace-nowrap">11:00</td>
              <td class="p-3  whitespace-nowrap">
                <NuxtLink to="/panel/patients">
                  <div class="flex items-center gap-2">
                    <img class="rounded-full object-cover size-[45px] shadow" src="/img/image-user.jpg" alt="user" draggable="false">
                    <span class="font-medium text-pretty">دکتر کالوین کارلو</span>
                  </div>
                </NuxtLink>
              </td>
              <td class="p-3 whitespace-nowrap">100 تومان</td>
              <td class="p-3 whitespace-nowrap flex items-center gap-2">
                <NuxtLink to="" class="size-[36px] rounded-full shadow shadow-indigo-500 bg-indigo-100 hover:bg-indigo-500 text-indigo-500 hover:text-white ease-out transition-all duration-500 flex justify-center items-center">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="size-4" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </NuxtLink>
                <NuxtLink to="" class="size-[36px] rounded-full shadow shadow-teal-500 bg-teal-100 hover:bg-teal-500 text-teal-500 hover:text-white ease-out transition-all duration-500 flex justify-center items-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path></svg>
                </NuxtLink>
                <NuxtLink to="" class="size-[36px] rounded-full shadow shadow-pink-500 bg-pink-100 hover:bg-pink-500 text-pink-500 hover:text-white ease-out transition-all duration-500 flex justify-center items-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="size-4" xmlns="http://www.w3.org/2000/svg"><path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"></path></svg>
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <div class="w-full h-full py-7">
      <nav class="w-full flex justify-center items-center">
        <ul class="flex items-center cursor-pointer gap-5">
          <li class="rounded-full size-10 bg-indigo-200 shadow shadow-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white text-indigo-600 duration-300">
            <NuxtLink to="#" class="font-medium text-lg">
              <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
              </svg>
            </NuxtLink>
          </li>
          <li class="rounded-full size-10 bg-indigo-200 shadow shadow-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white text-indigo-600 duration-300">
            <NuxtLink to="#" class="font-medium text-lg">1</NuxtLink>
          </li>
          <li class="rounded-full size-10 bg-indigo-200 shadow shadow-indigo-500 flex items-center justify-center  text-indigo-600">
            <NuxtLink to="#" class="font-medium text-lg">2</NuxtLink>
          </li>
          <li class="rounded-full size-10 bg-indigo-200 shadow shadow-indigo-500 flex items-center justify-center  text-indigo-600">
            <NuxtLink to="#" class="font-medium text-lg">3</NuxtLink>
          </li>
          <li class="rounded-full size-10 bg-indigo-200 shadow shadow-indigo-500 flex items-center justify-center  text-indigo-600">
            <NuxtLink to="#" class="font-medium text-lg">4</NuxtLink>
          </li>
          <li class="rounded-full size-10 bg-indigo-200 shadow shadow-indigo-500 flex items-center justify-center  text-indigo-600">
            <NuxtLink to="#" class="font-medium text-lg">
              <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
    layout: 'panel',
})
</script>