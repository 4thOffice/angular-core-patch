/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ReflectionCapabilities } from '../reflection/reflection_capabilities';
import { getClosureSafeProperty } from '../util/property';
import { resolveForwardRef } from './forward_ref';
import { injectArgs, ɵɵinject } from './injector_compatibility';
const ɵ0 = getClosureSafeProperty;
const USE_VALUE = getClosureSafeProperty({ provide: String, useValue: ɵ0 });
const EMPTY_ARRAY = [];
export function convertInjectableProviderToFactory(type, provider) {
    if (!provider) {
        const reflectionCapabilities = new ReflectionCapabilities();
        const deps = reflectionCapabilities.parameters(type);
        // TODO - convert to flags.
        return () => new type(...injectArgs(deps));
    }
    if (USE_VALUE in provider) {
        const valueProvider = provider;
        return () => valueProvider.useValue;
    }
    else if (provider.useExisting) {
        const existingProvider = provider;
        return () => ɵɵinject(resolveForwardRef(existingProvider.useExisting));
    }
    else if (provider.useFactory) {
        const factoryProvider = provider;
        return () => factoryProvider.useFactory(...injectArgs(factoryProvider.deps || EMPTY_ARRAY));
    }
    else if (provider.useClass) {
        const classProvider = provider;
        let deps = provider.deps;
        if (!deps) {
            const reflectionCapabilities = new ReflectionCapabilities();
            deps = reflectionCapabilities.parameters(type);
        }
        return () => new (resolveForwardRef(classProvider.useClass))(...injectArgs(deps));
    }
    else {
        let deps = provider.deps;
        if (!deps) {
            const reflectionCapabilities = new ReflectionCapabilities();
            deps = reflectionCapabilities.parameters(type);
        }
        return () => new type(...injectArgs(deps));
    }
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFeEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7V0FJUSxzQkFBc0I7QUFENUYsTUFBTSxTQUFTLEdBQ1gsc0JBQXNCLENBQWdCLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLElBQXdCLEVBQUMsQ0FBQyxDQUFDO0FBQy9GLE1BQU0sV0FBVyxHQUFVLEVBQUUsQ0FBQztBQUU5QixNQUFNLFVBQVUsa0NBQWtDLENBQzlDLElBQWUsRUFDZixRQUM2RDtJQUMvRCxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7UUFDNUQsTUFBTSxJQUFJLEdBQUcsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELDJCQUEyQjtRQUMzQixPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQWEsQ0FBQyxDQUFDLENBQUM7S0FDckQ7SUFFRCxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7UUFDekIsTUFBTSxhQUFhLEdBQUksUUFBOEIsQ0FBQztRQUN0RCxPQUFPLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7S0FDckM7U0FBTSxJQUFLLFFBQWlDLENBQUMsV0FBVyxFQUFFO1FBQ3pELE1BQU0sZ0JBQWdCLEdBQUksUUFBaUMsQ0FBQztRQUM1RCxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQ3hFO1NBQU0sSUFBSyxRQUFnQyxDQUFDLFVBQVUsRUFBRTtRQUN2RCxNQUFNLGVBQWUsR0FBSSxRQUFnQyxDQUFDO1FBQzFELE9BQU8sR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7S0FDN0Y7U0FBTSxJQUFLLFFBQXdELENBQUMsUUFBUSxFQUFFO1FBQzdFLE1BQU0sYUFBYSxHQUFJLFFBQXdELENBQUM7UUFDaEYsSUFBSSxJQUFJLEdBQUksUUFBb0MsQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDO1lBQzVELElBQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7UUFDRCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ25GO1NBQU07UUFDTCxJQUFJLElBQUksR0FBSSxRQUFvQyxDQUFDLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUM7WUFDNUQsSUFBSSxHQUFHLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUNELE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSyxDQUFDLENBQUMsQ0FBQztLQUM3QztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge1JlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4uL3JlZmxlY3Rpb24vcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHtnZXRDbG9zdXJlU2FmZVByb3BlcnR5fSBmcm9tICcuLi91dGlsL3Byb3BlcnR5JztcblxuaW1wb3J0IHtyZXNvbHZlRm9yd2FyZFJlZn0gZnJvbSAnLi9mb3J3YXJkX3JlZic7XG5pbXBvcnQge2luamVjdEFyZ3MsIMm1ybVpbmplY3R9IGZyb20gJy4vaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge0NsYXNzU2Fuc1Byb3ZpZGVyLCBDb25zdHJ1Y3RvclNhbnNQcm92aWRlciwgRXhpc3RpbmdTYW5zUHJvdmlkZXIsIEZhY3RvcnlTYW5zUHJvdmlkZXIsIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyLCBWYWx1ZVByb3ZpZGVyLCBWYWx1ZVNhbnNQcm92aWRlcn0gZnJvbSAnLi9pbnRlcmZhY2UvcHJvdmlkZXInO1xuXG5jb25zdCBVU0VfVkFMVUUgPVxuICAgIGdldENsb3N1cmVTYWZlUHJvcGVydHk8VmFsdWVQcm92aWRlcj4oe3Byb3ZpZGU6IFN0cmluZywgdXNlVmFsdWU6IGdldENsb3N1cmVTYWZlUHJvcGVydHl9KTtcbmNvbnN0IEVNUFRZX0FSUkFZOiBhbnlbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEluamVjdGFibGVQcm92aWRlclRvRmFjdG9yeShcbiAgICB0eXBlOiBUeXBlPGFueT4sXG4gICAgcHJvdmlkZXI/OiBWYWx1ZVNhbnNQcm92aWRlcnxFeGlzdGluZ1NhbnNQcm92aWRlcnxTdGF0aWNDbGFzc1NhbnNQcm92aWRlcnxcbiAgICBDb25zdHJ1Y3RvclNhbnNQcm92aWRlcnxGYWN0b3J5U2Fuc1Byb3ZpZGVyfENsYXNzU2Fuc1Byb3ZpZGVyKTogKCkgPT4gYW55IHtcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIGNvbnN0IHJlZmxlY3Rpb25DYXBhYmlsaXRpZXMgPSBuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpO1xuICAgIGNvbnN0IGRlcHMgPSByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnBhcmFtZXRlcnModHlwZSk7XG4gICAgLy8gVE9ETyAtIGNvbnZlcnQgdG8gZmxhZ3MuXG4gICAgcmV0dXJuICgpID0+IG5ldyB0eXBlKC4uLmluamVjdEFyZ3MoZGVwcyBhcyBhbnlbXSkpO1xuICB9XG5cbiAgaWYgKFVTRV9WQUxVRSBpbiBwcm92aWRlcikge1xuICAgIGNvbnN0IHZhbHVlUHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgVmFsdWVTYW5zUHJvdmlkZXIpO1xuICAgIHJldHVybiAoKSA9PiB2YWx1ZVByb3ZpZGVyLnVzZVZhbHVlO1xuICB9IGVsc2UgaWYgKChwcm92aWRlciBhcyBFeGlzdGluZ1NhbnNQcm92aWRlcikudXNlRXhpc3RpbmcpIHtcbiAgICBjb25zdCBleGlzdGluZ1Byb3ZpZGVyID0gKHByb3ZpZGVyIGFzIEV4aXN0aW5nU2Fuc1Byb3ZpZGVyKTtcbiAgICByZXR1cm4gKCkgPT4gybXJtWluamVjdChyZXNvbHZlRm9yd2FyZFJlZihleGlzdGluZ1Byb3ZpZGVyLnVzZUV4aXN0aW5nKSk7XG4gIH0gZWxzZSBpZiAoKHByb3ZpZGVyIGFzIEZhY3RvcnlTYW5zUHJvdmlkZXIpLnVzZUZhY3RvcnkpIHtcbiAgICBjb25zdCBmYWN0b3J5UHJvdmlkZXIgPSAocHJvdmlkZXIgYXMgRmFjdG9yeVNhbnNQcm92aWRlcik7XG4gICAgcmV0dXJuICgpID0+IGZhY3RvcnlQcm92aWRlci51c2VGYWN0b3J5KC4uLmluamVjdEFyZ3MoZmFjdG9yeVByb3ZpZGVyLmRlcHMgfHwgRU1QVFlfQVJSQVkpKTtcbiAgfSBlbHNlIGlmICgocHJvdmlkZXIgYXMgU3RhdGljQ2xhc3NTYW5zUHJvdmlkZXIgfCBDbGFzc1NhbnNQcm92aWRlcikudXNlQ2xhc3MpIHtcbiAgICBjb25zdCBjbGFzc1Byb3ZpZGVyID0gKHByb3ZpZGVyIGFzIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyIHwgQ2xhc3NTYW5zUHJvdmlkZXIpO1xuICAgIGxldCBkZXBzID0gKHByb3ZpZGVyIGFzIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyKS5kZXBzO1xuICAgIGlmICghZGVwcykge1xuICAgICAgY29uc3QgcmVmbGVjdGlvbkNhcGFiaWxpdGllcyA9IG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCk7XG4gICAgICBkZXBzID0gcmVmbGVjdGlvbkNhcGFiaWxpdGllcy5wYXJhbWV0ZXJzKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gbmV3IChyZXNvbHZlRm9yd2FyZFJlZihjbGFzc1Byb3ZpZGVyLnVzZUNsYXNzKSkoLi4uaW5qZWN0QXJncyhkZXBzKSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGRlcHMgPSAocHJvdmlkZXIgYXMgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXIpLmRlcHM7XG4gICAgaWYgKCFkZXBzKSB7XG4gICAgICBjb25zdCByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzID0gbmV3IFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMoKTtcbiAgICAgIGRlcHMgPSByZWZsZWN0aW9uQ2FwYWJpbGl0aWVzLnBhcmFtZXRlcnModHlwZSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBuZXcgdHlwZSguLi5pbmplY3RBcmdzKGRlcHMhKSk7XG4gIH1cbn1cbiJdfQ==