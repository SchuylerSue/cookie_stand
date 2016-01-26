var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var pikePlace = {
  minimumCustomers: 17,
  maximumCustomers: 88,
  averageCookies: 5.2,
  hourlySales: [],
  totalSales: 0,
}
  pikePlace.generateRandomcust = function(){
    return Math.random() * (pikePlace.maximumCustomers - pikePlace.minimumCustomers) + pikePlace.minimumCustomers;
}
  pikePlace.generateaverageCookies = function(){
    return Math.random() * pikePlace.averageCookies + pikePlace.hourlySales
  }
// console.log(pikePlace.minimumCustomers)
// console.log(pikePlace.generateRandom(pikePlace.minimumCustomers, pikePlace.maximumCustomers));
//
//   pikePlace.generateaverageCookies: function () {
//   return Math.floor(Math)
//   pikePlace.gethourlySales: function () {
//   return Math.floor(Math)
// }
// for (var i = 0; i < pikePlace.length; i++){
//   + pikePlace (minimumCustomers [i], maximumCustomers [i], averageCookies [i], hourlySales [i], totalSales [i]))
// }
// document.getElementByID()
// document.createTextContent()
