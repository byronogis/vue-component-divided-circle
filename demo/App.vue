<script setup lang="ts">
import { ref } from 'vue'
import { name, version } from '../package.json'

const parts = ref(12)
</script>

<template>
  <div class="container">
    <DividedCircle :parts="parts" @partClick="(part) => console.log(part)">
      <template #default="slotProps">
        <div class="part">
          {{ slotProps.part }}
        </div>
      </template>
    </DividedCircle>

    <input v-model="parts" type="number" min="3">

    <footer class="footer">
      <a :href="`https://www.npmjs.com/package/${name}`" target="_blank">{{ name }}@{{ version }}</a>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

input {
  margin-top: 50px;
}

:deep() {
  .circle {
    background-color: antiquewhite;
  }
}

.part {
  padding-top: 12px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.5rem;
  text-align: center;
  background-color: #f5f5f5;
}
</style>
