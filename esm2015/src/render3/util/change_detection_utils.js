/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { detectChanges, markDirty } from '../instructions/change_detection';
import { getRootComponents } from './discovery_utils';
/**
 * Marks a component for check (in case of OnPush components) and synchronously
 * performs change detection on the application this component belongs to.
 *
 * @param component Component to {@link ChangeDetectorRef#markForCheck mark for check}.
 *
 * @publicApi
 * @globalApi ng
 */
export function applyChanges(component) {
    markDirty(component);
    getRootComponents(component).forEach(rootComponent => detectChanges(rootComponent));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbl91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvdXRpbC9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxhQUFhLEVBQUUsU0FBUyxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUsWUFBWSxDQUFDLFNBQWE7SUFDeEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtkZXRlY3RDaGFuZ2VzLCBtYXJrRGlydHl9IGZyb20gJy4uL2luc3RydWN0aW9ucy9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7Z2V0Um9vdENvbXBvbmVudHN9IGZyb20gJy4vZGlzY292ZXJ5X3V0aWxzJztcblxuLyoqXG4gKiBNYXJrcyBhIGNvbXBvbmVudCBmb3IgY2hlY2sgKGluIGNhc2Ugb2YgT25QdXNoIGNvbXBvbmVudHMpIGFuZCBzeW5jaHJvbm91c2x5XG4gKiBwZXJmb3JtcyBjaGFuZ2UgZGV0ZWN0aW9uIG9uIHRoZSBhcHBsaWNhdGlvbiB0aGlzIGNvbXBvbmVudCBiZWxvbmdzIHRvLlxuICpcbiAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IHRvIHtAbGluayBDaGFuZ2VEZXRlY3RvclJlZiNtYXJrRm9yQ2hlY2sgbWFyayBmb3IgY2hlY2t9LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBnbG9iYWxBcGkgbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Q2hhbmdlcyhjb21wb25lbnQ6IHt9KTogdm9pZCB7XG4gIG1hcmtEaXJ0eShjb21wb25lbnQpO1xuICBnZXRSb290Q29tcG9uZW50cyhjb21wb25lbnQpLmZvckVhY2gocm9vdENvbXBvbmVudCA9PiBkZXRlY3RDaGFuZ2VzKHJvb3RDb21wb25lbnQpKTtcbn1cbiJdfQ==