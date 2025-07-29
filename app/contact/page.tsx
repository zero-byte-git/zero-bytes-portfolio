import Image from 'next/image';
import ContactForm from '@/components/clientComponents/ContactFrom';

// Static metadata for the Contact page
export const metadata = {
  title: 'Contact Us | Zero Byte',
  description: 'Get in touch with us for questions, project ideas, or collaboration opportunities.',
  openGraph: {
    title: 'Contact Us | Zero Byte',
    description: 'Reach out to us with any inquiries or collaboration ideas.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/images/contact-us.png',
        width: 700,
        height: 500,
        alt: 'Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Zero Byte',
    description: 'Reach out to us with any inquiries or collaboration ideas.',
    images: ['/images/contact-us.png'],
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto min-h-[calc(100vh-4rem)] flex flex-col px-4 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-36">
      <div className="w-full max-w-3xl mx-auto mb-6 space-y-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Contact Us
        </h1>
        <p className="text-gray-300 text-base sm:text-lg text-center">
          We&apos;d love to hear from you! Reach out with any questions, project ideas, or collaboration opportunities.
        </p>
      </div>
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center gap-6 lg:gap-8">
        <div className="w-full lg:w-1/2 space-y-6">
          <ContactForm />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <Image
            src="/images/contact-us.png"
            alt="Contact Us"
            width={700}
            height={500}
            className="object-contain max-w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}