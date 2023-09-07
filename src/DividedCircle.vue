<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  radius: {
    type: String,
    default: '100px',
  },
  parts: {
    type: Number,
    default: 12,
    validator: value => Number(value) > 2,
  },
})

const emits = defineEmits(['partClick'])

const parts = computed(() => Math.floor(props.parts))

const rotate = computed(() => `${(180 - 360 / parts.value) / 2 + (360 / parts.value)}deg`)
</script>

<template>
  <ul class="circle">
    <li
      v-for="part in parts" :key="part" class="circle-part" :style="{ '--part': part }"
      @click="emits('partClick', part)"
    >
      <div class="circle-part-inner_wrapper">
        <div class="circle-part-inner">
          <slot :part="part" />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.circle {
      --radius: v-bind(props.radius);
      --parts: v-bind(parts);
      --part-degree: calc(360deg / var(--parts));
      overflow: hidden;
      position: relative;
      margin: 0;
      padding: 0;
      border-radius: 50%;
      width: calc(var(--radius) * 2);
      height: calc(var(--radius) * 2);
      background-color: #ccc;
      transform: rotate(v-bind(rotate));
    }

    .circle-part {
      overflow: hidden;
      position: absolute;
      top: -50%;
      left: -50%;
      width: 100%;
      height: 100%;
      list-style: none;
      transform: rotate(calc(var(--part-degree) * calc(var(--part) - 1)))
                 skew(calc(90deg - var(--part-degree))) ;
      transform-origin: right bottom;
    }

    .circle-part:hover {
      background-color: #42b883;
    }

    .circle-part-inner_wrapper {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      width: 100%;
      height: 100%;
      transform: skew(calc(var(--part-degree) - 90deg))
                 rotate(calc(calc(var(--part-degree) / 2) - 90deg))
                 translate(50%);
      transform-origin: right bottom;
    }

    .circle-part-inner {
      height: 50%;
    }
</style>
