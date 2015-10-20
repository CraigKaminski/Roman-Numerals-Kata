describe('An arabic number', function() {
  describe('which is less than 10', function() {
    it('returns I when given 1', function() {
      var arabicNumber = 1;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('I');
    });

    it('returns II when given 2', function() {
      var arabicNumber = 2;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('II');
    });

    it('returns III when given 3', function() {
      var arabicNumber = 3;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('III');
    });

    it('returns IV when given 4', function() {
      var arabicNumber = 4;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('IV');
    });

    it('returns V when given 5', function() {
      var arabicNumber = 5;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('V');
    });

    it('returns VI when given 6', function() {
      var arabicNumber = 6;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('VI');
    });

    it('returns VII when given 7', function() {
      var arabicNumber = 7;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('VII');
    });

    it('returns VIII when given 8', function() {
      var arabicNumber = 8;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('VIII');
    });

    it('returns IX when given 9', function() {
      var arabicNumber = 9;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('IX');
    });
  });

  describe('which is a multiple of 10 less than 100', function() {
    it('returns X when given 10', function() {
      var arabicNumber = 10;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('X');
    });

    it('returns XX when given 20', function() {
      var arabicNumber = 20;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('XX');
    });

    it('returns XXX when given 30', function() {
      var arabicNumber = 30;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('XXX');
    });

    it('returns XL when given 40', function() {
      var arabicNumber = 40;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('XL');
    });

    it('returns L when given 50', function() {
      var arabicNumber = 50;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('L');
    });

    it('returns LX when given 60', function() {
      var arabicNumber = 60;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('LX');
    });

    it('returns LXX when given 70', function() {
      var arabicNumber = 70;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('LXX');
    });

    it('returns LXXX when given 80', function() {
      var arabicNumber = 80;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('LXXX');
    });

    it('returns XC when given 90', function() {
      var arabicNumber = 90;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('XC');
    });
  });

  describe('which is a multiple of 100 less than 1000', function() {
    it('returns C when given 100', function() {
      var arabicNumber = 100;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('C');
    });

    it('returns CC when given 200', function() {
      var arabicNumber = 200;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('CC');
    });

    it('returns CCC when given 300', function() {
      var arabicNumber = 300;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('CCC');
    });

    it('returns CD when given 400', function() {
      var arabicNumber = 400;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('CD');
    });

    it('returns D when given 500', function() {
      var arabicNumber = 500;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('D');
    });

    it('returns DC when given 600', function() {
      var arabicNumber = 600;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('DC');
    });

    it('returns DCC when given 700', function() {
      var arabicNumber = 700;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('DCC');
    });

    it('returns DCCC when given 800', function() {
      var arabicNumber = 800;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('DCCC');
    });

    it('returns CM when given 900', function() {
      var arabicNumber = 900;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('CM');
    });
  });

  describe('which is a multiple of 1000 less than 4000', function() {
    it('returns M when given 1000', function() {
      var arabicNumber = 1000;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('M');
    });

    it('returns MM when given 2000', function() {
      var arabicNumber = 2000;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('MM');
    });

    it('returns MMM when given 3000', function() {
      var arabicNumber = 3000;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('MMM');
    });
  });

  describe('which is not a multiple of 10 between 10 and 100', function() {
    it('returns XXXVI when given 36', function() {
      var arabicNumber = 36;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('XXXVI');
    });
  });

  describe('which is not a multiple of 100 between 100 and 1000', function() {
    it('returns DCCLIV when given 754', function() {
      var arabicNumber = 754;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('DCCLIV');
    });

    it('returns CCXXX when given 230', function() {
      var arabicNumber = 230;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('CCXXX');
    });
  });

  describe('which is not a multiple of 1000 between 1000 and 4000', function() {
    it('returns MMDCCLIV when given 2754', function() {
      var arabicNumber = 2754;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('MMDCCLIV');
    });

    it('returns MCCXXX when given 1230', function() {
      var arabicNumber = 1230;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('MCCXXX');
    });

    it('returns MMMCM when given 3900', function() {
      var arabicNumber = 3900;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('MMMCM');
    });
  });

  describe('which is greater than or equal to 4000', function() {
    it('throws an "Exceeded Max Value" error', function() {
      expect(function() {arabicToRoman(4000)}).toThrowError('Exceeded Max Value');
    });
  });
});

describe('The roman numeral to arabic number converter', function() {
  describe('when given roman numerals between 0 and 10', function() {
    var romanNumeralsOneToNine = [ 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX' ];
    for (var i = 0; i < romanNumeralsOneToNine.length; i++) {
      var romanNumeral = romanNumeralsOneToNine[i];
      var arabicNumber = i + 1;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral,
        function(romanNumeral, arabicNumber) {
          return function() {
            expect(romanNumeral).toBe(arabicNumber);
          };
        }(romanToArabic(romanNumeral), arabicNumber)
      );
    }
  });

  describe('when given roman numerals less than 100 that are multiples of 10', function() {
    var romanNumeralsOneToNine = [ 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC' ];
    for (var i = 0; i < romanNumeralsOneToNine.length; i++) {
      var romanNumeral = romanNumeralsOneToNine[i];
      var arabicNumber = (i + 1) * 10;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral,
        function(romanNumeral, arabicNumber) {
          return function() {
            expect(romanNumeral).toBe(arabicNumber);
          };
        }(romanToArabic(romanNumeral), arabicNumber)
      );
    }
  });

  describe('when given roman numerals less than 1000 that are multiples of 100', function() {
    var romanNumeralsOneToNine = [ 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM' ];
    for (var i = 0; i < romanNumeralsOneToNine.length; i++) {
      var romanNumeral = romanNumeralsOneToNine[i];
      var arabicNumber = (i + 1) * 100;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral,
        function(romanNumeral, arabicNumber) {
          return function() {
            expect(romanNumeral).toBe(arabicNumber);
          };
        }(romanToArabic(romanNumeral), arabicNumber)
      );
    }
  });

  describe('when given roman numerals less than 4000 that are multiples of 1000', function() {
    var romanNumeralsOneToNine = [ 'M', 'MM', 'MMM' ];
    for (var i = 0; i < romanNumeralsOneToNine.length; i++) {
      var romanNumeral = romanNumeralsOneToNine[i];
      var arabicNumber = (i + 1) * 1000;
      it('returns ' + arabicNumber + ' when given '+ romanNumeral,
        function(romanNumeral, arabicNumber) {
          return function() {
            expect(romanNumeral).toBe(arabicNumber);
          };
        }(romanToArabic(romanNumeral), arabicNumber)
      );
    }
  });
});