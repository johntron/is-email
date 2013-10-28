var isHost = require('..');

suite('is-host');

test('should recognize valid IPv6 addresses', function () {
	isHost('::0:0:0:FFFF:129.144.52.38').should.be.true;
	isHost('FEDC:BA98::3210:FEDC:BA98:7654:3210').should.be.true;
	isHost('::13.1.68.3').should.be.true;
});

test('should recognize invalid IPv6 addresses', function () {
	isHost('::').should.be.false;
	isHost('FEDC:').should.be.false;
	isHost('::13.1.68.3z').should.be.false;
});

test('should recognize valid IPv4 addresses', function () {
	isHost('192.168.1.1').should.be.true;
	isHost('10.0.1.1').should.be.true;
});

test('should recognize invalid IPv4 addresses', function () {
	isHost('192..1.1').should.be.false;
	isHost('1000.0.1.1').should.be.false;
	isHost('..0.1.1').should.be.false;
	isHost('0.0.1.1').should.be.false;
});

test('should recognize valid hostnames', function () {
	isHost('asdf').should.be.true;
	isHost('asdf.com').should.be.true;
	isHost('asdf.com.').should.be.true;
	isHost('www.asdf.com').should.be.true;
	isHost('asdf.custom').should.be.true;
});

test('should recognize invalid hostnames', function () {
	isHost('~asdf').should.be.false;
	isHost('asdf.com..').should.be.false;
	isHost('.com').should.be.false;
});
