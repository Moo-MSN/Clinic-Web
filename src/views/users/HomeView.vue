<script setup>
import UserLayout from "@/components/layouts/UserLayout.vue";

// images
import clipboard from "@/components/images/clipboard.vue";
import comments from "@/components/images/comments.vue";
import doctor from "@/components/images/doctor.vue";
import laptop from "@/components/images/laptop.vue";
import teeth from "@/components/images/teeth.vue";
import wallet from "@/components/images/wallet.vue";
</script>

<template>
  <UserLayout>
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full ">
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" class="w-full" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" class="w-full" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" class="w-full" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" class="w-full" />
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <div class="my-10"></div>
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="font-bold text-5xl">Clinic name</h1>
        <h2 class="font-semibold text-2xl mt-4">คลินิกทำฟัน ทันตกรรมเด็ก โดยทันตแพทย์เฉพาะทาง</h2>
      </div>

      <div class="grid grid-cols-3 justify-items-center my-20 gap-20">
        <div class="flex flex-col items-center">
          <doctor></doctor>
          <div>ปรึกษาแพทย์</div>
        </div>
        <div class="flex flex-col items-center">
          <laptop></laptop>
          <h1>จองคิวออนไลน์</h1>
        </div>
        <div class="flex flex-col items-center">
          <clipboard></clipboard>
          <h1>การรักษาฌแพาะบุคคล</h1>
        </div>
        <div class="flex flex-col items-center">
          <teeth></teeth>
          <h1>บริการครบวงจร</h1>
        </div>
        <div class="flex flex-col items-center">
          <comments></comments>
          <h1>รีวิวจากผู้ใช้บริการ</h1>
        </div>
        <div class="flex flex-col items-center">
          <wallet></wallet>
          <h1>ราคามิตรภาพ</h1>
        </div>
      </div>
      <!-- divider-->
      <div class="divider text-3xl font-bold">Promotion</div>
      <div class="bg-purple-200 flex items-center justify-center min-h-screen p-4">
      <div class="bg-white rounded-3xl shadow-xl max-w-xl w-full p-8 md:p-12">
        <div class="text-center mb-10">
          <h1 class="text-3xl md:text-4xl font-bold text-sky-700">รายการค่าบริการทันตกรรม</h1>
          <p class="mt-2 text-gray-600">โดยประมาณ (ราคาอาจแตกต่างกันไป)</p>
        </div>

        <ul class="space-y-6">
          <li class="flex items-center bg-sky-50 rounded-2xl p-4 shadow-sm">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-200 text-sky-800 rounded-full mr-4 text-xl">🦷</div>
            <div class="flex-grow">
              <p class="text-lg font-semibold text-gray-800">จัดฟัน</p>
              <p class="text-sky-600">30,000 - 50,000 บาท</p>
            </div>
          </li>
          <li class="flex items-center bg-sky-50 rounded-2xl p-4 shadow-sm">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-200 text-sky-800 rounded-full mr-4 text-xl">🧼</div>
            <div class="flex-grow">
              <p class="text-lg font-semibold text-gray-800">ขูดหินปูน</p>
              <p class="text-sky-600">800 - 1,500 บาท</p>
            </div>
          </li>
          <li class="flex items-center bg-sky-50 rounded-2xl p-4 shadow-sm">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-200 text-sky-800 rounded-full mr-4 text-xl">✨</div>
            <div class="flex-grow">
              <p class="text-lg font-semibold text-gray-800">อุดฟัน</p>
              <p class="text-sky-600">1,000 - 3,000 บาท</p>
            </div>
          </li>
          <li class="flex items-center bg-sky-50 rounded-2xl p-4 shadow-sm">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-200 text-sky-800 rounded-full mr-4 text-xl">🦷</div>
            <div class="flex-grow">
              <p class="text-lg font-semibold text-gray-800">ฟันปลอม</p>
              <p class="text-sky-600">5,000 - 20,000 บาท</p>
            </div>
          </li>
          <li class="flex items-center bg-sky-50 rounded-2xl p-4 shadow-sm">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-200 text-sky-800 rounded-full mr-4 text-xl">🩹</div>
            <div class="flex-grow">
              <p class="text-lg font-semibold text-gray-800">ถอนฟัน / ผ่าฟันคุด</p>
              <p class="text-sky-600">1,500 - 5,000 บาท</p>
            </div>
          </li>
          <li class="flex items-center bg-sky-50 rounded-2xl p-4 shadow-sm">
            <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-sky-200 text-sky-800 rounded-full mr-4 text-xl">🩺</div>
            <div class="flex-grow">
              <p class="text-lg font-semibold text-gray-800">รักษารากฟัน</p>
              <p class="text-sky-600">3,000 - 10,000 บาท</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  </UserLayout>
</template>
