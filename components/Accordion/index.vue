<template>
  <div
    class="lg:w-full rounded-md overflow-hidden flex flex-col gap-[1px] text-slate-800 bg-white/70 backdrop-blur-lg shadow-2xl lg:shadow-lg mt-6"
    id="accordion">
    <div v-for='item in items' :key='item.id' class='item' :class='{ active: item.isOpen }'>
      <div class="header p-6 font-bold flex justify-between items-center cursor-pointer" @click='toggleItem(item)'>
        <div>
          <div class="text-lg">{{ item.title }}</div>
          <div class="mt-1">{{ item.lable }}</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 activeIcon">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 inactiveIcon">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div class="content transition-all duration-500">
        <p class="leading-relaxed break-words text-gray-900 text-base font-medium">
          {{ item.content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const items = ref([
  {
    id: 1,
    title: "چگونه می توانم مدیکر را از اینجا بخرم؟",
    content: "می‌توانید با کلیک بر روی دکمه خرید در حال حاضر مدیکر را خریداری کنید و شگفت‌انگیزترین تم کلینیک را در پلتفرم دریافت کنید! اکنون موضوع را دریافت کنید و حضور آنلاین خود را در کلینیک تنظیم کنید! و تا جایی که می توانید به مشتریان کمک کنید.",
    isOpen: true
  },
  {
    id: 2,
    title: "آیا قرار ملاقات حضوری در دسترس است؟",
    content: "می‌توانید با کلیک بر روی دکمه خرید در حال حاضر مدیکر را خریداری کنید و شگفت‌انگیزترین تم کلینیک را در پلتفرم دریافت کنید! اکنون موضوع را دریافت کنید و حضور آنلاین خود را در کلینیک تنظیم کنید! و تا جایی که می توانید به مشتریان کمک کنید.",
    isOpen: false
  },
  {
    id: 3,
    title: "روش های پرداخت قابل قبول برای پزشکی چیست؟",
    lable: "خدمات در کلینیک شما؟",
    content: "می‌توانید با کلیک بر روی دکمه خرید در حال حاضر مدیکر را خریداری کنید و شگفت‌انگیزترین تم کلینیک را در پلتفرم دریافت کنید! اکنون موضوع را دریافت کنید و حضور آنلاین خود را در کلینیک تنظیم کنید! و تا جایی که می توانید به مشتریان کمک کنید.",
    isOpen: false
  },
  {
    id: 4,
    title: "آیا قرار ملاقات های پزشکی از راه دور یا مجازی ارائه می دهید؟",
    content: "می‌توانید با کلیک بر روی دکمه خرید در حال حاضر مدیکر را خریداری کنید و شگفت‌انگیزترین تم کلینیک را در پلتفرم دریافت کنید! اکنون موضوع را دریافت کنید و حضور آنلاین خود را در کلینیک تنظیم کنید! و تا جایی که می توانید به مشتریان کمک کنید.",
    isOpen: false
  },
  {
    id: 5,
    title: "آیا پارکینگ در محل برای بیماران و بازدیدکنندگان در دسترس است؟",
    content: "شما می توانید Medicare را با کلیک بر روی پلت فرم خریداری کنید! اکنون موضوع را دریافت کنید و حضور آنلاین خود را در کلینیک تنظیم کنید! و تا جایی که می توانید به مشتریان کمک کنید.",
    isOpen: false
  },
  {
    id: 6,
    title: "چگونه می توانم به سوابق پزشکی خود دسترسی داشته باشم یا درخواست",
    lable: "بدم از اطلاعات سلامتی من؟",
    content: "شما می توانید مدیکر را با پلتفرم خریداری کنید! اکنون موضوع را دریافت کنید و حضور آنلاین خود را در کلینیک تنظیم کنید! و تا جایی که می توانید به مشتریان کمک کنید.",
    isOpen: false
  },
  {
    id: 7,
    title: "چگونه می توانم از قبل قرار ملاقات بگذارم؟",
    content: "می‌توانید با کلیک بر روی دکمه خرید در حال حاضر مدیکر را خریداری کنید و شگفت‌انگیزترین تم کلینیک را در پلتفرم دریافت کنید! اکنون موضوع را دریافت کنید",
    isOpen: false
  },
]);

const toggleItem = (item) => {
  items.value = items.value.map((i) => ({ ...i, isOpen: i === item }));
};
</script>