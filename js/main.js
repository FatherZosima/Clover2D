var abi = [{ "inputs": [{ "internalType": "address", "name": "_CLV_address", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_tokens", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "buy", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "buyer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountSpent", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensReceived", "type": "uint256" }], "name": "Buy", "type": "event" }, { "constant": false, "inputs": [], "name": "reinvest", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Reinvest", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_tokens", "type": "uint256" }], "name": "sell", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "seller", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokensSpent", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountReceived", "type": "uint256" }], "name": "Sell", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokens", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "transferAndCall", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_tokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdraw", "type": "event" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "allInfoFor", "outputs": [{ "internalType": "uint256", "name": "contractBalance", "type": "uint256" }, { "internalType": "uint256", "name": "totalTokenSupply", "type": "uint256" }, { "internalType": "uint256", "name": "truePrice", "type": "uint256" }, { "internalType": "uint256", "name": "buyPrice", "type": "uint256" }, { "internalType": "uint256", "name": "sellPrice", "type": "uint256" }, { "internalType": "uint256", "name": "userCLV", "type": "uint256" }, { "internalType": "uint256", "name": "userAllowance", "type": "uint256" }, { "internalType": "uint256", "name": "userBalance", "type": "uint256" }, { "internalType": "uint256", "name": "userDividends", "type": "uint256" }, { "internalType": "uint256", "name": "userLiquidValue", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }, { "internalType": "address", "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "bool", "name": "_buy", "type": "bool" }, { "internalType": "bool", "name": "_inverse", "type": "bool" }], "name": "calculateResult", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currentPrices", "outputs": [{ "internalType": "uint256", "name": "truePrice", "type": "uint256" }, { "internalType": "uint256", "name": "buyPrice", "type": "uint256" }, { "internalType": "uint256", "name": "sellPrice", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }], "name": "dividendsOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }];
var LPabi = [{ "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_minter", "type": "address" }], "name": "addMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "burnOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "governance", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "minters", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_minter", "type": "address" }], "name": "removeMinter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "setAllow", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "someAddress", "type": "address" }], "name": "setExceptions", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_governance", "type": "address" }], "name": "setGovernance", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

var address = '0xc744dc036f42C2538d63EcA6348E2066e183279E';
var LPAddress = '0x22222C03318440305aC3e8a7820563d6A9FD777F';
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
var FNB;
var LPFNB;
var account = "0x00000000000000000000000000000001";


async function init() {
    if (window.ethereum !== undefined) {
        window.ethereum.enable();
        console.log("Now enabled");
    }

    let accounts = await web3.eth.getAccounts();
    console.log(accounts);
    account = accounts[0];
    FNB = new web3.eth.Contract(abi, address, {from:account});
    LPFNB = new web3.eth.Contract(LPabi, LPAddress, {from:account});

    $('#setMaxBuy').click(async () => {
        var info = await FNB.methods.allInfoFor(account).call();
        var balance = parseFloat(web3.utils.fromWei(info[5], 'mwei'));
        console.log(balance);
        $('#buyAmount').val(balance);
    });

    $('#setMaxSell').click(async () => {
            var info = await FNB.methods.allInfoFor(account).call();
            var balance = parseFloat(web3.utils.fromWei(info[7], 'ether'));
            console.log(balance);
            $('#sellAmount').val(balance);
    });

    /*$('#transfer').click(function() {
        var amount = parseFloat($('#transferAmount').val());
        var to = $('#transferReceiver').val();
        if (amount > 0 && to.length == 42) {
            FNB.transfer(to, web3.utils.toWei(amount, 'ether'), function(error, hash) {
                if (!error) {
                    console.log(hash);
                } else {
                    console.log(error);
                }
            });
        }
    });*/

    $('#buy').click(function() {
        var amount = $('#buyAmount').val();
        if (parseFloat(amount) > 0) {
            var b = parseFloat(web3.utils.toWei(amount, 'mwei'));
            console.log('buy::', b);
            FNB.methods.buy(b).send().on('transactionHash', function(hash){
                console.log(hash);
            })
        }
    });




    $('#approve').click(function() {
        LPFNB.methods.approve(address, 1e12).send().on('transactionHash', function(hash){
            console.log(hash);
        })
    });


    $('#sell').click(function() {
        var amount = $('#sellAmount').val();
        if (parseFloat(amount) > 0) {
            FNB.methods.sell(web3.utils.toWei(amount, 'ether')).send().on('transactionHash', function(hash){
                console.log(hash);
            })
        }
    });


    $('#withdraw').click(function() {
        FNB.methods.withdraw().send().on('transactionHash', function(hash){
            console.log(hash);
        })
    });


    $('#reinvest').click(function() {
        FNB.methods.reinvest().send().on('transactionHash', function(hash){
            console.log(hash);
        })
    });

    setTimeout(update, 500);

    //add way to autorefresh
}

