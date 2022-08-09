const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty Favorite Restaurants', ({ I }) => {
  I.see('Anda belum menambahkan Restaurant Favorite', '.list_resto__not__found');
});

Scenario('like a Restaurant', async ({ I }) => {
  I.see('Anda belum menambahkan Restaurant Favorite', '.list_resto__not__found');

  I.amOnPage('/');

  I.seeElement('.hero');

  I.seeElement('.resto_name');
  const firstResto = locate('.resto_name').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestoName = await I.grabTextFrom('.resto_name');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('Unlike a Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.hero');

  I.seeElement('.resto_name');
  I.click(locate('.resto_name').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.click(locate('.resto_name').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Anda belum menambahkan Restaurant Favorite', '.list_resto__not__found');
});
