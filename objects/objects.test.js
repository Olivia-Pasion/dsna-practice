

import {
    makePet,
    formatWork
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');


test('makes a pet', (expect) => {
    
    const actual = makePet(
        'rosie',
        'cat',
        1,
        'trash',
        ['trash', 'laser', 'bottle caps']
    );

    expect.deepEqual(actual, {
        name : 'rosie',
        type : 'cat',
        age : 1,
        food : 'trash',
        toys : ['trash', 'laser', 'bottle caps']
    });
 
});

test('provides book info', (expect) => {

    const actual = formatWork(
        {
            author:  {
                last: 'wells',
                first: 'h.g.'
            },
            book: {
                title: 'war of the worlds',
                genre: 'scifi',
                words: 312000
            }
        }
    );

    expect.deepEqual(actual, {
        work: 'war of the worlds',
        writer: 'h.g. wells'
    });
});


