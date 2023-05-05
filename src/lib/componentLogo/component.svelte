<script>
	// IMAGES
	import imageLogo from './imageLogo.png';
	/////

	export let propWidth = 27;
	export let propSource = imageLogo;
	export let propTitle = 'jean';
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a class="navbar-brand me-1 me-sm-3" href="javascript:void(0);">
	<div class="d-flex align-items-center">
		<div class="d-flex align-items-center">
			<img src={propSource} alt="Logo" width={propWidth} />
			<p class="logo-text ms-2 d-none d-sm-block">{propTitle}</p>
		</div>
	</div>
</a>
