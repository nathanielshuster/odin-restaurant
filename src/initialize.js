const initialize = () => {
  const header = document.createElement('header')
  header.innerHTML = `
    <div class="logo-container">
      <img src="./images/logo.png" class="logo">
    </div>

    <nav>
      <a class="nav-item home-link">Home</a>
      <a class="nav-item menu-link">Menu</a>
      <a class="nav-item contact-link">Contact</a>
    </nav>

    <div class="contact-buttons">
      <button>Call Now</button>
      <button>Order Online</button>
    </div>`

  const main = document.createElement('main')
  main.className = 'main'
  main.innerHTML = `
    <div class="banner">
      <div>
        <h1 class="headline">Welcome to<br>Pizza N Vibes</h1>
        <p class="tagline">Experience pizza and good vibes<br>in every bite at Pizza N Vibes</p>
      </div>
    </div>`

  const footer = document.createElement('footer')
  footer.innerHTML = `
    <div class="footer">
      <p class="copyright">&copy; Pizza N Vibes 2023</p>
    </div>`

  const content = document.querySelector('.content')
  content.appendChild(header)
  content.appendChild(main)
  content.appendChild(footer)
};

export default initialize;