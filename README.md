# Curso de prework de Web3 de platzi

## DAPP Aplicacion Descentralizada

See Contract in Sepolia Network [View Contract](https://sepolia.etherscan.io/address/0x73a621990b49df359158100adf6e00f81acdbfd3)

## crear el proyecto en nodejs

```sh
npm init
```

## Instalar **Hardhat**

```sh
npm install --save hardhat
```

## instalar las herremientas de desarrollo

```sh
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

## configurar **hardhat**

```sh
npx hardhat
```

## compilación de **hardhat**

```sh
npx hardhat compile
```

## desplegar contrato en la blockchain

```sh
npx hardhat run scripts/deploy.js --network sepolia
```

# Hardhart Config with Metamask

- 1 - Create your Alchemy App in Sepolia Network and get the HTTPS App Key
- 2 - Get your private Metamask Account key
- 3 - add your Metamask private key and Alchemy App Key on hardhat.config.js
