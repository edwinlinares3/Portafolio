const mongoose = require('mongoose');
const URI = 'mongodb+srv://edwinlinares3:Deltec2021@cluster0.88yzf.mongodb.net/?retryWrites=true&w=majority/BaseCOC-CRUD';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
