# @uniswap/snapshot-gas-cost

Tiny utility function for snapshotting gas costs in unit tests.

## Objective

This function is useful for smart contract testing against hardhat networks. Use it to produce snapshot diffs that you
commit to your repository.

## Usage

```typescript
import snapshotGasCost from '@uniswap/snapshot-gas-cost'
import {Contract} from "@ethersproject/contracts";

describe('gas tests', () => {
    let myContract: Contract
    beforeEach('initialize contract', () => {
        /// initialize myContract
    })
    
    it('gas snapshot for a mutable function', async () => {
        await snapshotGasCost(myContract.someMutableFunction())
    })
    
    it('gas snapshot for a view function', async () => {
        await snapshotGasCost(myContract.estimateGas.someViewFunction())
    })
})
```

