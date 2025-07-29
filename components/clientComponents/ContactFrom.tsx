'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white text-sm sm:text-base">
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
            className="text-white border-gray-600 h-10 sm:h-12 text-sm sm:text-base"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white text-sm sm:text-base">
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
            className="text-white border-gray-600 h-10 sm:h-12 text-sm sm:text-base"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-white text-sm sm:text-base">
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
          className="text-white border-gray-600 h-10 sm:h-12 text-sm sm:text-base"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white text-sm sm:text-base">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="text-white border-gray-600 h-10 min-h-[100px] sm:min-h-[150px] text-sm sm:text-base"
        />
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-2 text-sm sm:text-base"
      >
        Send Message
      </Button>
    </div>
  );
}