

 var pikePlace = {
   minimumCustomers: 17,
    maximumCustomers: 88,
    averageCookies: 5.2,
  };
 pikePlace.generateRandom = function(min, max){
 return Math.floor(Math.random() * (max - min + 1) + min);
 }
 console.log(pikePlace.minimumCustomers)
 console.log(pikePlace.generateRandom(pikePlace.minimumCustomers, pikePlace.maximumCustomers));

// var hours = ("10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm")
// this.store = store;
// this.minimumCustomers = minimumCustomers;
// this.maximumCustomers = maximumCustomers;
// this.averageCookies = averageCookies;
// this.hourlySales = hourlySales;
// this.totalSales = function () {
//   return this.hourlySales * this.averageCookies;
// };
//   var pikePlace = }
//   minimumCustomers: 17,
//   maximumCustomers: 88,
//   averageCookies: 5.2,
//   hourlySales: [],
//   totalSales: 0,
// var sectionEl = document.getElementById('myList');
// var ulEl = document.createElement('ul');
// }
//     generateRandomcust:  function() {
//     return Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers;
// },
//     generatehourlySales: function() {
//     for (var i = 0; i < hours.length; i++) {
// var randomCookies = Math.floor(this.averageCookies * this.generateRandomcust());
//     this.hourlySales.push(randomCookies)
//     this.totalSales = this.hourlySales.reduce(function(a, b) {
//     return a + b;
// });
//     pikePlace.generateaverageCookies: function () {
//     return Math.floor(Math)
//     pikePlace.gethourlySales: function () {
//     return Math.floor(Math)
//       }
//       console.log(pikePlace.generateRandomcust());
//       console.log(pikePlace.generatehourlySales());
//       console.log(pikePlace.hourlySales)
//       console.log(pikePlace.totalSales);
// var SeaTac = }
//   minimumCustomers: 6,
//   maximumCustomers: 24,
//   averageCookies: 1.2,
//   hourlySales: [],
//   totalSales: 0,
// var sectionEl = document.getElementById('myList');
// var ulEl = document.createElement('ul');
// }
//     generateRandomcust:  function() {
//     return Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers;
// },
//     generatehourlySales: function() {
//     for (var i = 0; i < hours.length; i++) {
// var randomCookies = Math.floor(this.averageCookies * this.generateRandomcust());
//     this.hourlySales.push(randomCookies)
//     this.totalSales = this.hourlySales.reduce(function(a, b) {
//     return a + b;
// });
//     SeaTac.generateaverageCookies: function () {
//     return Math.floor(Math)
//     SeaTac.gethourlySales: function () {
//     return Math.floor(Math)
//   }
//     var Southcenter = }
//       minimumCustomers: 11,
//       maximumCustomers: 38,
//       averageCookies: 1.9,
//       hourlySales: [],
//       totalSales: 0,
//     var sectionEl = document.getElementById('myList');
//     var ulEl = document.createElement('ul');
//   }
//     generateRandomcust:  function() {
//     return Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers;
//   },
//     generatehourlySales: function() {
//     for (var i = 0; i < hours.length; i++) {
//   var randomCookies = Math.floor(this.averageCookies * this.generateRandomcust());
//       this.hourlySales.push(randomCookies)
//       this.totalSales = this.hourlySales.reduce(function(a, b) {
//       return a + b;
// });
//     Southcenter.generateaverageCookies: function () {
//     return Math.floor(Math)
//     Southcenter.gethourlySales: function () {
//     return Math.floor(Math)
// }
// var BellevueSquare = }
//       minimumCustomers: 20,
//       maximumCustomers: 48,
//       averageCookies: 3.3,
//       hourlySales: [],
//       totalSales: 0,
// var sectionEl = document.getElementById('myList');
// var ulEl = document.createElement('ul');
// }
//   generateRandomcust:  function() {
//     return Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers;
// },
//   generatehourlySales: function() {
//     for (var i = 0; i < hours.length; i++) {
//   var randomCookies = Math.floor(this.averageCookies * this.generateRandomcust());
//       this.hourlySales.push(randomCookies)
//       this.totalSales = this.hourlySales.reduce(function(a, b) {
//       return a + b;
// });
//   BellevueSquare.generateaverageCookies: function () {
//   return Math.floor(Math)
//   BellevueSquare.gethourlySales: function () {
//   return Math.floor(Math)
// }
//   var Alki = }
//     minimumCustomers: 3,
//     maximumCustomers: 24,
//     averageCookies: 2.6,
//     hourlySales: [],
//     totalSales: 0,
//   var sectionEl = document.getElementById('myList');
//   var ulEl = document.createElement('ul');
// }
//   generateRandomcust:  function() {
//     return Math.random() * (this.maximumCustomers - this.minimumCustomers) + this.minimumCustomers;
//   },
//   generatehourlySales: function() {
//     for (var i = 0; i < hours.length; i++) {
//   var randomCookies = Math.floor(this.averageCookies * this.generateRandomcust());
//   this.hourlySales.push(randomCookies)
//   this.totalSales = this.hourlySales.reduce(function(a, b) {
//   return a + b;
//   });
//   Alki.generateaverageCookies: function () {
//     return Math.floor(Math)
//   Alki.gethourlySales: function () {
//     return Math.floor(Math)
//   }
//       function ask() {
//           var a = Math.floor(Math.random() * 10) + 1;
//           var b = Math.floor(Math.random() * 10) + 1;
//           var op = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
//           return prompt("How much is " + a + " " + op + " " + b + "?") == eval( a + op + b);
//       }
//
//       var questions = [ask(), ask(), ask(), ask(), ask()],
//           total = questions.length,
//           correct = questions.filter(Boolean).length;
//
//       alert( "You got "+correct+"/"+total+" correctly");

      // function Store(name, cookiesSold, hourlySales){
      //   this.store = pikePlace;
      //   this.cookiesSold = totalSales;
      //   this.hourSales =
      // }


// var names = ['scott', 'sam', 'erin', 'bj'];
// var heights = [72, 80, 60, 48];
// var hairColor = ['brown', 'blonde', 'blonde', 'brown'];
// var ages = [26, 33, 23, 45];
//
// for (var i = 0; i < names.length; i++) {
//   new Person(names[i], heights[i], hairColor[i], ages[i]);
// }

      // for (hours in hourlySales) {
      //   var liEl = document.createElement('li');
      //   liEl.textContent = hourlySales[hours];
      //   var nestedUlEl = document.createElement('li');
      // for (
    });
