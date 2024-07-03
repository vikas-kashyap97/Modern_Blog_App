import React from 'react';

const AboutUs = () => {
  const sections = [
    {
      title: 'Editorial',
      description: 'Meet the people delivering top-notch reporting on the business of the tech industry.',
      members: [
        { name: 'Connie Loizos', title: 'Editor in Chief & General Manager' },
        { name: 'Matt Rosoff', title: 'Global Managing Editor' },
        { name: 'Ingrid Lunden', title: 'Managing Editor, Global' },
        { name: 'Federic Lardinois', title: 'Editor' },
        { name: 'Kristen Korosec', title: 'Transportation Editor' },
        { name: 'Sarah Perez', title: 'Consumer News Editor' },
        { name: 'Zack Whittaker', title: 'Security Editor' },
        { name: 'Bryan Heater', title: 'Hardware Editor' },
        { name: 'Henry Pickavet', title: 'Director of Editorial Operations' },
        { name: 'Aisha Malik', title: 'Consumer News Reporter' },
        { name: 'Amanda Silversake', title: 'Reporter' },
      ],
    },
    {
      title: 'Events',
      members: [
        { name: 'Emma Comeau', title: 'U.S. Director of Events' },
        { name: 'Kevin Manniko', title: 'Senior Event Manager | Production Specialist' },
        { name: 'Robert Frawley', title: 'Head of Event Marketing' },
      ],
    },
    {
      title: 'Video',
      members: [
        { name: 'Yashad Kulkarni', title: 'Executive Producer Of Video' },
        { name: 'Samantha Adams', title: 'Associate Producer' },
        { name: 'Maxine White', title: 'Video Editor' },
        { name: 'Charlie Baker', title: 'Production Assistant' },
      ],
    },
    {
      title: 'Administration',
      members: [
        { name: 'Richard Smith', title: 'Director of Event Programming' },
        { name: 'Jean Bradley', title: 'Operation Manager' },
        { name: 'Emily Clarke', title: 'Administrative Coordinator' },
        { name: 'Michael Turner', title: 'Office Administrator' },
      ],
    },
    {
      title: 'Audience Development',
      members: [
        { name: 'Morgan Little', title: 'Director of Audience Development' },
        { name: 'Natalie Christman', title: 'Sr. Brand Marketing Specialist' },
        { name: 'Cody Corrall', title: 'Audience Development Producer' },
      ],
    },
    {
      title: 'Sales',
      members: [
        { name: 'Jessica Brunner', title: 'Director of Sales Operations and Strategy' },
        { name: 'Damian Benstead', title: 'Account Executive' },
        { name: 'Stacy Cohen', title: 'Account Executive' },
        { name: 'Lauren Jaeger', title: 'Senior Account Manager' },
      ],
    },
    {
      title: 'Product',
      members: [
        { name: 'Ted Malong', title: 'Product Management' },
        { name: 'Jessi Prinner', title: 'Senior Software Engineer' },
        { name: 'Gray Smirny', title: 'Senior Software Engineer' },
      ],
    },
  ];

  return (
    <div className='container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-8'>
      <div className='text-center mb-4 sm:mb-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>About Us</h1>
      </div>
      {sections.map((section, index) => (
        <div key={index} className='mb-4 sm:mb-8'>
          <hr className='mb-4 sm:mb-8' />
          {section.description && (
            <p className='text-base sm:text-lg md:text-xl'>{section.description}</p>
          )}
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mt-2'>{section.title}</h2>
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-4'>
            {section.members.map((member, idx) => (
              <li
                key={idx}
                className='group hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out p-2 sm:p-3 md:p-4 rounded-lg'
              >
                <p className='text-lg sm:text-xl md:text-2xl font-semibold text-black group-hover:text-orange-500 transition duration-300 ease-in-out'>
                  {member.name}
                </p>
                <p className='text-base sm:text-lg md:text-xl text-black group-hover:text-orange-500 transition duration-300 ease-in-out'>
                  {member.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
