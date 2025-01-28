export class Teaspoon {
    static asTeaspoons() {
        return 1
    }
}

export class Tablespoon {
    static asTeaspoons() {
        return Teaspoon.asTeaspoons() * 3
    }
}

export class Ounce {
    static asTeaspoons() {
        return Tablespoon.asTeaspoons() * 2
    }
}

export class Cup {
    static asTeaspoons() {
        return Ounce.asTeaspoons() * 8
    }
}

export class Pint {
    static asTeaspoons() {
        return Cup.asTeaspoons() * 2
    }
}

export class Quart {
    static asTeaspoons() {
        return Pint.asTeaspoons() * 2
    }
}

export class Gallon {
    static asTeaspoons() {
        return Quart.asTeaspoons() * 4
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

    add(other) {
        if (this.unit === other.unit) {
            return new Volume(
                this.number + other.number,
                this.unit
            )
        }

        return new Volume(
            this.unit.asTeaspoons() * this.number + other.unit.asTeaspoons() * other.number,
            Teaspoon
        )
    }
}
