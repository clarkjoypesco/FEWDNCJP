// new Promise(function(resolve, reject) {
//   var img = document.createElement("img");
//   img.src = "image.jpg";
//   img.onload = resolve;
//   img.onerror = reject;
//   document.body.appendChild(img);
// })
//   .then(finishLoading)
//   .catch(showAlternateImage);

// new Promise(function(resolve, reject) {
//   var value = domeSomething();
//   if (thingWorked) {
//     resolve(value);
//   } else if (somethingWentWrong) {
//     reject();
//   }
// })
//   .then(function(value) {
//     //success
//     return nextThing(value);
//   })
//   .catch(rejectFunction);
new Promise(function(resolve) {
  console.log("first");
  resolve();
  console.log("second");
}).then(function() {
  console.log("third");
});
