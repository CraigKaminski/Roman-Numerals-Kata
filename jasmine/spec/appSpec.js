describe('An arabic number', function() {
  describe('less than ten', function() {
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
});