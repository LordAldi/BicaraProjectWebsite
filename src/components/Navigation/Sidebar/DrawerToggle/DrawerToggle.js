const DrawerToggle = ({ clicked }) => {
  return (
    <div
      className="flex md:hidden items-center box-border cursor-pointer h-12"
      onClick={clicked}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="30.625"
        viewBox="0 0 35 30.625"
      >
        <path
          id="Icon_awesome-bars"
          data-name="Icon awesome-bars"
          d="M1.25,9.844h32.5A1.25,1.25,0,0,0,35,8.594V5.469a1.25,1.25,0,0,0-1.25-1.25H1.25A1.25,1.25,0,0,0,0,5.469V8.594A1.25,1.25,0,0,0,1.25,9.844Zm0,12.5h32.5A1.25,1.25,0,0,0,35,21.094V17.969a1.25,1.25,0,0,0-1.25-1.25H1.25A1.25,1.25,0,0,0,0,17.969v3.125A1.25,1.25,0,0,0,1.25,22.344Zm0,12.5h32.5A1.25,1.25,0,0,0,35,33.594V30.469a1.25,1.25,0,0,0-1.25-1.25H1.25A1.25,1.25,0,0,0,0,30.469v3.125A1.25,1.25,0,0,0,1.25,34.844Z"
          transform="translate(0 -4.219)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default DrawerToggle;
