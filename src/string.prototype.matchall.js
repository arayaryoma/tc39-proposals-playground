const assert = require('assert');
const matchAll = require('string.prototype.matchall');

const str = 'aabc';
const nonRegexStr = 'ab';
const globalRegex = /[ac]/g;
const nonGlobalRegex = /[bc]/i;

// non-regex arguments are coerced into a global regex
assert.deepEqual(
	[...matchAll(str, nonRegexStr)],
	[...matchAll(str, new RegExp(nonRegexStr, 'g'))]
);

assert.deepEqual([...matchAll(str, globalRegex)], [
	Object.assign(['a'], { index: 0, input: str }),
	Object.assign(['a'], { index: 1, input: str }),
	Object.assign(['c'], { index: 3, input: str }),
]);

assert.deepEqual([...matchAll(str, nonGlobalRegex)], [
	Object.assign(['b'], { index: 2, input: str }),
]);

matchAll.shim(); // will be a no-op if not needed

// non-regex arguments are coerced into a global regex
assert.deepEqual(
	[...str.matchAll(nonRegexStr)],
	[...str.matchAll(new RegExp(nonRegexStr, 'g'))]
);

assert.deepEqual([...str.matchAll(globalRegex)], [
	Object.assign(['a'], { index: 0, input: str }),
	Object.assign(['a'], { index: 1, input: str }),
	Object.assign(['c'], { index: 3, input: str }),
]);

assert.deepEqual([...str.matchAll(nonGlobalRegex)], [
	Object.assign(['b'], { index: 2, input: str }),
]);
