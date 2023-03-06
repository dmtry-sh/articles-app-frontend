import { render, screen } from '@testing-library/react' ;
import { Button, ButtonVariant } from './Button';

describe('Button', () => {
    it('should render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })

    it('should have clear variant className', () => {
        render(<Button variant={ButtonVariant.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    })
})