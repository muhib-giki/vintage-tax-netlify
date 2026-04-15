import React from 'react';

interface SchemaOrgProps {
    data: any;
}

export default function SchemaOrg({ data }: SchemaOrgProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vintage Tax & Accounting",
    "url": "https://vintagetaxes.com",
    "logo": "https://vintagetaxes.com/logo.png",
    "sameAs": [
        "https://www.facebook.com/vintagetaxes",
        "https://www.linkedin.com/company/vintage-tax"
    ],
    "description": "A prestigious US taxation and accounting firm providing professional services to businesses and individuals."
};

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vintage Tax & Accounting",
    "image": "https://vintagetaxes.com/office-front.jpg",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "8100 W Maple St",
        "addressLocality": "Wichita",
        "addressRegion": "KS",
        "postalCode": "67209",
        "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.6841,
        "longitude": -97.4392
    },
    "url": "https://vintagetaxes.com",
    "telephone": "+13126567753",
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
        }
    ],
    "priceRange": "$$"
};
