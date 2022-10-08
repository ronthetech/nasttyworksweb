import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <div className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-center">Mobile</span>{" "}
                <span className="block text-teal-600 xl:inline text-center">
                  Mechanic
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Making house calls all over the New York. We come to you,
                whether you are stuck on the side of the road or in your
                driveway at home. 7 days a week.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/contact">
                    <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-8 py-3 text-lg font-medium text-white hover:bg-teal-700 md:py-4 md:px-10 md:text-xl">
                      Get an Estimate
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/services">
                    <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-100 px-8 py-3 text-lg font-medium text-teal-700 hover:bg-sky-200 md:py-4 md:px-10 md:text-xl">
                      Services We Offer
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"></div>
    </div>
  );
}
