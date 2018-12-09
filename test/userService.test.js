//单元测试
//一个单元测试：定义一个场景，初始化数据，调用测试的单元代码执行，然后检查执行的
//结果是否是我们预期结果，
//清理测试现场数据
const userServie = require("../service/userService");
const should = require("should");
//定义测试场景：1描述，2回调
describe("userService服务测试", function() {
	const assert = require("assert"); //断言测试
	//初始化场景数据BDD，before：所有测试用例执行之前先执行的代码
	before(function() {
		console.log("before...");
		//数据初始化
		require("../initData");
	});
	//所有用例执行后的操作，清理数据等
	after(function() {});

	//定义测试用例,测试getUser（）是否达到预期
	it("#getUser()", function() {
		var arr = userServie.getUser();
		//Array.isArray(arr) === true;
		assert.equal(true, Array.isArray(arr));
	});

	//#region
	// it("#getPageUser()", function () {
	// 	//测试正常数据
	// 	const data = userServie.getPageUsers(2, 10);
	// 	assert.equal(data.users.length, 10);
	// 	assert.equal(Array.isArray(data.users), true);

	// 	//测试异常数据
	// 	const eData = userServie.getPageUsers("-2", "*d-4d");
	// 	// assert.equal(eData.users.length, 10);
	// 	// assert.equal(Array.isArray(eData.users), true);
	// 	assert.equal(eData.code, 0, "f返回0");
	// });
	//#endregion

	it("#getPageUsers()使用shouldjs", function() {
		const data = userServie.getPageUsers("222", 333);
		data.should.be.a.Object();
		data.code.should.above(-1);
		data.code.should.eqls(0);
		data.should.eql({
			//原生断言库，比较对象会有问题
			code: 0,
			msg: "fail"
		});
		should(data).eql({
			//效果同上
			code: 0,
			msg: "fail"
		});
	});
});
