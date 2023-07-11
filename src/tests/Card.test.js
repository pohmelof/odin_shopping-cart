import Card from "../components/Card";
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const test_data = {
    img: '#',
    name: 'test',
    price: 999,
}

describe('product card', () => {
    it('renders card', () => {
        render(<Card data={test_data}/>);
        expect(screen.getByTestId('card')).toBeInTheDocument();
    });

    it('renders correct heading and price', () => {
        render(<Card data={test_data}/>);
        expect(screen.getByRole('heading').textContent).toMatch(/test/);
        expect(screen.getByText('$999')).toBeInTheDocument();
    });

    it('calls onClick', async () => {
        const mockOnClick = jest.fn();
        const user = userEvent.setup();

        render(<Card handleClick={mockOnClick} data={test_data}/>);

        const button = screen.getByRole('button', {name: 'Add to cart'});

        await user.click(button);

        expect(mockOnClick).toBeCalled();

    })
})