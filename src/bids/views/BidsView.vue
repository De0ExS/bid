<template>
	<h2>Заявки</h2>
	<Button @click="showModal">Создать новую</Button>
	<BidsFilterToolbar />
	<BidsTable />
	<Modal ref="modal">
		<BidsForm v-if="modal?.visible" @on-submit="closeModal" />
	</Modal>
</template>

<script setup lang="ts">
import Button from "@/app/components/Button.vue";
import BidsFilterToolbar from "../components/BidsFilterToolbar.vue";
import BidsTable from "../components/BidsTable.vue";
import BidsForm from "../components/BidsForm.vue";
import Modal from "@/app/components/Modal.vue";
import { ref } from "vue";

const modal = ref<InstanceType<typeof Modal>>();
const showModal = () => modal.value?.show();
const closeModal = () => modal.value?.close();
</script>

<style scoped></style>
