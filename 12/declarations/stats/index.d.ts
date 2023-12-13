type Comparator<T> = (a: T, b: T) => number;
type Indexer<T> = (value: T) => number;

declare module 'stats' {
    export function getMaxIndex<T>(arr: T[], comparator: Comparator<T>): number;
    export function getMaxElement<T>(arr: T[], comparator: Comparator<T>): T;

    export function getMinIndex<T>(arr: T[], comparator: Comparator<T>): number;
    export function getMinElement<T>(arr: T[], comparator: Comparator<T>): T;

    export function getMedianIndex<T>(arr: T[], comparator: Comparator<T>): number;
    export function getMedianElement<T>(arr: T[], comparator: Comparator<T>): T;

    export function getAverageValue<T>(arr: T[], indexer: Indexer<T>): number;
}
