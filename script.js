const navNum1Background = document.getElementById("num-1");
const navNum2Background = document.getElementById("num-2");
const navNum3Background = document.getElementById("num-3");
const navNum4Background = document.getElementById("num-4");
const navNum1 = document.getElementById("number-1");
const navNum2 = document.getElementById("number-2");
const navNum3 = document.getElementById("number-3");
const navNum4 = document.getElementById("number-4");

const sec1 = document.getElementById("section-1");
const sec2 = document.getElementById("section-2");
const sec3 = document.getElementById("section-3");
const sec4 = document.getElementById("section-4");
const sec5 = document.getElementById("section-5");

const form1 = document.getElementById("form1");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const phoneInput = document.getElementById("phone-input");
const nameErrorMsg = document.getElementById("name-error-msg");
const emailErrorMsg = document.getElementById("email-error-msg");
const phoneErrorMsg = document.getElementById("phone-error-msg");

const nextButton1 = document.getElementById("next-page1");
const nextButton2 = document.getElementById("next-page2");
const nextButton3 = document.getElementById("next-page3");
const nextButton4 = document.getElementById("next-page4");

const prevButton1 = document.getElementById("prev-page2");
const prevButton2 = document.getElementById("prev-page3");
const prevButton3 = document.getElementById("prev-page4");

const totalCostValue = document.getElementById("total-cost-value");

const totalDuration = document.getElementById("total-duration");

monthlyValue = [9, 12, 15];
yearlyValue = [90, 120, 150];

serviceMonthlyValue = [1, 2, 2];
serviceYearlyValue = [10, 20, 20];

function page1Active() {
  navNum1Background.style.backgroundColor = " hsl(206, 94%, 87%)";
  navNum1.style.color = "hsl(213, 96%, 18%)";
}
function page2Active() {
  navNum2Background.style.backgroundColor = " hsl(206, 94%, 87%)";
  navNum2.style.color = "hsl(213, 96%, 18%)";
}
function page3Active() {
  navNum3Background.style.backgroundColor = " hsl(206, 94%, 87%)";
  navNum3.style.color = "hsl(213, 96%, 18%)";
}
function page4Active() {
  navNum4Background.style.backgroundColor = " hsl(206, 94%, 87%)";
  navNum4.style.color = "hsl(213, 96%, 18%)";
}

function page1Inactive() {
  navNum1Background.style.backgroundColor = "transparent";
  navNum1.style.color = "#fff";
}
function page2Inactive() {
  navNum2Background.style.backgroundColor = "transparent";
  navNum2.style.color = "#fff";
}
function page3Inactive() {
  navNum3Background.style.backgroundColor = "transparent";
  navNum3.style.color = "#fff";
}
function page4Inactive() {
  navNum4Background.style.backgroundColor = "transparent";
  navNum4.style.color = "#fff";
}

function goToPage1() {
  sec1.classList.remove("hidden");
  sec2.classList.add("hidden");
  sec3.classList.add("hidden");
  sec4.classList.add("hidden");
  // window.location.reload();
}

function goToPage2() {
  sec1.classList.add("hidden");
  sec2.classList.remove("hidden");
  sec3.classList.add("hidden");
  sec4.classList.add("hidden");
  sec5.classList.add("hidden");
  // window.location.reload();
}

function goToPage3() {
  sec1.classList.add("hidden");
  sec2.classList.add("hidden");
  sec3.classList.remove("hidden");
  sec4.classList.add("hidden");
  sec5.classList.add("hidden");
  // window.location.reload();
}

function goToPage4() {
  sec1.classList.add("hidden");
  sec2.classList.add("hidden");
  sec3.classList.add("hidden");
  sec4.classList.remove("hidden");
  sec5.classList.add("hidden");
  // window.location.reload();
}

function goToPage5() {
  sec1.classList.add("hidden");
  sec2.classList.add("hidden");
  sec3.classList.add("hidden");
  sec4.classList.add("hidden");
  sec5.classList.remove("hidden");
}
// EMAIL VALIDATION
function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailInput.value.match(emailPattern)) {
    emailErrorMsg.textContent = "Please enter a valid email address";
    emailInput.style.borderColor = "hsl(354, 84%, 57%)";
    return false;
  }
  emailErrorMsg.textContent = "";
  emailInput.style.borderColor = "";
  return true;
}

