describe('An arabic number', function() {
  describe('less than ten', function() {
    it('returns I when given 1', function() {
      var arabicNumber = 1;
      var romanNumeral = arabicToRoman(arabicNumber);
      expect(romanNumeral).toBe('I');
    });
  });
});