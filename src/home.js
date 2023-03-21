const home = () => {
  const main = document.querySelector('.main')

  main.innerHTML = `
    <div class="banner">
      <div>
        <h1 class="headline">Welcome to<br>Pizza N Vibes</h1>
        <p class="tagline">Experience pizza and good vibes<br>in every bite at Pizza N Vibes</p>
      </div>
    </div>`
};

export default home;