<script setup>
import UserLayout from "@/components/layouts/UserLayout.vue";
</script>

<template>
  <UserLayout>
    <div class="flex flex-col items-center justify-center h-full my-20">
      <h1 class="font-bold text-5xl">Clinic name</h1>
      <h2 class="font-semibold text-2xl mt-4">คลินิกทำฟัน ทันตกรรมเด็ก จัดฟันขอนแก่น โดยทันตแพทย์เฉพาะทาง</h2>
    </div>
    
    <div>
<div class="grid grid-cols-2 gap-4 my-20">
        <div>
            <h1>ที่อยู่ติดต่อ</h1>
        </div>
        <div>
            Google Map: https://goo.gl/maps/xyz
        </div>
    </div>
    </div>
    
  </UserLayout>
</template>
