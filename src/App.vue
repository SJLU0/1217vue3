<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy bg-grey">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="openDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar {{ leftDrawerOpen }} version{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-if="leftDrawerOpen" show-if-above bordered class="bg-orange-3">
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        HOME
        <q-item clickable tag="router-Link" :to="{ name: 'home' }">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>首頁</q-item-label>
            <q-item-label caption>HOME PAGE</q-item-label>
          </q-item-section>
        </q-item>
        產品列表
        <q-item clickable tag="router-link" :to="{ name: 'productlist' }">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>產品列表</q-item-label>
            <q-item-label caption>productlist</q-item-label>
          </q-item-section>
        </q-item>
       創建產品
        <q-item clickable tag="router-link" :to="{ name: 'createproduct' }">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>創建產品</q-item-label>
            <q-item-label caption>createproduct</q-item-label>
          </q-item-section>
        </q-item>
        使用者資訊
        <q-item clickable tag="router-link" :to="{ name: 'userinfo' }">
          <q-item-section avatar>
            <q-icon name="woman" />
          </q-item-section>
          <q-item-section>
            <q-item-label>使用者的資訊</q-item-label>
            <q-item-label caption>infomation</q-item-label>
          </q-item-section>
        </q-item>
        API
        <q-item clickable tag="router-link" :to="{ name: 'apitest' }">
          <q-item-section avatar>
            <q-icon name="web" />
          </q-item-section>
          <q-item-section>
            <q-item-label>API test</q-item-label>
            <q-item-label caption>API test</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer> -->
    <Cqheader
      :leftDrawerOpen="leftDrawerOpen"
      @switchMenu="switchMenu"
    ></Cqheader>

    <SlideMenu :leftDrawerOpen="leftDrawerOpen"></SlideMenu>
    <q-page-container>
      <router-view> </router-view>
    </q-page-container>
  </q-layout>
  <!-- <Cqheader :switchMenu="switchMenu"></Cqheader> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
import SlideMenu from "./views/layout/SlideMenu.vue";
import Cqheader from "./views/layout/Cq-header.vue";
import PracticePostCode1 from "./views/PracticePostCode1.vue";
import PracticePostCode2 from "./views/PracticePostCode2.vue";
const leftDrawerOpen = ref(false);

const openDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const switchMenu = () => {
  console.log("switch Menu go");
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
