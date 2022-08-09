const assert = require('assert');

Feature('Review Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post a Restaurant  review', async ({ I }) => {
  I.seeElement('.hero');

  I.seeElement('.resto_name');
  I.click(locate('.resto_name').first());

  I.seeElement('.form-review form');
  I.fillField('#name-input', 'E2E Test');
  I.fillField('#review-input', 'Automated Review');
  I.click('#submit-review');

  I.waitForResponse('https://restaurant-api.dicoding.dev/review');
  const lastReview = locate('.review_body').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual('Automated Review', lastReviewText.trim());
});
