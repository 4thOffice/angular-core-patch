/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { injectChangeDetectorRef } from '../change_detection/change_detector_ref';
import { InjectFlags } from '../di/interface/injector';
import { createTemplateRef } from '../linker/template_ref';
import { throwProviderNotFoundError } from './errors_di';
/**
 * Retrieves `TemplateRef` instance from `Injector` when a local reference is placed on the
 * `<ng-template>` element.
 *
 * @codeGenApi
 */
export function ɵɵtemplateRefExtractor(tNode, lView) {
    return createTemplateRef(tNode, lView);
}
/**
 * Returns the appropriate `ChangeDetectorRef` for a pipe.
 *
 * @codeGenApi
 */
export function ɵɵinjectPipeChangeDetectorRef(flags = InjectFlags.Default) {
    const value = injectChangeDetectorRef(true);
    if (value == null && !(flags & InjectFlags.Optional)) {
        throwProviderNotFoundError('ChangeDetectorRef');
    }
    else {
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld19lbmdpbmVfY29tcGF0aWJpbGl0eV9wcmVib3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvdmlld19lbmdpbmVfY29tcGF0aWJpbGl0eV9wcmVib3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQW9CLHVCQUF1QixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDbkcsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBYyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUt2RDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxLQUFZLEVBQUUsS0FBWTtJQUMvRCxPQUFPLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBR0Q7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSw2QkFBNkIsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU87SUFDdkUsTUFBTSxLQUFLLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3BELDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDakQ7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgaW5qZWN0Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJy4uL2NoYW5nZV9kZXRlY3Rpb24vY2hhbmdlX2RldGVjdG9yX3JlZic7XG5pbXBvcnQge0luamVjdEZsYWdzfSBmcm9tICcuLi9kaS9pbnRlcmZhY2UvaW5qZWN0b3InO1xuaW1wb3J0IHtjcmVhdGVUZW1wbGF0ZVJlZiwgVGVtcGxhdGVSZWZ9IGZyb20gJy4uL2xpbmtlci90ZW1wbGF0ZV9yZWYnO1xuaW1wb3J0IHt0aHJvd1Byb3ZpZGVyTm90Rm91bmRFcnJvcn0gZnJvbSAnLi9lcnJvcnNfZGknO1xuaW1wb3J0IHtUTm9kZX0gZnJvbSAnLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtMVmlld30gZnJvbSAnLi9pbnRlcmZhY2VzL3ZpZXcnO1xuXG5cbi8qKlxuICogUmV0cmlldmVzIGBUZW1wbGF0ZVJlZmAgaW5zdGFuY2UgZnJvbSBgSW5qZWN0b3JgIHdoZW4gYSBsb2NhbCByZWZlcmVuY2UgaXMgcGxhY2VkIG9uIHRoZVxuICogYDxuZy10ZW1wbGF0ZT5gIGVsZW1lbnQuXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybV0ZW1wbGF0ZVJlZkV4dHJhY3Rvcih0Tm9kZTogVE5vZGUsIGxWaWV3OiBMVmlldyk6IFRlbXBsYXRlUmVmPGFueT58bnVsbCB7XG4gIHJldHVybiBjcmVhdGVUZW1wbGF0ZVJlZih0Tm9kZSwgbFZpZXcpO1xufVxuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgYENoYW5nZURldGVjdG9yUmVmYCBmb3IgYSBwaXBlLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1aW5qZWN0UGlwZUNoYW5nZURldGVjdG9yUmVmKGZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdCk6IENoYW5nZURldGVjdG9yUmVmfG51bGwge1xuICBjb25zdCB2YWx1ZSA9IGluamVjdENoYW5nZURldGVjdG9yUmVmKHRydWUpO1xuICBpZiAodmFsdWUgPT0gbnVsbCAmJiAhKGZsYWdzICYgSW5qZWN0RmxhZ3MuT3B0aW9uYWwpKSB7XG4gICAgdGhyb3dQcm92aWRlck5vdEZvdW5kRXJyb3IoJ0NoYW5nZURldGVjdG9yUmVmJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4iXX0=