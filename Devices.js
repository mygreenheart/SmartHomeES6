"use strict"

class Devices {
    constructor(name) {
        this._name = name;
        this._isOn = false;
    }
    get deviceName() {
        return this._name;
    }

    onOff() {
        this._isOn ? this._isOn = false : this._isOn = true;
    }

    setTimeoutOff(time) {
        setTimeout(
            this._isOn = false,
            time
        )
    }
}
