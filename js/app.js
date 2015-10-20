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

function arabicToRoman(arabicNumber) {
  if (arabicNumber >= 4000) {
    throw new RangeError('Exceeded Max Value');
  } else if (arabicNumber in arabicToRomanMap) {
    return arabicToRomanMap[arabicNumber];
  } else {
    var arabicString = arabicNumber.toString();
    var greatestPlaceValue = Number(arabicString[0] + '0'.repeat(arabicString.length - 1));
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

function romanToArabic(romanNumeral) {
  if (romanNumeral in romanToArabicMap) {
    return romanToArabicMap[romanNumeral];
  } else {
    var subRomanNumeralFound;
    var sliceEnd = 1;

    if (! (romanNumeral[0] in romanToArabicMap)) {
      throw new RangeError('Invalid Roman Numeral');
    }

    while (romanNumeral.slice(0, sliceEnd) in romanToArabicMap) {
      subRomanNumeralFound = romanNumeral.slice(0, sliceEnd);
      sliceEnd++;
    }
    var romanNumeralRemaining = romanNumeral.slice(subRomanNumeralFound.length);
    return romanToArabicMap[subRomanNumeralFound] + romanToArabic(romanNumeralRemaining);
  }
}

var arabicInput = document.getElementById('arabicNumber');
var romanInput = document.getElementById('romanNumeral');
var arabicToRomanBtn = document.getElementById('arabicToRoman');
var romanToArabicBtn = document.getElementById('romanToArabic');

arabicToRomanBtn.onclick = function() {
  try {
    romanInput.value = arabicToRoman(parseInt(arabicInput.value));
  } catch (e) {
    alert(e);
  }
};

romanToArabicBtn.onclick = function() {
  try {
    arabicInput.value = romanToArabic(romanInput.value);
  } catch (e) {
    alert(e);
  }
};