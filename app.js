var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var pikePlace = {
  minimumCustomers: 17,
  maximumCustomers: 88,
  averageCookies: 5.2,
  hourlySales: [],
  totalSales: 0,
var sectionEl = document.getElementById('myList');
var ulEl = document.createElement('ul');

for (hours in hourlySales) {
  var liEl = document.createElement('li');
  liEl.textContent = hourlySales[hours];
  var nestedUlEl = document.createElement('li');

for ()
}
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
    pikePlace.generateaverageCookies: function () {
    return Math.floor(Math)
    pikePlace.gethourlySales: function () {
    return Math.floor(Math)
      }
      console.log(pikePlace.generateRandomcust());
      console.log(pikePlace.generatehourlySales());
      console.log(pikePlace.hourlySales)
      console.log(pikePlace.totalSales);
    });
  
