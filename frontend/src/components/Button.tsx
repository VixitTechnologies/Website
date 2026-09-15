import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

const Button = ({ children, href = "#", variant = "primary" }: ButtonProps) => {
  const baseStyles =
    "group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary: "bg-brand !text-white hover:bg-accent hover:shadow-md",

    secondary:
      "border border-[#CBD5E1] bg-white !text-ink hover:border-accent hover:bg-accent hover:!text-white hover:shadow-md",
  };

  return (
    <Link to={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;
