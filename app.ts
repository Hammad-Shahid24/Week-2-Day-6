// // Define an interface for form data
// interface FormData {
//   name?: string;
//   email?: string;
//   company?: string;
//   gender?: string;
//   dateOfBirth?: string;
//   netRevenue2023?: string;
//   netRevenue2022?: string;
//   netRevenue2021?: string;
//   netProfit2023?: string;
//   netProfit2022?: string;
//   netProfit2021?: string;
//   questions?: string[];
//   contactMethod?: string;
//   phone?: string;
//   newsletter?: boolean;
// }

// // Load formData from localStorage with proper type
// let formData: FormData = JSON.parse(localStorage.getItem("formData") || "{}");

// // Fetch the span elements for the step 7 form
// const summaryName = document.getElementById("summary-name") as HTMLSpanElement;
// const summaryEmail = document.getElementById(
//   "summary-email"
// ) as HTMLSpanElement;
// const summaryGender = document.getElementById(
//   "summary-gender"
// ) as HTMLSpanElement;
// const summaryBirthdate = document.getElementById(
//   "summary-birthdate"
// ) as HTMLSpanElement;
// const summaryCompany = document.getElementById(
//   "summary-company"
// ) as HTMLSpanElement;
// const summaryRevenue2023 = document.getElementById(
//   "summary-net-revenue-2023"
// ) as HTMLSpanElement;
// const summaryRevenue2022 = document.getElementById(
//   "summary-net-revenue-2022"
// ) as HTMLSpanElement;
// const summaryRevenue2021 = document.getElementById(
//   "summary-net-revenue-2021"
// ) as HTMLSpanElement;
// const summaryProfit2023 = document.getElementById(
//   "summary-net-profit-2023"
// ) as HTMLSpanElement;
// const summaryProfit2022 = document.getElementById(
//   "summary-net-profit-2022"
// ) as HTMLSpanElement;
// const summaryProfit2021 = document.getElementById(
//   "summary-net-profit-2021"
// ) as HTMLSpanElement;
// const summaryQuestionsContainer = document.getElementById(
//   "summary-questions"
// ) as HTMLDivElement;
// const summaryContactMethod = document.getElementById(
//   "summary-contact-method"
// ) as HTMLSpanElement;
// const summaryPhone = document.getElementById(
//   "summary-phone"
// ) as HTMLSpanElement;
// const summaryNewsletter = document.getElementById(
//   "summary-newsletter"
// ) as HTMLSpanElement;

// summaryQuestionsContainer.innerHTML = ""; // Clear any existing content

// // Fetch the step 1 form input elements
// const nameInput = document.getElementById("name") as HTMLInputElement;
// const emailInput = document.getElementById("email") as HTMLInputElement;

// if (
//   nameInput instanceof HTMLInputElement &&
//   emailInput instanceof HTMLInputElement
// ) {
//   nameInput.value = formData.name || "";
//   emailInput.value = formData.email || "";
// }

// // Fetch the error message elements
// const nameError = document.getElementsByClassName(
//   "name-error"
// )[0] as HTMLSpanElement;
// const emailError = document.getElementsByClassName(
//   "email-error"
// )[0] as HTMLSpanElement;

// // Regex patterns for validation
// const namePattern = /^[A-Za-z\s]+$/;
// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// if (nameInput instanceof HTMLInputElement) {
//   nameInput.addEventListener("input", () => {
//     nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, ""); // Remove invalid characters
//   });
// }

// if (emailInput instanceof HTMLInputElement) {
//   emailInput.addEventListener("input", () => {
//     emailInput.value = emailInput.value.replace(/[^A-Za-z0-9@._-]/g, ""); // Remove invalid characters
//   });
// }

// // Validate function to be called on "Next" button press
// function validateStep1(): boolean {
//   let isValid = true;

//   // Validate name input
//   if (!namePattern.test(nameInput.value) || nameInput.value.length < 3) {
//     nameError.textContent =
//       "Please enter a valid name with at least 3 characters.";
//     isValid = false;
//   } else {
//     nameError.textContent = "";
//   }

