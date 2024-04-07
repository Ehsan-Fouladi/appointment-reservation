<template>
  <section>
    <div class="w-full">
      <div class="object-cover bg-cover bg-center w-full h-dvh absolute mx-auto -z-50"
        style="background-image: url(/img/bg-light-3.png);">
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="mt-32">
          <span class="text-5xl font-medium text-pretty">جزئیات مقالات</span>
        </div>
        <div class="mt-20 lg:mt-40 w-full">

          <div class="flex flex-col lg:flex-row p-2 gap-2">
            <div class="flex flex-col w-full mt-10">
              <div class="relative w-full flex items-center md:p-4">
                <img class="size-72 md:size-96 w-full md:w-11/12 lg:w-auto absolute object-cover lg:hidden rounded-2xl"
                  src="https://res.cloudinary.com/demo/image/upload/smiling_man.jpg" alt="users" draggable="false">
                <div
                  class="py-5 lg:py-7 px-4 lg:px-5 rounded-md lg:rounded-3xl bg-white/70 backdrop-blur-lg shadow-xl lg:shadow-lg flex justify-around lg:justify-between items-center gap-4 max-w-full w-full lg:w-3/4 mt-60 md:mt-80 lg:mt-auto">
                  <div class="flex flex-row items-center justify-center gap-2">
                    <img class="object-cover rounded-full hidden lg:block" src="/img/blog-user_4.png" alt="users"
                      draggable="false">
                    <div class="flex flex-col space-y-1">
                      <span class="font-medium text-base text-pretty text-gray-500">نویسنده:</span>
                      <span class="font-medium text-lg text-pretty">مایکل کلارک</span>
                    </div>
                  </div>
                  <div class="flex flex-col space-y-1">
                    <span class="font-medium text-base text-pretty text-gray-500">تاریخ انتشار</span>
                    <span class="font-medium text-lg text-pretty">14 فروردین 1403</span>
                  </div>
                  <div class="flex flex-col space-y-1">
                    <span class="font-medium text-base text-pretty text-gray-500">دسته بندی</span>
                    <span class="font-medium text-lg text-pretty">آموزش آنلاین</span>
                  </div>
                </div>
              </div>

              <div class="flex flex-row items-center lg:items-end gap-5 w-auto mt-10 lg:mt-3 pr-4">
                <NuxtLink to="#"
                  class="font-medium text-sm lg:text-lg text-gray-500 hover:text-gray-700 transition-all duration-300">
                  #تحصیلات</NuxtLink>
                <NuxtLink to="#"
                  class="font-medium text-sm lg:text-lg text-gray-500 hover:text-gray-700 transition-all duration-300">
                  #کلاس آنلاین</NuxtLink>
                <NuxtLink to="#"
                  class="font-medium text-sm lg:text-lg text-gray-500 hover:text-gray-700 transition-all duration-300">
                  #یادگیری</NuxtLink>
                <NuxtLink to="#"
                  class="font-medium text-sm lg:text-lg text-gray-500 hover:text-gray-700 transition-all duration-300">
                  #آخرین</NuxtLink>
              </div>

              <div class="mt-7 flex flex-col w-full p-4">
                <span class="font-medium text-balance text-4xl leading-relaxed">
                  توانمندسازی بیماران: اتخاذ تصمیمات بهداشتی آگاهانه
                </span>
                <div class="flex flex-col lg:flex-row w-full justify-center items-center mt-3">
                  <div class="flex flex-col justify-center items-center">
                    <p class="break-words font-medium leading-relaxed text-balance text-lg text-gray-700">
                      Lorem ipsum dolor sit amet consectetur. Egestas sem purus nulla libero tortor nunc mattis
                      vestibulum enim. Faucibus neque sagittis amet lectus nec magna sollicitudin cras ante. Dignissim
                      urna urna eget ipsum lorem mattis quis dictum. At nunc turpis ullamcorper ac massa eu. Id ornare
                      fames nisl maecenas nibh at ipsum.
                    </p>
                    <p class="break-words font-medium leading-relaxed text-balance text-lg text-gray-700 mt-10">
                      Amet in mauris consectetur placerat nullam non risus vel sit. Proin lacinia purus et morbi
                      penatibus vestibulum pretium. Lorem ultricies dictumst aliquet pellentesque neque sed. Phasellus
                      senectus pharetra ornare sed adipiscing dui magna. Velit pretium eu quis nisl mauris convallis
                      sociis. Neque cras eu feugiat aliquet nullam non egestas urna.
                    </p>
                  </div>
                  <img class="object-cover rounded-3xl lg:w-96 lg:h-96 mt-7" src="/img/blog-img.png" alt="image blog"
                    draggable="false">
                </div>
                <p class="break-words font-medium text-gray-500 text-balance text-lg mt-10">
                  Lorem ipsum dolor sit amet consectetur. Sagittis ut tellus cursus nascetur ut nunc bibendum mattis.
                  Eget ut felis urna natoque. Sed lacus diam ipsum integer vitae morbi hendrerit viverra. Mauris sed
                  cursus in turpis vel fringilla pretium odio. Felis suspendisse orci potenti quis etiam netus.
                </p>
                <div class="flex justify-center items-center w-full">
                  <div class="flex flex-row items-center justify-center w-full lg:w-2/4 relative mt-5 p-10">
                    <img class="object-cover absolute top-0 end-0 -rotate-180" src="/img/qoutes.png" alt="qoutes"
                      draggable="false">
                    <p class="font-medium text-xl leading-relaxed mt-4 lg:mr-10">
                      Eu et blandit posuere senectus sed pulvinar. Phasellus senectus pharetra ornare sed adipiscing dui
                      magna. Velit pretium eu quis nisl mauris convallis sociis.
                    </p>
                    <img class="object-cover absolute start-0 -bottom-8 lg:-bottom-2" src="/img/qoutes.png" alt="qoutes"
                      draggable="false">
                  </div>
                </div>
                <div class="space-y-7 mt-5">
                  <p class="break-words font-medium text-gray-500 text-balance text-lg mt-10">
                    Eu et blandit posuere senectus sed pulvinar. Phasellus senectus pharetra ornare sed adipiscing dui
                    magna. Velit pretium eu quis nisl mauris convallis sociis. Neque cras eu feugiat aliquet nullam non
                    egestas urna. Massa enim lacus sed lorem urna adipiscing. Vitae sed condimentum ridiculus feugiat
                    consectetur natoque. Neque cras nisi nec semper. Eget leo orci nisl erat amet arcu.
                  </p>
                  <p class="break-words font-medium text-gray-500 text-balance text-lg mt-10">
                    Lorem ipsum dolor sit amet consectetur. Egestas sem purus nulla libero tortor nunc mattis vestibulum
                    enim. Faucibus neque sagittis amet lectus nec magna sollicitudin cras ante. Dignissim urna urna eget
                    ipsum lorem mattis quis dictum. At nunc turpis ullamcorper ac massa eu. Id ornare fames nisl
                    maecenas nibh at ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col mt-10 bg-white/70 backdrop-blur-lg rounded-lg p-4 w-full lg:w-1/2 h-full shadow-lg top-0 sticky">
              <form action="#" method="get" class="mt-4 relative flex justify-center items-center">
                <input type="search" placeholder="جستجو مقاله مورد نظر..."
                  class="px-4 py-3 placeholder:text-gray-700 placeholder:focus:text-gray-400 outline-none rounded-l-[0rem] lg:rounded-l-[4rem] lg:rounded-xl w-96">
                <button type="submit"
                  class="size-11 flex justify-center items-center text-center lg:absolute font-semibold text-pretty text-white rounded-md lg:rounded-full bg-indigo-500 lg:end-11">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </form>
              <div class="mt-10 w-full">
                <span class="font-medium text-xl">دسته بندی ها</span>
                <div class="space-y-5 mt-6 transition-all">
                  <div class="flex justify-between items-center">
                    <NuxtLink to="#" class="font-medium text-lg hover:text-indigo-600 duration-200">مواد مخدر</NuxtLink>
                    <span class="font-medium text-base">(02)</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <NuxtLink to="#" class="font-medium text-lg hover:text-indigo-600 duration-200">سلامت روان
                    </NuxtLink>
                    <span class="font-medium text-base">(04)</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <NuxtLink to="#" class="font-medium text-lg hover:text-indigo-600 duration-200">اطفال</NuxtLink>
                    <span class="font-medium text-base">(06)</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <NuxtLink to="#" class="font-medium text-lg hover:text-indigo-600 duration-200">زنان و زایمان
                    </NuxtLink>
                    <span class="font-medium text-base">(07)</span>
                  </div>
                </div>
              </div>
              <div class="mt-10 w-full">
                <span class="font-medium text-xl">برچسب ها</span>
                <div class="mt-8 flex flex-wrap items-center gap-5 transition-all">
                  <NuxtLink to="#"
                    class="text-indigo-500 hover:text-white font-medium hover:bg-indigo-500 duration-300 border border-indigo-500 px-6 py-2 rounded-lg">
                    <span>مواد مخدر</span>
                  </NuxtLink>
                  <NuxtLink to="#"
                    class="text-indigo-500 hover:text-white font-medium hover:bg-indigo-500 duration-300 border border-indigo-500 px-6 py-2 rounded-lg">
                    <span>فلسفه</span>
                  </NuxtLink>
                  <NuxtLink to="#"
                    class="text-indigo-500 hover:text-white font-medium hover:bg-indigo-500 duration-300 border border-indigo-500 px-6 py-2 rounded-lg">
                    <span>رمز و راز</span>
                  </NuxtLink>
                  <NuxtLink to="#"
                    class="text-indigo-500 hover:text-white font-medium hover:bg-indigo-500 duration-300 border border-indigo-500 px-6 py-2 rounded-lg">
                    <span>کودکان</span>
                  </NuxtLink>
                  <NuxtLink to="#"
                    class="text-indigo-500 hover:text-white font-medium hover:bg-indigo-500 duration-300 border border-indigo-500 px-6 py-2 rounded-lg">
                    <span>شعر</span>
                  </NuxtLink>
                  <NuxtLink to="#"
                    class="text-indigo-500 hover:text-white font-medium hover:bg-indigo-500 duration-300 border border-indigo-500 px-6 py-2 rounded-lg">
                    <span>علوم پایه</span>
                  </NuxtLink>
                </div>
              </div>
              <div class="mt-10 w-full">
                <span class="font-medium text-xl">مقاله محبوب</span>
                <div class="mt-8 flex flex-col space-y-5">
                  <div class="flex items-center transition-all gap-4">
                    <img class="object-cover rounded-lg h-16 w-28" src="/img/blog-d-1.png" alt="blog" draggable="false">
                    <NuxtLink to="#" class="font-medium text-lg hover:text-indigo-600 duration-300">
                      تاثیر استرس بر شما سلامت:
                      نکاتی برای
                    </NuxtLink>
                  </div>
                  <div class="flex items-center transition-all gap-4">
                    <img class="object-cover rounded-lg h-16 w-28" src="/img/blog-d-2.png" alt="blog" draggable="false">
                    <NuxtLink to="#" class="font-medium text-lg hover:text-indigo-600 duration-300">
                      توانمندسازی بیماران: ساختن
                      بهداشت آگاه
                    </NuxtLink>
                  </div>
                  <div class="flex items-center transition-all gap-4">
                    <img class="object-cover rounded-lg h-16 w-28" src="/img/blog-d-3.png" alt="blog" draggable="false">
                    <NuxtLink to="#" class="font-medium text-lg hover:text-indigo-600 duration-300">
                      پیمایش در بخش بهداشت و درمان سیستم:
                      راهنمای شما برای
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-16 lg:mt-32">
            <div class="flex flex-col pr-5 lg:pr-10 space-y-2">
              <span class="font-medium text-lg text-indigo-600">مقالات</span>
              <span class="text-3xl font-medium text-balance">مقاله های مربوط شاید از آن نگاه بندارین</span>
            </div>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-8 w-full mt-5 p-2 lg:p-0 lg:mt-10 overflow-hidden">
            <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
              <img class="object-cover bg-center rounded-3xl" src="/img/blog-1.png" alt="blog-image" draggable="false">
              <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                    class="mr-1">1403/1/1</span></span>
              </div>
              <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                <NuxtLink to="/blog/blog_detail"
                  class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                  نگاهی دقیق تر به سلامت روان: شکستگی گردن و کمر
                </NuxtLink>
                <div class="mt-5 flex justify-between items-center">
                  <div class="flex items-center">
                    <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_1.png" alt="users"
                      draggable="false">
                    <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                  </div>
                  <NuxtLink to="#" class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">
                    ادامه مطلب</NuxtLink>
                </div>
              </div>
            </div>
            <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-down">
              <img class="object-cover bg-center rounded-3xl" src="/img/blog-2.png" alt="blog-image" draggable="false">
              <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                    class="mr-1">1403/1/1</span></span>
              </div>
              <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                <NuxtLink to="/blog/blog_detail"
                  class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                  درک پزشکی از راه دور: آینده مراقبت های بهداشتی
                </NuxtLink>
                <div class="mt-5 flex justify-between items-center">
                  <div class="flex items-center">
                    <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_2.png" alt="users"
                      draggable="false">
                    <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                  </div>
                  <NuxtLink to="#" class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">
                    ادامه مطلب</NuxtLink>
                </div>
              </div>
            </div>
            <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
              <img class="object-cover bg-center rounded-3xl" src="/img/blog-3.png" alt="blog-image" draggable="false">
              <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                    class="mr-1">1403/1/1</span></span>
              </div>
              <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                <NuxtLink to="/blog/blog_detail"
                  class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                  تاثیر استرس: نکاتی برای مدیریت استرس
                </NuxtLink>
                <div class="mt-5 flex justify-between items-center">
                  <div class="flex items-center">
                    <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_3.png" alt="users"
                      draggable="false">
                    <span class="font-semibold text-base mr-2">کریس روکسین</span>
                  </div>
                  <NuxtLink to="#" class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">
                    ادامه مطلب</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>