// Generated by typings
// Source: https://raw.githubusercontent.com/ivanz/chai-immutable-typings/d84875ed76f47ab0b70bc8166aecd1d3e870b8c9/dist/chai-immutable.d.ts
declare module '~chai-immutable~chai/lib/Assertion' {
export interface AssertionStatic {
  (target?: any, message?: string, stack?: Function): Assertion;
  new (target?: any, message?: string, stack?: Function): Assertion;
}

export interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
  not: Assertion;
  deep: Deep;
  any: KeyFilter;
  all: KeyFilter;
  a: TypeComparison;
  an: TypeComparison;
  include: Include;
  includes: Include;
  contain: Include;
  contains: Include;
  ok: Assertion;
  true: Assertion;
  false: Assertion;
  null: Assertion;
  undefined: Assertion;
  NaN: Assertion;
  exist: Assertion;
  empty: Assertion;
  arguments: Assertion;
  Arguments: Assertion;
  equal: Equal;
  equals: Equal;
  eq: Equal;
  eql: Equal;
  eqls: Equal;
  property: Property;
  ownProperty: OwnProperty;
  haveOwnProperty: OwnProperty;
  ownPropertyDescriptor: OwnPropertyDescriptor;
  haveOwnPropertyDescriptor: OwnPropertyDescriptor;
  length: Length;
  lengthOf: Length;
  match: Match;
  matches: Match;
  string(str: string, message?: string): Assertion;
  keys: Keys;
  key(str: string): Assertion;
  throw: Throw;
  throws: Throw;
  Throw: Throw;
  respondTo: RespondTo;
  respondsTo: RespondTo;
  itself: Assertion;
  satisfy: Satisfy;
  satisfies: Satisfy;
  closeTo: CloseTo;
  approximately: CloseTo;
  members: Members;
  increase: PropertyChange;
  increases: PropertyChange;
  decrease: PropertyChange;
  decreases: PropertyChange;
  change: PropertyChange;
  changes: PropertyChange;
  extensible: Assertion;
  sealed: Assertion;
  frozen: Assertion;
  oneOf(list: any[], message?: string): Assertion;
}

export interface LanguageChains {
  to: Assertion;
  be: Assertion;
  been: Assertion;
  is: Assertion;
  that: Assertion;
  which: Assertion;
  and: Assertion;
  has: Assertion;
  have: Assertion;
  with: Assertion;
  at: Assertion;
  of: Assertion;
  same: Assertion;
}

export interface NumericComparison {
  above: NumberComparer;
  gt: NumberComparer;
  greaterThan: NumberComparer;
  least: NumberComparer;
  gte: NumberComparer;
  below: NumberComparer;
  lt: NumberComparer;
  lessThan: NumberComparer;
  most: NumberComparer;
  lte: NumberComparer;
  within(start: number, finish: number, message?: string): Assertion;
}

export interface NumberComparer {
  (value: number, message?: string): Assertion;
}

export interface TypeComparison {
  (type: string, message?: string): Assertion;
  instanceof: InstanceOf;
  instanceOf: InstanceOf;
}

export interface InstanceOf {
  (constructor: Object, message?: string): Assertion;
}

export interface CloseTo {
  (expected: number, delta: number, message?: string): Assertion;
}

export interface Deep {
  equal: Equal;
  equals: Equal;
  eq: Equal;
  include: Include;
  property: Property;
  members: Members;
}

export interface KeyFilter {
  keys: Keys;
}

export interface Equal {
  (value: any, message?: string): Assertion;
}

export interface Property {
  (name: string, value?: any, message?: string): Assertion;
}

export interface OwnProperty {
  (name: string, message?: string): Assertion;
}

export interface OwnPropertyDescriptor {
  (name: string, descriptor: PropertyDescriptor, message?: string): Assertion;
  (name: string, message?: string): Assertion;
}

export interface Length extends LanguageChains, NumericComparison {
  (length: number, message?: string): Assertion;
}

export interface Include {
  (value: Object, message?: string): Assertion;
  (value: string, message?: string): Assertion;
  (value: number, message?: string): Assertion;
  string(value: string, message?: string): Assertion;
  keys: Keys;
  members: Members;
  any: KeyFilter;
  all: KeyFilter;
}

export interface Match {
  (regexp: RegExp | string, message?: string): Assertion;
}

