<script>
	import ComponentHome from './componentHome.svelte';
</script>

<ComponentHome />

<!-- APPS -->
<li class="nav-item">
	<!-- label-->
	<p class="navbar-vertical-label">Apps</p>
	<hr class="navbar-vertical-line" />
	<!-- ECOMMERCE -->
	<div class="nav-item-wrapper">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			class="nav-link dropdown-indicator label-1"
			href="#"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="true"
			aria-controls="e-commerce"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
					>
						<path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/>
					</svg>
					<!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-shopping-cart"
					>
						<circle cx="9" cy="21" r="1" />
						<circle cx="20" cy="21" r="1" />
						<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
					</svg>
				</span>
				<span class="nav-link-text">E commerce</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent show" data-bs-parent="#navbarVerticalCollapse" id="e-commerce">
				<li class="collapsed-nav-item-title d-none">E commerce</li>
				<!-- ADMIN -->
				<li class="nav-item">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="nav-link dropdown-indicator"
						href="#"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="e-commerce"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/>
								</svg>
								<!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Admin</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent show" data-bs-parent="#e-commerce" id="admin">
							<!-- ADD PRODUCT -->
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/admin/add-product.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Add product</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<!-- END OF ADD PRODUCT -->
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/admin/products.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Products</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/admin/customers.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Customers</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/admin/customer-details.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Customer details</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/admin/orders.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Orders</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/admin/order-details.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Order details</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/admin/refund.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Refund</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<!-- END OF ADMIN -->
				<!-- CUSTOMER -->
				<li class="nav-item">
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="nav-link dropdown-indicator"
						href="#"
						data-bs-toggle="collapse"
						aria-expanded="true"
						aria-controls="e-commerce"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Customer</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent show" data-bs-parent="#e-commerce" id="customer">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/homepage.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Homepage</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/product-details.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Product details</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/products-filter.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Products filter</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/cart.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Cart</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/checkout.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Checkout</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/shipping-info.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Shipping info</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/profile.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Profile</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/favourite-stores.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Favourite stores</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/wishlist.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Wishlist</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/order-tracking.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Order tracking</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/e-commerce/landing/invoice.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Invoice</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<!-- END OF CUSTOMER -->
			</ul>
		</div>
	</div>
	<!-- END OF ECOMMERCE -->
	<!-- CRM -->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#CRM"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="CRM"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-phone"
						><path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
						/></svg
					></span
				><span class="nav-link-text">CRM</span><svg
					class="svg-inline--fa fa-circle text-info ms-1 new-page-indicator"
					style="font-size: 6px"
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
				><!-- <span class="fa-solid fa-circle text-info ms-1 new-page-indicator" style="font-size: 6px"></span> Font Awesome fontawesome.com -->
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="CRM">
				<li class="collapsed-nav-item-title d-none">CRM</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/analytics.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Analytics</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/deals.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Deals</span><span
								class="badge ms-2 badge badge-phoenix badge-phoenix-info">New</span
							>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/deal-details.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Deal details</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/leads.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Leads</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/lead-details.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Lead details</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/reports.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Reports</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/reports-details.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Reports details</span><span
								class="badge ms-2 badge badge-phoenix badge-phoenix-info">New</span
							>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/crm/add-contact.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Add contact</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- END OF CRM -->
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#project-management"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="project-management"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-clipboard"
					>
						<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
						<rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg
					></span
				><span class="nav-link-text">Project management</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul
				class="nav collapse parent"
				data-bs-parent="#navbarVerticalCollapse"
				id="project-management"
			>
				<li class="collapsed-nav-item-title d-none">Project management</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/project-management/create-new.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Create new</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/project-management/project-list-view.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Project list view</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/project-management/project-card-view.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Project card view</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/project-management/project-board-view.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Project board view</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/project-management/todo-list.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Todo list</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/project-management/project-details.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Project details</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/chat.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-message-square"
						><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Chat</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#email"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="email"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-mail"
					>
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
						<polyline points="22,6 12,13 2,6" /></svg
					></span
				><span class="nav-link-text">Email</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="email">
				<li class="collapsed-nav-item-title d-none">Email</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/email/inbox.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Inbox</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/email/email-detail.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Email detail</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/email/compose.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Compose</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#events"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="events"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-bookmark"
						><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg
					></span
				><span class="nav-link-text">Events</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="events">
				<li class="collapsed-nav-item-title d-none">Events</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/events/create-an-event.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Create an event</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/events/event-detail.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Event detail</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#kanban"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="kanban"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-trello"
					>
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
						<rect x="7" y="7" width="3" height="9" />
						<rect x="14" y="7" width="3" height="5" /></svg
					></span
				><span class="nav-link-text">Kanban</span><span
					class="badge ms-2 badge badge-phoenix badge-phoenix-info nav-link-badge">New</span
				><svg
					class="svg-inline--fa fa-circle text-info ms-1 new-page-indicator d-none"
					style="font-size: 6px"
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
				><!-- <span class="fa-solid fa-circle text-info ms-1 new-page-indicator d-none" style="font-size: 6px"></span> Font Awesome fontawesome.com -->
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="kanban">
				<li class="collapsed-nav-item-title d-none">Kanban</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/kanban/kanban.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Kanban</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/kanban/create-kanban-board.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Create board</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#social"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="social"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-share-2"
					>
						<circle cx="18" cy="5" r="3" />
						<circle cx="6" cy="12" r="3" />
						<circle cx="18" cy="19" r="3" />
						<line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
						<line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg
					></span
				><span class="nav-link-text">Social</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="social">
				<li class="collapsed-nav-item-title d-none">Social</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/social/profile.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Profile</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/social/settings.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Settings</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/apps/calendar.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-calendar"
					>
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
						<line x1="16" y1="2" x2="16" y2="6" />
						<line x1="8" y1="2" x2="8" y2="6" />
						<line x1="3" y1="10" x2="21" y2="10" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Calendar</span></span>
			</div>
		</a>
	</div>
