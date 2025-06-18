"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <section id="team" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CEO Sarah */}
          <div className="text-center">
            <Image
              src="/images/sarah-exec.jpg"
              alt="Sarah, Chief Executive Officer"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-medium">Sarah</h3>
            <p className="text-gray-600">Chief Executive Officer</p>
          </div>

          {/* CTO */}
          <div className="text-center">
            <Image
              src="/images/cto-exec.jpg"
              alt="Chief Technology Officer"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-medium">CTO</n            <p className="text-gray-600">Chief Technology Officer</p>
          </div>

        </div>
      </section>
    </div>
  );
}
