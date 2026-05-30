import { Instagram, Facebook, Mail } from "lucide-react";
import { raceData } from "@/data/race";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-white">{raceData.name}</p>
            <p className="text-white/40 text-sm">{raceData.subtitle}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={raceData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 hover:text-[#FF5A1F] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
              <span className="text-white/40 text-xs">Instagram</span>
            </a>
            <a
              href={raceData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 hover:text-[#FF5A1F] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-white" />
              <span className="text-white/40 text-xs">Facebook</span>
            </a>
            <a
              href={`mailto:${raceData.contactEmail}`}
              className="flex flex-col items-center gap-1 hover:text-[#FF5A1F] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="text-white" />
              <span className="text-white/40 text-xs">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/30 text-sm">{raceData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}