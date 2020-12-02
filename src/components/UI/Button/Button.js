export default function Button(props) {
  return (
    <button disabled={props.disable} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
