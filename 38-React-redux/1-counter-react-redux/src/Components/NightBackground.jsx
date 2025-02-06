const NightBackground = ({ children }) => {
  return (
    <div className="myCard">
      <div className="card-body bg-danger bg-gradient rounded-pill">{children}</div>
    </div>
  );
};

export default NightBackground;
