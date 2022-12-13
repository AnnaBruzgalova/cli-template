// eslint-disable-next-line import/no-unresolved
import total from '../mytest.js';

test('total value', () => {
    const input = {
        name: 'Маг',
        health: 90,
    };
    const received = total(input);
    expect(received).toBe('healthy');
});

test('total value', () => {
    const input = {
        name: 'Маг',
        health: 30,
    };
    const received = total(input);
    expect(received).toBe('wounded');
});

test('total value', () => {
    const input = {
        name: 'Маг',
        health: 5,
    };
    const received = total(input);
    expect(received).toBe('critical');
});