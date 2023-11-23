import '../../App';
import './Header.css';
import { CATEGORY } from "../../enums/EnumCategory";

/*
Recibir input con page ¿URL?
*/
export default function Header() {
  return (
    <div className="header">
      <h1 id='headerH1'>{CATEGORY.INDEX}</h1>
    </div>
  );
}

// export default Header;
