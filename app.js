let formData = JSON.parse(localStorage.getItem("formData")) || {};

// This fetches the span elements for the step 7 form
const summaryName = document.getElementById("summary-name");
const summaryEmail = document.getElementById("summary-email");
const summaryGender = document.getElementById("summary-gender");
const summaryBirthdate = document.getElementById("summary-birthdate");
const summaryCompany = document.getElementById("summary-company");
const summaryRevenue2023 = document.getElementById("summary-net-revenue-2023");
const summaryRevenue2022 = document.getElementById("summary-net-revenue-2022");
const summaryRevenue2021 = document.getElementById("summary-net-revenue-2021");
const summaryProfit2023 = document.getElementById("summary-net-profit-2023");
const summaryProfit2022 = document.getElementById("summary-net-profit-2022");
const summaryProfit2021 = document.getElementById("summary-net-profit-2021");
const summaryQuestions = document.getElementById("summary-questions");
const summaryContactMethod = document.getElementById("summary-contact-method");
const summaryPhone = document.getElementById("summary-phone");
const summaryNewsletter = document.getElementById("summary-newsletter");

const summaryQuestionsContainer = document.getElementById("summary-questions");
summaryQuestionsContainer.innerHTML = ""; // Clear any existing content

// Fetch the step 1 form input elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

if (nameInput && emailInput) {
  nameInput.value = formData.name || "";
  emailInput.value = formData.email || "";
}

// This fetches the error message elements
const nameError = document.getElementsByClassName("name-error")[0];
const emailError = document.getElementsByClassName("email-error")[0];

// Regex patterns for validation
const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, ""); // Remove invalid characters
});

emailInput.addEventListener("input", () => {
  emailInput.value = emailInput.value.replace(/[^A-Za-z0-9@._-]/g, ""); // Remove invalid characters
});

