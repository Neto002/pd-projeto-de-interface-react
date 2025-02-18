import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#D7BEF8" }} className="py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Antonio</span>
            <img alt="logo" src="/assets/logo.png" className="h-24 w-auto" />
          </Link>
          <nav className="mt-4 flex gap-x-6 text-sm font-semibold text-gray-900 sm:mt-0">
            <Link to="/">Página Inicial</Link>
            <Link to="/about">Sobre</Link>
          </nav>
        </div>
        <div className="mt-6 border-t border-gray-400/50 pt-4 text-center text-sm text-gray-700">
          &copy; {new Date().getFullYear()} Antonio Gomes Ferreira Neto. Todos
          os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
