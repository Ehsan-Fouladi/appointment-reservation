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
    
  </div>
</template>
<script setup>
definePageMeta({
    layout: 'panel',
})
</script>