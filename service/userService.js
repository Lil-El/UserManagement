/**
 * 对读取和操作用户数据的服务封装
 */
//加载json文件模块

const fs = require("fs");
const dbjson = require("../db.json");
const path = require("path");

exports.getUser = function () {
	return dbjson.users;
};

exports.getPageUsers = function (page, size) {
	if (typeof (page) !== "number" || page <= 0) {
		return {
			code: 0,
			msg: "fail"
		};
	}
	if (typeof (size) !== "number" || size <= 0) {
		return {
			code: 0,
			msg: "fail"
		};
	}

	return {
		users: dbjson.users.slice((page - 1) * size, page * size),
		code: 1,
		msg: "success"
	};
};

exports.addUser = function (user) {
	if (!user.name) {
		return {
			msg: "user is not null",
			code: 0
		};
	}
	// user.id = Date.now();
	const newUser = Object.assign({
		id: Date.now()
	}, user);
	dbjson.users.push(newUser);
	_saveJson(dbjson);
	return {
		msg: "save success",
		code: 1
	};
};

function _saveJson(jsonDate) {
	const strJson = JSON.stringify(jsonDate);
	fs.writeFileSync(path.join(__dirname, "../db.json"), strJson, {
		encoding: "utf8"
	});
}