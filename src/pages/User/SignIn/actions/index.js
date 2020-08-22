import createFSA from '@/shared/utils/createFSA';
import { NAMESPACE, SIGN_IN_EFFECT, SET_ERROR_UI } from '../consts/actionTypes';

export const signInEffectAction = createFSA(`${NAMESPACE}/${SIGN_IN_EFFECT}`);
export const setErrorUiAction = createFSA(`${NAMESPACE}/${SET_ERROR_UI}`);
