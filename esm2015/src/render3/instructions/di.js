/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectFlags, resolveForwardRef } from '../../di';
import { assertInjectImplementationNotEqual } from '../../di/inject_switch';
import { ɵɵinject } from '../../di/injector_compatibility';
import { getOrCreateInjectable } from '../di';
import { getCurrentTNode, getLView } from '../state';
export function ɵɵdirectiveInject(token, flags = InjectFlags.Default) {
    const lView = getLView();
    // Fall back to inject() if view hasn't been created. This situation can happen in tests
    // if inject utilities are used before bootstrapping.
    if (lView === null) {
        // Verify that we will not get into infinite loop.
        ngDevMode && assertInjectImplementationNotEqual(ɵɵdirectiveInject);
        return ɵɵinject(token, flags);
    }
    const tNode = getCurrentTNode();
    return getOrCreateInjectable(tNode, lView, resolveForwardRef(token), flags);
}
/**
 * Throws an error indicating that a factory function could not be generated by the compiler for a
 * particular class.
 *
 * This instruction allows the actual error message to be optimized away when ngDevMode is turned
 * off, saving bytes of generated code while still providing a good experience in dev mode.
 *
 * The name of the class is not mentioned here, but will be in the generated factory function name
 * and thus in the stack trace.
 *
 * @codeGenApi
 */
