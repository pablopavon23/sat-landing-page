import { Instagram } from "lucide-react";
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

          <div className="flex items-center gap-4">
            <a
              href={raceData.social.instagram}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF5A1F] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-white" />
            </a>
            <a
              href={`mailto:${raceData.contactEmail}`}
              className="text-white/50 text-sm hover:text-[#FF5A1F] transition-colors"
            >
              {raceData.contactEmail}
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