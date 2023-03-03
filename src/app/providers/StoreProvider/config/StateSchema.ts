import { CounterSchema } from 'appEntities/Counter';
import { UserSchema } from 'appEntities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema
}