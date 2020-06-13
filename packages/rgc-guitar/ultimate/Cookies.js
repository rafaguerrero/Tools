/*

*/

const COOKIES = [
	{name : 'bbuserid', value :'10752925'}, 
	{name : 'bbusername', value :'rguerreroclemente'}, 
	{name : 'bbpassword', value :'f3b59e1ee189b68595d47eb45c52d773'}
]

const COMMON = {
	domain: '.ultimate-guitar.com',
    path: '/',
    expires: 1592081716,
}

function getCookies() {
	var jar = [];
	
	COOKIES.forEach(element => {
		jar.push(Object.assign({}, element, COMMON))
	});

	return jar;
}

module.exports = { getCookies }