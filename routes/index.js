var express = require('express');
var router = express.Router();


let cars=[{name: 'BMW', color: 'BLACK',source:'https://i.pinimg.com/736x/c5/f0/6a/c5f06a74aa793d64a4a644ae2b8b2813--showroom-design-crossover.jpg',description:"BMW is a world-class luxury car, motorcycle and engine manufacturing brand headquartered in Munich, Germany. Considered one of the world's most admired and recognised brands, it is renowned for its exceptional craftsmanship, reliability and high-quality product offering.Its a Premium Segment "},
{name: 'RANGERROVER', color: 'GREY',source:'https://media.jlrms.com/styles/thumbnail_big/s3/2021-08-16/image/c1578a06-e7d7-4b5a-8790-ac095e785094/RR_Velar_22MY_Auric_Edition_Exterior_S44_180821_02.jpg?VersionId=WtfZhBOu8eCGi4k8DI9scfo4h5X41E9Z&h=8bc0fcc2&itok=lyJ6Bmhq',description:"The Land Rover Range Rover (generally known simply as the Range Rover) is a 4x4 motor car produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation.Its a Premium Segment"},
{name: 'INNOVA', color: 'WHITE',source:'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20201015102234_2021-Toyota-Innova-Crysta-facelift-white-studio.jpg&w=730&h=484&q=75&c=1',description:"The Toyota Innova has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2494 cc while the Petrol engine is 1998 cc . It is available with Manual transmission. Depending upon the variant and fuel type the Innova has a mileage of 11.4 to 12.99 kmpl & Ground clearance of Innova is 176mm."},
{name: 'BENZ', color: 'GREY',source:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mercedes-Benz_W223_IMG_3922.jpg/800px-Mercedes-Benz_W223_IMG_3922.jpg',description:"Mercedes-Benz Group AG, formerly Daimler AG (Mercedes-Benz), is an automobile company. It develops, manufactures and distributes premium and luxury cars and vans. It sells vehicles and offers services across the world. It has production facilities in Europe, North and Latin America, Asia and Africa."}]




const userdetails={
  email:'www@com',
  password:'we'
}

var session;

router.get('/', function (req, res, next) {
  session = req.session;
  // console.log(req.session)
  if (session.userid) {
    res.render('index', {cars});
  } else {
    res.redirect('/login')
  }
});

router.get('/login', function (req, res, next) {
  if (session.userid) {
    res.redirect('/')
  } else {
    // session = req.session;
    res.render('login', { session });
  }
})

router.post('/login', function (req, res, next) {
  if (req.body.email == userdetails.email && req.body.password == userdetails.password) {
    session = req.session;
    session.userid = req.body.email;
    res.redirect('/');

  } else {
    session = req.session;
    session.valid = 'Invalid login details';
    res.redirect('/login')
  }
})

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.redirect('/login');

})

module.exports = router;