//   // Validate email input
//   if (!emailPattern.test(emailInput.value)) {
//     emailError.textContent = "Please enter a valid email address.";
//     isValid = false;
//   } else {
//     emailError.textContent = "";
//   }

//   if (isValid && nameInput.value.length > 0 && emailInput.value.length > 0) {
//     formData.name = nameInput.value;
//     formData.email = emailInput.value;
//     summaryName.textContent = nameInput.value;
//     summaryEmail.textContent = emailInput.value;
//     localStorage.setItem("formData", JSON.stringify(formData));
//   }

//   return isValid;
// }

// // This fetches the step 2 form input elements
// const companyAboutInput = document.getElementById(
//   "company"
// ) as HTMLInputElement;

// if (companyAboutInput) {
//   companyAboutInput.value = formData.company || "";
// }

// // Fetch the error message elements
// const companyError = document.getElementsByClassName(
//   "company-error"
// )[0] as HTMLSpanElement;

// // Regex pattern for company description validation
// const companyDescriptionPattern = /^[A-Za-z0-9\s.,'-]+$/;

// // Input event listener for company
// companyAboutInput.addEventListener("input", () => {
//   // Remove invalid characters
//   companyAboutInput.value = companyAboutInput.value.replace(
//     /[^A-Za-z0-9\s.,'-]/g,
//     ""
//   );
// });

// // Validate function for Step 2
// function validateStep2(): boolean {
//   let isValid = true;

//   // Validate company description input
//   if (!companyDescriptionPattern.test(companyAboutInput.value)) {
//     companyError.textContent = "Please enter a valid description.";
//     isValid = false;
//   } else if (companyAboutInput.value.length < 25) {
//     companyError.textContent =
//       "You must give some details about your organization (at least 25 characters).";
//     isValid = false;
//   } else if (companyAboutInput.value.length > 500) {
//     companyError.textContent = "Description must be less than 500 characters.";
//     isValid = false;
//   } else {
//     companyError.textContent = "";
//   }

//   if (isValid) {
//     formData.company = companyAboutInput.value;
//     localStorage.setItem("formData", JSON.stringify(formData));
//     summaryCompany.textContent = companyAboutInput.value;
//   }

//   return isValid;
// }

// // Fetch step 3 form input elements and error message elements
// const inputs: (HTMLInputElement | null)[] = [
//   document.getElementById("net-revenue-2023") as HTMLInputElement,
//   document.getElementById("net-revenue-2022") as HTMLInputElement,
//   document.getElementById("net-revenue-2021") as HTMLInputElement,
//   document.getElementById("net-profit-2023") as HTMLInputElement,
//   document.getElementById("net-profit-2022") as HTMLInputElement,
//   document.getElementById("net-profit-2021") as HTMLInputElement,
// ];

// // Set the input values from the formData object
// if (inputs) {
//   inputs.forEach((input, index) => {
//     if (input) {
//       // Check if input is not null
//       if (index % 2 === 0) {
//         input.value =
//           formData[`netRevenue202${3 - Math.floor(index / 2)}`] || "";
//       } else {
//         input.value =
//           formData[`netProfit202${3 - Math.floor(index / 2)}`] || "";
//       }
//     }
//   });
// }

// // Fetch the error message element
// const businessError = document.getElementsByClassName(
//   "business-error"
// )[0] as HTMLSpanElement;

// // Pattern allowing numbers and one or two decimal places
// const numberPattern = /^(0|[1-9]\d*)(\.\d{0,2})?$/; // Updated pattern to prevent leading zeros
// const maxLength = 10; // Set the maximum length for input

// // Function to handle input event
// function handleInput(event: Event): void {
//   const target = event.target as HTMLInputElement;
//   const previousValue = target.value;

//   // Store the current cursor position
//   const cursorPosition = target.selectionStart ?? 0;

//   // Allow only numbers and one decimal point
//   let newValue = previousValue.replace(/[^0-9.]/g, "");

//   // Prevent multiple decimal points
//   if ((newValue.match(/\./g) || []).length > 1) {
//     newValue = newValue.replace(/\.+$/, ""); // Remove additional decimal points
//   }

