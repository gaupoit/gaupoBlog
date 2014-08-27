// <reference path="./types/require.d.ts" />
	import Base = require("models/Base");
    class Blog extends Base {
		public title: string;
		public description : string;
		public content: string;
		public createDate: string;		
	}
	export = Blog;