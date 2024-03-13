function calculateAge() {
  var dob = new Date(document.getElementById("dob").value);
  var today = new Date();

  var years = today.getFullYear() - dob.getFullYear();
  var months = today.getMonth() - dob.getMonth();
  var days = today.getDate() - dob.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    // Adjust days for months with different lengths
    var prevMonthDate = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      dob.getDate()
    );
    days = Math.floor((today - prevMonthDate) / (1000 * 60 * 60 * 24));
  }

  var ageString = "";

  if (years > 0) {
    ageString += years + (years === 1 ? " year" : " years");
  }

  if (months > 0) {
    ageString +=
      (ageString !== "" ? ", " : "") +
      months +
      (months === 1 ? " month" : " months");
  }

  if (days > 0) {
    ageString +=
      (ageString !== "" ? ", " : "") + days + (days === 1 ? " day" : " days");
  }

  if (ageString === "") {
    alert("Please choose your date of birth!");
  }

  document.getElementById("result").innerHTML = "Your age is: " + ageString;

  // Clear the input field
  document.getElementById("dob").value = "";
}
