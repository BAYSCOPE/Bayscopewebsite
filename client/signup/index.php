<?php 
session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Keywords" content="web design, web development, graphic design,Devops,mobile app,bayscopes">
    <title>BayscopesIt | sign up</title>
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/assets/css/style.css"/>
    <!-- <link href="/files/css/style.css" rel="stylesheet">
    <link href="/files/css/responsive.css" rel="stylesheet"> -->

    
  <!-- Bootstrap CSS File -->
  <link href="files/libs/bootstrap/css/bootstrap.min.css" rel="style  sheet">

  <!-- libsraries CSS Files -->
 
  <link href="/files/libs/font-awesome/css/font-awesome.min.css" rel="stylesheet">


  <!-- Nivo Slider Theme -->
 
<style>
  .hidden{
    display: none;
 
  }
</style>
 
</head>
<body>
  <header>
    <!-- header-area start -->
    <!-- <div id="sticker" class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12"> -->

            <!-- Navigation -->
            <!-- <nav class="navbar navbar-default"> -->
              <!-- Brand and toggle get grouped for better mobile display -->
              <!-- <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button> -->
                <!-- Brand -->
                <!-- <a class="navbar-brand page-scroll sticky-logo" href="index.html">
                  <h1>BayScope</h1> -->
                  <!-- Uncomment below if you prefer to use an image logo -->
                  <!-- <img src="img/logo.png" alt="" title=""> -->
                <!-- </a>
              </div> -->
              <!-- Collect the nav links, forms, and other content for toggling -->
              <!-- <div class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                <ul class="nav navbar-nav navbar-right">
                  <li class="active">
                    <a class="page-scroll" href="#home">Home</a>
                  </li>
                  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Services<span
                        class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href=#>Software development</a></li>
                      <li><a href=#>Web development</a></li>
                      <li><a href=#>Mobile development</a></li>
                      <li><a href=#>App development</a></li>
                      <li><a href=#>QA Testing</a></li>
                      
                      <li><a href=#>Product Design</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages<span
                        class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href=#>About Us</a></li>
                      <li><a href=#>Our Services</a></li>
                      <li><a href=#>Our Team</a></li>
                      <li><a href=#>Leadership</a></li>
                      <li><a href=#>Pricing Plan</a></li>
                      <li><a href=#>FAQ</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Products<span
      class="caret"></span></a>
      <ul class="dropdown-menu" role="menu">
        <li><a href=#>Bayscope Business</a></li>
        <li><a href=#>Bayscope Schools</a></li>
        <li><a href=#>Bayscope Healths</a></li>
        <li><a href=#>BQuery</a></li>
        <li><a href=#>ContriFund</a></li>
        <li><a href=#>Portfolio 6</a></li>
        <li><a href=#>Portfolio 7</a></li>
        </ul>
                  </li>

                  <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Blog<span
                        class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href=#>Blog 1</a></li>
                      <li><a href=#>Blog 2</a></li>
                    </ul>
                  </li>
                  <li>
                    <a class="page-scroll" href="#contact">Contact</a>
                  </li>

                  <li class="yo">
                    <a class="page-scroll" href="#portfolio"> </a>
                  </li>
                 <li class="">
                     <a href="/client/signup"> <i class="fa fa-user-o" aria-hidden="true"></i></a>    
                 </li>
                 <li class="pl-2">
                  <a href="/client/cart"> <i class="fa fa-shopping-cart fa-bold" aria-hidden="true"></i></a>    
              </li>
                </ul>
              </div> -->
              <!-- navbar-collapse -->
            <!-- </nav> -->
            <!-- END: Navigation -->
          <!-- </div>
        </div>
      </div>
    </div> -->
    <!-- header-area end -->
  <!-- </header> -->
  <!-- header end -->

    <div class="container my-5 " >
            <div class="row" style="box-shadow: 0px 0px 5px black; background-color: white; ">
              <div class="col-md-6  p-5 "  >
             <?php  if(isset($_SESSION['msg'])){
            
             ?>
             <div
              class="alert alert-danger alert-dismissible fade show"
              role="alert"
             >
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
             
              <strong> <?php echo $_SESSION['msg'] ?></strong>
             </div>
             <?php } 
             unset($_SESSION['msg'])?>
                          
                <form action="signup.php" method="post" class="" >
                    <div class="mb-3 mt-3">
                        <label for="org_name"  id ="signup" class="form-label">Organization name:</label>
                        <input type="username" class="form-control" id="username" placeholder="name of Organization" name="org_name" required>
                      <i class="fa fa-building icon" aria-hidden="true"></i>
                      </div>
                    <div class="mb-3 mt-3">
                      <label for="email" class="form-label">Email:</label>
                      <input type="email" class="form-control" id="email" placeholder=" Email" name="email" required>
                      <i class="fa-solid fa-envelope icon"></i>
                    </div> 
                    <div class="mb-3 mt-3">
                      <label for="tel" class="form-label">Phone no:</label>
                      <input type="tel" class="form-control" id="phone" placeholder="Contact" name="phone" required>
                      <i class="fa-solid fa-phone-volume icon"></i>
                    </div>
                    <div class="mb-3 mt-3">
                      <label for="address" class="form-label">Address:</label>
                      <input type="text" class="form-control" id="email" placeholder="Full address" name="address" required>
                      <i class="fa fa-address-card-o icon" aria-hidden="true"></i>
                    </div>
                  
                    
  

      

      <div class="select_option">
        <label for="country" class="form-label"> Country:</label>
          <select class="form-select country mb-3" name="country" aria-label="Default select example" onchange="loadStates()">
              <option selected>Select Country</option>
          </select>
          <label for="State" class="form-label"> State:</label>
          <select class="form-select state mb-3" name="state" aria-label="Default select example" onchange="loadCities()">
              <option selected>Select State</option>
          </select>
          <label for="City" class="form-label"> City:</label>
          <select class="form-select city mb-3" name="city" aria-label="Default select example">
              <option selected>Select City:</option>
          </select>
      </div>
      <label for="customer" class="form-label"> Organization type:</label>
      <select id="customer" name="org_type" class="form-select city mb-3" aria-label="Default select example" required>
          <option selected>Select Organization type:</option>
          <option value="Individual">Individual</option>
          <option value="Business">Business</option>
          <option value="Company">Company</option>
      </select>
    <input class="hidden" style="dispaly:none" name="customer_id" value=" <?php  echo 'BAY-' . rand(1000,9999) ?> " >
                    <div class="wrapper ">
                      <div class="pass-field">
                        <input type="password" id="passwordInput" name="password" class="form-control" placeholder="Create password">
                        <i class="fa-solid fa-eye"></i>
                        
                      </div>
                      <div class="pass-field confpassword" oninput="checkPasswordMatch()">
                        <input type="password" id="confirmPasswordInput"  class="form-control mt-3 " placeholder="Confirm password">
                        <i class="fa-solid fa-eye"></i>
                        <span id="passwordMatchMessage" class="mb-3"></span>
                        </div>
                      <div class="content">
                        <p>Password must contains</p>
                        <ul class="requirement-list">
                          <li>
                            <i class="fa-solid fa-circle"></i>
                            <span>At least 8 characters length</span>
                          </li>
                          <li>
                            <i class="fa-solid fa-circle"></i>
                            <span>At least 1 number (0...9)</span>
                          </li>
                          <li>
                            <i class="fa-solid fa-circle"></i>
                            <span>At least 1 lowercase letter (a...z)</span>
                          </li>
                          <li>
                            <i class="fa-solid fa-circle"></i>
                            <span>At least 1 special symbol (!...$)</span>
                          </li>
                          <li>
                            <i class="fa-solid fa-circle"></i>
                            <span>At least 1 uppercase letter (A...Z)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                   
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" readonly> Remember me
                      </label>
                    </div>
                    <button type="submit"  id="submit" class="btn submit" >SIGN UP</button>
                  </form>
            </div>
                <div class="col-md-6   p-2 text-center col2">
                  <div class="container flex" style="border: 2px solid white; width: 80%; height: auto; padding: 30px;" >
                    
                    <img src="/assets/images/logo.jpg" alt="">
                    <h1 style="font-weight: bold; color: aqua;">SIGN UP </h1>
                    <p>Sign up to have access to Bayscopes  Products and Services in one account.</p>
                    <ul>
                        <li style="list-style: none; ">Already have an account? <a class="h4 btn  btn-light" href="../login/" style="text-decoration: none; color: rgb(0, 0, 0);">Log in </a></li>
                    </ul>
                   <div class="btn-group gap-3" id="signup">
                      <a href="#signup" class="btn btn-outline-dark" > SIGN UP</a>
                      <a href="../login/" class="btn btn-outline-dark"> LOG IN</a>  
                   </div>
                   <div class="container pt-5 ">
                    <span style="color: aqua; margin-right: 10px;" class="h6">Follow us On:</span>
                    <a href="#" ><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                   </div>
                  </div>  
                 
                </div>
        </div>
      </div>
