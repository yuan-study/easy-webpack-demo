"use strict";
const path = require("path");

module.exports = appInfo => {
	const config = (exports = {});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + "_1518266729785_8773";

	// add your config here
	config.middleware = [];

	config.static = {
		prefix: "/public",
		dir: path.join(appInfo.baseDir, "public"),
	};

	return config;
};
