const components = {}
components.welcomeScreen = `
  <div>Welcome to chat app</div>
`
components.registerScreen = `
<div class="register-container">
<div class="register-form">
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
      <button class="btn" type="submit">Register</button>
    </div>
  </form>
</div>
</div>
`
components.loginScreen = `
<div class="login-container">
            
            <div class="login-form">
                <form id="form-login">
                <h2>Sign In</h2>
                <div class="link">
                  <div class="fa"><a href=""><i class="fab fa-facebook-f"></i></i>
                  </a></div>
                  <div class="gg"><a href=""><i class="fab fa-google"></i></i>
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
                        <button class="btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
`
components.HomeScreen = `

<div class="web-film">
      <div class="header" style= "border-bottom: 1px solid #dbdbdb">
        <div class="name-header">
          <h2>Phimhay.net</h2>
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
      <div class="content-web">
        <div class="main">
          <div class="web-detail">
            <div class="list-film"></div>
            <div class="list-image"></div>
          </div>
        </div>
      </div>
    </div>
    
`
components.details = `
<h1>Details</h1>

`