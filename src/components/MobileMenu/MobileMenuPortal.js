import { createPortal } from 'react-dom';

const MobileMenuPortal = ({ children }) => {
  const menuRoot = document.getElementById('menu-root');

  if (!menuRoot) {
    console.error(
      "Portal root element not found. Please create a div with id='portal-root' in your HTML.",
    );
    return null;
  }

  return createPortal(children, menuRoot);
};

export default MobileMenuPortal;