export interface Keys {
  (...keys: any[]): Assertion;
  (keys: any[]): Assertion;
  (keys: Object): Assertion;
}

export interface Throw {
  (): Assertion;
  (expected: string, message?: string): Assertion;
  (expected: RegExp, message?: string): Assertion;
  (constructor: Error, expected?: string, message?: string): Assertion;
  (constructor: Error, expected?: RegExp, message?: string): Assertion;
  (constructor: Function, expected?: string, message?: string): Assertion;
  (constructor: Function, expected?: RegExp, message?: string): Assertion;
}

export interface RespondTo {
  (method: string, message?: string): Assertion;
}

export interface Satisfy {
  (matcher: Function, message?: string): Assertion;
}

export interface Members {
  (set: any[], message?: string): Assertion;
}

export interface PropertyChange {
  (object: Object, prop: string, msg?: string): Assertion;
}
}

// Generated by typings
// Source: https://raw.githubusercontent.com/typed-typings/npm-chai/793bee097a6a644e078a033603d88ac89eb7b560/lib/Utils.d.ts
declare module '~chai-immutable~chai/lib/Utils' {
import {Assertion} from '~chai-immutable~chai/lib/Assertion';

export interface PathInfo {
  parent: any;
  name: number|string;
  value: any;
  exists: boolean;
}

export interface Utils {
  addChainableMethod(ctx: any, name: string, chainingBehavior: (value: any) => void): void;
  addMethod(ctx: any, name: string, method: (value: any) => void): void;
  addProperty(ctx: any, name: string, getter: () => void): void;
  expectTypes(obj: Object, types: string[]): void;
  flag(obj: Object, key: string, value?: any): any;
  getActual(obj: Object, actual?: any): any;
  getEnumerableProperties(obj: Object): string[];
  getMessage(obj: Object, params: any[]): string;
  getMessage(obj: Object, message: string, negateMessage: string): string;
  getName(func: Function): string;
  getPathInfo(path: string, obj: Object): PathInfo;
  getPathValue(path: string, obj: Object): any;
  getProperties(obj: Object): string[];
  hasProperty(obj: Object, name: string): boolean;
  transferFlags(assertion: Assertion | any, obj: Object, includeAll?: boolean): void;
  inspect(obj: any): any;
}
}

// Generated by typings
// Source: lib/chai-immutable.d.ts
declare module '~chai-immutable/lib/chai-immutable' {
import {Utils} from '~chai-immutable~chai/lib/Utils';

// chai-immutable exports a single function (is a callable? module).
//
// The namespace+function combo enable the use of "import * as X from chai-immutable" and "use(X)" in chai.
function initialize(chai: any,  utils: Utils) : void;
namespace initialize {
}

export = initialize;
}
declare module 'chai-immutable/lib/chai-immutable' {
import alias = require('~chai-immutable/lib/chai-immutable');
export = alias;
}

// Generated by typings
// Source: lib/Assertion.d.ts
declare module '~chai-immutable/lib/Assertion' {
import {Length} from '~chai/lib/Assertion';

module '~chai/lib/Assertion' {
  
/* 
  TODO: We can't do that until the next version of TypeScript (adding new types): 
        https://github.com/Microsoft/TypeScript/issues/4166
        error TS2665: Module augmentation cannot introduce new names in the top level scope.
  
  export interface Size extends LanguageChains, NumericComparison {
    (size: number, message?: string): Assertion;
  }

  export interface Assertion {
    size: Size;
    sizeOf: Size;
  }
*/
  
  // Extend chai's asserts with the extra ones added by chai-immutable
  export interface Assertion {
    size: Length;
    sizeOf: Length;
  }
}
}
declare module 'chai-immutable/lib/Assertion' {
import alias = require('~chai-immutable/lib/Assertion');
export = alias;
}

// Generated by typings
// Source: lib/index.d.ts
declare module '~chai-immutable/lib/index' {
import * as chaiImmutable from '~chai-immutable/lib/chai-immutable';
import {} from '~chai-immutable/lib/Assertion';

export = chaiImmutable;
}
declare module 'chai-immutable/lib/index' {
import alias = require('~chai-immutable/lib/index');
export = alias;
}
declare module 'chai-immutable' {
import alias = require('~chai-immutable/lib/index');
export = alias;
}
