import { Heart, Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin, MessageSquare } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", textColor: "text-[#1877F2]", bgColor: "hover:bg-[#1877F2]" },
    { icon: Twitter, href: "#", label: "Twitter", textColor: "text-[#1DA1F2]", bgColor: "hover:bg-[#1DA1F2]" },
    { icon: Instagram, href: "#", label: "Instagram", textColor: "text-[#E4405F]", bgColor: "hover:bg-[#E4405F]" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", textColor: "text-[#0077B5]", bgColor: "hover:bg-[#0077B5]" },
    { icon: MessageSquare, href: "https://wa.me/+911800633776", label: "WhatsApp", textColor: "text-[#25D366]", bgColor: "hover:bg-[#25D366]" },
  ];

  return (
    <footer className="bg-white pt-24 pb-12 text-slate-500 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center relative">
                <div className="w-5 h-1 bg-white italic"></div>
                <div className="w-1 h-5 bg-white absolute"></div>
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">MediStore<span className="text-primary italic">Pro</span></span>
            </div>
            <p className="text-sm font-medium leading-relaxed mb-10 max-w-xs">
              The modern apothecary for the digital age. Trusted pharmaceutical care delivered to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center ${social.bgColor} transition-all border border-slate-100 italic hover:scale-110 active:scale-95 group shadow-sm`}
                  title={social.label}
                >
                  <social.icon className={`w-5 h-5 stroke-[2.5px] ${social.textColor} group-hover:text-white transition-colors`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-black mb-8 text-[11px] uppercase tracking-[0.3em] italic">Company</h3>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest italic">
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-black mb-8 text-[11px] uppercase tracking-[0.3em] italic">Support</h3>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest italic">
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors underline decoration-primary/20 underline-offset-4">Quality Policy</a></li>
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
            <h3 className="text-slate-900 font-black mb-8 text-[11px] uppercase tracking-[0.3em] italic">Contact Info</h3>
            <ul className="space-y-6 text-[10px] font-black uppercase tracking-widest italic">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>+91 1800-MED-PRO<br /><span className="text-slate-400 font-bold opacity-60">24/7 SUPPORT</span></span>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="break-all italic underline decoration-primary/20">support@medistore.pro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">© 2026 MediStore Pro. Worldwide Systems.</p>
          <div className="flex gap-10 text-[10px] font-black text-slate-400 uppercase tracking-widest italic">
            <a href="#" className="hover:text-primary transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-all">Terms of Use</a>
            <a href="#" className="text-primary italic">Support Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
