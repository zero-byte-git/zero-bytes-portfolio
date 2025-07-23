import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CrazyEggHero() {
  return (
    <section className="container mx-auto min-h-[calc(100vh-120px)] flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
        <div className="">
          {/* Heading */}
          <h1 className="text-4xl text-gray-200 font-concert font-thin md:text-6xl mb-10 tracking-wider">
            See what&apos;s wrong <br className="hidden md:block" />
            with your website.
          </h1>

          {/* CTA Box */}
          <div className="max-w-xl bg-[#121212] text-gray-100 p-6 rounded-lg shadow-md">
            <p className="mb-4 text-lg">
              Over{" "}
              <span className="font-bold">400,000 websites use Crazy Egg</span>{" "}
              to fix their website.
            </p>

            {/* Input & Button */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Input
                type="text"
                placeholder="Enter your website URL"
                className="w-full sm:flex-1 text-black bg-white border-gray-300 focus:border-teal-500"
              />
              <Button className="w-full sm:w-auto bg-[#578E7E] hover:bg-teal-700 text-gray-100">
                Continue →
              </Button>
            </div>

            {/* Trial text */}
            <p className="text-sm mt-3 text-gray-300">
              Start your 30-day FREE trial • Cancel anytime
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex items-center justify-center w-full">
          <video
            id="f4781f28-c89e-2e4c-d27a-a54c0145d4c3-video"
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
            data-wf-ignore="true"
          >
            <source
              src="https://cdn.prod.website-files.com/67974fd1791a398623df29a2/679cb18d2337098debb6f86b_webflow-transcode.mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://cdn.prod.website-files.com/67974fd1791a398623df29a2/679cb18d2337098debb6f86b_webflow-transcode.webm"
              data-wf-ignore="true"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
