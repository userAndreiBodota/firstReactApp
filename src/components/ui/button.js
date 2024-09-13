export const Button = ({ children, className, onClick }) => (
  <button className={`py-2 px-4 rounded ${className}`} onClick={onClick}>
    {children}
  </button>
);
