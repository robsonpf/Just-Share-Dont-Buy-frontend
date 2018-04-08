import { bookItem, unbookItem, getItem} from '../js/app/item.js';
import {getCategory, getItemsByCategory} from '../js/app/category.js';
const baseUrl = localStorage.getItem('baseUrl') || `https://just-share-dont-buy-backend.herokuapp.com`;
const expect = chai.expect;

const exampleItem = {
  id: 1471,
  user_id: 228,
  category_id: 3,
  name: 'Basketball Net',
  description: 'A good one',
  photo: 'http://my.jpg',
  reserved: false
};

const exampleUser = {
  id: 228,
  name: 'Sophie',
  phone: '123-456-7890',
  email: 'Jon@amazing.com',
  password: '25mf%ow{1nf0<ZSFJ'
};

describe('items', function () {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('should send the correct request when booking an item', (done) => {
    bookItem(1);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      expect(request.url).to.equal(`${baseUrl}/items/1`);
      expect(request.config.method).to.equal('patch');
      expect(JSON.parse(request.config.data)).to.eql({reserved: true});
      request.respondWith({
        status: 204
      }).then(() => {
        done()
      });
    });
  });

  it('should send the correct request when unbooking an item', (done) => {
    unbookItem(1);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      expect(request.url).to.equal(`${baseUrl}/items/1`);
      expect(request.config.method).to.equal('patch');
      expect(JSON.parse(request.config.data)).to.eql({reserved: false});
      request.respondWith({
        status: 204
      }).then(() => {
        done()
      });
    });
  });

  it('should send the correct request when getting an item and follow up with fetching the user', (done) => {
    getItem(1471);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      expect(request.url).to.equal(`${baseUrl}/items/1471`);
      expect(request.config.method).to.equal('get');
      request.respondWith({
        status: 200,
        response: exampleItem
      }).then(() => {
        moxios.wait(() => {
          let request = moxios.requests.mostRecent()
          expect(request.url).to.equal(`${baseUrl}/users/228`);
          expect(request.config.method).to.equal('get');
          request.respondWith({
            status: 200,
            response: exampleUser
          }).then(() => {
            done()
          });
        });
      });
    });
  });
});


describe('categories', function () {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  it('should send the correct request when getting the category', (done) => {
    getCategory(1);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      expect(request.url).to.equal(`${baseUrl}/categories/1`);
      expect(request.config.method).to.equal('get');
      request.respondWith({
        status: 200
      }).then(() => {
        done()
      });
    });
  });

  it('should send the correct request when getting the item information for the category cards', (done) => {
    getItemsByCategory(1);
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      expect(request.url).to.equal(`${baseUrl}/categories/1/items`);
      expect(request.config.method).to.equal('get');
      request.respondWith({
        status: 200
      }).then(() => {
        done()
      });
    });
  });

});
