import { createRestoItemTemplate } from '../../templates/template';

class FavoriteRestaurantView {
  getTemplate() {
    return `
      <section class="content">
        <h2>Favorite Restaurant</h2>
        <div class="restaurants" id="restaurants"></div>
      </section>
   `;
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestos(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestoItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="list_resto__not__found restaurants__not__found">Anda belum menambahkan Restaurant Favorite</div>';
  }
}

export default FavoriteRestaurantView;
