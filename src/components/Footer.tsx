import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    /* Paso 1: Agregamos id="footer" para permitir el scroll desde el Header */
    <footer id="footer" className="bg-[#003366] text-white py-12 px-[10%] border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Global<span className="text-orange-500">Trade</span></h3>
          <p className="text-gray-300 text-sm">Experts in global expansion and strategic logistics.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
            {/* Paso 2: Actualizamos el href a #estimator para que coincida con la nueva lógica */}
            <li><a href="#estimator" className="hover:text-orange-500 transition-colors">Estimator</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange-500 transition-all"><Linkedin size={20} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange-500 transition-all"><Twitter size={20} /></a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-orange-500 transition-all"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
        © 2026 GlobalTrade Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;