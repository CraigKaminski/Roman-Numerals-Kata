describe('The Arabic number to Roman numeral converter', function() {
  describe('when given a number less than 10', function() {
    var romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    for (var i = 0; i < romanNumerals.length; i++) {
      var arabicNumber = i + 1;
      var romanNumeral = romanNumerals[i];
      it('returns ' + romanNumeral + ' when given '+ arabicNumber, function() {
        expect(arabicToRoman(arabicNumber)).toBe(romanNumeral);
      });
    }
  });

  describe('when given numbers less than 100 that are multiples of 10', function() {
    var romanNumerals = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    for (var i = 0; i < romanNumerals.length; i++) {
      var arabicNumber = (i + 1) * 10;
      var romanNumeral = romanNumerals[i];
      it('returns ' + romanNumeral + ' when given '+ arabicNumber, function() {
        expect(arabicToRoman(arabicNumber)).toBe(romanNumeral);
      });
    }
  });

  describe('when given numbers less than 1000 that are multiples of 100', function() {
    var romanNumerals = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    for (var i = 0; i < romanNumerals.length; i++) {
      var arabicNumber = (i + 1) * 100;
      var romanNumeral = romanNumerals[i];
      it('returns ' + romanNumeral + ' when given '+ arabicNumber, function() {
        expect(arabicToRoman(arabicNumber)).toBe(romanNumeral);
      });
    }
  });

  describe('when given numbers less than 4000 that are multiples of 1000', function() {
    var romanNumerals = ['M', 'MM', 'MMM'];
    for (var i = 0; i < romanNumerals.length; i++) {
      var arabicNumber = (i + 1) * 1000;
      var romanNumeral = romanNumerals[i];
      it('returns ' + romanNumeral + ' when given '+ arabicNumber, function() {
        expect(arabicToRoman(arabicNumber)).toBe(romanNumeral);
      });
    }
  });

  describe('when given a number between 10 and 100 that is not a multiple of 10', function() {
    it('returns XXXVI when given 36', function() {
      expect(arabicToRoman(36)).toBe('XXXVI');
    });
  });

  describe('when given a number between 100 and 1000 that is not a multiple of 100', function() {
    it('returns DCCLIV when given 754', function() {
      expect(arabicToRoman(754)).toBe('DCCLIV');
    });

    it('returns CCXXX when given 230', function() {
      expect(arabicToRoman(230)).toBe('CCXXX');
    });
  });

  describe('when given a number less than 4000 that is not a multiple of 1000', function() {
    it('returns MMDCCLIV when given 2754', function() {
      expect(arabicToRoman(2754)).toBe('MMDCCLIV');
    });

    it('returns MCCXXX when given 1230', function() {
      expect(arabicToRoman(1230)).toBe('MCCXXX');
    });

    it('returns MMMCM when given 3900', function() {
      expect(arabicToRoman(3900)).toBe('MMMCM');
    });
  });

  describe('when given a number greater than or equal to 4000', function() {
    it('throws an "Exceeded Max Value" error', function() {
      expect(function() {arabicToRoman(4000)}).toThrowError('Exceeded Max Value');
    });
  });
});

describe('The Roman numeral to Arabic number converter', function() {
  describe('when given Roman numerals between 0 and 10', function() {
    var romanNumerals = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ];
    for (var i = 0; i < romanNumerals.length; i++) {
      var romanNumeral = romanNumerals[i];
      var arabicNumber = i + 1;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral, function() {
        expect(romanToArabic(romanNumeral)).toBe(arabicNumber);
      });
    }
  });

  describe('when given Roman numerals less than 100 that are multiples of 10', function() {
    var romanNumerals = [ 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC' ];
    for (var i = 0; i < romanNumerals.length; i++) {
      var romanNumeral = romanNumerals[i];
      var arabicNumber = (i + 1) * 10;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral, function() {
        expect(romanToArabic(romanNumeral)).toBe(arabicNumber);
      });
    }
  });

  describe('when given Roman numerals less than 1000 that are multiples of 100', function() {
    var romanNumerals = [ 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM' ];
    for (var i = 0; i < romanNumerals.length; i++) {
      var romanNumeral = romanNumerals[i];
      var arabicNumber = (i + 1) * 100;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral, function() {
        expect(romanToArabic(romanNumeral)).toBe(arabicNumber);
      });
    }
  });

  describe('when given Roman numerals less than 4000 that are multiples of 1000', function() {
    var romanNumerals = [ 'M', 'MM', 'MMM' ];
    for (var i = 0; i < romanNumerals.length; i++) {
      var romanNumeral = romanNumerals[i];
      var arabicNumber = (i + 1) * 1000;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral, function() {
        expect(romanToArabic(romanNumeral)).toBe(arabicNumber);
      });
    }
  });

  describe('when given a Roman numeral that is between 10 and 4000 and not a multiple of 10', function() {
    it('returns 73 when given LXXIII', function() {
      expect(romanToArabic('LXXIII')).toBe(73);
    });

    it('returns 490 when given CDXC', function() {
      expect(romanToArabic('CDXC')).toBe(490);
    });
  });

  describe('when given an invalid Roman numeral', function() {
    it('throws an "Invalid Roman Numeral" error', function() {
      expect(function() {romanToArabic('Q')}).toThrowError('Invalid Roman Numeral');
    });
  });
});