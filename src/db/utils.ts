/**
 * Converts an enum to a PostgreSQL enum.
 * @template T - The enum type.
 * @param {T} myEnum - The enum to convert.
 * @returns {[T[keyof T], ...T[keyof T][]]} An array containing the enum values as strings.
 */
export function enumToPgEnum<T extends Record<string, string>>(
    myEnum: T
): [T[keyof T], ...T[keyof T][]] {
    return Object.values(myEnum).map((value: string) => `${value}`) as [T[keyof T], ...T[keyof T][]];
}
