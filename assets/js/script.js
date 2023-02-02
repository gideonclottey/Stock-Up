// Assign variables to target Bootstrap modal
const popUp = $("#signupModal")

// Assign variable to Sign up form
const signUpForm = $("#signUpForm")

// Add on click event to signup link
$(document).on('click', '#sign-up', function (event) {

    // Prevent default functionality 
    event.preventDefault()

    // Show the modal 
    popUp.modal("show")
})


// Add listener to signup form submit
$("#signUpForm").submit(function (event) {

    // Prevent default form functionality 
    event.preventDefault();

    // assign form name & email input values to variables
    const name = $("#name").val().trim()

    const email = $("#email").val().trim()

    console.log(name, email)

    // hide the modal
    popUp.modal("hide")

    // clear form values
    clearFormValues()
});


// Function to clear form values
function clearFormValues(){

    // clear the name input field
    $("#name").val('')

    // clear the email input field
    $("#email").val('')
}