<script setup>
import UserLayout from "@/components/layouts/UserLayout.vue";
</script>

<template>
  <UserLayout>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen p-4">
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
  </UserLayout>
</template>
