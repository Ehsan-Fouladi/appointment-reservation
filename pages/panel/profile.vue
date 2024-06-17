<template>
  <div class="flex flex-col items-center w-full h-full">
    <div class="flex sm:items-center flex-col sm:flex-row sm:justify-between w-full">
      <span class="font-medium text-xl">پروفایل</span>
    </div>
    <form method="post" class="w-full">
      <div class="border lg:border-gray-300 border-gray-500 rounded-lg w-full h-full mt-5">
        <div class="p-5">
          <span class="font-medium text-xl">اطلاعات شخصی:</span>
        </div>
        <div class="border-y"></div>
        <div class="my-5 p-5 flex flex-col lg:flex-row justify-evenly items-center">
          <div class="flex items-center">
            <img class="rounded-full shadow-full-rounded size-[80px]" src="/img/image-user.jpg" alt="user"
              draggable="false">
            <span class="font-medium text-lg mr-3">بارگزاری عکس</span>
          </div>
          <div class="flex items-center gap-2 pt-5 lg:pt-0">
            <button
              class="px-4 py-2 font-medium shadow shadow-indigo-300 bg-indigo-100 text-indigo-400 rounded hover:bg-indigo-500 hover:text-white duration-500">
              بارگزاریی
            </button>
            <button
              class="px-6 py-2 font-medium shadow shadow-indigo-300 bg-indigo-100 text-indigo-400 rounded hover:bg-indigo-500 hover:text-white duration-500">
              حذف
            </button>
          </div>
        </div>
        <div class="border-y"></div>
        <div class="my-5 p-5 flex flex-col">
          <div class="flex flex-col lg:flex-row items-center justify-between w-full space-y-5 lg:space-y-0">
            <div class="flex flex-col lg:items-center w-full space-y-5">
              <div class="flex flex-col">
                <label class="font-medium">نام</label>
                <input type="text" placeholder="نام:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-56 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
              <div class="flex flex-col">
                <label class="font-medium">نام خانوادگی</label>
                <input type="text" placeholder="خانوادگی:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-56 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
            </div>
            <div class="flex flex-col lg:items-center w-full space-y-5">
              <div class="flex flex-col">
                <label class="font-medium">ایمیل</label>
                <input type="email" placeholder="ایمیل:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-56 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
              <div class="flex flex-col">
                <label class="font-medium">شماره تلفن</label>
                <input type="number" placeholder="شماره تلفن:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-56 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
            </div>
            <div class="flex flex-col lg:items-center w-full space-y-5">
              <div class="flex flex-col">
                <label class="font-medium">نام کاربری</label>
                <input type="text" placeholder="نام کاربری:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-56 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
              <div class="flex flex-col">
                <label class="font-medium">کدملی</label>
                <input type="number" placeholder="کدملی:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-56 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full space-y-5 pt-10">
            <label class="font-medium">توضیحات درباره خود</label>
            <textarea rows="5"
              class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4"></textarea>
          </div>
          <button type="submit"
            class="font-medium bg-indigo-500 hover:bg-indigo-600 duration-300 px-2 py-2 text-white rounded-md mt-5 w-32">
            اعمال تغییرات
          </button>
        </div>
      </div>
      <div class="border lg:border-gray-300 border-gray-500 rounded-lg w-full h-full mt-5">
        <div class="p-5">
          <span class="font-medium text-xl">تغییر گذرواژه:</span>
        </div>
        <div class="border-y"></div>
        <div class="my-5 p-5 flex flex-col">
          <div class="flex flex-col">
            <div class="flex flex-col w-full space-y-5">
              <div class="flex flex-col">
                <label class="font-medium">گذرواژه قدیمی</label>
                <input type="password" placeholder="گذرواژه قدیمی:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-96 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
              <div class="flex flex-col">
                <label class="font-medium">گذرواژه جدید</label>
                <input type="password" placeholder="گذرواژه جدید:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-96 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
              <div class="flex flex-col">
                <label class="font-medium">تکرار گذرواژه جدید</label>
                <input type="password" placeholder="تکرار گذرواژه جدید:"
                  class="rounded-md border border-gray-500 px-2 py-1 outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300 mt-4 lg:w-96 placeholder:text-gray-700 focus:placeholder:text-gray-400">
              </div>
            </div>
          </div>
          <button type="submit"
            class="font-medium bg-indigo-500 hover:bg-indigo-600 duration-300 px-2 py-2 text-white rounded-md mt-5 w-32">
            اعمال تغییرات
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'panel',
})
</script>