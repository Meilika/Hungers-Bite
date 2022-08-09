import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTO_EXPLORE);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurantReview(restaurant) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurant),
    });
    return response.json();
  }
}

export default RestaurantSource;
