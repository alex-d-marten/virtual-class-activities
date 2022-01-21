const Minibank = require('../minibank');

test('simple verification', () => {
    const bank = new Minibank(0);
    bank.deposit(-1);

    expect(bank.getBalance()).toBe(1000000);
})