// NUMBER VALIDATION
function validateNumber() {
  if (phoneInput.value.length !== 10 && phoneInput.value.length !== 11) {
    phoneErrorMsg.textContent = "Please enter a valid phone number";
    phoneInput.style.borderColor = "hsl(354, 84%, 57%)";
    return false;
  }
  phoneErrorMsg.textContent = "";
  phoneInput.style.borderColor = "";
  return true;
}

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear any previous error messages
  nameErrorMsg.textContent = "";
  emailErrorMsg.textContent = "";
  phoneErrorMsg.textContent = "";
  nameInput.style.borderColor = "";
  emailInput.style.borderColor = "";
  phoneInput.style.borderColor = "";

  // Name verification
  if (!nameInput.value) {
    nameErrorMsg.textContent = "This field is required";
    nameInput.style.borderColor = "hsl(354, 84%, 57%)";
    return;
  }

  // Email verification
  if (!emailInput.value) {
    emailErrorMsg.textContent = "This field is required";
    emailInput.style.borderColor = "hsl(354, 84%, 57%)";
    return;
  } else if (!validateEmail()) {
    return;
  }

  // Phone number verification
  if (!phoneInput.value) {
    phoneErrorMsg.textContent = "This field is required";
    phoneInput.style.borderColor = "hsl(354, 84%, 57%)";
    return;
  } else if (!validateNumber()) {
    return;
  }

  //To go to page 2
  page1Inactive();
  page2Active();

  sec1.classList.add("hidden");
  sec2.classList.remove("hidden");
});

//To go back to page 1 from page 2
prevButton1.addEventListener("click", () => {
  goToPage1();
  page1Active();
  page2Inactive();
});

// SECTION 2 ###########################################################################
// SECTION 2 ###########################################################################
// SECTION 2 ###########################################################################
// SECTION 2 ###########################################################################

const paymentBack1 = document.getElementById("payment-plan-1");
const paymentBack2 = document.getElementById("payment-plan-2");
const paymentBack3 = document.getElementById("payment-plan-3");

const paymentPrice1 = document.getElementById("payment-price-1");
const paymentPrice2 = document.getElementById("payment-price-2");
const paymentPrice3 = document.getElementById("payment-price-3");

const toggleSwitch = document.getElementById("toggleSwitch");
const toggleStatus1 = document.getElementById("toggleStatus1");
const toggleStatus2 = document.getElementById("toggleStatus2");

const discounts = document.querySelectorAll(".discount");

// TO CHANGE THE PAYMENT BACKGROUND WHEN CLICKED
let paymentBackState = "";

paymentBack1.addEventListener("click", () => {
  paymentBack1.style.backgroundColor = "hsla(229, 96%, 91%, 0.242)";
  paymentBack2.style.backgroundColor = "transparent";
  paymentBack3.style.backgroundColor = "transparent";

  paymentBack1.style.borderColor = "hsl(243, 100%, 62%)";
  paymentBack2.style.borderColor = "";
  paymentBack3.style.borderColor = "";

  paymentBackState = 1;
  console.log(paymentBackState);
});

paymentBack2.addEventListener("click", () => {
  paymentBack1.style.backgroundColor = "transparent";
  paymentBack2.style.backgroundColor = "hsla(229, 96%, 91%, 0.242)";
  paymentBack3.style.backgroundColor = "transparent";

  paymentBack1.style.borderColor = "";
  paymentBack2.style.borderColor = "hsl(243, 100%, 62%)";
  paymentBack3.style.borderColor = "";

  paymentBackState = 2;
  console.log(paymentBackState);
});

paymentBack3.addEventListener("click", () => {
  paymentBack1.style.backgroundColor = "transparent";
  paymentBack2.style.backgroundColor = "transparent";
  paymentBack3.style.backgroundColor = "hsla(229, 96%, 91%, 0.242)";

  paymentBack1.style.borderColor = "";
  paymentBack2.style.borderColor = "";
  paymentBack3.style.borderColor = "hsl(243, 100%, 62%)";

  paymentBackState = 3;
  console.log(paymentBackState);
});

