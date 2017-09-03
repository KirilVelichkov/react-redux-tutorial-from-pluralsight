import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Selectors Tests', () => {
    describe('authorsFormattedForDropdown test', () => {
        it('should return formatted author data', () => {
            const authors = [
                { id: 'pesho-peshev', firstName: 'pesho', lastName: 'peshev' },
                { id: 'gosho-ghosev', firstName: 'gosho', lastName: 'goshev' }
            ];

            const expected = [
                { value: 'pesho-peshev', text: 'pesho peshev' },
                { value: 'gosho-ghosev', text: 'gosho goshev' }
            ];

            expect(authorsFormattedForDropdown(authors)).toEqual(expected);
        });
    });

});