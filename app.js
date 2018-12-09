const express = require("express");
const path = require("path");
const art_express = require("express-art-template");
const userService = require("./service/userService.js");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //默认处理表单数据到req.body
	extended: true
}));

const upload = multer(); //处理form/data传递的数据

//设置art的模板引擎
app.engine("art", art_express);

//用express提供的静态目录的中间件
app.use(express.static(path.join(__dirname, "public")));

//动态请求;
app.get("/api/list", (req, res) => {
	// 	res.render("user_list.art", {
	// 		title: "你好啊",
	// 		userList: userService.getUser()
	// 	});
	// 	res.end();
	//实现分页获取数据 page，size
	const page = parseInt(req.query.page) || 1;
	const size = parseInt(req.query.size) || 10;
	const data = userService.getPageUsers(page, size);
	res.render("users/users_list2.art", data);
});

//添加用户页面
app.get("/api/add", function (req, res) {
	res.render("users/add.art");
});
app.post("/api/add", upload.array(), function (req, res) {
	// req.query   url地址中的参数
	// req.params  路由的参数
	// req.body  表单提交的数据
	userService.addUser(req.body);
	res.redirect("/api/list?page=4");
});

app.listen(3000, function () {
	console.log("http://localhost:3000");
});