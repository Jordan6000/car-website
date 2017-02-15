console.log('seeall')

var cars = [
  {name: "LAMBORGHINI AVENTADOR" , imageUrl: "Seeall/aventador.jpg" , topspeed: " Top speed: 220mph ", price: " Price(£): 180,000.00"},
  {name: "FERRARI F12", imageUrl: "Seeall/ferrari.jpg" , topspeed: " Top speed: 210mph " , price: " Price(£): 160,000.00"},
  {name: "BUGATTI VEYRON", imageUrl: "Seeall/bugatti.jpg" , topspeed: " Top speed: 230mph ", price: " Price(£): 210,000.00"},
  {name: "FERRARI LEFERRARI", imageUrl: "Seeall/leferrari.jpg" ,topspeed: " Top speed: 225mph " , price: " Price(£): 190,000.00"},
  {name: "LAMBORGHINI VENENO", imageUrl: "Seeall/veneno.jpg" ,topspeed: " Top speed: 2300mph " , price: " Price(£): 230,000.00"},
  {name: "BMW M7", imageUrl: "Seeall/m7.jpg" , topspeed: " Top speed: 205mph " , price: " Price(£): 90,000.00"},
  {name: "BMW M3", imageUrl: "Seeall/m3.jpg" , topspeed: " Top speed: 195mph " , price: " Price(£): 55,000.00"},
  {name: "PAGANI HUAYRA", imageUrl: "Seeall/pagani.jpg" , topspeed: " Top speed: 210mph " , price: " Price(£): 140,000.00"},
  {name: "AUDI A6", imageUrl: "Seeall/a6.jpg" , topspeed: " Top speed: 190mph " , price: " Price(£): 60,000.00"},
  {name: "MERCEDES SLS", imageUrl: "Seeall/sls.jpg" , topspeed: " Top speed: 200mph " , price: " Price(£): 100,000.00"},
  {name: "TESLA MODEL S", imageUrl: "Seeall/tesla.jpg" , topspeed: " Top speed: 185mph " , price: " Price(£): 120,000.00"},
  {name: "MCLAREN P1", imageUrl: "Seeall/mclarenp1.jpg" , topspeed: " Top speed: 210mph " , price: " Price(£): 210,000.00"},
  {name: "AUDI TT", imageUrl: "Seeall/tt.jpg" , topspeed: " Top speed: 180mph " , price: " Price(£): 60,000.00"},
  {name: "BENTLEY CONTINENTAL GT", imageUrl: "Seeall/bentley.jpg" , topspeed: " Top speed: 215mph " , price: " Price(£): 240,000.00"},
  {name: "PORSCHE 911", imageUrl: "Seeall/porsche.jpg" , topspeed: " Top speed: 225mph " , price: " Price(£): 190,000.00"}

]
var carselement = $('.cars');

var modal = $('#myModal');
var modalimage = $('#modalimage');
var captionText = $("#caption");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.css("display" , "none");
}

cars.forEach(function(car) {
  console.log(car);
  var carelement = $('<figure class="col-sm-4 car">');
  var titleelement = $('<p class="sansserif">' + car.name + '</p>');
  var imageelement = $('<img class="carimage" src="' + car.imageUrl + '" alt="car" />' );
  carelement.append(titleelement,imageelement);
  carselement.append(carelement);

  carelement.click(function() {
    console.log("You clicked");
    modal.css("display" , "block");
    modalimage.attr("src" , car.imageUrl);
    captionText.text(car.name);
    captionText.text(car.topspeed + car.price);
  });

});
