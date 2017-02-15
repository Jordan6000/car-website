console.log('seeall')

var cars = [
  {name: "LAMBORGHINI " , imageUrl: "Seeall/aventador.jpg" , topspeed: " Top speed: 220mph"},
  {name: "FERRARI F12", imageUrl: "Seeall/ferrari.jpg"},
  {name: "BUGATTI VEYRON", imageUrl: "Seeall/bugatti.jpg"},
  {name: "FERRARI LEFERRARI", imageUrl: "Seeall/leferrari.jpg"},
  {name: "LAMBORGHINI VENENO", imageUrl: "Seeall/veneno.jpg"},
  {name: "BMW M7", imageUrl: "Seeall/m7.jpg"},
  {name: "BMW M3", imageUrl: "Seeall/m3.jpg"},
  {name: "PAGANI", imageUrl: "Seeall/pagani.jpg"},
  {name: "AUDI A6", imageUrl: "Seeall/a6.jpg"},
  {name: "MERCEDES SLS", imageUrl: "Seeall/sls.jpg"},
  {name: "TESLA MODEL S", imageUrl: "Seeall/tesla.jpg"},
  {name: "MCLAREN P1", imageUrl: "Seeall/mclarenp1.jpg"},
  {name: "AUDI TT", imageUrl: "Seeall/tt.jpg"},
  {name: "BENTLEY CONTINENTAL GT", imageUrl: "Seeall/bentley.jpg"},
  {name: "PORSCHE 911", imageUrl: "Seeall/porsche.jpg"}

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
  var topspeed = $('<p class="sansserif">' + car.topspeed + '</p>');
  carelement.append(titleelement,imageelement,topspeed);
  carselement.append(carelement);

  carelement.click(function() {
    console.log("You clicked");
    modal.css("display" , "block");
    modalimage.attr("src" , car.imageUrl);
    captionText.text(car.name + car.topspeed);
  });

});
