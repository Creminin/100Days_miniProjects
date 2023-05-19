export const PlayNavigation = () => {
  return (
    <div className="content-PlayNavigation">
      <button className="btn-play">
        <img src="/ic-repeat.svg" alt="" />
      </button>

      <button className="btn-play next-left">
        <img src="/ic-previous.svg" alt="" />
      </button>

      <button className="btn-play">
        <img src="/play-button.svg" alt="" />
      </button>

      <button className="btn-play next-right">
        <img src="/ic-next.svg" alt="" />
      </button>

      <button className="btn-play">
        <img src="/ic-heart.svg" alt="" />
      </button>
    </div>
  );
};
