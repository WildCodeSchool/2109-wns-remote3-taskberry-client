import { ShallowWrapper } from "enzyme";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
// import { createStore, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import configureStore from 'redux-mock-store';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper: ShallowWrapper,) => {
  return wrapper.find(`[data-test="${val}"]`);
};


  /** *****************************\
  *                               *
  *methods available as necessary *
  *                               *
  \*******************************/

// for cleaning useEffect unit test
// export const cleanupFunc = () => {
//   jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb()());
// };

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
//  export const storeFactory = (initialState) => {
//   return createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(...middlewares)
//   );
// };

// mock store
// export const mockStore = configureStore();
// export const mockDispatchfn = jest.fn();

// mock for modals create with createPortal
// export const mockCreatePortal = () => {
//   const element = document.createElement('div');
//   element.setAttribute('id', 'modal');
//   element.setAttribute('data-testid', 'modal-test-id');
//   return jest.spyOn(ReactDOM, 'createPortal').mockImplementation((children, c, key) => {
//     const symbol = Symbol.for('react.portal');
//     return {
//       $$typeof: symbol,
//       key: key == null ? null : '' + key,
//       children,
//       containerInfo: element,
//       implementation: null,
//       type: symbol.description,
//       props: null,
//     };
//   });
// };

// for cleaning useEffect unit test
// export const cleanupFunc = () => {
//   jest.spyOn(React, 'useEffect').mockImplementationOnce(cb => cb()());
// };