</li>
<!-- END OF APPS-->
<!-- PAGES -->
<li class="nav-item">
	<!-- label-->
	<p class="navbar-vertical-label">Pages</p>
	<hr class="navbar-vertical-line" />
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/starter.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-compass"
					>
						<circle cx="12" cy="12" r="10" />
						<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Starter</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/faq.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-help-circle"
					>
						<circle cx="12" cy="12" r="10" />
						<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
						<line x1="12" y1="17" x2="12.01" y2="17" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Faq</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#landing"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="landing"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-globe"
					>
						<circle cx="12" cy="12" r="10" />
						<line x1="2" y1="12" x2="22" y2="12" />
						<path
							d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
						/></svg
					></span
				><span class="nav-link-text">Landing</span><svg
					class="svg-inline--fa fa-circle text-info ms-1 new-page-indicator"
					style="font-size: 6px"
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
				><!-- <span class="fa-solid fa-circle text-info ms-1 new-page-indicator" style="font-size: 6px"></span> Font Awesome fontawesome.com -->
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="landing">
				<li class="collapsed-nav-item-title d-none">Landing</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/landing/default.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Default</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/landing/alternate.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Alternate</span><span
								class="badge ms-2 badge badge-phoenix badge-phoenix-info">New</span
							>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#pricing"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="pricing"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-tag"
					>
						<path
							d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
						/>
						<line x1="7" y1="7" x2="7.01" y2="7" /></svg
					></span
				><span class="nav-link-text">Pricing</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="pricing">
				<li class="collapsed-nav-item-title d-none">Pricing</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/pricing/pricing-column.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Pricing column</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/pricing/pricing-grid.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Pricing grid</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/notifications.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-bell"
					>
						<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
						<path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Notifications</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/members.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-users"
					>
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
						<circle cx="9" cy="7" r="4" />
						<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
						<path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Members</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/timeline.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-clock"
					>
						<circle cx="12" cy="12" r="10" />
						<polyline points="12 6 12 12 16 14" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Timeline</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#errors"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="errors"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-alert-triangle"
					>
						<path
							d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
						/>
						<line x1="12" y1="9" x2="12" y2="13" />
						<line x1="12" y1="17" x2="12.01" y2="17" /></svg
					></span
				><span class="nav-link-text">Errors</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="errors">
				<li class="collapsed-nav-item-title d-none">Errors</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/errors/404.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">404</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/errors/500.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">500</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#authentication"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="authentication"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-lock"
					>
						<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
						<path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg
					></span
				><span class="nav-link-text">Authentication</span><svg
					class="svg-inline--fa fa-circle text-info ms-1 new-page-indicator"
					style="font-size: 6px"
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
				><!-- <span class="fa-solid fa-circle text-info ms-1 new-page-indicator" style="font-size: 6px"></span> Font Awesome fontawesome.com -->
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="authentication">
				<li class="collapsed-nav-item-title d-none">Authentication</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#simple"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="authentication"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Simple</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#authentication" id="simple">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/simple/sign-in.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign in</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/simple/sign-up.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign up</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/simple/sign-out.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign out</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/simple/forgot-password.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Forgot password</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/simple/reset-password.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Reset password</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/simple/lock-screen.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Lock screen</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#split"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="authentication"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Split</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#authentication" id="split">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/split/sign-in.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign in</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/split/sign-up.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign up</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/split/sign-out.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign out</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/split/forgot-password.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Forgot password</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/split/reset-password.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Reset password</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/split/lock-screen.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Lock screen</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#Card"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="authentication"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Card</span><span
								class="badge ms-2 badge badge-phoenix badge-phoenix-info">New</span
							>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#authentication" id="Card">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/card/sign-in.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign in</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/card/sign-up.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign up</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/card/sign-out.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Sign out</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/card/forgot-password.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Forgot password</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/card/reset-password.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Reset password</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/pages/authentication/card/lock-screen.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Lock screen</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#layouts"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="layouts"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-layout"
					>
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
						<line x1="3" y1="9" x2="21" y2="9" />
						<line x1="9" y1="21" x2="9" y2="9" /></svg
					></span
				><span class="nav-link-text">Layouts</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="layouts">
				<li class="collapsed-nav-item-title d-none">Layouts</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/vertical-sidenav.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Vertical sidenav</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/dark-mode.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Dark mode</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/sidenav-collapse.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Sidenav collapse</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/darknav.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Darknav</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/topnav-slim.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Topnav slim</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/navbar-top-slim.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Navbar top slim</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/navbar-top.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Navbar top</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/horizontal-slim.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Horizontal slim</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/combo-nav.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Combo nav</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/demo/combo-nav-slim.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Combo nav slim</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