//   // Limit to maximum length
//   if (newValue.length > maxLength) {
//     newValue = newValue.slice(0, maxLength); // Truncate to maxLength
//   }

//   // Handle leading zeros
//   if (
//     newValue.startsWith("0") &&
//     newValue.length > 1 &&
//     !newValue.includes(".")
//   ) {
//     newValue = newValue.slice(1); // Remove leading zero if not a decimal
//   }

//   // Limit to two decimal places
//   const decimalIndex = newValue.indexOf(".");
//   if (decimalIndex !== -1) {
//     // If decimal exists, slice the string to keep only two decimal places
//     const decimals = newValue.slice(decimalIndex + 1);
//     if (decimals.length > 2) {
//       newValue = newValue.slice(0, decimalIndex + 3); // Keep only two decimal places
//     }
//   }

//   target.value = newValue;

//   // Adjust the cursor position after value change
//   const newCursorPosition = Math.min(cursorPosition, newValue.length);
//   target.setSelectionRange(newCursorPosition, newCursorPosition);
// }

// // Attach the input event listener to each input element
// inputs.forEach((input) => {
//   if (input) {
//     // Check if input is not null
//     input.addEventListener("input", handleInput);
//     input.addEventListener("keydown", (event: KeyboardEvent) => {
//       if (event.key === "e" || event.key === "E") {
//         event.preventDefault(); // Prevent entering exponential notation
//       }
//     });
//   }
// });

// // Validate function for Step 3
// function validateStep3(): boolean {
//   let isValid = true;

//   // Validate net revenue and net profit inputs
//   inputs.forEach((input) => {
//     if (input) {
//       // Check if input is not null
//       // Ensure input is not empty and matches the number pattern
//       if (input.value.trim() === "" || !numberPattern.test(input.value)) {
//         businessError.textContent =
//           "Please enter a valid number for net revenue and net profit.";
//         isValid = false;
//       }
//     }
//   });

//   if (isValid) {
//     businessError.textContent = "";
//     formData.netRevenue2023 = inputs[0]?.value.trim() || "";
//     formData.netRevenue2022 = inputs[1]?.value.trim() || "";
//     formData.netRevenue2021 = inputs[2]?.value.trim() || "";
//     formData.netProfit2023 = inputs[3]?.value.trim() || "";
//     formData.netProfit2022 = inputs[4]?.value.trim() || "";
//     formData.netProfit2021 = inputs[5]?.value.trim() || "";

//     summaryRevenue2023.textContent = inputs[0]?.value.trim() || "";
//     summaryRevenue2022.textContent = inputs[1]?.value.trim() || "";
//     summaryRevenue2021.textContent = inputs[2]?.value.trim() || "";
//     summaryProfit2023.textContent = inputs[3]?.value.trim() || "";
//     summaryProfit2022.textContent = inputs[4]?.value.trim() || "";
//     summaryProfit2021.textContent = inputs[5]?.value.trim() || "";

//     localStorage.setItem("formData", JSON.stringify(formData));
//   }

//   return isValid;
// }

// // This fetches the step 4 form input elements
// const genderDropdown = document.getElementById("gender") as HTMLSelectElement;
// const dateOfBirthInput = document.getElementById(
//   "birthdate"
// ) as HTMLInputElement;

// if (genderDropdown && dateOfBirthInput) {
//   genderDropdown.value = formData.gender || "";
//   dateOfBirthInput.value = formData.dateOfBirth || "";
// }

// // This fetches the error message elements
// const genderError = document.getElementsByClassName(
//   "gender-error"
// )[0] as HTMLSpanElement;
// const dateOfBirthError = document.getElementsByClassName(
//   "birthdate-error"
// )[0] as HTMLSpanElement;

// // Function to check if a date is valid
// function isValidDate(dateString: string): boolean {
//   const date = new Date(dateString);
//   return (
//     date instanceof Date &&
//     !isNaN(date.getTime()) &&
//     dateString === date.toISOString().split("T")[0]
//   );
// }

// // Function to validate step 4
// function validateStep4(): boolean {
//   let isValid = true;

