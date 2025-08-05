import { ref, type Ref } from 'vue';

export function useState<T>(initialState: T | (() => T)): [Ref<T>, (newState: T | ((prevState: T) => T)) => void] {
  const value = typeof initialState === 'function'
    ? (initialState as () => T)()
    : initialState;

  const state = ref(value) as Ref<T>;

  const setState = (newState: T | ((prevState: T) => T)) => {
    if (typeof newState === 'function') {
      state.value = (newState as (prevState: T) => T)(state.value);
    } else {
      state.value = newState;
    }
  };

  return [state, setState];
}