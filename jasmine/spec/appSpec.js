describe('An arabic number', function() {
  describe('less than 10', function() {
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

  describe('a multiple of 10 less than 100', function() {
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
});