// TO CHANGE THE PRICE VALUES WHEN THE DURATION IS CHANGED(YEARLY, MONTHLY)

toggleSwitch.addEventListener("change", () => {
  // CHECKED
  if (toggleSwitch.checked) {
    toggleStatus2.style.color = "hsl(213, 96%, 18%)";
    toggleStatus1.style.color = "";

    paymentPrice1.textContent = `$${yearlyValue[0]}/yr`;
    paymentPrice2.textContent = `$${yearlyValue[1]}/yr`;
    paymentPrice3.textContent = `$${yearlyValue[2]}/yr`;

    discounts.forEach((discount) => {
      discount.classList.toggle("hidden");
      // console.log("checked");
    });
  } else {
    // UNCHECKED
    toggleStatus1.style.color = "hsl(213, 96%, 18%)";
    toggleStatus2.style.color = "";

    paymentPrice1.textContent = `$${monthlyValue[0]}/mo`;
    paymentPrice2.textContent = `$${monthlyValue[1]}/mo`;
    paymentPrice3.textContent = `$${monthlyValue[2]}/mo`;

    discounts.forEach((discount) => {
      discount.classList.toggle("hidden");
      // console.log("dog");
    });
  }
});

//To go to page 3
nextButton2.addEventListener("click", () => {
  if (paymentBackState) {
    console.log("ant");
    goToPage3();
    page3Active();
    page2Inactive();
  }
});

//To go back to page 2 from page 3
prevButton2.addEventListener("click", () => {
  goToPage2();
  page3Inactive();
  page2Active();
});

// SECTION 3 ###########################################################################
// SECTION 3 ###########################################################################
// SECTION 3 ###########################################################################
// SECTION 3 ###########################################################################

const serviceBack1 = document.getElementById("service-1");
const serviceBack2 = document.getElementById("service-2");
const serviceBack3 = document.getElementById("service-3");

const serviceCheck1 = document.getElementById("checkbox-1");
const serviceCheck2 = document.getElementById("checkbox-2");
const serviceCheck3 = document.getElementById("checkbox-3");

const servicePrice1 = document.getElementById("service-price-1");
const servicePrice2 = document.getElementById("service-price-2");
const servicePrice3 = document.getElementById("service-price-3");

nextButton2.addEventListener("click", () => {
  if (!toggleSwitch.checked) {
    servicePrice1.textContent = `+$${serviceMonthlyValue[0]}/mo`;
    servicePrice2.textContent = `+$${serviceMonthlyValue[1]}/mo`;
    servicePrice3.textContent = `+$${serviceMonthlyValue[2]}/mo`;
  } else {
    servicePrice1.textContent = `+$${serviceYearlyValue[0]}/yr`;
    servicePrice2.textContent = `+$${serviceYearlyValue[1]}/yr`;
    servicePrice3.textContent = `+$${serviceYearlyValue[2]}/yr`;
  }
});

serviceCheck1.addEventListener("change", () => {
  if (serviceCheck1.checked) {
    serviceBack1.style.backgroundColor = "hsla(229, 96%, 91%, 0.242)";
    serviceBack1.style.borderColor = "hsl(243, 100%, 62%)";
  } else {
    serviceBack1.style.backgroundColor = "transparent";
    serviceBack1.style.borderColor = "";
  }
});

serviceCheck2.addEventListener("change", () => {
  if (serviceCheck2.checked) {
    serviceBack2.style.backgroundColor = "hsla(229, 96%, 91%, 0.242)";
    serviceBack2.style.borderColor = "hsl(243, 100%, 62%)";
  } else {
    serviceBack2.style.backgroundColor = "transparent";
    serviceBack2.style.borderColor = "";
  }
});

serviceCheck3.addEventListener("change", () => {
  if (serviceCheck3.checked) {
    serviceBack3.style.backgroundColor = "hsla(229, 96%, 91%, 0.242)";
    serviceBack3.style.borderColor = "hsl(243, 100%, 62%)";
  } else {
    serviceBack3.style.backgroundColor = "transparent";
    serviceBack3.style.borderColor = "";
  }
});
// To go to page 4
nextButton3.addEventListener("click", () => {
  if (serviceCheck1.checked || serviceCheck2.checked || serviceCheck3.checked) {
    // console.log("call");
    goToPage4();
    page4Active();
    page3Inactive();
  }
});

