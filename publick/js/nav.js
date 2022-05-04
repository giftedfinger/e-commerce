const creatNav=()=>{
    let nav=document.querySelector('.navbar');
nav.innerHTML=`
<div class="nav">
<img src="image/dark-logo.png" class="brand-logo" alt="">
<div class="nav-items">
<div class="search">
    <input type="text" class="search-box" placeholder="search brand product">
    <button class="search-btn"> search</button>
</div>
<a href="#"><img src="image/user.png" alt=""> </a>
<a href=""><img src="image/cart.png" alt=""></a>
</div>
      </div>

      <ul class="links-container">
<li> <a href="#" class="link">home</a></li>
<li> <a href="#" class="link">women</a></li>
<li> <a href="#" class="link">men</a></li>
<li> <a href="#" class="link">kids</a></li>
<li> <a href="#" class="link">accessories</a></li> 
      </ul>
`;

}

creatNav();