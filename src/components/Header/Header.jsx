import SelectUser from "../SelectUser/SelectUser";
import Button from "../Button/Button";
import { useCallback, useState } from "react";
import Logo from "../Logo/Logo";

const logos = ["/download.svg", "/vite.svg"];

function Header() {
  const [logoIndex, setLogoIndex] = useState(0);

  const toggleLogo = useCallback(() => {
    setLogoIndex((state) => Number(!state));
  }, []);

  return (
    <>
      <Logo image={logos[logoIndex]} />
      <SelectUser />
      <Button onClick={toggleLogo} text="Сменить лого" />
    </>
  );
}

export default Header;
