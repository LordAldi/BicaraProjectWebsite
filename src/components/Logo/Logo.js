import bicaraLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
export default function Logo(props) {
  return (
    <Link to="/">
      <div className=" h-full box-border" style={{ height: props.height }}>
        <img src={bicaraLogo} alt="Bicara Project" className="h-full" />
      </div>
    </Link>
  );
}
