<template>
  <section>
    <div class="w-full">
      <div class="object-cover bg-no-repeat bg-cover absolute w-full h-dvh -z-50 bg-[url('@/assets/background/bg-light-3.png')]"></div>
      <div class="flex flex-col items-center justify-center">
        <div class="mt-32">
          <span class="text-5xl font-medium text-pretty">جزئیات خدمات</span>
        </div>
        <div class="mt-20 lg:mt-32 w-full">
          <div class="flex flex-col lg:flex-row justify-center gap-3 w-full">
            <div class="w-full lg:w-1/2 h-auto p-5">
              <div class="w-full flex items-center gap-2 lg:gap-4">
                <div
                  class="size-16 lg:size-24 rounded-full bg-white/90 backdrop-blur-md flex justify-center items-center">
                  <img class="object-cover" src="/img/service-4.png" alt="service" draggable="false">
                </div>
                <span class="text-3xl md:text-4xl lg:text-5xl text-pretty font-medium tracking-tighter break-words">
                  مشاوره سلامت
                </span>
              </div>
              <div class="text-gray-700">
                <p class="mt-3 lg:mt-5 tracking-tighter break-words font-medium text-base text-pretty">
                  Lorem ipsum dolor sit amet consectetur. Integer vulputate amet aliquet a tincidunt. Velit sapien
                  scelerisque diam non dignissim posuere consectetur odio ac.
                </p>
                <p class="mt-5 tracking-tighter break-words font-medium text-base text-pretty">
                  Egestas nunc elementum tempor aliquam fringilla. Morbi magna eget morbi nibh eu massa volutpat et
                  euismod. Nulla donec tempor aliquam morbi volutpat tellus urna vulputate blandit. Enim pellentesque et
                  turpis libero.
                </p>
                <p class="mt-5 tracking-tighter break-words font-medium text-base text-pretty">
                  Ullamcorper gravida odio nibh auctor auctor neque morbi est phasellus. Tellus at gravida id.
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 h-auto p-2 lg:p-5 flex justify-center items-center">
              <div class="video_player rounded-2xl">
                <video preload="metadata" class="main-video">
                  <source src="/img/video.mp4" size="1080" type="video/mp4">
                  <track label="English" kind="subtitles" src="/How To Get Started With VSCode.vtt" srclang="en">
                  <track label="Fa" kind="subtitles" src="/test.vtt" srclang="fa">
                </video>
              </div>
            </div>
          </div>
          <div class="mt-10 w-full flex flex-col lg:flex-row mx-auto gap-2">
            <div class="lg:w-1/2 p-5">
              <span class="font-medium text-2xl text-pretty">مزایای</span>
              <ul class="flex flex-col justify-center space-y-5 mt-7 list-outside text-gray-700">
                <div class="flex items-center gap-4">
                  <i class="fa fa-check text-blue-600 text-lg"></i>
                  <li class="font-normal text-pretty md:text-nowrap break-words tracking-tighter">
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                </div>
                <div class="flex items-center gap-4">
                  <i class="fa fa-check text-blue-600 text-lg"></i>
                  <li class="font-normal text-pretty md:text-nowrap break-words tracking-tighter">
                    Ultricies arcu sed tempor integer.
                  </li>
                </div>
                <div class="flex items-center gap-4">
                  <i class="fa fa-check text-blue-600 text-lg"></i>
                  <li class="font-normal text-pretty md:text-nowrap break-words tracking-tighter">
                    Vestibulum elit eu vulputate tristique enim mole.
                  </li>
                </div>
                <div class="flex items-center gap-4">
                  <i class="fa fa-check text-blue-600 text-lg"></i>
                  <li class="font-normal text-pretty md:text-nowrap break-words tracking-tighter">
                    Nulla aliquet tellus vel dictum tempus.
                  </li>
                </div>
                <div class="flex items-center gap-4">
                  <i class="fa fa-check text-blue-600 text-lg"></i>
                  <li class="font-normal text-pretty md:text-nowrap break-words tracking-tighter">
                    Ultricies arcu sed tempor integer.
                  </li>
                </div>
                <div class="flex items-center gap-4">
                  <i class="fa fa-check text-blue-600 text-lg"></i>
                  <li class="font-normal text-pretty md:text-nowrap break-words tracking-tighter">
                    Vestibulum elit eu vulputate tristique enim mole.
                  </li>
                </div>
              </ul>
            </div>
            <div class="p-5">
              <span class="font-medium text-2xl text-pretty">برنامه های مراقبت های بهداشتی</span>
              <div class="lg:w-3/4 mt-10">
                <p class="text-base text-pretty font-medium text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Integer vulputate amet aliquet a tincidunt. Velit sapien
                  scelerisque diam non dignissim posuere consectetur odio ac. Egestas nunc elementum tempor aliquam
                  fringilla. Morbi magna eget morbi nibh eu massa volutpat et euismod.
                </p>
                <p class="text-base text-pretty font-medium text-gray-600 mt-5">
                  Nulla donec tempor aliquam morbi volutpat tellus urna vulputate blandit. Enim pellentesque et turpis
                  libero. Ullamcorper gravida odio nibh auctor auctor neque morbi est phasellus. Tellus at gravida id.
                </p>
              </div>
            </div>
          </div>
          <div class="object-cover bg-no-repeat absolute w-full h-dvh -z-50 bg-[url('@/assets/background/blue-background.png')]"></div>
          <div class="mt-10 p-2 w-full flex flex-col lg:flex-row justify-center lg:justify-evenly items-center gap-6">
            <div class="w-full lg:w-2/5 p-5 lg:mt-5 rounded-2xl bg-white shadow-xl drop-shadow-lg">
              <span class="text-indigo-500 text-lg font-medium">وقت ملاقات</span>
              <p class="text-4xl font-semibold text-pretty tracking-normal mt-5 leading-snug lg:leading-none">
                قرار ملاقات خود را رزرو کنید
              </p>
              <form action="#" method="get" class="space-y-5 mt-10">
                <div class="flex flex-col">
                  <label for="name" class="after:content-['*'] font-medium text-base">نام</label>
                  <input type="text" name="name" placeholder="نام"
                    class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                </div>
                <div
                  class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-5 lg:space-y-0 lg:gap-3">
                  <div class="flex flex-col w-full">
                    <label for="email" class="after:content-['*'] font-medium text-base">ایمیل</label>
                    <input type="email" name="email" placeholder="ایمیل"
                      class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                  </div>
                  <div class="flex flex-col w-full">
                    <label for="number" class="after:content-['*'] font-medium text-base">شماره تلفن</label>
                    <input type="number" name="number" placeholder="090123456789"
                      class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                  </div>
                </div>
                <div
                  class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-5 lg:space-y-0 lg:gap-3">
                  <div class="flex flex-col w-full">
                    <label for="time" class="after:content-['*'] font-medium text-base">زمان</label>
                    <input type="time" name="time" placeholder=""
                      class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                  </div>
                  <div class="flex flex-col w-full">
                    <label for="date" class="after:content-['*'] font-medium text-base">تاریخ</label>
                    <input type="date" name="date" placeholder=""
                      class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                  </div>
                </div>
                <div class="flex flex-col">
                  <label for="question" class="font-medium text-base">موضوع</label>
                  <textarea name="question" placeholder="سلام وقت ملاقات میخواستم"
                    class="bg-transparent focus:bg-white w-full py-2 px-4 h-48 lg:h-60 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400"></textarea>
                </div>
                <button type="submit"
                  class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">ارسال</button>
              </form>
            </div>
            <div class="w-full lg:w-2/5">
              <img class="object-cover rounded-2xl h-dvh" src="/img/appointment-form.png" alt="Appointment"
                draggable="false">
            </div>
          </div>
          <div class="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:p-8 mt-10 w-full">
            <div class="lg:w-2/5 flex flex-col p-3 lg:p-0">
              <div class="flex flex-col justify-center p-3 lg:p-0 w-full">
                <span class="text-indigo-600 text-lg font-medium">FAQ's</span>
                <p class="text-4xl font-semibold text-pretty tracking-normal mt-3 leading-snug">
                  همه سوالات شما در اینجا پاسخ دارند
                </p>
              </div>
              <div class="mt-3 bg-white/80 backdrop-blur-lg shadow-lg shadow-slate-600 p-5 w-full h-auto rounded-lg">
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
            <div class="lg:w-2/5 mt-3 p-2 lg:p-0">
              <Accordion/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>