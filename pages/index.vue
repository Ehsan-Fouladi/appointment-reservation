<template>
  <section class="flex items-center lg:mt-4 overflow-hidden">
    <div class="flex flex-col lg:flex-row items-center justify-center top-28">
      <div class="bg-no-repeat bg-cover mt-40 lg:mt-0 absolute -z-50">
        <img src="/img/bg-light-2.png" alt="banner background" draggable="false">
      </div>
      <div class="lg:w-1/2 lg:mr-20 mr-5 mt-16 lg:mt-0">
        <span class="font-medium text-balance text-3xl md:text-4xl lg:text-5xl !leading-[4rem]">
          ما گوش می دهیم، مراقبت می کنیم، ما شفا می دهیم.
        </span>
        <p class="text-balance font-medium text-gray-500 inline-block mt-4">
          Lorem ipsum dolor sit amet consectetur. Massa mauris convallis in eget
          volutpat. Vitae nunc varius proin rhoncus cursus et nulla posuere. Eros.
        </p>
        <div class="flex flex-row items-center gap-5 mt-10">
          <NuxtLink to="#"
            class="md:py-4 py-2 px-10 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">رزرو</NuxtLink>
          <NuxtLink to="#"
            class="md:py-4 py-2 px-10 text-nowrap text-center font-semibold md:text-pretty border-2 border-indigo-500 text-indigo-500 transition-all duration-500 rounded-xl hover:text-white hover:bg-indigo-500">
            درباره ما
          </NuxtLink>
        </div>
      </div>
      <div class="sm:w-96 md:w-1/2 h-auto mt-10 lg:mt-10 relative -z-50">
        <img class="object-cover" src="/img/banner-image.png" alt="banner" draggable="false">
        <div
          class="bg-white/70 backdrop-blur-md w-52 sm:px-4 px-2 sm:py-5 py-3 rounded-lg absolute md:bottom-44 sm:bottom-32 bottom-16 right-0 text-gray-900 flex items-center justify-center gap-2 text-base sm:text-lg font-medium sm:font-semibold">
          بهترین متخصصان
          <span class="text-xl sm:text-2xl font-medium text-sky-600">10</span>
        </div>
        <div
          class="bg-white/70 backdrop-blur-md w-52 sm:w-60 sm:px-4 px-2 sm:py-5 py-3 rounded-lg absolute md:bottom-20 sm:bottom-10 bottom-3 right-0 text-gray-900 flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-nowrap sm:mr-3">
          بیماران شفا یافتند
          <span class="text-xl sm:text-2xl font-medium text-sky-600">250K</span>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="w-full lg:h-32 p-2 flex flex-wrap flex-1 items-center justify-center gap-10 lg:gap-x-20 mt-10 sm:mt-14 lg:mt-20">
      <div class="w-3/4 md:w-80 rounded-2xl p-4 md:p-6 bg-indigo-500 text-white relative box-content"
        data-aos="zoom-in">
        <span class="text-lg font-medium text-pretty tracking-wide mr-4">پزشکان متخصص</span>
        <p class="text-pretty font-medium mt-1 leading-6 md:indent-2 mr-4 md:mr-3">Lorem ipsum dolor sit amet consect
          etur massa mauris convallis.</p>
        <div
          class="absolute bg-white/70 backdrop-blur-md size-20 rounded-full flex items-center justify-center bottom-5 -mr-16 mx-auto">
          <img class="object-cover" src="/img/benefits-1.png" alt="service" draggable="false">
        </div>
      </div>
      <div class="w-3/4 md:w-80 rounded-2xl p-4 md:p-6 bg-indigo-500 text-white relative box-content"
        data-aos="zoom-in-down">
        <span class="text-lg font-medium text-pretty tracking-wide mr-4">مراقبت های اورژانسی</span>
        <p class="text-pretty font-medium mt-1 leading-6 md:indent-2 mr-4 md:mr-3">Lorem ipsum dolor sit amet consect
          etur massa mauris convallis.</p>
        <div
          class="absolute bg-white/70 backdrop-blur-md size-20 rounded-full flex items-center justify-center bottom-5 -mr-16 mx-auto">
          <img class="object-cover" src="/img/benefits-2.png" alt="service" draggable="false">
        </div>
      </div>
      <div class="w-3/4 md:w-80 rounded-2xl p-4 md:p-6 bg-indigo-500 text-white relative box-content"
        data-aos="zoom-in-up">
        <span class="text-lg font-medium text-pretty tracking-wide mr-4">24/7 در دسترس بودن</span>
        <p class="text-pretty font-medium mt-1 leading-6 md:indent-2 mr-4 md:mr-3">Lorem ipsum dolor sit amet consect
          etur massa mauris convallis.</p>
        <div
          class="absolute bg-white/70 backdrop-blur-md size-20 rounded-full flex items-center justify-center bottom-5 -mr-16 mx-auto">
          <img class="object-cover" src="/img/benefits-3.png" alt="service" draggable="false">
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="pt-32 w-full flex flex-col justify-center">
      <div class="flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:p-10">
        <div class="w-full md:w-5/6 lg:w-1/2 mt-10 lg:mt-0" data-aos="flip-left">
          <img class="rounded-3xl" src="/img/about-image.png" alt="about-image" draggable="false">
        </div>
        <div class="lg:w-1/2 p-2 sm:p-0 sm:pr-14 lg:pr-0">
          <span class="text-indigo-500 text-lg font-medium">درباره ما</span>
          <p class="text-4xl font-semibold text-pretty tracking-normal mt-3">میراث مراقبت دلسوزانه!</p>
          <p class="text-balance font-light text-base text-gray-600 mt-7">
            Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
            Ultricies arcu sed tempor integer. Nulla aliquet tellus vel dictum tempus.
          </p>
          <div class="flex flex-col md:flex-row md:items-center mt-4 gap-4">
            <div class="shadow-md shadow-slate-600 rounded-lg w-full sm:w-2/3 md:w-2/6 p-4" data-aos="fade-up">
              <span class="text-xl text-pretty font-semibold">دیدگاه ما</span>
              <p class="text-pretty mt-2 font-medium text-slate-400">Lorem ipsum dolor sit amet consect etur. Vestibulum
                elit eu vulputate tristique enim.</p>
            </div>
            <div class="shadow-md shadow-slate-600 rounded-lg w-full sm:w-2/3 md:w-2/6 p-4" data-aos="fade-up">
              <span class="text-xl text-pretty font-semibold">ماموریت ما</span>
              <p class="text-pretty mt-2 font-medium text-slate-400">Lorem ipsum dolor sit amet consect etur. Vestibulum
                elit eu vulputate tristique enim.</p>
            </div>
          </div>
          <div class="mt-10">
            <NuxtLink to="#"
              class="md:py-4 py-2 px-10 text-center font-semibold text-nowrap border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent select-none">بیشتر
              بدانید</NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex items-center lg:p-10">
        <div class="w-full mt-10">
          <div class="p-3 lg:p-0">
            <span class="text-indigo-500 text-lg font-medium">خدمات</span>
            <p class="text-4xl font-semibold text-pretty tracking-normal mt-3">پیشنهادات مراقبتی ما</p>
          </div>
          <div class="flex flex-wrap justify-center items-center lg:gap-x-20 lg:gap-y-10 gap-12 mt-20 lg:mt-12">
            <div
              class="w-96 h-80 p-7 relative bg-sky-100 flex flex-col justify-center rounded-2xl rounded-tr-[9rem] shadow-lg shadow-slate-500 lg:hover:scale-110 hover:z-50 hover:shadow-indigo-400 duration-500">
              <div class="-mt-10 space-y-4">
                <span class="text-2xl font-medium text-pretty">خدمات داروسازی</span>
                <p class="leading-6 font-medium text-blaance text-slate-500">Lorem ipsum dolor sit amet consect etur.
                  Vestibulum elit eu vulputate tristique enim.</p>
              </div>
              <div
                class="absolute rounded-full bg-white/70 backdrop-blur-sm size-24 flex justify-center items-center -top-2 -right-4">
                <img class="object-cover" src="/img/service-1.png" alt="service" draggable="false">
              </div>
              <div
                class="w-full bg-white bottom-0 h-20 absolute right-0 rounded-b-2xl flex items-center justify-around">
                <NuxtLink to="#"
                  class="py-2 px-14 text-center font-semibold text-pretty border-2 hover:border-indigo-600 text-white transition-all duration-500 rounded-xl hover:text-indigo-600 bg-indigo-600 hover:bg-transparent">رزرو</NuxtLink>
                <NuxtLink to="#" class="text-indigo-700 text-lg font-semibold text-pretty flex items-center justify-center">
                  بیشتر بدانید
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div
              class="w-96 h-80 p-7 relative bg-sky-100 flex flex-col justify-center rounded-2xl rounded-tr-[9rem] shadow-lg shadow-slate-500 lg:hover:scale-110 hover:z-50 hover:shadow-indigo-400 duration-500">
              <div class="-mt-10 space-y-4">
                <span class="text-2xl font-medium text-pretty">متخصص پزشکی</span>
                <p class="leading-6 font-medium text-blaance text-slate-500">Lorem ipsum dolor sit amet consect etur.
                  Vestibulum elit eu vulputate tristique enim.</p>
              </div>
              <div
                class="absolute rounded-full bg-white/70 backdrop-blur-sm size-24 flex justify-center items-center -top-2 -right-4">
                <img class="object-cover" src="/img/service-2.png" alt="service" draggable="false">
              </div>
              <div
                class="w-full bg-white bottom-0 h-20 absolute right-0 rounded-b-2xl flex items-center justify-around">
                <NuxtLink to="#"
                  class="py-2 px-14 text-center font-semibold text-pretty border-2 hover:border-indigo-600 text-white transition-all duration-500 rounded-xl hover:text-indigo-600 bg-indigo-600 hover:bg-transparent">رزرو</NuxtLink>
                <NuxtLink to="#" class="text-indigo-700 text-lg font-semibold text-pretty flex items-center justify-center">
                  بیشتر بدانید
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div
              class="w-96 h-80 p-7 relative bg-sky-100 flex flex-col justify-center rounded-2xl rounded-tr-[9rem] shadow-lg shadow-slate-500 lg:hover:scale-110 hover:z-50 hover:shadow-indigo-400 duration-500">
              <div class="-mt-10 space-y-4">
                <span class="text-2xl font-medium text-pretty">چک آپ پزشکی</span>
                <p class="leading-6 font-medium text-blaance text-slate-500">Lorem ipsum dolor sit amet consect etur.
                  Vestibulum elit eu vulputate tristique enim.</p>
              </div>
              <div
                class="absolute rounded-full bg-white/70 backdrop-blur-sm size-24 flex justify-center items-center -top-2 -right-4">
                <img class="object-cover" src="/img/service-3.png" alt="service" draggable="false">
              </div>
              <div
                class="w-full bg-white bottom-0 h-20 absolute right-0 rounded-b-2xl flex items-center justify-around">
                <NuxtLink to="#"
                  class="py-2 px-14 text-center font-semibold text-pretty border-2 hover:border-indigo-600 text-white transition-all duration-500 rounded-xl hover:text-indigo-600 bg-indigo-600 hover:bg-transparent">رزرو</NuxtLink>
                <NuxtLink to="#" class="text-indigo-700 text-lg font-semibold text-pretty flex items-center justify-center">
                  بیشتر بدانید
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div
              class="w-96 h-80 p-7 relative bg-sky-100 flex flex-col justify-center rounded-2xl rounded-tr-[9rem] shadow-lg shadow-slate-500 lg:hover:scale-110 hover:z-50 hover:shadow-indigo-400 duration-500">
              <div class="-mt-10 space-y-4">
                <span class="text-2xl font-medium text-pretty">مشاوره سلامت</span>
                <p class="leading-6 font-medium text-blaance text-slate-500">Lorem ipsum dolor sit amet consect etur.
                  Vestibulum elit eu vulputate tristique enim.</p>
              </div>
              <div
                class="absolute rounded-full bg-white/70 backdrop-blur-sm size-24 flex justify-center items-center -top-2 -right-4">
                <img class="object-cover" src="/img/service-4.png" alt="service" draggable="false">
              </div>
              <div
                class="w-full bg-white bottom-0 h-20 absolute right-0 rounded-b-2xl flex items-center justify-around">
                <NuxtLink to="#"
                  class="py-2 px-14 text-center font-semibold text-pretty border-2 hover:border-indigo-600 text-white transition-all duration-500 rounded-xl hover:text-indigo-600 bg-indigo-600 hover:bg-transparent">رزرو</NuxtLink>
                <NuxtLink to="#" class="text-indigo-700 text-lg font-semibold text-pretty flex items-center justify-center">
                  بیشتر بدانید
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div
              class="w-96 h-80 p-7 relative bg-sky-100 flex flex-col justify-center rounded-2xl rounded-tr-[9rem] shadow-lg shadow-slate-500 lg:hover:scale-110 hover:z-50 hover:shadow-indigo-400 duration-500">
              <div class="-mt-10 space-y-4">
                <span class="text-2xl font-medium text-pretty">خدمات آمبولانس</span>
                <p class="leading-6 font-medium text-blaance text-slate-500">Lorem ipsum dolor sit amet consect etur.
                  Vestibulum elit eu vulputate tristique enim.</p>
              </div>
              <div
                class="absolute rounded-full bg-white/70 backdrop-blur-sm size-24 flex justify-center items-center -top-2 -right-4">
                <img class="object-cover" src="/img/service-5.png" alt="service" draggable="false">
              </div>
              <div
                class="w-full bg-white bottom-0 h-20 absolute right-0 rounded-b-2xl flex items-center justify-around">
                <NuxtLink to="#"
                  class="py-2 px-14 text-center font-semibold text-pretty border-2 hover:border-indigo-600 text-white transition-all duration-500 rounded-xl hover:text-indigo-600 bg-indigo-600 hover:bg-transparent">رزرو</NuxtLink>
                <NuxtLink to="#" class="text-indigo-700 text-lg font-semibold text-pretty flex items-center justify-center">
                  بیشتر بدانید
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div
              class="w-96 h-80 p-7 relative bg-sky-100 flex flex-col justify-center rounded-2xl rounded-tr-[9rem] shadow-lg shadow-slate-500 lg:hover:scale-110 hover:z-50 hover:shadow-indigo-400 duration-500">
              <div class="-mt-10 space-y-4">
                <span class="text-2xl font-medium text-pretty">راهنمایی ذهنی</span>
                <p class="leading-6 font-medium text-blaance text-slate-500">Lorem ipsum dolor sit amet consect etur.
                  Vestibulum elit eu vulputate tristique enim.</p>
              </div>
              <div
                class="absolute rounded-full bg-white/70 backdrop-blur-sm size-24 flex justify-center items-center -top-2 -right-4">
                <img class="object-cover" src="/img/service-6.png" alt="service" draggable="false">
              </div>
              <div
                class="w-full bg-white bottom-0 h-20 absolute right-0 rounded-b-2xl flex items-center justify-around">
                <NuxtLink to="#"
                  class="py-2 px-14 text-center font-semibold text-pretty border-2 hover:border-indigo-600 text-white transition-all duration-500 rounded-xl hover:text-indigo-600 bg-indigo-600 hover:bg-transparent">رزرو</NuxtLink>
                <NuxtLink to="#" class="text-indigo-700 text-lg font-semibold text-pretty flex items-center justify-center">
                  بیشتر بدانید
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="flex justify-center items-center mt-20 relative w-full overflow-hidden">
      <img class="bg-cover bg-center bg-no-repeat h-[839px] md:h-[760px] object-cover object-center"
        src="/img/time-table- banner.png" alt="banner time" draggable="false">
      <div class="absolute md:-left-0 lg:left-60">
        <div class="container h-[850px] md:h-[800px] lg:w-[130%] bg-white/70 backdrop-blur-sm p-5 lg:mt-5">
          <span class="text-indigo-500 text-lg font-medium">ساعات کاری</span>
          <p class="text-4xl font-semibold text-pretty tracking-normal mt-5 leading-snug lg:leading-none">قرار رزرو بر
            اساس جدول زمان</p>
          <div class="flex flex-col justify-center space-y-5 md:space-y-1 mt-8 md:mt-5">
            <div class="flex items-center justify-between p-2 md:p-6">
              <span class="text-2xl text-gray-950 font-semibold text-pretty">شنبه</span>
              <span class="text-pretty font-medium text-base">7 صبح تا 11 شب</span>
              <NuxtLink to="#" class="text-indigo-700 text-base font-semibold text-pretty text-center tracking-tighter">
                اکنون ثبت کن
              </NuxtLink>
            </div>
            <div class="border-b-2 border-slate-300  w-full"></div>
            <div class="flex items-center justify-between p-2 md:p-6">
              <span class="text-lg text-gray-950 font-semibold text-pretty">یکشنبه</span>
              <span class="text-pretty font-medium text-base">7 صبح تا 11 شب</span>
              <NuxtLink to="#" class="text-indigo-700 text-base font-semibold text-pretty text-center tracking-tighter">
                اکنون ثبت کن
              </NuxtLink>
            </div>
            <div class="border-b-2 border-slate-300 w-full"></div>
            <div class="flex items-center justify-between p-2 md:p-6">
              <span class="text-lg text-gray-950 font-semibold text-pretty">دوشنبه</span>
              <span class="text-pretty font-medium text-base">7 صبح تا 11 شب</span>
              <NuxtLink to="#" class="text-indigo-700 text-base font-semibold text-pretty text-center tracking-tighter">
                اکنون ثبت کن
              </NuxtLink>
            </div>
            <div class="border-b-2 border-slate-300 w-full"></div>
            <div class="flex items-center justify-between p-2 md:p-6">
              <span class="text-lg text-gray-950 font-semibold text-pretty">سه شنبه</span>
              <span class="text-pretty font-medium text-base">7 صبح تا 11 شب</span>
              <NuxtLink to="#" class="text-indigo-700 text-base font-semibold text-pretty text-center tracking-tighter">
                اکنون ثبت کن
              </NuxtLink>
            </div>
            <div class="border-b-2 border-slate-300 w-full"></div>
            <div class="flex items-center justify-between p-2 md:p-6">
              <span class="text-lg text-gray-950 font-semibold text-pretty">چهارشنبه</span>
              <span class="text-pretty font-medium text-base">7 صبح تا 11 شب</span>
              <NuxtLink to="#" class="text-indigo-700 text-base font-semibold text-pretty text-center tracking-tighter">
                اکنون ثبت کن
              </NuxtLink>
            </div>
            <div class="border-b-2 border-slate-300 w-full"></div>
            <div class="flex items-center justify-between p-2 md:p-6">
              <span class="text-lg text-gray-950 font-semibold text-pretty">پنجشنبه</span>
              <span class="text-pretty font-medium text-base">7 صبح تا 11 شب</span>
              <NuxtLink to="#" class="text-indigo-700 text-base font-semibold text-pretty text-center tracking-tighter">
                اکنون ثبت کن
              </NuxtLink>
            </div>
            <div class="border-b-2 border-slate-300 w-full"></div>
            <div class="flex items-center justify-between p-2 md:p-6">
              <span class="text-lg text-gray-950 font-semibold text-pretty">جمعه</span>
              <span class="text-pretty font-medium text-base">7 صبح تا 11 شب</span>
              <NuxtLink to="#" class="text-indigo-700 text-base font-semibold text-pretty text-center tracking-tighter">
                اکنون ثبت کن
              </NuxtLink>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-pretty text-base md:text-lg font-medium">زمان انعطاف پذیر نیست</span>
              <NuxtLink to="#"
                class="py-2 px-10 text-center text-sm md:text-balance font-semibold border-2 hover:border-indigo-600 text-white transition-all duration-500 rounded-xl hover:text-indigo-600 bg-indigo-600 hover:bg-transparent text-nowrap">قرار
                گذاشتن</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="pt-16 w-full">
      <div class="flex flex-col lg:p-10">
        <div class="flex flex-col justify-center p-3 lg:p-0">
          <span class="text-indigo-500 text-lg font-medium">اعضای تیم</span>
          <p class="text-4xl font-semibold text-pretty tracking-normal mt-5 leading-snug lg:leading-none">با دلسوز ما
            آشنا شوید پزشکان</p>
        </div>
        <div class="w-full flex flex-wrap items-center justify-center gap-9 mt-8">
          <div class="flex flex-col items-center justify-center relative space-y-4 group" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <img class="object-cover" src="/img/doctor-1.png" alt="doctors" draggable="false">
            <NuxtLink to="#" class="text-2xl text-pretty font-semibold hover:text-indigo-700">امیلی کارتر</NuxtLink>
            <span class="text-lg text-pretty font-medium text-gray-500">متخصص اطفال</span>
            <div
              class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
              <NuxtLink to="#"><img src="/img/instagram.png" alt="instagram" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/twitter.png" alt="twitter" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/facebook.png" alt="facebook" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/linkedin.png" alt="linkedin" draggable="false"></NuxtLink>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center relative space-y-4 group" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <img class="object-cover" src="/img/doctor-2.png" alt="doctors" draggable="false">
            <NuxtLink to="#" class="text-2xl text-pretty font-semibold hover:text-indigo-700">کریستوفر لی</NuxtLink>
            <span class="text-lg text-pretty font-medium text-gray-500">متخصص گوش و حلق و بینی</span>
            <div
              class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
              <NuxtLink to="#"><img src="/img/instagram.png" alt="instagram" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/twitter.png" alt="twitter" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/facebook.png" alt="facebook" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/linkedin.png" alt="linkedin" draggable="false"></NuxtLink>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center relative space-y-4 group" data-aos="fade-up"
            data-aos-anchor-placement="top-center">
            <img class="object-cover" src="/img/doctor-3.png" alt="doctors" draggable="false">
            <NuxtLink to="#" class="text-2xl text-pretty font-semibold hover:text-indigo-700">مایکل رینولدز</NuxtLink>
            <span class="text-lg text-pretty font-medium text-gray-500">متخصص مغز و اعصاب</span>
            <div
              class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
              <NuxtLink to="#"><img src="/img/instagram.png" alt="instagram" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/twitter.png" alt="twitter" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/facebook.png" alt="facebook" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/linkedin.png" alt="linkedin" draggable="false"></NuxtLink>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center relative space-y-4 group" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <img class="object-cover" src="/img/doctor-4.png" alt="doctors" draggable="false">
            <NuxtLink to="#" class="text-2xl text-pretty font-semibold hover:text-indigo-700">ربکا هریس</NuxtLink>
            <span class="text-lg text-pretty font-medium text-gray-500">متخصص قلب</span>
            <div
              class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
              <NuxtLink to="#"><img src="/img/instagram.png" alt="instagram" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/twitter.png" alt="twitter" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/facebook.png" alt="facebook" draggable="false"></NuxtLink>
              <NuxtLink to="#"><img src="/img/linkedin.png" alt="linkedin" draggable="false"></NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center w-full mt-12">
          <NuxtLink to="#"
            class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">نمایش
            همه</NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="pt-14 w-full">
      <div class="flex flex-col lg:p-8">
        <div class="flex flex-col justify-center p-3 lg:p-0 w-full lg:w-1/3">
          <span class="text-indigo-500 text-lg font-medium">گواهینامه ها</span>
          <p class="text-4xl font-semibold text-balance tracking-normal mt-3 leading-snug">ببینید بیماران ما در مورد
            خدمات ما چه می گویند</p>
          <p class="text-balance break-words text-gray-500 font-medium leading-snug mt-4">
            Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
            Ultricies arcu sed tempor integer. Nulla aliquet tellus vel dictum tempus.
          </p>
        </div>
        <div class="flex w-full mx-auto px-4 py-3 overflow-auto mt-2 lg:mt-5">
          <div class="flex items-center px-3 gap-3 w-fit">
            <div class="flex items-center w-96 h-36 p-2 relative">
              <img class="object-cover rounded-full -mt-6" src="/img/user-1.png" alt="users" draggable="false">
              <div class="flex flex-col mr-2">
                <span class="text-xl text-pretty font-extrabold">سونیا کلیریک</span>
                <p class="text-wrap text-base text-gray-900 font-medium mt-2">
                  Lorem ipsum dolor sit amet conse ctetur. Vestibulum elit eu vulputate tristique enim molestie.
                </p>
              </div>
              <div class="absolute end-10 top-8 -rotate-180 select-none -z-10">
                <img class="object-cover" src="/img/qoutes.png" alt="qoutes" draggable="false">
              </div>
            </div>
            <div class="flex items-center w-96 h-36 p-2 relative">
              <img class="object-cover rounded-full -mt-6" src="/img/user-2.png" alt="users" draggable="false">
              <div class="flex flex-col mr-2">
                <span class="text-xl text-pretty font-extrabold">مولی ماکره</span>
                <p class="text-wrap text-base text-gray-900 font-medium mt-2">
                  Lorem ipsum dolor sit amet conse ctetur. Vestibulum elit eu vulputate tristique enim molestie.
                </p>
              </div>
              <div class="absolute end-10 top-8 -rotate-180 select-none -z-10">
                <img class="object-cover" src="/img/qoutes.png" alt="qoutes" draggable="false">
              </div>
            </div>
            <div class="flex items-center w-96 h-36 p-2 relative">
              <img class="object-cover rounded-full -mt-6" src="/img/user-3.png" alt="users" draggable="false">
              <div class="flex flex-col mr-2">
                <span class="text-xl text-pretty font-extrabold">مولی ماکره</span>
                <p class="text-wrap text-base text-gray-900 font-medium mt-2">
                  Lorem ipsum dolor sit amet conse ctetur. Vestibulum elit eu vulputate tristique enim molestie.
                </p>
              </div>
              <div class="absolute end-10 top-8 -rotate-180 select-none -z-10">
                <img class="object-cover" src="/img/qoutes.png" alt="qoutes" draggable="false">
              </div>
            </div>
            <div class="flex items-center w-96 h-36 p-2 relative">
              <img class="object-cover rounded-full -mt-6" src="/img/user-4.png" alt="users" draggable="false">
              <div class="flex flex-col mr-2">
                <span class="text-xl text-pretty font-extrabold">مولی ماکره</span>
                <p class="text-wrap text-base text-gray-900 font-medium mt-2">
                  Lorem ipsum dolor sit amet conse ctetur. Vestibulum elit eu vulputate tristique enim molestie.
                </p>
              </div>
              <div class="absolute end-10 top-8 -rotate-180 select-none -z-10">
                <img class="object-cover" src="/img/qoutes.png" alt="qoutes" draggable="false">
              </div>
            </div>
            <div class="flex items-center w-96 h-36 p-2 relative">
              <img class="object-cover rounded-full -mt-6" src="/img/user-5.png" alt="users" draggable="false">
              <div class="flex flex-col mr-2">
                <span class="text-xl text-pretty font-extrabold">سونیا کلیریک</span>
                <p class="text-wrap text-base text-gray-900 font-medium mt-2">
                  Lorem ipsum dolor sit amet conse ctetur. Vestibulum elit eu vulputate tristique enim molestie.
                </p>
              </div>
              <div class="absolute end-10 top-8 -rotate-180 select-none -z-10">
                <img class="object-cover" src="/img/qoutes.png" alt="qoutes" draggable="false">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="pt-10 w-full">
      <div class="flex flex-col lg:flex-row justify-center items-center lg:p-8">
        <div class="lg:w-1/2 flex flex-col p-3 lg:p-0">
          <div class="flex flex-col justify-center p-3 lg:p-0 w-full">
            <span class="text-indigo-600 text-lg font-medium">FAQ's</span>
            <p class="text-4xl font-semibold text-balance tracking-normal mt-3 leading-snug">
              همه سوالات شما در اینجا پاسخ دارند
            </p>
          </div>
          <div class="mt-3 bg-white shadow-lg shadow-slate-600 p-5 w-full lg:w-3/4 h-auto rounded-lg">
            <form action="#" method="get" class="space-y-5">
              <div class="flex flex-col">
                <label for="username" class="after:content-['*'] font-medium text-base">نام کاربری</label>
                <input type="text" name="username" placeholder="نام کاربری"
                  class="w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
              </div>
              <div class="flex flex-col">
                <label for="email" class="after:content-['*'] font-medium text-base">ایمیل</label>
                <input type="email" name="email" placeholder="ایمیل"
                  class="w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
              </div>
              <div class="flex flex-col">
                <label for="question" class="font-medium text-base">سوال شما</label>
                <textarea name="question" placeholder="سلام"
                  class="w-full py-2 px-4 h-44 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400"></textarea>
              </div>
              <button type="submit"
                class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">ارسال</button>
            </form>
          </div>
        </div>
        <div class="lg:w-1/2 lg:-mr-20 mt-3 p-2 lg:p-0">
          <Accordion />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="lg:pt-24 w-full">
      <div class="flex flex-col justify-center items-center overflow-hidden">
        <div class="w-full top-48 flex justify-center items-center">
          <div class="relative overflow-hidden">
            <div>
              <img class="object-cover bg-cover bg-center h-[714px] lg:h-auto" src="/img/inner-ban-1.png"
                alt="background" draggable="false">
            </div>
            <div class="absolute end-20 top-52 lg:top-56 flex flex-col justify-center mr-7 md:mr-6 lg:mr-0">
              <p class="text-3xl lg:text-4xl font-semibold text-gray-500 leading-relaxed lg:leading-none">
                دریافت خدمات خط کمک با یک تماس دور
              </p>
              <span class="text-indigo-500 font-medium text-3xl lg:text-5xl mt-8 lg:mt-3">09123456789 98+ <i
                  class="fa fa-phone"></i></span>
              <span class="text-gray-500 text-2xl font-medium mt-5 lg:mt-2 leading-snug lg:leading-none">ما به صورت 24
                ساعته در خدمت شما هستیم</span>
              <NuxtLink to="#"
                class="py-2 px-10 w-52 mt-7 lg:mt-10 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent outline-none">با
                ما تماس بگیرید</NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center mt-14 lg:p-8 lg:mr-10">
          <div class="flex flex-col justify-center p-3 lg:p-0 w-full">
            <span class="text-indigo-600 text-lg font-medium">وبلاگ ها</span>
            <p class="text-4xl font-semibold text-pretty tracking-normal mt-3 leading-relaxed lg:leading-snug">
              وبلاگ های نوشته شده توسط پزشکان ما را بخوانید
            </p>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-8 w-full mt-5 p-2 lg:p-0 lg:mt-10">
            <div class="relative shadow-xl shadow-slate-300 rounded-3xl overflow-hidden" data-aos="flip-up">
              <img class="object-cover bg-center rounded-3xl" src="/img/blog-1.png" alt="blog-image" draggable="false">
              <div class="absolute top-4 start-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-xl">
                <span class="font-medium text-base tracking-tighter text-center">1 فروردین <span
                    class="mr-1">1403/1/1</span></span>
              </div>
              <div class="bg-white absolute bottom-0 rounded-3xl w-full h-40 p-4">
                <NuxtLink to="/blog/blog_detail" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                  نگاهی دقیق تر به سلامت روان: شکستگی گردن و کمر
                </NuxtLink>
                <div class="mt-5 flex justify-between items-center">
                  <div class="flex items-center">
                    <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_1.png" alt="users"
                      draggable="false">
                    <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                  </div>
                  <NuxtLink to="/blog/blog_detail" class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه
                    مطلب</NuxtLink>
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
                <NuxtLink to="/blog/blog_detail" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                  درک پزشکی از راه دور: آینده مراقبت های بهداشتی
                </NuxtLink>
                <div class="mt-5 flex justify-between items-center">
                  <div class="flex items-center">
                    <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_2.png" alt="users"
                      draggable="false">
                    <span class="font-semibold text-base mr-2">سونیا کلیریک</span>
                  </div>
                  <NuxtLink to="/blog/blog_detail" class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه
                    مطلب</NuxtLink>
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
                <NuxtLink to="/blog/blog_detail" class="text-2xl font-medium text-pretty hover:cursor-pointer hover:text-indigo-700">
                  تاثیر استرس: نکاتی برای مدیریت استرس
                </NuxtLink>
                <div class="mt-5 flex justify-between items-center">
                  <div class="flex items-center">
                    <img class="object-cover bg-center rounded-full w-9" src="/img/blog-user_3.png" alt="users"
                      draggable="false">
                    <span class="font-semibold text-base mr-2">کریس روکسین</span>
                  </div>
                  <NuxtLink to="/blog/blog_detail" class="text-indigo-700 text-lg font-medium text-pretty text-center tracking-tighter">ادامه
                    مطلب</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center w-full mt-12">
            <NuxtLink to="/blog"
              class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">نمایش
              همه</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>