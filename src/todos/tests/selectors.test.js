import { expect } from 'chai';
import { getCompleteTodos } from '../selectors';

describe('the getCompletedTodos test', () => {
    it('Returns only the completed todos', () => {
        const fakeTodos = [{
            text: 'Say hello',
            isCompleted: true,
        }, {
            text: 'Say goodbye',
            isCompleted: false,
        }, {
            text: 'Climb Mount everest',
            isCompleted: false,
        }];

        const expected = [{
            text: 'Say hello',
            isCompleted: true,
        }];

        const actual = getCompleteTodos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);

    })
});