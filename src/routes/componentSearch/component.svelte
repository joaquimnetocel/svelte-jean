<script lang="ts">
	import image10 from './image10.webp';
	import image12 from './image12.webp';
	import image3 from './image3.png';
</script>

<div class="search-box navbar-top-search-box d-none d-lg-block" style="width: 25rem">
	<form class="position-relative" data-bs-toggle="search" data-bs-display="static">
		<input
			class="form-control search-input fuzzy-search rounded-pill form-control-sm"
			type="search"
			placeholder="Search..."
			aria-label="Search"
		/>
		<svg
			class="svg-inline--fa fa-magnifying-glass search-box-icon"
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="magnifying-glass"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			data-fa-i2svg=""
			><path
				fill="currentColor"
				d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
			/></svg
		><!-- <span class="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com -->
	</form>
	<div
		class="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
		data-bs-dismiss="search"
	>
		<button class="btn btn-link btn-close-falcon p-0" aria-label="Close" />
	</div>
	<div class="dropdown-menu border border-300 font-base start-0 py-0 overflow-hidden w-100">
		<div class="scrollbar-overlay" style="max-height: 30rem" data-simplebar="init">
			<div class="simplebar-wrapper" style="margin: 0px">
				<div class="simplebar-height-auto-observer-wrapper">
					<div class="simplebar-height-auto-observer" />
				</div>
				<div class="simplebar-mask">
					<div class="simplebar-offset" style="right: 0px; bottom: 0px">
						<div
							class="simplebar-content-wrapper"
							tabindex="-1"
							role="region"
							aria-label="scrollable content"
							style="height: auto; overflow: hidden"
						>
							<div class="simplebar-content" style="padding: 0px">
								<div class="list pb-3">
									<h6 class="dropdown-header text-1000 fs--2 py-2">
										24 <span class="text-500">results</span>
									</h6>
									<hr class="text-200 my-0" />
									<h6 class="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
										Recently Searched
									</h6>
									<div class="py-2">
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-clock-rotate-left"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="clock-rotate-left"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
														data-fa-i2svg=""
														style="transform-origin: 0.5em 0.5em"
													>
														<g transform="translate(256 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C202.1 64 155 85.46 120.2 120.2L151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0L256 0zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"
																	transform="translate(-256 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													Store Macbook
												</div>
											</div>
										</a>
										<!-- svelte-ignore a11y-invalid-attribute -->
										<a class="dropdown-item" href="#">
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-clock-rotate-left"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="clock-rotate-left"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
														data-fa-i2svg=""
														style="transform-origin: 0.5em 0.5em"
													>
														<g transform="translate(256 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C202.1 64 155 85.46 120.2 120.2L151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0L256 0zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"
																	transform="translate(-256 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													MacBook Air - 13″
												</div>
											</div>
										</a>
									</div>
									<hr class="text-200 my-0" />
									<h6 class="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
										Products
									</h6>
									<div class="py-2">
										<a
											class="dropdown-item py-2 d-flex align-items-center"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="file-thumbnail me-2">
												<img class="h-100 w-100 fit-cover rounded-3" src={image3} alt="" />
											</div>
											<div class="flex-1">
												<h6 class="mb-0 text-1000 title">MacBook Air - 13″</h6>
												<p class="fs--2 mb-0 d-flex text-700">
													<span class="fw-medium text-600">8GB Memory - 1.6GHz - 128GB Storage</span
													>
												</p>
											</div>
										</a>
										<a
											class="dropdown-item py-2 d-flex align-items-center"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="file-thumbnail me-2">
												<img class="img-fluid" src={image3} alt="" />
											</div>
											<div class="flex-1">
												<h6 class="mb-0 text-1000 title">MacBook Pro - 13″</h6>
												<p class="fs--2 mb-0 d-flex text-700">
													<span class="fw-medium text-600 ms-2">30 Sep at 12:30 PM</span>
												</p>
											</div>
										</a>
									</div>
									<hr class="text-200 my-0" />
									<h6 class="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
										Quick Links
									</h6>
									<div class="py-2">
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-link text-900"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="link"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 640 512"
														data-fa-i2svg=""
														style="transform-origin: 0.625em 0.5em"
													>
														<g transform="translate(320 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
																	transform="translate(-320 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-solid fa-link text-900" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													Support MacBook House
												</div>
											</div>
										</a>
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-link text-900"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="link"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 640 512"
														data-fa-i2svg=""
														style="transform-origin: 0.625em 0.5em"
													>
														<g transform="translate(320 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
																	transform="translate(-320 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-solid fa-link text-900" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													Store MacBook″
												</div>
											</div>
										</a>
									</div>
									<hr class="text-200 my-0" />
									<h6 class="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
										Files
									</h6>
									<div class="py-2">
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-file-zipper text-900"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="file-zipper"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 384 512"
														data-fa-i2svg=""
														style="transform-origin: 0.375em 0.5em"
													>
														<g transform="translate(192 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM96 32h64v32H96V32zM96 96h64v32H96V96zM96 160h64v32H96V160zM128.3 415.1c-40.56 0-70.76-36.45-62.83-75.45L96 224h64l30.94 116.9C198.7 379.7 168.5 415.1 128.3 415.1zM144 336h-32C103.2 336 96 343.2 96 352s7.164 16 16 16h32C152.8 368 160 360.8 160 352S152.8 336 144 336z"
																	transform="translate(-192 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-solid fa-file-zipper text-900" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													Library MacBook folder.rar
												</div>
											</div>
										</a>
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-file-lines text-900"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="file-lines"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 384 512"
														data-fa-i2svg=""
														style="transform-origin: 0.375em 0.5em"
													>
														<g transform="translate(192 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z"
																	transform="translate(-192 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-solid fa-file-lines text-900" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													Feature MacBook extensions.txt
												</div>
											</div>
										</a>
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-image text-900"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="image"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
														data-fa-i2svg=""
														style="transform-origin: 0.5em 0.5em"
													>
														<g transform="translate(256 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"
																	transform="translate(-256 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-solid fa-image text-900" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													MacBook Pro_13.jpg
												</div>
											</div>
										</a>
									</div>
									<hr class="text-200 my-0" />
									<h6 class="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
										Members
									</h6>
									<div class="py-2">
										<a
											class="dropdown-item py-2 d-flex align-items-center"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/members.html"
										>
											<div class="avatar avatar-l status-online me-2 text-900">
												<img class="rounded-circle" src={image10} alt="" />
											</div>
											<div class="flex-1">
												<h6 class="mb-0 text-1000 title">Carry Anna</h6>
												<p class="fs--2 mb-0 d-flex text-700">anna@technext.it</p>
											</div>
										</a>
										<a
											class="dropdown-item py-2 d-flex align-items-center"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/members.html"
										>
											<div class="avatar avatar-l me-2 text-900">
												<img class="rounded-circle" src={image12} alt="" />
											</div>
											<div class="flex-1">
												<h6 class="mb-0 text-1000 title">John Smith</h6>
												<p class="fs--2 mb-0 d-flex text-700">smith@technext.it</p>
											</div>
										</a>
									</div>
									<hr class="text-200 my-0" />
									<h6 class="dropdown-header text-1000 fs--1 border-bottom border-200 py-2 lh-sm">
										Related Searches
									</h6>
									<div class="py-2">
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-firefox-browser text-900"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="firefox-browser"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512"
														data-fa-i2svg=""
														style="transform-origin: 0.5em 0.5em"
													>
														<g transform="translate(256 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M130.2 127.5C130.4 127.6 130.3 127.6 130.2 127.5V127.5zM481.6 172.9C471 147.4 449.6 119.9 432.7 111.2C446.4 138.1 454.4 165 457.4 185.2C457.4 185.3 457.4 185.4 457.5 185.6C429.9 116.8 383.1 89.11 344.9 28.75C329.9 5.058 333.1 3.518 331.8 4.088L331.7 4.158C284.1 30.11 256.4 82.53 249.1 126.9C232.5 127.8 216.2 131.9 201.2 139C199.8 139.6 198.7 140.7 198.1 142C197.4 143.4 197.2 144.9 197.5 146.3C197.7 147.2 198.1 147.1 198.6 148.6C199.1 149.3 199.8 149.9 200.5 150.3C201.3 150.7 202.1 150.1 202.1 151.1C203.8 151.1 204.7 151 205.5 150.8L206 150.6C221.5 143.3 238.4 139.4 255.5 139.2C318.4 138.7 352.7 183.3 363.2 201.5C350.2 192.4 326.8 183.3 304.3 187.2C392.1 231.1 368.5 381.8 246.1 376.4C187.5 373.8 149.9 325.5 146.4 285.6C146.4 285.6 157.7 243.7 227 243.7C234.5 243.7 255.1 222.8 256.4 216.7C256.3 214.7 213.8 197.8 197.3 181.5C188.4 172.8 184.2 168.6 180.5 165.5C178.5 163.8 176.4 162.2 174.2 160.7C168.6 141.2 168.4 120.6 173.5 101.1C148.4 112.5 128.1 130.5 114.8 146.4H114.7C105 134.2 105.7 93.78 106.3 85.35C106.1 84.82 99.02 89.02 98.1 89.66C89.53 95.71 81.55 102.6 74.26 110.1C57.97 126.7 30.13 160.2 18.76 211.3C14.22 231.7 12 255.7 12 263.6C12 398.3 121.2 507.5 255.9 507.5C376.6 507.5 478.9 420.3 496.4 304.9C507.9 228.2 481.6 173.8 481.6 172.9z"
																	transform="translate(-256 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-brands fa-firefox-browser text-900" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													Search in the Web MacBook
												</div>
											</div>
										</a>
										<a
											class="dropdown-item"
											href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
										>
											<div class="d-flex align-items-center">
												<div class="fw-normal text-1000 title">
													<svg
														class="svg-inline--fa fa-chrome text-900"
														data-fa-transform="shrink-2"
														aria-hidden="true"
														focusable="false"
														data-prefix="fab"
														data-icon="chrome"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 496 512"
														data-fa-i2svg=""
														style="transform-origin: 0.484375em 0.5em"
													>
														<g transform="translate(248 256)">
															<g transform="translate(0, 0)  scale(0.875, 0.875)  rotate(0 0 0)"
																><path
																	fill="currentColor"
																	d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"
																	transform="translate(-248 -256)"
																/></g
															>
														</g></svg
													><!-- <span class="fa-brands fa-chrome text-900" data-fa-transform="shrink-2"></span> Font Awesome fontawesome.com -->
													Store MacBook″
												</div>
											</div>
										</a>
									</div>
								</div>
								<div class="text-center">
									<p class="fallback fw-bold fs-1 d-none">No Result Found.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="simplebar-placeholder" style="width: 0px; height: 0px" />
			</div>
			<div class="simplebar-track simplebar-horizontal" style="visibility: hidden">
				<div class="simplebar-scrollbar" style="width: 0px; display: none" />
			</div>
			<div class="simplebar-track simplebar-vertical" style="visibility: hidden">
				<div class="simplebar-scrollbar" style="height: 0px; display: none" />
			</div>
		</div>
	</div>
</div>
