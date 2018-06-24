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

### Lecture 12 - Basic Blockchains (Crash Course by Anders Brownworth)

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

### Lecture 12 - Part2: Public/Private Keys and Signing

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

### Lecture 13 - Block Time

* the definition in the previous video is of a generic general use blockchain