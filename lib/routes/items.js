const itemRepository = require('../repositories/items');

module.exports = [
  {
    method: 'GET',
    path: '/items',
    handler() {
      return itemRepository.find().map((item) => item.get({plain: true}));
    }
  },
  {
    method: 'POST',
    path: '/items',
    handler(request) {
      const params = request.payload;
      return itemRepository.create(params);
    }
  }
];