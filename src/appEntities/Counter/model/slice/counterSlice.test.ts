import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from 'appEntities/Counter';

describe('counterSlice', () => {
    it('should increment', () => {
        const state: CounterSchema = {
            value: 10
        }

        expect(counterReducer(state, counterActions.increment))
            .toEqual({ value: 11 });
    })

    it('should increment with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 })
    })

    it('should decrement', () => {
        const state: CounterSchema = {
            value: 10
        }

        expect(counterReducer(state, counterActions.decrement))
            .toEqual({ value: 9 });
    })

    it('should decrement with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement()))
            .toEqual({ value: -1 })
    })
})

