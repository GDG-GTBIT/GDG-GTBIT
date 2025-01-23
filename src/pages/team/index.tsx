import TeamBanner from '@/components/team/banner';
import TeamCard from '@/components/team/teamCard';
import { TEAM } from '@/constants/team'; 
import React from 'react';

function Index() {
  const lead = TEAM.find(member => member.position.toLowerCase() === 'lead');
  const coreMembers = TEAM.filter(member => member.position.toLowerCase() !== 'lead');

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white">
      <TeamBanner />

      <div className="flex flex-col items-center my-10 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-gray-400 text-center max-w-2xl mb-10">
          Our team consists of passionate individuals who work together to drive innovation and success. 
          Meet the minds behind our project and connect with them via LinkedIn and GitHub..
        </p>
      </div>

      {lead && (
        <div className="flex flex-col items-center mb-10 md:mb-20">
          <h3 className="text-2xl font-bold mb-6">Team Lead</h3>
          <div className="">
            <TeamCard 
              name={lead.name}
              position={lead.position}
              linkedIn={lead.linkedIn}
              github={lead.github}
              colorIndex={0} email={lead.email}            />
          </div>
        </div>
      )}

      <div className="flex flex-col items-center mb-10 md:mb-20">
      <h3 className="text-2xl font-bold mb-6">Our Core</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          { 
            coreMembers.map((member, index) => (
              <TeamCard 
                key={index}
                name={member.name} 
                position={member.position} 
                linkedIn={member.linkedIn} 
                github={member.github} 
                email={member.email}  
                colorIndex={index+1}

              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Index;
