const DrawerInitiator = {
  init({
    menu, drawer, container, hero, content,
  }) {
    menu.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      container.classList.toggle('container');
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      container.classList.add('container');
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
