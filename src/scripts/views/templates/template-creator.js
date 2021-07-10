/* eslint-disable max-len */

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant-header">
<img class="restaurant-poster" src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" alt="${restaurant.name}" />
<h1 class="restaurant-title">${restaurant.name}</h1>
</div>

<div class="restaurant-desc">
  <div class="restaurant-info">
    <h3>Direction</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
  </div>

  <div class="restaurant-overview">
    <h3>About this place</h3>
    <p class="menu-category">${restaurant.categories.map((category) => ' '+category.name)}</p>
    <p>⭐️<span>${restaurant.rating}</span></p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <br>
    <h4>Menu</h4>
    <p class="foods-menu">Foods:<br> ${restaurant.menus.foods.map((food) => ' '+food.name)}</p>
    <br>
    <p class="drinks-menu">Drinks:<br> ${restaurant.menus.drinks.map((drink) => ' '+drink.name)}</p>
    <br>
  </div>
</div>

<div class="restaurant-reviews">
<h3>Reviews</h3>
<div id="reviews" class="reviews">
      ${restaurant.customerReviews.map((customerReview) => `
        <div class="review">
        <div class="review-header">
          <p class="review-name">${customerReview.name}</p>
          <p class="review-date">${customerReview.date}</p>
          </div>
          <p class="review-content">${customerReview.review}</p>
        </div>
      `)}
</div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
  <div class="restaurant-item-header">
      <img class="restaurant-item-header-poster" alt="${restaurant.name || '-'}"
          src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}">
  </div>
  <div class="restaurant-item-content">
    <div class="grid-container-post">
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
      <p>⭐️<span class="restaurant-item-content-rating-score">${restaurant.rating || '-'}</span></p>
    </div>
    <p class="restaurant-item-city">at ${restaurant.city || '-'}</p>
    <p>${restaurant.description || '-'}</p>
  </div>
</div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
