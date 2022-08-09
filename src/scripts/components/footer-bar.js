class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer tabindex="0">
        <p>Submission: Katalog Restoran | Menjadi Front-End Web Developer Expert</p>
        <p>Copyright © 2021 - Hunger's Bite Apps</p>
    </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
