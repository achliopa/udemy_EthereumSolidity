const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

// class Car {
// 	park() {
// 		return 'stopped';
// 	}

// 	drive() {
// 		return 'vroom';
// 	}
// }

// describe('Car', ()=> {

// 	let car;

// 	beforeEach(() => {
// 		car = new Car();
// 	});

// 	it('can park', ()=>{
// 		assert.equal(car.park(),'stopped');
// 	});

// 	it('can park', ()=>{
// 		assert.equal(car.drive(),'vroom');
// 	});
// });

let accounts;
let inbox;

beforeEach(async () => {
	// get a list of all accounts
	accounts = await web3.eth.getAccounts();
	//use one of those accounts to deploy a contract
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: ['Hi there!']})
		.send({from: accounts[0], gas: '1000000'});

	inbox.setProvider(provider);
});

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address);
	});
});