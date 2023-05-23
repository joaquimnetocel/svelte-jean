<footer class="footer position-absolute h-auto px-1 px-sm-3">
	<div class="row g-0 justify-content-between align-items-center h-100">
		<div class="col-12 col-sm-auto text-center">
			<p class="mb-0 mb-sm-2 mt-2 text-900">
				<slot name="slotLeft" />
			</p>
		</div>
		<div class="col-12 col-sm-auto text-center">
			<p class="mb-2 mt-0 mt-sm-2 text-600">
				<slot name="slotRight" />
			</p>
		</div>
	</div>
</footer>

<style>
	@media (min-width: 576px) {
		.col-sm-auto {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: auto;
		}
	}
	.footer {
		bottom: 0;
		width: 100%;
		height: 6rem;
		border-top: 1px solid var(--jean-navbar-footer-border-color);
		padding: 0 1.5rem;
		left: 0;
	}
	@media (min-width: 576px) {
		.footer {
			height: 4rem;
		}
	}
	@media (min-width: 992px) {
		.footer {
			padding: 0 2.5rem;
		}
	}
</style>
