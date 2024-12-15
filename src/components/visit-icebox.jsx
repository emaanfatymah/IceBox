import React from "react";

function VisitIcebox() {
  const locationData = [
    {
      id: 1,
      image: "/src/assets/images/location.jpg",
      title: "Atlanta, GA, USA",
      subtitle: "Icebox Flagship Showroom in Atlanta (Buckhead)",
      description:
        "Located at the Corner of Peachtree and Piedmont Road in Buckhead, on the Side of the Haverty's Shopping Plaza",
    },
    {
      id: 2,
      image: "/src/assets/images/location.jpg",
      title: "Miami, FL, USA",
      subtitle: "Icebox Boutique in Saks Fifth Avenue at Brickell City Center",
      description:
        "Located on the 3rd Floor, directly in front of the escalators.",
    },
    {
      id: 3,
      image: "/src/assets/images/location.jpg",
      title: "Atlanta, GA, USA",
      subtitle: "Icebox Boutique in Saks Fifth Avenue at Phipps Plaza",
      description:
        "Located on the 1st Floor, to the right of the Fifth Avenue.",
    },
  ];

  return (
    <div className="visit-icebox-container pb-0">
      <div className="text-center mb-4">
        <h2>VISIT ICEBOX</h2>
        <p className="h-text">
          Our flagship showroom is located in Atlanta, and Icebox boutiques are
          located in Saks Fifth Avenue in Miami Brickell and Atlanta.
        </p>
      </div>
      <div className="row justify-content-center">
        {locationData.map((location) => (
          <div className="col-12 col-md-6 col-lg-4" key={location.id}>
            <div className="card border-0 rounded-0 mb-4">
              <img
                src={location.image}
                className="card-img-top rounded-0"
                alt={location.title}
              />
              <div className="card-body px-0 text-start">
                <h5 className="card-title fw-bold fs-6 mb-4">
                  {location.title}
                </h5>
                <h6 className="card-subtitle fw-bold mb-4">
                  {location.subtitle}
                </h6>
                <p className="card-text">{location.description}</p>
                <a href="#" className="text-dark fw-bold">
                  Book an Appointment
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VisitIcebox;
