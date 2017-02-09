import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";
var APP_ROUTES = [
    { path: 'user/:id', component: UserComponent },
    { path: '', component: HomeComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=../../../../../src/app/app.routing.js.map