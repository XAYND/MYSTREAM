import { useState } from "react";
import "./index.css";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  const channels = [
    { name: "Canal+Sport-360", url: "https://direct-streamfr.live/player.php?id=12", image: "/MYSTREAM/assets/Canal-plus-sport-360.jpg" },
    { name: "Canal+", url: "https://direct-streamfr.live/player.php?id=40", image: "assets/canalplus-logo.jpg" },
    { name: "Canal+Formula", url: "https://daddylive.mp/stream/stream-273.php", image: "/assets/Canal-Formula-1.jpg" },
    { name: "Canal+Foot", url: "https://direct-streamfr.live/player.php?id=6", image: "/assets/canal-foot.jpg" },
    { name: "BeinSport 1", url: "https://direct-streamfr.live/player.php?id=8", image: "/assets/bein-sports1.jpg" },
    { name: "RMC SPORT 1", url: "https://direct-streamfr.live/player.php?id=1", image: "/assets/rmc-sports1.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page de bienvenue avec vidéo en fond */}
      {showWelcome ? (
        <div className="relative w-screen h-screen flex items-center justify-center">
      
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="/assets/welcome2.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <button
            onClick={handleEnter}
            className="relative z-10 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            ➜ Entrer
          </button>
        </div>
      ) : (
        
        <div className="relative w-screen min-h-screen">
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/streaming-bg3.jpg')" }}
          ></div>

        
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <header className="relative z-10 p-4 flex justify-center items-center bg-gray-900 bg-opacity-80 shadow-md">
            <img src="/assets/logo.png" alt="PrimeStream Logo" className="w-24 md:w-28 lg:w-32" />
          </header>

          <div className="relative z-10 p-6 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {channels.map((channel, index) => (
              <a key={index} href={channel.url} target="_blank" rel="noopener noreferrer" className="group">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                  <img src={channel.image} alt={channel.name} className="w-full h-40 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-2 text-center"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
