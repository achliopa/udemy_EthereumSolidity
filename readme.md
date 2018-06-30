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

* upon signing up with a new password metamask creates a new account for us
* when metamask creates an account for us it has 3 distinct pieces of information that make up an ethereum account.
	* account address, an id that canbe shared with anyone (like email, username)
	* public key
	* private key
* private and public key authorize the sending of funds from our account to other acounts
* without a private key we dont have access to the account funds
* public and private key are stored as hex and are very large on 10^76 scale
* if you loose the private key also the funds can be lost
* the account is the same regardless of the network we connect to
* we can create multiple accounts

### Lecture 9 - Receiving Ether

* as we said we will work on a test network (rinkeby)
* we go to [rinkeby-faucet](http://rinkeby-faucet.com/). we enter our address and (the tutor) sends a tiny amount of ether
* in metamask we click ... and then copy address to clipboard
* we paste our address to faucet and click submit (we wait.....)
* it takes quite some time to transfer ether from an account to another
* once the transaction completes we et the transaction id , if we go to metamask and rinkeby we see the amount on our account

### Lecture 10 - What's a transaction?

* if we open metamask and go to another network our balance is 0
* our ethereum account is completely decoupled by the ethereum networks.
* networks can have ties to the single account
* the transaction we performed in rinkeby-faucet was comprised of the following steps
	* click submit on form
	* address sent to backend server (node.js)
	* backend server used web3 lib to create a 'transaction' object
	* backend server sent 'transaction' object to the Rinkeby test network
	* backend server waiter for transaction to be confirmed
	* backend server sent success message back to the browser
* we can think transaction a a record that describes one account attempting to send money to another account
* a transaction is created anytime two accounts exchange an amount of money
* the transaction object contains
	* a nonce: how many times the sender has sent a transaction (to any receiver)
	* to: address of account this money goes to
	* value: amount of ether to send to the target address
	* gasPrice: amount of ether the sender is willing to pay per unit gas to get this transaction processed
	* startGas or gasLimit: units of gas this transaction can consume
	* v,r,s: cryptographic pieces of data that can be used to generate the senders account address. they are generated from the senders private key
* the transaction object does not specify where the money is coming from or some public key key or password
* v r and s prevent malicious acts, stealing, impersonation etc. the are extremely complex pieces of data. they are generated by the senders private key. this is what we call one way process. you cannot back calculate private key from v r and s

### Lecture 11 - Why'd we wait?

* once the transaction object is generated it is sent to the ethereum network for validation. the reply took 30 seconds aproximately. 
* a logic question is why the confirmation took so long?
* the answer is the blockchain
* the reason blockchain is so resource intesive and difficult is the following
* when cryptocurrencies where designed the vision was to replace actual money. in that sense the system should be robust enough to handle billion of transactions among millions of people
* blockchain is not complicated without reason. it is because it has to solve an incredibly difficult problem. the representation in transfer of millions, even trillions of dollars between people
* when our transaction was sent by web3 to the rinkeby test ethereum network. it went to a particular node (this node communicates with the rest of the nodes)
* this node has an entire copy of the blockchain (essentialy a database)
* there is a possibility that other transactions came at the same time to the same node.
* this node will take these transactions and assemble them in one list of transactions (a block)
* the node will then run some validation logic on this block. that validation logic takes 30 secs
* validation is also known as mining
* so when the transactions in a node get assembled into the block the node starts running some 

### Lecture 13 - Basic Blockchains (Crash Course by Anders Brownworth)

* we start by looking into SHA256 hash. a hash looks like a bunch of random numbers
* a hash can be produced by a stream of data. whenever there is any change on the byte stream. hash changes. if i erase and retype the same bytestream thehash is the same
* so a hash is a digital fingerprint of data. same data same hash
* no matter how many the data the SHA256 hash is alwas same size.
* so a SHA256 takes a data stream (a string) and makes a digital fingerprint the hash
* a block is a similar concept but apart from the data string is has a nonce(number) and a block(number). also its hash starts with 4 zeroes (signed block)
* once we type in the data string the 4 zeroes dissapear so the block is not signed anymore. then the nonce come to play. as the nonce is a number that fits the data string to make the 4 zeroes in the hash reappear (signed)
* mining is the process of trying to find a nonce that for a specific stream of data (string) will give 4 zeroes at the start of the hash
* a block chain is a series of such blocks. their block number is incremented 1,2,3 depending on their position in the list (array) . also they have one more field. Previous
* previous contains the hash of the previous block in the list. 
* the first block in a chain has pevious set to 000000000000000000...
* the rest is a block like we described before
* if i change the data in the last block, its hash changes (no 4 zeroes in the start) so  its invalid. the previous blocks are valid though
* if i change the data in a block higher in the chain, this and all the next blocks become invalid
* to make the altered blocks valid again, i have to remine (find the nonce that gives a valid hash) each and every one, starting by the highest in the chain and going down
* but how will we know that the blockchain has been remined?
* once the blockcahin has been distributed to peers all of them have an exact complete copy of it. they are identical (hashes an everything)
* a blockchain once remined in a peer node, is no longer an exact copy of the blockchain in the rest of the peers as it has been rehashed. the hashes in the remined blocks are different (even though they start with  0000)
* the blockchain version that exists in more peers wins
* checking is easy as only the hash of the last block has to be compared
* up to now the blocks data section is a string of chars. this is not very useful. usually blocks data section is a set of tokens (money transactions: amount,from,to). if i change anything block is not valid and so on... a set of transaction semanticaly is represented as Tx
* blockchain resists and protects again modification
* blockchain does not store users acount balance. only the transactions
* generating money is represented by the coinbase transaction (amount , to)
* dispertion of new money is controlled
* by goig back to the previous blocks one by one we can calculate the balance and verify the availability of funds. 
* this is how a currency is run on blockchain
* Blockchain is the best way to resist tampering of data in a distributed fashion
* it is good for small data like transactions
* it established aggreement on what has happened in the past (immutable history)

### Lecture 13 - Part2: Public/Private Keys and Signing

* what we saw before is how blockchain works in the financial context. (transctions that move money from one to another)
* the problem that arises is how to stop someone from adding a transaction that spends money from another user by sending them to someone else
* to protect against unauthorized creation of transactions we need to look into an other cryptographic primitive, namely public/private key and use them for signatures
* the public/private key pair is unique. the private is meant to be kept safe. public key is derived from the private in a unique 1to1 relationship
* the public key is meant to be known by anyone. there is no way to guess the private key by having th public key
* the key pair is used to produce signatures. the sender has a message (data string). he uses his privatekey to sign it (with a crypto algorithm). this creates a message signature (hash)
* the receiver gets the message and the message signature. he uses the senders public key, the message and the message signature and the verify (algorithm). 
* this verifies that whover signed this message to produce the signature had access to the senders private key
* in a transactional context there is no message but transactions. also the to and from is not just a user name but a users public key
* the transaction contains the signature made by the sender of the transaction. so the receiver of the transaction can verify the validity of the transaction (signature,message/transaction/senders public key)
* so essentialy a bloc ktransaction has 4 elements (amount,sender public key, receiver public key, trasaction signature)
* changing anything in the transaction breaks the block and the transaction signature. remining the block doesnt help it as the block is fixed but the signature does not. only the original sender can change it!
* anyone can make a private/public key for himself. there is no need for a centralized authority

### Lecture 14 - Block Time

* the definition in the previous video is of a generic general use blockchain
* in previous lecture mining was linked with looking for a hash with leading zeroes
* this is not 100% correct
* in previous lecture we said that accounts are represented with an address a public and private key all in hex
* if we convert the block hash to decimal (in 10^72). less than a typical SHA256 hash that is 10^76. so in reality we are looking not for a hash with leading zeroes buth a hash less than a target value. to do it keeping the data unchanged the key is in the nonce value
* the blockchain hashes are 64 characters long so they range from 0 to 1.15x10^77
* the complexity of the algorithm is something like giving 64 16sided dices and tell you yo roll till wou get a value less than 100. this means rolling over and over again (rehashing)
* this is why mining (rehashing) takes so much time. this time is called block time
* this explains the wait of time to validate a transaction. these 30secs is block time + distribution time of block to other nodes
* ethereum network has a blocktime of 15seconds. so in a perfect world a block would take 15secs and the the network would go on to calculate the next block (next set of transactions)
* what actually happens is that a new target value for the hashes is adjusted after every single block calculation. if the previous took so long it will lower the difficulty. if it was too easy it will raise the difficulty of the target
* the hash is calculated by the whole network. that explains the adjustments on the target. as the number of nodes and their processing power is always in flux the ability to solve the hashing problem varies over time [demo](etherscan.io/chart/blocktime)

### Lecture 15 - Smart Contracts

* a short definition of a smart contract is an ethereum account controlled by code and not by a human
* the code dicates the smart contract how to behave
* a smart contract has the properties of a human account (nonce, keys, address)
* the extra properties in a smart contract account are:
	* balance: amount of ether this account owns
	* storage: data storage for this contract (app related data, small amount of data)
	* code: raw machine code for this contract (machine level compiled code)
* the smart contract knows what it has to do (based on the code)
* the acounts we create in metamask are called external accounts (owned by humans) and are decoupled from ethereum networks
* the contract accounts containing the smart contract are network specific (not accessible from othern networks)
* in our dev machine we author some code that serve as a contracts source(dictates how it should behave and how to spend money)
* we then take the contract code and deploy it to a network. an instance of the contract is created in the network (contract account)
* a contract code can be deployed multiple times (multiple instances) to one network or multiple networks (class - object relationship)

### Lecture 16 - The Solidity Programming Language

* now we will look into the programming language used to write the code instered ina smart contract
* the programming language is called *Solidity* authored specific for smart contracts
	* is written in .sol files
	* is stringly typed
	* similar to javascript
	* has several huge,gigantic 'gotchas' or potential bugs
* the programs are always relatively small
* the solidity is used as follows. a contract definition is written in solidity -> a solidity compiler is used -> a byte code ready for deployment in the ethereum network is produced and an application binary interface (ABI)
* the ABI is used from our application code (eg Javascript) to interact with the bytecode that has been deployed in the ethereum blockchain

### Lecture 17 - Our First Contract

* to write our first smart contract in soilidity we will use an online editor called *Remix*
* [Remix link](https://remix.ethereum.org)
* we specify the version of solidity our contract will be based on
```
pragma solidity ^0.4.17;
```
* we define our fisrt contract and declare our first instance variable in it
```
contract Inbox {
    string public message;
}
```
* public means our variable will be accessible anywhere in the world (network)
* we write a set of functions associated with the contract, a constructor ans a getter/setter
```
    constructor(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string) {
        return message;
    }
```

### Lecture 18 - Contract Structure

* the complete contract solidity code
```
pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    constructor(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
    function getMessage() public view returns (string) {
        return message;
    }
}
```
* `pragma solidity ^0.4.17;` specifies the version of Solidity our code is written with, it is used by the compiler. contract wont break when new solidity version arrives
* `contract Inbox {` defines a new contract that will have some methods and variables
* `string public message;` declares all of the instance variables and their types that exist in this contract. these are storage vars that exist in all lifetime of the contrsct
* `constructor( .... ` defines different functions that will be members of this contract
* the public variables are called STORAGE variables. they exist in eternity in the ethereum network. inside the block in the blockchain. Persistent
* constructor functions are called one time when the contract instance is created

### Lecture 19 - Function Declarations

* the getMessage function signature `function getMessage() public view returns (string)` can be split as folows
	* `getMessage()` is the function name + input arguments 
	* `public view` is the function type declaration. 
	* returns (string) is the return types
* the most common function types used are 
	* public: anyone with an account in the etherium network can call this function 
	* private: only this contract can call this function
	* view: this function returns data and NOT modify the contracts data
	* constant: this function returns data and NOT modify the contracts data
	* pure: function will not modify or even read the contract's data
	* payable: when someone call this function they might send ether along. they are used when people pay us money to use our code in the contract
* public and private are mutual exclusive (only one per function) and do not have to  do anything with security. just visibility
* view and constant mean the same thing. view is newer
* returns keyword specifies the type of data returned by the function (only for view or constant types)
* syntacticaly is acceptable to return a val from a function that modifies our contracts data but is a NONO. we CANNOT do it

### Lecture 20 - Testing with Remix

* our workflow is 
	* Use Remox Editor to write correct solidity code to define our contract
	* Do compilation to bytecode
	* Deploy into a fake sandbox ether network in the browser of a Contract Instance
* all is done in Remix which is more than just an editor. it also provides a console for testing
* we click compile and then run. we see a number of config settings
* we use Javascript VM as environment (inbrowser virtual ethereum network)
* i select one of the VM network test accounts. each one has 100 ether
* we leave gas limit and value as default
* we select our Inbox contract (the contract to deploy)
* the tool sees the constrructor of our contract and presents is in the GUI
* we enter and arbitrary text in initialMessage and click deploy
* in therminal we see creation pending 
* in the UI we see the id of the new contract instance(Inbox) and the contained functions and vars available to interact with the contract (function invocation)
* when we invoke a view function or we try to see a var in the returned val we get an index as this is the val index in case there are multiple returned vals. also we get the type of data the val is
* when we input strings in remix we must wrap them in double quotes
* a GOTCHA is that a public var creates a getter with the var name that is publicly available as a function . same as getMessage in our case. this is a solidity quirk

### Lecture 21 - Redeploying Contracts

* as we have seen getMEssage() is actually not needed so we wnat to delete it and redeploy the contract
* we delete it in the editor. it does not get automaticaly redeployed. we need to redeploy it
* it is good to delete the previous instance prior to redeploying (x button in remix), first we need to compile

### Lecture 22 - Behind the Scenes of Deployment

* what actually happens in the ethereum network when we deploy a contract?
* in previous lectures we talked about ethereum network accounts and ethereum network transactions. deployment or instantiation of a contract is very similar
* when we deploy we use an external account (human account) to issue a transaction object that creates a contract account(s) in the ethereum network. the network itself creates the account based on what we inser in the transaction object
* this object is visible in the remix console
* The External Account to Create a Contract transaction object contains:
	* nonce: how many times the sender has sent the transaction (external account trying to deploy the contract)
	* to: - blank for new contracts (ethereum network assumes its a new contract, empty one if there is no data)
	* data: compiled bytecode of the contract, our bytecode is available to anyone in the network to read. NEVER PUT a SECTRET IN THE CONTRACT CODE
	* value: amount of *Wei* to send to the target address. initial BALANCE OF the contract account
	* gasPrice: amount of wei the sender is willing to pay per unit gas to get this transaction processed
	* startGas/gasLimit: units of gas that this transaction can consume
	* v, r, s: crypto data

### Lecture 23 - More on Running Functions Than you want to Know

* why we need a transaction to deploy a contract? if we want to change anything (data) on the blockchain we must submit a transaction
* also we have to wait to be mined (proof of work algorithm) so that transaction gets approved
* when this happens we can be sure that datastore on the blockchain is updated
* so this transaction concept hold even for when we call public functions of a contract that update a value. as this is a piece of date stored on the blockchain (in the contract)
* so message() does not change anything so must not involve a transaction, setMessage() changes the blockchain so it must involve a transaction
* so we see that there are differenct ways in which we run functions on our contracts
* there are 2 ways to invoke functions and they behave differently
	* 'Calling a function' (call): cannot modify contracts data, can return data, runs instantly, free to do e.g message()
	* sending a Transaction to a function (transact): can modify a contracts data, takes time to execute, returns the transaction hash, costs money! e,g setmessage()
* Any time we submit a transaction to the network it takes time to be processed (15 to 30sec)
* Any time we send a transaction to a function it returns the transaction hash WE DOT GET BACK A RETURNED VALUE even if we aks the function to return like below (valid code)
```
    function setMessage(string newMessage) public returns(string){
        message = newMessage;
        return message;
    }
```
* Sending a transaction to a function does cost money. our acoount balance gets decreased anytime we send it. (a little bit)
* When we send the transaction to a publick network (main ethereum) it takes time. when we send it in a test network in a VM (e.g borowser) the block time is tuned LOW VERY LOW so is almost instant. in public test networks the delay is realistic

### Lecture 24 - Wei vs Ether

* all transactions cost money. Ether money
* in Remix the value property is in wei/gwei/finney/ether. these are units of measurement of the same thing in a euro vs cent analogy
* 1 ether == 10^18 wei == 10^9 gwei(gigawai) == 10^3 finney
* wei is the smallest fractional unit. there is no smaller one
* there are nummerousconverters to calculate exchange rate between these units

### Lecture 25 - Gas and Transactions

* we will talk now about the gas system in etherium
* the gas system is meant to measure how much work we are executing with our code
* in real world if we write some code and deploy it to some remote server to run we must pay money
* the same token is true in the world of ethereum
* in order to get someone else to run our contracts we have to pay them money. this money is reflected in terms of gas
* anytime we send a transaction to an ethereum network there is a gas price attached to it.
* e.g the transaction of running the function setMessage() costed 10961 gas
* to see the difference we write a resource intensive function in our contract
```
    function doMath(int a, int b) {
        a+b;
        a-b;
        a*b;
        a == 0;
    }
```
* it is interesting to see what it would take to pay someone to run this code for us
* there is a [online spreadsheet](https://docs.google.com/spreadsheets/d/1n6mRqkBz3iWcOlRem_mO09GtSKEKrAsfO7Frgx18pNU/edit#gid=0) with the gas prices
* a *gasPrice* is the amount of wei the sender is willing to pay per unitgas to get this transaction processed
* *startGas/gasLimit* units of gas that this transaction can consume
* the above properties are specified in the transaction object.
* gas can be calculated based on the prices, but not always. if we have a for loop we cannot calculate beforehand. therefore we set an upperlimit
*eg our math fuction costs (3gas'add'+3gas'subtr'+5gas'multiply'+3gas'multiply') = 14gas
* for our test doMath function if we set in transaction gasPrice=300 and gasLimit=10. we see that our limit is below the budget. wht happens then?
* each step of operation is executed by somebody else. this one before starting know the remaining gas for the transaction (initial -steps so far) and knows how much his step costs if there is not enough for his step he stops execution and our function returs. in our case it would stop after substract
* we only pay the amount of gas that was actually consumed not our budget. the cost of our trtansaction in wei would be 300 wei/gas * 14 gas = 4200 wei
* current price in main ethereum is 1gwei/gas...
* everyone that makes the transaction has to pay the price. so things get very expensive soon
* if Facebook run on blockchain. each pst would cost money...

### Lecture 26 - Mnemonic Phrases

* currently we havce one account in metamask with an address,private/public key pair.
* in a future world where ethereum has prevailed and has replaced actual money we might need to keep our money in different accounts. it is very hard to remember the credentials of all these accouts.
* that why the 12 random word mnemonic phrase is used. from this phrase using the BIP39 mnemonic algoritm we can recreate all our accounts
* in metamask i can create as many accounts as i want. all are linked to me and their common link is the mnemonic i entered in first account. these accounts are pregenerated
* metamask has no mnemonic reset. we create it the first time and thats it (we need to reinstall metamask)
* this mnemonic is used to generate a series of accounts
* the tool to generate accounts with mnemonic is [link](https://iancoleman.io/bip39/) i enter the mnemonic and i see a series of derived addresses for ether. the first one matches our first account
* mnemonic is very effectivew for password retrieval

### Lecture 27 - Getting more Ether

* with the the basic theory under our belt we are ready to move into building our apps. to test them we need ether, lots of it. so we need a way to load our account in rinkeby test network with ether for testing
* we will use a faucet to get more ether [faucet](faucet.rinkeby.io)
* this is a bit trickier to use. it requires posting our address to a social network and gives a lot of ether. this is to prevent spamming and loading the network

## Section 2 - Smart Contracts with Solidity

### Lecture 29 - Contract Deployment

* our challenge to figure out how to deploy our inbox contract to a public network like rinkeby outside of the remix Vm
* the workflow is very similar to how we did it in remox: write contract source => use solidity compiler to compile => produce ABI & Contract Bytecode => deploy bytecode to network
* the tool of choice for the job is [Truffle](https://truffleframework.com/) for all the above steps.
* its a cli built in javascript (node) project
* truffle is undergoing rapid developmentm some things are buggy, stuff breaks. everything around ethereum moves fast
* to protect ourself from change we will write our own tool to perform the workflow of deploying in rinkeby the inbox contract

### Lecture 30 - Boilerplate Requirements

* we will write our own custom node boilerplate project in node that must do the following:
	* need to be able to write solidity code in a js project => set up solidity compiler to build our contracts
	* need some way to rapidly test contracts without doing the manual testing we were doing in remix => settup a custom mocha test runner that can somehow test solidity code
	* need some way to deploy our contract to public networks => setup a deploy script to compile + deploy our contract
* we create aproject folder *inbox* and npm init in it

### Lecture 31 - Project File Walkthrough

* in our project root folder we will create a folder named *contracts* to store our solididy contracts source files. in our case *Inbox.sol*
* we will create a test folder our our mocha constracts test code *Inbox.test.js*
* in root we have *package.json* with our scripts and 2 js files: compile.js and deploy.js which are self explanatory
*  we make contracts folder, touch Inbox.sol and cp all our inbox contract source code from remix
* for Sublime text we use [Ethereum plugin](https://packagecontrol.io/packages/Ethereum)

### Lecture 33 - Compiling Solidity

* the deployment process and testing process assumes we have a compiled solidity contract
* we will use the solidity compiler to do so. the output ABI is used by JS and bytewcode gets deployed
* we install solidity compiler as a npm module *npm install --save solc*
* we create the compile.js file in project root 
* we DO NOT import the solidity source file using node ES5 import `require('./constracs/Inbox.sol');` it will throw an error. we must read the file contect and parse it in the compiler. we use built in modules path and fs. path to reach the file and fs to read it
```
const inboxPath = path.resolve(__dirname, 'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');
```
* we import the solidity compiler `const solc = require('solc');`
* we specify the amount of source files we want to compile `solc.compile(source,1);`
* we console log it to see the output

### Lecture 34 - The compile Script

* we test compile from terminal with *node compile.js*
* the output is a js object. in that object there is a *contracts* property that contains an object. this contains our contracts (Inbox) as JS objects with several properties
* the properies we are interested in are a) the *bytecode* for deployment b) *interface* the constract ABI
* the ABI lists all the available functions to be called and their arguments (in and out)
* we export the part of compile output that interest us (Inbox) with `module.exports = solc.compile(source,1).contracts[':Inbox'];`

### Lecture 35 - Testing Architecture

* now with our source compiled we can think of how to test it
* we will do functional testing locally. we will test any exposed function.
* to do so we will use a Local Ethereum Test Network. the network is going to be created by a npm library called Ganache (previously known as TestRPC)
* we will take the bytecode from our compiled object and feed it to Ganache for deployment on the test network
* we will also use the ABI the JS interface and feed it it to Web3 which gives us access to the deployed contract in the test network

### Lecture 37 - Installing Modules

* we install a couple of npm modules `npm install --save mocha ganache-cli web3@1.0.0-beta.26`
* web3 is undergoing rapid development
* we create anew folder in project root called test and in there we make a file Inbox.test.js
* in this file we will write our mocha tests (assertons)
* in test file we import libraries
```
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
```
* Web3 is imported as uppercase because what we import is a constructor function

### Lecture 38 - Web3 Versioning

* currently web3 is the must-go solutiopn to communicate between a JS webapp and the ethereum world. it is our portal to the ethereum world
* web3 versions are split into 2 large groups:
	* v0.x.x aka Primitive interface supports only callbacks for async code
	* v1.x.x and up supports promises and async/await
* most currently available documentation is for older version

### Lecture 39 - Web3 Providers

* each web3 instance connects to an ethereum network
* we can use the Web3 constructor function to make multiple instances in a project to connect to multiple ethereum networks
* we use the Web3 constructor to make an instance of web3. 
* upon instantiation we need to immediately do some configuration
* the configuration includes setting a Provider, a communication layer between a web3 libvrary and an ethereum network. like a middleware to send and receive messages
* because web3 is built to talk to an ethereum network it will complain if we dont set a provider
* we use the ganache provider to connect to the local network `const web3 = new Web3(ganache.provider());`

### Lecture 40 - Testing with Mocha

* mocha is a general purpose JS test framework. we can use it to test a frontend app or a backend app.
* the three basic functions it provides are:
	* it: run a test and make an assertion
	* describe: groups together *it* functions
	* beforeEach: execute some general setup code
* a sample test file in mocha is the following:
```
const assert = require('assert');

class Car {
	park() {
		return 'stopped';
	}

	drive() {
		return 'vroom';
	}
}

describe('Car', ()=> {

	let car;

	beforeEach(() => {
		car = new Car();
	});

	it('can park', ()=>{
		assert.equal(car.park(),'stopped');
	});

	it('can park', ()=>{
		assert.equal(car.drive(),'vroom');
	});
});
```
* usually we run mocha as a npm script by adding it to the package.json `"test": "mocha"`
* we run it with `npm run test` or `npm test`
* in a TDD approach we first break the test and then fix it
* beforeEach help our test code be DRY

### Lecture 41 - Mocha Structure

* the flow of testing an ethereum contract with mocha is the following:
	* 1. mocha starts and loads our test file
	* 2. deploy a new contract to test network (ganache) using beforeEach
	* 3. manipulate the contract (call a function) using it
	* 4. make an assertion about the contract (check persistence) using it
	* repeat from step 2
* a contract is deployed with a transaction . it needs an account . the ganache network takes care of it (unlocked accounts no keys needed)

### Lecture 42 - Fetching Accounts from Ganache

* in the first actual test we will use web3 to retrieve a list of accounts that ganache automatically creates in the ethereum network
* these are unlocked accounts thus easy to test (no keys or privacvy). we can freely send and receive ether from these accounts
* confirming the existence of an account is crucial as we need an external account to deploy contracts
* we retreive these accounts in a beforeEach() statement as we will need them in our actual mocha tests for transactions
* to get a list of accounts we use the eth (ethereum module) of our web3 instance
* every function we call in web3 is asynchronous returning a promise
```
	web3.eth.getAccounts()
		.then((fetchedAccounts)=> {
			console.log(fetchedAccounts);
		});
```
* we write adummy it test to test wb3 fetchacounts
* we run mocha `npm test` and SUCCESS we see the account addresses on terminal

### Lecture 43 - Refactor with Async/Await

* we refactor the code to use async/await
```
let accounts;

beforeEach(async () => {
	// get a list of all accounts
	accounts = await web3.eth.getAccounts();
	//use one of those accounts to deploy a contract
});
```

### Lecture 44 - Deployment with Web3

* to deploy a contract we need its bytecode from the compiled contract
* we import it using object destructuring from the exported object `const { interface, bytecode } = require('../compile');`
* we deploy the contract
```
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: ['Hi there!']})
		.send({from: accounts[0], gas: '1000000'});
```

### Lecture 45 - Deployed Inbox Overview

* we will break down the contract deploy code
* `new web3.eth.Contract(JSON.parse(interface))` teaches web3 about what methods an Inbox contract has
* `deploy({data: bytecode, arguments: ['Hi there!']})` tells web3 that we want to deploy a new copy of this contract (passing the specked arguments)
* `send({from: accounts[0], gas: '1000000'})` instructs web3 to send out a transaction that creates this contract (paying the gasprice)
* the Contract constructor allows us to interact with existing contracts or create new contracts. its uses as argument the ABI.
* we use JSON parser as the compiled contract is JSON and we need to pass it as JS object
* the deploy methods creates a transaction. it needs the bytecode and the contracts constructor arguments
* the actual deploy is done by the send method (web3 - network comm)
* web3 is used not only to deploy but to interact with existing contracts
* to interact with a deployed contract from web3 we need: ABI, contract address
* to  create a new contract" ABI, Bytecode
* the returned value is the js representation of the deployed contract on blockchain
* we look into the console log to see its properties
* there is a lot  of info onthe Providers
```
 providers: 
      { WebsocketProvider: [Function: WebsocketProvider],
        HttpProvider: [Function: HttpProvider],
        IpcProvider: [Function: IpcProvider] },

```
* IPC is used when the network is on smae machine
* methods property lists all available methods we can interact with
```
  methods: 
   { setMessage: [Function: bound _createTxObject],
     '0x368b8772': [Function: bound _createTxObject],
     'setMessage(string)': [Function: bound _createTxObject],
     message: [Function: bound _createTxObject],
     '0xe21f37ce': [Function: bound _createTxObject],
     'message()': [Function: bound _createTxObject] },
```
* options gives additional info on the deployed contract such as its address
```
 options: 
   { address: [Getter/Setter],
     jsonInterface: [Getter/Setter],
     data: undefined,
     from: undefined,
     gasPrice: undefined,
     gas: undefined },

```
* we need the address to interact later on

### Lecure 46 - Asserting Deployment

* we see what fuunctionality we want to test.
* we want to test that inbox message gets a default message and that we can change it, also we need a test to check if we can deploy at all
* to check the deployment we need to check that the returned deployed object has an address attached to it
```
	it('deploys a contract', () => {
		assert.ok(inbox.options.address);
	});
```
* we use assert.ok that checks for existence of a value (not  null or undefined)

### Lecure 47 -  Web3 vesion fix

* to avoid code crashes due to the web3 version we use we update our test code as follows
```
const provider = ganache.provider();
const web3 = new Web3(provider);
...
		.send({from: accounts[0], gas: '1000000'});

	inbox.setProvider(provider);
```

### Lecture 48 - Verifying the Initial Message

* in the next test we test that when we create anew contrsct we get a default message
* to test it we look into the deployed inbox and look for the message property
* in remix to get the deployed contract instance (public) variables we used a method with the variable's name (message()) on the deployed contract
* this is 'calling' function as we dont modify anything on contract and blockchain. no cost, no transaction, no big wait time.
* still an async method, the actual call is `const message = await inbox.methods.message().call();`
* first we reference the contract (contract instance as JS object). contract was a property called methods. it is an object (for inbox it has 2 methods message() and setMessage()). we call the first one
* to do the call we chain call(). this is because in the method 'mesage()' we pass the input arguments of the function. the call() accepts as arguments params that customize the transaction, e.g gas
* the actual assertion is `assert.equal(message, INITIAL_STRING);`
* we run the test and both pass

### Lecture 49 - Testing Message Updates

* we will no test the setMessage() method. first we will change the message(non free transaction) and then retrieve it (free call). the second part we already have
```
		await inbox.methods.setMessage('Goodbye').send({from: accounts[0]});
		const message = await inbox.methods.message().call();
		assert.equal(message, 'Goodbye');
```
* like deploy this is a transaction so we use send() passing transaction arguments. passing the from is mandatory.. cost??
* what this transaction returns is a hash. we dont use it here

### Lecture 50 - Deployment with Infura

* with the testing done, we need to write a string that will take our contract copileit and deploy it in a real test network(rinkeby). the process is the same as deploying in the actual main ethereum
* as we saind we use a provider to a web3 instance to connect to a network. 
* unlike ganache connecting to a real test network is more compicated.
* An Infura Node in the actual Ethereum Network exposes an Infura API which tals to the Web3 Provider to connect to our web3 instance in our app. the provider uses the account mnemonic as the account is protected
* the infura node talks to all the nodes in the Ethereum Network
* we need an account with ether to do it a locked account.
* the provider uses the account menmonic to get access to our accounts (publ, priv keys). ganache provided inbuild accounts. now we need to provide them
* to connect to the network we need to connect to a node. this node can be a local node on our machine (we need to set it up, non-trivial task) or a node provided by a service (Infura)
* Infura is a public API, which give us the ability to connect to an Infura hosted ethereum node on the Rinkeby

### Lecure 51 - Infura Signup

* we go to [Infura](https://infura.io) -> Get started -> SignUP -> Get API key
* the api key is not attached to an account or network. is Infura related
* Infura sends an email will a list of links per network (with our API key prepopulated)

### Lecture 52 - Waller Provider Setup

* we install a module to help us with connection *truffle-hdwallet-provider' and install it in our project `npm install --save truffle-hdwallet-provider`
* this module is actually a special provider that allows connecting to a network and unlocking an account (with mnemonic)
* we create a new source file *deploy.js* in root folder to host our code to deploy on rinkeby
```
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'YOUR ACCOUNT MNEMONIC',
	'YOUR INFURA LINK + APIKEY'
);
const web3 = new Web3(provider);
```
* we code above imports the depndencies and creates a truffle profuder with the credentials then passes it to the web3 instance
* the instance is completely enabled to perform transactions (we have ether)

### Lecture 53 - Deployment to Rinkeby

* our code above was prep code. now we will do the actual deployment
* the code will be like the test file deploy
* we have 2 pieces of async code. 1) get the accounts 2) do the deploy. we want to use async/await
* async await works in a function setting so we write a function and call it immediately
* we get our accounts (linked to the mnemonic). go to first one (with ether) and log it
* our deploy code is 
```
const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account: ', accounts[0]);
	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: '0x' + bytecode, arguments: ['Hi there!']})
		.send({gas: '1000000', from: accounts[0]});
	console.log('Contract deployed to: ', result.options.address);
};
deploy();
```
* we make sure to log the contract instance address for reference later on
* we run with `node deploy.js` and wait, we get reply
```
Attempting to deploy from account:  0xd010bB5A2A78cC3890DaBDaC738bc3419bF0BF82
Contract deployed to:  0x28D6b47553dA4461fBEf2dce7E18Af742B340A04
```

### Lecture 54 - Observing deployment on Etherscan

* the address we got bakc is the address of our contract in the rinkeby network
* if we know how to interact with the contract we can builld a web app on top of it
* to see our contract in network we use [etherscan](https://rinkeby.etherscan.io) passing its address
* we see the tx id, the block it was included into, the actual cost, the bytecode
* we can see the bytecode as optcode (assbmly like ether commands)

### Lecture 55 - Deployed contracts in remix

* an easy to use to interact with deployed contract without code is using Remix
* we cp our solidity code from inbox.sol into remix editor compile it and hit run
* we select injected web3 (rinkeby) environment
* we insert our account on rinkeby (autocomplete from metamask)
* we dont want to deploy new contract but interact with existing contract.
* we insert the address (from ehterscan or console) and hit at address
* we get the exposed methods... hit message( ) and see our initial message on console.
* now we work on a real network so our transactions have delay
* we set a new message and hit setmessage. we get a metamask popup (REMIX needs metamask) asking us to confirm the transaction to the contract (and the cost involved)
* we submit and our trnasction gets processes. we confirm in etherscan and by invoiking getter
* invoking the setter was cheaper than deployment

### Lecture 56 - Project Review

* Write the contract
	* why we prefer web3 and JS over remix to test contracts? writing the contract is nothing compared to the app that runs on top of it. we use remox to quickly test our contract and  then move to JS
	* remix does not support git or versioning
* Compile the contract
	* we use solidity compiler (solc). we can compile multiple files with multiple contracts. `.contracts['filename:Contractname']`
	* instead of source(file) in compile() method we can pass a path
* Test the contract (locally)
	* we used ganache and local network and web3
	* we used ABI and bytecode from copliled file
	* mocha to test
* Deploy contract on real network
	* used truffle-hdwallet-provider as provider and Infura as network node provider

## Section 3 - Advanced Smart Contracts

### Lecture 57 - The Lottery Contract

* we will write a more complex contract. its going to be a lottery, a raffle
* our contract will be a lottery contract with a prize pool (in ether) and a list of participating players
* when someone sends ether to the contract, he is registered in the players list and his ether is added to the prize pool
* after some people enter the contest the manager tells contract to pick a winner
* the contracts picks a winner and sends all the prize pool to the winner
* the contract then resets and is open to new participants
* this contract will need security

### Lecture 58 - Lottery Design

* variables: 
	* manager: address of person who created the contract (he can tell lottery to pick a winner)
	* players: array of addresses of people who have entered
* methods: 
	enter: enters a player into the lottery (he must send ether)
	pickWinner: randomly picks a winner and sends them the prize pool

### Lecure 59 - Basic Solidity Types
	
* we use remix to flesh out the contract
* we need to set as va account addresses. we can set them as strings
* solidity offers an address type for store such variables
* Basic Solidity Types:
	* string: sequence of characters e.g "Hi there!"
	* bool: boolean value e.g true, false
	* int: integer,signed. no decimals e.g 0, -3000, 54434
	* uint: unsigned int, positive e.g 0, 4599, 5435
	* fixed/ufixed: *fixed* point number,  Number with decimals e.g 20.0001 -43.45
	* address: has methods tied to it for  sending money e.g 0x5487fgshjkgf5178hsk
* in contracts we avoid doing math. we use contracts to store critical and secure data
* we dont want to pay money for doing calculations. only simple math

### Lecture 60 - Starting the Lottery Contract

* we declare the manager var with `address public manager;`
* public or private declaration offers no security only visibility
* we want to set the manager address upon creation so we set it at constructor
* we dont want to pass the address as an input argument to constructor but find it automatically from the deployment transaction

### Lecture 61 - The Message Global Variable

* to get the address we will use a global variable icluded anytime we invoke a function in a solidity contract
* the flow of info is Account => Transaction => Contract Instance. `msg` object decribes the 2 first steps
* `msg` global object gives info about who created the transaction and the transaction itself
* this object is avaliable not only on deployment but at any function invocation
* The msg Global variable proiperties are:
	* msg.data: 'Data' field from the call or transaction that invoked the current function
	* msg.gas: Amount of gas the current function invocation has available
	* msg.sender: Address of the account that started the current function invocation
	* msg.value: Amount of ether (in wei) that was sent along with the function invocation
* the msg.sender contains the address we want
* our contract so far is:
```
pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    
    constructor() public {
        manager = msg.sender;
    }
}
```
* we run it in remix (local VM) and confirm it works ok

### Lecture 62 - Overview of Arrays

* apart from Solidity Basic Types we have Reference Types as well (e.g array)
* Solidity Reference Types:
	* fixed array: Array that contains a single type of element. has an unchanging length. e.g int[3] --> [1,2,3] , bool[2] --> [true,false]
	* dynamic array: Array that contains a single type of element. Can change is size over time. int[] --> [1,2,3]
	* mapping: Collection of key value pairs. Think of Javascript objects, Ruby hasses, Python Dictionary. All keys myst be of the same type, and all values must be of the same type. e.g mapping(string=> string)
	* struct: Collection of key value pairs that can have different types. e.g
	```
	struct Car {
		string make;
		string model;
		uint value;
	}
	```
* the number in brackets distinguished a fixed froma dynamic array
* for our lottery players var we will use dynamic array
* arrays support the .push(element) method, .length property, array[index]
* they are 0 based
* like a normal var we can access an array e.g. myArray witha method call myArray()
* but this method will need an input argument (index) to return the element in that position. so it returns only INDIVIDUAL ELEMENTS
* to return an entire array we need to write a function
```
function getMyArray() public view returns (uint[]) {
	return myArray;
}
```
* this technique works ok for simple arrays

### Lecture 63 - Overview of Mappings and Structs

* mappings are used for storing collections of things
* structs are used for complex data, a singular thing with its properties

### Lecture 64 - Big Solidity Gotcha

* we will see a big gotcha of fixed and dynamic arrays
* a JS 2D 3by3 array is like:
```
const myArray = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
```
* this array has nested arrays. in Solidity language there is no problem with such a structure (Nested dynamic arrays)
* In ABI/JS/Web3 World we cannot pull or get a nested dynamic array from solidity
* this is not a limitation of JS. its a limitation of the bridge between two langs
* Strings inside solidity are represented as dynamic arrays. so WE CANNOT transfer ARRAYS OF STRINGS between solidity and JS

### Lecture 65 - Entering the Lottery

* we declare it as dynaic array ` address[] public players;`
* we implement the enter function to allo users to enter.  people to enter need to send ether so our function must be payable. the signature is `function enter() public payable`
* the function is
```
    function enter() public payable {
        players.push(msg.semder);
    }
```

### Lecture 66 - Validation with Require Statements

* we test the enter func in the remix virtual network. we deploy and use an account to enter. we call players with 0 and we see the id
* we call enter without ether..
* we use require() solidity function to enforce rules `require(msg.value > .01 ether);`
* we use msg.value to see the sent ether. the value is in wei but as we require minimum  0.01 ether to participate the value is really large so we use the special expression `.01 ether` which is converted to wei 
* we see that transaction is rejected if we dont send enough ether
* if we send enough it is successful and the address added to the players list
* require sends not clear transaction  rejection messages

### Lecture 67 - The Remix Debugger

* the require error messages in console are obscure
* Remix offers details and debug options in the transaction terminal
* hitting debug we can go through the execution of contract on transaction. we can step in
* using console.log does not work with contracts

### Lecture 68 - Pseudo Random Numbers Generation

* after we have enough players the manager should trigger the contract pick a winner.
* we need an RNG to do that. in solidity we dont get access to an RNG.we need to  fake it. we will use Pseudo Random Number Generator. it can be cheates though
* we will pick a) current block difficulty, b) current time, c) addresses of entrants
* we will pass them all to a SHA3 algorithm and get a really big number hash that is pseudorandom
* we will use a helper function in contract (private) to calculate the number
```
function random() private view returns(uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
```
* keccak256 is another name for sha3 and is inbuilt. it returns a hash so we need parsing to uint
* we temporary set this func to public to test it in remix. we revert it back to private

### Lecture 69 - Selecting a Winner

* the pseudorandom number will be moduled on the players.length (random()%players.length) => random number between 0 and players.length
```
    function pickWinner() public {
        uint index = random()%players.length;
    }
```

### Lecture 70 - Sending Ether from Contracts

* we get the address of the player that won with `players[index];`
* addresses in solidity are objects packed with methods and props
* a method we can call is .transfer() to transfer money passing the amount of wei to transfer to this address. 
* to send all ether in the contract we use `this.balance;`
* the complete command is `players[index].transfer(this.balance);`
* we redeploy in remix and test. it works
* we need to reset after the pickWinner

### Lecture 71 - Resetting COntract State

* after setting money we need to reset the players array without needing to redeploy the contract 
* we use `players = new address[](0);` to create a new empty dynamic array of addresses named players. (0) sets an initial size of 0 (empty)
* if we set a larger number it will be filled with empty hashes

### Lecture 72 - Requiring Managers

* now anyone can trigger pickWinner. we want only the manager to be able to do it.
* also time is a source of randomness so we need to keep it random
* in pickWinner we need to add a require to let only manager account execute it
* `require(msg.sender == manager);`
* we test it and it works. other users when calling the method it throws error

### Lecture 73 - Function Modifiers

* image we implement a  returnEntries() function to return the money to all participants in the case we want to cancel the lottery
* this is an admin level function reserved for the manager. it seems we can use require to enforce that
* in this case we have duplicate code in our contract it breaks DRY principle
* solidity helps keeping the code DRY with function modifiers
```
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
```
* we put there our code and add `_;`
* then in the functions we want to apply this modifications we add the name of the  modifier in the signature
```
    function pickWinner() public restricted {
        uint index = random()%players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
```
* _ is a placeholder indicating tehr est of the function code where modifier gets applied

### Lecture 74 - Returning Players Array

* we want to be able to get all players
* we add anew function
```
    function getPlayers() public view returns(address[]) {
        return players;
    }
```

### Lecture 75 - Contract Review

*  we quickly check our contract in remix to verify correctness
* our contract complete
```
pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;
    
    constructor() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns(uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
        uint index = random()%players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns(address[]) {
        return players;
    }
}
```

### Lecture 76 - New Test Setup

* we will start building our mocha tests to test our web3 interface
* we duplicate our inbox project (use it as boilerplate) as lottery
* rename the project name in package.json
* in contracts folder we rename the Inbox.sol as Lottery.sol and replace teh solidity code witht he newly developed one in remix
* we delete the test file from test folder and create anew one *Lottery.test.js*

### Lecture 77 - Test Project Updates

* our compile and deploy files look into the Inbox file from prev project. we fix that just renaming .
* in deploy.js we remove the deploy configuration object arguments. as our lottery constructor takes no arguments so we delete it

### Lecture 78 - Test Helper Review

* we start by fleshing out our mocha test file
* nothing new. exactly like in inbox. we import the modules and prep our test by deploying the contract using web3 in ganache
```
const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	lottery = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode})
		.send({from: accounts[0], gas: '1000000'});
});
```

### Lecture 79 - Asserting Deployment

* like in Inbox project our first test asserts that the contract is deployed `assert.ok(lottery.options.address);`

### Lecture 80 - Entering the Lottery

* our test are behaviour driven. what behaviour we are interested in? we test it
* we want to make sure that when someone enters his addres is added to the list
```
	it('allows one account to enter', async () => {
		await lottery.methods.enter().send({
			from: accounts[0],
			value: web3.utils.toWei('0.02', 'ether')
		});
	});
```
* as value is passed in wei and a lot of 0 are required we use ewb3.utils. function to convert ether to wei. actually we can convert any denomination to wei by specifying it `toWei('0.02', 'ether')`
* we retrive the list of players from contract with
```
		const players = await lottery.methods.getPlayers().call({
			from: accounts[0]
		});
```
* we assert equality 
```
		assert.equal(accounts[0], players[0]);
		assert.equal(1,players.length);
```

### Lecture 80 - Asserting Multiple Players

* we cp the previous test and just add more enter calls (and more assertions)

### Lecture 81 - Try Catch Assertions

* we want to test that someone has to send the appropriate amount of ether to enter the lottery
* in this test we check for error using the try , catch syntax
```
		try {
			await lottery.methods.enter().send({
				from: acounts[0],
				value: 0
			});
			assert(false);
		} catch (err) {
			assert.ok(err);
		}
```
* we expect that enter transaction call with insufficient wei will  throw an error. so we put assert(false) after the call as we should not get there and in the catch we verify the error