function calculateWindChill(tempC, windKmH) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmH, 0.16) +
    0.3965 * tempC * Math.pow(windKmH, 0.16)
  ).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  // Static temperature and wind
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const windchillSpan = document.getElementById("windchill");

  if (temp <= 10 && wind > 4.8) {
    const windChillValue = calculateWindChill(temp,wind)
    windchillSpan.textContent = `${windChillValue} °C`
  } else {
    windchillSpan.textContent = "N/A";
  }

  // Footer dates
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
