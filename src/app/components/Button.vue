<template>
	<button>Кнопка</button>
</template>

<script setup lang="ts">
interface Props {}
withDefaults(defineProps<Props>(), {
	foo: () => ({}),
});
</script>

<style scoped></style>
