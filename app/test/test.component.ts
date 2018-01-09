import { Component, OnInit } from "@angular/core";
//import { NfcHelper } from "../helper/nfc.helper";


@Component({
    selector: "Test",
    moduleId: module.id,
    templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit {

    //nfcHelper: NfcHelper;

    constructor() {
     //   this.nfcHelper = new NfcHelper();
    }

    ngOnInit(): void {
    }

}
