<script lang="ts">
	// IMAGES
	import image301 from './301.webp';
	/////

	// STATES
	let stateCollapsed = true;
	/////
</script>

<div class="support-chat-container show">
	<div class="container-fluid support-chat" class:show-chat={!stateCollapsed}>
		<div class="card bg-white">
			<div class="card-header d-flex flex-between-center px-4 py-3 border-bottom">
				<h5 class="mb-0 d-flex align-items-center gap-2">
					Demo widget<svg
						class="svg-inline--fa fa-circle text-success fs--3"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="circle"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
						/></svg
					><!-- <span class="fa-solid fa-circle text-success fs--3"></span> Font Awesome fontawesome.com -->
				</h5>
				<div class="btn-reveal-trigger">
					<button
						class="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
						type="button"
						id="support-chat-dropdown"
						data-bs-toggle="dropdown"
						data-boundary="window"
						aria-haspopup="true"
						aria-expanded="false"
						data-bs-reference="parent"
					>
						<svg
							class="svg-inline--fa fa-ellipsis text-900"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="ellipsis"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							data-fa-i2svg=""
							><path
								fill="currentColor"
								d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z"
							/></svg
						><!-- <span class="fas fa-ellipsis-h text-900"></span> Font Awesome fontawesome.com -->
					</button>
					<div class="dropdown-menu dropdown-menu-end py-2" aria-labelledby="support-chat-dropdown">
						<a
							class="dropdown-item"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Request a callback</a
						><a
							class="dropdown-item"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Search in chat</a
						><a
							class="dropdown-item"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Show history</a
						><a
							class="dropdown-item"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Report to Admin</a
						><a
							class="dropdown-item btn-support-chat"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
							>Close Support</a
						>
					</div>
				</div>
			</div>
			<div class="card-body chat p-0">
				<div class="d-flex flex-column-reverse scrollbar h-100 p-3">
					<div class="text-end mt-6">
						<a
							class="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
						>
							<p class="mb-0 fw-semi-bold fs--1">I need help with something</p>
							<svg
								class="svg-inline--fa fa-paper-plane text-primary fs--1 ms-3"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="paper-plane"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
								><path
									fill="currentColor"
									d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
								/></svg
							><!-- <span class="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span> Font Awesome fontawesome.com -->
						</a><a
							class="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
						>
							<p class="mb-0 fw-semi-bold fs--1">I can’t reorder a product I previously ordered</p>
							<svg
								class="svg-inline--fa fa-paper-plane text-primary fs--1 ms-3"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="paper-plane"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
								><path
									fill="currentColor"
									d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
								/></svg
							><!-- <span class="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span> Font Awesome fontawesome.com -->
						</a><a
							class="mb-2 d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
						>
							<p class="mb-0 fw-semi-bold fs--1">How do I place an order?</p>
							<svg
								class="svg-inline--fa fa-paper-plane text-primary fs--1 ms-3"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="paper-plane"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
								><path
									fill="currentColor"
									d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
								/></svg
							><!-- <span class="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span> Font Awesome fontawesome.com -->
						</a><a
							class="false d-inline-flex align-items-center text-decoration-none text-1100 hover-bg-soft rounded-pill border border-primary py-2 ps-4 pe-3"
							href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!"
						>
							<p class="mb-0 fw-semi-bold fs--1">My payment method not working</p>
							<svg
								class="svg-inline--fa fa-paper-plane text-primary fs--1 ms-3"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="paper-plane"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
								><path
									fill="currentColor"
									d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
								/></svg
							><!-- <span class="fa-solid fa-paper-plane text-primary fs--1 ms-3"></span> Font Awesome fontawesome.com -->
						</a>
					</div>
					<div class="text-center mt-auto">
						<div class="avatar avatar-3xl status-online">
							<img class="rounded-circle border border-3 border-white" src={image301} alt="" />
						</div>
						<h5 class="mt-2 mb-3">Eric</h5>
						<p class="text-center text-black mb-0">
							Ask us anything – we’ll get back to you here or by email within 24 hours.
						</p>
					</div>
				</div>
			</div>
			<div class="card-footer d-flex align-items-center gap-2 border-top ps-3 pe-4 py-3">
				<div class="d-flex align-items-center flex-1 gap-3 border rounded-pill px-4">
					<input
						class="form-control outline-none border-0 flex-1 fs--1 px-0"
						type="text"
						placeholder="Write message"
					/><label class="btn btn-link d-flex p-0 text-500 fs--1 border-0" for="supportChatPhotos"
						><svg
							class="svg-inline--fa fa-image"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="image"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							data-fa-i2svg=""
							><path
								fill="currentColor"
								d="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"
							/></svg
						><!-- <span class="fa-solid fa-image"></span> Font Awesome fontawesome.com --></label
					><input class="d-none" type="file" accept="image/*" id="supportChatPhotos" /><label
						class="btn btn-link d-flex p-0 text-500 fs--1 border-0"
						for="supportChatAttachment"
					>
						<svg
							class="svg-inline--fa fa-paperclip"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="paperclip"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							data-fa-i2svg=""
							><path
								fill="currentColor"
								d="M364.2 83.8C339.8 59.39 300.2 59.39 275.8 83.8L91.8 267.8C49.71 309.9 49.71 378.1 91.8 420.2C133.9 462.3 202.1 462.3 244.2 420.2L396.2 268.2C407.1 257.3 424.9 257.3 435.8 268.2C446.7 279.1 446.7 296.9 435.8 307.8L283.8 459.8C219.8 523.8 116.2 523.8 52.2 459.8C-11.75 395.8-11.75 292.2 52.2 228.2L236.2 44.2C282.5-2.08 357.5-2.08 403.8 44.2C450.1 90.48 450.1 165.5 403.8 211.8L227.8 387.8C199.2 416.4 152.8 416.4 124.2 387.8C95.59 359.2 95.59 312.8 124.2 284.2L268.2 140.2C279.1 129.3 296.9 129.3 307.8 140.2C318.7 151.1 318.7 168.9 307.8 179.8L163.8 323.8C157.1 330.5 157.1 341.5 163.8 348.2C170.5 354.9 181.5 354.9 188.2 348.2L364.2 172.2C388.6 147.8 388.6 108.2 364.2 83.8V83.8z"
							/></svg
						><!-- <span class="fa-solid fa-paperclip"></span> Font Awesome fontawesome.com --></label
					><input class="d-none" type="file" id="supportChatAttachment" />
				</div>
				<button class="btn p-0 border-0 send-btn">
					<svg
						class="svg-inline--fa fa-paper-plane fs--1"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="paper-plane"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
						/></svg
					><!-- <span class="fa-solid fa-paper-plane fs--1"></span> Font Awesome fontawesome.com -->
				</button>
			</div>
		</div>
	</div>
	<button
		class:btn-chat-close={!stateCollapsed}
		class="btn p-0 border border-200 btn-support-chat"
		on:click={() => (stateCollapsed = !stateCollapsed)}
	>
		<span class="fs-0 btn-text text-primary text-nowrap">Chat demo</span><svg
			class="svg-inline--fa fa-circle text-success fs--1 ms-2"
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="circle"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			data-fa-i2svg=""
			><path
				fill="currentColor"
				d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
			/></svg
		><!-- <span class="fa-solid fa-circle text-success fs--1 ms-2"></span> Font Awesome fontawesome.com --><svg
			class="svg-inline--fa fa-chevron-down text-primary fs-1"
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="chevron-down"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			data-fa-i2svg=""
			><path
				fill="currentColor"
				d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z"
			/></svg
		><!-- <span class="fa-solid fa-chevron-down text-primary fs-1"></span> Font Awesome fontawesome.com -->
	</button>
</div>
