<template>
	<Button></Button>
	<Input v-model.trim="msg" name="test" label="Имя" @update="onInput" />
	<p>{{ msg }}</p>
	<Select v-model="selected" :options="['Все', 'Частные']" @update="onSelect" />
	<p>{{ selected }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";
import Select from "./components/Select.vue";

const msg = ref("");
const selected = ref("");
const onInput = (updatedValue: string) => {
	msg.value = updatedValue;
};
const onSelect = (updatedValue: string) => {
	console.log(updatedValue);
	selected.value = updatedValue;
};
defineEmits<{ (foo: "foo"): string }>();
</script>

<style scoped></style>
