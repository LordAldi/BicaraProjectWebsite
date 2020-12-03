export default function Button(props) {
  console.log(props);
  return (
    <button
      disabled={props.disabled}
      className={`bg-transparent	border-lg text-white cursor-pointer	p-2.5  text-bold    ${
        "bg-" + props.btnColor
      } ${props.styling} ${
        props.disabled && "bg-opacity-50 cursor-not-allowed	"
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
