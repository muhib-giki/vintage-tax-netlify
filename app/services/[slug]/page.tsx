import React from 'react';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { servicesData } from '@/utils/servicesData';
import { Metadata } from 'next';
import SchemaOrg from '@/components/SchemaOrg';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params for all services
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

// Generate dynamic metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found | Vintage Tax',
        };
    }

    return {
        title: `${service.title} | Vintage Tax & Accounting`,
        description: service.description,
        keywords: [
            service.title.toLowerCase(),
            'vintage tax',
            'tax services',
            'accounting services',
            service.slug,
        ],
        openGraph: {
            title: `${service.title} - Vintage Tax`,
            description: service.subtitle,
            type: 'website',
            images: [
                {
                    url: service.image,
                    alt: service.title,
                },
            ],
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Vintage Tax & Accounting",
            "url": "https://vintagetaxes.com"
        },
        "areaServed": ["Kansas", "Missouri", "Illinois", "Mississippi"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.title,
            "itemListElement": service.deliverables?.map((d: string) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": d
                }
            }))
        }
    };

    return (
        <>
            <SchemaOrg data={serviceSchema} />
            <ServiceDetail
                serviceId={service.id}
            />
        </>
    );
}
