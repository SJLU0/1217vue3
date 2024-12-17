<template>
  <q-page class="q-pa-md">
    <!-- 歡迎區塊 -->
    <q-banner class="q-mb-md" color="orange" text-color="white">
      <div class="text-h6">Welcome 我們的系統！</div>
      <div>您可以在此管理和查看資訊</div>
    </q-banner>

    <!-- 主要功能區塊 -->
    <!-- 功能區塊 1 -->
    <div class="q-gutter-md">
      <div class="row">
        <div class="col-12 col-md-6">
          <q-card>
            <q-card-section>
              <div class="text-h6">天氣</div>
              <p>晴天</p>
            </q-card-section>
            <q-card-actions>
              <q-btn
                label="See More..."
                color="brown"
                flat
                @click="goToFeature('1')"
              />
            </q-card-actions>
          </q-card>
        </div>

        <!--功能區塊 2-->
        <div class="col-12">
          <q-card class="my-card bg-secondary text-white">
            <q-card-section>
              <div class="text-h6">近期活動</div>
              <div class="text-subtitle2">2024年末交流晚會</div>
            </q-card-section>
            <q-card-actions>
              <q-btn
                flat
                label="See More..."
                color="white"
                @click="goToFeature('2')"
              ></q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 最新資訊區塊 -->
    <div class="q-mt-md">
      <q-card>
        <q-card-section>
          <div class="text-h6">最新資訊</div>
          <q-separator />
          <q-list>
            <q-item v-for="(news, index) in newsList" :key="index" clickable>
              <q-item-section>
                <div class="text-body1">{{ news.title }}</div>
                <div class="text-caption">{{ news.date }}</div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter
import apiservice from "@/utils/ApiService"; // 引入 ApiService

export default {
  setup() {
    const newsList = ref([]);
    const router = useRouter(); // 使用 useRouter 來獲取 router

    // 模擬最新資訊數據
    const fetchNewsData = async () => {
      try {
        // 假設 API 路徑為 '/api/homepage.json'
        const data = await apiservice.fetchApi("/api/homepage.json");
        if (data) {
          newsList.value = data; // 更新本地的新聞列表
        } else {
          console.error("未獲取到有效的新聞資料");
        }
      } catch (error) {
        console.error("獲取新聞資料失敗:", error);
      }
    };

    // 在組件掛載時調用 fetchNewsData
    onMounted(() => {
      fetchNewsData();
    });

    // 功能區塊點擊跳轉
    const goToFeature = (featureId) => {
      console.log(`跳轉到功能區塊 ${featureId}`);
      // 這裡可以根據功能 ID 跳轉到相應頁面
    };

    // 導向用戶資訊頁
    // 導向用戶資訊頁
    const goToUserInfo = () => {
      router.push("/user-info");
    };

    // 登出功能
    const logout = () => {
      console.log("登出");
      // 清除登錄狀態、跳轉到登入頁等
    };

    return {
      newsList,
      goToFeature,
      goToUserInfo,
      logout,
    };
  },
};
</script>

<style scoped>
.q-banner {
  margin-bottom: 16px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.col-12 {
  width: 100%;
}
.col-md-6 {
  width: 48%;
  margin-right: 4%;
}
.q-card {
  min-height: 200px;
}
</style>
