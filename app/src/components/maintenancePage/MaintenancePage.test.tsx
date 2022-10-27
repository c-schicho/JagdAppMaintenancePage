import React from 'react';
import { render, screen } from '@testing-library/react';
import MaintenancePage from './MaintenancePage';

describe('<MaintenancePage>', () => {
    describe('rendering', () => {
        it('should render the headline', () => {
            const { container } = render(<MaintenancePage />);

            expect(screen.getByText('Serverwartungen')).toBeVisible();
            expect(container.querySelector('.fa-wrench')).toBeInTheDocument();
            expect(container.querySelector('.fa-hammer')).toBeInTheDocument();
        });

        it('should render the info text', () => {
            render(<MaintenancePage />);

            expect(
                screen.getByText(
                    'Leider führen wir im Moment Serverwartungen durch, daher ist die Applikation vorübergehen nicht erreichbar. Bitte versuches es später noch einmal. Sollte das Problem weiterhin bestehen kontaktiere uns bitte unter:'
                )
            ).toBeVisible();
        });

        it('should render the contact email link', () => {
            render(<MaintenancePage />);

            expect(screen.getByText('kontakt@jagdplaner.at')).toBeInTheDocument();
        });

        it('should match snapshot', () => {
            const { asFragment } = render(<MaintenancePage />);

            expect(asFragment()).toMatchSnapshot();
        });
    });
});
