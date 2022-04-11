const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/view-post-answer', function (req, res) {
  var viewPostAnswer = req.session.data['view-or-post-advert']

  if (viewPostAnswer == "veiw-advert"){
    res.redirect('/view-advert-region')
  } else {
    res.redirect('/post-advert-region')
  }
})

router.post('/view-advert-region-answer', function (req, res) {
  var viewAdvertRegionAnswer = req.session.data['view-advert-region-answer']

  if (viewAdvertRegionAnswer == "view-london"){
    res.redirect('/view-london')
  } else if (viewAdvertRegionAnswer == "view-manchester"){
    res.redirect('/view-manchester')
  } else {
    res.redirect('/view-aberdeen')
  }
})

router.post('/post-advert-region-answer', function (req, res) {
  var postAdvertRegionAnswer = req.session.data['post-advert-region-answer']

  if (postAdvertRegionAnswer == "post-london"){
    res.redirect('/post-london')
  } else if (postAdvertRegionAnswer == "post-manchester"){
    res.redirect('/post-manchester')
  } else {
    res.redirect('/post-aberdeen')
  }
})

router.post('/view-advert-type-answer', function (req, res) {
  var viewAdvertTypeAnswer = req.session.data['view-advert-type-answer']

  if (viewAdvertTypeAnswer == "view-rentals"){
    res.redirect('/view-rentals')
  } else if (viewAdvertTypeAnswer == "view-for-sale"){
    res.redirect('/view-for-sale')
  } else {
    res.redirect('/view-dating')
  }
})

router.post('/post-advert-type-answer', function (req, res) {
  var postAdvertTypeAnswer = req.session.data['post-advert-type-answer']

  if (postAdvertTypeAnswer == "post-rentals"){
    res.redirect('/post-rentals')
  } else if (postAdvertTypeAnswer == "post-for-sale"){
    res.redirect('/post-for-sale')
  } else {
    res.redirect('/post-dating')
  }
})

router.post('/view-rentals-by-filter-answer', function (req, res) {
  var viewRentalsByFilterType = req.session.data['view-rentals-by-filter-answer']

  if (viewRentalsByFilterType == "view-all-rentals"){
    res.redirect('/view-rentals-filter-all')
  } else if (viewRentalsByFilterType == "view-by-price"){
    res.redirect('/view-rentals-filter-price')
  } else if (viewRentalsByFilterType == "view-by-number-of-bedrooms"){
    res.redirect('/view-rentals-filter-bedrooms')
  } else {
    res.redirect('/view-rentals-filter-bathrooms')
  }
})



module.exports = router
