import { authSignIn, authSignUp } from '../../services/auth';
import actionAuth from './actionAuth';

export const authSignInAction = (data) => {
    return {
        type: actionAuth.authSignIn,
        payload: authSignIn(data)
    }
}

export const authsignUpAction = (data) => {
    return {
        type: actionAuth.authSignUp,
        payload: authSignUp(data)
    }
}