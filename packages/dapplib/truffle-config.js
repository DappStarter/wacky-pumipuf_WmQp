require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture strike deny remember come install cover army gaze'; 
let testAccounts = [
"0x4a9e6e0b561aa035c0426ba8cacfe0ff34aec221dc2a6f24888db209b0d3f849",
"0x5f1b42bcabb36ecc05c4782dcb132f2a0af93acccd225916bd5989baac49390f",
"0xc98fe17438aa25ddf1700d64bd7c5946a135e74e952c43d9e9ce569c282bc43f",
"0xa7bad27d387ba90399066e3b9bfda0dfdb2fdf922a693a9af01b03a4911e035e",
"0x79af6152d01af992ecf69eaf3c7d7d633ec9e607f89661ce401264f1fbb9bc68",
"0x72cc599f2b9dc099d20b6169bc3376219863639bf589d24a961da01b33fb8cc0",
"0x3a18d52b354ae55427781787519fc0a0ea1c62f7d03a27cfeab54d9100811c63",
"0x4b2e99e4db302cba93f079865d39c19b73370b77e3e110ab82d2df7fdc24f76d",
"0x7fc90b1098b8f3691a31f527f4263bedf875a2d95c54ac7f570960b28599f169",
"0xd2e1f16633124b535a3d33203e25917e29067220f8c637c4d39580658c604cc2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

