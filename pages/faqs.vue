<template>
  <section>
    <div class="w-full">
      <div class="object-cover bg-no-repeat bg-cover absolute w-full h-dvh -z-50 bg-[url('img/bg-light-3.png')]"></div>
      <div class="flex flex-col items-center justify-center">
        <div class="mt-32">
          <span class="text-5xl font-medium text-pretty">قوانین</span>
        </div>
        <div class="mt-20 lg:mt-40 w-full">
          <div class="flex flex-col lg:flex-row justify-center items-center lg:p-8">
            <div class="lg:w-1/2 flex flex-col p-3 lg:p-0">
              <div class="flex flex-col justify-center p-3 lg:p-0 w-full">
                <span class="text-indigo-600 text-lg font-medium">FAQ's</span>
                <p class="text-4xl font-semibold text-balance tracking-normal mt-3 leading-snug">
                  همه سوالات شما در اینجا پاسخ دارند
                </p>
              </div>
              <div
                class="mt-3 bg-white/80 backdrop-blur-lg shadow-lg shadow-slate-600 p-5 w-full lg:w-3/4 h-auto rounded-lg">
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
            <div class="object-cover bg-no-repeat bg-cover absolute w-full h-dvh -z-50 bg-[url('img/blue-background-4.png')]"></div>
            <div class="lg:w-1/2 lg:-mr-20 mt-3 p-2 lg:p-0">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>