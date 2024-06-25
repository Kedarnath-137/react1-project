import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
      <h2>Our Campuses</h2>
      <hr></hr>
      <h2>UG Program</h2>
      <div className="ug-program">
        <div>
          <p>
            Artifical Intelligence<br></br> and Data Science(AI & DS)
          </p>
          <br />
          <p>Biomedical engineering</p>
          <br />
          <p>Chemical Engineering</p>
          <br />
        </div>
        <div>
          <p>Civil Engineering (Civil)</p><br/>
          <p>
            Computer Science and Engineering<br></br>(CSE)</p>
          <br />
          <p>
            CSE- Artifical Intelligence <br></br>and Machine Learning (CSE-AI&ML)</p>
          <br />
        </div>
        <div>
          <p>CSE-Data Science (CSE-DS)</p><br/>
          <p>
            Computer Science <br></br>and Business Systems(CSBS)
          </p><br/>
          <p>
            Electrical and Electronics <br></br>Engineering (EEE)
          </p>
        </div>
        <div>
          <p>
            Electronics and communication <br></br> Engineering (ECE)
          </p><br/>
          <p>Information Technology (IT)</p>
        </div>
        <div>
          <p>
            Pharmaceutical Engineering <br></br> (PHE)
          </p><br/>
          <p>Mechanical Engineering(Mech)</p>
        </div>
      </div>
      <hr></hr>
      <h2>PG Program</h2>
      <div className="pg-program">
        <div>
          <p>M.Tech-chemical Engineering</p><br/>
          <p>
            M.tech-Computer Science <br></br> and Engineering
          </p>
        </div>
        <div>
          <p>M.Tech- Data Science</p><br/>
          <p>M.Tech- Electrical Power Systems</p>
        </div>
        <div>
          <p>
            M.Tech- Electric Vehicle <br></br> Technology
          </p><br/>
          <p>M.Tech- Embedded Systems</p>
        </div>
        <div>
          <p>M.Tech- Engineering Design</p><br/>
          <p>M.Tech- VLSI System Design</p>
        </div>
        <div>
          <p>Management Studies(MBA)</p>
        </div>
      </div>
      <hr></hr>
      <div className="bottom">
        <p>&copy; 2024 Edusity. All rights reserved.</p>
        <ul>
          <li>Terms of Services</li>
          <li>Terms of Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
