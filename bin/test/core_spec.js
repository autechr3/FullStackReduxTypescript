'use strict';
const immutable_1 = require('immutable');
const chai_1 = require('chai');
const core_1 = require('../src/core');
describe('application logic', () => {
    describe('setEntries', () => {
        it('adds the entries to the state', () => {
            const state = immutable_1.Map();
            const entries = immutable_1.List.of('Trainspotting', '28 Days Later');
            const nextState = core_1.setEntries(state, entries);
            chai_1.expect(nextState).to.equal(immutable_1.Map({
                entries: immutable_1.List.of('Trainspotting', '28 Days Later')
            }));
        });
        it('converts to immutable', () => {
            const state = immutable_1.Map();
            const entries = ['Trainspotting', '28 Days Later'];
            const nextState = core_1.setEntries(state, entries);
            chai_1.expect(nextState).to.equal(immutable_1.Map({
                entries: immutable_1.List.of('Trainspotting', '28 Days Later')
            }));
        });
    });
});
