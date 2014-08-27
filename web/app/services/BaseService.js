define(["require", "exports"], function(require, exports) {
    var BaseService = (function () {
        function BaseService($http) {
            this.http = $http;
        }
        BaseService.prototype.doCallback = function (callback, data) {
            if (callback) {
                callback(data);
            }
        };

        BaseService.prototype.getById = function (id, successCallback, errorCallback) {
            var _this = this;
            this.http({ method: 'GET', url: this.url + '/' + id }).success(function (data) {
                _this.doCallback(successCallback, data);
            }).error(function () {
                _this.doCallback(errorCallback, null);
            });
        };

        BaseService.prototype.getAll = function (successCallback, errorCallback) {
            var _this = this;
            this.http.get(this.url).success(function (data) {
                _this.doCallback(successCallback, data);
            }).error(function () {
                _this.doCallback(errorCallback, null);
            });
        };

        BaseService.prototype.create = function (entity, successCallback, errorCallback) {
            var _this = this;
            this.http.post(this.url, entity).success(function (data) {
                _this.doCallback(successCallback, data);
            }).error(function (error) {
                _this.doCallback(errorCallback, error);
            });
        };

        BaseService.prototype.update = function (entity, successCallback, errorCallback) {
            var _this = this;
            this.http.put(this.url + '/' + entity.id, entity).success(function (data) {
                _this.doCallback(successCallback, data);
            }).error(function (error) {
                _this.doCallback(errorCallback, error);
            });
        };

        BaseService.prototype.delete = function (entity, successCallback, errorCallback) {
            var _this = this;
            this.http({ method: 'DELETE', url: this.url + '/' + entity.id }).success(function (data) {
                _this.doCallback(successCallback, data);
            }).error(function () {
                _this.doCallback(errorCallback, null);
            });
        };

        BaseService.prototype.createOrUpdate = function (entity, successCallback, errorCallback) {
            if (entity.id) {
                this.update(entity, successCallback, errorCallback);
            } else {
                this.create(entity, successCallback, errorCallback);
            }
        };
        return BaseService;
    })();

    
    return BaseService;
});
