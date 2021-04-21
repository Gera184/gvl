import React from "react";
import "./OurStory.css";

export default function OurStory() {
  return (
    <div className="container " style={{ fontFamily: "Poppins-Bold" }}>
      <div
        className="row text-center align-self-center"
        style={{ padding: "2%" }}
      >
        <div className="col ">
          <h1 className="our-story-header">OUR STORY</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p>
            {" "}
            <strong>Grand Vision Logistics</strong> is a young and dynamic,
            professional and purposeful company that provides a full range of
            professional and comprehensive services to importers and exporters
            according to the One-Stop-Shop model. The company places emphasis on
            a thorough study of the exact customer needs and its typical
            requirements pertaining to each project, until finding the most
            appropriate solution for him, we "tailor" for each customer the
            "suit" for him and know how to provide a direct and professional
            answer in each industry. Grand Vision Logistics works in
            collaboration with TFC (TOAM), a company that specializes in
            international forwarding services and providing global logistics
            solutions.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Grand Vision Logistics provides a variety of services related to
            export and air and sea imports such as: customs brokerage,
            warehousing, distribution and logistics, insurance, projects. As an
            international forwarder, our company operates in various fields: the
            automotive industry, the defense industries and trust bodies, the
            field of retail, fashion, heavy industry, energy, high-tech,
            medicine, construction, food, alcohol, national projects and more.
            Thanks to its organizational structure, professional experience and
            business partners around the world, Grand Vision Logistics stands
            out in the field of international shipping in its ability to provide
            a quality and focused response. From pre-process consulting,
            creating unique solutions, to carrying out complex and large-scale
            projects that include, among other things, the transfer of complex
            cargo and other additional challenges.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            Grand Vision Logistics is one of the representatives of the global
            forwarding network KERRY LOGISTICS. The collaboration with KERRY
            LOGISTICS enables it to provide its customers with a comprehensive
            professional service backed by a team of international agents and a
            worldwide network of contacts.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <img
            src="https://wallpaperaccess.com/full/1692764.jpg"
            alt=""
            style={{ width: "40%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
