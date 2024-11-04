<script lang="ts">
	// import * as icn from "@radix-ui/react-icons";
	import * as icn from "lucide-svelte";
	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";


	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	let { children } = $props();

	import { ModeWatcher } from "mode-watcher";

	

</script>

<ModeWatcher defaultMode={'dark'} disableTransitions={false} />
<ParaglideJS {i18n}>
	<Header />
	<main class="mt-24 min-h-svh w-full">
		{@render children()}
	</main>
	<Footer/>
</ParaglideJS>