// To go back to page 3 from page 4
prevButton3.addEventListener("click", () => {
  goToPage3();
  page3Active();
  page4Inactive();
});

// SECTION 4 ###########################################################################
// SECTION 4 ###########################################################################
// SECTION 4 ###########################################################################
// SECTION 4 ###########################################################################

const changePlanDuration = document.getElementById("change-plan-duration");
const durationValue = document.getElementById("duration");
const arcadeDurationCost = document.getElementById("arcade-duration-cost");

const serviceCost1 = document.getElementById("service-cost-1");
const serviceCost2 = document.getElementById("service-cost-2");
const serviceCost3 = document.getElementById("service-cost-3");

const onlineServiceCostSlot = document.getElementById("online-service-cost");
const largerStorageCostSlot = document.getElementById("larger-storage-cost");
const customizableProfileCostSlot = document.getElementById(
  "customizable-profile-cost"
);

changePlanDuration.addEventListener("click", () => {
  goToPage2();
  page2Active();
  page4Inactive();
});

nextButton3.addEventListener("click", () => {
  if (paymentBackState === 1 && !toggleSwitch.checked) {
    arcadeDurationCost.textContent = `$${monthlyValue[0]}/mo`;
    durationValue.textContent = "Monthly";
    totalDuration.textContent = "per month";
  } else if (paymentBackState === 1 && toggleSwitch.checked) {
    arcadeDurationCost.textContent = `$${yearlyValue[0]}/yr`;

    durationValue.textContent = "Yearly";
    totalDuration.textContent = "per year";
  }

  if (paymentBackState === 2 && !toggleSwitch.checked) {
    arcadeDurationCost.textContent = `$${monthlyValue[1]}/mo`;
    durationValue.textContent = "Monthly";
    totalDuration.textContent = "per month";
  } else if (paymentBackState === 2 && toggleSwitch.checked) {
    arcadeDurationCost.textContent = `$${yearlyValue[1]}/yr`;
    durationValue.textContent = "Yearly";
    totalDuration.textContent = "per year";
  }

  if (paymentBackState === 3 && !toggleSwitch.checked) {
    arcadeDurationCost.textContent = `$${monthlyValue[2]}/mo`;
    durationValue.textContent = "Monthly";
    totalDuration.textContent = "per month";
  } else if (paymentBackState === 3 && toggleSwitch.checked) {
    arcadeDurationCost.textContent = `$${yearlyValue[2]}/yr`;
    durationValue.textContent = "Yearly";
    totalDuration.textContent = "per year";
  }
});

nextButton3.addEventListener("click", () => {
  //IF THE DURATION IS MONTHLY

  if (serviceCheck1.checked && !toggleSwitch.checked) {
    serviceCost1.classList.remove("hidden");
    onlineServiceCostSlot.textContent = `+$${serviceMonthlyValue[0]}/mo`;
    // console.log("checked");
  } else if (!serviceCheck1.checked) {
    serviceCost1.classList.add("hidden");
  }

  if (serviceCheck2.checked && !toggleSwitch.checked) {
    serviceCost2.classList.remove("hidden");
    largerStorageCostSlot.textContent = `+$${serviceMonthlyValue[1]}/mo`;
    // console.log("checked");
  } else if (!serviceCheck2.checked) {
    serviceCost2.classList.add("hidden");
  }

  if (serviceCheck3.checked && !toggleSwitch.checked) {
    serviceCost3.classList.remove("hidden");
    customizableProfileCostSlot.textContent = `+$${serviceMonthlyValue[2]}/mo`;
    // console.log("checked");
  } else if (!serviceCheck3.checked) {
    serviceCost3.classList.add("hidden");
  }

  //IF THE DURATION IS YEARLY

  if (serviceCheck1.checked && toggleSwitch.checked) {
    serviceCost1.classList.remove("hidden");
    onlineServiceCostSlot.textContent = `+$${serviceYearlyValue[0]}/yr`;
    // console.log("checked");
  } else if (!serviceCheck1.checked) {
    serviceCost1.classList.add("hidden");
  }

  if (serviceCheck2.checked && toggleSwitch.checked) {
    serviceCost2.classList.remove("hidden");
    largerStorageCostSlot.textContent = `+$${serviceYearlyValue[1]}/yr`;
    // console.log("checked");
  } else if (!serviceCheck2.checked) {
    serviceCost2.classList.add("hidden");
  }

  if (serviceCheck3.checked && toggleSwitch.checked) {
    serviceCost3.classList.remove("hidden");
    customizableProfileCostSlot.textContent = `+$${serviceYearlyValue[2]}/yr`;
    // console.log("checked");
  } else if (!serviceCheck3.checked) {
    serviceCost3.classList.add("hidden");
  }
});

