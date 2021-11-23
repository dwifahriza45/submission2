import TheRestaurantSource from '../../data/TheRestaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <section>
        <div class="latest">
            <h1 class="latest_label" id="main-content">Detail Restauran</h1>
            <div id="listRestaurant"></div>
            <div id="likeButtonContainer"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestaurantSource.detailRestaurant(url.id);
    const restaurantDetail = document.querySelector('#listRestaurant');
    restaurantDetail.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        rating: resto.restaurant.rating,
        city: resto.restaurant.city,
        pictureId: resto.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