//   // Validate gender dropdown
//   if (genderDropdown.value === "") {
//     genderError.textContent = "Please select your gender.";
//     isValid = false;
//   } else {
//     genderError.textContent = ""; // Clear error message if valid
//   }

//   // Validate date of birth
//   const birthdateValue = dateOfBirthInput.value;
//   const birthdate = new Date(birthdateValue);
//   const today = new Date();
//   const minYear = today.getFullYear() - 80; // 80 years ago

//   if (
//     !isValidDate(birthdateValue) ||
//     birthdate > today ||
//     birthdate.getFullYear() < minYear
//   ) {
//     dateOfBirthError.textContent = "Please enter a valid date of birth.";
//     isValid = false;
//   } else {
//     dateOfBirthError.textContent = ""; // Clear error message if valid
//   }

//   if (isValid) {
//     formData.dateOfBirth = dateOfBirthInput.value.trim();
//     formData.gender = genderDropdown.value.trim();

//     summaryGender.textContent = genderDropdown.value.trim();
//     summaryBirthdate.textContent = dateOfBirthInput.value.trim();

//     localStorage.setItem("formData", JSON.stringify(formData));
//   }

//   return isValid;
// }

// // This fetches the input elements for the step 5 form
// const questionInput = document.querySelector(
//   ".question-input-field"
// ) as HTMLInputElement | null;
// const addQuestionButton = document.querySelector(
//   ".add-question-button"
// ) as HTMLButtonElement | null;
// const questionList = document.querySelector(
//   ".question-list"
// ) as HTMLUListElement | null;
// // const deleteButtons = document.getElementsByClassName(
// //   "delete-button"
// // ) as HTMLButtonElement[];
// const questionError = document.getElementsByClassName(
//   "question-error"
// )[0] as HTMLSpanElement;

// // Clear the existing questions in the list
// if (questionList) {
//   questionList.innerHTML = "";

//   // Add questions from formData to the list
//   formData.questions?.forEach((question) => addQuestionToList(question, false));
// }

// // Updated Regex pattern for question validation to allow "?" and "!".
// const questionPattern = /^[A-Za-z0-9\s.,'!?-]+$/;
// const minQuestionLength = 15; // Minimum characters required
// const maxQuestionLength = 150; // Maximum characters allowed

// // Input event listener for question input
// if (questionInput) {
//   questionInput.addEventListener("input", () => {
//     // Remove invalid characters, but allow "?" and "!".
//     questionInput.value = questionInput.value.replace(
//       /[^A-Za-z0-9\s.,'!?-]/g,
//       ""
//     );

//     // Display error if characters are too few or too many
//     if (questionInput.value.length < minQuestionLength) {
//       questionError.textContent = `Question must be at least ${minQuestionLength} characters long.`;
//     } else if (questionInput.value.length > maxQuestionLength) {
//       questionError.textContent = `Question cannot exceed ${maxQuestionLength} characters.`;
//     } else {
//       questionError.textContent = ""; // Clear error if within valid range
//     }
//   });
// }

// // Function to validate the question input
// function validateQuestion(): boolean {
//   const questionInput = document.getElementById(
//     "question-input"
//   ) as HTMLInputElement | null;
//   const questionError = document.querySelector(
//     ".question-error"
//   ) as HTMLSpanElement | null;
//   const minQuestionLength = 5; // Example minimum length
//   const maxQuestionLength = 100; // Example maximum length
//   const questionPattern = /^[A-Za-z0-9\s.,'-?]+$/; // Example pattern

//   let isValid = true;

//   // Clear any previous error message
//   if (questionError) {
//     questionError.textContent = "";
//   }

//   // If the input field is empty, return true (optional field)
//   if (questionInput?.value.trim() === "") {
//     return true;
//   }

//   // Validate question input based on length and pattern
//   if (
//     questionInput &&
//     (!questionPattern.test(questionInput.value) ||
//       questionInput.value.length < minQuestionLength ||
//       questionInput.value.length > maxQuestionLength)
//   ) {
//     questionInput.value = "";
//     questionInput.placeholder = "Please enter a valid question."; // Provide feedback
//     if (questionError) {
//       questionError.textContent =
//         "Invalid question. Please check length and format."; // Error message
//     }
//     isValid = false;
//   }

