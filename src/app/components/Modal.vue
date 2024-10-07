<template>
	<Teleport to="body">
		<dialog ref="dialog">
			<slot></slot>
			<button @click="closeModal">Закрыть</button>
		</dialog>
	</Teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<HTMLDialogElement>();
const visible = ref(false);

const showModal = () => {
	dialog.value?.showModal();
	visible.value = true;
};
const closeModal = () => {
	dialog.value?.close();
	visible.value = false;
};

defineExpose({
	show: showModal,
	close: closeModal,
	visible,
});
</script>

<style scoped></style>
