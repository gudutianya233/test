<template>
  <a-spin size="large" class="postion" :spinning="data" />
</template>

<script lang="ts" setup>
import { toRefs, ref, watch } from "vue";

const data = ref<boolean>(true);
const props = defineProps<{
  spinning: boolean;
}>();
const { spinning } = toRefs(props);
watch(
  () => spinning.value,
  () => {
    data.value = spinning.value;
  }
);
</script>

<style lang="less" scoped>
.postion {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
