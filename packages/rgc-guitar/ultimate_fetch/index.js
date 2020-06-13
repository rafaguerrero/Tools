/*

*/

const nodeFetch = require('node-fetch')
const { cookieJar } = require('./Cookies')
const fetch = require('fetch-cookie')(nodeFetch, cookieJar)
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const MY_TABS = 'https://www.ultimate-guitar.com/user/mytabs';

function transformToHTML(text) {
	const dom = new JSDOM(text);
	return dom.window.document;
}

function getMyTabs(html) {
	let store = html.querySelector(".js-store");
	let content = store.getAttribute("data-content")

	console.log("---------------")
	console.log("Tabs : " + content);
	console.log("---------------")
}

function run(args) {
	return fetch(MY_TABS, { method: 'GET',  credentials: 'include' })
				.then(response => response.text())
				.then(transformToHTML)
                .then(getMyTabs)
}

module.exports = {
	run
};