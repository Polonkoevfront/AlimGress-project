export type { AuthState } from './auth/model/types/auth'
export { authActions, authReducer } from './auth/model/slice/authSlice'
export { registerByEmail } from './auth/model/service/registerByEmail'
export { getAuthError } from './auth/model/selectors/getAuthError'