import { testGetRequest } from 'services/sign';
import intlHelper from 'shared/utils/intlHelper';

const { getMessages } = intlHelper;

const intl = {
  namespace: 'intl',
  state: getMessages(),

  effects: {
    * login({ payload }, { call, put }) {
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

export default intl;
