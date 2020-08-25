import { testGet, getUserName } from '@/api';
import { fromJS } from 'immutable';
import { NAMESPACE, SIGN_IN_EFFECT, SET_ERROR_UI } from '../consts/actionTypes';

const Model = {
  namespace: NAMESPACE,
  state: fromJS({
    status: {
      test: 'chenjianbin'
    },
  }),

  effects: {
    * [SIGN_IN_EFFECT]({ payload }, { call, put }) {
      try {
        const response = yield call(testGet, payload);
        console.log('response', response);

        yield put({
          type: 'changeLoginStatus',
          payload: response,
        });
      } catch (e) {
        console.log('response', e);
      }
    },

    * [SET_ERROR_UI]({ payload }, { call, put }) {
      try {
        const response = yield call(getUserName, payload);
        console.log('response', response);

        yield put({
          type: 'changeLoginStatus',
          payload: response,
        });
      } catch (e) {
        console.log('response', e);
      }
    },
  },

  reducers: {
    [SET_ERROR_UI](state, { payload }){

      return state;
    },
    [SIGN_IN_EFFECT](state, { payload }) {
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};

export default Model;
