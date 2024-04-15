<template>
  <section>
    <div class="w-full">
      <div class="object-cover bg-no-repeat bg-cover absolute w-full h-dvh -z-50 bg-[url('img/bg-light-3.png')]"></div>
      <div class="flex flex-col items-center justify-center">
        <div class="object-cover bg-no-repeat bg-cover absolute w-full h-dvh -z-50 bg-[url('img/blue-background-3.png')]"></div>
        <div class="mt-32">
          <span class="text-5xl font-medium text-pretty">ارتباط با ما</span>
        </div>
        <div class="mt-20 lg:mt-40 w-full">
          <div class="flex flex-col lg:flex-row justify-center items-center lg:p-8">
            <div class="w-full flex flex-col lg:flex-row justify-between items-center gap-10 p-3 lg:p-0">
              <div
                class="flex flex-col justify-center mt-3 bg-white/50 backdrop-blur-md shadow-md shadow-slate-400 p-5 w-full lg:w-1/2 h-auto rounded-xl">
                <span class="text-indigo-600 text-lg font-medium">تماس با ما</span>
                <p class="text-4xl font-semibold text-balance tracking-normal mt-3 leading-snug">
                  فرم را پر کن
                </p>
                <form action="#" method="get" class="space-y-5 mt-10">
                  <div class="flex flex-col">
                    <label for="username" class="after:content-['*'] font-medium text-base">نام کاربری</label>
                    <input type="text" name="username" placeholder="نام کاربری"
                      class="w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                  </div>
                  <div
                    class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-5 lg:space-y-0 lg:gap-3">
                    <div class="flex flex-col w-full">
                      <label for="email" class="after:content-['*'] font-medium text-base">ایمیل</label>
                      <input type="email" name="email" placeholder="ایمیل"
                        class="w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                    </div>
                    <div class="flex flex-col w-full">
                      <label for="number" class="after:content-['*'] font-medium text-base">شماره تلفن</label>
                      <input type="number" name="number" placeholder="090123456789"
                        class="w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                    </div>
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
              <div class="w-full lg:w-1/2 flex flex-col">
                <div class="w-full flex flex-col justify-center items-center space-y-5">
                  <div class="w-full shadow-xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19888.69155277525!2d-0.1326397216071882!3d51.45656928637526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604393204f5d1%3A0xd929bf8f7af6c791!2sBrixton%2C%20London%2C%20UK!5e0!3m2!1sen!2s!4v1698645259089!5m2!1sen!2s"
                      loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                      class="w-full h-[335px] rounded-xl"></iframe>
                  </div>
                  <div
                    class="w-full shadow-lg bg-white/40 backdrop-blur-2xl rounded-xl px-4 py-6 flex items-center gap-3">
                    <img class="object-cover" src="/img/location.png" alt="mail" draggable="false">
                    <span class="text-lg text-pretty font-medium">مشهد بلوار سجاد هاشمی 10</span>
                  </div>
                  <div
                    class="w-full shadow-lg bg-white/40 backdrop-blur-2xl rounded-xl px-4 py-6 flex items-center gap-3">
                    <img class="object-cover" src="/img/mail.png" alt="mail" draggable="false">
                    <span class="text-lg text-pretty font-medium">email@example.com</span>
                  </div>
                  <div
                    class="w-full shadow-lg bg-white/40 backdrop-blur-2xl rounded-xl px-4 py-6 flex items-center gap-3">
                    <img class="object-cover" src="/img/telephone-2.png" alt="mail" draggable="false">
                    <span class="text-lg text-pretty font-medium">09123456789 98+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:mt-32 flex justify-center items-center">
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
              <a href="#"
                class="py-2 px-10 w-52 mt-7 lg:mt-10 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent outline-none">با
                ما تماس بگیرید</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>