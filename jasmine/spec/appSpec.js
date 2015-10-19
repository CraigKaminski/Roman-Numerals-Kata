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
  });
});