</li>
<!-- END OF PAGES -->
<!-- MODULES -->
<li class="nav-item">
	<!-- label-->
	<p class="navbar-vertical-label">Modules</p>
	<hr class="navbar-vertical-line" />
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#forms"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="forms"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-file-text"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
						<polyline points="10 9 9 9 8 9" /></svg
					></span
				><span class="nav-link-text">Forms</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="forms">
				<li class="collapsed-nav-item-title d-none">Forms</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#basic"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="forms"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Basic</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#forms" id="basic">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/basic/form-control.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Form control</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/basic/input-group.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Input group</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/basic/select.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Select</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/basic/checks.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Checks</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/basic/range.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Range</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/basic/floating-labels.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Floating labels</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/basic/layout.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Layout</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#advance"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="forms"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Advance</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#forms" id="advance">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/advance/advance-select.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Advance select</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/advance/date-picker.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Date picker</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/advance/editor.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Editor</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/advance/file-uploader.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">File uploader</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/advance/rating.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Rating</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/advance/emoji-button.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Emoji button</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/validation.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Validation</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/forms/wizard.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Wizard</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#icons"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="icons"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-grid"
					>
						<rect x="3" y="3" width="7" height="7" />
						<rect x="14" y="3" width="7" height="7" />
						<rect x="14" y="14" width="7" height="7" />
						<rect x="3" y="14" width="7" height="7" /></svg
					></span
				><span class="nav-link-text">Icons</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="icons">
				<li class="collapsed-nav-item-title d-none">Icons</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/icons/feather.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Feather</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/icons/font-awesome.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Font awesome</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/icons/unicons.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Unicons</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#tables"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="tables"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-columns"
						><path
							d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
						/></svg
					></span
				><span class="nav-link-text">Tables</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="tables">
				<li class="collapsed-nav-item-title d-none">Tables</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/tables/basic-tables.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Basic tables</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/tables/advance-tables.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Advance tables</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/tables/bulk-select.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Bulk Select</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#ECharts"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="ECharts"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-bar-chart-2"
					>
						<line x1="18" y1="20" x2="18" y2="10" />
						<line x1="12" y1="20" x2="12" y2="4" />
						<line x1="6" y1="20" x2="6" y2="14" /></svg
					></span
				><span class="nav-link-text">ECharts</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="ECharts">
				<li class="collapsed-nav-item-title d-none">ECharts</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/line-charts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Line charts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/bar-charts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Bar charts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/candlestick-charts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Candlestick charts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/geo-map.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Geo map</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/scatter-charts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Scatter charts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/pie-charts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Pie charts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/gauge-chart.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Gauge chart</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/radar-charts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Radar charts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/heatmap-charts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Heatmap charts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/echarts/how-to-use.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">How to use</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#components"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="components"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-package"
					>
						<line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
						<path
							d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
						/>
						<polyline points="3.27 6.96 12 12.01 20.73 6.96" />
						<line x1="12" y1="22.08" x2="12" y2="12" /></svg
					></span
				><span class="nav-link-text">Components</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="components">
				<li class="collapsed-nav-item-title d-none">Components</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/accordion.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Accordion</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/avatar.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Avatar</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/alerts.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Alerts</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/badge.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Badge</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/breadcrumb.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Breadcrumb</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/button.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Buttons</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/calendar.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Calendar</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/card.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Card</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#carousel"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="components"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Carousel</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#components" id="carousel">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/carousel/bootstrap.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Bootstrap</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/carousel/swiper.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Swiper</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/collapse.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Collapse</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/dropdown.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Dropdown</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/list-group.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">List group</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/modal.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Modals</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#navs-_and_-Tabs"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="components"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Navs &amp; Tabs</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#components" id="navs-_and_-Tabs">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/navs-and-tabs/navs.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Navs</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/navs-and-tabs/navbar.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Navbar</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/navs-and-tabs/tabs.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Tabs</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/offcanvas.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Offcanvas</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/progress-bar.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Progress bar</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/placeholder.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Placeholder</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/pagination.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Pagination</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/popovers.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Popovers</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/scrollspy.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Scrollspy</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/spinners.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Spinners</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/toast.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Toast</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/tooltips.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Tooltips</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/components/chat-widget.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Chat widget</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#utilities"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="utilities"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-tool"
						><path
							d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
						/></svg
					></span
				><span class="nav-link-text">Utilities</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="utilities">
				<li class="collapsed-nav-item-title d-none">Utilities</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/background.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Background</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/borders.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Borders</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/colors.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Colors</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/display.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Display</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/flex.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Flex</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/stacks.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Stacks</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/float.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Float</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/grid.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Grid</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/interactions.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Interactions</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/opacity.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Opacity</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/overflow.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Overflow</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/position.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Position</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/shadows.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Shadows</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/sizing.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Sizing</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/spacing.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Spacing</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/typography.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Typography</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/vertical-align.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Vertical align</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/modules/utilities/visibility.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Visibility</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#multi-level"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="multi-level"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-layers"
					>
						<polygon points="12 2 2 7 12 12 22 7 12 2" />
						<polyline points="2 17 12 22 22 17" />
						<polyline points="2 12 12 17 22 12" /></svg
					></span
				><span class="nav-link-text">Multi level</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="multi-level">
				<li class="collapsed-nav-item-title d-none">Multi level</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#level-two"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="multi-level"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Level two</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#multi-level" id="level-two">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Item 1</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Item 2</span>
									</div>
								</a><!-- more inner pages-->
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#level-three"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="multi-level"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Level three</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#multi-level" id="level-three">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Item 3</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link dropdown-indicator"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#item-4"
									data-bs-toggle="collapse"
									aria-expanded="false"
									aria-controls="level-three"
								>
									<div class="d-flex align-items-center">
										<div class="dropdown-indicator-icon">
											<svg
												class="svg-inline--fa fa-caret-right"
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="caret-right"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 256 512"
												data-fa-i2svg=""
												><path
													fill="currentColor"
													d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
												/></svg
											><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
										</div>
										<span class="nav-link-text">Item 4</span>
									</div>
								</a><!-- more inner pages-->
								<div class="parent-wrapper">
									<ul class="nav collapse parent" data-bs-parent="#level-three" id="item-4">
										<li class="nav-item">
											<a
												class="nav-link"
												href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
												data-bs-toggle=""
												aria-expanded="false"
											>
												<div class="d-flex align-items-center">
													<span class="nav-link-text">Item 5</span>
												</div>
											</a><!-- more inner pages-->
										</li>
										<li class="nav-item">
											<a
												class="nav-link"
												href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
												data-bs-toggle=""
												aria-expanded="false"
											>
												<div class="d-flex align-items-center">
													<span class="nav-link-text">Item 6</span>
												</div>
											</a><!-- more inner pages-->
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</li>
				<li class="nav-item">
					<a
						class="nav-link dropdown-indicator"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#level-four"
						data-bs-toggle="collapse"
						aria-expanded="false"
						aria-controls="multi-level"
					>
						<div class="d-flex align-items-center">
							<div class="dropdown-indicator-icon">
								<svg
									class="svg-inline--fa fa-caret-right"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="caret-right"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 512"
									data-fa-i2svg=""
									><path
										fill="currentColor"
										d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
									/></svg
								><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
							</div>
							<span class="nav-link-text">Level four</span>
						</div>
					</a><!-- more inner pages-->
					<div class="parent-wrapper">
						<ul class="nav collapse parent" data-bs-parent="#multi-level" id="level-four">
							<li class="nav-item">
								<a
									class="nav-link"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
									data-bs-toggle=""
									aria-expanded="false"
								>
									<div class="d-flex align-items-center">
										<span class="nav-link-text">Item 6</span>
									</div>
								</a><!-- more inner pages-->
							</li>
							<li class="nav-item">
								<a
									class="nav-link dropdown-indicator"
									href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#item-7"
									data-bs-toggle="collapse"
									aria-expanded="false"
									aria-controls="level-four"
								>
									<div class="d-flex align-items-center">
										<div class="dropdown-indicator-icon">
											<svg
												class="svg-inline--fa fa-caret-right"
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="caret-right"
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 256 512"
												data-fa-i2svg=""
												><path
													fill="currentColor"
													d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
												/></svg
											><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
										</div>
										<span class="nav-link-text">Item 7</span>
									</div>
								</a><!-- more inner pages-->
								<div class="parent-wrapper">
									<ul class="nav collapse parent" data-bs-parent="#level-four" id="item-7">
										<li class="nav-item">
											<a
												class="nav-link"
												href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
												data-bs-toggle=""
												aria-expanded="false"
											>
												<div class="d-flex align-items-center">
													<span class="nav-link-text">Item 8</span>
												</div>
											</a><!-- more inner pages-->
										</li>
										<li class="nav-item">
											<a
												class="nav-link dropdown-indicator"
												href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#item-9"
												data-bs-toggle="collapse"
												aria-expanded="false"
												aria-controls="item-7"
											>
												<div class="d-flex align-items-center">
													<div class="dropdown-indicator-icon">
														<svg
															class="svg-inline--fa fa-caret-right"
															aria-hidden="true"
															focusable="false"
															data-prefix="fas"
															data-icon="caret-right"
															role="img"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 256 512"
															data-fa-i2svg=""
															><path
																fill="currentColor"
																d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
															/></svg
														><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
													</div>
													<span class="nav-link-text">Item 9</span>
												</div>
											</a><!-- more inner pages-->
											<div class="parent-wrapper">
												<ul class="nav collapse parent" data-bs-parent="#item-7" id="item-9">
													<li class="nav-item">
														<a
															class="nav-link"
															href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
															data-bs-toggle=""
															aria-expanded="false"
														>
															<div class="d-flex align-items-center">
																<span class="nav-link-text">Item 10</span>
															</div>
														</a><!-- more inner pages-->
													</li>
													<li class="nav-item">
														<a
															class="nav-link"
															href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#!.html"
															data-bs-toggle=""
															aria-expanded="false"
														>
															<div class="d-flex align-items-center">
																<span class="nav-link-text">Item 11</span>
															</div>
														</a><!-- more inner pages-->
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
</li>
<!-- END OF MODULES -->
<!-- DOCUMENTATION -->
<li class="nav-item">
	<!-- label-->
	<p class="navbar-vertical-label">Documentation</p>
	<hr class="navbar-vertical-line" />
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/getting-started.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-life-buoy"
					>
						<circle cx="12" cy="12" r="10" />
						<circle cx="12" cy="12" r="4" />
						<line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
						<line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
						<line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
						<line x1="14.83" y1="9.17" x2="18.36" y2="5.64" />
						<line x1="4.93" y1="19.07" x2="9.17" y2="14.83" /></svg
					></span
				><span class="nav-link-text-wrapper"
					><span class="nav-link-text">Getting started</span></span
				>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#customization"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="customization"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-settings"
					>
						<circle cx="12" cy="12" r="3" />
						<path
							d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
						/></svg
					></span
				><span class="nav-link-text">Customization</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="customization">
				<li class="collapsed-nav-item-title d-none">Customization</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/customization/configuration.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Configuration</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/customization/styling.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Styling</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/customization/dark-mode.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Dark mode</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/customization/plugin.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Plugin</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link dropdown-indicator label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/indexf0f5%20-%20Copia.html#layouts-doc"
			role="button"
			data-bs-toggle="collapse"
			aria-expanded="false"
			aria-controls="layouts-doc"
		>
			<div class="d-flex align-items-center">
				<div class="dropdown-indicator-icon">
					<svg
						class="svg-inline--fa fa-caret-right"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="caret-right"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
						/></svg
					><!-- <span class="fas fa-caret-right"></span> Font Awesome fontawesome.com -->
				</div>
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-table"
						><path
							d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
						/></svg
					></span
				><span class="nav-link-text">Layouts doc</span>
			</div>
		</a>
		<div class="parent-wrapper label-1">
			<ul class="nav collapse parent" data-bs-parent="#navbarVerticalCollapse" id="layouts-doc">
				<li class="collapsed-nav-item-title d-none">Layouts doc</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/layouts/vertical-navbar.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Vertical navbar</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/layouts/horizontal-navbar.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Horizontal navbar</span>
						</div>
					</a><!-- more inner pages-->
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/layouts/combo-navbar.html"
						data-bs-toggle=""
						aria-expanded="false"
					>
						<div class="d-flex align-items-center">
							<span class="nav-link-text">Combo navbar</span>
						</div>
					</a><!-- more inner pages-->
				</li>
			</ul>
		</div>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/gulp.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						class="svg-inline--fa fa-gulp fs-0 ms-1 me-1"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="gulp"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 256 512"
						data-fa-i2svg=""
						><path
							fill="currentColor"
							d="M209.8 391.1l-14.1 24.6-4.6 80.2c0 8.9-28.3 16.1-63.1 16.1s-63.1-7.2-63.1-16.1l-5.8-79.4-14.9-25.4c41.2 17.3 126 16.7 165.6 0zm-196-253.3l13.6 125.5c5.9-20 20.8-47 40-55.2 6.3-2.7 12.7-2.7 18.7 .9 5.2 3 9.6 9.3 10.1 11.8 1.2 6.5-2 9.1-4.5 9.1-3 0-5.3-4.6-6.8-7.3-4.1-7.3-10.3-7.6-16.9-2.8-6.9 5-12.9 13.4-17.1 20.7-5.1 8.8-9.4 18.5-12 28.2-1.5 5.6-2.9 14.6-.6 19.9 1 2.2 2.5 3.6 4.9 3.6 5 0 12.3-6.6 15.8-10.1 4.5-4.5 10.3-11.5 12.5-16l5.2-15.5c2.6-6.8 9.9-5.6 9.9 0 0 10.2-3.7 13.6-10 34.7-5.8 19.5-7.6 25.8-7.6 25.8-.7 2.8-3.4 7.5-6.3 7.5-1.2 0-2.1-.4-2.6-1.2-1-1.4-.9-5.3-.8-6.3 .2-3.2 6.3-22.2 7.3-25.2-2 2.2-4.1 4.4-6.4 6.6-5.4 5.1-14.1 11.8-21.5 11.8-3.4 0-5.6-.9-7.7-2.4l7.6 79.6c2 5 39.2 17.1 88.2 17.1 49.1 0 86.3-12.2 88.2-17.1l10.9-94.6c-5.7 5.2-12.3 11.6-19.6 14.8-5.4 2.3-17.4 3.8-17.4-5.7 0-5.2 9.1-14.8 14.4-21.5 1.4-1.7 4.7-5.9 4.7-8.1 0-2.9-6-2.2-11.7 2.5-3.2 2.7-6.2 6.3-8.7 9.7-4.3 6-6.6 11.2-8.5 15.5-6.2 14.2-4.1 8.6-9.1 22-5 13.3-4.2 11.8-5.2 14-.9 1.9-2.2 3.5-4 4.5-1.9 1-4.5 .9-6.1-.3-.9-.6-1.3-1.9-1.3-3.7 0-.9 .1-1.8 .3-2.7 1.5-6.1 7.8-18.1 15-34.3 1.6-3.7 1-2.6 .8-2.3-6.2 6-10.9 8.9-14.4 10.5-5.8 2.6-13 2.6-14.5-4.1-.1-.4-.1-.8-.2-1.2-11.8 9.2-24.3 11.7-20-8.1-4.6 8.2-12.6 14.9-22.4 14.9-4.1 0-7.1-1.4-8.6-5.1-2.3-5.5 1.3-14.9 4.6-23.8 1.7-4.5 4-9.9 7.1-16.2 1.6-3.4 4.2-5.4 7.6-4.5 .6 .2 1.1 .4 1.6 .7 2.6 1.8 1.6 4.5 .3 7.2-3.8 7.5-7.1 13-9.3 20.8-.9 3.3-2 9 1.5 9 2.4 0 4.7-.8 6.9-2.4 4.6-3.4 8.3-8.5 11.1-13.5 2-3.6 4.4-8.3 5.6-12.3 .5-1.7 1.1-3.3 1.8-4.8 1.1-2.5 2.6-5.1 5.2-5.1 1.3 0 2.4 .5 3.2 1.5 1.7 2.2 1.3 4.5 .4 6.9-2 5.6-4.7 10.6-6.9 16.7-1.3 3.5-2.7 8-2.7 11.7 0 3.4 3.7 2.6 6.8 1.2 2.4-1.1 4.8-2.8 6.8-4.5 1.2-4.9 .9-3.8 26.4-68.2 1.3-3.3 3.7-4.7 6.1-4.7 1.2 0 2.2 .4 3.2 1.1 1.7 1.3 1.7 4.1 1 6.2-.7 1.9-.6 1.3-4.5 10.5-5.2 12.1-8.6 20.8-13.2 31.9-1.9 4.6-7.7 18.9-8.7 22.3-.6 2.2-1.3 5.8 1 5.8 5.4 0 19.3-13.1 23.1-17 .2-.3 .5-.4 .9-.6 .6-1.9 1.2-3.7 1.7-5.5 1.4-3.8 2.7-8.2 5.3-11.3 .8-1 1.7-1.6 2.7-1.6 2.8 0 4.2 1.2 4.2 4 0 1.1-.7 5.1-1.1 6.2 1.4-1.5 2.9-3 4.5-4.5 15-13.9 25.7-6.8 25.7 .2 0 7.4-8.9 17.7-13.8 23.4-1.6 1.9-4.9 5.4-5 6.4 0 1.3 .9 1.8 2.2 1.8 2 0 6.4-3.5 8-4.7 5-3.9 11.8-9.9 16.6-14.1l14.8-136.8c-30.5 17.1-197.6 17.2-228.3 .2zm229.7-8.5c0 21-231.2 21-231.2 0 0-8.8 51.8-15.9 115.6-15.9 9 0 17.8 .1 26.3 .4l12.6-48.7L228.1 .6c1.4-1.4 5.8-.2 9.9 3.5s6.6 7.9 5.3 9.3l-.1 .1L185.9 74l-10 40.7c39.9 2.6 67.6 8.1 67.6 14.6zm-69.4 4.6c0-.8-.9-1.5-2.5-2.1l-.2 .8c0 1.3-5 2.4-11.1 2.4s-11.1-1.1-11.1-2.4c0-.1 0-.2 .1-.3l.2-.7c-1.8 .6-3 1.4-3 2.3 0 2.1 6.2 3.7 13.7 3.7 7.7 .1 13.9-1.6 13.9-3.7z"
						/></svg
					><!-- <span class="fa-brands fa-gulp fs-0 ms-1 me-1"></span> Font Awesome fontawesome.com --></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Gulp</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/documentation/design-file.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-figma"
					>
						<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
						<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
						<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
						<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
						<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Design file</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/changelog.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-git-merge"
					>
						<circle cx="18" cy="18" r="3" />
						<circle cx="6" cy="6" r="3" />
						<path d="M6 21V9a9 9 0 0 0 9 9" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Changelog</span></span>
			</div>
		</a>
	</div>
	<!-- parent pages-->
	<div class="nav-item-wrapper">
		<a
			class="nav-link label-1"
			href="file:///D:/folderProjects/sveltekitPhoenix/v1.11.0/showcase.html"
			role="button"
			data-bs-toggle=""
			aria-expanded="false"
		>
			<div class="d-flex align-items-center">
				<span class="nav-link-icon"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16px"
						height="16px"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-monitor"
					>
						<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
						<line x1="8" y1="21" x2="16" y2="21" />
						<line x1="12" y1="17" x2="12" y2="21" /></svg
					></span
				><span class="nav-link-text-wrapper"><span class="nav-link-text">Showcase</span></span>
			</div>
		</a>
	</div>
</li>
<!-- END OF DOCUMENTATION -->
