export default function MobileMenu({ scrollToSection }) {
    return (
      <div className="md:hidden fixed top-20 left-0 right-0 bg-black border-t border-white/20 py-4 z-40 text-center">
        {["Home", "Why th3", "Solutions", "Success", "Contact"].map((item) => (
          <div
            key={item}
            className="py-2 hover:text-white/70 cursor-pointer"
            onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
  