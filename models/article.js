var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var articleSchema = new Schema({
    title: { type: String, required: true},
    date: { type: Date, default: Date.now },
    url: {type: String, required: true}
    
  });

  const article = mongoose.model ("article", articleSchema);

  model.exports = article;