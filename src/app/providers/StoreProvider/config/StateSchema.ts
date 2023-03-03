import { CounterSchema } from 'appEntities/Counter';
import { UserSchema } from 'appEntities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}