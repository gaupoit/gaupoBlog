/// <reference path="../../types/angular.d.ts" />
import BaseService = require("BaseService");

class BlogService extends BaseService {
	constructor($http: ng.IHttpService) {
		super($http);
		this.url = '/api/blogs/';
	}
}

export = BlogService;