var contractBalance = 0;
async function update() {
    var info = await FNB.methods.allInfoFor(account).call();
    contractBalance = parseFloat(web3.utils.fromWei(info[0], 'mwei'));
    $('#contractBalance').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[0], 'mwei')), 5)
    );
    $('#totalTokenSupply').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[1], 'ether')), 3)
    );
    $('#truePrice').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[2], 'mwei')), 5)
    );
    $('#buyPrice').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[3], 'mwei')), 5)
    );
    $('#sellPrice').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[4], 'mwei')), 5)
    );
    $('#userCLV').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[5], 'mwei')), 5)
    );
    $('#userAllowance').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[6], 'mwei')), 5)
    );
    $('#userBalance').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[7], 'ether')), 2)
    );
    $('#userDividends').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[8], 'mwei')), 5)
    );
    $('#userLiquidValue').text(
        formatNumber(parseFloat(web3.utils.fromWei(info[9], 'mwei')), 5)
    );

    var allowedAmount = formatNumber(parseFloat(web3.utils.fromWei(info[6], 'mwei')), 5)

    if (allowedAmount < 100) {
        $( "#buy" ).hide();
        $( "#approve" ).show();
    } else {
        $( "#buy" ).show();
        $( "#approve" ).hide()
    }

    let res = await LPFNB.methods.totalSupply().call();
    var b = parseFloat(web3.utils.fromWei(res, 'mwei'));
    var percentage = ((contractBalance / b) * 100).toFixed(2);
    console.log('Total LP in mwei:', b);
    console.log('LP in the contract:', contractBalance);
    console.log('percentage in contract', percentage + '%');
    $('#contractBalancePercent').text(percentage);
    /*
    const x1 = uniPairContract.methods.balanceOf('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2').call()
    .then(function (bal) {
    	console.log(bal);
    });
    const x2 = uniPairContract.methods.balanceOf('0x22222C03318440305aC3e8a7820563d6A9FD777F').call()
    .then(function (bal) {
    	console.log(bal);
    });


        uniPairContract.balanceOf('0x22222C03318440305aC3e8a7820563d6A9FD777F').call().then(function (bal) {
            console.log('XXXXXX', bal);
         })
    	 
    	 
      contract.methods.balanceOf(walletAddress).call((error, balance) => {
        contract.methods.decimals().call((error, decimals) => {
          balance = balance.div(10 ** decimals);
          console.log(balance.toString());
        });
      });
    */
}



function log10(val) {
    return Math.log(val) / Math.log(10);
}

function formatNumber(n, maxDecimals) {
    var zeroes = Math.floor(log10(Math.abs(n)));
    var postfix = '';
    if (zeroes >= 9) {
        postfix = 'B';
        n /= 1e9;
        zeroes -= 9;
    } else if (zeroes >= 6) {
        postfix = 'M';
        n /= 1e6;
        zeroes -= 6;
    }

    zeroes = Math.min(maxDecimals, maxDecimals - zeroes);

    return (
        n.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: Math.max(zeroes, 0)
        }) + postfix
    );
}

$(document).ready(init);
