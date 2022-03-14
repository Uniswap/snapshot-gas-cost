import snapshotGasCost from "./index";

describe('#snapshotGasCost', () => {
    it('works for a Promise<number>', async () => {
        await snapshotGasCost(Promise.resolve(100))
    })

    it('works for a number', async () => {
        await snapshotGasCost(100)
    })
})