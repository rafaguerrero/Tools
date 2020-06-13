const program = require('commander');

function parseArguments() {
	return program
		.option('-u, --ultimate', 'Ultimate Guitar')
		.option('-c, --la-cuerda', 'La Cuerda')
		.parse(process.argv);
}

module.exports = {
	parseArguments
};
