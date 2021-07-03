const mongoose = require('mongoose');

module.exports = function () {
  mongoose
    .connect('mongodb://localhost:27017/ProjectGeek', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('Database connected to localhost 27017...'))
    .catch((err) => `Connection failed...${err}`);
};
