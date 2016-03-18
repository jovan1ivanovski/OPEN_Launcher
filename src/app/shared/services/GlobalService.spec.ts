import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from 'angular2/testing';

import {Component} from 'angular2/core';
import {GlobalService} from './GlobalService';

var instance: GlobalService = new GlobalService();
describe('GlobalService', () => {
  it('shouldGetTheURLFor_addUser', function() {
    instance = new GlobalService();

    expect(instance.URL_ADDUSER).toEqual('http://localhost:3000/api/addUser');
  });

  it('shouldGetTheURLFor_uploadPicture', function() {
    instance = new GlobalService();

    expect(instance.URL_UPLOAD_PICTURE).toEqual('http://localhost:3000/api/upload');
  });

  it('shouldGetTheURLFor_getAllUsers', function() {
    instance = new GlobalService();

    expect(instance.URL_GETALLUSERS).toEqual('http://localhost:3000/api/getAllUsers');
  });

  it('shouldGetTheURLFor_getUser', function() {
    instance = new GlobalService();

    expect(instance.URL_GETUSER('eljesa')).toEqual('http://localhost:3000/api/getAllUsers/eljesa');
  });

  it('shouldGetTheURLFor_deleteUser', function() {
    instance = new GlobalService();

    expect(instance.URL_DELETEUSER('eljesa')).toEqual('http://localhost:3000/api/deleteUser/eljesa');
  });

  it('shouldGetTheURLFor_getProfileImages', function() {
    instance = new GlobalService();

    expect(instance.URL_GETPROFILE_IMAGES).toEqual('http://localhost:3000/api/GetProfileImages/');
  });
});
