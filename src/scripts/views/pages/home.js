import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template';

const Home = {
  async render() {
    return `
      <div class="hero">
          <div class="hero_inner">
              <h2 class="hero_title">Welcome to Hunger's Bite Apps</h2>
              <p class="hero_tagline">Let's find the best restaurant to satisfy your hunger!</p>
          </div>
      </div>

      <section class="content">
        <h2>Explore Restaurant</h2>
        <div class="restaurants" id="restaurants"></div>
      </section>
      `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantSource.restaurantList();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
