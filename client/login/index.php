<?php 
session_start();

if(isset($_COOKIE['email'])){
  $_SESSION['email'] = $_COOKIE['email'];
  header('Location:../dashboard/');
  exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Keywords" content="web design, web development, graphic design,Devops,mobile app,bayscopes">
    <title>BayscopesIt | login</title>
    <link rel="stylesheet" href="/assets/css/style.css"/>
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
</head>
<body>






    <div class="container mt-3">
            <div class="row" style="box-shadow: 0px 0px 5px black; background-color: white;">
          
              <div class="col-md-6 p-5" style="display: flex; justify-content: space-between; align-items: center; justify-content: center;" >
            
                <form action="processlogin.php" method="post" style="width: 100%;"  >
                <?php  if(isset($_SESSION['msg'])){
            
            ?>
            <div
             class="alert alert-info alert-dismissible fade show"
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
            <?php }   unset($_SESSION['msg'])?>
                    <div class="mb-3 mt-3">
                      <label for="email" class="form-label" >Email:</label>
                      <input type="email" class="form-control " id="pwd" placeholder="Enter email" name="email" required>
                      <i class="fa-solid fa-envelope icon"></i>
                    </div>
                    <div class="mb-3 wrapper" >
                      <div class="pass-field new">
                        <input type="password" style="height: 40px;" name="password"  class="pwd form-control mt-3 " placeholder="password">
                        <i class="fa-solid fa-eye " id="eye"></i>
                        </div>
                      <i class="fa-solid fa-lock icon"></i>
                  
                      
                    </div> 
                     
                    <div class="form-check mb-3">
                      <label class="form-check-label">
                        <input class="form-check-input text-start" type="checkbox" name="remember" > Remember me
                      </label>
                      <span style="float: right ;"><a href="" class=" forgot" >Forgot password?</a> </span>
                    </div> 
                    <button type="submit" class="btn submit btn-info col-5" >Login</button>
                  </form>
            </div>
                <div class="col-md-6 p-2 text-center " style="background-color: #000; color: white;
                display: flex; justify-content: center; flex-direction: column; align-items: center;">
                 <div class="container" style="margin: 20px; border: 2px solid white; width: 80%; height: auto; padding: 30px;" >
                  <img src="/assets/images/bay-logo.png" alt="">
                  <h1 style="font-weight: bold; color: aqua;">LOGIN </h1>
                    <p>Login to access your Product(s)</p>
                    <ul>
                        <li style="list-style: none; ">Don't have an account? <a class="h4 btn  btn-light" href="../signup/" style="text-decoration: none; color: rgb(0, 0, 0);">Sign up </a></li>
                    </ul>
                   <div class="btn-group gap-3">
                    <a href="../signup/index.html" class="btn btn-outline-dark" > SIGN UP</a> 
                      <a href="#" class="btn btn-outline-dark"> LOG IN</a> 
                   </div>
                   <div class="container pt-5 p">
                    <span style="color: aqua; margin-right: 10px;" class="h6">Follow us On:</span>
                    <a href="#" ><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                   </div>
                  </div>
                </div>
               
        </div>
      </div>







      
      <!-- <script src="/assets/js/script.js"></script> -->
      <script>
        const passwordInput3 = document.querySelector('.new .pwd');
const eyeIcon3 = document.querySelector('.new i')
eyeIcon3.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    // alert('helo') ;
    passwordInput3.type = passwordInput3.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eyeIcon3.className = `fa-solid fa-eye${passwordInput3.type === "password" ? "" : "-slash"}`;
});


      </script>
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/bootstrap.bundle.min.js"></script>
      <script src="https://kit.fontawesome.com/54c6d49d8b.js" crossorigin="anonymous"></script>
  
</body>
</body>
</html>