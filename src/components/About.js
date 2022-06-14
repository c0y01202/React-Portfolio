// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Digital Analyst and Web Developer</p>
      <hr />
      <img
        className="my-pic"
        src={process.env.PUBLIC_URL + "img/IMG_9495.jpg"}
        alt="Claudia Chittim"
      />
      <p className="content is-italic mt-4">
        I am Claudia Chittim. I am currently taking courses in web development
        at UTSA in San Antonio, Texas. I am learning the following codes: HTML,
        CSS and Javascript. Since 2005, I have worked in Digital Analytics or
        Web Analysis. From 2007 to 2012, I worked for Fortune 500 and Fortune 10
        companies in Digital Analysis for marketing executives. I am certified
        in Omniture Site Catalyst, Omniture Discover, Hit Wise and Googla
        Analytics. I am also well-versed in coding websites with HTML and CSS. I
        have an MBA and a Master of Science in Technology Commercialization.
      </p>
      <p className="content">
        I love working for marketing and digital analytics. I love to monitor
        traffic on websites and report how users are interacting with new
        applications and marketing campaigns.
      </p>
    </div>
  );
}

export default About;
