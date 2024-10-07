<template>
	<h1>Войти в систему</h1>
	<form @submit.prevent="onSubmit">
		<Input
			v-model="loginPayload.email"
			name="email"
			label="Email"
			placeholder="Введите Email"
			@on-input="setEmail"
		/>
		<Input
			v-model="loginPayload.password"
			name="пароль"
			label="Пароль"
			placeholder="Введите Пароль"
			@on-input="setPassword"
		/>
		<Button>Войти</Button>
	</form>
</template>

<script setup lang="ts">
import Button from "@/app/components/Button.vue";
import Input from "@/app/components/Input.vue";
import { reactive } from "vue";
import type { LoginPayload } from "../models/login.types";
import { useStore } from "vuex";
import { LOGIN_STORE } from "@/login/store/constants";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const loginPayload = reactive<LoginPayload>({
	email: "",
	password: "",
});

const setEmail = (updatedEmail: string) => (loginPayload.email = updatedEmail);
const setPassword = (updatedPassword: string) =>
	(loginPayload.password = updatedPassword);

const onSubmit = async () => {
	await store.dispatch(LOGIN_STORE.ACTIONS.CALL_LOGIN, loginPayload);
	router.push("/");
};
</script>

<style scoped></style>
