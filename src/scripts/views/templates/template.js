import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
    <h2 class="name">${restaurant.name}</h2>
    <img class="resto_pic" src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
    <div class="resto_content">
      <h3>Information</h3>
        <h4>Rating</h4>
        <p>⭐️${restaurant.rating}</p>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>City</h4>
        <p>${restaurant.city}</p>
      <h3>Menus</h3>
        <h4>Foods</h4>
        <ul>
        ${restaurant.menus.foods.map((food, i) => `
            <p>${i + 1}) ${food.name}</p>`).join('')}
        <ul>
        <h4>Drinks</h4>
        <ul>
        ${restaurant.menus.drinks.map((drink, i) => `
            <p>${i + 1}) ${drink.name}</p>`).join('')}
        <ul>
    </div>
    <div class="resto_detailDesc">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="resto_review">
    <h3>Customer Reviews</h3>
    ${restaurant.customerReviews.map((review) => `
          <div class="review_item">
            <div class="review_header">
              <p class="review_name">${review.name}</p>
              <p class="review_date">${review.date}</p>
            </div>
            <div class="review_body">
              ${review.review}
            </div>
          </div>`).join('')}
    </div>
`;

const createRestoItemTemplate = (restaurant) => `
      <div class="restaurant-item">
        <div class="list_resto">
            <img class="resto_pic lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name || '-'}">
            <div class="resto_loc">${restaurant.city || '-'}</div>
            <div class="resto_content">
                <p class="resto_rating"> Rating : 
                    <span class="rating_value">${restaurant.rating || '-'}</span>
                </p>
                <a class="resto_name" href="#/detail/${restaurant.id}">${restaurant.name || '-'}</a>
                <div class="resto_desc"><p>${restaurant.description || '-'}<p></div>
            </div>
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
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
