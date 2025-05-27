import React from "react";
import { Link } from "react-router-dom";
import PageTop from "../Layout/PageTop";
const PrivacyPolicy = () => {
 
  return (
    <>
      <PageTop
        title="Privacy Policies"
        currentPage="PrivacyPolicy"
      />
      
      <div className="min-h-screen bg-white p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="/privacy.jpg"
              alt="Privacy Illustration"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 text-black  mb-4">
            <p className="text-gray-600">Privacy Policy</p>
            <h3 className="text-3xl font-bold text-black  mb-4">
              PrySoft Innovation Pvt. Ltd.
            </h3>

            <p className="text-gray-600">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in PrySoft. This policy is not
              applicable to any information collected offline or via channels
              other than this website. Our Privacy Policy was created with the
              help of the Free Privacy Policy Generator.
            </p>
          </div>
        </div>
        {/* Add more content below as needed... */}

        <div className="min-h-screen bg-white md:p-6 space-y-8">
          <div className=" w-[95%] flex justify-center  flex-col">
            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              1. Consent
            </h3>
            <p className="text-gray-600 text-lg ">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              2. Information we collect
            </h3>
            <p className="text-gray-600 text-lg ">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information..
            </p>
            <p className="text-gray-600 text-lg ">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className="text-gray-600 text-lg ">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              3. How we use your information
            </h3>
            <p className="text-gray-600 text-lg ">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-1">
              <li className="ml-8">
                Provide, operate, and maintain our website
              </li>
              <li className="ml-6">
                Improve, personalize, and expand our website
              </li>
              <li className="ml-8">
                Understand and analyze how you use our website
              </li>
              <li className="ml-8">
                Develop new products, services, features, and functionality
              </li>
              <li className="ml-8">
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li className="ml-8">Send you emails</li>
              <li className="ml-8">Find and prevent fraud</li>
            </ul>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              4. Log Files
            </h3>
            <p className="text-gray-600 text-lg ">
              PrySoft follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
            </p>
            <p className="text-gray-600 text-lg ">
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              5. Cookies and Web Beacons
            </h3>
            <p className="text-gray-600 text-lg ">
              Like any other website, PrySoft uses 'cookies'. These cookies are
              used to store information including visitors' preferences, and the
              pages on the website that the visitor accessed or visited.
            </p>
            <p className="text-gray-600 text-lg ">
              The information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information..
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              6. Google DoubleClick DART Cookie
            </h3>
            <p className="text-gray-600 text-lg ">
              Google is one of a third-party vendor on our site. It also uses
              cookies, known as DART cookies, to serve ads to our site visitors
              based upon their visit to www.website.com and other sites on the
              internet. However, visitors may choose to decline the use of DART
              cookies by visiting the Google ad and content network Privacy
              Policy at the following URL –
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                className="text-blue-600 underline"
              >
                {" "}
                https://policies.google.com/technologies/ads
              </a>
            </p>
            <p className="text-gray-600 text-lg ">
              The information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information..
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              7. Our Advertising Partners
            </h3>
            <p className="text-gray-600 text-lg ">
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below.
            </p>
            <p className="text-gray-600 text-lg ">
              <strong>GOOGLE</strong>
              <br />
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                className="text-blue-600 underline"
              >
                https://policies.google.com/technologies/ads
              </a>
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              8. Advertising Partners Privacy Policies
            </h3>
            <p className="text-gray-600 text-lg ">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of PrySoft..
            </p>
            <p className="text-gray-600 text-lg ">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on PrySoft, which
              are sent directly to users' browser. They automatically receive
              your IP address when this occurs. These technologies are used to
              measure the effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on websites that
              you visit.
            </p>
            <p className="text-gray-600 text-lg ">
              Note: that PrySoft has no access to or control over these cookies
              that are used by third-party advertisers.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              9. Third Party Privacy Policies
            </h3>
            <p className="text-gray-600 text-lg ">
              PrySoft's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options..
            </p>
            <p className="text-gray-600 text-lg ">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              10. CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h3>
            <p className="text-gray-600 text-lg ">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-1">
              <li className="ml-8">
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
              </li>
              <li className="ml-8">
                Request that a business delete any personal data about the
                consumer that a business has collected.
              </li>
              <li className="ml-8">
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
              </li>
            </ul>
            <p className="text-gray-600 text-lg ">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              11. GDPR Data Protection Rights
            </h3>
            <p className="text-gray-600 text-lg ">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-1">
              <li className="ml-8">
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
              </li>
              <li className="ml-8">
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
              </li>
              <li className="ml-8">
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
              </li>
              <li className="ml-8">
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions.
              </li>
              <li className="ml-8">
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions.
              </li>
              <li className="ml-8">
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </li>
            </ul>
            <p className="text-gray-600 text-lg ">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              12. Children's Information
            </h3>
            <p className="text-gray-600 text-lg ">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p className="text-gray-600 text-lg ">
              PrySoft does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </p>

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              13. Refund Policy
            </h3>
            <p className="text-gray-600 text-lg ">
              These policies are designed to ensure our customer satisfaction
              and provide a safety net in case the delivered work does not meet
              the client's requirements.
            </p>
            {/* You may optionally break Refund and Cancellation policies into sub-sections if needed */}

            <hr className="border-gray-300 my-8" />

            <h3 className="text-2xl font-bold mb-4 border-l-4 border-blue-600 pl-3 ">
              14. Cancellation Policy
            </h3>
            <p className="text-gray-600 text-lg ">
              Cancellation before Work Commences: If you decide to cancel your
              order before the expert has started working on it, you may be
              eligible for a full or partial refund, depending on the company's
              policies. However, some providers may charge a cancellation fee to
              cover administrative costs.
            </p>
            <p className="text-gray-600 text-lg ">
              Cancellation after Work Commences: Once the expert has started
              working on your order, cancellation may be subject to certain
              conditions. In such cases, you may be eligible for a partial
              refund based on the progress made by the writer up to that point.
              However, the exact refund amount and policy will vary depending on
              the company.
            </p>
            <p className="text-gray-600 text-lg ">
              Late Cancellations: If you cancel your order when it is nearing or
              past the deadline, the service provider may not offer a refund or
              may provide only a partial refund. This is because the writer has
              already invested time and effort into completing the work.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