//   return isValid;
// }

// // Function to delete a question from the list and update the question numbers
// function deleteQuestion(event: Event): void {
//   const target = event.target as HTMLElement; // Cast to HTMLElement for accessing properties
//   const questionText = target.previousElementSibling?.textContent || ""; // Get the question text

//   // Remove the question element from the list
//   const index = formData.questions
//     ? formData.questions.indexOf(questionText)
//     : -1;
//   if (index > -1) {
//     if (formData.questions) {
//       formData.questions.splice(index, 1);
//     }
//   }

//   // Save the updated formData object in local storage
//   localStorage.setItem("formData", JSON.stringify(formData));

//   const questionElement = target.parentElement;
//   if (questionList && questionElement) {
//     questionList.removeChild(questionElement);
//     const noQuestionsMessage = document.getElementsByClassName(
//       "question-errors"
//     )[0] as HTMLElement;

//     if (questionList.children.length === 0) {
//       noQuestionsMessage.style.display = "block"; // Show message if no questions left
//     }
//   }

//   loadQuestionsInSummary();
// }

// // Function to add a question to the list and the whole list of questions as an array in the formData object
// function addQuestionToList(
//   question: string,
//   allowInsert: boolean = true
// ): void {
//   if (question.trim() === "") {
//     return; // Do not add empty questions
//   }

//   // Add question to the formData object
//   if (allowInsert) {
//     if (!formData.questions) {
//       formData.questions = [];
//     }
//     console.log("insert");
//     formData.questions.push(question);
//   }

//   // Save the updated formData object in local storage
//   localStorage.setItem("formData", JSON.stringify(formData));

//   const questionList = document.querySelector(
//     ".question-list"
//   ) as HTMLUListElement | null;

//   if (questionList) {
//     // Create a new question element
//     const questionElement = document.createElement("div");
//     questionElement.classList.add("question-element");

//     // Create the question text element
//     const questionText = document.createElement("p");
//     questionText.textContent = question;

//     // Create the delete button
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "-";
//     deleteButton.classList.add("delete-button");
//     deleteButton.addEventListener("click", deleteQuestion);

//     // Append question text and delete button
//     questionElement.appendChild(questionText);
//     questionElement.appendChild(deleteButton);

//     // Append the question element to the question list
//     questionList.appendChild(questionElement);

//     // Hide the no questions message if there were no questions before
//     const noQuestionsMessage = document.querySelector(
//       ".no-questions-message"
//     ) as HTMLElement | null;
//     if (noQuestionsMessage) {
//       noQuestionsMessage.style.display = "none";
//     }
//   } else {
//     console.error("Question list container not found");
//   }

//   loadQuestionsInSummary();
// }

// // Event listener for the add question button
// if (addQuestionButton) {
//   addQuestionButton.addEventListener("click", function () {
//     const questionText = questionInput?.value.trim() || "";

//     if (validateQuestion()) {
//       // Only add if valid
//       addQuestionToList(questionText);
//       if (questionInput) {
//         questionInput.value = ""; // Clear input field
//       }
//       questionError.textContent = ""; // Clear error message on successful addition
//     }
//   });
// }

// // This fetches the input elements for the step 6 form
// const contactMethod = document.getElementById(
//   "contact-method"
// ) as HTMLSelectElement | null;
// const phoneInput = document.getElementsByClassName(
//   "phone-input-field"
// )[0] as HTMLInputElement | null;
// const phoneError = document.getElementsByClassName(
//   "phone-error"
// )[0] as HTMLSpanElement | null;
// const newsletterCheckbox = document.getElementById(
//   "newsletter"
// ) as HTMLInputElement | null;

// // Set the input values from the formData object
// if (contactMethod && phoneInput && newsletterCheckbox) {
//   contactMethod.value = formData.contactMethod || "";
//   showPhoneInput();
//   newsletterCheckbox.checked = formData.newsletter || false;
//   phoneInput.value = formData.phone || "";
// }

// // Regex pattern for phone number validation with 10 or 11 digits only
// const phonePattern = /^\d{10,11}$/;

