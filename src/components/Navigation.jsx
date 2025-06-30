import { Link } from 'react-router-dom';
import Magnet from './Magnet';

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 p-2 sm:p-4 flex justify-center items-center">
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 lg:gap-6">
        {items.map((item, index) => (
          <Magnet key={index} padding={100} disabled={false} magnetStrength={20}>
            {item.href.startsWith('/') ? (
              <Link 
                to={item.href}
                className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-white font-semibold rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-xs sm:text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ) : (
              <button className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-white font-semibold rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-xs sm:text-sm lg:text-base">
                {item.label}
              </button>
            )}
          </Magnet>
        ))}
      </div>
    </div>
  );
}
