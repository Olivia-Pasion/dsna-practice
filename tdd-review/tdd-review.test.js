
import {
    thingy,
    thirdItem,
    firstLast,
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

// write a function that takes an array and returns the length of that array

test('thingy', (expect) => {
    // Arrange: what goes in and out of the gumball machine

    const array = [];
    const expected = 0;

    // Act: turn the gumball crank and store what comes out
    const actual = thingy(array);

    // Assert: did the gumball machine give us what we expected?
    expect.equal(actual, expected);
    
});

test('returns 3rd item in an array', (expect) => {
    
    const array = ['a', 'b', 'c', 'd', 'e'];
    const expected = 'c';

    
    const actual = thirdItem(array);

    expect.equal(actual, expected);

});

test('object keys returns array of keys', (expect) => {
    const cat = {
        name: 'ted',
        type: 'short hair'
    };
    const expected = ['name', 'type'];

    const actual = Object.keys(cat);

    expect.deepEqual(actual, expected);
});

test('first key, last value', (expect) => {
    // Arrange, Act, Assert
    const input = {
        name: 'felix',
        type: 'cat',
        food: 'tuna',
        age: 6,
    };

    const expected = {
        firstKey: 'name',
        lastValue: 6
    };

    const actual = firstLast(input);

    expect.deepEqual(actual, expected);


});