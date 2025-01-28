import { Volume, Teaspoon, Tablespoon, Ounce } from "./test-class";

const TEASPOON = new Teaspoon();
const TABLESPOON = new Tablespoon();
const OUNCE = new Ounce();

describe('Volume', () => {
    test('one teaspoon equals one teaspoon', () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1, TEASPOON))).toBe(true)
    })

    test("1 teaspoon doesn't equal 2 teaspoons", () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(2, TEASPOON))).toBe(false)
    })

    test("1 teaspoon doesn't equal 1 tablespoon", () => {
        expect(new Volume(1, TEASPOON).equals(new Volume(1, TABLESPOON))).toBe(false)
    })

    test("3 teaspoon equals 1 tablespoon", () => {
        expect(new Volume(3, TEASPOON).equals(new Volume(1, TABLESPOON))).toBe(true)
    })

    test("2 tablespoon equals 1 ounce", () => {
        expect(new Volume(2, TABLESPOON).equals(new Volume(1, OUNCE))).toBe(true)
    })

    // test("8 ounce equals 1 cup", () => {
    //     expect(new Volume(8, OUNCE).equals(new Volume(1, CUP))).toBe(true)
    // })

    // test("2 cups equals 1 pint", () => {
    //     expect(new Volume(2, CUPS).equals(new Volume(1, PINT))).toBe(true)
    // })

    // test("2 pints equals 1 quart", () => {
    //     expect(new Volume(2, PINT).equals(new Volume(1, QUART))).toBe(true)
    // })

    // test("4 quarts equals 1 gallon", () => {
    //     expect(new Volume(4, QUART).equals(new Volume(1, GALLON))).toBe(true)
    // })
})

// 7 classes unit e.g. tablespoons  
// volume (1 class)  
// 1 teaspoon equals 1 teaspoon  
// equals  
// return bool  
// adds  
// returns a measurement  