<template>
	<form @submit.prevent="handleSubmit">
		<Input
			v-model="newBid.fullName"
			name="fullName"
			label="ФИО"
			@on-input="setFullName"
		/>
		<Input
			v-model="newBid.phone"
			name="phone"
			type="tel"
			label="Телефон"
			@on-input="setPhone"
		/>
		<Input
			v-model="newBid.amount"
			name="amount"
			type="number"
			label="Сумма"
			@on-input="setAmount"
		/>
		<Button>Создать</Button>
	</form>
</template>

<script setup lang="ts">
import Button from "@/app/components/Button.vue";
import Input from "@/app/components/Input.vue";
import { reactive } from "vue";

const newBid = reactive({
	fullName: "",
	phone: "",
	amount: "",
});

const setFullName = (updatedFullName: string) =>
	(newBid.fullName = updatedFullName);
const setPhone = (updatedPhone: string) => (newBid.phone = updatedPhone);
const setAmount = (updatedAmount: string) => (newBid.amount = updatedAmount);

const emit = defineEmits<{ (event: "on-submit"): void }>();
const handleSubmit = () => {
	emit("on-submit");
};
</script>

<style scoped></style>
