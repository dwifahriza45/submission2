import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
        <div class="latest">
            <h1 class="latest_label" id="main-content">Favorite Restauran</h1>
            <div class="posts" id="listRestaurant"></div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#listRestaurant');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default Favorite;
