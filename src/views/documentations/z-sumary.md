# Watchers: 

## Recommended Use Cases
- perform side effect in reaction to state change.
- change another piece of state.

## Watch Source Types
- a ref (including computed refs).
- a reactive object.
- a getter function
- an array of multiple sources.

## Deep Watchers
When you call `watch()` directly on a reactive object, it will implicitly create a deep watcher - the callback will be triggered on all nested mutations:
```javascript
const obj = reactive({ count: 0 })

watch(obj, (newValue, oldValue) => {
  // fires on nested property mutations
  // Note: `newValue` will be equal to `oldValue` here
  // because they both point to the same object!
})

obj.count++
```

## Cases

the callback will only fire if the getter returns a different object:
```javascript
watch(
  () => state.someObject,
  () => {
    // fires only when state.someObject is replaced
  }
)
```
You can, however, force the second case into a deep watcher by explicitly using the deep option:
```js
watch(
  () => state.someObject,
  (newValue, oldValue) => {
    // Note: `newValue` will be equal to `oldValue` here
    // *unless* state.someObject has been replaced
  },
  { deep: true }
)
```

## watchEffect

watchEffect(callback) allows us to track the callback's reactive dependencies automatically.the callback will run immediately, there's no need to specify `immediate: true`.

watchEffect only tracks dependencies during its synchronous execution. When using it with an async callback, only properties accessed before the first await tick will be tracked.

## watch vs. watchEffect​
watch and watchEffect both allow us to reactively perform side effects. Their main difference is the way they track their reactive dependencies:

- watch only tracks the explicitly watched source. It won't track anything accessed inside the callback. In addition, the callback only triggers when the source has actually changed. watch separates dependency tracking from the side effect, giving us more precise control over when the callback should fire.

- watchEffect, on the other hand, combines dependency tracking and side effect into one phase. It automatically tracks every reactive property accessed during its synchronous execution. This is more convenient and typically results in terser code, but makes its reactive dependencies less explicit.

## Watcher Flush Timing

By default, a watcher's callback is called after parent component updates (if any), and before the owner component's DOM updates. This means if you attempt to access the owner component's own DOM inside a watcher callback, the DOM will be in a pre-update state.

```
By default, a watcher's callback is called after parent component updates (if any), and before the owner component's DOM updates.

This means if you attempt to access the owner component's own DOM inside a watcher callback, the DOM will be in a pre-update state.

The watcher callback is triggered at certain points during the component's lifecycle:

1. After the parent component updates (if any), and
2. Before the owner component's DOM updates.

This timing is useful when you want to react to state changes and perform side effects before the DOM is updated.

For example, if you have a watcher that changes the state and causes a re-render, you can safely access the component's own DOM in the watcher callback.

The component's own DOM is in a pre-update state, meaning it hasn't been updated yet. So if you attempt to access the DOM in the watcher callback, you'll get the previous state of the DOM.

If you need to access the updated DOM after it's been updated, you should use a lifecycle hook such as `updated` or `nextTick`.
```

## Post Watchers

If you want to access the owner component's DOM in a watcher callback after Vue has updated it, you need to specify the flush: 'post' option:
```js
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})
```

# Template Refs
ref is a special attribute, similar to the key attribute discussed in the v-for chapter. It allows us to obtain a direct reference to a specific DOM element or child component instance after it's mounted. This may be useful when you want to, for example, programmatically focus an input on component mount, or initialize a 3rd party library on an element.