<template>
  <div class="flex flex-col items-center w-full sm:w-[28rem] lg:w-[50rem] xl:w-full h-full">
    <div class="flex sm:items-center flex-col sm:flex-row sm:justify-between w-full">
      <span class="font-medium text-xl">لیست ویزیت ها</span>
    </div>
    <div class="rounded-lg w-full shadow-full-rounded overflow-auto mt-5">
        <table class="w-full">
          <thead>
            <tr>
              <th class="min-w-20 xl:min-w-0 p-3 text-right">ویزیت</th>
              <th class="min-w-48 xl:min-w-0 p-3 text-right">نام</th>
              <th class="min-w-24 xl:min-w-0 p-3 text-right">شماره تلفن</th>
              <th class="min-w-24 xl:min-w-0 p-3 text-right">هزینه</th>
              <th class="min-w-28 xl:min-w-0 p-3 text-right">تاریخ</th>
              <th class="min-w-28 xl:min-w-0 p-3 text-right">وضعیت</th>
              <th class="p-3 text-right"></th>
            </tr>
          </thead>
          <tbody class="border-y-2" v-for="i in 10">
            <tr>
              <td class="font-medium p-3 whitespace-nowrap">#do1</td>
              <td class="p-3 whitespace-nowrap">
                <NuxtLink to="/panel/patients">
                  <div class="flex items-center gap-2">
                    <img class="rounded-full object-cover size-[45px]" src="/img/image-user-panel.jpg" alt="user" draggable="false">
                    <span class="font-medium text-pretty">احسان فولادی</span>
                  </div>
                </NuxtLink>
              </td>
              <td class="p-3 whitespace-nowrap">09123456789</td>
              <td class="p-3 whitespace-nowrap">200 تومان</td>
              <td class="p-3 whitespace-nowrap">1403/4/01</td>
              <td class="p-3 whitespace-nowrap">
                <div class="px-2 bg-red-200 rounded-xl w-24 text-center" v-if="false">
                  <span class="text-red-700 text-sm">پرداخت نشده</span>
                </div>
                <div class="px-2 bg-teal-200 rounded-xl w-24 text-center">
                  <span class="text-teal-700 text-sm">پرداخت شده</span>
                </div>
              </td>
              <td class="p-3 whitespace-nowrap flex items-center gap-2">
                <div class="px-4 py-1 rounded-lg bg-blue-600 hover:bg-blue-700">
                  <span class="text-white text-sm">نمایش</span>
                </div>
                <div class="px-4 py-1 rounded-lg bg-white hover:bg-blue-600 border border-blue-600 text-blue-600 hover:text-white">
                  <span class="text-sm">چاپ</span>
                </div>
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