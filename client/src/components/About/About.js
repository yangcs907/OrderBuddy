import React, { Component } from 'react';
import './About.css';

class App extends Component {
  render() {
    return (

      <div classNameName="row">
        <div>
          <h4 class="aboutHeader">Meet the Staff</h4>
        </div>
        <div className="column">
          <div className="cardAbout">
            <img src="Headshots/DavidL.PNG" alt="David" class="imgDavid" />
            <div className="container">
              <h2 id="nameTag">David Lester</h2>
              <h3 className="title">Executive Chef</h3>
              <p id="bio">Executive chef. At the young age of 26, David has already established a strong name for himself
          in the restaurant industry. He is a professional cook who is proficient in all aspects of food preparation.</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cardAbout">
            <img src="Headshots/amelia.jpg" alt="Amelia" class="imgAbout" />
            <div className="container">
              <h2 id="nameTag">Amelia Outland</h2>
              <h3 className="title">Sous Chef</h3>
              <p id="bio">A Philadelphia native, Amelia has fond memories of learning about delicious home cooking with her family in
                Philadelphia, Georgia and Turks and Caicos. She began working in a string of New York City restaurants: The Tasty Grub where she was promoted to sous chef after just four months on the job. </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cardAbout">
            <img src="Headshots/image2.jpeg" alt="Chris" class="imgAbout" />
            <div className="container">
              <h2 id="nameTag">Chris Yang</h2>
              <h3 className="title">Pastry Chef</h3>
              <p id="bio"> Chris is the greatest pastry chef on planet earth. He has won numerous awards and has been recognized for his greatness at producing the best desserts.
                Apart from working here, he is currently the top Iron Chef on Iron Chef America, specializing on French dessert.</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cardAbout">
            <img src="Headshots/jermaine.jpg" alt="Jermaine" class="imgAbout" />
            <div className="container">
              <h2 id="nameTag">Jermaine Foster</h2>
              <h3 className="title">Master Dishwasher</h3>
              <p id="bio">Jermaine Foster, 37. Master Dishwasher a.k.a. The King of Cutlery a.k.a Silver Palms. This guy has the quickest hands in the Southeast,
                shuffling plates and pots like playing cards at lightning fast speed as though the were playing cards.
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cardAbout">
            <img src="Headshots/image1.jpeg" alt="Katherine" class="imgAbout" />
            <div className="container">
              <h2 id="nameTag">Katherine Rosenkranz</h2>
              <h3 className="title">Custodian</h3>
              <p id="bio">Katherine is an okay custodian. Not bad, not great either, kind of neutral, lukewarm, middle of the pack.</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cardAbout">
            <img src="Headshots/thomas.jpg" alt="Amelia" class="imgAbout" />
            <div className="container">
              <h2 id="nameTag">Thomas Gentle</h2>
              <h3 className="title">Host</h3>
              <p id="bio"> Thomas Gentle is a recent graduate of Georgia Tech with a degree in Business Administration IT Management. Thomas
                is pursuing an entrepreneur career path and is currently leading his second startup. He has a desire to learn how to code
                so that he can better manage and lead a team of developers.</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="cardAbout">
            <img src="Headshots/marsalis.jpg" alt="Marsalis" class="imgAbout" />
            <div className="container">
              <h2 id="nameTag">Marsalis Sanders</h2>
              <h3 className="title">Manager</h3>
              <p id="bio">Deciding to try his hand at something new, Marsalis applied to be the manager of his own
                restaurant. While everything is still relatively new, leading a team and making people happy is a life goal he never knew he had.</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
