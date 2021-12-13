require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind history hockey entire tackle sport'; 
let testAccounts = [
"0x15b15263b9347a78e715ed22bc43532d723d3479ed2d78bb585d18cdd2c9b2ff",
"0x937f9f7be88725ac3e6af864cc0c6d40537d08fc720962ba5155387c0b858411",
"0x052fe2a4555405eae47161fb28ec77f0c403a979168c414e9dd24871c3e04538",
"0xc6780fb260e4562f5f2b8d2317a3d596ef83643cd3e2d9f89fad32375b125790",
"0x1dd2855fc964782f904a5c6701850e71f2b622d8ba54acfb80d4a30cb5ae2027",
"0xaef1dcac2b3c45f27c1ea63cc9ebc267ccd8ed30743d6a26ba6c73c75631f61f",
"0xcf54243d4a660a4a9714c16a379e100c213959849f5a949f5acd8457a85635dc",
"0x5ff470f6d7b6f4f215bbe19fb026221eb48418af1006e9cfb0e1958597dd6b0c",
"0x9894c21e7f2a7b11ce3f15ea0f7ac57214576f94834310dd8283492ad0e42c5d",
"0x21dbf19a750ad3c90e521f517e1485f79a6fb1782ff131d277dbece9640f4ffe"
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

