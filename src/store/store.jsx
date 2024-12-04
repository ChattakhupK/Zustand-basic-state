import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const testStore = (set) => ({
  // section1 input
  fname: "Vat",
  lname: "tamagod",
  setName: (newValue) => set({ fname: newValue }),

  // section2 + -
  value: 0,
  incNum: () => set((state) => ({ value: state.value + 1 })),
  decNum: () => set((state) => ({ value: state.value - 1 })),

  // section3 AddArr
  arr1: [],
  addTodo: (newValue) => set((state) => ({ arr1: [...state.arr1, newValue] })),
  delTodo: (idx) =>
    set((state) => ({
      arr1: state.arr1.filter((item, index) => index !== idx),
    })),

  // section4 AddObj
  arr2: [
    { id: 1, title: "work1" },
    { id: 2, title: "work2" },
    { id: 3, title: "work3" },
  ],
  addObj: (newValue) =>
    set((state) => ({
      arr2: [
        ...state.arr2,
        {
          id: Date.now(),
          title: newValue,
        },
      ],
    })),
  delObj: (id) =>
    set((state) => ({
      arr2: state.arr2.filter((item, index) => item.id !== id),
    })),

  // section5 fetchData
  data: [],
  isLoading: false,
  error: false,
  errorMsg: "",
  //ตัวรวม
  getData: async () => {
    try {
      set({ isLoading: true, error: false });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      set({ isLoading: false, data: res.data });
    } catch (err) {
      set({ error: true, errorMsg: err.message, isLoading: false });
    }
  },
});

const usePersist = {
  name: "store-vat",
  getstorage: () => localStorage,
  partialize: (state) => ({
    fname: state.fname,
    lname: state.lname,
    value: state.value,
  }),
};

const useStore = create(persist(testStore, usePersist));

export default useStore;
