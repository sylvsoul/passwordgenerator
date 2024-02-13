// Character sets
const charSets = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
};

// Function to prompt user for password criteria and validate input
function getPasswordOptions() {
  const length = parseInt(prompt("Enter the length of the password (8-128 characters):"), 10);
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return null;
  }
  
  const includeLower = confirm("Include lowercase letters?");
  const includeUpper = confirm("Include uppercase letters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");
  
  if (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return null;
  }
  
  return { length, includeLower, includeUpper, includeNumeric, includeSpecial };
}

// Function to generate password
function generatePassword() {
  const options = getPasswordOptions();
  if (!options) return;
  
  let validChars = '';
  if (options.includeLower) validChars += charSets.lower;
  if (options.includeUpper) validChars += charSets.upper;
  if (options.includeNumeric) validChars += charSets.numeric;
  if (options.includeSpecial) validChars += charSets.special;
  
  let password = '';
  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }
  
  return password;
}

// Function to display generated password
function displayPassword() {
  const password = generatePassword();
  if (password) {
    // Choose one of the following display options:
    alert(password); // Display in an alert
    // document.getElementById('passwordDisplay').textContent = password; // Display on the page
  }
}

// Add event listener to button
document.getElementById('generatePasswordBtn').addEventListener('click', displayPassword);
