/*

*/

const { CookieJar } = require('tough-cookie')

const COOKIE = [
	'bbuserid=10752925;', 
	'bbusername=rguerreroclemente;', 
	'bbpassword=f3b59e1ee189b68595d47eb45c52d773;'
]

const EXPIRE_DATE = "01-Jan-2021 00:00:01 GMT;";
const PATH = "Domain:ultimate-guitar.com;";

function getCookieJar() {
	let jar = new CookieJar();

	COOKIE.forEach(element => {
		jar.setCookie(element + EXPIRE_DATE + PATH, "http://www.ultimate-guitar.com", () => {});	
	});

	return jar;
}

module.exports = {
	cookieJar : getCookieJar()
}