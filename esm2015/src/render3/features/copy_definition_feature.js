/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { isComponentDef } from '../interfaces/type_checks';
import { getSuperType } from './inherit_definition_feature';
/**
 * Fields which exist on either directive or component definitions, and need to be copied from
 * parent to child classes by the `ɵɵCopyDefinitionFeature`.
 */
const COPY_DIRECTIVE_FIELDS = [
    // The child class should use the providers of its parent.
    'providersResolver',
];
/**
 * Fields which exist only on component definitions, and need to be copied from parent to child
 * classes by the `ɵɵCopyDefinitionFeature`.
 *
 * The type here allows any field of `ComponentDef` which is not also a property of `DirectiveDef`,
 * since those should go in `COPY_DIRECTIVE_FIELDS` above.
 */
const COPY_COMPONENT_FIELDS = [
    // The child class should use the template function of its parent, including all template
    // semantics.
    'template',
    'decls',
    'consts',
    'vars',
    'onPush',
    'ngContentSelectors',
    // The child class should use the CSS styles of its parent, including all styling semantics.
    'styles',
    'encapsulation',
    // The child class should be checked by the runtime in the same way as its parent.
    'schemas',
];
/**
 * Copies the fields not handled by the `ɵɵInheritDefinitionFeature` from the supertype of a
 * definition.
 *
 * This exists primarily to support ngcc migration of an existing View Engine pattern, where an
 * entire decorator is inherited from a parent to a child class. When ngcc detects this case, it
 * generates a skeleton definition on the child class, and applies this feature.
 *
 * The `ɵɵCopyDefinitionFeature` then copies any needed fields from the parent class' definition,
 * including things like the component template function.
 *
 * @param definition The definition of a child class which inherits from a parent class with its
 * own definition.
 *
 * @codeGenApi
 */
