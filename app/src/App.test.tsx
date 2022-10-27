import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
    describe('rendering', () => {
        it('should render the maintenance page', () => {
            const { container } = render(<App />);

            expect(container.querySelector('.maintenancePage')).toBeInTheDocument();
        });
    });
});
