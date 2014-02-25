/**
 * 求两个数组的交集
 *
 * @param {[array]} a [数组A]
 * @param {[array]} b [数组b]
 * @return {[array]} [交集]
 */
function ArrayIntersection(a, b) {
	var ai = 0,
		bi = 0;
	var result = new Array();
	while (ai < a.length && bi < b.length) {
		if (a[ai] < b[bi]) {
			ai++;
		} else if (a[ai] > b[bi]) {
			bi++;
		} else {
			result.push(a[ai]);
			ai++;
			bi++;
		}
	}
	return result;
}

function ArraySubtraction(a, b) {
	var result = new Array();
	for (var i = 0; i < a.length; i++) {
		var flag = true;
		for (var j = 0; j < b.length; j++) {
			if (a[i] == b[j]) {
				flag = false;
			}
		}
		if (flag) {
			result.push(a[i]);
		}
	}
	return result;
}

/*--数组扩展方法--*/
/*
 * 去除数组中的重复项
 */
Array.prototype.unique = function() {
	var a = [];
	var l = this.length;
	for (var i = 0; i < l; i++) {
		for (var j = i + 1; j < l; j++) {
			if (this[i] === this[j])
				j = ++i;
		}
		a.push(this[i]);
	}
	return a;
};
// Usage : var uniqueA = [1,2,3,3,5,5,3,7]; var uniqueResult = uniqueA.unique();
// // uniqueResult = [1, 2, 5, 3, 7];

/*
 * 获取数组的交集需要有unique方法支持
 */
Array.prototype.intersect = function() {
	if (!arguments.length)
		return [];
	var a1 = this;
	var a = a2 = null;
	var n = 0;
	while (n < arguments.length) {
		a = [];
		a2 = arguments[n];
		var l = a1.length;
		var l2 = a2.length;
		for (var i = 0; i < l; i++) {
			for (var j = 0; j < l2; j++) {
				if (a1[i] === a2[j])
					a.push(a1[i]);
			}
		}
		a1 = a;
		n++;
	}
	return a.unique();
};
// Usage : var intersectA = [1,2,3]; var intersectB = [2,3,4]; var intersectC =
// [3,4,5]; var intersectResult = intersectA.intersect(intersectB,intersectC);
// // intersectResult = [3];

/*
 * 判断是否为数组
 */
function isArray(a) {
	return a.constructor === Array ? true : false;
}
// Usage : var isArrayA = [3]; var isArrayB = 3; var isArrayResultA =
// isArray(isArrayA); //true var isArrayResultB = isArray(isArrayB); //false

/*
 * 获取数组中不相同的元素
 */
Array.prototype.diff = function() {
	var a1 = this;
	var a = a2 = null;
	var n = 0;
	while (n < arguments.length) {
		a = [];
		a2 = arguments[n];
		var l = a1.length;
		var l2 = a2.length;
		var diff = true;
		for (var i = 0; i < l; i++) {
			for (var j = 0; j < l2; j++) {
				if (a1[i] === a2[j]) {
					diff = false;
					break;
				}
			}
			diff ? a.push(a1[i]) : diff = true;
		}
		a1 = a;
		n++;
	}
	return a.unique();
};
// Usage : var diffA = [1,2,3]; var diffB = [2,3,4]; var diffResult =
// diffA.diff(diffB); // diff = [1];

/**
 * [navSelected 通过JS对a标签选中效果]
 * @param  {[type]} navID         [a的父亲标签]
 * @param  {[type]} selectedClass [选中样式名称]
 * @return {[type]}               [description]
 */
function navSelected(navID, selectedClass) {

	var obj = null;
	var As = document.getElementById(navID).getElementsByTagName('a');
	obj = As[0];
	for (i = 1; i < As.length; i++) {
		if (window.location.href.indexOf(As[i].href) >= 0) {
			obj = As[i];
		}
	}
	obj.className = selectedClass;
}

/**
 * [getDate 获取时间]
 * @param  {[type]} toDate      [自定义时间]
 * @param  {[type]} Operational [plus：加法，minus：减法,为空时不做运算]
 * @return {[type]}             [description]
 */
function getDate(Operational,toDay,startDate) {
	var year, month, day, week,toDay;
	var nowDate = new Date(startDate);
	if (typeof(Operational) == 'undefined') {
		var Operational = '';
	} else {
		if(typeof(toDay) == 'undefined' || typeof(toDay) != 'number'){
			toDay = 1;
		}//'2014-02-10'
		switch (Operational) {
			case 'plus':
				nowDate.setDate(nowDate.getDate() + toDay);
				break;
			case 'minus':
				nowDate.setDate(nowDate.getDate() - toDay);
				break;
		}
	}
	switch (nowDate.getDay()) {
		case 0:
			week = '<em class="red">星期日</em>';
			break;
		case 1:
			week = '星期一';
			break;
		case 2:
			week = '星期二';
			break;
		case 3:
			week = '星期三';
			break;
		case 4:
			week = '星期四';
			break;
		case 5:
			week = '星期五';
			break;
		case 6:
			week = '<em class="red">星期六</em>';
			break;
	}
	year = nowDate.getFullYear();
	month = nowDate.getMonth() + 1;
	day = nowDate.getDate();
	// var tmpDate = year + '-' + month + '-' + day + '<br/>' + week;
	var tmpDate = month + '-' + day + '<br/>' + week;
	return tmpDate;
}
//以下获取当前日期 yyyy-mm-dd
function curDateTime() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var day = d.getDay();
	var curDateTime = year;
	if (month > 9) {
		curDateTime = curDateTime + "-" + month;
	} else {
		curDateTime = curDateTime + "-0" + month;
	}
	if (date > 9) {
		curDateTime = curDateTime + "-" + date;
	} else {
		curDateTime = curDateTime + "-0" + date;
	}
	return curDateTime;
}
function daysBetween(DateOne, DateTwo) {
	var OneMonth = DateOne.substring(5, DateOne.lastIndexOf('-'));
	var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf('-') + 1);
	var OneYear = DateOne.substring(0, DateOne.indexOf('-'));
	var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf('-'));
	var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf('-') + 1);
	var TwoYear = DateTwo.substring(0, DateTwo.indexOf('-'));
	var cha = ((Date.parse(OneMonth + '/' + OneDay + '/' + OneYear) - Date.parse(TwoMonth + '/' + TwoDay + '/' + TwoYear)) / 86400000);
	return Math.abs(cha);
}
function dateArray(startDate){
	var dayValue = daysBetween(curDateTime(),startDate);
	var tmpString = "";
	var tmpArray = [];
	for (var i = 0; i < dayValue; i++) {
		tmpString += getDate('plus', i,startDate) + ',';
	}
	tmpString = tmpString.substring(0,tmpString.length-1)
	tmpArray  = tmpString.split(",")
	return tmpArray;
}