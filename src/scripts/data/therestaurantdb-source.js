import API_ENDPOINT from '../globals/api-endpoints';

class TheRestaurantDbSource {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TheRestaurantDbSource;
