// Todo REDUX
/*
  * Store adalah tempat penyimpanan data pada Redux. Store berisi state dari aplikasi, yang dikelola oleh reducer. Untuk membuat store di Redux, kita perlu memanggil createStore() dan menyertakan reducer yang akan mengelola state.

  * Reducer adalah fungsi yang bertanggung jawab untuk memperbarui state pada store. Reducer menerima dua parameter, yaitu state saat ini dan action yang dilakukan, dan mengembalikan state yang baru.

  * Dispatch digunakan untuk memanggil action creator yang akan menghasilkan sebuah action yang berisi informasi tentang tindakan yang dilakukan oleh pengguna. Dispatch akan mengirimkan action tersebut ke reducer untuk memperbarui state pada store.

  * Subscription digunakan untuk mengamati perubahan pada state di store. Ketika terjadi perubahan pada state, subscription akan menjalankan sebuah fungsi yang akan meng-update tampilan aplikasi.
*/

const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 19,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      return {
        ...state,
        age: state.age + 1,
      };

    case 'CHANGE_VALUE':
      return {
        ...state,
        value: state.value + action.newValue,
      };

    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('Store Change :', store.getState());
});

// Dispatch (Action)
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 });
console.log(store.getState());
