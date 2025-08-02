import Image from "next/image";
import Link from "next/link";
import ArrowButton from "@/components/global/ArrowButton";

const page = () => {
  return (
    <div className="bg-custom-white">
      {/* Video and header  */}
      <section className="relative mb-14">
        <div className="relative flex h-[300px] w-full items-center justify-center bg-gray-900 sm:h-[400px]">
          <Image
            src={"/seoHeaderBG.png"}
            alt="SEO"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="relative z-10 text-center">
            <h1 className="mb-2 text-5xl font-medium text-white">SEO</h1>
            <div className="flex items-center justify-center gap-2 text-2xl font-normal text-gray-300">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>{">"}</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-10 text-center lg:pb-32">
        <h2 className="text-h1-color mx-auto max-w-[816px] pb-5 text-5xl leading-tight font-semibold">
          <i className="font-dm-serif text-brand-color font-normal italic">
            Rank Higher. Get Found. Grow Smarter
          </i>{" "}
          <br />
          <span> with SEO That Works.</span>
        </h2>
        <p className="text-p-color mx-auto max-w-[816px] text-lg capitalize">
          FourBTech helps businesses increase visibility, attract organic
          traffic, and drive long-term growth with proven SEO strategies.
        </p>
        <Link
          href={{ pathname: "/", hash: "contact" }}
          className="mt-8 flex justify-center lg:mt-10"
        >
          <ArrowButton
            variant="fill"
            size={20}
            left
            className="!py-5 uppercase"
          >
            Book a SEO Audit
          </ArrowButton>
        </Link>
      </section>
      <section className="px-4 pb-10 text-center lg:pb-32">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 items-center gap-5 text-left lg:grid-cols-2">
            <div>
              <h6 className="text-brand-color pb-5 text-lg">
                Why SEO Matters for Your Business?
              </h6>
              <h4 className="text-p-color text-3xl font-medium">
                Search engine optimization isn't just about rankings—
                <span className="text-h1-color">
                  it's about sustainable growth and long-term success.
                </span>
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="border-p-color/40 grid gap-5 rounded-xl border p-5">
                <h6 className="text-brand-color text-3xl font-medium">93%</h6>
                <p className="text-p-color">
                  of online experiences start with a search engine—making search
                  visibility essential.
                </p>
              </div>
              <div className="border-p-color/40 grid gap-5 rounded-xl border p-5">
                <h6 className="text-brand-color text-3xl font-medium">8x</h6>
                <p className="text-p-color">
                  more clicks than paid ads, driving stronger organic
                  engagement.
                </p>
              </div>
              <div className="border-p-color/40 grid gap-5 rounded-xl border p-5">
                <Image
                  src={"/icons/seo/infinite.png"}
                  alt="∞"
                  width={30}
                  height={30}
                />
                <p className="text-p-color">
                  SEO offers long-term ROI without the cost of every single
                  click.
                </p>
              </div>
              <div className="border-p-color/40 grid gap-5 rounded-xl border p-5">
                <h6 className="text-brand-color text-3xl font-medium">75%</h6>
                <p className="text-p-color">
                  The top 3 Google results capture over 75% of all clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
