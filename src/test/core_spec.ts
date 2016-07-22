/// <reference path="../_all.d.ts" />

'use strict';

import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries} from '../src/core';

describe('application logic', () => {

    describe('setEntries', () => {

        it('adds the entries to the state', () => {
            const state: Map<{}, {}> = Map();
            const entries: List<string> = List.of('Trainspotting', '28 Days Later');
            const nextState: Map<{}, {}> = setEntries(state, entries);
            expect(nextState).to.equal(Map({
                entries: List.of('Trainspotting', '28 Days Later')
            }));
        });

        it('converts to immutable', () => {
            const state: Map<{}, {}> = Map();
            const entries: Array<string> = ['Trainspotting', '28 Days Later'];
            const nextState: Map<{}, {}> = setEntries(state, entries);
            expect(nextState).to.equal(Map({
                entries: List.of('Trainspotting', '28 Days Later')
            }));
        });

    });

    describe('next', () => {

        it('takes the next two entries under vote', () => {
            const state: Map<{}, {}> = Map({
                entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
            });
            const nextState: Map<{}, {}> = next
        });

    });

});