export function ɵɵinvalidFactory() {
    const msg = ngDevMode ? `This constructor was not compatible with Dependency Injection.` : 'invalid';
    throw new Error(msg);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsV0FBVyxFQUFrQixpQkFBaUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUN4RSxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFekQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTVDLE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBNkJuRCxNQUFNLFVBQVUsaUJBQWlCLENBQzdCLEtBQWdELEVBQUUsS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPO0lBQy9FLE1BQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLHdGQUF3RjtJQUN4RixxREFBcUQ7SUFDckQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2xCLGtEQUFrRDtRQUNsRCxTQUFTLElBQUksa0NBQWtDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRSxPQUFPLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDL0I7SUFDRCxNQUFNLEtBQUssR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUNoQyxPQUFPLHFCQUFxQixDQUN4QixLQUEyQixFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzRSxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCO0lBQzlCLE1BQU0sR0FBRyxHQUNMLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM3RixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7SW5qZWN0RmxhZ3MsIEluamVjdGlvblRva2VuLCByZXNvbHZlRm9yd2FyZFJlZn0gZnJvbSAnLi4vLi4vZGknO1xuaW1wb3J0IHthc3NlcnRJbmplY3RJbXBsZW1lbnRhdGlvbk5vdEVxdWFsfSBmcm9tICcuLi8uLi9kaS9pbmplY3Rfc3dpdGNoJztcbmltcG9ydCB7ybXJtWluamVjdH0gZnJvbSAnLi4vLi4vZGkvaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge0Fic3RyYWN0VHlwZSwgVHlwZX0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtnZXRPckNyZWF0ZUluamVjdGFibGV9IGZyb20gJy4uL2RpJztcbmltcG9ydCB7VERpcmVjdGl2ZUhvc3ROb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtnZXRDdXJyZW50VE5vZGUsIGdldExWaWV3fSBmcm9tICcuLi9zdGF0ZSc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gdG9rZW4gZnJvbSB0aGUgaW5qZWN0b3JzLlxuICpcbiAqIGBkaXJlY3RpdmVJbmplY3RgIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgZm9yIGRpcmVjdGl2ZSwgY29tcG9uZW50IGFuZCBwaXBlIGZhY3Rvcmllcy5cbiAqICBBbGwgb3RoZXIgaW5qZWN0aW9uIHVzZSBgaW5qZWN0YCB3aGljaCBkb2VzIG5vdCB3YWxrIHRoZSBub2RlIGluamVjdG9yIHRyZWUuXG4gKlxuICogVXNhZ2UgZXhhbXBsZSAoaW4gZmFjdG9yeSBmdW5jdGlvbik6XG4gKlxuICogYGBgdHNcbiAqIGNsYXNzIFNvbWVEaXJlY3RpdmUge1xuICogICBjb25zdHJ1Y3RvcihkaXJlY3RpdmU6IERpcmVjdGl2ZUEpIHt9XG4gKlxuICogICBzdGF0aWMgybVkaXIgPSDJtcm1ZGVmaW5lRGlyZWN0aXZlKHtcbiAqICAgICB0eXBlOiBTb21lRGlyZWN0aXZlLFxuICogICAgIGZhY3Rvcnk6ICgpID0+IG5ldyBTb21lRGlyZWN0aXZlKMm1ybVkaXJlY3RpdmVJbmplY3QoRGlyZWN0aXZlQSkpXG4gKiAgIH0pO1xuICogfVxuICogYGBgXG4gKiBAcGFyYW0gdG9rZW4gdGhlIHR5cGUgb3IgdG9rZW4gdG8gaW5qZWN0XG4gKiBAcGFyYW0gZmxhZ3MgSW5qZWN0aW9uIGZsYWdzXG4gKiBAcmV0dXJucyB0aGUgdmFsdWUgZnJvbSB0aGUgaW5qZWN0b3Igb3IgYG51bGxgIHdoZW4gbm90IGZvdW5kXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVkaXJlY3RpdmVJbmplY3Q8VD4odG9rZW46IFR5cGU8VD58QWJzdHJhY3RUeXBlPFQ+fEluamVjdGlvblRva2VuPFQ+KTogVDtcbmV4cG9ydCBmdW5jdGlvbiDJtcm1ZGlyZWN0aXZlSW5qZWN0PFQ+KFxuICAgIHRva2VuOiBUeXBlPFQ+fEFic3RyYWN0VHlwZTxUPnxJbmplY3Rpb25Ub2tlbjxUPiwgZmxhZ3M6IEluamVjdEZsYWdzKTogVDtcbmV4cG9ydCBmdW5jdGlvbiDJtcm1ZGlyZWN0aXZlSW5qZWN0PFQ+KFxuICAgIHRva2VuOiBUeXBlPFQ+fEFic3RyYWN0VHlwZTxUPnxJbmplY3Rpb25Ub2tlbjxUPiwgZmxhZ3MgPSBJbmplY3RGbGFncy5EZWZhdWx0KTogVHxudWxsIHtcbiAgY29uc3QgbFZpZXcgPSBnZXRMVmlldygpO1xuICAvLyBGYWxsIGJhY2sgdG8gaW5qZWN0KCkgaWYgdmlldyBoYXNuJ3QgYmVlbiBjcmVhdGVkLiBUaGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuIGluIHRlc3RzXG4gIC8vIGlmIGluamVjdCB1dGlsaXRpZXMgYXJlIHVzZWQgYmVmb3JlIGJvb3RzdHJhcHBpbmcuXG4gIGlmIChsVmlldyA9PT0gbnVsbCkge1xuICAgIC8vIFZlcmlmeSB0aGF0IHdlIHdpbGwgbm90IGdldCBpbnRvIGluZmluaXRlIGxvb3AuXG4gICAgbmdEZXZNb2RlICYmIGFzc2VydEluamVjdEltcGxlbWVudGF0aW9uTm90RXF1YWwoybXJtWRpcmVjdGl2ZUluamVjdCk7XG4gICAgcmV0dXJuIMm1ybVpbmplY3QodG9rZW4sIGZsYWdzKTtcbiAgfVxuICBjb25zdCB0Tm9kZSA9IGdldEN1cnJlbnRUTm9kZSgpO1xuICByZXR1cm4gZ2V0T3JDcmVhdGVJbmplY3RhYmxlPFQ+KFxuICAgICAgdE5vZGUgYXMgVERpcmVjdGl2ZUhvc3ROb2RlLCBsVmlldywgcmVzb2x2ZUZvcndhcmRSZWYodG9rZW4pLCBmbGFncyk7XG59XG5cbi8qKlxuICogVGhyb3dzIGFuIGVycm9yIGluZGljYXRpbmcgdGhhdCBhIGZhY3RvcnkgZnVuY3Rpb24gY291bGQgbm90IGJlIGdlbmVyYXRlZCBieSB0aGUgY29tcGlsZXIgZm9yIGFcbiAqIHBhcnRpY3VsYXIgY2xhc3MuXG4gKlxuICogVGhpcyBpbnN0cnVjdGlvbiBhbGxvd3MgdGhlIGFjdHVhbCBlcnJvciBtZXNzYWdlIHRvIGJlIG9wdGltaXplZCBhd2F5IHdoZW4gbmdEZXZNb2RlIGlzIHR1cm5lZFxuICogb2ZmLCBzYXZpbmcgYnl0ZXMgb2YgZ2VuZXJhdGVkIGNvZGUgd2hpbGUgc3RpbGwgcHJvdmlkaW5nIGEgZ29vZCBleHBlcmllbmNlIGluIGRldiBtb2RlLlxuICpcbiAqIFRoZSBuYW1lIG9mIHRoZSBjbGFzcyBpcyBub3QgbWVudGlvbmVkIGhlcmUsIGJ1dCB3aWxsIGJlIGluIHRoZSBnZW5lcmF0ZWQgZmFjdG9yeSBmdW5jdGlvbiBuYW1lXG4gKiBhbmQgdGh1cyBpbiB0aGUgc3RhY2sgdHJhY2UuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVpbnZhbGlkRmFjdG9yeSgpOiBuZXZlciB7XG4gIGNvbnN0IG1zZyA9XG4gICAgICBuZ0Rldk1vZGUgPyBgVGhpcyBjb25zdHJ1Y3RvciB3YXMgbm90IGNvbXBhdGlibGUgd2l0aCBEZXBlbmRlbmN5IEluamVjdGlvbi5gIDogJ2ludmFsaWQnO1xuICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbn1cbiJdfQ==