const menu = () => {
  const main = document.querySelector('.main')
  const menuSection = document.createElement('div')
  menuSection.className = 'menu'
  
  main.innerHTML = `
    <div class="banner">
      <div>
        <h1 class="headline">Menu</h1>
        <p class="tagline">Savor the Flavors at Pizza N Vibes: <br>Dive into Our Irresistible Pizzas and Unforgettable Atmosphere</p>
      </div>
    </div>`

  menuSection.innerHTML = `
    <div>
      <div>
        <h3>New York Pizza</h3>
        <ul>
          <li>point 1</li>
          <li>point 2</li>
          <li>point 3</li>
        </ul>
      </div>
      <div>
        <h3>New York Pizza</h3>
        <ul>
          <li>point 1</li>
          <li>point 2</li>
          <li>point 3</li>
        </ul>
      </div>
      <div>
        <h3>New York Pizza</h3>
        <ul>
          <li>point 1</li>
          <li>point 2</li>
          <li>point 3</li>
        </ul>
      </div>
      <div>
        <h3>New York Pizza</h3>
        <ul>
          <li>point 1</li>
          <li>point 2</li>
          <li>point 3</li>
        </ul>
      </div>
    </div>`

  main.insertAdjacentElement('afterend', menuSection)
};

export default menu;