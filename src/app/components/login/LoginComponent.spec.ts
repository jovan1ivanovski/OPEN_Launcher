import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject,
    injectAsync,
    TestComponentBuilder,
    ComponentFixture
} from 'angular2/testing';

import {provide, Injector, Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {RouterLink, Router} from 'angular2/router';

import {User, Users} from '../../shared/models/User';
import {AuthService} from '../../shared/services/AuthService';
import {UserService} from '../../shared/services/UserService';
import {AlertingService} from '../alerting/AlertingService';
import {LoginComponent} from './LoginComponent';
import {Alert} from '../Alerting/Alert';

class UserServiceMock {

    deleteUser(name) {

        var user1 = new User();
        user1.name = "a";
        var user2 = new User();
        user2.name = "b";
        var user3 = new User();
        user3.name = "c";
        var allUsers: User[] = new Array<User>();
        allUsers[0] = user1;
        allUsers[1] = user2;
        allUsers[2] = user3;

        for (var index = 0; index < 3; index++) {
            if (allUsers[index].name == name) {
                allUsers.splice(index, 1);
                break;
            }
        }

        return Observable.of(allUsers);
    }

    getAllUsers() {
        var string1 = '[{"name": "", "profileImg":""}]'
        var obj = JSON.parse(string1);
        return Observable.of(obj);
    }
}

class AlertingServiceMock {
    addDanger(message: string) { }
    addSuccess(message: string) { }
    addInfo(message: string) { }
}

class AuthServiceMock {

}

describe('Login Component', function() {

    var injector: Injector;
    var instance: LoginComponent = null;
    var _authService: AuthService;
    var _userService: UserService;
    var _alertingService: AlertingService;
    var router: Router;

    beforeEach(() => {
        injector = Injector.resolveAndCreate([
            provide(AuthService, { useClass: AuthServiceMock }),
            provide(UserService, { useClass: UserServiceMock }),
            provide(AlertingService, { useClass: AlertingServiceMock })
        ]);

        _authService = injector.get(AuthService);
        _userService = injector.get(UserService);
        _alertingService = injector.get(AlertingService);
    });

    it('DeleteUser_GivenSelectedUser_DeletesTheSelectedUser', function() {
        // Arrange
        instance = new LoginComponent(_alertingService, _userService, _authService, router);
        let selectedUser = new User();
        selectedUser.name = "c";
        instance.selectedUser = selectedUser;

        let user1 = new User();
        user1.name = "a";
        let user2 = new User();
        user2.name = "b";
        let allUsersLocal: User[] = new Array<User>();
        allUsersLocal[0] = user1;
        allUsersLocal[1] = user2;

        // Act
        instance.deleteUser();

        // Assert
        expect(instance.allUsers).toEqual(allUsersLocal);
    });

    it('DeleteUser_GivenSelectedUser_ResetsTheSelectedUser', function() {
        // Arrange
        instance = new LoginComponent(_alertingService, _userService, _authService, router);
        let selectedUser = new User();
        selectedUser.name = "c";
        instance.selectedUser = selectedUser;

        let user1 = new User();
        user1.name = "a";
        let user2 = new User();
        user2.name = "b";
        let allUsersLocal: User[] = new Array<User>();
        allUsersLocal[0] = user1;
        allUsersLocal[1] = user2;

        // Act
        instance.deleteUser();

        // Assert
        expect(instance.selectedUser).not.toEqual(selectedUser);
    });

    it('DeleteUser_WhenUserIsDeleted_SuccessMessageIsShown', function() {
        // Arrange
        instance = new LoginComponent(_alertingService, _userService, _authService, router);

        // Act
        spyOn(_alertingService, "addSuccess");
        instance.deleteUser();

        // Assert
        expect(_alertingService.addSuccess).toHaveBeenCalledWith("Профилот е успешно избришан.");
    });

    it('DeleteCancelled_DeleteIsCancelled_InfoMessageIsShown', function() {
        // Arrange
        instance = new LoginComponent(_alertingService, _userService, _authService, router);

        // Act
        spyOn(_alertingService, "addInfo");
        instance.deleteCancelled();

        // Assert
        expect(_alertingService.addInfo).toHaveBeenCalledWith("Бришењето е откажано.");
    });

    it('SelectUser_GivenAuser_SetsTheSelectedUser', function() {
        // Arrange
        instance = new LoginComponent(_alertingService, _userService, _authService, router);
        let user = new User();
        user.name = "a";
        // Act        
        instance.selectUser(user);

        // Assert
        expect(instance.selectedUser).toEqual(user);
    });

    it('ShouldApplySelectedUserCss_GivenTheSelectedUser_ReturnsTrue', function() {
        // Arrange
        instance = new LoginComponent(_alertingService, _userService, _authService, router);
        let user = new User();
        user.name = "a";
        // Act    
        instance.selectedUser = user;
        var flag = instance.ShouldApplySelectedUserCss(user);

        // Assert
        expect(flag).toBeTruthy();
    });

})