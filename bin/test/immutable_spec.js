'use strict';
const chai_1 = require('chai');
const immutable_1 = require('immutable');
describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }
        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);
            chai_1.expect(nextState).to.equal(43);
            chai_1.expect(state).to.equal(42);
        });
    });
    describe('a list', () => {
        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }
        it('is immutable', () => {
            let state = immutable_1.List.of('Trainspotting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');
            chai_1.expect(nextState).to.equal(immutable_1.List.of('Trainspotting', '28 Days Later', 'Sunshine'));
            chai_1.expect(state).to.equal(immutable_1.List.of('Trainspotting', '28 Days Later'));
        });
    });
    describe('a tree', () => {
        function addMovie(currentState, movie) {
            return currentState.update('movies', movies => movies.push(movie));
        }
        it('is immutable', () => {
            let state = immutable_1.Map({
                movies: immutable_1.List.of('Trainspotting', '28 Days Later')
            });
            let nextState = addMovie(state, 'Sunshine');
            chai_1.expect(nextState).to.equal(immutable_1.Map({
                movies: immutable_1.List.of('Trainspotting', '28 Days Later', 'Sunshine')
            }));
            chai_1.expect(state).to.equal(immutable_1.Map({
                movies: immutable_1.List.of('Trainspotting', '28 Days Later')
            }));
        });
    });
});
