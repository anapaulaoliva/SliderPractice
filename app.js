let images = [
  "https://66.media.tumblr.com/48c066481b00e28042637c0ab79920f0/tumblr_pvv0l6Ci3H1yrinrto1_500.gifv",
  "https://66.media.tumblr.com/9f23170d3977d10c12b1767a2503a842/tumblr_pygjd48syX1yrinrto1_640.gifv",
  "https://66.media.tumblr.com/12bbbad3ee70d0797c6c5086038a63a4/tumblr_pzdoygE2vg1yrinrto1_500.gifv",
  "https://66.media.tumblr.com/5b5cb0f76df2c913ca5cd922dd7fe509/tumblr_pz85hnnhsr1yrinrto1_1280.gifv"
];
let index = 0;

//manejar los clicks de los botones next y prev y llamas a las funciones
function showImage(direction) {
  let num = 0;
  let slider = document.getElementById('slider');
  slider.src = images[0];

  if (direction == 'left'){
    index--;
  } else {
    index++;
    index %= images.length;
  }
  if (index < 0){
    index = images.length - 1;
  }
  slider.src= images[index];
}
