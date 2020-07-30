const components = {};
components.welcomeScreen = `
  <div>Welcome to chat app</div>
`;
components.registerScreen = `
<div class="register-container">

<div class="register-form">
<h2>Register</h2>
<div class="link">
  <div class="fa"><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></i>
  </a></div>
  <div class="gg"><a href="https://support.google.com/mail/answer/8494?co=GENIE.Platform%3DDesktop&hl=vi"><i class="fab fa-google"></i></i>
  </a></div>
</div>
  <form id="form-register">
    <div class="name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="firstName" placeholder="First name...">
        <div class="error" id="error-first-name"></div>
      </div> 
      <div class="input-wrapper">
        <input type="text" name="lastName" placeholder="Last name...">
        <div class="error" id="error-last-name"></div>
      </div> 
    </div>
    <div class="input-wrapper">
      <input type="text" name="email" placeholder="Email..." >
      <div class="error" id="error-email"></div>
    </div> 
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Password..." >
      <div class="error" id="error-password"></div>
    </div> 
    <div class="input-wrapper">
      <input type="password" name="confirmPassword" placeholder="Confirm password..." >
      <div class="error" id="error-confirm-password"></div>
    </div> 
    <div class="submit-wrapper">
      <div>Do you have account ? <span class="cursor-pointer" id="redirect-to-login"> Login</span></div>
      <button class="btn btn-primary" type="submit">Register</button>
    </div>
  </form>
</div>
</div>
`;
components.loginScreen = `
<div class="login-container">
            
            <div class="login-form">
                <form id="form-login">
                <h2>Sign In</h2>
                <div class="link">
                  <div class="fa"><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></i>
                  </a></div>
                  <div class="gg"><a href="https://support.google.com/mail/answer/8494?co=GENIE.Platform%3DDesktop&hl=vi"><i class="fab fa-google"></i></i>
                  </a></div>
                </div>
                    <div class="input-wrapper">
                        <input type="email" name="email" placeholder="Email...">
                        <div class="error" id="error-email"></div>
                    </div>
                    <div class="input-wrapper">
                        <input type="password" name="password" placeholder="Password...">
                        <div class="error" id="error-password"></div>
                    </div>
                    
                    <div class="submit-wrapper">
                        <div>Don't have an account? <span class="cursor-pointer" id="redirect-to-register">Register</span></div>
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
`;
components.HomeScreen = `

<div class="Home-web" style=" width: 100%;">
<!--Carousel Wrapper-->
<div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel">
  <!--Indicators-->
  <ol class="carousel-indicators">
    <li data-target="#video-carousel-example2" data-slide-to="0" class="active"></li>
    <li data-target="#video-carousel-example2" data-slide-to="1"></li>
    <li data-target="#video-carousel-example2" data-slide-to="2"></li>
  </ol>
  <!--/.Indicators-->
  <!--Slides-->
  <div class="carousel-inner" role="listbox">
    <!-- First slide -->
    <div class="carousel-item active">
      <!--Mask color-->
      <div class="view">
        <!--Video source-->
        <a href="https://xemphim.plus/watch/126" id="tranfo">
          <video class="video-fluid" autoplay loop muted>
            <source src="/images/transformers.mp4" type="video/mp4" />
          </video>
        </a>

        <div class="mask rgba-indigo-light"></div>
      </div>

      <!--Caption-->
      <div class="carousel-caption">
        <div class="animated fadeInDown">
          <h3 class="h3-responsive">Transformers 5: The Last Knight</h3>
          <p>Robot Đại Chiến5: Chiến Binh Cuối Cùng</p>
        </div>
      </div>
      <!--Caption-->
    </div>
    <!-- /.First slide -->

    <!-- Second slide -->
    <div class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <!--Video source-->
       <a href="https://xemphim.plus/watch/17">
        <video class="video-fluid" autoplay loop muted>
          <source src="/images/venom.mp4" type="video/mp4" />
        </video>
       </a>
        <div class="mask rgba-purple-slight"></div>
      </div>

      <!--Caption-->
      <div class="carousel-caption">
        <div class="animated fadeInDown">
          <h3 class="h3-responsive">VENOM</h3>
          <p>Quái Vật Venom</p>
        </div>
      </div>
      <!--Caption-->
    </div>
    <!-- /.Second slide -->

    <!-- Third slide -->
    <div class="carousel-item">
      <!--Mask color-->
      <div class="view">
        <!--Video source-->
        <a href="https://xemphim.plus/watch/4437">
          <video class="video-fluid" autoplay loop muted>
          <source src="/images/joker.mp4" type="video/mp4" />
        </video>
        </a>
        <div class="mask rgba-black-strong"></div>
      </div>

      <!--Caption-->
      <div class="carousel-caption">
        <div class="animated fadeInDown">
          <h3 class="h3-responsive">JOKER</h3>
          <p>Gã Hề</p>
        </div>
      </div>
      <!--Caption-->
    </div>
    <!-- /.Third slide -->
  </div>
  <!--/.Slides-->
  <!--Controls-->
  <a class="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <!--/.Controls-->
</div>
<!--Carousel Wrapper-->
</div>
<div class="web-film">
<div class="header" id="header">
  <div class="name-header">
  <a href ="" style="text-decoration:none; color:#fff" >
  <h1><span style="color:#009cdb">P</span><span style="color:#49a942">h</span><span style="color:#f37a20">i</span><span style="color:#ed2b74">m</span>hay<span style="font-size:30px">.net<span></h1>
 </a>
  </div>
  <form id="search">
<input class="form-control" name="search" type="text" placeholder="Search">
<button class="btn btn-primary pd-3"><i class="fas fa-search"></i></button>
</form>
  <div class="logout ">
    <div class="mr-3"  id="welcome"></div>
 <button class="btn btn-primary mr-3 " id="SingInBtn"></button>
<button class="btn btn-primary" id="logout"> 
</button>
    
  </div>
</div>
 <div class="content-web">
  <div class="main">
    <div class="web-detail">
      <div class="list-film"></div>
      <div class="list-image"></div>
    </div>

  </div>
</div>
</div>
<footer class="page-footer font-small stylish-color-dark pt-4">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto">

        <!-- Content -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phimhay.net</h5>
        <p>Here you can use rows and columns to organize your footer phimhay. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phimhay</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Phim lẻ mới</a>
          </li>
          <li>
            <a href="#!">Phim bộ mới</a>
          </li>
          <li>
            <a href="#!">Phim chiếu rạp</a>
          </li>
          <li>
            <a href="#!">Phim kinh điển</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phim lẻ</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Phim hành động</a>
          </li>
          <li>
            <a href="#!">Phim kiếm hiệp</a>
          </li>
          <li>
            <a href="#!">Phim kinh dị</a>
          </li>
          <li>
            <a href="#!">Phim viễn tưởng</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phim Bộ</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Phim bộ Hàn Quốc</a>
          </li>
          <li>
            <a href="#!">Phim bộ Trung Quốc</a>
          </li>
          <li>
            <a href="#!">Phim bộ Mỹ</a>
          </li>
          <li>
            <a href="#!">Phim bộ Việt Nam</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <hr>

  <!-- Call to action -->
  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item">
      <h5 class="mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <a id="okk" class="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>
  <!-- Call to action -->

  <hr>

  <!-- Social buttons -->
  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>
  <!-- Social buttons -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> Phimhay.net</a>
  </div>
  <!-- Copyright -->

</footer>
`;
components.details = `
<div class="web-films">
    <div class="header">
      <div class="name-header">
       <a href="" style="text-decoration:none; color:#fff">
       <h1><span style="color:#009cdb">P</span><span style="color:#49a942">h</span><span style="color:#f37a20">i</span><span style="color:#ed2b74">m</span>hay<span style="font-size:30px">.net<span></h1>
      </a>
       </div>
  <form id="search" class="d-flex">
    <input class="form-control" name="search" type="text" placeholder="Search">
    <button class="btn btn-primary">Tìm</button>
  </form>
      <div class="logout ">
        <div class="mr-3"  id="welcome"></div>
     <button class="btn btn-primary mr-3 " id="SingInBtn"></button>
    <button class="btn btn-primary" id="logout"> 
    </button>
        
      </div>
    </div>
    <div class="content-detail">
    <div class="noidung" id="background" style=";background-position:center;background-size:cover;">
      <div class="image-film mr-3">
        <div id="list-image"></div>

      </div>
      <div class="content-film">
        <h1 id="list-name"></h1>     
        <h3 style="color:gray" id="list-films"></h3>
        <h4 id="list-title"></h4>
        <p id="des"></p>
      </div>
      
    </div>

    <div id="list-video"></div>




 
 
  
</div>



<div class="comment">
<div id="rating">
<input type="radio" id="star5" name="rating" value="5" />
<label class = "full" for="star5" title="Awesome - 5 stars"></label>

<input type="radio" id="star4half" name="rating" value="4 and a half" />
<label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>

<input type="radio" id="star4" name="rating" value="4" />
<label class = "full" for="star4" title="Pretty good - 4 stars"></label>

<input type="radio" id="star3half" name="rating" value="3 and a half" />
<label class="half" for="star3half" title="Meh - 3.5 stars"></label>

<input type="radio" id="star3" name="rating" value="3" />
<label class = "full" for="star3" title="Meh - 3 stars"></label>

<input type="radio" id="star2half" name="rating" value="2 and a half" />
<label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>

<input type="radio" id="star2" name="rating" value="2" />
<label class = "full" for="star2" title="Kinda bad - 2 stars"></label>

<input type="radio" id="star1half" name="rating" value="1 and a half" />
<label class="half" for="star1half" title="Meh - 1.5 stars"></label>

<input type="radio" id="star1" name="rating" value="1" />
<label class = "full" for="star1" title="Sucks big time - 1 star"></label>

<input type="radio" id="starhalf" name="rating" value="half" />
<label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
</div>
<div id="myForm">
  <input  type="text"   placeholder="Enter your comment" id="fname" >
  
</div>
<div id= "div"><div> 
</div>

<div>

<footer class="page-footer font-small stylish-color-dark pt-4">

  <!-- Footer Links -->
  <div class="container text-center text-md-left">

    <!-- Grid row -->
    <div class="row">

      <!-- Grid column -->
      <div class="col-md-4 mx-auto">

        <!-- Content -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phimhay.net</h5>
        <p>Here you can use rows and columns to organize your footer phimhay. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phimhay</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Phim lẻ mới</a>
          </li>
          <li>
            <a href="#!">Phim bộ mới</a>
          </li>
          <li>
            <a href="#!">Phim chiếu rạp</a>
          </li>
          <li>
            <a href="#!">Phim kinh điển</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phim lẻ</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Phim hành động</a>
          </li>
          <li>
            <a href="#!">Phim kiếm hiệp</a>
          </li>
          <li>
            <a href="#!">Phim kinh dị</a>
          </li>
          <li>
            <a href="#!">Phim viễn tưởng</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

      <hr class="clearfix w-100 d-md-none">

      <!-- Grid column -->
      <div class="col-md-2 mx-auto">

        <!-- Links -->
        <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Phim Bộ</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Phim bộ Hàn Quốc</a>
          </li>
          <li>
            <a href="#!">Phim bộ Trung Quốc</a>
          </li>
          <li>
            <a href="#!">Phim bộ Mỹ</a>
          </li>
          <li>
            <a href="#!">Phim bộ Việt Nam</a>
          </li>
        </ul>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <hr>

  <!-- Call to action -->
  <ul class="list-unstyled list-inline text-center py-2">
    <li class="list-inline-item">
      <h5 class="mb-1">Register for free</h5>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn btn-danger btn-rounded">Sign up!</a>
    </li>
  </ul>
  <!-- Call to action -->

  <hr>

  <!-- Social buttons -->
  <ul class="list-unstyled list-inline text-center">
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-fb mx-1">
        <i class="fab fa-facebook-f"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-tw mx-1">
        <i class="fab fa-twitter"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-gplus mx-1">
        <i class="fab fa-google-plus-g"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-li mx-1">
        <i class="fab fa-linkedin-in"> </i>
      </a>
    </li>
    <li class="list-inline-item">
      <a href="#!" class="btn-floating btn-dribbble mx-1">
        <i class="fab fa-dribbble"> </i>
      </a>
    </li>
  </ul>
  <!-- Social buttons -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> Phimhay.net</a>
  </div>
  <!-- Copyright -->

</footer>
</div>

`;
