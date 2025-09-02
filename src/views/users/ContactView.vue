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
      <div class="grid grid-cols-2 gap-10 my-20 p-4">
        <div>
          <h1 class="text-2xl font-semibold">ที่อยู่ติดต่อ</h1>
          <div class="text-xl p-4">
            <p>
              <span> 123 หมู่ 4 ตำบลบ้านเป็ด อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000 </span>
            </p>
          </div>

          <div class="text-xl p-4">
            <p>
              <span> โทรศัพท์: 043-123456, 081-2345678 </span>
            </p>
          </div>

          <div class="text-xl p-4">
            <p>
              <span> เวลาเปิด - ปิด </span>
            </p>
          </div>

          <div class="text-xl p-4">
            <p>
              <span> อยู่ใกล้เคียง </span>
            </p>
          </div>
        </div>

        <div>Google Map: https://goo.gl/maps/xyz</div>
      </div>

      <div class=" items-center justify-center flex gap-10 p-20">
      <!-- Facebook -->
      <button class="btn bg-[#1A77F2] text-white border-[#005fd8] w-60 h-20 text-2xl ">
        <svg aria-label="Facebook logo" width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path>
        </svg>
        
        Facebook
      </button>

      </div>
    </div>
  </UserLayout>
</template>
