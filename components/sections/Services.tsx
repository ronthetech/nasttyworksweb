const services = [
  {
    name: "Brakes",
    description:
      "Replace worn brake pads, rotors, calipers and sensors, change old brake fluid",
  },
  {
    name: "Control Arms",
    description:
      "Replace worn control arms and bushings which cause steering problems, noise, vibration, and harshness",
  },
  {
    name: "Tie Rods",
    description:
      "Stop steering wheel drift, uneven/unusual tire wear caused by worn tie rods",
  },
  {
    name: "Serpentine/Drive Belts",
    description:
      "Replace the various belts on your engine - alternator, power steering pump, water pump, a/c compressor, air pump",
  },
  {
    name: "Motor Mounts",
    description:
      "Replace worn or broken mounts to reduce vibration from the movement of the engine and secure it in the vehicle",
  },
  {
    name: "Camber Adjustments",
    description: "Adjust the angles of the wheels on your vehicle",
  },
  {
    name: "Oil Service",
    description: "Full oil change service, replacement of your old oil filter",
  },
  {
    name: "Car Battery",
    description:
      "Removal of your old car battery, installation of your new car battery",
  },
  {
    name: "Wiper Blades",
    description: "Remove worn blades, install new blades",
  },
  {
    name: "Coilovers",
    description:
      "Install coilovers to adjust ride height and damping, improve handling",
  },
  {
    name: "Shocks and Struts",
    description:
      "Adjust the bounce, roll and sway of your vehicle to improve ride comfort",
  },
  {
    name: "Suspension",
    description:
      "Adjust the smoothness or stiffness of the suspension of your vehicle",
  },
  {
    name: "Fender Rolling",
    description:
      "Extra clearance for larger/wider tires or to lower your ride height",
  },
  {
    name: "Fuel Pump",
    description:
      "Replace failed fuel pump which can cause your car to stall or prevent it from even starting",
  },
  {
    name: "Radiator",
    description:
      "Replace failed radiator which can cause your engine to overheat",
  },
  {
    name: "Spark Plugs",
    description:
      "Replace worn spark plugs which can cause misfires and a rough idle",
  },
];

export default function ServicesBox() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-semibold text-indigo-600">Services</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-5xl">
            A few of the services we offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Don&#39;t worry if your issue isn&#39;t listed below! Just reach out
            to us on our{" "}
            <a
              className="text-gray-900 hover:bg-gray-700 hover:text-white px-1 py-0 rounded-md "
              href="/contact"
            >
              Contact Page
            </a>{" "}
            and let us know what your problem is!
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {services.map((service) => (
              <div key={service.name} className="relative">
                <dt>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {service.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
