var arabicToRomanMap = {
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  2000: 'MM',
  3000: 'MMM'
};

// This function is responsible for converting Arabic numbers to Roman numerals.
function arabicToRoman(arabicNumber) {
  // We're unable to represent Roman numerals 4000 or greater. If a number that large
  // is given, throw an exception.
  if (arabicNumber >= 4000) {
    throw new RangeError('Exceeded Max Value');
  // If given number is in map, return its value.
  } else if (arabicNumber in arabicToRomanMap) {
    return arabicToRomanMap[arabicNumber];
  } else {
    // Obtain greatest place value of given number.
    var arabicString = arabicNumber.toString();
    var greatestPlaceValue = Number(arabicString[0] + '0'.repeat(arabicString.length - 1));
    // Retrieve greatest place value from map and append result of call to conversion
    // function using given number minus greatest place value as input.
    return arabicToRomanMap[greatestPlaceValue] + arabicToRoman(arabicNumber - greatestPlaceValue);
  }
}

var romanToArabicMap = {
  'I': 1,
  'II': 2,
  'III': 3,
  'IV': 4,
  'V': 5,
  'VI': 6,
  'VII': 7,
  'VIII': 8,
  'IX': 9,
  'X': 10,
  'XX': 20,
  'XXX': 30,
  'XL': 40,
  'L': 50,
  'LX': 60,
  'LXX': 70,
  'LXXX': 80,
  'XC': 90,
  'C': 100,
  'CC': 200,
  'CCC': 300,
  'CD': 400,
  'D': 500,
  'DC': 600,
  'DCC': 700,
  'DCCC': 800,
  'CM': 900,
  'M': 1000,
  'MM': 2000,
  'MMM': 3000
};

// This function is responsible for converting Roman numerals to Arabic Numbers.
function romanToArabic(romanNumeral) {
  // If given numeral is in map, return it.
  if (romanNumeral in romanToArabicMap) {
    return romanToArabicMap[romanNumeral];
  } else {
    var subRomanNumeralFound;
    var sliceEnd = 1;

    // If the first character in given numeral is not in map, throw exception.
    if (! (romanNumeral[0] in romanToArabicMap)) {
      throw new RangeError('Invalid Roman Numeral');
    }

    // Keep expanding substring of given numeral until the substring is no longer
    // found in map.
    while (romanNumeral.slice(0, sliceEnd) in romanToArabicMap) {
      subRomanNumeralFound = romanNumeral.slice(0, sliceEnd);
      sliceEnd++;
    }

    var romanNumeralRemaining = romanNumeral.slice(subRomanNumeralFound.length);
    // Retrieve substring from map and append the results of call to conversion function
    // using remainder of given numeral as input.
    return romanToArabicMap[subRomanNumeralFound] + romanToArabic(romanNumeralRemaining);
  }
}

// Retrieve some DOM elements.
var arabicInput = document.getElementById('arabicNumber');
var romanInput = document.getElementById('romanNumeral');
var arabicToRomanBtn = document.getElementById('arabicToRoman');
var romanToArabicBtn = document.getElementById('romanToArabic');

// Assign click event handler to Arabic to Roman button.
arabicToRomanBtn.onclick = function() {
  try {
    romanInput.value = arabicToRoman(parseInt(arabicInput.value));
  } catch (e) {
    alert(e);
  }
};

// Assign click event handler to Roman to Arabic button.
romanToArabicBtn.onclick = function() {
  try {
    arabicInput.value = romanToArabic(romanInput.value);
  } catch (e) {
    alert(e);
  }
};