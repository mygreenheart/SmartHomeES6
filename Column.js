"use strict"

class Column extends Devices{
    constructor(name) {
        super(name);
        this._mode = ["aux", "bluetooth", "radio"];
        this._currentMode = this._mode[0];
        this._volume = 50;
        this._playlist = ["The Beatles - Let it be", "Eminem - Rap god", "Iggy Pop - Passenger", "Queen - Bohemian Rhapsody", "Ляпис Трубецкой - Евпатория"]
        this._currentSong = this._playlist[0];
    }
    get mode() {
        return this._currentMode;
    }

    get volume() {
        return this._volume;
    }

    get playlist() {
        return this._playlist;
    }

    chooseMode(mode) {
        switch (mode) {
            case "aux":
                this._currentMode = this._mode[1];
                break;
            case "bluetooth":
                this._currentMode = this._mode[2];
                break;
            case "radio":
                this._currentMode = this._mode[3];
                break;
            default:
                throw "Неверный выбор. Попробуйте [aux,bluetooth,radio]"
        }
    };

    volumeUp() {
        if (this._volume < 100) {
            this._volume = this._volume + 2;
        }
        else throw "Громкость выходит за пределы доступного";
    }

    volumeDown() {
        if (this._volume > 0) {
            this._volume = this._volume - 2;
        }
        else throw "Громкость выходит за пределы доступного";
    }

    chooseSong(songName) {
        if (this._playlist.indexOf(songName) >= 0) {
            this._currentSong = songName;
        } else throw "Exeption"
    }

    playSong() {
        return console.log("Сейчас играет", this._currentSong);
    }

    playRandomSong() {
        this._currentSong = this.playlist[Math.floor(Math.random() * this.playlist.length)];//Возвращает рандомный элемент массива playlist
        return console.log("Сейчас играет", this._currentSong);
    }

}


