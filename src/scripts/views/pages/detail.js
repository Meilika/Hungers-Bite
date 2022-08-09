import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import PostReview from '../../utils/resto-review';

const Detail = {
  async render() {
    return `
      <div class="restaurant" id="restaurant"></div>
      <div id="likeButtonContainer"></div>

      <div class="form-review">
      <h3>Fill Your Review</h3>
        <form autocomplete="on">
          <div>
            <label for="name-input" class="form-label">Name</label>
            <input type="text" class="form-control" id="name-input" minlength="3" placeholder="Type your Name..." required>
          </div>
          <div>
            <label for="review-input" class="form-label">Review</label>
            <input type="text" class="form-control" id="review-input" minlength="3" placeholder="Type your Review..." required>
          </div>
          <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
        </form>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    const btnSubmitReview = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#name-input');
    const reviewInput = document.querySelector('#review-input');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();

      await PostReview(url, nameInput.value, reviewInput.value);
      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default Detail;
