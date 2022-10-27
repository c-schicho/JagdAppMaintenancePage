import React from 'react';
import styles from './MaintenancePage.module.scss';
import texts from '../../texts/texts.json';
import ContactEmailLink from '../contactEmailLink/ContactEmailLink';

export default function MaintenancePage(): JSX.Element {
    return (
        <div className={styles.maintenancePage}>
            <h1>
                <i className="fa-solid fa-wrench" />
                {texts.maintenancePage.header}
                <i className="fa-solid fa-hammer" />
            </h1>
            <div>
                <span>{texts.maintenancePage.information}</span>
                <ContactEmailLink />
            </div>
        </div>
    );
}
