"use strict"

class Conditioning extends Devices   {
    constructor(name) {
        super(name);
        this._mode = ["cool", "heat", "dry"];
        this._currentMode = this._mode[0];
        this._capacity = 10;
    }

    get getMode() {
        return this._currentMode;
    }

    changeMode(mode) {
        switch (mode) {
            case "cool":
                this._currentMode = this._mode[1];
                break;
            case "heat":
                this._currentMode = this._mode[2];
                break;
            case "dry":
                this._currentMode = this._mode[3];
                break;
            default:
                throw "Неверный выбор. Попробуйте [cool, heat, dry]";
        }
    }

    setCapacity(capacity) {
        if (capacity <= 10 && capacity >= 0) {
            this._capacity = capacity;
        }
        else throw "Ввели недопустимое значение"
    }



}

