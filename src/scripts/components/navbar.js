class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="drawer" class="nav">
        <ul class="nav_list">
            <li class="nav_item"><a href="/">Home</a></li>
            <li class="nav_item"><a href="#/favorite">Favorite</a></li>
            <li class="nav_item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/meilika-dwi-putri-963b41221/">About Us</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define('nav-bar', Navbar);
