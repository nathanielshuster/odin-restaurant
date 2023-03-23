const contact = () => {
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
        <h1 class="headline">Contact Us</h1>
        <p class="tagline">Drop us a line at Pizza N Vibes</p>
      </div>
    </div>`

  const contactSection = document.createElement('div')
  contactSection.className = 'contact'
  contactSection.innerHTML = `
    <form class="contact-form">
      <div class="input-group">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" name="first_name" required>
      </div>
      <div class="input-group">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" name="last_name" required>
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="input-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone">
      </div>
      <button type="submit">Submit</button>
    </form>`

    main.insertAdjacentElement('afterend', contactSection)
};

export default contact;