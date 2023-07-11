import CardContainer from '../components/CardContainer';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


const products = [
    {name: 'one', price: 1, id: 1},
    {name: 'two', price: 2, id: 2},
    {name: 'three', price: 3, id: 3}
]

describe('cards container', () => {
    it('renders correct amount of children', () => {
        const container = render(<CardContainer products={products}/>)
        expect(screen.getAllByTestId('card').length).toBe(3);
    })
})