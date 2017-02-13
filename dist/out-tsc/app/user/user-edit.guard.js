var UserEditGuard = (function () {
    function UserEditGuard() {
    }
    UserEditGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return UserEditGuard;
}());
export { UserEditGuard };
//# sourceMappingURL=../../../../src/app/user/user-edit.guard.js.map