// // Input event listener for phone number
// if (phoneInput) {
//   phoneInput.addEventListener("input", () => {
//     // Remove non-numeric characters
//     phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

//     // Limit the input to 11 characters
//     if (phoneInput.value.length > 11) {
//       phoneInput.value = phoneInput.value.slice(0, 11);
//     }

//     // Format the phone number based on length
//     formatPhoneNumber();
//   });
// }

// // Function to validate the phone number
// function validatePhone(): boolean {
//   let isValid = true;

//   // Validate contact method dropdown only if phone is selected
//   if (
//     contactMethod &&
//     contactMethod.value === "phone" &&
//     phoneInput &&
//     phoneInput.value.trim() === ""
//   ) {
//     if (phoneError) {
//       phoneError.textContent = "Please enter your phone number.";
//     }
//     isValid = false;
//   } else {
//     if (phoneError) {
//       phoneError.textContent = ""; // Clear error message if valid
//     }
//   }

//   if (isValid) {
//     // Add the contact method, phone number, and newsletter subscription to the formData object and save it in local storage
//     if (contactMethod) {
//       formData.contactMethod = contactMethod.value.trim();
//     }
//     formData.newsletter = newsletterCheckbox?.checked || false;
//     summaryContactMethod.textContent = formData.contactMethod ?? "";
//     summaryNewsletter.textContent = formData.newsletter ? "Yes" : "No";
//     if (formData.contactMethod === "phone") {
//       summaryPhone.textContent = phoneInput?.value.trim() || "";
//       formData.phone = phoneInput?.value.trim() || "";
//     }

//     localStorage.setItem("formData", JSON.stringify(formData));
//   }

//   return isValid;
// }

// // Function to format the phone number based on its length
// function formatPhoneNumber(): void {
//   if (!phoneInput) return; // Add null check for phoneInput

//   let cleaned = phoneInput.value.replace(/[^0-9]/g, ""); // Strip any dashes added from previous input

//   if (cleaned && cleaned.length === 10) {
//     // Format as xxx-xxxx-xxx
//     phoneInput.value = `${cleaned.slice(0, 3)}-${cleaned.slice(
//       3,
//       7
//     )}-${cleaned.slice(7)}`;
//   } else if (cleaned && cleaned.length === 11) {
//     // Format as xxxx-xxxx-xxx
//     phoneInput.value = `${cleaned.slice(0, 4)}-${cleaned.slice(
//       4,
//       8
//     )}-${cleaned.slice(8)}`;
//   }
// }

// // Function to make the phone input field appear if the phone is selected from the contact method dropdown
// function showPhoneInput(): void {
//   if (contactMethod && contactMethod.value === "phone") {
//     if (phoneInput) {
//       phoneInput.style.visibility = "visible";
//     }
//   } else {
//     if (phoneInput) {
//       phoneInput.style.visibility = "hidden";
//     }
//   }
// }

// // Event listener for the contact method dropdown
// if (contactMethod) {
//   contactMethod.addEventListener("change", showPhoneInput);
// }

// // Event listener for the newsletter checkbox
// if (newsletterCheckbox) {
//   newsletterCheckbox.addEventListener("change", function () {
//     // Optionally, provide feedback for subscribing
//     // if (newsletterCheckbox.checked) {
//     //     alert("Thank you for subscribing to our newsletter!");
//     // }
//   });
// }

// function loadQuestionsInSummary(): void {
//   if (summaryQuestionsContainer) {
//     summaryQuestionsContainer.innerHTML = ""; // Clear any existing content

//     if (formData.questions && formData.questions.length > 0) {
//       const ol = document.createElement("ol");
//       formData.questions.forEach((question) => {
//         const li = document.createElement("li");
//         li.textContent = question;
//         ol.appendChild(li);
//       });
//       summaryQuestionsContainer.appendChild(ol);
//     } else {
//       summaryQuestionsContainer.textContent = "No questions provided.";
//     }
//   }
// }

