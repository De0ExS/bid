<template>
	<Input
		v-model="searchedName"
		name="applicant"
		placeholder="Введите имя"
		@on-input="setSearchedName"
	/>
	<Select
		v-model="selectedStatus"
		:options="['Завершен', 'Отменен', 'Активен', 'Выполняется', 'Любой']"
		:option-label="(option) => option"
		placeholder="Выберите статус"
		@on-change="setSelectedStatus"
	/>
	<p>Имя: {{ searchedName }}</p>
	<p>Статус: {{ selectedStatus }}</p>
</template>

<script setup lang="ts">
import Input from "@/app/components/Input.vue";
import Select from "@/app/components/Select.vue";
import { ref } from "vue";

type Status = "Завершен" | "Отменен" | "Активен" | "Выполняется" | "Любой";

const searchedName = ref("");
const selectedStatus = ref<Status>("Любой");

const setSearchedName = (updatedName: string) =>
	(searchedName.value = updatedName);

const setSelectedStatus = (updatedStatus: Status) =>
	(selectedStatus.value = updatedStatus);
</script>

<style scoped></style>
