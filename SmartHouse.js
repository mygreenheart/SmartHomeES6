"use strict"

class SmartHouse {
    constructor(name) {
        this._name = name;
        this._devices = [];
    }

    get getDevices() {
        return this._devices;
    }

    getDeviceByName(name) {
        let device = this._devices.find(e => e.deviceName == name);
        return device;
    }

    addDevice(name) {
        this._devices.push(name);
    }

    deleteDeviceByName(name) {
        let device = this._devices.filter(e => e.deviceName !== name);
        this._devices = device;
    }
}


var sh = new SmartHouse("sh1");

sh.addDevice(new Conditioning("lg"));
sh.addDevice(new Column("jbl"));
sh.addDevice(new Column("jbl2"));

sh.getDeviceByName("lg").onOff();
console.dir(sh.getDeviceByName("lg"));
console.dir(sh.getDevices);
sh.deleteDeviceByName("jbl");
console.dir(sh.getDevices);