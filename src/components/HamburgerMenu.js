
export default function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
      {isOpen ? '✖' : '☰'}
    </button>
  );
}
