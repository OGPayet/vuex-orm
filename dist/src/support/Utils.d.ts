export interface Dictionary<T> {
    [key: string]: T;
}
export declare type Predicate<T> = (value: T, key: string) => boolean;
export declare type ObjectIteratee<T extends object, TResult> = (value: T[keyof T], key: string, object: T) => TResult;
/**
 * Check if the given value is the type of array.
 */
export declare function isArray(value: any): value is any[];
/**
 * Gets the size of collection by returning its length for array-like values
 * or the number of own enumerable string keyed properties for objects.
 */
export declare function size(collection: any[] | object): number;
/**
 * Check if the given array or object is empty.
 */
export declare function isEmpty(collection: any[] | object): boolean;
/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property.
 */
export declare function forOwn<T extends object>(object: T, iteratee: ObjectIteratee<T, void>): void;
/**
 * Creates an array of values by running each element in collection thru
 * iteratee. The iteratee is invoked with three arguments:
 * (value, key, collection).
 */
export declare function map<T extends object, TResult>(object: T, iteratee: ObjectIteratee<T, TResult>): TResult[];
/**
 * Creates an object with the same keys as object and values generated by
 * running each own enumerable string keyed property of object thru
 * iteratee. The iteratee is invoked with three arguments:
 * (value, key, object).
 */
export declare function mapValues<T extends object, TResult>(object: T, iteratee: ObjectIteratee<T, TResult>): Dictionary<TResult>;
/**
 * Creates an object composed of keys generated from the results of running
 * each element of collection by the given key.
 */
export declare function keyBy<T extends object>(collection: T[], key: string): Record<string, T>;
/**
 * Creates an array of elements, sorted in specified order by the results
 * of running each element in a collection thru each iteratee.
 */
export declare function orderBy<T>(collection: T[], iteratees: (((record: T) => any) | string)[], directions: string[]): T[];
/**
 * Creates an object composed of keys generated from the results of running
 * each element of collection thru iteratee.
 */
export declare function groupBy(collection: any[], iteratee: (record: any) => any): any;
/**
 * Deep clone the given target object.
 */
export declare function cloneDeep<T extends object>(target: T): T;
declare const _default: {
    isArray: typeof isArray;
    size: typeof size;
    isEmpty: typeof isEmpty;
    forOwn: typeof forOwn;
    map: typeof map;
    mapValues: typeof mapValues;
    keyBy: typeof keyBy;
    orderBy: typeof orderBy;
    groupBy: typeof groupBy;
    cloneDeep: typeof cloneDeep;
};
export default _default;
