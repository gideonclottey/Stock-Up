// Assign variables to target Bootstrap modal
const popUp = $("#signupModal")

$(document).on('click', '#signUp', function (event) {
  // Prevent default form functionality 
  event.preventDefault()
  popUp.modal("show")
})