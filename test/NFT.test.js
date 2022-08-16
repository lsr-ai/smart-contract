const SmartContract = artifacts.require('NFT');


const NAME = 'Love Sex Robots';
const SYMBOL = 'LSR';


contract('NFT', (accounts) => {
    let contract;
    const owner = accounts[0];
    const recipient = accounts[1];


    beforeEach(async () => {
        contract = await SmartContract.new(NAME, SYMBOL, {from: owner});
    });


    it('has correct data', async () => {
        const name = await contract.name();
        assert.equal(name, NAME);

        const symbol = await contract.symbol();
        assert.equal(symbol, SYMBOL);
    });
});