<!-- 
      <footer>
        
    <div class="footer-area-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="copyright text-center">
              <p>
                &copy; Copyright <strong>BayScope</strong>. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
      </footer>
      
 -->
  <script src="/assets/js/script.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <script src="/assets/js/bootstrap.bundle.min.js"></script>
  <script src="https://kit.fontawesome.com/54c6d49d8b.js" crossorigin="anonymous"></script>


  
  <!-- JavaScript Libraries
  <script src="f/iles/libs/jquery/jquery.min.js"></script>
  <script src="/files/libs/bootstrap/js/bootstrap.min.js"></script>
  <script src="/files/libs/owlcarousel/owl.carousel.min.js"></script>
  <script src="/files/libs/venobox/venobox.min.js"></script>
  <script src="/files/libs/knob/jquery.knob.js"></script>
  <script src="/files/libs/wow/wow.min.js"></script>
  <script src="/files/libs/parallax/parallax.js"></script>
  <script src="/files/libs/easing/easing.min.js"></script>
  <script src="/files/libs/nivo-slider/js/jquery.nivo.slider.js" type="text/javascript"></script>
  <script src="/files/libs/appear/jquery.appear.js"></script>
  <script src="/files/libs/isotope/isotope.pkgd.min.js"></script>


  <script src="/files/js/main.js"></script> -->

</body>
</html>
