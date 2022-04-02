function BMI(height, weight) {
  const meterHeight = height / 100;
  const result = weight / (meterHeight * meterHeight);
  return result;
}