export function ɵɵCopyDefinitionFeature(definition) {
    let superType = getSuperType(definition.type);
    let superDef = undefined;
    if (isComponentDef(definition)) {
        // Don't use getComponentDef/getDirectiveDef. This logic relies on inheritance.
        superDef = superType.ɵcmp;
    }
    else {
        // Don't use getComponentDef/getDirectiveDef. This logic relies on inheritance.
        superDef = superType.ɵdir;
    }
    // Needed because `definition` fields are readonly.
    const defAny = definition;
    // Copy over any fields that apply to either directives or components.
    for (const field of COPY_DIRECTIVE_FIELDS) {
        defAny[field] = superDef[field];
    }
    if (isComponentDef(superDef)) {
        // Copy over any component-specific fields.
        for (const field of COPY_COMPONENT_FIELDS) {
            defAny[field] = superDef[field];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weV9kZWZpbml0aW9uX2ZlYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ZlYXR1cmVzL2NvcHlfZGVmaW5pdGlvbl9mZWF0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFMUQ7OztHQUdHO0FBQ0gsTUFBTSxxQkFBcUIsR0FBb0M7SUFDN0QsMERBQTBEO0lBQzFELG1CQUFtQjtDQUlwQixDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsTUFBTSxxQkFBcUIsR0FBd0U7SUFDakcseUZBQXlGO0lBQ3pGLGFBQWE7SUFDYixVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFvQjtJQUVwQiw0RkFBNEY7SUFDNUYsUUFBUTtJQUNSLGVBQWU7SUFFZixrRkFBa0Y7SUFDbEYsU0FBUztDQUNWLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsVUFBK0M7SUFDckYsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztJQUUvQyxJQUFJLFFBQVEsR0FBa0QsU0FBUyxDQUFDO0lBQ3hFLElBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzlCLCtFQUErRTtRQUMvRSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUssQ0FBQztLQUM1QjtTQUFNO1FBQ0wsK0VBQStFO1FBQy9FLFFBQVEsR0FBRyxTQUFTLENBQUMsSUFBSyxDQUFDO0tBQzVCO0lBRUQsbURBQW1EO0lBQ25ELE1BQU0sTUFBTSxHQUFJLFVBQWtCLENBQUM7SUFFbkMsc0VBQXNFO0lBQ3RFLEtBQUssTUFBTSxLQUFLLElBQUkscUJBQXFCLEVBQUU7UUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQztJQUVELElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzVCLDJDQUEyQztRQUMzQyxLQUFLLE1BQU0sS0FBSyxJQUFJLHFCQUFxQixFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnREZWYsIERpcmVjdGl2ZURlZn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9kZWZpbml0aW9uJztcbmltcG9ydCB7aXNDb21wb25lbnREZWZ9IGZyb20gJy4uL2ludGVyZmFjZXMvdHlwZV9jaGVja3MnO1xuXG5pbXBvcnQge2dldFN1cGVyVHlwZX0gZnJvbSAnLi9pbmhlcml0X2RlZmluaXRpb25fZmVhdHVyZSc7XG5cbi8qKlxuICogRmllbGRzIHdoaWNoIGV4aXN0IG9uIGVpdGhlciBkaXJlY3RpdmUgb3IgY29tcG9uZW50IGRlZmluaXRpb25zLCBhbmQgbmVlZCB0byBiZSBjb3BpZWQgZnJvbVxuICogcGFyZW50IHRvIGNoaWxkIGNsYXNzZXMgYnkgdGhlIGDJtcm1Q29weURlZmluaXRpb25GZWF0dXJlYC5cbiAqL1xuY29uc3QgQ09QWV9ESVJFQ1RJVkVfRklFTERTOiAoa2V5b2YgRGlyZWN0aXZlRGVmPHVua25vd24+KVtdID0gW1xuICAvLyBUaGUgY2hpbGQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgcHJvdmlkZXJzIG9mIGl0cyBwYXJlbnQuXG4gICdwcm92aWRlcnNSZXNvbHZlcicsXG5cbiAgLy8gTm90IGxpc3RlZCBoZXJlIGFyZSBhbnkgZmllbGRzIHdoaWNoIGFyZSBoYW5kbGVkIGJ5IHRoZSBgybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZWAsIHN1Y2hcbiAgLy8gYXMgaW5wdXRzLCBvdXRwdXRzLCBhbmQgaG9zdCBiaW5kaW5nIGZ1bmN0aW9ucy5cbl07XG5cbi8qKlxuICogRmllbGRzIHdoaWNoIGV4aXN0IG9ubHkgb24gY29tcG9uZW50IGRlZmluaXRpb25zLCBhbmQgbmVlZCB0byBiZSBjb3BpZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGRcbiAqIGNsYXNzZXMgYnkgdGhlIGDJtcm1Q29weURlZmluaXRpb25GZWF0dXJlYC5cbiAqXG4gKiBUaGUgdHlwZSBoZXJlIGFsbG93cyBhbnkgZmllbGQgb2YgYENvbXBvbmVudERlZmAgd2hpY2ggaXMgbm90IGFsc28gYSBwcm9wZXJ0eSBvZiBgRGlyZWN0aXZlRGVmYCxcbiAqIHNpbmNlIHRob3NlIHNob3VsZCBnbyBpbiBgQ09QWV9ESVJFQ1RJVkVfRklFTERTYCBhYm92ZS5cbiAqL1xuY29uc3QgQ09QWV9DT01QT05FTlRfRklFTERTOiBFeGNsdWRlPGtleW9mIENvbXBvbmVudERlZjx1bmtub3duPiwga2V5b2YgRGlyZWN0aXZlRGVmPHVua25vd24+PltdID0gW1xuICAvLyBUaGUgY2hpbGQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gb2YgaXRzIHBhcmVudCwgaW5jbHVkaW5nIGFsbCB0ZW1wbGF0ZVxuICAvLyBzZW1hbnRpY3MuXG4gICd0ZW1wbGF0ZScsXG4gICdkZWNscycsXG4gICdjb25zdHMnLFxuICAndmFycycsXG4gICdvblB1c2gnLFxuICAnbmdDb250ZW50U2VsZWN0b3JzJyxcblxuICAvLyBUaGUgY2hpbGQgY2xhc3Mgc2hvdWxkIHVzZSB0aGUgQ1NTIHN0eWxlcyBvZiBpdHMgcGFyZW50LCBpbmNsdWRpbmcgYWxsIHN0eWxpbmcgc2VtYW50aWNzLlxuICAnc3R5bGVzJyxcbiAgJ2VuY2Fwc3VsYXRpb24nLFxuXG4gIC8vIFRoZSBjaGlsZCBjbGFzcyBzaG91bGQgYmUgY2hlY2tlZCBieSB0aGUgcnVudGltZSBpbiB0aGUgc2FtZSB3YXkgYXMgaXRzIHBhcmVudC5cbiAgJ3NjaGVtYXMnLFxuXTtcblxuLyoqXG4gKiBDb3BpZXMgdGhlIGZpZWxkcyBub3QgaGFuZGxlZCBieSB0aGUgYMm1ybVJbmhlcml0RGVmaW5pdGlvbkZlYXR1cmVgIGZyb20gdGhlIHN1cGVydHlwZSBvZiBhXG4gKiBkZWZpbml0aW9uLlxuICpcbiAqIFRoaXMgZXhpc3RzIHByaW1hcmlseSB0byBzdXBwb3J0IG5nY2MgbWlncmF0aW9uIG9mIGFuIGV4aXN0aW5nIFZpZXcgRW5naW5lIHBhdHRlcm4sIHdoZXJlIGFuXG4gKiBlbnRpcmUgZGVjb3JhdG9yIGlzIGluaGVyaXRlZCBmcm9tIGEgcGFyZW50IHRvIGEgY2hpbGQgY2xhc3MuIFdoZW4gbmdjYyBkZXRlY3RzIHRoaXMgY2FzZSwgaXRcbiAqIGdlbmVyYXRlcyBhIHNrZWxldG9uIGRlZmluaXRpb24gb24gdGhlIGNoaWxkIGNsYXNzLCBhbmQgYXBwbGllcyB0aGlzIGZlYXR1cmUuXG4gKlxuICogVGhlIGDJtcm1Q29weURlZmluaXRpb25GZWF0dXJlYCB0aGVuIGNvcGllcyBhbnkgbmVlZGVkIGZpZWxkcyBmcm9tIHRoZSBwYXJlbnQgY2xhc3MnIGRlZmluaXRpb24sXG4gKiBpbmNsdWRpbmcgdGhpbmdzIGxpa2UgdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gZGVmaW5pdGlvbiBUaGUgZGVmaW5pdGlvbiBvZiBhIGNoaWxkIGNsYXNzIHdoaWNoIGluaGVyaXRzIGZyb20gYSBwYXJlbnQgY2xhc3Mgd2l0aCBpdHNcbiAqIG93biBkZWZpbml0aW9uLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1Q29weURlZmluaXRpb25GZWF0dXJlKGRlZmluaXRpb246IERpcmVjdGl2ZURlZjxhbnk+fENvbXBvbmVudERlZjxhbnk+KTogdm9pZCB7XG4gIGxldCBzdXBlclR5cGUgPSBnZXRTdXBlclR5cGUoZGVmaW5pdGlvbi50eXBlKSE7XG5cbiAgbGV0IHN1cGVyRGVmOiBEaXJlY3RpdmVEZWY8YW55PnxDb21wb25lbnREZWY8YW55Pnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGlmIChpc0NvbXBvbmVudERlZihkZWZpbml0aW9uKSkge1xuICAgIC8vIERvbid0IHVzZSBnZXRDb21wb25lbnREZWYvZ2V0RGlyZWN0aXZlRGVmLiBUaGlzIGxvZ2ljIHJlbGllcyBvbiBpbmhlcml0YW5jZS5cbiAgICBzdXBlckRlZiA9IHN1cGVyVHlwZS7JtWNtcCE7XG4gIH0gZWxzZSB7XG4gICAgLy8gRG9uJ3QgdXNlIGdldENvbXBvbmVudERlZi9nZXREaXJlY3RpdmVEZWYuIFRoaXMgbG9naWMgcmVsaWVzIG9uIGluaGVyaXRhbmNlLlxuICAgIHN1cGVyRGVmID0gc3VwZXJUeXBlLsm1ZGlyITtcbiAgfVxuXG4gIC8vIE5lZWRlZCBiZWNhdXNlIGBkZWZpbml0aW9uYCBmaWVsZHMgYXJlIHJlYWRvbmx5LlxuICBjb25zdCBkZWZBbnkgPSAoZGVmaW5pdGlvbiBhcyBhbnkpO1xuXG4gIC8vIENvcHkgb3ZlciBhbnkgZmllbGRzIHRoYXQgYXBwbHkgdG8gZWl0aGVyIGRpcmVjdGl2ZXMgb3IgY29tcG9uZW50cy5cbiAgZm9yIChjb25zdCBmaWVsZCBvZiBDT1BZX0RJUkVDVElWRV9GSUVMRFMpIHtcbiAgICBkZWZBbnlbZmllbGRdID0gc3VwZXJEZWZbZmllbGRdO1xuICB9XG5cbiAgaWYgKGlzQ29tcG9uZW50RGVmKHN1cGVyRGVmKSkge1xuICAgIC8vIENvcHkgb3ZlciBhbnkgY29tcG9uZW50LXNwZWNpZmljIGZpZWxkcy5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIENPUFlfQ09NUE9ORU5UX0ZJRUxEUykge1xuICAgICAgZGVmQW55W2ZpZWxkXSA9IHN1cGVyRGVmW2ZpZWxkXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==