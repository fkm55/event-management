// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <main className="pt-16 mt-16 pb-8 px-4"> {/* Add padding top to account for fixed header */}
      <section className="max-w-2xl mx-auto">
        <h4 className="text-xl font-semibold mb-2">Events</h4>
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-700 leading-relaxed">
          An Event Management System (EMS) is a software solution that streamlines the planning,
          organization, and execution of events, ranging from small meetings to large conferences.
          It automates tasks like registration, ticketing, and communication, significantly improving
          efficiency and reducing errors. By providing a centralized platform, EMS allows organizers
          to manage all event-related activities in one place, ensuring a smooth and coordinated
          process. It also integrates with other tools, such as CRM systems and social media 
          platforms, enhancing communication and engagement. One of the key advantages of an EMS
          is its ability to collect and analyze data, offering insights into attendee behavior 
          and preferences, which can be used to improve future events. The system is scalable and 
          customizable, allowing it to be tailored to the specific needs of any event, whether it's
          a corporate seminar or a large festival. Additionally, EMS contributes to cost savings by
          reducing the need for manual labor and third-party services, while also minimizing environmental
          impact by decreasing the reliance on printed materials. Overall, an EMS enhances the experience
          for both organizers and attendees, making event management more efficient, effective, and sustainable.
        </p>
      </section>
    </main>
  );
};

export default About;
