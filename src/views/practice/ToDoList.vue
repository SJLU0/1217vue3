<!--還要繼續改-->
<template>
  <div>
    <h4>ToDoList 修改中</h4>
    <!-- 引入 ToDoAdd 組件，並監聽 addItem 事件 -->
    <ToDoAdd @addItem="handleAddItem" />
    <input
      v-model="newTodo"
      type="text"
      placeholder="輸入事項..."
      class="border border-grey-400 w-full p-4"
    />
    <button class="border border-orange-400 w-full p-4" @click="handleAddItem">
      新增代辦事項
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ToDoAdd from "./ToDoAdd.vue";

//儲存代辦事項的變數
const newTodo = ref("");

// 處理新增代辦事項的方法
function handleAddItem() {
  if (newTodo.value) {
    console.log("新增的代辦事項：", newTodo.value);
    newTodo.value = ""; // 清空輸入框
  } else {
    console.log("請輸入代辦事項");
  }
}
</script>
