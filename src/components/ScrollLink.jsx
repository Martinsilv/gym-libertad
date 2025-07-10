export const ScrollLink = ({ to, children, onClick }) => {
  const handleClick = () => {
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClick?.();
    }
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
};
