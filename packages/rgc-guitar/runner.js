/*

*/

const ultimate = require('./ultimate/index');
const lacuerda = require('./lacuerda/index');

const actions = [{
		name: 'ultimate',
		run: ultimate.run
	},
	{
		name: 'laCuerda',
		run: lacuerda.run
	}
];

function run(args) {
	const error = validateArguments(args);

	if (!!error) {
		return Promise.reject(error);
	}

	return actions
		.find(action => !!args[action.name])
		.run(args);
}

function validateArguments(args) {
	const mandatoryActions = actions
		.map(action => action.name)
		.filter(actionName => !!args[actionName]);

	if (mandatoryActions.length > 1) {
		return 'Only one option: -c or -u should be present';
	}

	if (mandatoryActions.length === 0) {
		return 'At least one option: -c or -u should be present';
	}

	return null;
}

module.exports = {
	run
};