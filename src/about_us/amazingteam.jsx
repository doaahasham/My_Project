import React from 'react';

// Import your profile photos here
import member1 from '../media/team-member-01 (1).jpg';
import member2 from '../media/team-member-02 (1).jpg';
import member3 from '../media/team-member-03 (1).jpg';

export default function Amazingteam() {
  const teamMembers = [
    {
      id: 1,
      name: "Sara Adam",
      role: "Store Manager",
      image: member1
    },
    {
      id: 2,
      name: "James Benjamin",
      role: "It Manager",
      image: member2
    },
    {
      id: 3,
      name: "Mickel William",
      role: "Product Manager",
      image: member3
    }
  ];

  return (
    <section id="team" className="py-5 bg-white w-100">
      <div className="container">
        
        
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark display-5 mb-3">Our Amazing Team</h2>
          <p className="text-secondary fst-italic fs-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ut!
          </p>
        </div>

        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <div className="col-12 col-md-6 col-lg-4 text-center" key={member.id}>
              
              
              <div className=" px-4 overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-100 h-100 img-fluid" 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              
              <div>
                <h3 className="fw-bold text-dark m-0 fs-2">{member.name}</h3>
                <p className="text-muted fw-semibold mt-1 fs-6">{member.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
