import React from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cameras from "./components/Cameras";
import EurovisionCam from "./components/Cameras/Eurovision";
import HikvisionCam from "./components/Cameras/Hikvision";
import Hst from "./components/Cameras/Hst";
import Footer from "./components/Footer";
import Finger from "./components/Finger";
import Fire from "./components/Fire";
import Sound from "./components/Sound";
import Weapon from "./components/Weapon";
import ConvoyCam from "./components/Cameras/Convoycam";
import Convoyip from "./components/Cameras/Convoyip";
import Convoyhd from "./components/Cameras/Convoyhd";
import Hstip from "./components/Cameras/Hstip";
import Hsthd from "./components/Cameras/Hsthd";
import Music from "./creativeminds.mp3";
import ConvoyFinger from "./components/Fingerprint/Convoyfinger";
import Zkteco from "./components/Fingerprint/Zkteco";
function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cameras" element={<Cameras />}></Route>
        <Route path="/cameras/convoy" element={<ConvoyCam />}></Route>
        <Route path="/cameras/convoy/ip" element={<Convoyip />}></Route>
        <Route path="/cameras/convoy/hd" element={<Convoyhd />}></Route>
        <Route path="/cameras/eurovision" element={<EurovisionCam />}></Route>
        <Route path="/cameras/hikvision" element={<HikvisionCam />}></Route>
        <Route path="/cameras/hst" element={<Hst />}></Route>
        <Route path="/cameras/hst/ip" element={<Hstip />}></Route>
        <Route path="/cameras/hst/hd" element={<Hsthd />}></Route>
        <Route path="/fingerprints" element={<Finger />}></Route>
        <Route path="/fingerprints/convoy" element={<ConvoyFinger />}></Route>
        <Route path="/fingerprints/zk" element={<Zkteco />}></Route>
        <Route path="/firesystems" element={<Fire />}></Route>
        <Route path="/soundsystems" element={<Sound />}></Route>
        <Route path="/weapondetectors" element={<Weapon />}></Route>
      </Routes>
      <audio controls loop autoPlay className="invisible">
        <source src={Music} type="audio/mp3" />
        <source src={Music} type="audio/ogg" />
      </audio>
      <Footer />
    </React.Fragment>
  );
}

export default App;
