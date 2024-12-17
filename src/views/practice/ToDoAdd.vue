<!-- 子組件要傳入ToDoList.vue 父組件 -->
<template>
  <div>
    <!-- 點按鈕後觸發 addItem 事件 -->
    <button @click="addItem" class="border border-orange-400 w-full p-4">
      新增代辦事項
    </button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

// 定義事件名稱 addItem
const emit = defineEmits(["addItem"]);

// 按鈕觸發 addItem 事件
function addItem() {
  emit("addItem");
}
</script>
