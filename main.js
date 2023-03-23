(()=>{"use strict";const e=()=>{const e=document.querySelector(".menu"),n=document.querySelector(".contact");e?e.remove():n&&n.remove(),document.querySelector(".main").innerHTML='\n    <div class="banner">\n      <div>\n        <h1 class="headline">Welcome to<br>Pizza N Vibes</h1>\n        <p class="tagline">Experience pizza and good vibes<br>in every bite at Pizza N Vibes</p>\n      </div>\n    </div>'},n=()=>{const e=document.querySelector(".menu"),n=document.querySelector(".contact");e?e.remove():n&&n.remove();const t=document.querySelector(".main");t.innerHTML='\n    <div class="banner">\n      <div>\n        <h1 class="headline">Menu</h1>\n        <p class="tagline">Savor the Flavors at Pizza N Vibes:<br>Dive into Our Irresistible Pizzas<br>and Unforgettable Atmosphere</p>\n      </div>\n    </div>';const i=document.createElement("div");i.className="menu",i.innerHTML='\n    <div>\n      <h3 class="pizza-name">New York Pizza</h3>\n      <h4 class="price">$14.95</h4>\n      <p>New York-Style Pizza: Savor our thin, crispy crust with rich tomato sauce, melted mozzarella-provolone blend, and fresh toppings. A classic bite of the Big Apple!</p>\n    </div>\n    <div>\n      <h3 class="pizza-name">Detroit Pizza</h3>\n      <h4 class="price">$16.95</h4>\n      <p>Detroit-Style Pizza: Delight in our thick, airy crust, topped with savory tomato sauce, gooey melted cheese, and a variety of fresh ingredients. Discover the Motor City\'s deep-dish delight!</p>\n    </div>\n    <div>\n      <h3 class="pizza-name">Sicilian Pizza</h3>\n      <h4 class="price">$18.95</h4>\n      <p>Sicilian-Style Pizza: Relish in our thick, fluffy square crust, adorned with robust tomato sauce, creamy melted cheese, and a medley of delicious toppings. Taste the flavors of the Mediterranean in every bite!</p>\n    </div>\n    <div>\n      <h3 class="pizza-name">California</h3>\n      <h4 class="price">$17.95</h4>\n      <p>California-Style Pizza: Enjoy our light, crispy crust topped with unique, gourmet ingredients, fresh vegetables, and flavorful cheeses. Embrace the culinary creativity of the Golden State!</p>\n    </div>',t.insertAdjacentElement("afterend",i)},t=()=>{const e=document.querySelector(".menu"),n=document.querySelector(".contact");e?e.remove():n&&n.remove();const t=document.querySelector(".main");t.innerHTML='\n    <div class="banner">\n      <div>\n        <h1 class="headline">Contact Us</h1>\n        <p class="tagline">Drop us a line at Pizza N Vibes</p>\n      </div>\n    </div>';const i=document.createElement("div");i.className="contact",i.innerHTML='\n    <form class="contact-form">\n      <div class="input-group">\n        <label for="first-name">First Name</label>\n        <input type="text" id="first-name" name="first_name" required>\n      </div>\n      <div class="input-group">\n        <label for="last-name">Last Name</label>\n        <input type="text" id="last-name" name="last_name" required>\n      </div>\n      <div class="input-group">\n        <label for="email">Email</label>\n        <input type="email" id="email" name="email" required>\n      </div>\n      <div class="input-group">\n        <label for="phone">Phone Number</label>\n        <input type="tel" id="phone" name="phone">\n      </div>\n      <button type="submit">Submit</button>\n    </form>',t.insertAdjacentElement("afterend",i)};(()=>{const e=document.createElement("header");e.innerHTML='\n    <div class="logo-container">\n      <img src="./images/logo.png" class="logo">\n    </div>\n\n    <nav>\n      <a class="nav-item home-link">Home</a>\n      <a class="nav-item menu-link">Menu</a>\n      <a class="nav-item contact-link">Contact</a>\n    </nav>\n\n    <div class="contact-buttons">\n      <button>Call Now</button>\n      <button>Order Online</button>\n    </div>';const n=document.createElement("main");n.className="main",n.innerHTML='\n    <div class="banner">\n      <div>\n        <h1 class="headline">Welcome to<br>Pizza N Vibes</h1>\n        <p class="tagline">Experience pizza and good vibes<br>in every bite at Pizza N Vibes</p>\n      </div>\n    </div>';const t=document.createElement("footer");t.innerHTML='\n    <div class="footer">\n      <p class="copyright">&copy; Pizza N Vibes 2023</p>\n    </div>';const i=document.querySelector(".content");i.appendChild(e),i.appendChild(n),i.appendChild(t)})(),document.querySelector(".home-link").addEventListener("click",e),document.querySelector(".menu-link").addEventListener("click",n),document.querySelector(".contact-link").addEventListener("click",t)})();
//# sourceMappingURL=main.js.map