// Validate function to be called on "Next" button press
function validateStep1() {
  let isValid = true;

  // Validate name input
  if (!namePattern.test(nameInput.value) || nameInput.value.length < 3) {
    nameError.textContent =
      "Please enter a valid name with at least 3 characters.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email input
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (isValid && nameInput.value.length > 0 && emailInput.value.length > 0) {
    formData.name = nameInput.value;
    formData.email = emailInput.value;
    summaryName.textContent = nameInput.value;
    summaryEmail.textContent = emailInput.value;
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return isValid;
}

// This fetches the step 2 form input elements
const companyAboutInput = document.getElementById("company");

if (companyAboutInput) {
  companyAboutInput.value = formData.company || "";
}

// This fetches the error message elements
const companyError = document.getElementsByClassName("company-error")[0];

// Regex pattern for company description validation
const companyDescriptionPattern = /^[A-Za-z0-9\s.,'-]+$/;

// Input event listener for company
companyAboutInput.addEventListener("input", () => {
  // Remove invalid characters
  companyAboutInput.value = companyAboutInput.value.replace(
    /[^A-Za-z0-9\s.,'-]/g,
    ""
  );
});

// Validate function for Step 2
function validateStep2() {
  let isValid = true;

  // Validate company description input
  if (!companyDescriptionPattern.test(companyAboutInput.value)) {
    companyError.textContent = "Please enter a valid description.";
    isValid = false;
  } else if (companyAboutInput.value.length < 25) {
    companyError.textContent =
      "You must give some details about your organization (at least 25 characters).";
    isValid = false;
  } else if (companyAboutInput.value.length > 500) {
    companyError.textContent = "Description must be less than 500 characters.";
    isValid = false;
  } else {
    companyError.textContent = "";
  }

  if (isValid) {
    formData.company = companyAboutInput.value;
    localStorage.setItem("formData", JSON.stringify(formData));
    summaryCompany.textContent = companyAboutInput.value;
  }

  return isValid;
}

// Fetch step 3 form input elements and error message elements
const inputs = [
  document.getElementById("net-revenue-2023"),
  document.getElementById("net-revenue-2022"),
  document.getElementById("net-revenue-2021"),
  document.getElementById("net-profit-2023"),
  document.getElementById("net-profit-2022"),
  document.getElementById("net-profit-2021"),
];

// Set the input values from the formData object
if (inputs) {
  inputs.forEach((input, index) => {
    if (index % 2 === 0) {
      input.value = formData[`netRevenue202${3 - Math.floor(index / 2)}`] || "";
    } else {
      input.value = formData[`netProfit202${3 - Math.floor(index / 2)}`] || "";
    }
  });
}

// Fetch the error message element
const businessError = document.getElementsByClassName("business-error")[0];

// Pattern allowing numbers and one or two decimal places
const numberPattern = /^(0|[1-9]\d*)(\.\d{0,2})?$/; // Updated pattern to prevent leading zeros
const maxLength = 10; // Set the maximum length for input

// Function to handle input event
function handleInput(event) {
  const target = event.target;
  const previousValue = target.value;

  // Store the current cursor position
  const cursorPosition = target.selectionStart;

  // Allow only numbers and one decimal point
  let newValue = previousValue.replace(/[^0-9.]/g, "");

  // Prevent multiple decimal points
  if ((newValue.match(/\./g) || []).length > 1) {
    newValue = newValue.replace(/\.+$/, ""); // Remove additional decimal points
  }

  // Limit to maximum length
  if (newValue.length > maxLength) {
    newValue = newValue.slice(0, maxLength); // Truncate to maxLength
  }

  // Handle leading zeros
  if (
    newValue.startsWith("0") &&
    newValue.length > 1 &&
    !newValue.includes(".")
  ) {
    newValue = newValue.slice(1); // Remove leading zero if not a decimal
  }

  // Limit to two decimal places
  const decimalIndex = newValue.indexOf(".");
  if (decimalIndex !== -1) {
    // If decimal exists, slice the string to keep only two decimal places
    const decimals = newValue.slice(decimalIndex + 1);
    if (decimals.length > 2) {
      newValue = newValue.slice(0, decimalIndex + 3); // Keep only two decimal places
    }
  }

  target.value = newValue;

  // Adjust the cursor position after value change
  const newCursorPosition = Math.min(cursorPosition, newValue.length);
  target.setSelectionRange(newCursorPosition, newCursorPosition);
}

// Attach the input event listener to each input element
inputs.forEach((input) => {
  input.addEventListener("input", handleInput);
  input.addEventListener("keydown", (event) => {
    if (event.key === "e" || event.key === "E") {
      event.preventDefault(); // Prevent entering exponential notation
    }
  });
});

// Validate function for Step 3
function validateStep3() {
  let isValid = true;

  // Validate net revenue and net profit inputs
  inputs.forEach((input) => {
    // Ensure input is not empty and matches the number pattern
    if (input.value.trim() === "" || !numberPattern.test(input.value)) {
      businessError.textContent =
        "Please enter a valid number for net revenue and net profit.";
      isValid = false;
    }
  });

  if (isValid) {
    businessError.textContent = "";
    formData.netRevenue2023 = inputs[0].value.trim();
    formData.netRevenue2022 = inputs[1].value.trim();
    formData.netRevenue2021 = inputs[2].value.trim();
    formData.netProfit2023 = inputs[3].value.trim();
    formData.netProfit2022 = inputs[4].value.trim();
    formData.netProfit2021 = inputs[5].value.trim();

    summaryRevenue2023.textContent = inputs[0].value.trim();
    summaryRevenue2022.textContent = inputs[1].value.trim();
    summaryRevenue2021.textContent = inputs[2].value.trim();
    summaryProfit2023.textContent = inputs[3].value.trim();
    summaryProfit2022.textContent = inputs[4].value.trim();
    summaryProfit2021.textContent = inputs[5].value.trim();

    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return isValid;
}

// This fetches the step 4 form input elements
const genderDropdown = document.getElementById("gender");
const dateOfBirthInput = document.getElementById("birthdate");

if (genderDropdown && dateOfBirthInput) {
  genderDropdown.value = formData.gender || "";
  dateOfBirthInput.value = formData.dateOfBirth || "";
}

// This fetches the error message elements
const genderError = document.getElementsByClassName("gender-error")[0];
const dateOfBirthError = document.getElementsByClassName("birthdate-error")[0];

// Function to check if a date is valid
function isValidDate(dateString) {
  const date = new Date(dateString);
  return (
    date instanceof Date &&
    !isNaN(date) &&
    dateString === date.toISOString().split("T")[0]
  );
}

// Function to validate step 4
function validateStep4() {
  let isValid = true;

  // Validate gender dropdown
  if (genderDropdown.value === "") {
    genderError.textContent = "Please select your gender.";
    isValid = false;
  } else {
    genderError.textContent = ""; // Clear error message if valid
  }

  // Validate date of birth
  const birthdateValue = dateOfBirthInput.value;
  const birthdate = new Date(birthdateValue);
  const today = new Date();
  const minYear = today.getFullYear() - 80; // 80 years ago

  if (
    !isValidDate(birthdateValue) ||
    birthdate > today ||
    birthdate.getFullYear() < minYear
  ) {
    dateOfBirthError.textContent = "Please enter a valid date of birth.";
    isValid = false;
  } else {
    dateOfBirthError.textContent = ""; // Clear error message if valid
  }

  if (isValid) {
    formData.dateOfBirth = dateOfBirthInput.value.trim();
    formData.gender = genderDropdown.value.trim();

    summaryGender.textContent = genderDropdown.value.trim();
    summaryBirthdate.textContent = dateOfBirthInput.value.trim();

    localStorage.setItem("formData", JSON.stringify(formData));
  }
  return isValid;
}

//  This fetches the input elements for the step 5 form
const questionInput = document.querySelector(".question-input-field");
const addQuestionButton = document.querySelector(".add-question-button");
const questionList = document.querySelector(".question-list");
const deleteButton = document.getElementsByClassName("delete-button");
const questionError = document.getElementsByClassName("question-error")[0];

if (questionList) {
  // Clear the existing questions in the list
  const questionList = document.querySelector(".question-list");
  questionList.innerHTML = "";

  // Add questions from formData to the list
  formData.questions?.forEach((question) => addQuestionToList(question, false));
}

// Updated Regex pattern for question validation to allow "?".
const questionPattern = /^[A-Za-z0-9\s.,'!?-]+$/;
const minQuestionLength = 15; // Minimum characters required
const maxQuestionLength = 150; // Maximum characters allowed

// Input event listener for question input
questionInput.addEventListener("input", () => {
  // Remove invalid characters, but allow "?" and "!".
  questionInput.value = questionInput.value.replace(
    /[^A-Za-z0-9\s.,'!?-]/g,
    ""
  );

  // Display error if characters are too few or too many
  if (questionInput.value.length < minQuestionLength) {
    questionError.textContent = `Question must be at least ${minQuestionLength} characters long.`;
  } else if (questionInput.value.length > maxQuestionLength) {
    questionError.textContent = `Question cannot exceed ${maxQuestionLength} characters.`;
  } else {
    questionError.textContent = ""; // Clear error if within valid range
  }
});

// Function to validate the question input
function validateQuestion() {
  const questionInput = document.getElementById("question-input");
  const questionError = document.querySelector(".question-error");
  const minQuestionLength = 5; // Example minimum length
  const maxQuestionLength = 100; // Example maximum length
  const questionPattern = /^[A-Za-z0-9\s.,'-?]+$/; // Example pattern

  let isValid = true;

  // Clear any previous error message
  questionError.textContent = "";

  // If the input field is empty, return true (optional field)
  if (questionInput.value.trim() === "") {
    return true;
  }

  // Validate question input based on length and pattern
  if (
    !questionPattern.test(questionInput.value) ||
    questionInput.value.length < minQuestionLength ||
    questionInput.value.length > maxQuestionLength
  ) {
    questionInput.value = "";
    questionInput.placeholder = "Please enter a valid question."; // Provide feedback
    questionError.textContent =
      "Invalid question. Please check length and format."; // Error message
    isValid = false;
  }

  return isValid;
}

// Function to delete a question from the list and update the question numbers
function deleteQuestion(event) {
  // Remove the question element from the list
  formData.questions.splice(
    formData.questions.indexOf(event.target.previousElementSibling.textContent),
    1
  );

  // Save the updated formData object in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  const questionElement = event.target.parentElement;
  const questionList = document.querySelector(".question-list");
  const noQuestionsMessage =
    document.getElementsByClassName(".question-errors")[0];

  if (questionList && questionElement) {
    questionList.removeChild(questionElement);
    if (questionList.children.length === 0) {
      noQuestionsMessage.style.display = "block"; // Show message if no questions left
    }
  }

  loadQuestionsInSummary();
}

// Function to add a question to the list and the whole list of questions as an array in the formData object
function addQuestionToList(question, allowInsert = true) {
  if (question.trim() === "") {
    return; // Do not add empty questions
  }
  // Add question to the formData object
  if (allowInsert) {
    if (!formData.questions) {
      formData.questions = [];
    }
    console.log("insert");
    formData.questions.push(question);
  }

  // Save the updated formData object in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  const questionList = document.querySelector(".question-list");

  if (questionList) {
    // Create a new question element
    const questionElement = document.createElement("div");
    questionElement.classList.add("question-element");

    // Create the question text element
    const questionText = document.createElement("p");
    questionText.textContent = question;

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "-";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", deleteQuestion);

    // Append question text and delete button
    questionElement.appendChild(questionText);
    questionElement.appendChild(deleteButton);

    // Append the question element to the question list
    questionList.appendChild(questionElement);

    // Hide the no questions message if there were no questions before
    const noQuestionsMessage = document.querySelector(".no-questions-message");
    if (noQuestionsMessage) {
      noQuestionsMessage.style.display = "none";
    }
  } else {
    console.error("Question list container not found");
  }

  loadQuestionsInSummary();
}

// Event listener for the add question button
addQuestionButton.addEventListener("click", function () {
  const questionText = questionInput.value.trim();

  if (validateQuestion()) {
    // Only add if valid
    addQuestionToList(questionText);
    questionInput.value = ""; // Clear input field
    questionError.textContent = ""; // Clear error message on successful addition
  }
});

// This fetches the input elements for the step 6 form
const contactMethod = document.getElementById("contact-method");
const phoneInput = document.getElementsByClassName("phone-input-field")[0];
const phoneError = document.getElementsByClassName("phone-error")[0];
const newsletterCheckbox = document.getElementById("newsletter");

// Set the input values from the formData object
if (contactMethod && phoneInput && newsletterCheckbox) {
  contactMethod.value = formData.contactMethod || "";
  showPhoneInput();
  newsletterCheckbox.checked = formData.newsletter || false;
  phoneInput.value = formData.phone || "";
}

// Regex pattern for phone number validation with 10 or 11 digits only
const phonePattern = /^\d{10,11}$/;

// Input event listener for phone number
phoneInput.addEventListener("input", () => {
  // Remove non-numeric characters
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

  // Limit the input to 11 characters
  if (phoneInput.value.length > 11) {
    phoneInput.value = phoneInput.value.slice(0, 11);
  }

  // Format the phone number based on length
  formatPhoneNumber();
});

// Function to validate the phone number
function validatePhone() {
  let isValid = true;

  // Validate contact method dropdown only if phone is selected
  if (contactMethod.value === "phone" && phoneInput.value.trim() === "") {
    phoneError.textContent = "Please enter your phone number.";
    isValid = false;
  } else {
    phoneError.textContent = ""; // Clear error message if valid
  }

  if (isValid) {
    // add the contact method, phone number and newsletter subscription to the formData object and save it in the local storage
    formData.contactMethod = contactMethod.value.trim();
    formData.newsletter = newsletterCheckbox.checked;
    summaryContactMethod.textContent = contactMethod.value.trim();
    summaryNewsletter.textContent = newsletterCheckbox.checked ? "Yes" : "No";
    if (contactMethod.value === "phone") {
      summaryPhone.textContent = phoneInput.value.trim();
      formData.phone = phoneInput.value.trim();
    }

    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return isValid;
}

// Function to format the phone number based on its length
function formatPhoneNumber() {
  let cleaned = phoneInput.value.replace(/[^0-9]/g, ""); // Strip any dashes added from previous input

  if (cleaned.length === 10) {
    // Format as xxx-xxxx-xxx
    phoneInput.value = `${cleaned.slice(0, 3)}-${cleaned.slice(
      3,
      7
    )}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 11) {
    // Format as xxxx-xxxx-xxx
    phoneInput.value = `${cleaned.slice(0, 4)}-${cleaned.slice(
      4,
      8
    )}-${cleaned.slice(8)}`;
  }
}

// Function to make the phone input field appear if the phone is selected from the contact method dropdown
function showPhoneInput() {
  if (contactMethod.value == "phone") {
    phoneInput.style.visibility = "visible";
  } else {
    phoneInput.style.visibility = "hidden";
  }
}

// Event listener for the contact method dropdown
contactMethod.addEventListener("change", showPhoneInput);

// Event listener for the newsletter checkbox
newsletterCheckbox.addEventListener("change", function () {
  // if (newsletterCheckbox.checked) {
  //   alert("Thank you for subscribing to our newsletter!");
  // }
});

function loadQuestionsInSummary() {
  summaryQuestionsContainer.innerHTML = ""; // Clear any existing content

  if (formData.questions && formData.questions.length > 0) {
    const ol = document.createElement("ol");
    formData.questions.forEach((question) => {
      const li = document.createElement("li");
      li.textContent = question;
      ol.appendChild(li);
    });
    summaryQuestionsContainer.appendChild(ol);
  } else {
    summaryQuestionsContainer.textContent = "No questions provided.";
  }
}

// Function to update the summary section with the form data
if (formData) {
  summaryName.textContent = formData.name || "";
  summaryEmail.textContent = formData.email || "";
  summaryGender.textContent = formData.gender || "";
  summaryBirthdate.textContent = formData.dateOfBirth || "";
  summaryCompany.textContent = formData.company || "";
  summaryRevenue2023.textContent = formData.netRevenue2023 || "";
  summaryRevenue2022.textContent = formData.netRevenue2022 || "";
  summaryRevenue2021.textContent = formData.netRevenue2021 || "";
  summaryProfit2023.textContent = formData.netProfit2023 || "";
  summaryProfit2022.textContent = formData.netProfit2022 || "";
  summaryProfit2021.textContent = formData.netProfit2021 || "";

  loadQuestionsInSummary();

  summaryContactMethod.textContent = formData.contactMethod || "";

  summaryPhone.textContent = formData.phone || "";
  summaryNewsletter.textContent = formData.newsletter ? "Yes" : "No";
}

let currentStep = 0;

// This fetches the next and back buttons
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const clearButton = document.getElementById("clear-button");

// This fetches all the individual step form components
const steps = document.querySelectorAll(".animation-div");

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    if (index === stepIndex) {
      step.classList.remove("invisible"); // Show the current step
    } else {
      step.classList.add("invisible"); // Hide the others
    }
  });
}

showStep(currentStep);

nextButton.addEventListener("click", () => {
  if (nextButton.textContent === "Submit") {
    const submissionsList =
      JSON.parse(localStorage.getItem("submissions")) || [];

    // Check if formData has meaningful data
    if (Object.keys(formData).length > 0) {
      // Add the formData object to the submissions list as an entry
      submissionsList.push(formData);
      localStorage.setItem("submissions", JSON.stringify(submissionsList));
      alert("Form data saved successfully!");
      localStorage.removeItem("formData"); // Correctly clear the formData from localStorage
      window.location.reload();
    } else {
      alert("Form data is empty. Please fill out the form before submitting.");
    }
  } else {
    goToNextStep();
  }
});

function goToNextStep() {
  // switch statement to validate each step
  switch (currentStep) {
    case 0:
      if (validateStep1()) {
        currentStep++; // Move to the next step
        showStep(currentStep);
      }
      break;
    case 1:
      if (validateStep2()) {
        currentStep++; // Move to the next step
        showStep(currentStep);
      }
      break;
    case 2:
      if (validateStep3()) {
        currentStep++; // Move to the next step
        showStep(currentStep);
      }
      break;
    case 3:
      if (validateStep4()) {
        currentStep++; // Move to the next step
        showStep(currentStep);
      }
      break;
    case 4:
      if (validateQuestion()) {
        currentStep++; // Move to the next step
        showStep(currentStep);
      }
      break;
    case 5:
      if (validatePhone()) {
        currentStep++; // Move to the next step
        showStep(currentStep);
      }
      break;
    default:
      currentStep++; // Move to the next step
      showStep(currentStep);
  }

  // Ensure we do not increment currentStep twice
  if (currentStep < steps.length - 1) {
    showStep(currentStep);
  }

  if (currentStep < 6) {
    nextButton.textContent = "Next";
  } else {
    nextButton.textContent = "Submit";
  }
}

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--; // Move to the previous step
    showStep(currentStep);

    if (currentStep < 6) {
      nextButton.textContent = "Next";
    } else {
      nextButton.textContent = "Submit";
    }

    localStorage.setItem("currentStep", currentStep);
  }
});

clearButton.addEventListener("click", () => {
  localStorage.removeItem("formData");
  window.location.reload();
});

const mainFormDiv = document.getElementById("main-form-div");
const mainFormControlsDiv = document.getElementById("main-form-controls-div");
const submissionsListDiv = document.getElementById("submissions-list-div");
const submissionsListButton = document.getElementsByClassName(
  "submission-list-button"
)[0];
const submissionsTableBody = document.getElementById("submissions-table-body");

// Function to display the submissions list
function showSubmissions() {
  const submissionsList = JSON.parse(localStorage.getItem("submissions")) || [];

  if (submissionsList.length > 0) {
    submissionsTableBody.innerHTML = ""; // Clear existing rows

    submissionsList.forEach((submission, index) => {
      const row = submissionsTableBody.insertRow();
      row.insertCell().textContent = index + 1;
      row.insertCell().textContent = submission.name;

      const actionsCell = row.insertCell();

      // Update button
      const updateButton = document.createElement("button");
      updateButton.innerHTML = '<i class="fas fa-edit"></i>';
      updateButton.title = "Update";
      updateButton.addEventListener("click", () => updateSubmission(index));
      actionsCell.appendChild(updateButton);

      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      deleteButton.title = "Delete";
      deleteButton.addEventListener("click", () => deleteSubmission(index));
      actionsCell.appendChild(deleteButton);
    });
  }
}

showSubmissions();

let updateIndex = null;

function updateSubmission(index) {
  alert(
    "Populate the form with submission data for updating. Note that this will delete the current entry and replace it with the updated data."
  );
  const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  const submission = submissions[index];

  formData = submission; // Set the formData object to the selected submission
  localStorage.setItem("formData", JSON.stringify(formData));
  deleteSubmission(index); // Delete the selected submission
  switchView();
  window.location.reload();

  // Populate form with submission data for updating
}

function deleteSubmission(index) {
  let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
  submissions.splice(index, 1);
  localStorage.setItem("submissions", JSON.stringify(submissions));

  alert("Submission deleted successfully!");
  switchView();
  window.location.reload();
  showSubmissions();
}

function switchView() {
  if (submissionsListButton.textContent == "Show all Submissions") {
    mainFormDiv.style.display = "none";
    mainFormControlsDiv.style.display = "none";
    submissionsListButton.textContent = "Hide All Submissions";
    submissionsListDiv.style.display = "flex";
  } else {
    mainFormDiv.style.display = "flex";
    mainFormControlsDiv.style.display = "flex";
    submissionsListButton.textContent = "Show all Submissions";
    submissionsListDiv.style.display = "none";
  }
}

submissionsListButton.addEventListener("click", () => {
  switchView();
});
