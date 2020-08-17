import { testGetRequest } from 'services/sign';
import { fromJS } from 'immutable';
import intlHelper from './utils/intlHelper';

const { getMessages } = intlHelper;

const Model = {
  namespace: 'intl',
  state: getMessages(),

  effects: {
    *login({ payload }, { call, put }) {
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
