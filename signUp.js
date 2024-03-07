$(document).ready(function() {
  const form = $("form");
  const inputs = form.find("input");

  form.submit(function(event) {
    let errors = false;

    inputs.each(function() {
      const value = $(this).val().trim();

      if (value === "") {
        $(this).addClass("error");
        errors = true;
      } else if ($(this).attr("id") === "email" && !isValidEmail(value)) {
        $(this).addClass("error");
        errors = true;
      } else {
        $(this).removeClass("error");
      }
    });

    if (errors) {
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
