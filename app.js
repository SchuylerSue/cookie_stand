var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var pikePlace = {
  minimumCustomers: 17,
  maximumCustomers: 88,
  averageCookies: 5.2,
  hourlySales: [],
  totalSales: 0,

    generateRandomcust:  function() {
    return Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers;
    },
    generatehourlySales: function() {
      for (var i = 0; i < hours.length; i++) {
        var randomCookies = Math.floor(this.averageCookies * this.generateRandomcust());
        this.hourlySales.push(randomCookies)
        this.totalSales = this.hourlySales.reduce(function(a, b) {
          return a + b;
        });
      }
    }
};
console.log(pikePlace.generateRandomcust());
console.log(pikePlace.generatehourlySales());
console.log(pikePlace.hourlySales)
console.log(pikePlace.totalSales);
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
