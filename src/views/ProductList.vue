<template>
  <q-page padding>
    <!-- 標題工具欄 -->
    <q-toolbar>
      <q-toolbar-title>產品列表</q-toolbar-title>
      <q-btn label="新增產品" color="orange" @click="addProduct" />
    </q-toolbar>

    <!-- 卡片區域 -->
    <div class="row q-col-gutter-md q-mt-md">
      <div
        class="col-xs-12 col-sm-6 col-md-3"
        v-for="product in products"
        :key="product.id"
      >
        <q-card :style="{ backgroundColor: 'beige' }">
          <!-- 卡片內容 -->
          <q-card-section>
            <div class="text-h5">{{ product.name }}</div>
            <div class="text-subtitle2 text-positive">
              NTD {{ product.price.toFixed(2) }} 元
            </div>
          </q-card-section>

          <!-- 額外資訊 -->
          <q-card-section>
            <q-chip
              color="purple"
              text-color="black"
              outline
              square
              v-if="product.category"
              class="flex flex-center"
              style="cursor: pointer"
            >
              分類 {{ product.category }}
            </q-chip>
            <q-chip
              :color="product.inStock ? 'green' : 'orange'"
              text-color="white"
              outline
              square
              class="flex flex-center"
              style="cursor: pointer"
            >
              {{ product.inStock ? "有庫存" : "缺貨" }}
            </q-chip>
          </q-card-section>

          <!-- 卡片操作 -->
          <q-card-actions align="center">
            <q-btn
              label="編輯"
              color="primary"
              flat
              @click="editProduct(product.id)"
              style="cursor: pointer"
            />
            <q-btn
              label="刪除"
              color="negative"
              flat
              @click="deleteProduct(product.id)"
              style="cursor: pointer"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import apiservice from "@/utils/ApiService"; // 引入 apiservice

export default {
  setup() {
    const products = ref([]);

    // 在組件掛載後載入資料
    onMounted(async () => {
      const data = await apiservice.fetchApiWithoutPromise(
        "/api/products.json"
      );
      if (data) {
        products.value = data; // 將從 JSON 取得的資料設置為 products
      }
    });

    // 新增產品
    const addProduct = () => {
      alert("新增產品功能尚未實作！");
    };

    // 編輯產品
    const editProduct = (id) => {
      alert(`正在編輯產品 ID: ${id}`);
    };

    // 刪除產品
    const deleteProduct = (id) => {
      alert(`產品 ID: ${id} 已刪除`);
    };

    return {
      products,
      addProduct,
      editProduct,
      deleteProduct,
    };
  },
};
</script>

<style scoped>
/* 卡片容器樣式 */
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.col-xs-12 {
  width: 100%;
}
.col-sm-6 {
  width: 48%;
}
.col-md-4 {
  width: 30%;
}
</style>
