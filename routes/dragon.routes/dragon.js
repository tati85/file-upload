const express = require('express');
const router = express.Router();
const Dragon = require('../../models/Dragon.model');
const uploadCloud = require('../../config/cloudinary');

/* GET home page */
router.get('/dragons', (req, res, next) => {
  Dragon.find()
    .then((value) => {
      res.render('dragon-views/dragon-home', { dragons: value });

    })
    .catch((err) => { next(err) })

});

router.post('/create', uploadCloud.single('image'), (req, res, next) => {
  const dragonInfo = req.body;
  Dragon.create(dragonInfo)
    .then(data => res.redirect('back'))
    .catch(err => next(err))
});

module.exports = router;
