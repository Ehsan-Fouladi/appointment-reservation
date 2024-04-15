<template>
    <section>
    <div class="w-full">
        <div class="object-cover bg-no-repeat bg-cover absolute w-full h-dvh -z-50 bg-[url('img/bg-light-3.png')]"></div>
        <div class="flex flex-col items-center justify-center">
            <div class="mt-32">
                <span class="text-5xl font-medium text-pretty">درباره ما</span>
            </div>
            <div class="mt-20 lg:mt-40 w-full">
                <div class="flex flex-col-reverse lg:flex-row-reverse items-center justify-center lg:p-10">
                    <div class="w-full md:w-5/6 lg:w-1/2 mt-10 lg:mt-0" data-aos="flip-left">
                        <img class="rounded-3xl" src="/img/about-image.png" alt="about-image" draggable="false">
                    </div>
                    <div class="lg:w-1/2 p-2 sm:p-0 sm:pr-14 lg:pr-0">
                        <span class="text-indigo-500 text-lg font-medium">درباره ما</span>
                        <p class="text-4xl font-semibold text-pretty tracking-normal mt-3">میراث مراقبت دلسوزانه!</p>
                        <p class="text-balance font-light text-base text-gray-600 mt-7">
                            Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque. Ultricies arcu sed tempor integer. Nulla aliquet tellus vel dictum tempus.
                        </p>
                        <div class="flex flex-col md:flex-row md:items-center mt-4 gap-4">
                            <div class="shadow-md shadow-slate-600 rounded-lg w-full sm:w-2/3 md:w-2/5 p-4" data-aos="zoom-in">
                                <span class="text-xl text-pretty font-semibold">دیدگاه ما</span>
                                <p class="text-pretty mt-2 font-medium text-slate-400">Lorem ipsum dolor sit amet consect etur. Vestibulum elit eu vulputate tristique enim.</p>
                            </div>
                            <div class="shadow-md shadow-slate-600 rounded-lg w-full sm:w-2/3 md:w-2/5 p-4" data-aos="zoom-in">
                                <span class="text-xl text-pretty font-semibold">ماموریت ما</span>
                                <p class="text-pretty mt-2 font-medium text-slate-400">Lorem ipsum dolor sit amet consect etur. Vestibulum elit eu vulputate tristique enim.</p>
                            </div>
                        </div>
                        <div class="mt-10">
                            <NuxtLink to="/about" class="md:py-4 py-2 px-10 text-center font-semibold text-nowrap border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent select-none">بیشتر بدانید</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:h-32 p-2 flex flex-wrap flex-1 items-center justify-center gap-10 lg:gap-x-20 mt-10 sm:mt-14 lg:mt-20">
                    <div class="w-3/4 md:w-80 rounded-2xl p-4 md:p-6 bg-indigo-500 text-white relative box-content" data-aos="zoom-in">
                        <span class="text-lg font-medium text-pretty tracking-wide mr-4">پزشکان متخصص</span>
                        <p class="text-pretty font-medium mt-1 leading-6 md:indent-2 mr-4 md:mr-3">Lorem ipsum dolor sit amet consect etur massa mauris convallis.</p>
                        <div class="absolute bg-white/70 backdrop-blur-md size-20 rounded-full flex items-center justify-center bottom-5 -mr-16 mx-auto">
                            <img class="object-cover" src="/img/benefits-1.png" alt="service" draggable="false">
                        </div>
                    </div>
                    <div class="w-3/4 md:w-80 rounded-2xl p-4 md:p-6 bg-indigo-500 text-white relative box-content" data-aos="zoom-in-down">
                        <span class="text-lg font-medium text-pretty tracking-wide mr-4">مراقبت های اورژانسی</span>
                        <p class="text-pretty font-medium mt-1 leading-6 md:indent-2 mr-4 md:mr-3">Lorem ipsum dolor sit amet consect etur massa mauris convallis.</p>
                        <div class="absolute bg-white/70 backdrop-blur-md size-20 rounded-full flex items-center justify-center bottom-5 -mr-16 mx-auto">
                            <img class="object-cover" src="/img/benefits-2.png" alt="service" draggable="false">
                        </div>
                    </div>
                    <div class="w-3/4 md:w-80 rounded-2xl p-4 md:p-6 bg-indigo-500 text-white relative box-content" data-aos="zoom-in-up">
                        <span class="text-lg font-medium text-pretty tracking-wide mr-4">24/7 در دسترس بودن</span>
                        <p class="text-pretty font-medium mt-1 leading-6 md:indent-2 mr-4 md:mr-3">Lorem ipsum dolor sit amet consect etur massa mauris convallis.</p>
                        <div class="absolute bg-white/70 backdrop-blur-md size-20 rounded-full flex items-center justify-center bottom-5 -mr-16 mx-auto">
                            <img class="object-cover" src="/img/benefits-3.png" alt="service" draggable="false">
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mt-20 lg:mt-40 lg:pr-14">
                    <div class="flex flex-col justify-center p-3 lg:p-0">
                        <span class="text-indigo-500 text-lg font-medium">ارزش های ما</span>
                        <p class="text-4xl font-semibold text-pretty tracking-normal mt-5 leading-snug lg:leading-none">
                            اخلاص ما به بیمارانمان
                        </p>
                    </div>
                    <div class="flex flex-wrap justify-center items-center mt-10 gap-5 p-3 lg:p-0">
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-1.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">صداقت</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-2.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">یادگیری</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-3.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">اهميت دادن</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-4.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">اعتماد کنید</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-5.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">شور</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-6.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">چشم انداز</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-7.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">آینده</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                        <div class="flex flex-col justify-center p-5 w-80 rounded-xl shadow-md shadow-slate-300 drop-shadow-lg hover:scale-105 duration-300 transition-all">
                            <div class="flex items-center gap-3">
                                <img class="object-cover" src="/img/value-8.png" alt="logo" draggable="false">
                                <span class="font-medium text-xl">آخرین فناوری</span>
                            </div>
                            <p class="font-medium text-slate-500 leading-6 mt-4 break-words text-pretty">
                                Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie neque.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:p-10 mt-32 w-full">
                    <div class="flex flex-col justify-center p-3 lg:p-0">
                        <span class="text-indigo-500 text-lg font-medium">اعضای تیم</span>
                        <p class="text-4xl font-semibold text-pretty tracking-normal mt-5 leading-snug lg:leading-none">با دلسوز ما آشنا شوید پزشکان</p>
                    </div>
                    <div class="w-full flex flex-wrap items-center justify-center gap-9 mt-8">
                        <div class="flex flex-col items-center justify-center relative space-y-4 group" data-aos="fade-up" data-aos-anchor-placement="top-center">
                            <img class="object-cover" src="/img/doctor-1.png" alt="doctors" draggable="false">
                            <NuxtLink to="#" class="text-2xl text-pretty font-semibold hover:text-indigo-700">امیلی کارتر</NuxtLink>
                            <span class="text-lg text-pretty font-medium text-gray-500">متخصص اطفال</span>
                            <div class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
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
                            <div class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
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
                            <div class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
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
                            <div class="hidden group-hover:flex flex-col items-center absolute right-0 top-0 bg-white/40 backdrop-blur-md space-y-8 p-4 rounded-3xl">
                                <NuxtLink to="#"><img src="/img/instagram.png" alt="instagram" draggable="false"></NuxtLink>
                                <NuxtLink to="#"><img src="/img/twitter.png" alt="twitter" draggable="false"></NuxtLink>
                                <NuxtLink to="#"><img src="/img/facebook.png" alt="facebook" draggable="false"></NuxtLink>
                                <NuxtLink to="#"><img src="/img/linkedin.png" alt="linkedin" draggable="false"></NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full mt-12">
                        <NuxtLink to="/team" class="py-2 px-12 text-center font-semibold text-pretty border-2 hover:border-indigo-500 text-white transition-all duration-500 rounded-xl hover:text-indigo-500 bg-indigo-500 hover:bg-transparent">نمایش همه</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section> 
</template>