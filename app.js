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

//       for (var i = 0; i < pikePlace.length; i++){
//         + pikePlace (minimumCustomers [i], maximumCustomers [i], averageCookies [i], hourlySales [i], totalSales [i]))
//       }
//       document.getElementByID()
//       document.createTextContent()
// var hourlySales = [56, 77, 93, 144, 119, 84, 61, 23,]

  // var stores = []
  //     for (i = 0, i < storeTotals.length; i++){
  //
  //     }
  // Example below is from Class 10
  //       var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  //       var weeks = [1, 2, 3, 4];
  //       var tableEl = document.getElementById('myTable');
  //       var trEl = document.createElement('tr');
  //
  //       for(month in months) {
  //         var tdEl = document.createElement('td');
  //         tdEl.textContent = months[month];
  //         trEl.appendChild(tdEl);
  //       }
  //
  //       tableEl.appendChild(trEl);
// };
// Example below is from Class 7
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// var weeks = [1, 2, 3, 4];
// var sectionEl = document.getElementById('myList');
// var ulEl = document.createElement('ul');
//
// for(month in months) {
//   var liEl = document.createElement('li');
//   liEl.textContent = months[month];
//   var nestedUlEl = document.createElement('ul');
//
//   for(week in weeks) {
//     var nestedLiEl = document.createElement('li');
//     nestedLiEl.textContent = weeks[week];
//     nestedUlEl.appendChild(nestedLiEl);
//   }
//
//   liEl.appendChild(nestedUlEl);
//   ulEl.appendChild(liEl);
// }
//
// sectionEl.appendChild(ulEl);


// // Quick overview of how to set up an event listener
// var formEl = document.getElementById('userInfo');
// var nameInput = document.getElementById('name');
//
// formEl.addEventListener('submit', function(event) {
//   event.preventDefault();
//   // Alternative way to get the value out of an input field.
//   // var getName = nameInput.value;
//   console.log(event.target);
//   event.target.name.value = null;
// });



// This is a quick and dirty example of building a table from array data.


// console.log(pikePlace.minimumCustomers)
// console.log(pikePlace.generateRandom(pikePlace.minimumCustomers, pikePlace.maximumCustomers));
//
