const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/pizza.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/cake.jpg",
    },
  ];

  res.render("places/index", {places}); //why is this in curly braces ??
});

module.exports = router;
