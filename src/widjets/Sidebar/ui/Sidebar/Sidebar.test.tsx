import { fireEvent, screen } from '@testing-library/react' ;
import { Sidebar } from 'widjets/Sidebar';
import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';

describe('Sidebar', () => {
    test('should render', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })

    test('toggle', () => {
        renderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    })
})