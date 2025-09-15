import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pear-background via-white to-pear-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Video Section */}
        <div className="mb-8">
          <div className="relative w-full max-w-lg mx-auto">
            {/* Your 404 Video */}
            <video
              className="w-full aspect-[4/3] rounded-2xl shadow-2xl object-cover xl:my-[100px] xl:py-[0px]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/404-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Message */}
        <div className="mb-8">
          <h1 className="heading-serif text-4xl sm:text-5xl font-bold text-pear-primary mb-4 xl:my-[1px] xl:py-[11px]">
            Oops, nothing to see here,
          </h1>
          <h2 className="heading-serif text-3xl sm:text-4xl font-bold text-pear-gold mb-6">
            but remember to floss!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for seems to have wandered off like a loose tooth.
            Let's get you back to our homepage for some proper dental care!
          </p>
        </div>

        {/* Home Button */}
        <Link href="/">
          <Button
            size="lg"
            className="btn-gold text-white font-semibold group px-8 py-4 text-lg"
          >
            <Home className="w-5 h-5 mr-3" />
            Take Me Home
          </Button>
        </Link>

        {/* Fun dental facts */}
        <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-pear-primary/10">
          <p className="text-sm text-gray-600">
            💡 <strong>Did you know?</strong> You should floss at least once a day to remove plaque and food particles between your teeth!
          </p>
        </div>
      </div>
    </div>
  );
}
