//初始化默认测试用户数据

const fs = require("fs");
const path = require("path");
const jsondb = require("./db.json");
const Mock = require("mockjs");

//初始化user属性
jsondb.users || (jsondb.users = []);

//#region
// for (let i = 0; i < 33; i++) {
// 	jsondb.users.push({
// 		id: 10086 + i,
// 		name: "stu" + i
// 	});
// }
//#endregion

let data = Mock.mock({
	"users|33": [{
		"id|+1": 20000,
		name: "@cname"
	}]
});
//es6 语法
// jsondb.users.push(...data.users);

jsondb.users = data.users;

//将数据写入json中
fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(jsondb), {
	encoding: "utf8"
});
console.log("write data success");