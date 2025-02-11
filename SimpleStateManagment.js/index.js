class StateManager {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = [];
  }

  // Get the current state
  getState() {
    return this.state;
  }

  // Update the state and notify listeners
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  // Subscribe to state changes
  subscribe(listener) {
    this.listeners.push(listener);
  }

  // Notify all listeners about state changes
  notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }
}

// Example usage
const store = new StateManager({ count: 0 });

// Component 1: Updates the UI
store.subscribe((state) => {
  document.getElementById("counter").innerText = `Count: ${state.count}`;
});

// Component 2: Button Click Event
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("increment").addEventListener("click", () => {
    store.setState({ count: store.getState().count + 1 });
  });

  document.getElementById("decrement").addEventListener("click", () => {
    store.setState({ count: store.getState().count - 1 });
  });
});
