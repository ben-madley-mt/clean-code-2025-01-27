import { Volume, Teaspoon, Tablespoon } from "./test-class";

const TEASPOON = new Teaspoon();
const TABLESPOON = new Tablespoon();

describe('Volume', () => {
    test('one teaspoon equals one teaspoon', () => {
        expect(
            new Volume(1, TEASPOON)
                .equals(new Volume(1, TEASPOON))
        )
            .toBe(true)
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
})

// 7 classes unit e.g. tablespoons  
// volume (1 class)  
// 1 teaspoon equals 1 teaspoon  
// equals  
// return bool  
// adds  
// returns a measurement  