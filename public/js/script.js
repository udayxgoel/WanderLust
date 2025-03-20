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

// Booking Price Calculator
document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("dateRange");
  const totalAmount = document.getElementById("totalAmount");
  const bookBtn = document.getElementById("bookBtn");
  const pricePerNight = parseFloat(bookBtn.dataset.price);

  // Hidden Inputs
  const checkInInput = document.getElementById("checkIn");
  const checkOutInput = document.getElementById("checkOut");
  const totalPriceInput = document.getElementById("totalPrice");

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
      const totalPrice = nights * pricePerNight;

      if (nights > 0) {
        totalAmount.innerText = totalPrice;
        document.getElementById("totalPrice").value = totalPrice;

        // Store dates in correct format (YYYY-MM-DD)
        checkInInput.value = checkIn.toISOString().split("T")[0];
        checkOutInput.value = checkOut.toISOString().split("T")[0];
      }
    }
  }

  // Call updatePrice initially to reflect the default booking price
  updatePrice();
});
