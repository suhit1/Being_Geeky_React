import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";

function Being_Geeky() {
  return (
    <>
      <nav className="topnav">
        <div className="anchor anchor1">
          <a href="#beinggeeky">Being Geeky</a>
        </div>
        <div className="anchor anchor2">
          <a href="#tutorials">Tutorials</a>
        </div>
        <div className="anchor anchor3">
          <a href="#videos">Videos</a>
        </div>
        <div className="anchor anchor4">
          <a href="#coupons">Coupons</a>
        </div>
      </nav>
      <div id="beinggeeky" className="being_div">
        <h1 className="beinggeeky">Being Geeky</h1>
        <h2>Your own video and theortical study place.</h2>
        <p className="para">
          Being Geeky is one of the best platform for the online learning. With
          the best study material.Dummy text is text that is used in the
          publishing industry or by web designers to occupy the space which will
          later be filled with 'real' content. This is required when, for
          example, the final text is not yet available. Dummy text is also known
          as 'fill text'. It is said that song composers of the past used dummy
          texts as lyrics when writing melodies in order to have a 'ready-made'
          text to sing with the melody. Dummy texts have been in use by
          typesetters since the 16th century.
        </p>
      </div>
      <div id="tutorials" className="documentation">
        <h1 className="documentaion_heading">&#9647; Documentation</h1>
        <h2>All genuine Documentation at one place</h2>
        <p className="para">
          Being Geeky helps the viewer to find all the required documentation at
          one place so that they need not waste time to find offical
          documentation. The most well-known dummy text is the 'Lorem Ipsum',
          which is said to have originated in the 16th century. Lorem Ipsum is
          composed in a pseudo-Latin language which more or less corresponds to
          'proper' Latin. It contains a series of real Latin words. This ancient
          dummy text is also incomprehensible, but it imitates the rhythm of
          most European languages in Latin script. The advantage of its Latin
          origin and the relative meaninglessness of Lorum Ipsum is that the
          text does not attract attention to itself or distract the viewer's
          attention from the layout.
        </p>
        <button className="btn">Start your own trial</button>
        <p>You can download Being Geeky from app store or playstore.</p>
        <img
          className="img1"
          src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/ipad-app-mockup-03.png"
        />
      </div>
      <div id="videos" className="video_lectures">
        <h1 className="lectures_heading">
          The video lecture you should not miss
        </h1>
        <p className="para">
          With one of the best content available online.And one of the best
          instructors it makes Being Geeky one of the best available learing
          platform available.he spread of computers and layout programmes thus
          made dummy text better known. While in earlier times several lines of
          the Lorem Ipsum text were repeated in the creation of dummy texts,
          today the full text of Cicero's 'De finibus' serves as the basis for
          many dummy text or Lorem Ipsum generators. Based on 'De finibus',
          these generators automatically create longer sections of the Lorem
          Ipsum text or various other filler texts.
        </p>
        <button className="btn">Read More</button>
        <img
          className="img2"
          src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/lecture.jpg"
        />
      </div>
      <div className="lectures">
        <h1 className="lectures_heading">
          Lectures available anywhere anytime.
        </h1>
        <p className="para">
          You can watch the lecture anytime from anywhere and ask doubts.The
          phrasal sequence of the Lorem Ipsum text is now so widespread and
          commonplace that many DTP programmes can generate dummy text using the
          starting sequence "Lorem ipsum". Fortunately, the phrase 'Lorem Ipsum'
          is now recognized by electronic pre-press systems and, when found, an
          alarm can be raised. This avoids a publication going to print with
          overlooked dummy text.
        </p>
      </div>
      <div id="coupons" className="coupons">
        <div className="img_div">
          <img
            className="img3"
            src="https://beinggeeky-hnip75cdkgvvk6vt.web.codequotient.com/public/coupon.jpg"
          />
        </div>
        <div className="coupons_container">
          <h3>Coupons</h3>
          <p>
            You can apply different coupons to get extra discount on selected
            courses.Certain internet providers exploit the fact that fill text
            cannot be recognized by automatic search engines - meaningful
            information cannot be distinguished from meaningless:
            Target-generated dummy text mixed with a certain combination of
            search terms can lead to an increased frequency of visits by search
            machine users. As a consequence, advertising revenues, which rely on
            website 'hits', are increased.
          </p>
          <p>Already have Coupon?</p>
          <p>_______________________________________________</p>
          <p>Redeem</p>
        </div>
      </div>
      <footer className="footer">
        <div className="address">
          <h3>Address</h3>
          <p className="black_color_line">____________________</p>
          <p>zzz workspace</p>
          <p>street 43 ,buildibg 4 A</p>
          <p>Industrial area</p>
          <p>Aqwerty</p>
          <p>Mumbai</p>
        </div>
        <div className="clients">
          <h3>Clients</h3>
          <p className="black_color_line">____________________</p>
          <p>XYZ org</p>
          <p>wwqw org</p>
          <p>uio pvt</p>
          <p>jkjk org</p>
          <p>Zaq pvt</p>
        </div>
        <div className="stack">
          <h3>Stack</h3>
          <p className="black_color_line">____________________</p>
          <p>React</p>
          <p>Angular</p>
          <p>Nodejs</p>
          <p>Django</p>
        </div>
        <div className="aboutbeinggeeky">
          <h3>About </h3>
          <p className="black_color_line">____________________</p>
          <p>About CEO</p>
          <p>CONTACT US</p>
          <p>OUR TEAM</p>
          <p>MANAGER</p>
        </div>
      </footer>
    </>
  );
}

ReactDOM.render(<Being_Geeky />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
