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

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res)=>{ //why is it not /places ? not sure how this works still.
  res.send('POST /places')
})


module.exports = router;


