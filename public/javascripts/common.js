/**
 * 求两个数组的交集
 * 
 * @param {[array]} a [数组A]
 * @param {[array]} b [数组b]
 * @return {[array]} [交集]
 */
function ArrayIntersection(a, b) {
	var ai = 0, bi = 0;
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
	for ( var i = 0; i < a.length; i++) {
		var flag = true;
		for ( var j = 0; j < b.length; j++) {
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
	for ( var i = 0; i < l; i++) {
		for ( var j = i + 1; j < l; j++) {
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
		for ( var i = 0; i < l; i++) {
			for ( var j = 0; j < l2; j++) {
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
		for ( var i = 0; i < l; i++) {
			for ( var j = 0; j < l2; j++) {
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


function navSelected (className) {
	
	var obj=null;
	var As=document.getElementById('toolNav').getElementsByTagName('a');
	obj = As[0];
	for(i=1;i<As.length;i++){
		if(window.location.href.indexOf(As[i].href)>=0){
			obj=As[i];	
		}
	}
	obj.className=className;
}