// // Function to update the summary section with the form data
// if (formData) {
//   summaryName.textContent = formData.name || "";
//   summaryEmail.textContent = formData.email || "";
//   summaryGender.textContent = formData.gender || "";
//   summaryBirthdate.textContent = formData.dateOfBirth || "";
//   summaryCompany.textContent = formData.company || "";
//   summaryRevenue2023.textContent = formData.netRevenue2023 || "";
//   summaryRevenue2022.textContent = formData.netRevenue2022 || "";
//   summaryRevenue2021.textContent = formData.netRevenue2021 || "";
//   summaryProfit2023.textContent = formData.netProfit2023 || "";
//   summaryProfit2022.textContent = formData.netProfit2022 || "";
//   summaryProfit2021.textContent = formData.netProfit2021 || "";

//   loadQuestionsInSummary();

//   summaryContactMethod.textContent = formData.contactMethod || "";
//   summaryPhone.textContent = formData.phone || "";
//   summaryNewsletter.textContent = formData.newsletter ? "Yes" : "No";
// }

// let currentStep: number = 0;

// // This fetches the next and back buttons
// const nextButton: HTMLButtonElement | null = document.getElementById(
//   "next-button"
// ) as HTMLButtonElement;
// const backButton: HTMLButtonElement | null = document.getElementById(
//   "back-button"
// ) as HTMLButtonElement;
// const clearButton: HTMLButtonElement | null = document.getElementById(
//   "clear-button"
// ) as HTMLButtonElement;

// // This fetches all the individual step form components
// const steps: NodeListOf<HTMLElement> =
//   document.querySelectorAll(".animation-div");

// function showStep(stepIndex: number): void {
//   steps.forEach((step, index) => {
//     if (index === stepIndex) {
//       step.classList.remove("invisible"); // Show the current step
//     } else {
//       step.classList.add("invisible"); // Hide the others
//     }
//   });
// }

// showStep(currentStep);

// nextButton?.addEventListener("click", () => {
//   if (nextButton.textContent === "Submit") {
//     const submissionsList: any[] = JSON.parse(
//       localStorage.getItem("submissions") || "[]"
//     );

//     // Check if formData has meaningful data
//     if (Object.keys(formData).length > 0) {
//       // Add the formData object to the submissions list as an entry
//       submissionsList.push(formData);
//       localStorage.setItem("submissions", JSON.stringify(submissionsList));
//       alert("Form data saved successfully!");
//       localStorage.removeItem("formData"); // Correctly clear the formData from localStorage
//       window.location.reload();
//     } else {
//       alert("Form data is empty. Please fill out the form before submitting.");
//     }
//   } else {
//     goToNextStep();
//   }
// });

// function goToNextStep(): void {
//   // Switch statement to validate each step
//   switch (currentStep) {
//     case 0:
//       if (validateStep1()) {
//         currentStep++; // Move to the next step
//         showStep(currentStep);
//       }
//       break;
//     case 1:
//       if (validateStep2()) {
//         currentStep++; // Move to the next step
//         showStep(currentStep);
//       }
//       break;
//     case 2:
//       if (validateStep3()) {
//         currentStep++; // Move to the next step
//         showStep(currentStep);
//       }
//       break;
//     case 3:
//       if (validateStep4()) {
//         currentStep++; // Move to the next step
//         showStep(currentStep);
//       }
//       break;
//     case 4:
//       if (validateQuestion()) {
//         currentStep++; // Move to the next step
//         showStep(currentStep);
//       }
//       break;
//     case 5:
//       if (validatePhone()) {
//         currentStep++; // Move to the next step
//         showStep(currentStep);
//       }
//       break;
//     default:
//       currentStep++; // Move to the next step
//       showStep(currentStep);
//   }

//   // Ensure we do not increment currentStep twice
//   if (currentStep < steps.length - 1) {
//     showStep(currentStep);
//   }

//   if (currentStep < 6) {
//     if (nextButton) {
//       nextButton.textContent = "Next";
//     }
//   } else {
//     if (nextButton) {
//       nextButton.textContent = "Submit";
//     }
//   }
// }

