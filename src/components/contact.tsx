import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { copy, type Locale } from "@/data/translations";

export function Contact({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const emailReady = profile.email.length > 0;
  return (
    <section id="contact" className="contact">
      <p className="eyebrow">{t.contact.label}</p>
      <h2>{t.contact.title}</h2>
      <p>{t.contact.body}</p>
      <div className="contact-links">
        <a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
        <a href={profile.social.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
        {emailReady && <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>}
      </div>
    </section>
  );
}
