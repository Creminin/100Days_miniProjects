export const PlayBar = () => {
  return (
    <>
      <div className="play-bar">
        <div className="play-bar-mask" />
        <img src="/circle.svg" alt="" className="play-circle" />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <p>0:55</p>
        <p>3:31</p>
      </div>
    </>
  );
};