// const mainFormDiv: HTMLElement | null =
//   document.getElementById("main-form-div");
// const mainFormControlsDiv: HTMLElement | null = document.getElementById(
//   "main-form-controls-div"
// );
// const submissionsListDiv: HTMLElement | null = document.getElementById(
//   "submissions-list-div"
// );
// const submissionsListButton: HTMLButtonElement | null =
//   document.getElementsByClassName(
//     "submission-list-button"
//   )[0] as HTMLButtonElement;
// const submissionsTableBody: HTMLTableSectionElement | null =
//   document.getElementById("submissions-table-body") as HTMLTableSectionElement;

// backButton?.addEventListener("click", () => {
//   if (currentStep > 0) {
//     currentStep--; // Move to the previous step
//     showStep(currentStep);

//     if (currentStep < 6) {
//       nextButton.textContent = "Next";
//     } else {
//       nextButton.textContent = "Submit";
//     }

//     localStorage.setItem("currentStep", currentStep.toString());
//   }
// });

// clearButton?.addEventListener("click", () => {
//   localStorage.removeItem("formData");
//   window.location.reload();
// });

// // Function to display the submissions list
// function showSubmissions(): void {
//   const submissionsList: any[] = JSON.parse(
//     localStorage.getItem("submissions") || "[]"
//   );

//   if (submissionsList.length > 0) {
//     if (submissionsTableBody) {
//       submissionsTableBody.innerHTML = ""; // Clear existing rows

//       submissionsList.forEach((submission, index) => {
//         const row: HTMLTableRowElement = submissionsTableBody.insertRow();
//         row.insertCell().textContent = (index + 1).toString();
//         row.insertCell().textContent = submission.name;

//         const actionsCell: HTMLTableCellElement = row.insertCell();

//         // Update button
//         const updateButton: HTMLButtonElement =
//           document.createElement("button");
//         updateButton.innerHTML = '<i class="fas fa-edit"></i>';
//         updateButton.title = "Update";
//         updateButton.addEventListener("click", () => updateSubmission(index));
//         actionsCell.appendChild(updateButton);

//         // Delete button
//         const deleteButton: HTMLButtonElement =
//           document.createElement("button");
//         deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
//         deleteButton.title = "Delete";
//         deleteButton.addEventListener("click", () => deleteSubmission(index));
//         actionsCell.appendChild(deleteButton);
//       });
//     }
//   }
// }

// showSubmissions();

// let updateIndex: number | null = null;

// function updateSubmission(index: number): void {
//   alert(
//     "Populate the form with submission data for updating. Note that this will delete the current entry and replace it with the updated data."
//   );
//   const submissions: any[] = JSON.parse(
//     localStorage.getItem("submissions") || "[]"
//   );
//   const submission = submissions[index];

//   formData = submission; // Set the formData object to the selected submission
//   localStorage.setItem("formData", JSON.stringify(formData));
//   deleteSubmission(index); // Delete the selected submission
//   switchView();
//   window.location.reload();

//   // Populate form with submission data for updating
// }

// function deleteSubmission(index: number): void {
//   let submissions: any[] = JSON.parse(
//     localStorage.getItem("submissions") || "[]"
//   );
//   submissions.splice(index, 1);
//   localStorage.setItem("submissions", JSON.stringify(submissions));

//   alert("Submission deleted successfully!");
//   // Refresh the table
//   showSubmissions();
// }

// function switchView(): void {
//   if (submissionsListButton?.textContent === "Show all Submissions") {
//     if (mainFormDiv && mainFormControlsDiv && submissionsListDiv) {
//       mainFormDiv.style.display = "none";
//       mainFormControlsDiv.style.display = "none";
//       submissionsListButton.textContent = "Hide All Submissions";
//       submissionsListDiv.style.display = "flex";
//     }
//   } else {
//     if (mainFormDiv && mainFormControlsDiv && submissionsListDiv) {
//       mainFormDiv.style.display = "flex";
//       mainFormControlsDiv.style.display = "flex";
//       if (submissionsListButton) {
//         submissionsListButton.textContent = "Show all Submissions";
//       }
//       submissionsListDiv.style.display = "none";
//     }
//   }
// }

// submissionsListButton?.addEventListener("click", () => {
//   switchView();
// });
