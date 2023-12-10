window.addEventListener("DOMContentLoaded", function () {
  const calculatorSection = document.querySelector(".express-calculator");

  // rage slider
  const sliderInput = calculatorSection.querySelector(".express-calculator__slider");
  const sliderRangeinner = calculatorSection.querySelector(".express-calculator__rangeinner");
  const sliderNumbers = calculatorSection.querySelectorAll(".slider-line__num");
  const rangeInfo = calculatorSection.querySelector(".express-calculator__range-info");
  const rangeThumb = calculatorSection.querySelector(".express-calculator__thumb");

  // callback
  const calculatorcallbackForm = calculatorSection.querySelector("#calculator-callback");
  const calculatorCallbackEmail = calculatorSection.querySelector("#calculator-callback-email");
  const calculatorCallbackName = calculatorSection.querySelector("#calculator-callback-name");
  const calculatorCallbackPhone = calculatorSection.querySelector("#calculator-callback-phone");

  // modal 
  const successModal = document.querySelector(".success-modal");
  const preloader = document.querySelector(".preloader");

  // calculator
  const taxSystems = calculatorSection.querySelector("#tax-system").querySelectorAll("input");
  const zeroReporting = calculatorSection.querySelector(".zero-reporting");
  const basicTariff = calculatorSection.querySelector(".basic-tariff");
  const employeesNumber = calculatorSection.querySelector("#employees");

  function calculatorHandler(e) {
    if (e.target.value === "УСН 6%") {

      zeroReporting.textContent = "5000";
    }

    if (e.target.value === "УСН 15%") {

      zeroReporting.textContent = "7500";
    }

    if (e.target.value === "ОСН") {

      zeroReporting.textContent = "9000";
    }

    if (e.target.id === "calculator-range") {
      basicTariff.textContent = (parseInt(calculatorSection.querySelector("#tax-system").querySelector(".--active").dataset.ratio) * e.target.value) + (Math.abs(employeesNumber.value) * 500);
    }

    if (e.target.id === "employees") {
      basicTariff.textContent = (parseInt(calculatorSection.querySelector("#tax-system").querySelector(".--active").dataset.ratio) * sliderInput.value) + (Math.abs(e.target.value) * 500);
    }
  }

  function taxSystemClickHandler(e) {
    taxSystems.forEach((item) => {
      item.classList.remove("--active");
    })

    e.target.classList.add("--active");

    basicTariff.textContent = (parseInt(e.target.dataset.ratio) * sliderInput.value) + (Math.abs(employeesNumber.value) * 500);
  }

  function employeesHandler(e) {
    if (e.target.value < 0) {
      employeesNumber.value = Math.abs(e.target.value);
    }
  }

  function showPreloader() {
    preloader.classList.add("preloader_active");
  }

  function hidePreloader() {
    preloader.classList.remove("preloader_active");
  }

  function openSuccessModal() {
    successModal.classList.add("modal_opened");

    basicTariff.textContent = "6000";
    zeroReporting.textContent = "5000";

    employeesNumber.value = 1;

    taxSystems.forEach((item) => {
      item.classList.remove("--active");
      item.checked = false;
    })

    calculatorSection.querySelector("#tax-system").querySelector("#system-1").classList.add("--active");
    calculatorSection.querySelector("#tax-system").querySelector("#system-1").checked = true;

    sliderInput.value = 20;
    rangeInfo.textContent = `20`;
    rangeThumb.style.left = `10%`;
    sliderRangeinner.style.width = `90%`;

    sliderNumbers.forEach((item) => {
      if (parseInt(item.textContent) <= sliderInput.value) {
        item.classList.add("slider-line_active");
      } else {
        item.classList.remove("slider-line_active");
      }
    })
  }

  function closeSuccessModal() {
    successModal.classList.remove("modal_opened");
  }

  function sliderInputChangeHandler() {
    sliderRangeinner.style.width = `${100 - ((sliderInput.value / sliderInput.max) * 100)}%`;

    rangeInfo.textContent = `${Math.ceil(sliderInput.value)}`;
    rangeThumb.style.left = `${((sliderInput.value / sliderInput.max) * 100)}%`;

    if (sliderInput.value < 100) {
      sliderInput.classList.add("express-calculator__slider_left");
    } else {
      sliderInput.classList.add("express-calculator__slider_right");
    }

    if (Math.ceil(sliderInput.value) < 10) {
      sliderInput.classList.remove("express-calculator__slider_right");
    }

    if (Math.ceil(sliderInput.value) > 90) {
      sliderInput.classList.remove("express-calculator__slider_left");
    }

    sliderNumbers.forEach((item) => {
      if (parseInt(item.textContent) <= sliderInput.value) {
        item.classList.add("slider-line_active");
      } else {
        item.classList.remove("slider-line_active");
      }
    })
  }

  sliderInput.addEventListener("change", (e) => {
    sliderInputChangeHandler();
    calculatorHandler(e);
  });

  sliderInput.addEventListener("input", (e) => {
    sliderInputChangeHandler();
    calculatorHandler(e);
  });

  sliderInput.addEventListener("click", (e) => {
    sliderInputChangeHandler();
    calculatorHandler(e);
  });

  // Валидация 

  const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  const nameRegex = /^[А-Яа-яa-zA-Z- ]{1,30}$/;
  const emailRegex = /^(.+)@((.+)+\.)+([\w]{2,})$/i;

  const telInputs = document.querySelectorAll(".phone-input");
  const nameInputs = document.querySelectorAll(".name-input");
  const emailInputs = document.querySelectorAll(".email-input");

  var getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  }

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  }

  var onPhoneInput = function (e) {

    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (input.value.length <= 18) {
      if (input.value.length === 18 && !regexPhone.test(input.value)) {
        input.classList.add("input-invalid");
      }

      if (regexPhone.test(input.value)) {
        input.classList.remove("input-invalid");
        input.classList.add("input-valid");
      } else {
        if (input.classList.contains("input-valid")) {
          input.classList.remove("input-valid");
          input.classList.add("input-invalid");
        }
      }
    }

    if (!inputNumbersValue) {
      return input.value = "";
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9") inputNumbersValue = "+7" + inputNumbersValue;
      var firstSymbols = (inputNumbersValue[0] == "8") ? "+7" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  }

  var onPhoneKeyDown = function (e) {
    var inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  }

  telInputs.forEach((telInput) => {
    telInput.addEventListener('keydown', onPhoneKeyDown);
    telInput.addEventListener('input', onPhoneInput, false);
    telInput.addEventListener('paste', onPhonePaste, false);

    telInput.value = "+7";
  })

  nameInputs.forEach((nameInput) => {
    nameInput.addEventListener("input", (e) => {
      if (nameRegex.test(e.target.value)) {
        nameInput.classList.remove("input-invalid");
        nameInput.classList.add("input-valid");
      } else {
        if (nameInput.classList.contains("input-valid")) {
          nameInput.classList.remove("input-valid");
          nameInput.classList.add("input-invalid");
        }
      }
    })
  })

  emailInputs.forEach((emailInput) => {
    emailInput.addEventListener("input", (e) => {
      if (emailRegex.test(e.target.value)) {
        emailInput.classList.remove("input-invalid");
        emailInput.classList.add("input-valid");
      } else {
        if (emailInput.classList.contains("input-valid")) {
          emailInput.classList.remove("input-valid");
          emailInput.classList.add("input-invalid");
        }
      }
    })
  })

  function handleCalculatorSubmit(e) {
    e.preventDefault();

    if (calculatorCallbackEmail.classList.contains("input-valid") && calculatorCallbackName.classList.contains("input-valid") && calculatorCallbackPhone.classList.contains("input-valid")) {

      showPreloader();

      let data = `email=${calculatorCallbackEmail.value}&name=${calculatorCallbackName.value}&phone=${calculatorCallbackPhone.value}&tax-system=${parseInt(calculatorSection.querySelector("#tax-system").querySelector(".--active").dataset.ratio)}&transactions-number=${sliderInput.value}&employees-number=${employeesNumber.value}`;

      const xhr = new XMLHttpRequest();

      xhr.open('POST', '../ajax.php', true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8');

      xhr.send(data);

      xhr.onload = () => {
        if (xhr.status >= 400) {
          console.log(xhr.status);
          return;
        };

        hidePreloader();
        openSuccessModal();

        calculatorCallbackEmail.value = "";
        calculatorCallbackName.value = "";
        calculatorCallbackPhone.value = "+7";

        calculatorCallbackEmail.classList.remove("input-valid");
        calculatorCallbackName.classList.remove("input-valid");
        calculatorCallbackPhone.classList.remove("input-valid");
      }

      xhr.onprogress = () => {
        showPreloader();
      }

      xhr.onerror = () => {
        hidePreloader();
        console.log(xhr.response)
      }
    }

    if (!calculatorCallbackEmail.classList.contains("input-valid")) {
      calculatorCallbackEmail.classList.remove("input-valid");
      calculatorCallbackEmail.classList.add("input-invalid");
    }

    if (calculatorCallbackEmail.classList.contains("input-valid")) {
      calculatorCallbackEmail.classList.remove("input-invalid");
      calculatorCallbackEmail.classList.add("input-valid");
    }

    if (!calculatorCallbackName.classList.contains("input-valid")) {
      calculatorCallbackName.classList.remove("input-valid");
      calculatorCallbackName.classList.add("input-invalid");
    }

    if (calculatorCallbackName.classList.contains("input-valid")) {
      calculatorCallbackName.classList.remove("input-invalid");
      calculatorCallbackName.classList.add("input-valid");
    }

    if (!calculatorCallbackPhone.classList.contains("input-valid")) {
      calculatorCallbackPhone.classList.remove("input-valid");
      calculatorCallbackPhone.classList.add("input-invalid");
    }

    if (calculatorCallbackPhone.classList.contains("input-valid")) {
      calculatorCallbackPhone.classList.remove("input-invalid");
      calculatorCallbackPhone.classList.add("input-valid");
    }
  }

  calculatorcallbackForm.addEventListener("submit", (e) => handleCalculatorSubmit(e));

  successModal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal_opened")) {
      closeSuccessModal();
    }
    if (e.target.classList.contains("modal-close")) {
      closeSuccessModal();
    }
  })

  taxSystems.forEach((item) => {
    item.addEventListener("click", (e) => {
      calculatorHandler(e);
      taxSystemClickHandler(e);
    })
  })

  employeesNumber.addEventListener("input", (e) => {
    calculatorHandler(e);
    employeesHandler(e);
  })
})