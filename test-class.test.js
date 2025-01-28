import {Cup, Gallon, Ounce, Pint, Quart, Tablespoon, Teaspoon, Volume} from "./test-class";

describe('Volume', () => {
    test('one teaspoon equals one teaspoon', () => {
        expect(new Volume(1, Teaspoon).equals(new Volume(1, Teaspoon))).toBe(true)
    })

    test("1 teaspoon doesn't equal 2 teaspoons", () => {
        expect(new Volume(1, Teaspoon).equals(new Volume(2, Teaspoon))).toBe(false)
    })

    test("1 teaspoon doesn't equal 1 tablespoon", () => {
        expect(new Volume(1, Teaspoon).equals(new Volume(1, Tablespoon))).toBe(false)
    })

    test("3 teaspoon equals 1 tablespoon", () => {
        expect(new Volume(3, Teaspoon).equals(new Volume(1, Tablespoon))).toBe(true)
    })

    test("2 tablespoon equals 1 ounce", () => {
        expect(new Volume(2, Tablespoon).equals(new Volume(1, Ounce))).toBe(true)
    })

    test("8 ounce equals 1 cup", () => {
        expect(new Volume(8, Ounce).equals(new Volume(1, Cup))).toBe(true)
    })

    test("2 cups equals 1 pint", () => {
        expect(new Volume(2, Cup).equals(new Volume(1, Pint))).toBe(true)
    })

    test("2 pints equals 1 quart", () => {
        expect(new Volume(2, Pint).equals(new Volume(1, Quart))).toBe(true)
    })

    test("4 quarts equals 1 gallon", () => {
        expect(new Volume(4, Quart).equals(new Volume(1, Gallon))).toBe(true)
    })

    test("1 quart equals 1 teaspoons", () => {
        expect(new Volume(1, Quart).equals(new Volume(192, Teaspoon))).toBe(true)
    })

    test("1 teaspoon + 0 teaspoons = 1 teaspoon", () => {
        expect(new Volume(1, Teaspoon).add(new Volume(0, Teaspoon)))
            .toEqual(new Volume(1, Teaspoon))
    })

    test("1 teaspoon + 1 teaspoons = 2 teaspoon", () => {
        expect(new Volume(1, Teaspoon).add(new Volume(1, Teaspoon)))
            .toEqual(new Volume(2, Teaspoon))
    })

    test("1 tablespoon + 1 tablespoon = 2 tablespoon", () => {
        expect(new Volume(1, Tablespoon).add(new Volume(1, Tablespoon)))
            .toEqual(new Volume(2, Tablespoon))
    })
})

// 7 classes unit e.g. tablespoons  
// volume (1 class)  
// 1 teaspoon equals 1 teaspoon  
// equals  
// return bool  
// adds  
// returns a measurement  