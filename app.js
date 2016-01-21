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
