import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { NfcHelper } from "../helper/nfc.helper";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    nfcHelper: NfcHelper;

    constructor(private router: RouterExtensions) {
        this.nfcHelper = new NfcHelper();
    }

    ngOnInit(): void {
    }


    public goto() {
        this.router.navigate(['/test']);
    }
}
