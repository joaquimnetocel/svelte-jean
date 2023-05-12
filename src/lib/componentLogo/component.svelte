<script lang="ts">
	import type { typeAllLanguages } from '../typeAllLanguages.js';
	// IMAGES:
	import imageLogo from './imageLogo.png';
	// PROPS:
	export let propWidth = 27;
	export let propSource = imageLogo;
	export let propTitle = 'jean';
	export let propLanguage: typeAllLanguages;
</script>

<a class="navbar-brand me-1 me-sm-3" href={`/${propLanguage}`}>
	<div class="d-flex align-items-center">
		<div class="d-flex align-items-center">
			<img src={propSource} alt="Logo" width={propWidth} />
			<p class="logo-text ms-2 d-none d-sm-block">{propTitle}</p>
		</div>
	</div>
</a>
