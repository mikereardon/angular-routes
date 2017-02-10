import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";
import { USER_ROUTES } from "./user/user.routes";
var APP_ROUTES = [
    { path: 'user', redirectTo: '/user/1', pathMatch: 'full' },
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/user/1', pathMatch: 'full' }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=../../../src/app/app.routing.js.map