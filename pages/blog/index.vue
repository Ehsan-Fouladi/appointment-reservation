<template>
  <section>
    <div class="w-full">
      <div class="object-cover bg-cover bg-center w-full h-dvh absolute mx-auto -z-50 bg-[url('img/bg-light-3.png')]">
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="mt-32">
          <span class="text-5xl font-medium text-pretty">لیست مقالات</span>
        </div>
        <div class="mt-20 lg:mt-40 w-full">
          <div class="flex flex-col justify-center items-center lg:p-8 overflow-hidden">
            <div class="flex flex-row justify-center lg:justify-between items-center w-full">
              <form action="#" method="get" class="mt-4 relative">
                <input type="search" placeholder="جستجو مقاله مورد نظر..."
                  class="px-4 py-3 placeholder:text-gray-700 placeholder:focus:text-gray-400 outline-none rounded-xl w-96">
                <button type="submit"
                  class="py-3 px-6 text-center absolute font-semibold text-pretty text-white rounded-full bg-indigo-500 end-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </form>
              <div class="hidden lg:block">
                <span class="font-light text-lg text-pretty">نمایش 1-9 از 50 نتیجه</span>
              </div>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-8 w-full mt-5 p-2 lg:p-0 lg:mt-10">
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-1.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    نگاهی دقیق تر به سلامت روان: شکستگی گردن و کمر
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_1.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-down">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-2.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    درک پزشکی از راه دور: آینده مراقبت های بهداشتی
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_2.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-3.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    تاثیر استرس: نکاتی برای مدیریت استرس
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_3.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">کریس روکسین</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-4.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    توانمندسازی بیماران: اتخاذ تصمیمات بهداشتی آگاهانه
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_1.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-down">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-5.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    پیمایش در مراقبت های بهداشتی: راهنمای شما برای بیمه درمانی
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_2.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-6.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    ابهام زدایی از افسانه ها و باورهای غلط رایج پزشکی
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_3.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">کریس روکسین</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-7.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    سلامت کل نگر: درمان ذهن، بدن و روح جسم
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_1.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-down">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-8.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    پیشرفت در فناوری پزشکی: در افق پزشکی
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_2.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
                <img class="object-cover bg-center rounded-3xl" src="/img/blog-9.png" alt="blog-image"
                  draggable="false">
                <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                  <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                      class="mr-1">1403/1/1</span></span>
                </div>
                <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                  <NuxtLink to="#" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                    مراقبت از عزیزان سالخورده: سلامت سالمندان
                  </NuxtLink>
                  <div class="mt-5 flex justify-between items-center">
                    <div class="flex items-center">
                      <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_3.png" alt="users"
                        draggable="false">
                      <span class="font-semibold text-base mr-2">کریس روکسین</span>
                    </div>
                    <NuxtLink to="#"
                      class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه مطلب
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-16 w-full flex justify-center items-center">
              <ul class="text-lg font-medium flex flex-row gap-4 items-center cursor-pointer">
                <div
                  class="hover:bg-indigo-500 bg-white/50 shadow-xl rounded-full size-14 flex items-center justify-center hover:text-white transition-all duration-300 text-indigo-600">
                  <i class='fa fa-angle-right'></i>
                </div>
                <div
                  class="bg-indigo-500 hover:bg-white/50 shadow-xl rounded-full size-14 flex items-center justify-center hover:text-indigo-600 text-white transition-all duration-300">
                  <li>1</li>
                </div>
                <div
                  class="hover:bg-indigo-500 bg-white/50 shadow-xl rounded-full size-14 flex items-center justify-center hover:text-white transition-all duration-300 text-indigo-600">
                  <li>2</li>
                </div>
                <div
                  class="hover:bg-indigo-500 bg-white/50 shadow-xl rounded-full size-14 flex items-center justify-center hover:text-white transition-all duration-300 text-indigo-600">
                  <li>3</li>
                </div>
                <div
                  class="hover:bg-indigo-500 bg-white/50 shadow-xl rounded-full size-14 flex items-center justify-center hover:text-white transition-all duration-300 text-indigo-600">
                  <i class='fa fa-angle-left'></i>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>