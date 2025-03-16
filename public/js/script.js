(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Mapbox
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 12, // starting zoom
});

const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);

// Booking Price Calculator
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("dateRange");
  const totalAmount = document.getElementById("totalAmount");
  const bookBtn = document.getElementById("bookBtn");
  const pricePerNight = parseFloat(bookBtn.dataset.price);

  // Initialize Flatpickr for date selection
  flatpickr(dateInput, {
    mode: "range",
    dateFormat: "M d, Y",
    minDate: "today",
    defaultDate: [
      new Date(),
      new Date(new Date().setDate(new Date().getDate() + 3)), // Default: Today → +3 days
    ],
    onClose: updatePrice, // Update price when user selects dates
  });

  function updatePrice() {
    const dates = dateInput.value.split(" to ");
    if (dates.length === 2) {
      const checkIn = new Date(dates[0]);
      const checkOut = new Date(dates[1]);
      const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));

      if (nights > 0) {
        totalAmount.innerText = nights * pricePerNight;
      }
    }
  }

  // Call updatePrice initially to reflect the default booking price
  updatePrice();
});
