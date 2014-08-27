var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "BaseService"], function(require, exports, BaseService) {
    var BlogService = (function (_super) {
        __extends(BlogService, _super);
        function BlogService($http) {
            _super.call(this, $http);
            this.url = '/api/blogs/';
        }
        return BlogService;
    })(BaseService);

    
    return BlogService;
});
