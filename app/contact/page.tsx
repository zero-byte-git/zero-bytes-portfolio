'use client'

import React, {useState} from "react";
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";

// Define interface for form data
interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add form submission logic here (e.g., API call to handle form data)
        console.log("Form submitted:", formData);
        // Reset form after submission
        setFormData({name: "", email: "", subject: "", message: ""});
    };

    return (
        <div className="container mx-auto flex flex-col lg:mt-32 px-4">
            <div className="max-w-1/2 mb-6 space-y-4">
                <h1 className="text-white text-5xl md:text-6xl font-bold">Contact Us</h1>
                <p className="text-gray-300 text-lg">
                    We&apos;d love to hear from you! Reach out with any questions, project ideas, or collaboration
                    opportunities.
                </p>
            </div>
            <div className="w-full flex justify-center items-center gap-8">
                <div className="md:w-1/2 space-y-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="col-span-1 space-y-2">
                                <Label htmlFor="name" className="text-white">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="text-white border-gray-600 h-12"
                                />
                            </div>
                            <div className="col-span-1 space-y-2">
                                <Label htmlFor="email" className="text-white">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="text-white border-gray-600 h-12"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-white">
                                Subject
                            </Label>
                            <Input
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                required
                                className="text-white border-gray-600 h-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-white">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                                className="text-white border-gray-600 h-12 min-h-[150px]"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2"
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <Image
                        src="/images/contact-us.png"
                        alt="Contact Us"
                        width={700}
                        height={500}
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}