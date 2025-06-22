import { StateSchema } from "../../../../provider";


export const getAuthError = (state: StateSchema) => state.auth.error || "";