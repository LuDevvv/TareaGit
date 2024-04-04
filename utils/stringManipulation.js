// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to truncate a string and add ellipses if it is too long
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}
