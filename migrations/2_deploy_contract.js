const SmartContract = artifacts.require('./NFT');


module.exports = (deployer) => {
    deployer.then(async () => {
        await deployer.deploy(SmartContract);
    });
};
