const initialize = () => {
  const content = document.querySelector('.content')
  const header = document.createElement('header')
  const main = document.createElement('main')
  main.className = 'main'
  const footer = document.createElement('footer')
  
  header.innerHTML = `
    <div class="logo-container">
      <img src="./images/logo.png" class="logo">
    </div>

    <nav>
      <a class="nav-item home">Home</a>
      <a class="nav-item menu">Menu</a>
      <a class="nav-item contact">Contact</a>
    </nav>

    <div class="contact">
      <button>Call Now</button>
      <button>Order Online</button>
    </div>`

  main.innerHTML = `
    <div class="banner">
      <div>
        <h1 class="headline">Welcome to<br>Pizza N Vibes</h1>
        <p class="tagline">Experience pizza and good vibes<br>in every bite at Pizza N Vibes</p>
      </div>
    </div>`

  footer.innerHTML = `
    <div class="footer">
      <p class="copyright">&copy; Pizza N Vibes 2023</p>
    </div>`

  content.appendChild(header)
  content.appendChild(main)
  content.appendChild(footer)
};

export default initialize;