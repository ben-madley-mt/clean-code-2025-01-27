export class Teaspoon {
    asTeaspoons() {
        return 1
    }
}

export class Tablespoon {
    asTeaspoons() {
        return 3
    }
}

export class Ounce {
    asTeaspoons() {
        return 6
    }
}

export class Volume {
    constructor(number, unit) {
        this.number = number
        this.unit = unit
    }

    equals(other) {
        const thisTeaspoons = this.unit.asTeaspoons() * this.number
        const otherTeaspoons = other.unit.asTeaspoons() * other.number

        return thisTeaspoons === otherTeaspoons
    }
}
