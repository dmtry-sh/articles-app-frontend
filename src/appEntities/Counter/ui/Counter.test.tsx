import { screen } from '@testing-library/react' ;
import { IRenderComponentOptions, renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { Counter } from './Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    it('should render', () => {
        const renderOptions: IRenderComponentOptions = {
            initialState: {
                counter: { value: 10 }
            }
        }

        renderComponent(<Counter />, renderOptions);
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    })

    it('should increment', () => {
        const renderOptions: IRenderComponentOptions = {
            initialState: {
                counter: { value: 10 }
            }
        }

        renderComponent(<Counter />, renderOptions);

        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    })

    it('should increment with empty state', () => {
        renderComponent(<Counter />);

        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    })

    it('should decrement', () => {
        const renderOptions: IRenderComponentOptions = {
            initialState: {
                counter: { value: 10 }
            }
        }

        renderComponent(<Counter />, renderOptions);

        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    })

    it('should decrement with empty state', () => {
        renderComponent(<Counter />);

        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
    })
})