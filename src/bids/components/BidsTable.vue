<template>
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>ФИО</th>
				<th>Телефон</th>
				<th>Сумм</th>
				<th>Статус</th>
				<th>Действие</th>
			</tr>
		</thead>
		<tbody></tbody>
	</table>
</template>

<script setup lang="ts">
interface Props {}

const props = defineProps<Props>();

const emits = defineEmits<{ (foo: "foo"): string }>();
</script>

<style scoped></style>
