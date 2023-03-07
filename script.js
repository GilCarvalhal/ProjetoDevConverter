const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");

function handleSubmit(e) {
  e.preventDefault();

  if (!inputValue.value || inputValue < 0) {
    alert("Informe um valor correto!");
    return;
  } else if (!selectedCurrency.value) {
    alert("Escolha uma moeda!");
    return;
  }
  converter();
}

function converter() {
  if (selectedCurrency.value === "eur") {
    valueConverted = inputValue.value * 5.51;
    result.innerHTML = valueFormatter("pt-br", "EUR");
  } else if (selectedCurrency.value === "dol") {
    valueConverted = inputValue.value * 5.18;
    result.innerHTML = valueFormatter("en-us", "USD");
  }
  inputValue.value = "";
  selectedCurrency.value = "";
}

function valueFormatter(Locale, currency) {
  const value = valueConverted.toLocaleString(`${Locale}`, {
    style: `currency`,
    currency: `${currency}`,
  });
  return `<span>🤑</span> ${value} <span>🤑</span>`;
}
