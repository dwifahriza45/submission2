class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header">
        <button id="menu" class="header_menu">☰<span class="header_title">Ez Restauran</span></button>
        <div id="container" class="container">
            <nav id="drawer" class="nav">
                <ul class="nav_list">
                    <li class="nav_item nav_title">Ez Restauran</li>
                    <li class="nav_item"><a href="#/list">Home</a></li>
                    <li class="nav_item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav_item"><a href="https://www.linkedin.com/in/muhammad-dwi-fahriza-429110210/" target="_blank"  rel="noreferrer">About Us</a></li>
                </ul>
            </nav>
        </div>
    </div>
`;
  }
}

customElements.define('app-bar', AppBar);
