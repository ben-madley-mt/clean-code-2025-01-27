import { Measure, Units } from "./test-class"


describe('Test Measurement... ', () => {
    test('two separate teaspons are equal', () => {
        expect(new Measure(1, Units.VOLUME.TEASPOON).equals(new Measure(1, Units.VOLUME.TEASPOON))).toBe(true);
    })
    test('Convert volume of tablespoons to teaspoons', () => {
        expect(new Measure(1, Units.VOLUME.TABLESPOON).equals(new Measure(3, Units.VOLUME.TEASPOON))).toBe(true);
    })
    test('Add volume in teaspoons', () => {
        expect(new Measure(1, Units.VOLUME.TEASPOON).add(new Measure(2, Units.VOLUME.TEASPOON)).equals(new Measure(3, Units.VOLUME.TEASPOON))).toBe(true);
    })
    test('Add teaspoons in tablespoons', () => {
        expect(new Measure(1, Units.VOLUME.TABLESPOON).add(new Measure(3, Units.VOLUME.TEASPOON)).equals(new Measure(2, Units.VOLUME.TABLESPOON))).toBe(true);
    })
    test('two separate types of unit are different ', () => {
        expect(new Measure(1, Units.VOLUME.TEASPOON).equals(new Measure(1, Units.LENGTH.INCH))).toBe(false);
    })
    test('Add distance should work', () => {
        expect(new Measure(12, Units.LENGTH.INCH).add(new Measure(1, Units.LENGTH.FOOT)).equals(new Measure(2, Units.LENGTH.FOOT))).toBe(true);
    })
    test('should not allow to add different types ', () => {
        expect(() => new Measure(1, Units.LENGTH.INCH).add(new Measure(1, Units.VOLUME.TEASPOON))).toThrow();
    })

})