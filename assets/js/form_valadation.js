/**
 * Auhtor bhatthaamid@gmail.com
 * Haamid Ahmad Bhat
 */

/**
 * Handle form submit click event
 */
function submitFormAction() {
  const firstNameInput = document.getElementById("firstName")
  const lastNameInput = document.getElementById("lastName")
  const emailInput = document.getElementById("email")
  const mobileNoInput = document.getElementById("phoneNumber")
  const radioOptions = document.getElementsByName("radioOption")
  const websiteUrlInput = document.getElementById("websiteUrl")

  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const mobileNoRegex = /(\+91[0-9]{10}$)/
  const websiteUrlRegex =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi

  if (firstNameInput.value == "") {
    //alert("Please enter first name") // for alert
    firstNameInput.classList.add("is-invalid") //This one is user friendly.
    return
  } else if (!firstNameInput.value.match(/^[A-Za-z ]+$/)) {
    //alert("Please enter only characters")
    firstNameInput.classList.add("is-invalid")
    document.getElementById("firstNameErrorLabel").innerHTML = "Please enter only characters"
    return
  } else if (lastNameInput.value == "") {
    lastNameInput.classList.add("is-invalid")
    return
  } else if (!lastNameInput.value.match(/^[A-Za-z ]+$/)) {
    lastNameInput.classList.add("is-invalid")
    document.getElementById("lastNameErrorLabel").innerHTML = "Please enter only characters"
    return
  } else if (emailInput.value == "") {
    emailInput.classList.add("is-invalid")
    return
  } else if (!emailInput.value.match(validEmailRegex)) {
    emailInput.classList.add("is-invalid")
    document.getElementById("emailErrorLabel").innerHTML = "Please enter valid email"
    return
  } else if (mobileNoInput.value == "") {
    mobileNoInput.classList.add("is-invalid")
    return
  } else if (!mobileNoInput.value.match(mobileNoRegex)) {
    mobileNoInput.classList.add("is-invalid")
    document.getElementById("phoneNumberErrorLabel").innerHTML =
      "Please enter valid mobile number (Like +917000012345) "
    return
  } else if (!radioOptions[0].checked && !radioOptions[1].checked) {
    document.getElementById("radioYes").classList.add("is-invalid")
    document.getElementById("radioNo").classList.add("is-invalid")
    return
  } else if (radioOptions[0].checked) {
    if (websiteUrlInput.value == "") {
      websiteUrlInput.classList.add("is-invalid")
      return
    } else if (!websiteUrlInput.value.match(websiteUrlRegex)) {
      websiteUrlInput.classList.add("is-invalid")
      document.getElementById("websiteUrlErrorLabel").innerHTML = "Please enter valid URL"
      return
    } else {
      document.getElementById("radioYes").classList.remove("is-invalid")
      document.getElementById("radioNo").classList.remove("is-invalid")
      alert("Form submitted successfully!")
    }
  } else {
    document.getElementById("radioYes").classList.remove("is-invalid")
    document.getElementById("radioNo").classList.remove("is-invalid")
    alert("Form submitted successfully!")
  }
}

/**
 * Clear error messages
 */
function inputOnBlurAction(id) {
  const value = document.getElementById(id).value
  if (value?.length > 0) {
    document.getElementById(id).classList.remove("is-invalid") // Remove error (red color) class
    document.getElementById(id).classList.add("is-valid") // Add  class (Green color)
  } else if (value == "") {
    document.getElementById(id).classList.add("is-invalid")
    document.getElementById(id).classList.remove("is-valid")
  }
}
