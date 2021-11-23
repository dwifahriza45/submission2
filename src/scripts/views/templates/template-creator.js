import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (resto) => `
<article class="post-item">
    <img class="post-item_thumbnail" src="${CONFIG.BASE_IMAGE_URL}small/${resto.pictureId}" alt="${resto.name}">
    <div class="post-item_content">
        <h2 class="post-item_title"><a href="#/detail/${resto.id}" rel="noreferrer">${resto.name}</a></h2>
        <p class="post-rating">Rating: ${resto.rating}</p>
        <p class="post-rating">Kota: ${resto.city}</p>
    </div>
</article>
`;

const createRestaurantDetailTemplate = (resto) => `
<article>
    <div class="detail_content">
        <img class="detail_img" src="${CONFIG.BASE_IMAGE_URL}large/${resto.restaurant.pictureId}" alt="${resto.restaurant.name}">
        <div>
            <h2 class="detail_title">${resto.restaurant.name}</h2>
            <p class="detail_rating">Rating: ${resto.restaurant.rating}</p>
            <p class="detail_description">${resto.restaurant.description}</p>
            <p class="detail_description"><b>Alamat: </b>${resto.restaurant.address}</p>
            <p class="detail_description"><b>Kota: </b>${resto.restaurant.city}</p>
            <p class="detail_description"><b>Kategori: </b>${resto.restaurant.categories.map((category) => category.name)}</p>
            </div>
    </div>

    <div class="latest">
        <h1 class="latest_label" id="main-content">Menu Makanan</h1>
        <div id="detailRestaurant"></div>
    </div>

    <table>
    <thead>
        <tr>
            <th scope="col">Makanan</th>
            <th scope="col">Minuman</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${resto.restaurant.menus.foods.map((food) => food.name)}</td>
            <td>${resto.restaurant.menus.drinks.map((drink) => drink.name)}</td>
        </tr>
    </tbody>
    </table>

    <div class="latest">
        <h1 class="latest_label" id="main-content">Reviewer</h1>
        <div id="detailRestaurant"></div>
    </div>

    <div class="detail_review">
        ${resto.restaurant.customerReviews.map((customerReview) => `
        <div class="post-item_content">
            <img class="post-item_thumbnail" src="data:image/jpeg;base64,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" alt="profile">
            <h2 class="post-item_title">${customerReview.name}</h2>
            <p class="post-rating">${customerReview.review}</p>
            <p class="post-rating">${customerReview.date}</p>
        </div>
        `).join('')}
    </div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
