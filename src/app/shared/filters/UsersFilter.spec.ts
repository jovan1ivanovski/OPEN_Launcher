
import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {UsersFilter} from "./UsersFilter";
import {User} from "../models/User";

describe('UsersFilter Tests', () => {
    let pipe: UsersFilter;

    beforeEach(() => {
        pipe = new UsersFilter();
    });

    it('Transform_GivenFilter_ShouldFilterWithOneUser', () => {
        let user = new User();
        user.name = "Dragica";
        var result = pipe.transform([user], ['dr']);

        expect(result).toEqual([user]);
    });

    it('Transform_WithNoFilter_ShouldReturnAllUsers', () => {

        let user = new User();
        user.name = "Dragica";
        let users: User[] = new Array<User>();
        users[0] = user;
        var result = pipe.transform(users, [""]);

        expect(result).toEqual(users);
    });

    it('Transform_WithNoUsers_ShouldReturnNoUsers', () => {

        let users: User[] = new Array<User>();
        var result = pipe.transform(users, [""]);

        expect(result).toEqual(users);
    });

    it('Transform_GivenFilter_ShouldFilterWithMultipleUsers', () => {

        let user1 = new User();
        user1.name = "Daniela";
        let user2 = new User();
        user2.name = "Dragica";
        let users: User[] = new Array<User>();
        users[0] = user1;
        users[1] = user2;
        var result = pipe.transform(users, ["d"]);

        expect(result).toEqual(users);
    });

    it('Transform_GivenFilter_ShouldFilterWithMultipleUsers2', () => {

        let user1 = new User();
        user1.name = "Daniela";
        let user2 = new User();
        user2.name = "Dragica";
        let users: User[] = new Array<User>();
        users[0] = user1;
        users[1] = user2;
        var result = pipe.transform(users, ["dr"]);
        let arr: User[] = new Array<User>();
        arr[0] = user2;
        expect(result).toEqual(arr);
    });
});