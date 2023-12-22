export default class GameViewModel {
    get state() {
        return this._state;
    }

    get penaltyPoints() {
        return this._penaltyPoints;
    }

    get setNumber() {
        return this._setNumber;
    }

    get roundNumber() {
        return this._roundNumber;
    }

    constructor(object) {
        this._state = object.State;
        this._penaltyPoints = object.PenaltyPoints;
        this._setNumber = object.SetNumber;
        this._roundNumber = object.RoundNumber;
    }
}