import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
    describe('rendering', () => {
        it('should render the test headline', () => {
            render(<App />);

            expect(screen.getByText('Test Page')).toBeVisible();
        });
    });
});
