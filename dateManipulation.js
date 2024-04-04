// Function to format a date in DD/MM/YYYY format
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months range from 0 to 11
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Function to get the number of days between two dates
function getDaysDiff(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  return Math.round(Math.abs((startDate - endDate) / oneDay));
}