// FOR ARCADE
// FOR ARCADE
// FOR ARCADE
// FOR ARCADE

nextButton3.addEventListener("click", () => {
  // MONTHLY
  if (
    paymentBackState === 1 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[0] + serviceMonthlyValue[0]) + "/mo";
  }

  if (
    paymentBackState === 1 &&
    !toggleSwitch.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[0] + serviceMonthlyValue[1]) + "/mo";
  }

  if (
    paymentBackState === 1 &&
    !toggleSwitch.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[0] + serviceMonthlyValue[2]) + "/mo";
  }

  if (
    paymentBackState === 1 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[0] + serviceMonthlyValue[0] + serviceMonthlyValue[1]) +
      "/mo";
  }

  if (
    paymentBackState === 1 &&
    !toggleSwitch.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[0] + serviceMonthlyValue[1] + serviceMonthlyValue[2]) +
      "/mo";
  }

  if (
    paymentBackState === 1 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[0] + serviceMonthlyValue[0] + serviceMonthlyValue[2]) +
      "/mo";
  }

  if (
    paymentBackState === 1 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[0] +
        serviceMonthlyValue[0] +
        serviceMonthlyValue[1] +
        serviceMonthlyValue[2]) +
      "/mo";
  }

  // YEARLY

  if (paymentBackState === 1 && toggleSwitch.checked && serviceCheck1.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[0] + serviceYearlyValue[0]) + "/yr";
  }

  if (paymentBackState === 1 && toggleSwitch.checked && serviceCheck2.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[0] + serviceYearlyValue[1]) + "/yr";
  }

  if (paymentBackState === 1 && toggleSwitch.checked && serviceCheck3.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[0] + serviceYearlyValue[2]) + "/yr";
  }

  if (
    paymentBackState === 1 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[0] + serviceYearlyValue[0] + serviceYearlyValue[1]) +
      "/yr";
  }

  if (
    paymentBackState === 1 &&
    toggleSwitch.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[0] + serviceYearlyValue[1] + serviceYearlyValue[2]) +
      "/yr";
  }

  if (
    paymentBackState === 1 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[0] + serviceYearlyValue[0] + serviceYearlyValue[2]) +
      "/yr";
  }

  if (
    paymentBackState === 1 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[0] +
        serviceYearlyValue[0] +
        serviceYearlyValue[1] +
        serviceYearlyValue[2]) +
      "/yr";
  }
});

// ADVANCED
// ADVANCED
// ADVANCED
// ADVANCED

