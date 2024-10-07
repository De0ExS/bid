<template>
	<select :value="modelValue" @change="handleSelect">
		<option value="" disabled>
			{{ placeholder || "Выберите опцию" }}
		</option>
		<option
			v-for="option in options"
			:key="toKey(option)"
			:value="optionToValue(option)"
		>
			{{ optionLabel(option) }}
		</option>
	</select>
</template>

<script
	setup
	lang="ts"
	generic="
        TOption extends string | Record<string, unknown>,
        TValue = TOption"
>
interface Props {
	modelValue: string;
	options: TOption[];
	optionLabel: (option: TOption) => string;
	optionValue?: (option: TOption) => TValue;
	placeholder?: string;
}

const props = defineProps<Props>();

const optionToValue = (option: TOption) => {
	if (props.optionValue) {
		return props.optionValue(option);
	}
	return option;
};

const toKey = (option: TOption): string =>
	JSON.stringify(optionToValue(option));

const emit = defineEmits<{ (event: "on-change", value: TValue): void }>();
const handleSelect = (event: Event) =>
	emit("on-change", (event.target as HTMLSelectElement).value as TValue);
</script>

<style scoped></style>
