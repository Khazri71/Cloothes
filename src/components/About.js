import React from "react";

const About = () => {
  return (
    <>
      <div className="about text-center">
        <div className="container">
          <h2 className="mb-4">About Us</h2>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="image mb-4 mx-auto">
                <img src="images/clothes1.jpg" alt="about1" loading="lazy" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="text mt-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur dicta, laudantium, praesentium obcaecati aut
                  aliquam dolore repellat ut quibusdam amet officiis. Deserunt
                  aliquam quidem hic fugiat laudantium nam quibusdam. Assumenda.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="image mb-4 mx-auto">
                <img src="images/clothes2.jpg" alt="about2" loading="lazy" />
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="text mt-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur dicta, laudantium, praesentium obcaecati aut
                  aliquam dolore repellat ut quibusdam amet officiis. Deserunt
                  aliquam quidem hic fugiat laudantium nam quibusdam. Assumenda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
