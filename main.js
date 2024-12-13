document.addEventListener("DOMContentLoaded", function () {
  // Initialize the Wildlife Swiper
  var swiperWildlife = new Swiper(".mySwiperWildlife", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,  // Allows pagination to be clickable
    },
    loop: true,  // Optionally, set looping behavior
  });

  // Initialize the Night Swiper
  var swiperNight = new Swiper(".mySwiperNight", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,  // Allows pagination to be clickable
    },
    loop: true,  // Optionally, set looping behavior
  });

  // Initialize the Other Swiper
  var swiperOther = new Swiper(".mySwiperOther", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,  // Allows pagination to be clickable
    },
    loop: true,  // Optionally, set looping behavior
  });

  // Example for handling form inputs and displaying output
  document.getElementById('inputText1')?.addEventListener('input', function () {
    var inputValue = document.getElementById('inputText1').value;
    document.getElementById('outputText1').textContent = inputValue;
  });

  document.getElementById('inputText2')?.addEventListener('input', function () {
    var inputValue = document.getElementById('inputText2').value;
    document.getElementById('outputText2').textContent = inputValue;
  });

  document.getElementById('inputText3')?.addEventListener('input', function () {
    var inputValue = document.getElementById('inputText3').value;
    document.getElementById('outputText3').textContent = inputValue;
  });

  document.getElementById('inputText4')?.addEventListener('input', function () {
    var inputValue = document.getElementById('inputText4').value;
    document.getElementById('outputText4').textContent = inputValue;
  });

  document.getElementById('inputText5')?.addEventListener('input', function () {
    var inputValue = document.getElementById('inputText5').value;
    document.getElementById('outputText5').textContent = inputValue;
  });
});
