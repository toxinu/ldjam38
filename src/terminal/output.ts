
import Monitor from "../monitor";
import Speaker from "../speaker";
import Leds from "../leds";

export class Output {
    public terminalElement: HTMLInputElement
    public monitor: Monitor;
    public speaker: Speaker;
    public leds: Leds;

    writeToTerminal(data: string, errored: boolean = false, fromRover: boolean = false) {
        var lineStart = '';
        if (this.terminalElement.value !== "") {
            lineStart = '\n';
        }
        if (errored) {
            this.terminalElement.value = this.terminalElement.value + lineStart + '>>> ERROR: ' + data;
        } else if (fromRover) {
            this.terminalElement.value = this.terminalElement.value + lineStart + 'VJ-Net42: "' + data + '"';
        } else {
            this.terminalElement.value = this.terminalElement.value + lineStart + '>>> ' + data;
        }
        this.terminalElement.scrollTop = this.terminalElement.scrollHeight + 10;
    }

    playToSpeaker(data: string, volume: number = 1, loop: boolean = false) {
        const sound = this.speaker.playSound(data, volume, loop);

        return () => sound.destroy();
    }

    playCapture(data: string, volume: number = 1) {
        this.speaker.playCapture(data, volume);
    }

    stopCapture() {
        this.speaker.stopCapture();
    }

    displayToMonitor(data: string, opacity: number, ratio: number = 1) {
        this.monitor.showImage(data, opacity, ratio);
    }

    turnOnLed(position: number) {
        this.leds.turnOnLed(position);
    }
}
