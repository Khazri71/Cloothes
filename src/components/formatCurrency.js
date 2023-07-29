const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};
export default formatCurrency;
