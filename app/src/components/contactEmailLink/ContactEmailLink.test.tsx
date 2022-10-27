import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactEmailLink from './ContactEmailLink';

describe('<ContactEmailLink>', () => {
    describe('rendering', () => {
        it('should render the email address', () => {
            render(<ContactEmailLink />);

            expect(screen.getByText('kontakt@jagdplaner.at')).toBeVisible();
        });

        it('should match snapshot', () => {
            const { asFragment } = render(<ContactEmailLink />);

            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('behavior', () => {
        it('should open the mail program with the correct email address and subject', () => {
            render(<ContactEmailLink />);

            expect(screen.getByRole('link')).toHaveAttribute(
                'href',
                'mailto:kontakt@jagdplaner.at?subject=Anfrage Jagdplaner'
            );
        });
    });
});
