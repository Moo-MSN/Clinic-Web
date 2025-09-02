<script setup>
import UserLayout from "@/components/layouts/UserLayout.vue";
</script>

<template>
  <UserLayout>
    <div class="divide-y divide-gray-200 my-0.5">
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" class="w-full" />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" class="w-full" />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" class="w-full" />
        </div>
        <div id="item4" class="carousel-item w-full">
          <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" class="w-full" />
        </div>
      </div>
      <div class="flex w-full justify-center gap-2 py-2">
        <a href="#item1" class="btn btn-circle">1</a>
        <a href="#item2" class="btn btn-circle">2</a>
        <a href="#item3" class="btn btn-circle">3</a>
        <a href="#item4" class="btn btn-circle">4</a>
      </div>

      <div class="flex flex-col items-center justify-center h-full my-20">
      <h1 class="font-bold text-5xl">Clinic name</h1>
      <h2 class="font-semibold text-2xl mt-4">คลินิกทำฟัน ทันตกรรมเด็ก โดยทันตแพทย์เฉพาะทาง</h2>
    </div>
    </div>
  </UserLayout>
</template>
