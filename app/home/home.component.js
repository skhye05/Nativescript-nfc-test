"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_nfc_1 = require("nativescript-nfc");
var HomeComponent = (function () {
    function HomeComponent(nfc) {
        this.nfc = nfc;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.read = function () {
        var _this = this;
        this.nfc.available().then(function (avail) {
            _this.nfc.setOnTagDiscoveredListener(function (data) {
                console.log("Discovered a tag with ID " + data.id);
            }).then(function () {
                console.log("OnTagDiscovered listener added");
            });
        });
    };
    HomeComponent.prototype.remove = function () {
        this.nfc.setOnTagDiscoveredListener(null).then(function () {
            // Toast.makeText("OnNdefDiscovered listener removed").show();
            console.log("OnNdefDiscovered listener removed");
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            providers: [nativescript_nfc_1.Nfc]
        }),
        __metadata("design:paramtypes", [nativescript_nfc_1.Nfc])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxREFBZ0U7QUFRaEU7SUFJSSx1QkFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFFNUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU8sNEJBQUksR0FBWjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO1lBQzVCLEtBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsVUFBQyxJQUFnQjtnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFdkQsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLDhCQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMzQyw4REFBOEQ7WUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTVCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBRyxDQUFDO1NBQ25CLENBQUM7eUNBSzJCLHNCQUFHO09BSm5CLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5mYywgTmZjVGFnRGF0YSwgTmZjTmRlZkRhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW5mY1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtOZmNdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmZjOiBOZmMpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWQoKSB7XG4gICAgICAgIHRoaXMubmZjLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5mYy5zZXRPblRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcigoZGF0YTogTmZjVGFnRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlzY292ZXJlZCBhIHRhZyB3aXRoIElEIFwiICsgZGF0YS5pZCk7XG5cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT25UYWdEaXNjb3ZlcmVkIGxpc3RlbmVyIGFkZGVkXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMubmZjLnNldE9uVGFnRGlzY292ZXJlZExpc3RlbmVyKG51bGwpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gVG9hc3QubWFrZVRleHQoXCJPbk5kZWZEaXNjb3ZlcmVkIGxpc3RlbmVyIHJlbW92ZWRcIikuc2hvdygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbk5kZWZEaXNjb3ZlcmVkIGxpc3RlbmVyIHJlbW92ZWRcIik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19