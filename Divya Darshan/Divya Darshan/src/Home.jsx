import './Home.css';
import logo from './assets/Website home.png';
import logo1 from './assets/border.png';
import img from './assets/upperlogo.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import { useState, useEffect } from 'react';
import FAQ from './FAQ';
import Footer from './Footer';
import { useNavigate } from "react-router-dom";
import State from "./State"

function Home() {
    const englishText =
    "Start Your Spiritual Journey with Divya Darshan\nExplore Sacred Temples Across India .";

    const sanskritText =
    "दिव्यदर्शनेन सह आध्यात्मिकयात्रां आरभध्वम्\nभारतस्य पवित्रमन्दिराणि अन्वेषयन्तु |";

    const [displayText, setDisplayText] = useState("");
    const [isEnglish, setIsEnglish] = useState(true);

    useEffect(() => {
        let timeout;

        const typeText = (text, index = 0) => {
        if (index <= text.length) {
            setDisplayText(text.slice(0, index));
            timeout = setTimeout(() => typeText(text, index + 1), 50);
        } else {
            timeout = setTimeout(() => deleteText(text.length), 4000);
        }
    };

    const deleteText = (index) => {
        if (index >= 0) {
            setDisplayText((prev) => prev.slice(0, index));
            timeout = setTimeout(() => deleteText(index - 1), 35);
        } else {
            setIsEnglish((prev) => !prev);
        }
    };

    const currentText = isEnglish ? englishText : sanskritText;
    typeText(currentText);

    return () => clearTimeout(timeout);
    }, [isEnglish]);

return (
    <div>
    <div>
        <img src={img} alt="img" className="img" />
    </div>
    <div className="containt">
    <div className="header">
        <img src={logo} alt="Divya Darshan" className="logo" />
        <h1 className="tagline">
            {displayText.split("\n").map((line, i) => (
            <span key={i}>
                {line}
                <br />
            </span>
        ))}
        </h1>
    </div>

    <div className="container">
    <div className="right">
        <p className="title-box">Divine temples of India by Divya Darshan</p>
            <img  src={logo1} alt="logo" className="logo1" />
        <p className="text-box">
            Divya Darshan is your trusted website in exploring the sacred temples
            and rich spiritual heritage of India. Our platform connects devotees,
            travelers, and seekers with authentic information about temples,
            rituals, festivals, and pilgrimage routes.  <span className="highlight"> We aim to simplify
            your spiritual journey by providing clear guidance, cultural insights,
            and reliable details, helping you experience the divine essence of
            every destination with ease and devotion <span className="cursor">_</span></span>
        </p>
        <button className="button">+ Add Temple</button>
    </div>
    </div>

    <div>
        <img src={img1} alt="img1" className="img1" />
        <h3 className="para1">Explore Temples Across India and the World</h3>
        <img src={img2} alt="img2" className="img2" />
        <State/>
        <FAQ/>
        <Footer/>
    </div>
    </div>
</div>
);
}

export default Home;