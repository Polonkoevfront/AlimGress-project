import { AuthState } from "../../../../features";


export interface StateSchema {
    auth: AuthState;
} 

export interface ThunkConfig {
    rejectValue: any;
    extra: any;
    state: StateSchema;
}