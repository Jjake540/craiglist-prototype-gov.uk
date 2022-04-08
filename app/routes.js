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

module.exports = router
