# Udemy Course - Ethereum and Solidity: The complete developers guide

* [Course](https://www.udemy.com/ethereum-and-solidity-the-complete-developers-guide/learn/v4/overview)
* [Repo](https://github.com/StephenGrider/EthereumCasts)

## Section 1 - What Is Ethereum?

### Lecture 3 - A short history lesson

* in Oct 31. 2008 Bitcoin white-paper was published. "Bitcoin: A P2P Electronic Cash System"
* it described a system to allow peer to peer payments without a financial intermediary (like a bank)
* it cited transaction reversals as an issue with online commerce - the ability of customers to charge back a purchase
* Bitcoin network was online in 2009
* the Bitcoin blockchain was a tool to store a list of monetary transactions between different people
* bitcoin purpose sole purpose was to enable monetary transactions
* people used bitcoins for other exchanges not only monetary
* bitcoin was a simple application
* in December 2013 Ethereum White paper was published. "Ethereum: The Ultimate Smart Contract Decentralized Application Platform"
* Its creator envisioned using blockchain technology to create more complex applications, he proposed use of ethereum to create sub crypto currencies, domain registration systems and gambling apps.
* in his white paer discusses need for more programmatic control over transactions
* he wanted to enable the creation od decentralized autonomous corporations (DAC)
* he introduced the idea of smart contracts, as an entity that can send and receive currency. not just humans
* a smart contract is a piece of code that lives in the ethereum blockchain
* this smart contract can be instructed to do certain things by a person or another contract sending a message to it
* these smart contracts stand in the core of ethereum
* ethereum system was onlin on July 30th 2015

### Lecture 4 - Link to the original blockchain papers

* [Bitcoin White Paper](https://bitcoin.org/bitcoin.pdf)
* [Ethereum White Paper](http://web.archive.org/web/20131228111141/http://vbuterin.com/ethereum.html)

### Lecture 5 - What is Ethereum?

* when working with ethereum we work with a network of computers
* these networks are used to transfer money and also to store data, the combination of money and data strorage is what enables creation of interesting apps
* there are many different ethereum networks
* in reality there is one main ethereum network that everyone uses for the deploymentoif production applications. it is there that ether coins worth real money 
* there are many more networks. test networks used for testing code and transactions
* we can even create our private ethereum network on our computer restricted to just us, or we can open our network to others.
* networks are formed by one or more nodes
* each node is a machine running an ethereum client
* nodes connect to each other to form the network
* anyone can run an ethereum node
* each node we create has a full and seperate copy of the blockchain
* blockchain is a database that stores a record of every transaction that has ever taken place

### Lecture 6 - Interfacing with Ethereum Networks

* there are two different groups of technologies we need to be aware of for connecting to an ethereum network. 
	* technologies used by developers/ created for developers. these are used to create apps that talk to the network through code. (we will use web3.js library). web3 will be our portal to the ethereum network
	* for users of the apps, non programmers, consumers there are other ways to interact with the ethereum network , a) metamask is a chrome plugin b) the mist browser used to browse ethereum applications

### Lecture 7 - Metamask setup

* we find metamask at google chromes webstore
* we add it to chrome
* we click on the fox icon ang see the UI
* we are prompted to enter a password, therefore creating an ethereum account
* the ethereum account will allow us to send and receive money and deploy smart contracts that we create
* we will create multiple accounts for the sake of the course.
* once we create an account we are prompted that a vault is created
* ethereum also provides a mnemonic to restore the password
* once the account is created we get a dashboard with our account balance in ether coins and a list of networks
* by default the main network is selected (public production network)
* there are also various test networks to test code and get free ether to test our contracts
* our test network of preference is the rinkeby test network
* we will do very little onthe main network as transactions on main network cost real money
* the option for localhost 8545 is to host a local ethereum network
* custom rpc gives the ability to enter a custom link to connect to a remote ethereum private network 

### Lecture 8 - Ethereum Accounts

* 