<template>
	<label :for="name" v-if="label">{{ label }}</label>
	<input v-bind="attrs" :value="modelValue" @input="handleInput" :id="name" />
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
interface Props {
	modelValue: string;
	name: string;
	label?: string;
}

withDefaults(defineProps<Props>(), {
	modelValue: "",
	name: "test",
	label: "",
});

const attrs = useAttrs();

const emit = defineEmits<{ (event: "on-input", value: string): void }>();
const handleInput = (event: Event) =>
	emit("on-input", (event.target as HTMLInputElement).value);
</script>

<style scoped></style>
