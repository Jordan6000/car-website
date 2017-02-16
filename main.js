console.log('main')

var maincars = [
  {name: "LAMBORGHINI AVENTADOR" , imageUrl: "Homepage/italian.jpg" , topspeed: " Top speed: 220mph ", price: " Price(£): 180,000.00"},
  {name: "FERRARI F12", imageUrl: "Homepage/Ferrari.jpg" , topspeed: " Top speed: 210mph " , price: " Price(£): 160,000.00"},
  {name: "BUGATTI VEYRON", imageUrl: "Homepage/mclaren.jpg" , topspeed: " Top speed: 230mph ", price: " Price(£): 210,000.00"},
  {name: "FERRARI LEFERRARI", imageUrl: "Homepage/American.jpg" ,topspeed: " Top speed: 225mph " , price: " Price(£): 190,000.00"},
  {name: "LAMBORGHINI VENENO", imageUrl: "Homepage/German.jpg" ,topspeed: " Top speed: 2300mph " , price: " Price(£): 230,000.00"},
  {name: "BMW M7", imageUrl: "Homepage/French.jpg" , topspeed: " Top speed: 205mph " , price: " Price(£): 90,000.00"},
  {name: "BMW M3", imageUrl: "Homepage/Audi.jpg" , topspeed: " Top speed: 195mph " , price: " Price(£): 55,000.00"},
  {name: "PAGANI HUAYRA", imageUrl: "Homepage/BenzAMG.jpg" , topspeed: " Top speed: 210mph " , price: " Price(£): 140,000.00"},
  {name: "AUDI A6", imageUrl: "Homepage/British.jpg" , topspeed: " Top speed: 190mph " , price: " Price(£): 60,000.00"},
  {name: "MERCEDES SLS", imageUrl: "Homepage/Japanese.jpg" , topspeed: " Top speed: 200mph " , price: " Price(£): 100,000.00"},

]
var carselement = $('.maincars');

var modal = $('#myModal');
var modalimage = $('#modalimage');
var captionText = $("#caption");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.css("display" , "none");
}

maincars.forEach(function(maincars) {
  console.log(maincars);
  var carelement = $('<figure class="col-sm-6 car">');
  var titleelement = $('<p class="sansserif">' + maincars.name + '</p>');
  var imageelement = $('<img class="carimage" src="' + maincars.imageUrl + '" alt="car" />');
  carelement.append(titleelement,imageelement);
  carselement.append(carelement);

  carelement.click(function() {
    console.log("You clicked");
    modal.css("display" , "block");
    modalimage.attr("src" , maincars.imageUrl);
    captionText.text(maincarscar.name);
    captionText.text(maincarscar.topspeed + maincarscar.price);
  });

});
