<template>
  <q-page padding>
    <!-- 標題工具欄 -->
    <q-toolbar>
      <q-toolbar-title>用戶資訊</q-toolbar-title>
      <q-btn label="編輯" color="orange" @click="editMode = !editMode" />
    </q-toolbar>

    <!-- 用戶資訊卡片 -->
    <q-card class="q-mb-md bg-yellow-2">
      <q-card-section>
        <div class="text-h6">人員基本資料</div>
        <q-separator />

        <!-- 用戶姓名 -->
        <q-input
          v-model="user.name"
          label="姓名"
          :disabled="!editMode"
          outlined
          dense
        />

        <!-- 用戶電子郵件 -->
        <q-input
          v-model="user.email"
          label="電子郵件"
          :disabled="!editMode"
          outlined
          dense
        />

        <!-- 用戶角色 -->
        <q-select
          v-model="user.role"
          label="角色"
          :options="roles"
          :disable="!editMode"
          outlined
          dense
        />

        <!-- 註冊日期 -->
        <q-input
          v-model="user.registrationDate"
          label="註冊日期"
          :disabled="true"
          outlined
          dense
        />
      </q-card-section>

      <!-- 保存與取消按鈕 -->
      <q-card-actions align="center">
        <q-btn
          label="取消"
          color="negative"
          flat
          @click="cancelEdit"
          v-if="editMode"
        />
        <q-btn
          label="保存"
          color="positive"
          flat
          @click="saveUserInfo"
          v-if="editMode"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import apiservice from "@/utils/ApiService"; // 引入 ApiService

interface User {
  name: string;
  email: string;
  role: string;
  registrationDate: string;
}

export default {
  setup() {
    // 假設的用戶資料
    const user = ref<User>({
      name: "",
      email: "",
      role: "",
      registrationDate: "",
    });

    // 角色選項
    const roles = ref(["會員", "管理員", "一般使用者"]);

    // 編輯模式開關
    const editMode = ref(false);

    // 保存用戶資訊
    const saveUserInfo = () => {
      // 這裡可以添加保存邏輯，如提交 API 請求
      console.log("保存用戶資訊", user.value);
      editMode.value = false;
    };

    // 從 API 獲取用戶資料 (userinfo.json)
    const fetchUserData = async () => {
      try {
        const data = await apiservice.fetchApi<User[]>("/api/userinfo.json"); // 動態獲取資料
        if (data && data && data.length > 0) {
          user.value = data[0];
        } else {
          // 處理 data 為 null 的情況
          console.error("未獲取到有效的用戶資料");
        }
      } catch (error) {
        console.error("獲取用戶資訊失敗:", error);
      }
    };
    // 取消編輯
    const cancelEdit = () => {
      // 恢復編輯前的資料
      user.value = {
        name: "張曉華",
        email: "test@example.com",
        role: "會員",
        registrationDate: "2024-01-01",
      };
      editMode.value = false;
    };
    // 頁面加載時獲取用戶資料
    onMounted(() => {
      fetchUserData();
    });

    return {
      user,
      roles,
      editMode,
      saveUserInfo,
      cancelEdit,
    };
  },
};
</script>

<style scoped>
.q-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
