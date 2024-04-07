<template>
  <section>
    <div class="w-full relative">
      <div class="object-cover bg-cover bg-center w-full h-dvh absolute mx-auto -z-50"
        style="background-image: url(/img/bg-light-3.png);">
      </div>
      <div class="flex flex-col items-center justify-center">
        <div class="mt-32">
          <span class="text-5xl font-medium text-pretty">جزئیات تیم</span>
        </div>
        <div class="mt-20 lg:mt-40 w-full">
          <div class="flex flex-col lg:flex-row justify-center p-3 lg:p-4 w-full h-full">
            <div class="flex flex-col items-center justify-center w-full">
              <div class="flex flex-col lg:flex-row justify-center items-center flex-1 gap-10">
                <img class="object-cover" src="/img/doctor-1.png" alt="doctor" draggable="false">
                <div class="flex flex-1 flex-col lg:w-1/2">
                  <div class="flex flex-col mx-auto lg:mx-0">
                    <span class="font-medium text-2xl text-pretty">امیلی کارتر</span>
                    <span class="font-medium text-xl text-gray-500 mt-3">متخصص اطفال</span>
                  </div>
                  <div class="mt-5 space-y-6">
                    <p class="break-words font-medium text-gray-500 leading-normal">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie
                      neque. Ultricies arcu sed tempor integer. Nulla aliquet tellus vel dictum tempus.
                    </p>
                    <p class="break-words font-medium text-gray-500 leading-normal">
                      Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate tristique enim molestie
                      neque. Ultricies arcu sed tempor integer.
                    </p>
                  </div>
                  <div
                    class="bg-white shadow-lg shadow-slate-300 rounded-xl px-4 py-6 hidden lg:flex items-center justify-center gap-7 w-96 mt-2 ">
                    <span class="font-medium text-lg">اشتراک گذاری:</span>
                    <NuxtLink to="#">
                      <img class="object-cover" src="/img/instagram.png" alt="instagram" draggable="false">
                    </NuxtLink>
                    <NuxtLink to="#">
                      <img class="object-cover" src="/img/twitter.png" alt="twitter" draggable="false">
                    </NuxtLink>
                    <NuxtLink to="#">
                      <img class="object-cover" src="/img/facebook.png" alt="facebook" draggable="false">
                    </NuxtLink>
                    <NuxtLink to="#">
                      <img class="object-cover" src="/img/linkedin.png" alt="linkedin" draggable="false">
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-row gap-7 p-2 lg:p-4 w-full lg:justify-evenly mt-10 lg:mt-5">
                <div class="flex flex-col">
                  <span class="font-medium text-2xl text-pretty">تجربه</span>
                  <div class="mt-4">
                    <div class="flex flex-col justify-center w-80">
                      <span class="font-medium text-lg leading-7 text-pretty">
                        کلینیک سلامتی کودکان (2018 - 2020) سمت: رزیدنت اطفال
                      </span>
                      <ul class="space-y-5 list-outside list-disc mr-5 mt-5">
                        <li class="font-medium text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate.
                        </li>
                        <li class="font-medium text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="flex flex-col justify-center w-80">
                      <span class="font-medium text-lg leading-7 text-pretty">
                        بیمارستان فرشتگان کوچک (2020 - 2022) سمت: متخصص اطفال
                      </span>
                      <ul class="space-y-5 list-outside list-disc mr-5 mt-5">
                        <li class="font-medium text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate.
                        </li>
                        <li class="font-medium text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="flex flex-col justify-center w-80">
                      <span class="font-medium text-lg leading-7 text-pretty">
                        مرکز اطفال سان شاین (2023 - تاکنون) سمت: رئیس متخصص اطفال
                      </span>
                      <ul class="space-y-5 list-outside list-disc mr-5 mt-5">
                        <li class="font-medium text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate.
                        </li>
                        <li class="font-medium text-gray-500">
                          Lorem ipsum dolor sit amet consectetur. Vestibulum elit eu vulputate.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
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
              </div>
            </div>
            <div
              class="rounded-2xl p-8 lg:p-5 h-full lg:w-1/3 bg-white/60 backdrop-blur-md shadow-md shadow-slate-500 flex flex-col justify-center lg:sticky top-0 mt-7 lg:mt-0">
              <div class="mt-3">
                <span class="font-medium text-xl text-pretty">اطلاعات تماس</span>
                <div class="flex flex-col space-y-3 mt-5">
                  <NuxtLink to="#" class="flex items-center gap-3 hover:text-indigo-500">
                    <img src="/img/mail.png" alt="mail" draggable="false">
                    <span class="font-medium text-pretty">email@example.com</span>
                  </NuxtLink>
                  <div class="flex items-center gap-3">
                    <img src="/img/telephone-2.png" alt="mail" draggable="false">
                    <span class="font-medium text-pretty">09123456789 98+</span>
                  </div>
                </div>
              </div>
              <div class="mt-6">
                <span class="font-medium text-xl text-pretty">اشتراک گذاری:</span>
                <div class="flex flex-1 justify-center items-center gap-8 mt-7">
                  <NuxtLink to="#">
                    <img class="object-cover" src="/img/instagram.png" alt="instagram" draggable="false">
                  </NuxtLink>
                  <NuxtLink to="#">
                    <img class="object-cover" src="/img/twitter.png" alt="twitter" draggable="false">
                  </NuxtLink>
                  <NuxtLink to="#">
                    <img class="object-cover" src="/img/facebook.png" alt="facebook" draggable="false">
                  </NuxtLink>
                  <NuxtLink to="#">
                    <img class="object-cover" src="/img/linkedin.png" alt="linkedin" draggable="false">
                  </NuxtLink>
                </div>
              </div>
              <div class="mt-6">
                <span class="font-medium text-xl text-pretty">مطالعات / مدارک تحصیلی</span>
                <div class="mt-5">
                  <ul
                    class="text-gray-500 list-outside list-decimal font-medium space-y-5 mr-4 lg:mr-7 text-balance leading-7">
                    <li>لیسانس علوم زیست شناسی (2018 - 2020)</li>
                    <li>دکترای پزشکی (M.D.) (2018 - 2020)</li>
                    <li>Pediatric Residency (2018 - 2020)</li>
                    <li>متخصص اطفال دارای گواهی هیئت مدیره (2018 - 2020)</li>
                    <li>Specialization in Pediatric Allergy and Asthma Management (2018 - 2020)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>