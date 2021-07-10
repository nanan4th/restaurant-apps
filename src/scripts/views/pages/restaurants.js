/* eslint-disable max-len */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Your Request is Our Biggest Honor</h1>
        <h2 class="hero__title2">Always fulfill your needs</h2>
      </div>
    </div>

    <div class="content"> 
      <h2 class="content__heading">Our Restaurants</h2>
      <div id="restaurants" class="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.restaurantsList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
