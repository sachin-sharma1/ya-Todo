(function (exports) {
	'use strict';

	function add(a , b){
	return a+b
	}

	function multiply(a , b){
	return a*b
	}

	function subtract( a , b)
	{
	return a-b
	}

	function divide(a , b)
	{
	return a/b
	}

	exports.add = add;
	exports.divide = divide;
	exports.multiply = multiply;
	exports.subtract = subtract;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

}({}));
