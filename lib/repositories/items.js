const db = require('../db');



module.exports = {
   find(){
    return db.Item.findAll();
  },
  create({title, url, username, password, description}){
    return db.Item.create({title, url, username, password, description});
  }
};