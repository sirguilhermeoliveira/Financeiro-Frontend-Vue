<template>
				<div class="container content-area">
					<div class="">

					    <!-- page-header -->
						<div class="page-header">
							<h1 class="page-title">Search</h1>
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
									<a href="#" class="btn btn-danger btn-icon" data-toggle="tooltip" title="" data-placement="bottom" data-original-title="Support">
										<span>
											<i class="fe fe-help-circle"></i>
										</span>
									</a>
								</div>
							</div>
						</div>
						<!-- End page-header -->

						<!-- Row -->
						<div class="row row-cards">
							<div class="col-lg-3">
								<div class="row"><!-- row -->
									<div class="col-md-12 col-lg-12">
									    <div class="card">
											<div class="card-header">
												<div>
													<h3 class="card-title">Categories</h3>
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
												<div class="search-radio mb-3">
													<div class="radio">
														<input type="radio" name="shop-filter__price" id="shop-filter-price_1" value="" checked="">
														<label for="shop-filter-price_1">Mens</label>
													</div>
													<div class="radio">
														<input type="radio" name="shop-filter__price" id="shop-filter-price_2" value="">
														<label for="shop-filter-price_2">Womens</label>
													</div>
													<div class="radio">
														<input type="radio" name="shop-filter__price" id="shop-filter-price_3" value="">
														<label for="shop-filter-price_3">kids</label>
													</div>
													<div class="radio">
														<input type="radio" name="shop-filter__price" id="shop-filter-price_4" value="specify">
														<label for="shop-filter-price_4" class="mb-0"> Accessories</label>
													</div>
												</div>
												<div class="form-group">
													<label class="form-label">Category</label>
													<select name="beast" id="select-beast4" class="form-control custom-select select2">
														<option value="0">--Select--</option>
														<option value="1">Dress</option>
														<option value="2">Bags &amp; Purses</option>
														<option value="3">Coat &amp; Jacket</option>
														<option value="4">Beauty</option>
														<option value="5">Jeans</option>
														<option value="5">Jewellery</option>
														<option value="5">Electronics</option>
														<option value="5">Sports</option>
														<option value="5">Technology</option>
														<option value="5">Watches</option>
														<option value="5">Accessories</option>
													</select>
												</div>
												<a class="btn btn-info" href="#">Search</a>
											</div>
										</div>
										<div class="card">
											<div class="card-header">
												<h4>Category Filters</h4>
											</div>
											<div class="card-body">
												<div class="form-group">
													<label class="form-label">Brand</label>
													<select name="beast" id="select-beast" class="form-control custom-select select2">
														<option value="0">--Select--</option>
														<option value="1">Wallmart</option>
														<option value="2">Catseye</option>
														<option value="3">Moonsoon</option>
														<option value="4">Textmart</option>
													</select>
												</div>
												<div class="form-group">
													<label class="form-label">Color</label>
													<select name="beast" id="select-beast2" class="form-control custom-select select2">
														<option value="0">--Select--</option>
														<option value="1">White</option>
														<option value="2">Black</option>
														<option value="3">Red</option>
														<option value="4">Green</option>
														<option value="5">Blue</option>
														<option value="6">Yellow</option>
													</select>
												</div>
												<div class="form-group">
													<label class="form-label">Type</label>
													<select name="beast" id="select-beast3" class="form-control custom-select select2">
														<option value="0">--Select--</option>
														<option value="1">Extra Small</option>
														<option value="2">Small</option>
														<option value="3">Medium</option>
														<option value="4">Large</option>
														<option value="5">Extra Large</option>
													</select>
												</div>
												<a class="btn btn-primary" href="#">Apply Filter</a>
											</div>
										</div>
									</div>
								</div><!-- row end -->
							</div><!-- col end -->
							<div class="col-lg-9">
								<div class="input-group">
									<input type="text" class="form-control" placeholder="">
									<div class="input-group-append ">
										<button type="button" class="btn btn-primary ">
											<i class="fa fa-search " aria-hidden="true"></i>
										</button>
									</div>
								</div>
								<div class="card mt-5 store">
									<div class="table-responsive">
										<table class="table card-table table-vcenter text-nowrap">
											<tr>
												<td>Mens Jackets</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">987 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">50% off</td>
												<td class="text-right">
													<strong>$1,987</strong>
												</td>
											</tr>
											<tr>
												<td> Occational Special Edition</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">675 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap ">60% off</td>
												<td class="text-right">
													<strong>$2,679</strong>
												</td>
											</tr>
											<tr>
												<td>Sares
													<div class="badge badge-primary badge-md">New</div>
												</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">765 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">25% off</td>
												<td class="text-right">
													<strong>$999</strong>
												</td>
											</tr>
											<tr>
												<td>Western Wear</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">678 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">30% off</td>
												<td class="text-right">
													<strong>$699</strong>
												</td>
											</tr>
											<tr>
												<td>Kids Dress
													<div class="badge badge-danger badge-md">New</div>
												</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">345 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">47% off</td>
												<td class="text-right">
													<strong>$399</strong>
												</td>
											</tr>
											<tr>
												<td>Kids Toys</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">876 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">26% off</td>
												<td class="text-right">
													<strong>$299</strong>
												</td>
											</tr>
											<tr>
												<td>Sony KD-49XE7005
													<div class="badge badge-primary badge-md">New</div>
												</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">563 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">43% off</td>
												<td class="text-right">
													<strong>$22,269</strong>
												</td>
											</tr>
											<tr>
												<td>Huawei Mate Pro Dual SIM </td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">671 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">20% off</td>
												<td class="text-right">
													<strong>$9,999</strong>
												</td>
											</tr>
											<tr>
												<td>Novel Books
													<div class="badge badge-info badge-md">New</div>
												</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">354 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">14% off</td>
												<td class="text-right">
													<strong>$899</strong>
												</td>
											</tr>
											<tr>
												<td>Welcare Fitness</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">937 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">40% off</td>
												<td class="text-right">
													<strong>$3,987</strong>
												</td>
											</tr>
											<tr>
												<td>Red rose Gift</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">137 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">80% off</td>
												<td class="text-right">
													<strong>$987</strong>
												</td>
											</tr>
											<tr>
												<td>New Model Saree</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">157 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">30% off</td>
												<td class="text-right">
													<strong>$2,452</strong>
												</td>
											</tr>
											<tr>
												<td>Welcare Fitness</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">937 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">40% off</td>
												<td class="text-right">
													<strong>$3,987</strong>
												</td>
											</tr>
											<tr>
												<td>W-top</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">1452 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">40% off</td>
												<td class="text-right">
													<strong>$123</strong>
												</td>
											</tr>
											<tr>
												<td>Watch</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">637 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">10% off</td>
												<td class="text-right">
													<strong>$87</strong>
												</td>
											</tr>
											<tr>
												<td>College Bag</td>
												<td>
													<div class="rating-stars block">
														<div class="rating-stars-container">
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
															<div class="rating-star sm">
																<i class="fa fa-star"></i>
															</div>
														</div>
													</div>
												</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">536 views</td>
												<td class="text-right text-muted d-none d-md-table-cell text-nowrap">25% off</td>
												<td class="text-right">
													<strong>$1,251</strong>
												</td>
											</tr>
										</table>
									</div>
								</div>
							</div><!-- col end -->
						</div>
						<!-- End Row -->

					</div>

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
  name: 'search',
  data () {
    return{

    }
  }
}
</script>
