<template>
				<div class="container content-area">
					<div class="">

					    <!-- page-header -->
						<div class="page-header">
							<h1 class="page-title">Users List</h1>
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
						<div class="row">
							<div class="col-lg-12">
								<div class="e-panel card">
									<div class="card-header">
										<div>
											<h3 class="card-title">Users</h3>
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
										<div class="e-table">
											<div class="table-responsive table-lg">
												<table class="table table-bordered">
													<thead>
														<tr>
															<th  class="text-center">

															</th>
															<th class="text-center">Photo</th>
															<th >Name</th>
															<th>Date</th>
															<th class="text-center">Actions</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-1" type="checkbox"> <label class="custom-control-label" for="item-1"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/female/6.jpg"></td>
															<td class="text-nowrap align-middle">Adam Cotter</td>
															<td class="text-nowrap align-middle"><span>09 Dec 2017</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-2" type="checkbox"> <label class="custom-control-label" for="item-2"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/female/5.jpg"></td>
															<td class="text-nowrap align-middle">Pauline Noble</td>
															<td class="text-nowrap align-middle"><span>26 Jan 2018</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-3" type="checkbox"> <label class="custom-control-label" for="item-3"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/male/2.jpg"></td>
															<td class="text-nowrap align-middle">Sherilyn Metzel</td>
															<td class="text-nowrap align-middle"><span>27 Jan 2018</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-4" type="checkbox"> <label class="custom-control-label" for="item-4"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/male/8.jpg"></td>
															<td class="text-nowrap align-middle">Terrie Boaler</td>
															<td class="text-nowrap align-middle"><span>20 Jan 2018</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-5" type="checkbox"> <label class="custom-control-label" for="item-5"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/female/9.jpg"></td>
															<td class="text-nowrap align-middle">Rutter Pude</td>
															<td class="text-nowrap align-middle"><span>13 Jan 2018</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary  badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-6" type="checkbox"> <label class="custom-control-label" for="item-6"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/male/8.jpg"></td>
															<td class="text-nowrap align-middle">Clifford Benjamin</td>
															<td class="text-nowrap align-middle"><span>25 Jan 2018</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-7" type="checkbox"> <label class="custom-control-label" for="item-7"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/female/1.jpg"></td>
															<td class="text-nowrap align-middle">Thedric Romans</td>
															<td class="text-nowrap align-middle"><span>12 Jan 2018</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-8" type="checkbox"> <label class="custom-control-label" for="item-8"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/female/3.jpg"></td>
															<td class="text-nowrap align-middle">Haily Carthew</td>
															<td class="text-nowrap align-middle"><span>27 Jan 2018</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-9" type="checkbox"> <label class="custom-control-label" for="item-9"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/male/2.jpg"></td>
															<td class="text-nowrap align-middle">Dorothea Joicey</td>
															<td class="text-nowrap align-middle"><span>12 Dec 2017</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-10" type="checkbox"> <label class="custom-control-label" for="item-10"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/female/5.jpg"></td>
															<td class="text-nowrap align-middle">Mikaela Pinel</td>
															<td class="text-nowrap align-middle"><span>10 Dec 2017</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-11" type="checkbox"> <label class="custom-control-label" for="item-11"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/female/10.jpg"></td>
															<td class="text-nowrap align-middle">Donnell Farries</td>
															<td class="text-nowrap align-middle"><span>03 Dec 2017</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
														<tr>
															<td class="align-middle text-center">
																<div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">
																	<input class="custom-control-input" id="item-12" type="checkbox"> <label class="custom-control-label" for="item-12"></label>
																</div>
															</td>
															<td class="align-middle text-center"><img alt="image" class="avatar avatar-md rounded-circle" src="../../assets/images/users/male/9.jpg"></td>
															<td class="text-nowrap align-middle">Letizia Puncher</td>
															<td class="text-nowrap align-middle"><span>09 Dec 2017</span></td>

															<td class="text-center align-middle">
																<div class="btn-group align-top">
																	<button class="btn btn-sm btn-primary badge" data-target="#user-form-modal" data-toggle="modal" type="button">Edit</button> <button class="btn btn-sm btn-primary badge" type="button"><i class="fa fa-trash"></i></button>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<div class="d-flex justify-content-center">
												<ul class="pagination mt-3 mb-0">
													<li class="disabled page-item">
														<a class="page-link" href="#">‹</a>
													</li>
													<li class="active page-item">
														<a class="page-link" href="#">1</a>
													</li>
													<li class="page-item">
														<a class="page-link" href="#">2</a>
													</li>
													<li class="page-item">
														<a class="page-link" href="#">3</a>
													</li>
													<li class="page-item">
														<a class="page-link" href="#">4</a>
													</li>
													<li class="page-item">
														<a class="page-link" href="#">5</a>
													</li>
													<li class="page-item">
														<a class="page-link" href="#">›</a>
													</li>
													<li class="page-item">
														<a class="page-link" href="#">»</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
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
  name: 'users-list',
  data () {
    return{

    }
  }
}
</script>
