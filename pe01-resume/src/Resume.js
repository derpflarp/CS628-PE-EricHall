import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume">
      <header className="header">
        <h1>Eric Hall</h1>
        <p>Bremerton, WA | (555) 555-5555 | halleric@cityu.edu</p>
      </header>

      <section className="section">
        <h2>Education</h2>

        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle WA | Ongoing</p>
          <p>GPA: 3.75/4.0</p>

          <h3>Bachelor of Science in Computer Science</h3>
          <p>City University of Seattle, Seattle WA | June 2025</p>
          <p>GPA: 3.6/4.0</p>
        </div>
      </section>

      <section className="section skills">
        <h2>Skills</h2>

        <ul>
          <li>Programming Languages: SQL, Python, JavaScript, C++, R, HTML/CSS</li>
          <li>Frameworks and Libraries: React, Flask, Bootstrap, TensorFlow, NumPy Node.js</li>
          <li>Database Systems: Microsoft Dataverse, MySQL</li>
          <li>Cloud / DevOps: Git, Azure, Power Automate</li>
          <li>Operating Systems: Windows, Linux</li>
          <li>Version Control: Git</li>
        </ul>
      </section>

      <section className="section experience">
        <h2>Work Experience</h2>

        <div className="experience">
  <h3>Senior Programmer / Data Analyst</h3>
  <p>City University of Seattle | July 2023 - Present</p>

  <ul>
    <li>Develop and maintain Microsoft Dynamics 365 CRM solutions using Dataverse, Python, Azure, Power Automate, JavaScript, and SQL Server</li>
    <li>Design automated workflows to synchronize student information and eliminate manual business processes</li>
    <li>Build data integration solutions, reports, and dashboards to support enrollment and student success initiatives</li>
  </ul>

  <h3>Precision Measurement Technician (U.S. Air Force)</h3>
  <p>United States Air Force | 2006 - 2012</p>

  <ul>
    <li>Developed automated calibration software for Test, Measurement, and Diagnostic Equipment (TMDE)</li>
    <li>Created software tools to improve equipment testing, troubleshooting, and certification processes</li>
    <li>Supported engineers by automating repetitive technical workflows</li>
  </ul>
</div>
</section>

<section className="section projects">
  <h2>Projects</h2>

  <div className="projects">

    <h3>Student CRM Automation</h3>

    <p>
      Built Power Automate workflows and SQL integrations to synchronize student records, remove duplicate data, and automate CRM processes within Microsoft Dataverse
    </p>

    <p>
      Technologies: Power Automate, Python, SQL Server, Dataverse, JavaScript
    </p>

    <h3>AI Text Classification</h3>

    <p>
      Designed and evaluated machine learning and deep learning models to classify text documents using TF-IDF, Logistic Regression, and BiLSTM neural networks
    </p>

    <p>
      Technologies: Python, TensorFlow, Keras, pandas
    </p>
        </div>
    </section>
    </div>
  );
};

export default Resume;