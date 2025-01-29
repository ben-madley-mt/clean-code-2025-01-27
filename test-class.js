export class Measurement {
    constructor(value, unit) {
        this.value = value
        this.unit = unit
    }

    equals(other) {
        return this.unit.compatibleWith(other.unit)
            && this.toBaseUnit().value === other.toBaseUnit().value
    }

    add(other) {
        if (!this.unit.compatibleWith(other.unit)) {
            throw new Error("trying to add different units of units")
        }
        let baselineAdding = this.toBaseUnit().value + other.toBaseUnit().value
        return new Measurement(baselineAdding, new (this.unit.getBaseUnit())(1))
    }

    toBaseUnit() {
        return this.unit.toBaseUnit(this.value)
    }
}

class AbstractUnit {
    constructor(multiplier) {
        this.multiplier = multiplier
    }

    toBaseUnit(amount) {
        return new Measurement(amount * this.multiplier, new (this.getBaseUnit())(1))
    }

    compatibleWith(otherUnit) {
        return this.getBaseUnit() === otherUnit.getBaseUnit()
    }

    getBaseUnit() {
        throw Error("Not implemented")
    }
}

export class VolumeUnit extends AbstractUnit {
    getBaseUnit() {
        return VolumeUnit
    }
}

export class LengthUnit extends AbstractUnit {
    getBaseUnit() {
        return LengthUnit
    }
}

export class Units {
    static VOLUME = {
        TEASPOON: new VolumeUnit(1),
        TABLESPOON: new VolumeUnit(3)
    }
    static LENGTH = {
        INCH: new LengthUnit(1),
        FOOT: new LengthUnit(12)
    }

}