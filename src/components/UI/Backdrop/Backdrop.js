const Backdrop = ({ show, clicked }) => {
  return show ? (
    <div
      className="w-full h-full fixed bg-black z-40 bg-opacity-50 top-0 left-0"
      onClick={clicked}
    ></div>
  ) : null;
};

export default Backdrop;