nextButton3.addEventListener("click", () => {
  // MONTHLY
  if (
    paymentBackState === 2 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[1] + serviceMonthlyValue[0]) + "/mo";
  }

  if (
    paymentBackState === 2 &&
    !toggleSwitch.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[1] + serviceMonthlyValue[1]) + "/mo";
  }

  if (
    paymentBackState === 2 &&
    !toggleSwitch.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[1] + serviceMonthlyValue[2]) + "/mo";
  }

  if (
    paymentBackState === 2 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[1] + serviceMonthlyValue[0] + serviceMonthlyValue[1]) +
      "/mo";
  }

  if (
    paymentBackState === 2 &&
    !toggleSwitch.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[1] + serviceMonthlyValue[1] + serviceMonthlyValue[2]) +
      "/mo";
  }

  if (
    paymentBackState === 2 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[1] + serviceMonthlyValue[0] + serviceMonthlyValue[2]) +
      "/mo";
  }

  if (
    paymentBackState === 2 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[1] +
        serviceMonthlyValue[0] +
        serviceMonthlyValue[1] +
        serviceMonthlyValue[2]) +
      "/mo";
  }

  // YEARLY

  if (paymentBackState === 2 && toggleSwitch.checked && serviceCheck1.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[1] + serviceYearlyValue[0]) + "/yr";
  }

  if (paymentBackState === 2 && toggleSwitch.checked && serviceCheck2.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[1] + serviceYearlyValue[1]) + "/yr";
  }

  if (paymentBackState === 2 && toggleSwitch.checked && serviceCheck3.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[1] + serviceYearlyValue[2]) + "/yr";
  }

  if (
    paymentBackState === 2 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[1] + serviceYearlyValue[0] + serviceYearlyValue[1]) +
      "/yr";
  }

  if (
    paymentBackState === 2 &&
    toggleSwitch.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[1] + serviceYearlyValue[1] + serviceYearlyValue[2]) +
      "/yr";
  }

  if (
    paymentBackState === 2 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[1] + serviceYearlyValue[0] + serviceYearlyValue[2]) +
      "/yr";
  }

  if (
    paymentBackState === 2 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[1] +
        serviceYearlyValue[0] +
        serviceYearlyValue[1] +
        serviceYearlyValue[2]) +
      "/yr";
  }
});

// PRO
// PRO
// PRO
// PRO

nextButton3.addEventListener("click", () => {
  // MONTHLY
  if (
    paymentBackState === 3 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[2] + serviceMonthlyValue[0]) + "/mo";
  }

  if (
    paymentBackState === 3 &&
    !toggleSwitch.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[2] + serviceMonthlyValue[1]) + "/mo";
  }

  if (
    paymentBackState === 3 &&
    !toggleSwitch.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" + (monthlyValue[2] + serviceMonthlyValue[2]) + "/mo";
  }

  if (
    paymentBackState === 3 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[2] + serviceMonthlyValue[0] + serviceMonthlyValue[1]) +
      "/mo";
  }

  if (
    paymentBackState === 3 &&
    !toggleSwitch.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[2] + serviceMonthlyValue[1] + serviceMonthlyValue[2]) +
      "/mo";
  }

  if (
    paymentBackState === 3 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[2] + serviceMonthlyValue[0] + serviceMonthlyValue[2]) +
      "/mo";
  }

  if (
    paymentBackState === 3 &&
    !toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (monthlyValue[2] +
        serviceMonthlyValue[0] +
        serviceMonthlyValue[1] +
        serviceMonthlyValue[2]) +
      "/mo";
  }

  // YEARLY

  if (paymentBackState === 3 && toggleSwitch.checked && serviceCheck1.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[2] + serviceYearlyValue[0]) + "/yr";
  }

  if (paymentBackState === 3 && toggleSwitch.checked && serviceCheck2.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[2] + serviceYearlyValue[1]) + "/yr";
  }

  if (paymentBackState === 3 && toggleSwitch.checked && serviceCheck3.checked) {
    totalCostValue.textContent =
      "+$" + (yearlyValue[2] + serviceYearlyValue[2]) + "/yr";
  }

  if (
    paymentBackState === 3 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[2] + serviceYearlyValue[0] + serviceYearlyValue[1]) +
      "/yr";
  }

  if (
    paymentBackState === 3 &&
    toggleSwitch.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[2] + serviceYearlyValue[1] + serviceYearlyValue[2]) +
      "/yr";
  }

  if (
    paymentBackState === 3 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[2] + serviceYearlyValue[0] + serviceYearlyValue[2]) +
      "/yr";
  }

  if (
    paymentBackState === 3 &&
    toggleSwitch.checked &&
    serviceCheck1.checked &&
    serviceCheck2.checked &&
    serviceCheck3.checked
  ) {
    totalCostValue.textContent =
      "+$" +
      (yearlyValue[2] +
        serviceYearlyValue[0] +
        serviceYearlyValue[1] +
        serviceYearlyValue[2]) +
      "/yr";
  }
});

// SECTION 5 ###########################################################################
// SECTION 5 ###########################################################################
// SECTION 5 ###########################################################################
// SECTION 5 ###########################################################################

const confirmBtn = document.getElementById("confirm");

confirmBtn.addEventListener("click", () => {
  goToPage5();
});
