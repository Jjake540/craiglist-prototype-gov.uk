const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/view-post-answer', function (req, res) {
  var viewPostAnswer = req.session.data['view-or-post-advert']

  if (viewPostAnswer == "veiw-advert"){
    res.redirect('/view-advert-region')
  } else {
    res.redirect('/post-advert-region')
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

module.exports = router
