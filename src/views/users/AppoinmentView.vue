<script setup>
import UserLayout from "@/components/layouts/UserLayout.vue";
</script>

<template>
  <UserLayout>
    <div class="flex justify-center my-20">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend class="fieldset-legend text-2xl">ทำประวัติ Contact :</legend>

        <legend class="fieldset-legend text-lg">ชื่อของคุณ Name :</legend>
        <input type="text" class="input validator" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
        <p class="validator-hint">
          Must be 3 to 30 characters
          <br />containing only letters, numbers or dash
        </p>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">เพศ Gender :</legend>
          <select class="select">
            <option disabled selected >Please select</option>
            <option>ชาย</option>
            <option>หญิง</option>
            <option>อื่นๆ</option>
          </select>
        </fieldset>

        <legend class="fieldset-legend text-lg">เบอร์ติดต่อ Tel :</legend>
        <input type="tel" class="input validator tabular-nums" required placeholder="Phone" pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
        <p class="validator-hint">กรุณาใส่เบอร์โทร</p>

        <legend class="fieldset-legend text-lg">E-mail ติดต่อ :</legend>
        <input class="input validator" type="email" required placeholder="mail@site.com" />
        <div class="validator-hint">กรุณากรอก email ของคุณ</div>

        <legend class="fieldset-legend text-lg">เรื่องที่ต้องการปรึกษา optional :</legend>
        <textarea class="textarea"></textarea>

        <button class="btn btn-primary btn-lg my-3 text-lg">ยื่นยันการนัดหมาย</button>
      </fieldset>
    </div>
  </UserLayout>
</template>
