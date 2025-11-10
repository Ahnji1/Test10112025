// External dependencies
const express = require('express')

const router = express.Router()


router.post("/magical-powers-answer", (req, res) => {
  const hasSymptoms = req.session.data.hasSymptoms;

  // Check whether the variable matches a condition
  if (hasSymptoms === "Yes") {
    // Send user to a page where they'll enter their NHS number
    res.redirect("/symptoms");
  } else if (hasSymptoms === "No") {
    // Send user to a page where they can find their NHS number
    res.redirect("/eligible");
  } else {
    // Send user back to the question page
    res.redirect("/magical-powers-relatives");
  }
});


router.post("/magical-powers-relatives", (req, res) => {
  const hasRelative = req.session.data.hasRelative;

  // Check whether the variable matches a condition
  if (hasRelative === "Yes") {
    // Send user to a page where they'll enter their NHS number
    res.redirect("/check2");
  } else if (hasRelative === "No") {
    // Send user to a page where they can find their NHS number
    res.redirect("/eligible");
  } else {
    // Send user back to the question page
    res.redirect("/index");
  }
});

module.exports = router
