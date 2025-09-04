<script setup>
import UserLayout from "@/components/layouts/UserLayout.vue";
</script>
<template>
  <UserLayout>
    <div class="columns-1 justify-center items-center w-full p-20">
      <div class="mb-8 text-center px-4">
        <h1 class="text-left text-2xl font-bold">
          การขูดหินปูน
          <div class="divider m-0 max-w-2xl"></div>
        </h1>
        <p class="text text-justify my-5">
          การขูดหินปูน เป็นการนำเครื่องมือทางทันตกรรมมาขจัดคราบหินปูนที่ฝังอยู่บริเวณซอกฟันให้หลุดออกไปด้วยการใช้คลื่นความถี่สูงในการกะเทาะหินปูนออก
          ซึ่งจะมีวิธีการทำที่ไม่ยุ่งยากและใช้เวลาไม่นานขึ้นอยู่กับปริมาณของคราบหินปูนของแต่ละบุคคล และขึ้นอยู่กับตัวเครื่องมือขูดหินปูนของทันตแพทย์อีกด้วย
        </p>
      </div>

      <div class="mb-8 text-center px-4">
        <h1 class="text-left text-2xl font-bold">
          คราบหินปูน คืออะไร
          <div class="divider m-0 max-w-2xl"></div>
        </h1>
        <p class="text text-justify my-5">
          อย่างที่เรารู้กันว่าคราบหินปูนนั้นเกิดจากเชื้อแบคทีเรียที่มีการสะสมมาจากเศษอาหาร หรือคราบโปรตีนที่ยังหลงเหลืออยู่ในปากจนเกิดเป็นแผ่นจุลินทรีย์ เมื่อเกิดการทับถมขึ้นเรื่อย ๆ
          ก็จะกลายเป็นคราบหินปูน ในที่สุด พูดง่าย ๆ คือเกิดจากเราแปรงฟันไม่สะอาดนั่นเอง ซึ่งนอกจากฟันจะไม่สะอาดแล้วยังส่งผลอันตรายต่อสุขภาพช่องปากคือทำให้เราเสี่ยงที่จะเป็นโรคปริทันต์ในอนาคต
        </p>
      </div>

      <div class="mb-8 text-center px-4">
        <h1 class="text-left text-2xl font-bold">
          สัญญาณเตือนว่าถึงเวลาที่ต้องขูดหินปูน
          <div class="divider m-0 max-w-2xl"></div>
        </h1>
        <p class="text text-justify my-5">ใครที่กำลังมีอาการดังต่อไปนี้ นี่คือสัญญาณเตือนว่าถึงเวลาแล้วที่คุณจะต้องเข้ารับการขูดหินปูน</p>
        <ul class="list-decimal list text text-justify my-2 mx-8">
          <li>ฟันเหลือง</li>
          <li>มีกลิ่นปาก</li>
          <li>มีคราบหินปูนเกาะที่คอฟันและหน้าฟัน ทำให้ผิวฟันขรุขระ</li>
          <li>เลือดออกตามไรฟัน</li>
        </ul>
        <p class="text text-justify my-5">หากมีอาการเหล่านี้แนะนำรีบไปขูดหินปูนโดยเร็ว แต่เป็นไปได้ก็อย่าปล่อยจนมีอาการเหล่านี้และเข้าพบทันตแพทย์สม่ำเสมอจะดีที่สุดค่ะ</p>
      </div>

      <div class="mb-8 text-center px-4">
        <h1 class="text-left text-2xl font-bold">
          ขูดหินปูนราคาเท่าไหร่ ?
          <div class="divider m-0 max-w-2xl"></div>
        </h1>
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <!-- head -->
            <thead>
              <tr class="text-center bg-purple-200">
                <th>บริการ</th>
                <th>ราคา</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <!-- row 1 -->
              <tr>
                <td>ขูดหินปูน</td>
                <td>เริ่มต้น 800 - 1800</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
