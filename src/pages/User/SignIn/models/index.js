import { testGet, testPost, getUserName } from '@/api';
import { fromJS } from 'immutable';
import { NAMESPACE, SIGN_IN_EFFECT, SET_ERROR_UI } from '../consts/actionTypes';

const Model = {
  namespace: NAMESPACE,
  state: fromJS({
    persons: {
      list: [1,2,3,4,5,6],
      detail: {
        name: '李小龙',
        object: [2,3,4,5]
      }
    },

    text: [1,2,4,5,6,7]
  }
  ),

  effects: {
    * [SIGN_IN_EFFECT]({ payload }, { call, put }) {
      const postResult = yield call(getUserName, payload);
      console.log('000', postResult);

      try {
        const response = yield call(testGet, payload);
        console.log('response', response);

        yield put({
          type: 'changeLoginStatus',
          payload: response
        });
      } catch (e) {
        console.log('response', e);
      }
    }
  },

  reducers: {
    [SET_ERROR_UI](state, { payload }){
      return state.withMutations(s => {
        s.updateIn(['text', 2], v => v+1);
        s.updateIn(['persons', 'detail', 'name'], v => '张三');
      });
    },

    [SIGN_IN_EFFECT](state, { payload }) {
      return {
        ...state,
        status: payload.status,
        type: payload.type
      };
    }
  }
};

export default Model;
