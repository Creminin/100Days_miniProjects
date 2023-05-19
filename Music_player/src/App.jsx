import { Lyrics } from './complements/lyrics';
import { PlayBar } from './complements/play-bar';
import { PlayNavigation } from './complements/play-navigation';
import './style/app.css';
import './style/navigation.css';

function App() {
  return (
    <div className="container">
      <div className="navigation-container">
        <img src="/Cover-Music.png" alt="" className="cover-music" />

        <h1>Fly-shit</h1>
        <h2>Destroy Lonely</h2>

        <PlayBar />

        <PlayNavigation />

        <Lyrics />
      </div>
    </div>
  );
}

export default App;
