const menu = () => {
  const menu = document.querySelector('.menu')
  const contact = document.querySelector('.contact')
  
  if (menu) {
    menu.remove()
  } else if (contact) {
    contact.remove()
  }
  
  const main = document.querySelector('.main')
  main.innerHTML = `
    <div class="banner">
      <div>
        <h1 class="headline">Menu</h1>
        <p class="tagline">Savor the Flavors at Pizza N Vibes:<br>Dive into Our Irresistible Pizzas<br>and Unforgettable Atmosphere</p>
      </div>
    </div>`

  const menuSection = document.createElement('div')
  menuSection.className = 'menu'
  menuSection.innerHTML = `
    <div>
      <h3 class="pizza-name">New York Pizza</h3>
      <h4 class="price">$14.95</h4>
      <p>New York-Style Pizza: Savor our thin, crispy crust with rich tomato sauce, melted mozzarella-provolone blend, and fresh toppings. A classic bite of the Big Apple!</p>
    </div>
    <div>
      <h3 class="pizza-name">Detroit Pizza</h3>
      <h4 class="price">$16.95</h4>
      <p>Detroit-Style Pizza: Delight in our thick, airy crust, topped with savory tomato sauce, gooey melted cheese, and a variety of fresh ingredients. Discover the Motor City's deep-dish delight!</p>
    </div>
    <div>
      <h3 class="pizza-name">Sicilian Pizza</h3>
      <h4 class="price">$18.95</h4>
      <p>Sicilian-Style Pizza: Relish in our thick, fluffy square crust, adorned with robust tomato sauce, creamy melted cheese, and a medley of delicious toppings. Taste the flavors of the Mediterranean in every bite!</p>
    </div>
    <div>
      <h3 class="pizza-name">California</h3>
      <h4 class="price">$17.95</h4>
      <p>California-Style Pizza: Enjoy our light, crispy crust topped with unique, gourmet ingredients, fresh vegetables, and flavorful cheeses. Embrace the culinary creativity of the Golden State!</p>
    </div>`

  main.insertAdjacentElement('afterend', menuSection)
};

export default menu;