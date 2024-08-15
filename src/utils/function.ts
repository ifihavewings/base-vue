import type { ICallback} from "./type.d.ts";

/**
 * Handles a callback by executing it as a function, mapping over an array, or invoking an object's function with arguments.
 *
 * @param {ICallback} callback - The callback to be handled
 * @return {any} The result of the callback execution
 */
export function handleCallback(callback: ICallback): any {
    if (typeof callback === 'function') {
        // 如果 callback 是 IFunctionCallback 类型，直接调用并返回其结果
        return callback();
    } else if (Array.isArray(callback)) {
        // 如果 callback 是 IArrayCallback 类型，遍历数组并处理每个元素
        return callback.map(handleCallback);
    } else {
        // 如果 callback 是 IObjectCallback 类型，使用 args 调用 func 并返回结果
        const { func, args = [] } = callback;
        return func(...args);
    }
}
