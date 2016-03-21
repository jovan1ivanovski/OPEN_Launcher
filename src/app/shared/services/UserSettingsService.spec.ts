import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from 'angular2/testing';
import {BaseRequestOptions, Http, Response} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide, Injector} from 'angular2/core';

import {UserSettingsService} from './UserSettingsService';

describe('UserSettingsService', function() {
  var instance: UserSettingsService = null;
  // ****************************************
  // var connection;
  // var injector = Injector.resolveAndCreate([
  //   MockBackend,
  //   provide(Http, {useFactory: (backend, options) => {
  //     return new Http(backend, options);
  //   }, deps: [MockBackend, BaseRequestOptions]})]);

  // var http = injector.get(Http);
  // var backend = injector.get(MockBackend);
  // backend.connections.subscribe(c => connection = c);
  // ****************************************

  beforeEach(() => {
    instance = new UserSettingsService(null, null);
  });
});
