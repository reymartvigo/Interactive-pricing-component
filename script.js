let month = document.getElementById("month");
let year = document.getElementById("year");
let toggle = document.getElementById("toggle");
let views = document.getElementById("views");
let slider = document.getElementById("price-range");
let price = document.getElementById("price");

let pageviews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];

let perYear = [6, 9, 12, 18, 27];

let isYearly = false;

slider.addEventListener("input", function () {
  update();
  views.innerHTML = pageviews[slider.value];

  let value = this.value * 25;

  this.style.background = `linear-gradient(
    to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) ${value}%
  )`;
});

function update() {
  if (isYearly) {
    price.innerHTML = perYear[slider.value];
  } else {
    price.innerHTML = perMonth[slider.value];
  }
}

month.addEventListener("click", (e) => {
  e.preventDefault();
  month.style.display = "none";
  toggle.style.justifyContent = "flex-end";
  year.style.display = "flex";
  price.innerHTML = perYear[slider.value];
  slider.addEventListener("input", function () {
    update();
  });

  function update() {
    price.innerHTML = perYear[slider.value];
  }
});

year.addEventListener("click", (e) => {
  e.preventDefault();
  month.style.display = "flex";
  toggle.style.justifyContent = "flex-start";
  year.style.display = "none";
  price.innerHTML = perMonth[slider.value];
  slider.addEventListener("input", function () {
    update();
  });

  function update() {
    price.innerHTML = perMonth[slider.value];
  }
});
