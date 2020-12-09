export default function Button(props) {
  return (
    <button
      disabled={props.disabled}
      className={`bg-transparent	border-lg text-white cursor-pointer	p-2.5  text-bold    ${
        "bg-" + props.btnColor
      } ${props.styling} ${
        props.disabled && "bg-opacity-50 cursor-not-allowed"
      } flex	items-center justify-center`}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30.848"
        height="30.849"
        viewBox="0 0 30.848 30.849"
        className={`${props.loading ? "animate-spin mx-2 p-2" : "hidden"}  `}
      >
        <path
          id="Icon_metro-spinner4"
          data-name="Icon metro-spinner4"
          d="M17.995,1.928A15.424,15.424,0,0,0,2.575,16.99C2.754,9.7,8.294,3.856,15.1,3.856c6.921,0,12.532,6.042,12.532,13.5a2.892,2.892,0,0,0,5.784,0A15.424,15.424,0,0,0,17.995,1.928Zm0,30.849a15.424,15.424,0,0,0,15.42-15.062C33.236,25,27.7,30.849,20.887,30.849c-6.921,0-12.532-6.042-12.532-13.5a2.892,2.892,0,0,0-5.784,0A15.424,15.424,0,0,0,17.995,32.777Z"
          transform="translate(-2.571 -1.928)"
          fill="#fff"
        />
      </svg>

      {props.children}
    </button>
  );
}
