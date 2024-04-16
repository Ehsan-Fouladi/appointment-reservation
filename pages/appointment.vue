<template>
   <section>
    <div class="w-full">
        <div class="object-cover bg-no-repeat bg-cover absolute w-full h-dvh -z-50 bg-[url('@/assets/background/bg-light-3.png')]"></div>
        <div class="flex flex-col items-center justify-center">
            <div class="mt-32">
                <span class="text-5xl font-medium text-pretty">وقت ملاقات</span>
            </div>
            <div class="mt-20 lg:mt-32 w-full">
                <div class="object-cover bg-no-repeat lg:left-56 absolute w-full h-dvh -z-50 mt-96 hidden lg:block lg:mt-20 bg-[url('@/assets/background/blue-background-3.png')]"></div>
                <div class="flex flex-col lg:flex-row justify-center items-center gap-7 w-full p-2">
                    <div class="w-full lg:w-2/5 bg-white/70 backdrop-blur-sm p-5 lg:mt-5 rounded-2xl bg-white lg:bg-none shadow-lg lg:shadow-none">
                        <span class="text-indigo-500 text-lg font-medium">ساعات کاری</span>
                        <p class="text-4xl font-semibold text-pretty tracking-normal mt-5 leading-snug lg:leading-none">قرار رزرو بر اساس جدول زمان</p>
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
                            <div class="flex items-center">
                                <span class="text-pretty text-base md:text-lg font-medium">
                                    زمان انعطاف پذیر نیست؟ یک قرار ملاقات سفارشی بگیرید
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:h-[770px] w-full lg:w-2/5 bg-white/70 backdrop-blur-sm p-5 lg:mt-5 rounded-2xl bg-white lg:bg-none shadow-lg lg:shadow-none">
                        <span class="text-indigo-500 text-lg font-medium">وقت ملاقات</span>
                        <p class="text-4xl font-semibold text-pretty tracking-normal mt-5 leading-snug lg:leading-none">
                            قرار ملاقات خود را رزرو کنید
                        </p>
                        <form action="#" method="get" class="space-y-5 mt-10">
                            <div class="flex flex-col">
                                <label for="name" class="after:content-['*'] font-medium text-base">نام</label>
                                <input type="text" name="name" placeholder="نام" class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                            </div>
                            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-5 lg:space-y-0 lg:gap-3">
                                <div class="flex flex-col w-full">
                                    <label for="email" class="after:content-['*'] font-medium text-base">ایمیل</label>
                                    <input type="email" name="email" placeholder="ایمیل" class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="number" class="after:content-['*'] font-medium text-base">شماره تلفن</label>
                                    <input type="number" name="number" placeholder="090123456789" class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                                </div>
                            </div>
                            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-5 lg:space-y-0 lg:gap-3">
                                <div class="flex flex-col w-full">
                                    <label for="time" class="after:content-['*'] font-medium text-base">زمان</label>
                                    <input type="time" name="time" placeholder="" class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="date" class="after:content-['*'] font-medium text-base">تاریخ</label>
                                    <input type="date" name="date" placeholder="" class="bg-transparent focus:bg-white w-full px-3 py-2 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400">
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <label for="question" class="font-medium text-base">موضوع</label>
                                <textarea name="question" placeholder="سلام وقت ملاقات میخواستم" class="bg-transparent focus:bg-white w-full py-2 px-4 h-48 lg:h-60 outline-none border-2 border-gray-500 rounded-lg placeholder:text-slate-600 focus:placeholder:text-slate-400"></textarea>
                            </div>
                            <button type="submit" class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">ارسال</button>
                        </form>
                    </div>                   
                </div>
            </div>
        </div>
    </div>
   </section>
</template>