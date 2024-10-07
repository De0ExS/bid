<template>
	<header class="header">
		<p>Logo</p>
		<nav>
			<ul class="header-list">
				<li>
					<RouterLink to="/">Заявки</RouterLink>
				</li>
				<li>
					<RouterLink to="/help">Помощь</RouterLink>
				</li>
				<li>
					<RouterLink to="/messages">Сообщения</RouterLink>
				</li>
				<li>
					<RouterLink to="/login" @click="logout">Выход</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { LOGIN_STORE } from "@/login/store/constants";
import { useStore } from "vuex";

const store = useStore();
const logout = () => store.commit(LOGIN_STORE.MUTATIONS.RESET_LOGIN);
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
}
.header-list {
	display: flex;
}
</style>
