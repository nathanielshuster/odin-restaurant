(()=>{"use strict";(()=>{const n=document.querySelector(".content"),e=document.createElement("header"),a=document.createElement("main");a.className="main";const i=document.createElement("footer");e.innerHTML='\n    <div class="logo-container">\n      <img src="./images/logo.png" class="logo">\n    </div>\n\n    <nav>\n      <a href="/" class="nav-item">Home</a>\n      <a href="/" class="nav-item">Menu</a>\n      <a href="/" class="nav-item">Contact</a>\n    </nav>\n\n    <div class="contact">\n      <button>Call Now</button>\n      <button>Order Online</button>\n    </div>',a.innerHTML='\n    <div class="banner" style="background-image: url(./images/banner.jpg);">\n      <div>\n        <h1 class="headline">Welcome to<br>Pizza N Vibes</h1>\n        <p class="tagline">Experience pizza and good vibes<br>in every bite at Pizza N Vibes</p>\n      </div>\n    </div>',i.innerHTML='\n    <div class="footer">\n      <p class="copyright">&copy; Pizza N Vibes 2023</p>\n    </div>',n.appendChild(e),n.appendChild(a),n.appendChild(i)})()})();