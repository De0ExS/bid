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

const attrs = useAttrs();
withDefaults(defineProps<Props>(), {
	modelValue: "",
	string: "test",
	label: "",
});
const emit = defineEmits<{ (event: "update", value: string): void }>();
const handleInput = (event: Event) =>
	emit("update", (event.target as HTMLInputElement).value);
</script>

<style scoped></style>
