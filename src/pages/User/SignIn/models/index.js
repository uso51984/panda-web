import { testGetRequest } from 'services/sign';
import { fromJS } from 'immutable';

const Model = {
  namespace: 'sign',
  state: fromJS({
    status: {
      test: 'chenjianbin'
    },
  }),

  effects: {
    * login({ payload }, { call, put }) {
      console.log('this.props.', payload);
      const response = yield call(testGetRequest, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },
};

export default Model;
