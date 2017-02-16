console.log('main')

var maincars = [
  {name: "LAMBORGHINI HURACAN COUPE" , imageUrl: "Homepage/italian.jpg" , topspeed: " Top speed: 220mph ", price: " Price(£): 180,000.00" , nextUrl: "Homepage/Nextimage/aventador.jpg"},
  {name: "FERRARI 458", imageUrl: "Homepage/Ferrari.jpg" , topspeed: " Top speed: 210mph " , price: " Price(£): 160,000.00" , nextUrl: "Homepage/Nextimage/ferrari.jpg"},
  {name: "MCLAREN 570S", imageUrl: "Homepage/mclaren.jpg" , topspeed: " Top speed: 230mph ", price: " Price(£): 150,000.00" , nextUrl: "Homepage/Nextimage/mclaren.jpg"},
  {name: "DODGE VIPER", imageUrl: "Homepage/American.jpg" ,topspeed: " Top speed: 205mph " , price: " Price(£): 90,000.00" , nextUrl: "Homepage/Nextimage/viper.jpg"},
  {name: "BMW M5", imageUrl: "Homepage/German.jpg" ,topspeed: " Top speed: 190mph " , price: " Price(£): 95,000.00" , nextUrl: "Homepage/Nextimage/m5.jpg"},
  {name: "FORD MUSTANG GT", imageUrl: "Homepage/French.jpg" , topspeed: " Top speed: 185mph " , price: " Price(£): 85,000.00" , nextUrl: "Homepage/Nextimage/ford.jpg"},
  {name: "AUDI R8", imageUrl: "Homepage/Audi.jpg" , topspeed: " Top speed: 190mph " , price: " Price(£): 95,000.00" , nextUrl: "Homepage/Nextimage/r8.jpg"},
  {name: "MERCEDES AMG", imageUrl: "Homepage/BenzAMG.jpg" , topspeed: " Top speed: 200mph " , price: " Price(£): 100,000.00" , nextUrl: "Homepage/Nextimage/amg.jpg"},
  {name: "JAGUAR F-TYPE", imageUrl: "Homepage/British.jpg" , topspeed: " Top speed: 170mph " , price: " Price(£): 60,000.00" , nextUrl: "Homepage/Nextimage/ftype.jpg"},
  {name: "NISSAN GTR", imageUrl: "Homepage/Japanese.jpg" , topspeed: " Top speed: 180mph " , price: " Price(£): 75,000.00" , nextUrl: "Homepage/Nextimage/gtr.jpg"},



]
var carselement = $('.maincars');

var modal = $('#myModal');
var modalimage = $('#modalimage');
var nameText = $("#name");
var infoText = $('#info');
var nextimage = $('#nextimage');
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
    nextimage.attr("src" , maincars.nextUrl);
    nameText.text(maincars.name);
    infoText.text(maincars.topspeed + maincars.price);

  });

});
