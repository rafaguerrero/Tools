/*

*/

const puppeteer = require('puppeteer');
const Cookies = require('./Cookies');

const MY_TABS = 'https://www.ultimate-guitar.com/user/mytabs';

function getTabs(url, cookies) {
	return new Promise(async (resolve) => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		cookies.forEach(async cookie => {
			await page.setCookie(cookie)
		});

		await page.goto(url);
		await page.goto(url);

		const tabs = await page.evaluate(() => {
			var elements = Array.from(document.querySelectorAll('.pZcWD'));

			let tabInfo = elements.map(element => {
				return {
					author : element.children[0].innerText,
					song : element.children[1].innerText
				}
			})
			
			return tabInfo;
		});
		 
		await browser.close();
		
		resolve(tabs);
	})
}

function printTabs(tabs) {
	tabs.forEach(tab => {
		console.log("Tab -> ", tab);
	})
}

function run(args) {
	return getTabs(MY_TABS, Cookies.getCookies())
				.then(printTabs);
}

module.exports = {
	run
};