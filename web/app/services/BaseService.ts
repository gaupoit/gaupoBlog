/// <reference path="../../types/angular.d.ts" />
import IService = require("services/IService");
import baseModel = require("models/Base");

class BaseService implements IService<baseModel> {
	public http: ng.IHttpService;
    public url: string;

    constructor($http: ng.IHttpService) {
      this.http = $http;
    }

    doCallback(callback: Function, data: Object) {
      if (callback) {
        callback(data);
      }
    }

    getById(id: string, successCallback: Function, errorCallback: Function) {
      this.http({ method: 'GET', url: this.url + '/' + id })
        .success((data) => { this.doCallback(successCallback, data); })
        .error(() => { this.doCallback(errorCallback, null); });
    }

    getAll(successCallback: Function, errorCallback: Function) {
      this.http.get(this.url)
        .success((data) => { this.doCallback(successCallback, data); })
        .error(() => { this.doCallback(errorCallback, null); });
    }

    create(entity: baseModel, successCallback: Function, errorCallback: Function) {
      this.http.post(this.url, entity)
        .success((data) => { this.doCallback(successCallback, data); })
        .error((error) => { this.doCallback(errorCallback, error); });
    }

    update(entity: baseModel, successCallback: Function, errorCallback: Function) {
      this.http.put(this.url + '/' + entity.id, entity)
        .success((data) => { this.doCallback(successCallback, data); })
        .error((error) => { this.doCallback(errorCallback, error); });
    }

    delete(entity: baseModel, successCallback: Function, errorCallback: Function) {
      this.http({ method: 'DELETE', url: this.url + '/' + entity.id })
        .success((data) => { this.doCallback(successCallback, data); })
        .error(() => { this.doCallback(errorCallback, null); });
    }

    createOrUpdate(entity: baseModel, successCallback: Function, errorCallback: Function) {
      if (entity.id) {
        this.update(entity, successCallback, errorCallback);
      } else {
        this.create(entity, successCallback, errorCallback);
      }
    }
}

export = BaseService;

