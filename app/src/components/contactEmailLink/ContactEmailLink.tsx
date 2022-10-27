import React from 'react';
import texts from '../../texts/texts.json';

export default function ContactEmailLink(): JSX.Element {
    const { email, subject } = texts.contact;
    const href = `mailto:${email}?subject=${subject}`;

    return <a href={href}>{email}</a>;
}
