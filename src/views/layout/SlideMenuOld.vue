<template>
  <div>
    <q-drawer v-if="leftDrawerOpen" show-if-above bordered class="bg-orange-2">
      <q-list>
        <q-item-label header>Links</q-item-label>
        <!--HOME-->
        <q-item clickable tag="router-Link" :to="{ name: 'home' }">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>首頁</q-item-label>
            <q-item-label caption>HOME PAGE</q-item-label>
          </q-item-section>
        </q-item>
        <!--產品列表-->
        <q-item clickable tag="router-link" :to="{ name: 'productlist' }">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>產品列表</q-item-label>
            <q-item-label caption>productlist</q-item-label>
          </q-item-section>
        </q-item>
        <!--新增產品-->
        <q-item clickable tag="router-link" :to="{ name: 'createproduct' }">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>新增產品</q-item-label>
            <q-item-label caption>createproduct</q-item-label>
          </q-item-section>
        </q-item>
        <!--使用者資訊-->
        <q-item clickable tag="router-link" :to="{ name: 'userinfo' }">
          <q-item-section avatar>
            <q-icon name="woman" />
          </q-item-section>
          <q-item-section>
            <q-item-label>使用者的資訊</q-item-label>
            <q-item-label caption>infomation</q-item-label>
          </q-item-section>
        </q-item>
        <!--API-->
        <q-item clickable tag="router-link" :to="{ name: 'apitest' }">
          <q-item-section avatar>
            <q-icon name="web" />
          </q-item-section>
          <q-item-section>
            <q-item-label>API 測試</q-item-label>
            <q-item-label caption>API test</q-item-label>
          </q-item-section>
        </q-item>
        <!--postcode1-->
        <q-item clickable tag="router-link" :to="{ name: 'postcode1' }">
          <q-item-section avatar>
            <q-icon name="man" />
          </q-item-section>
          <q-item-section>
            <q-item-label>1216 郵遞區號練習1</q-item-label>
            <q-item-label caption>郵遞區號1</q-item-label>
          </q-item-section>
        </q-item>
        <!--postcode2-->
        <q-item clickable tag="router-link" :to="{ name: 'postcode2' }">
          <q-item-section avatar>
            <q-icon name="man" />
          </q-item-section>
          <q-item-section>
            <q-item-label>1216 郵遞區號練習2</q-item-label>
            <q-item-label caption>郵遞區號2</q-item-label>
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
</script>
