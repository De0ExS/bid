<template>
	<select :value="modelValue" @change="handleSelect">
		<option v-for="item in options" :key="item">
			{{ item }}
		</option>
	</select>
</template>

<script setup lang="ts">
interface Props {
	modelValue: string;
	options: string[];
}
withDefaults(defineProps<Props>(), {
	modelValue: "",
});
const emit = defineEmits<{ (event: "update", value: string): void }>();
const handleSelect = (event: Event) =>
	emit("update", (event.target as HTMLSelectElement).value);
</script>

<style scoped></style>
