"use strict";
var Browser   = require("zombie");
var Hapi      = require("hapi");
var Mummy     = require("../..");
var Utilities = require("./utilities");

var expect = require("chai").expect;

describe("The helper utilities", function () {
	it("can create a multi-connection server", function (done) {
		var server = Utilities.createServer();

		expect(server, "wrong type").to.be.an.instanceOf(Hapi.Server);
		expect(server.connections, "incorrect number of servers").to.have.length(4);
		done();
	});

	it("can clear the loaded browser extensions", function (done) {
		Browser.extend(new Mummy(new Hapi.Server()));
		expect(Browser._extensions, "no extensions").not.to.have.length(0);
		Utilities.removeExtensions();
		expect(Browser._extensions, "found extensions").to.have.length(0);
		done();
	});
});
