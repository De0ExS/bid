<template>
	<button>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
interface Props {}
withDefaults(defineProps<Props>(), {
	foo: () => ({}),
});
</script>

<style scoped></style>
