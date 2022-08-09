import RestaurantSource from '../data/restaurant-source';

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.resto_review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="review_item">
        <div class="review_header">
            <p class="review_name">${name}</p>
            <p class="review_date">${date}</p>
        </div>
        <div class="review_body">
            ${review}
        </div>
    </div>
  `;

  // POST review
  const reviewResponse = await RestaurantSource.postRestaurantReview(dataInput);
  console.log(reviewResponse);

  // append newReview to the review container
  reviewContainer.innerHTML += newReview;
};

export default PostReview;
