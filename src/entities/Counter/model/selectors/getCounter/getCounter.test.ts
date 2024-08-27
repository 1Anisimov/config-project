import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter.test', () => {
    test('should return Counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });

    // test('increment', () => {
    //     expect().toEqual();
    // });

    // test('decrement', () => {
    //     expect().toEqual();
    // });
});
