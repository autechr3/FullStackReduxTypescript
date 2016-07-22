/// <reference path="../_all.d.ts" />

'use strict';

import {List, Map} from 'immutable';

export function setEntries(state: Map<{}, {}>, entries: List<string>|Array<string>): Map<{}, {}> {
    return state.set('entries', List(entries));
}