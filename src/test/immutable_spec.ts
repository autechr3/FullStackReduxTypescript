/// <reference path="../_all.d.ts" />

'use strict';

import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {

    describe('a number', () => {

        function increment(currentState: number): number {
            return currentState + 1;
        }

        it('is immutable', () => {
            let state: number = 42;
            let nextState: number = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });

    });

    describe('a list', () => {

        function addMovie(currentState: List<string>, movie: string): List<string> {
            return currentState.push(movie);
        }

        it('is immutable', () => {
            let state: List<string> = List.of('Trainspotting', '28 Days Later');
            let nextState: List<string> = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });

    });

    describe('a tree', () => {

        function addMovie(currentState: Map<string, List<string>>, movie: string): Map<string, List<string>> {
            return currentState.update('movies', movies => movies.push(movie));
        }

        it('is immutable', () => {
            let state: Map<string, List<string>> = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });
            let nextState: Map<string, List<string>> = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });

    });

});