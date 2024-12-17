<!-- 1217 用v-for帶出陣列元素-->
<template>
  <div>
    <q-drawer v-if="leftDrawerOpen" show-if-above bordered class="bg-orange-2">
      <q-list>
        <q-item-label header>Links</q-item-label>
        <!-- v-for迴圈 -->
        <q-item
          v-for="(item, index) in menuList"
          :key="index"
          clickable
          tag="router-link"
          :to="{ name: item.routeName }"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
            <q-item-label caption>{{ item.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </div>
</template>

<script setup>
import { defineProps, toRef } from "vue";

const props = defineProps({
  leftDrawerOpen: Boolean,
});

const leftDrawerOpen = toRef(props, "leftDrawerOpen");

//定義側邊欄位資料
const menuList = [
  { routeName: "homepage", label: "首頁", caption: "HOME PAGE", icon: "home" },
  {
    routeName: "productlist",
    label: "產品列表",
    caption: "productlist",
    icon: "list",
  },
  {
    routeName: "createproduct",
    label: "新增產品",
    caption: "createproduct",
    icon: "school",
  },
  {
    routeName: "userinfo",
    label: "使用者的資訊",
    caption: "infomation",
    icon: "person",
  },
  { routeName: "apitest", label: "API 測試", caption: "API test", icon: "web" },
  {
    routeName: "postcode1",
    label: "1216 郵遞區號練習1",
    caption: "郵遞區號1",
    icon: "edit",
  },
  {
    routeName: "postcode2",
    label: "1216 郵遞區號練習2",
    caption: "郵遞區號2",
    icon: "edit",
  },
  {
    routeName: "todolist",
    label: "1216 自己寫代辦清單練習",
    caption: "代辦清單",
    icon: "edit",
  },
];
</script>
