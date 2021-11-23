class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
        <p>copyright &copy; 2021, Ez Restaurant</p>
    </div>
  `;
  }
}

customElements.define('footer-bar', FooterBar);
