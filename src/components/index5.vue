<template>
				<div class="container content-area">
					<div class="">

					    <!-- page-header -->
						<div class="page-header">
							<h1 class="page-title"><span class="subpage-title">Welcome To</span> Logistics Dashboard</h1>
							<div class="ml-auto">
								<div class="input-group">
									<a  class="btn btn-primary btn-icon text-white mr-2"  id="daterange-btn" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Calendar">
										<span>
											<i class="fe fe-calendar"></i>
										</span>
									</a>
									<a href="#" class="btn btn-secondary btn-icon mr-2" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Rating">
										<span>
											<i class="fe fe-star"></i>
										</span>
									</a>
									<a href="#" class="btn btn-success btn-icon mr-2" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Email">
										<span>
											<i class="fe fe-mail"></i>
										</span>
									</a>
									<a href="#" class="btn btn-warning btn-icon mr-2" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Chat">
										<span>
											<i class="fe fe-message-square"></i>
										</span>
									</a>
									<a href="#" class="btn btn-info btn-icon mr-2" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Add New">
										<span>
											<i class="fe fe-plus"></i>
										</span>
									</a>
									<a href="#" class="btn btn-danger btn-icon" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Support">										<span>
											<i class="fe fe-help-circle"></i>
										</span>
									</a>
								</div>
							</div>
						</div>
						<!-- End page-header -->

						<!-- Row -->
						<div class="row">
							<div class="col-sm-6 col-lg-6 col-xl-3">
								<div class="card text-center">
									<div class="card-body">
										<h6 class="mb-3">Total Revenue</h6>
										<h2 class="mb-2 number-font"><i class="zmdi zmdi-compass text-primary mr-2"></i>$2,891</h2>
										<p class="mb-0 text-muted">
											<span class="text-danger"><i class="fa fa-chevron-circle-down text-danger ml-1"></i> -1.6%</span>
											last month
										</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-6 col-xl-3">
								<div class="card text-center">
									<div class="card-body">
										<h6 class="mb-3">Total Profit</h6>
										<h2 class="mb-2 number-font"><i class="zmdi zmdi-chart text-secondary mr-2"></i>$2,892</h2>
										<p class="mb-0 text-muted">
											<span class="text-danger"><i class="fa fa-chevron-circle-down text-danger ml-1"></i> -0.6%</span>
											last month
										</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-6 col-xl-3">
								<div class="card text-center">
									<div class="card-body">
										<h6 class="mb-3">Total Cost</h6>
										<h2 class="mb-2 number-font"><i class="mdi mdi-cash-multiple text-success mr-2"></i>$12,789</h2>
										<p class="mb-0 text-muted">
											<span class="text-success"><i class="fa fa-chevron-circle-up text-success ml-1"></i> +0.16%</span>
											last month
										</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-6 col-xl-3">
								<div class="card text-center">
									<div class="card-body">
										<h6 class="mb-3">Total Shipments</h6>
										<h2 class="mb-2 number-font"><i class="mdi mdi-truck  text-warning mr-2"></i>679</h2>
										<p class="mb-0 text-muted">
											<span class="text-success"><i class="fa fa-chevron-circle-up text-success ml-1"></i> +0.2%</span>
											last month
										</p>
									</div>
								</div>
							</div>
						</div>
						<!-- End Row -->

						<!-- Row -->
						<div class="row">
							<div class="col-md-12 col-lg-12 col-xl-8">
								<div class="card overflow-hidden">
									<div class="card-header">
										<div>
											<h3 class="card-title">Delivery Status</h3>
										</div>
										<div class="card-options">
											<a href="" class="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
												<span class="fe fe-more-horizontal fs-20"></span>
											</a>
											<ul class="dropdown-menu dropdown-menu-right" role="menu">
												<li><a href="#"><i class="fe fe-eye mr-2"></i>View</a></li>
												<li><a href="#"><i class="fe fe-plus-circle mr-2"></i>Add</a></li>
												<li><a href="#"><i class="fe fe-trash-2 mr-2"></i>Remove</a></li>
												<li><a href="#"><i class="fe fe-download-cloud mr-2"></i>Download</a></li>
												<li><a href="#"><i class="fe fe-settings mr-2"></i>More</a></li>
											</ul>
										</div>
									</div>
									<div class="card-body">
										<div class="">
											<canvas id="delivery-status" class="h-270"></canvas>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12 col-lg-12 col-xl-4">
								<div class="card overflow-hidden">
									<div class="card-header">
										<div>
											<h3 class="card-title">Warehouse Operating Costs</h3>
										</div>
										<div class="card-options">
											<a href="" class="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
												<span class="fe fe-more-horizontal fs-20"></span>
											</a>
											<ul class="dropdown-menu dropdown-menu-right" role="menu">
												<li><a href="#"><i class="fe fe-eye mr-2"></i>View</a></li>
												<li><a href="#"><i class="fe fe-plus-circle mr-2"></i>Add</a></li>
												<li><a href="#"><i class="fe fe-trash-2 mr-2"></i>Remove</a></li>
												<li><a href="#"><i class="fe fe-download-cloud mr-2"></i>Download</a></li>
												<li><a href="#"><i class="fe fe-settings mr-2"></i>More</a></li>
											</ul>
										</div>
									</div>
									<div class="card-body p-0">
										<div class="list-group projects-list">
											<a href="#" class="list-group-item list-group-item-action flex-column align-items-start border-0">
												<div class="d-flex w-100 justify-content-between">
													<h6 class="mb-1 font-weight-sembold text-dark">Order Picking</h6>
													<h6 class="text-dark mb-0 font-weight-sembold text-dark">3,876</h6>
												</div>
												<div class="d-flex w-100 justify-content-between">
													<span class="text-muted"><i class="fe fe-arrow-down text-success "></i> 03% last month</span>
													<span class="text-muted">5 days ago</span>
												</div>
											</a>
											<a href="#" class="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top">
												<div class="d-flex w-100 justify-content-between">
													<h6 class="mb-1 font-weight-sembold text-dark">Storage</h6>
													<h6 class="text-dark mb-0 font-weight-sembold text-dark">2,178</h6>
												</div>
												<div class="d-flex w-100 justify-content-between">
													<span class="text-muted"><i class="fe fe-arrow-down text-danger "></i> 16% last month</span>
													<span class="text-muted">2 days ago</span>
												</div>
											</a>
											<a href="#" class="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top">
												<div class="d-flex w-100 justify-content-between">
													<h6 class="mb-1 font-weight-sembold text-dark">Shipping</h6>
													<h6 class="text-dark mb-0 font-weight-sembold text-dark">1,367</h6>
												</div>
												<div class="d-flex w-100 justify-content-between">
													<span class="text-muted"><i class="fe fe-arrow-up text-success"></i> 06% last month</span>
													<span class="text-muted">1 days ago</span>
												</div>
											</a>
											<a href="#" class="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top">
												<div class="d-flex w-100 justify-content-between">
													<h6 class="mb-1 font-weight-sembold text-dark">Receiving</h6>
													<h6 class="text-dark mb-0 font-weight-sembold text-dark">678</h6>
												</div>
												<div class="d-flex w-100 justify-content-between">
													<span class="text-muted"><i class="fe fe-arrow-down text-danger "></i> 25% last month</span>
													<span class="text-muted">10 days ago</span>
												</div>
											</a>
											<a href="#" class="list-group-item list-group-item-action flex-column align-items-start border-bottom-0  border-left-0 border-right-0 border-top">
												<div class="d-flex w-100 justify-content-between">
													<h6 class="mb-1 font-weight-sembold text-dark">Other</h6>
													<h6 class="text-dark mb-0 font-weight-sembold text-dark">5,678</h6>
												</div>
												<div class="d-flex w-100 justify-content-between">
													<span class="text-muted"><i class="fe fe-arrow-up text-success "></i> 16% last month</span>
													<span class="text-muted">5 days ago</span>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- End Row -->

						<!-- Row -->
						<div class="row">
							<div class="col-md-12 col-lg-12 col-xl-6">
								<div class="card">
									<div class="card-body">
										<div class="card-widget">
											<div class="row">
												<div class="col-6">
													<h6 class="mb-2">Inventory To Sales</h6>
													<h2 class="text-left fs-30 mb-3 number-font"><span class="num-font">5,758</span></h2>
												</div>
												<div class="col-6">
													<div class="float-right text-right">
														<div class="card-options">
															<a href="" class="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
																<span class="fe fe-more-horizontal fs-20"></span>
															</a>
															<ul class="dropdown-menu dropdown-menu-right" role="menu">
																<li><a href="#"><i class="fe fe-eye mr-2"></i>View</a></li>
																<li><a href="#"><i class="fe fe-plus-circle mr-2"></i>Add</a></li>
																<li><a href="#"><i class="fe fe-trash-2 mr-2"></i>Remove</a></li>
																<li><a href="#"><i class="fe fe-download-cloud mr-2"></i>Download</a></li>
																<li><a href="#"><i class="fe fe-settings mr-2"></i>More</a></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<p class="mt-1 text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nisi ut aliquip Lorem ipsum dolor sit Neque porro .</p>
										<div class="row">
											<div class="col-sm-6">
												<div class="card-widget mb-5 mb-md-0">
													<div class="mb-1">
														<div class="clearfix">
															<div class="float-left">
																<strong class="h4 font-weight-bold num-font">657</strong>
															</div>
															<div class="float-right">
																<small class="text-muted h6">This week</small>
															</div>
														</div>
													</div>
													<div class="progress progress-sm mt-0 mb-2 h-1">
														<div class="progress-bar bg-primary w-45" role="progressbar"></div>
													</div>
													<div class="text-muted">
														<i class="fa fa-caret-up text-success"></i> 10% decrease
													</div>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="card-widget">
													<div class="mb-1">
														<div class="clearfix">
															<div class="float-left">
																<strong class="h4 font-weight-bold num-font">592</strong>
															</div>
															<div class="float-right">
																<small class="text-muted h6">This month</small>
															</div>
														</div>
													</div>
													<div class="progress progress-sm mt-0 mb-2 h-1">
														<div class="progress-bar bg-secondary w-45" role="progressbar"></div>
													</div>
													<div class="text-muted">
														<i class="fa fa-caret-down text-danger"></i> 14% increases
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12 col-lg-12 col-xl-6">
								<div class="card">
									<div class="card-body">
										<div class="card-widget">
											<div class="row">
												<div class="col-6">
													<h6 class="mb-2">Inventory Turnover</h6>
													<h2 class="text-left fs-30 mb-3 number-font"><span class="num-font">30.89</span></h2>
												</div>
												<div class="col-6">
													<div class="float-right text-right">
														<div class="card-options">
															<a href="" class="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
																<span class="fe fe-more-horizontal fs-20"></span>
															</a>
															<ul class="dropdown-menu dropdown-menu-right" role="menu">
																<li><a href="#"><i class="fe fe-eye mr-2"></i>View</a></li>
																<li><a href="#"><i class="fe fe-plus-circle mr-2"></i>Add</a></li>
																<li><a href="#"><i class="fe fe-trash-2 mr-2"></i>Remove</a></li>
																<li><a href="#"><i class="fe fe-download-cloud mr-2"></i>Download</a></li>
																<li><a href="#"><i class="fe fe-settings mr-2"></i>More</a></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
										<p class="mt-1 text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nisi ut aliquip Lorem ipsum dolor sit Neque porro .</p>
										<div class="row">
											<div class="col-sm-6">
												<div class="card-widget mb-5 mb-md-0">
													<div class="mb-1">
														<div class="clearfix">
															<div class="float-left">
																<strong class="h4 font-weight-bold num-font">4.9</strong>
															</div>
															<div class="float-right">
																<small class="text-muted h6">This week</small>
															</div>
														</div>
													</div>
													<div class="progress progress-sm mt-0 mb-2 h-1">
														<div class="progress-bar bg-success w-45" role="progressbar"></div>
													</div>
													<div class="text-muted">
														<i class="fa fa-caret-up text-success"></i> 09% decrease
													</div>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="card-widget">
													<div class="mb-1">
														<div class="clearfix">
															<div class="float-left">
																<strong class="h4 font-weight-bold num-font">9.2</strong>
															</div>
															<div class="float-right">
																<small class="text-muted h6">This month</small>
															</div>
														</div>
													</div>
													<div class="progress progress-sm mt-0 mb-2 h-1">
														<div class="progress-bar bg-warning w-45" role="progressbar"></div>
													</div>
													<div class="text-muted">
														<i class="fa fa-caret-down text-danger"></i> 11% increases
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- End Row -->

						<!-- Row -->
						<div class="row">
							<div class="col-md-12 col-lg-12 col-xl-4">
								<div class="card">
									<div class="card-header">
										<div>
											<h3 class="card-title">Deliveries by Country</h3>
										</div>
										<div class="card-options">
											<a href="" class="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
												<span class="fe fe-more-horizontal fs-20"></span>
											</a>
											<ul class="dropdown-menu dropdown-menu-right" role="menu">
												<li><a href="#"><i class="fe fe-eye mr-2"></i>View</a></li>
												<li><a href="#"><i class="fe fe-plus-circle mr-2"></i>Add</a></li>
												<li><a href="#"><i class="fe fe-trash-2 mr-2"></i>Remove</a></li>
												<li><a href="#"><i class="fe fe-download-cloud mr-2"></i>Download</a></li>
												<li><a href="#"><i class="fe fe-settings mr-2"></i>More</a></li>
											</ul>
										</div>
									</div>
									<div class="card-body">
										<div class="mb-5">
											<p class="mb-2">Australia<span class="float-right text-muted">65%</span></p>
											<div class="progress progress-sm  h-2">
												<div class="progress-bar bg-primary w-65" role="progressbar"></div>
											</div>
										</div>
										<div class="mb-5">
											<p class="mb-2">Brazil<span class="float-right text-muted">70%</span></p>
											<div class="progress h-2">
												<div class="progress-bar bg-secondary w-70" role="progressbar"></div>
											</div>
										</div>
										<div class="mb-5">
											<p class="mb-2">Canada<span class="float-right text-muted">40%</span></p>
											<div class="progress progress-sm  h-2">
												<div class="progress-bar bg-info w-40" role="progressbar"></div>
											</div>
										</div>
										<div class="mb-5">
											<p class="mb-2">Germany<span class="float-right text-muted">80%</span></p>
											<div class="progress progress-sm  h-2">
												<div class="progress-bar bg-danger w-80" role="progressbar"></div>
											</div>
										</div>
										<div class="mb-5">
											<p class="mb-2">Denmark<span class="float-right text-muted">50%</span></p>
											<div class="progress progress-sm  h-2">
												<div class="progress-bar bg-warning w-50" role="progressbar"></div>
											</div>
										</div>

										<div class="mb-0">
											<p class="mb-2">France<span class="float-right text-muted">60%</span></p>
											<div class="progress progress-sm  h-2">
												<div class="progress-bar bg-success w-60" role="progressbar"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12 col-lg-12 col-xl-8">
								<div class="card">
									<div class="card-header">
										<div>
											<h3 class="card-title">Order Details</h3>
										</div>
										<div class="card-options">
											<a href="" class="mr-4 text-default" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
												<span class="fe fe-more-horizontal fs-20"></span>
											</a>
											<ul class="dropdown-menu dropdown-menu-right" role="menu">
												<li><a href="#"><i class="fe fe-eye mr-2"></i>View</a></li>
												<li><a href="#"><i class="fe fe-plus-circle mr-2"></i>Add</a></li>
												<li><a href="#"><i class="fe fe-trash-2 mr-2"></i>Remove</a></li>
												<li><a href="#"><i class="fe fe-download-cloud mr-2"></i>Download</a></li>
												<li><a href="#"><i class="fe fe-settings mr-2"></i>More</a></li>
											</ul>
										</div>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table table-bordered  mb-0 text-nowrap">
												<thead>
													<tr>
														<th></th>
														<th>Customer</th>
														<th>Order ID</th>
														<th>Order Date</th>
														<th>Order Status</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<img src="../../assets/images/users/female/1.jpg" class="avatar brround" alt="">
														</td>
														<td>Emily Poole</td>
														<td>PRO12345</td>
														<td>Online Payment</td>
														<td><span class="badge badge-success">Delivered</span></td>
													</tr>
													<tr>
														<td>
															<img src="../../assets/images/users/female/3.jpg" class="avatar brround" alt="">
														</td>
														<td>Sarah Alsop</td>
														<td>PRO23457</td>
														<td>Cash on delivered</td>
														<td><span class="badge badge-secondary">Delivering</span></td>
													</tr>
													<tr>
														<td>
															<img src="../../assets/images/users/male/4.jpg" class="avatar brround" alt="">
														</td>
														<td>Ruth Hart</td>
														<td>PRO94567</td>
														<td>Online Payment</td>
														<td><span class="badge badge-danger">Shipped</span></td>
													</tr>
													<tr>
														<td>
															<img src="../../assets/images/users/female/5.jpg" class="avatar brround" alt="">
														</td>
														<td>Peter Ince</td>
														<td>PRO56789</td>
														<td>Cash on delivered</td>
														<td><span class="badge badge-primary">Add Cart</span></td>
													</tr>
													<tr>
														<td>
															<img src="../../assets/images/users/male/6.jpg" class="avatar brround" alt="">
														</td>
														<td>Sophie	Ross</td>
														<td>PRO30978</td>
														<td>Online Payment</td>
														<td><span class="badge badge-danger">Shipped</span></td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- End Row -->

					</div>
					<!--End side app-->

					<!-- Right-sidebar-->
					<div class="sidebar sidebar-right sidebar-animate">
						<div class="tab-menu-heading siderbar-tabs border-0">
							<div class="tabs-menu ">
								<!-- Tabs -->
								<ul class="nav panel-tabs">
									<li class=""><a href="#tab1" class="active" data-toggle="tab">Chat</a></li>
									<li><a href="#tab2" data-toggle="tab">Activity</a></li>
									<li><a href="#tab3" data-toggle="tab">Todo</a></li>
								</ul>
							</div>
						</div>
						<div class="panel-body tabs-menu-body side-tab-body p-0 border-0 ">
							<div class="tab-content border-top">
								<div class="tab-pane active" id="tab1">
									<div class="chat">
										<div class="contacts_card">
											<div class="input-group p-3">
												<input type="text" placeholder="Search..." class="form-control search">
												<div class="input-group-prepend">
													<span class="input-group-text search_btn  "><i class="fa fa-search"></i></span>
												</div>
											</div>
											<ul class="contacts mb-0">
												<li>
													<div class="d-flex bd-highlight">
														<div class="img_cont">
															<img src="../../assets/images/users/male/3.jpg" class="rounded-circle user_img" alt="img">
															<span class="online_icon"></span>
														</div>
														<div class="user_info">
															<h6 class="mt-1 mb-0 ">Maryam Naz</h6>
															<small class="text-muted">Maryam is online</small>
														</div>
														<div class="float-right text-right ml-auto mt-auto mb-auto"><small>01-02-2019</small></div>
													</div>
												</li>
												<li>
													<div class="d-flex bd-highlight">
														<div class="img_cont">
															<img src="../../assets/images/users/female/1.jpg" class="rounded-circle user_img" alt="img">

														</div>
														<div class="user_info">
															<h6 class="mt-1 mb-0 ">Sahar Darya</h6>
															<small class="text-muted">Sahar left 7 mins ago</small>
														</div>
														<div class="float-right text-right ml-auto mt-auto mb-auto"><small>01-02-2019</small></div>
													</div>
												</li>
												<li>
													<div class="d-flex bd-highlight">
														<div class="img_cont">
															<img src="../../assets/images/users/female/9.jpg" class="rounded-circle user_img" alt="img">
															<span class="online_icon"></span>
														</div>
														<div class="user_info">
															<h6 class="mt-1 mb-0 ">Maryam Naz</h6>
															<small class="text-muted">Maryam is online</small>
														</div>
														<div class="float-right text-right ml-auto mt-auto mb-auto"><small>01-02-2019</small></div>
													</div>
												</li>
												<li>
													<div class="d-flex bd-highlight">
														<div class="img_cont">
															<img src="../../assets/images/users/female/10.jpg" class="rounded-circle user_img" alt="img">

														</div>
														<div class="user_info">
															<h6 class="mt-1 mb-0 ">Yolduz Rafi</h6>
															<small class="text-muted">Yolduz is online</small>
														</div>
														<div class="float-right text-right ml-auto mt-auto mb-auto"><small>02-02-2019</small></div>
													</div>
												</li>
												<li>
													<div class="d-flex bd-highlight">
														<div class="img_cont">
															<img src="../../assets/images/users/male/5.jpg" class="rounded-circle user_img" alt="img">
															<span class="online_icon"></span>
														</div>
														<div class="user_info">
															<h6 class="mt-1 mb-0 ">Nargis Hawa</h6>
															<small class="text-muted">Nargis left 30 mins ago</small>
														</div>
														<div class="float-right text-right ml-auto mt-auto mb-auto"><small>02-02-2019</small></div>
													</div>
												</li>
												<li>
													<div class="d-flex bd-highlight">
														<div class="img_cont">
															<img src="../../assets/images/users/male/7.jpg" class="rounded-circle user_img" alt="img">
															<span class="online_icon"></span>
														</div>
														<div class="user_info">
															<h6 class="mt-1 mb-0 ">Khadija Mehr</h6>
															<small class="text-muted">Khadija left 50 mins ago</small>
														</div>
														<div class="float-right text-right ml-auto mt-auto mb-auto"><small>03-02-2019</small></div>
													</div>
												</li>
												<li>
													<div class="d-flex bd-highlight">
														<div class="img_cont">
															<img src="../../assets/images/users/female/8.jpg" class="rounded-circle user_img" alt="img">

														</div>
														<div class="user_info">
															<h6 class="mt-1 mb-0 ">Khadija Mehr</h6>
															<small class="text-muted">Khadija left 50 mins ago</small>
														</div>
														<div class="float-right text-right ml-auto mt-auto mb-auto"><small>03-02-2019</small></div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="tab-pane  " id="tab2">
									<div class="list d-flex align-items-center border-bottom p-4">
										<div class="">
											<span class="avatar bg-primary brround avatar-md">CH</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>New Websites is Created</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">30 mins ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
									<div class="list d-flex align-items-center border-bottom p-4">
										<div class="">
											<span class="avatar bg-danger brround avatar-md">N</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>Prepare For the Next Project</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">2 hours ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
									<div class="list d-flex align-items-center border-bottom p-4">
										<div class="">
											<span class="avatar bg-info brround avatar-md">S</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>Decide the live Discussion Time</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">3 hours ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
									<div class="list d-flex align-items-center border-bottom p-4">
										<div class="">
											<span class="avatar bg-warning brround avatar-md">K</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>Team Review meeting at yesterday at 3:00 pm</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">4 hours ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
									<div class="list d-flex align-items-center border-bottom p-4">
										<div class="">
											<span class="avatar bg-success brround avatar-md">R</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>Prepare for Presentation</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">1 days ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
									<div class="list d-flex align-items-center  border-bottom p-4">
										<div class="">
											<span class="avatar bg-pink brround avatar-md">MS</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>Prepare for Presentation</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">1 days ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
									<div class="list d-flex align-items-center border-bottom p-4">
										<div class="">
											<span class="avatar bg-purple brround avatar-md">L</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>Prepare for Presentation</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">45 mintues ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
									<div class="list d-flex align-items-center p-4">
										<div class="">
											<span class="avatar bg-blue brround avatar-md">U</span>
										</div>
										<div class="wrapper w-100 ml-3">
											<p class="mb-0 d-flex">
												<b>Prepare for Presentation</b>
											</p>
											<div class="d-flex justify-content-between align-items-center">
												<div class="d-flex align-items-center">
													<i class="mdi mdi-clock text-muted mr-1"></i>
													<small class="text-muted ml-auto">2 days ago</small>
													<p class="mb-0"></p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane" id="tab3">
									<div class="">
										<div class="d-flex p-3">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox1" value="option1" checked="">
												<span class="custom-control-label">Do Even More..</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox2" value="option2" checked="">
												<span class="custom-control-label">Find an idea.</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox3" value="option3" checked="">
												<span class="custom-control-label">Hangout with friends</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox4" value="option4" >
												<span class="custom-control-label">Do Something else</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox5" value="option5" >
												<span class="custom-control-label">Eat healthy, Eat Fresh..</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox6" value="option6" checked="">
												<span class="custom-control-label">Finsh something more..</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox7" value="option7" checked="">
												<span class="custom-control-label">Do something more</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox8" value="option8" >
												<span class="custom-control-label">Updated more files</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox9" value="option9" >
												<span class="custom-control-label">System updated</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="d-flex p-3 border-top border-bottom">
											<label class="custom-control custom-checkbox mb-0">
												<input type="checkbox" class="custom-control-input" name="example-checkbox10" value="option10" >
												<span class="custom-control-label">Settings Changings...</span>
											</label>
											<span class="ml-auto">
												<i class="si si-pencil text-primary mr-2" data-toggle="tooltip" title=""  data-placement="top" data-original-title="Edit"></i>
												<i class="si si-trash text-danger mr-2" data-toggle="tooltip" title="" data-placement="top" data-original-title="Delete"></i>
											</span>
										</div>
										<div class="text-center pt-5">
											<a href="#" class="btn btn-primary">Upgrade more</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div><!-- End Rightsidebar-->

				</div>
</template>

<script>
 export default {
  name: 'index5',
  data () {
    return{

    }
  }
}
</script>
