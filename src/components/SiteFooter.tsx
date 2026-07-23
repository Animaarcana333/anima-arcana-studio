import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Emblem, Divider } from "./Emblem";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-burgundy/20 bg-parchment/40">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <Emblem size={72} />
          <p className="mt-6 text-sacred text-[11px] text-burgundy">Anima Arcana</p>
          <p className="mt-3 max-w-md font-display text-2xl italic text-ink/80">
            Return to the body. Listen to the soul.
          </p>
          <Divider className="mt-8" />
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-4">
          <div>
            <h4 className="text-sacred text-[10px] text-burgundy">Explore</h4>
            <ul className="mt-5 space-y-2 text-sm text-ink/80">
              <li><Link to="/about" className="hover:text-burgundy">About Virginia</Link></li>
              <li><Link to="/experiences" className="hover:text-burgundy">Experiences</Link></li>
              <li><Link to="/photography" className="hover:text-burgundy">Body & Earth</Link></li>
              <li><Link to="/apothecary" className="hover:text-burgundy">The Apothecary</Link></li>
              <li><Link to="/school" className="hover:text-burgundy">Arcana School</Link></li>
              <li><Link to="/journal" className="hover:text-burgundy">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sacred text-[10px] text-burgundy">Practices</h4>
            <ul className="mt-5 space-y-2 text-sm text-ink/80">
              <li><Link to="/experiences/returning-body" className="hover:text-burgundy">The Returning Body</Link></li>
              <li><Link to="/experiences/reiki" className="hover:text-burgundy">Reiki</Link></li>
              <li><Link to="/experiences/tvm" className="hover:text-burgundy">Triple Vagal Nerve Method</Link></li>
              <li><Link to="/experiences/kundalini" className="hover:text-burgundy">Kundalini Life Force</Link></li>
              <li><Link to="/experiences/tarot" className="hover:text-burgundy">Tarot Readings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sacred text-[10px] text-burgundy">Elsewhere</h4>
            <ul className="mt-5 space-y-2 text-sm text-ink/80">
              <li><a href="https://instagram.com" className="inline-flex items-center gap-2 hover:text-burgundy"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a href="https://pinterest.com" className="hover:text-burgundy">Pinterest</a></li>
              <li><a href="mailto:hola@animaarcana.com" className="hover:text-burgundy">hola@animaarcana.com</a></li>
              <li className="pt-2 text-ink/60">Oaxaca Coast, Mexico</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sacred text-[10px] text-burgundy">Fine Print</h4>
            <ul className="mt-5 space-y-2 text-sm text-ink/80">
              <li><Link to="/legal/privacy" className="hover:text-burgundy">Privacy Policy</Link></li>
              <li><Link to="/legal/terms" className="hover:text-burgundy">Terms & Conditions</Link></li>
              <li><Link to="/legal/refund" className="hover:text-burgundy">Refund Policy</Link></li>
              <li><Link to="/legal/shipping" className="hover:text-burgundy">Shipping</Link></li>
              <li><Link to="/legal/disclaimer" className="hover:text-burgundy">Wellness Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-burgundy/15 pt-8 text-center text-xs text-ink/55">
          © {new Date().getFullYear()} Anima Arcana · Virginia Giordano. All rituals, images and words are held with care.
        </div>
      </div>
    </footer>
  );
}
