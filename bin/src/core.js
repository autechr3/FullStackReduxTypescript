'use strict';
const immutable_1 = require('immutable');
function setEntries(state, entries) {
    return state.set('entries', immutable_1.List(entries));
}
exports.setEntries = setEntries;
