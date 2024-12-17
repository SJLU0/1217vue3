<template>
  <h3>1216 下午 進階</h3>
  <h6>輸入郵遞區號可自動代入縣市區域</h6>
  <h6>選擇縣市要過濾區域</h6>
  <h6>選擇縣市、區域後，可自動帶回郵遞區號</h6>
  <section>
    <p>請輸入郵遞區號</p>
    <input type="text" v-model="zipcode" @input="updateLocation" />
    <!-- 選擇縣市 -->
    <p>請選擇縣市</p>
    <select v-model="selectCity">
      <option v-for="city in Object.keys(cityMap)" :key="city" :value="city">
        {{ city }}
      </option>
    </select>
    <!-- 選擇區域 -->
    <p>請選擇區域</p>
    <select v-model="selectArea">
      <option v-for="area in ableAreas" :key="area" :value="area">
        {{ area }}
      </option>
    </select>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
// 同學是用台北市去儲存對應的區域和郵遞區號
const zipcodeMap = {
  100: { city: "台北市", area: "中正區" },
  103: { city: "台北市", area: "大同區" },
  105: { city: "台北市", area: "松山區" },
  220: { city: "新北市", area: "板橋區" },
  221: { city: "新北市", area: "汐止區" },
  235: { city: "新北市", area: "中和區" },
};

//縣市與區域對應
const cityMap = {
  台北市: ["中正區", "大同區", "松山區"],
  新北市: ["板橋區", "汐止區", "中和區"],
};

//使用 ref
const zipcode = ref("");
const selectCity = ref("");
const selectArea = ref("");

// 根據選中的縣市動態計算區域
const ableAreas = computed(() => {
  return cityMap[selectCity.value] || [];
});

// 更新縣市和區域
const updateLocation = () => {
  const location = zipcodeMap[zipcode.value];
  if (location) {
    selectCity.value = location.city;
    selectArea.value = location.area;
  } else {
    selectCity.value = "";
    selectArea.value = "";
  }
};
</script>
