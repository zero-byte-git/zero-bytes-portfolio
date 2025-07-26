"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function CrazyEggHero() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    website: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, name, website } = formData;
    if (!email || !name || !website) {
      setMessage("Please fill in all fields.");
      return;
    }

    setIsSending(true);
    setMessage("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: name,
          user_email: email,
          website_url: website,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setMessage("Email sent successfully!");
      toast.success(message);
      setFormData({ email: "", name: "", website: "" });
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
      toast.error(message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="container mx-auto min-h-[calc(100vh-120px)] flex items-center justify-center px-4 mt-12 sm:mt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
        <div>
          <h1 className="text-4xl text-gray-200 font-concert font-bold md:text-6xl mb-10 tracking-wider">
            See what&apos;s wrong <br className="hidden md:block" />
            with your website.
          </h1>

          <div className="max-w-xl bg-[#121212] text-gray-100 p-6 rounded-lg shadow-md">
            <p className="mb-4 text-lg">
              Over{" "}
              <span className="font-bold">400 websites use Zero Byte</span>{" "}
              to fix their website.
            </p>

            <div className="flex flex-col items-start gap-4 w-full">
              <div className="grid grid-cols-7 gap-3 w-full">
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email"
                  className="col-span-4 text-black bg-white border-gray-300 focus:border-teal-500 rounded-md p-2"
                />

                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  className="col-span-3 text-black bg-white border-gray-300 focus:border-teal-500 rounded-md p-2"
                />
              </div>
              <div className="w-full grid grid-cols-3 gap-3">
                <Input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Enter your Website URL"
                  className="col-span-2 w-full text-black bg-white border-gray-300 focus:border-teal-500 rounded-md p-2"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={isSending}
                  className="col-span-1 sm:w-auto bg-[#578E7E] hover:bg-teal-700 text-gray-100 rounded-md px-4 py-2"
                >
                  {isSending ? "Sending..." : "Continue →"}
                </Button>
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-300">
              Start your 30-day FREE trial • Cancel anytime
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex items-center justify-center w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              backgroundImage: `url('https://cdn.prod.website-files.com/67974fd1791a398623df29a2/679cb18d2337098debb6f86b_webflow-poster-00001.jpg')`,
              backgroundSize: "cover",
              objectFit: "cover",
              width: "100%",
              height: "auto",
            }}
          >
            <source src="https://cdn.prod.website-files.com/67974fd1791a398623df29a2/679cb18d2337098debb6f86b_webflow-transcode.mp4" />
            <source src="https://cdn.prod.website-files.com/67974fd1791a398623df29a2/679cb18d2337098debb6f86b_webflow-transcode.webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
