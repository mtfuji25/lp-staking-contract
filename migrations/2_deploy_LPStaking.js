const LPStaking = artifacts.require('LPStaking');

module.exports = async function (deployer) {
    deployer.deploy(LPStaking, []);
};