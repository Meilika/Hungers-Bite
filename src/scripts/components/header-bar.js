class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
      <a tabindex="0" id="menu" class="header_menu" aria-label="navigation-menu">☰</a>
      <h1 class="header_title">
          Hunger's Bite
      </h1>
    </header>
    `;
  }
}

customElements.define('header-bar', HeaderBar);
