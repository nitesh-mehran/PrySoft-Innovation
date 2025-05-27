import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PageTop from "../Layout/PageTop";

const TermsAndConditions = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <PageTop
        title="Terms & Condition"
        currentPage="Trems&Condition"
      />
     
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            data-aos="fade-up"
          >
            <div>
              <img
                src="/t&c.jpg"
                alt="Terms and Conditions"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-2 uppercase tracking-wide font-semibold">
                Terms and Conditions
              </p>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                PrySoft Innovation Pvt Ltd
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Welcome to PrySoft, a dynamic and advanced IT company at the front
                of technology solutions and services. We're excited to have you
                now, and we sincerely appreciate your attention in our offerings.
                Before you discover our services, we friendly request that you
                take a instant to carefully read and know the following Terms and
                Conditions. Your use of our website or any of our services
                suggests your acceptance and devotion to these terms. If you do
                not agree with any part of these terms, please exhortation from
                via our services.
              </p>
            </div>
          </div>
          <div className="space-y-10 text-gray-700 mt-16">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                1. Services Offered
              </h3>
              <p className="mb-2">
                PrySoft prides himself on a varied array of IT services that handle
                various features of your digital journey. Our core services
                involve, but are not restricted to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-3">
                <li>
                  <strong>Web and App Development:</strong> We are your one-stop
                  shop for making engaging, useful, and advanced web and mobile
                  applications personalized to your exclusive needs.
                </li>
                <li>
                  <strong>Technical and Academic Content Writing Services:</strong>{" "}
                  Our skilled team of writers brings high-quality technical and
                  academic content, serving you convey complex info effectively
                  and professionally.
                </li>
                <li>
                  <strong>Cybersecurity Solutions:</strong> We know the importance
                  of protecting your digital assets. Our cybersecurity experts are
                  devoted to providing top-notch security solutions and risk
                  assessment services.
                </li>
                <li>
                  <strong>Digital Transformation Services:</strong> Staying forward
                  in the digital age needs transformative strategies. Our digital
                  transformation services are intended to raise your business to
                  new heights, ensuring you stay competitive in a quickly
                  developing landscape.
                </li>
                <li>
                  <strong>Managed IT Services:</strong> We proposal complete IT
                  management, guaranteeing the flat operation and transformation
                  of your systems. Our mission is to remove interruptions and
                  improve your productivity.
                </li>
              </ul>
              <p>
                At PrySoft , we are dedicated to excellence in all our services,
                continually innovating to meet the developing needs of our clients
                efficiently.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                2. Client Engagement
              </h3>
              <p>
                Our clients and partners are at the heart of all we do. When you
                select to work with PrySoft , you are selecting a devoted team
                that is passionate about bringing services. We combine our
                specialized skills, information, and resources to help you
                understand your goals in info technology, digitalization, web and
                app development, and a wide variety of IT solutions. Your success
                is our achievement, and we are here to authorize you on your
                digital journey.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                3. Privacy and Data Security
              </h3>
              <p>
                We hold your privacy and data security in the uppermost regard. Our
                method to data protection is characterized by rigor, confirming
                the discretion and safety of your information. To research deeper
                into our data handling performs, we invite you to review our
                complete Privacy Policy.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="250">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                4. Payment and Billing
              </h3>
              <p>
                Payment terms and billing particulars for our services are
                connected on a per-project basis or in accordance with equally
                agreed terms. Any extra charges or fees related with your project
                will be disclosed to you in advance, allowing transparency and
                budgetary control.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                5. Intellectual Property
              </h3>
              <p>
                PrySoft retains all intellectual property rights related with the
                services and content we deliver. This contains software, designs,
                and written materials. We kind request that our clients do not
                reproduce, allocate, or use our intellectual property deprived of
                obtaining prior written consent.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="350">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                6. Termination of Services
              </h3>
              <p>
                At PrySoft , we standby the right to terminate services or refuse
                facility to persons or entities at our discretion. This action may
                be taken in reply to violations of these terms or for other
                reasons that we think essential to protect our operations,
                integrity, and values.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                7. Limitation of Liability
              </h3>
              <p>
                While we are devoted to delivering impeccable services, it is
                significant to note that PrySoft shall not be held accountable for
                any direct, indirect, special, or important damages. This
                includes, but is not restricted to, loss of profits, data, or
                business disruption, arising out of the use or inability to use
                our services. We inspire our clients to reflect risk management
                and contingency planning as a judicious measure in today's digital
                atmosphere.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="450">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                8. Changes to Terms and Conditions
              </h3>
              <p>
                PrySoft knows the dynamic nature of the IT industry and acknowledges
                the necessity for periodic reviews and informs. Then, we reserve
                the right to amend these Terms and Conditions as required. Any
                alterations will be punctually posted on our website, and it is
                your responsibility to periodically review these terms to stay
                knowledgeable about any revisions.
              </p>
            </div>

            <hr className="border-gray-300 my-8" />

            <div data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-2xl font-bold mb-3 border-l-4 border-blue-600 pl-3">
                9. Contact Information
              </h3>
              <p>
                Should you have any questions, comments, or concerns regarding these
                Terms and Conditions, we welcome your communication. You can reach
                us at the following email address:{" "}
                <a
                  href="mailto:prysoft.innovation@gmail.com"
                  className="text-blue-600 underline"
                >
                  support@PrySoft .in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
