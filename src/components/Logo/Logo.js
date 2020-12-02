import bicaraLogo from "../../assets/images/logo.png";

export default function Logo(props) {
  return (
    <div className=" h-full box-border" style={{ height: props.height }}>
      <img src={bicaraLogo} alt="Bicara Project" className="h-full" />
    </div>
  );
}
