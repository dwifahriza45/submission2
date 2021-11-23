import TheRestaurantSource from '../../data/TheRestaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const List = {
  async render() {
    return `
    <section class="content">
        <div class="latest">
            <h1 class="latest_label" id="main-content">List Restauran</h1>
            <div class="posts" id="listRestaurant"></div>
        </div>
    </section>
      `;
  },

  async afterRender() {
    const restos = await TheRestaurantSource.listRestaurant();
    const restaurantArticle = document.querySelector('#listRestaurant');
    restos.forEach((resto) => {
      restaurantArticle.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default List;
