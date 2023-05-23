<script lang="ts">
	// PROPS:
	export let propValue = '';
</script>

<form class="d-flex">
	<div class="input-group">
		<input
			bind:value={propValue}
			type="search"
			class="form-control"
			placeholder="Search..."
			style="height:35px; width:20rem;"
		/>
		<button on:click class="btn btn-outline-secondary px-2" style="height:35px;">
			<i style="font-size: 16px;" class="bx bx-search bx-tada-hover" />
		</button>
	</div>
</form>

<style>
	:global(.dark) .btn-outline-secondary {
		--jean-btn-color: #cbd0dd;
		--jean-btn-border-color: #cbd0dd;
	}
</style>
