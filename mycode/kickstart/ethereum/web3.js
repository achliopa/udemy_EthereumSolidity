import Web3 from 'web3';

// const web3 = new Web3(window.web3.current);

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	// We are in the browser and metamask runs
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are on the server Or the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/e67hJgUvQ6JGIx3MgWzW'
	);
	web3 = new Web3(provider);
}

export default web3;