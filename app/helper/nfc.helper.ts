import { Nfc, NfcTagData, NfcNdefData } from "nativescript-nfc";

export class NfcHelper {
    private nfc: Nfc;

    constructor() {
        this.nfc = new Nfc();
    }

    public read() {
        this.nfc.available().then((avail) => {
            this.nfc.setOnTagDiscoveredListener((data: NfcTagData) => {
                console.log("Discovered a tag with ID " + data.id);

            }).then(() => {
                console.log("OnTagDiscovered listener added");
            });
        });

    }

    public remove() {
        this.nfc.setOnTagDiscoveredListener(null).then(() => {
            // Toast.makeText("OnNdefDiscovered listener removed").show();
            console.log("OnNdefDiscovered listener removed");
        })
    }

}