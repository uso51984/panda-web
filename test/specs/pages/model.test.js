import { saga } from 'dva';
import { getRequestParams } from 'utils/testHelper';
import models from '@/pages/User/SignIn/models';
import { testGet } from '@/api';

const { call, put } = saga.effects;



describe('Name of the group', () => {
  it('effects should work fine', async () => {
    const signInEffectSaga = models.effects.SIGN_IN_EFFECT;
    const payload = { name: 'chen', age: 23 };
    const generator = signInEffectSaga({ payload: { name: 'chen', age: 23 } }, { call, put });
    const next = generator.next();

    console.log('getRequestParams', await getRequestParams(next));

  });
});
