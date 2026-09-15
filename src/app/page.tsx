"use client";

import { useState } from "react";
import {
  Star,
  WandSparkles,
  Phone,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
} from "lucide-react";
import { LinkedInIcon } from "@/components/LinkedInIcon";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SummarySquare from "@/components/SummarySquare";
import InfiniteSlider from "@/components/InfiniteSlider";

import {
  GLADYS_MENDOZA_LABEL,
  COMMUNITY_MANAGER_LABEL,
  WHATSAPP_LINK,
} from "@/lib/constants";
import {
  SELF_SUMMARY_LABEL,
  EXPERIENCE_LABEL,
  EDUCATION_LABEL,
  PROFILES_LABEL,
  SOCIAL_MEDIA_LABEL,
  selfSummary,
  experienceList,
  educationList,
  socialMediaList,
} from "@/data/home.data";
import { MY_SERVICES_LABEL, servicesList } from "@/data/services.data";
import { WORKS_TITLE, phoneFrame, workList } from "@/data/works.data";
import { BRANDS_COLLABS, brandListLeft, brandListRight } from "@/data/brands.data";
import {
  CONTACTME_LABEL,
  CONTACT_INFO_LABEL,
  SOCIAL_MEDIA_LABEL as CONTACT_SOCIAL_LABEL,
  SEND_MESSAGE_LABEL,
  contactInfoList,
  formFields,
  linkedinLink,
} from "@/data/contact.data";

function ContactInfoIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "email":
      return <Mail className="w-5 h-5" />;
    case "phone":
      return <Phone className="w-5 h-5" />;
    case "location":
      return <MapPin className="w-5 h-5" />;
    default:
      return null;
  }
}

function HomeSection() {
  return (
    <section className="pt-[75px] pb-[120px] relative" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        <SummarySquare className="glass-card rounded-3xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile/profile.png"
            alt="profile"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SummarySquare>

        <SummarySquare className="glass-card rounded-3xl p-7 col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col justify-center items-start text-left min-h-[250px]">
          <h1 className="flex items-center gap-2.5 text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
            <Star className="text-[var(--color-primary)]" />
            {SELF_SUMMARY_LABEL}
            <Star className="text-[var(--color-primary)]" />
          </h1>
          <div className="glass-card rounded-3xl p-7 mt-5 w-full relative overflow-hidden">
            <h2 className="flex items-end gap-3 text-[var(--color-primary)] text-3xl font-bold mb-2.5 w-full flex-wrap">
              {GLADYS_MENDOZA_LABEL}
              <span className="border border-[var(--color-primary)] rounded px-2 py-0.5 text-sm font-normal opacity-70">
                {COMMUNITY_MANAGER_LABEL}
              </span>
            </h2>
            <p className="text-white mt-3">{selfSummary}</p>
          </div>
        </SummarySquare>

        <SummarySquare className="glass-card rounded-3xl p-7 col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col items-start text-left">
          <h3 className="text-white text-xl font-bold mb-5 w-full">{EXPERIENCE_LABEL}</h3>
          {experienceList.map(({ date, position, company, duties }, index) => (
            <section key={index} className="w-full border-b border-white/25 pb-2.5 last:border-b-0 last:pb-0 mb-2.5 last:mb-0">
              <p className="text-white/70 text-sm mb-1">{date}</p>
              <h4 className="text-[var(--color-primary)] text-base font-bold mb-1">{position}</h4>
              <h6 className="text-white text-lg font-normal mb-1">{company}</h6>
              <ul className="text-white/70 list-disc pl-5">
                {duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </section>
          ))}
        </SummarySquare>

        <SummarySquare className="glass-card rounded-3xl p-7 col-span-1 sm:col-span-1 lg:col-span-2 flex flex-col items-start text-left">
          <h3 className="text-white text-xl font-bold mb-5 w-full">{EDUCATION_LABEL}</h3>
          {educationList.map(({ date, title, entity }, index) => (
            <section key={index} className="w-full border-b border-white/25 pb-2.5 last:border-b-0 last:pb-0 mb-2.5 last:mb-0">
              <p className="text-white/70 text-sm mb-1">{date}</p>
              <h4 className="text-[var(--color-primary)] text-base font-bold mb-1">{title}</h4>
              <h6 className="text-white text-lg font-normal">{entity}</h6>
            </section>
          ))}
        </SummarySquare>

        <SummarySquare className="glass-card rounded-3xl p-7 col-span-1 sm:col-span-1 lg:col-span-2 flex flex-col items-start text-left relative overflow-hidden">
          <WandSparkles className="absolute top-[-40px] left-[30px] w-[50px] h-[150px] text-[var(--color-primary)] opacity-50 rotate-[135deg] transition-all duration-500 hover:opacity-100" />
          <section className="flex justify-start gap-3.5 w-full my-5">
            {socialMediaList.map(({ icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white border border-white rounded-full w-[50px] h-[50px] flex items-center justify-center p-2 transition-all hover:bg-white hover:text-[var(--color-primary)]"
              >
                {icon}
              </a>
            ))}
          </section>
          <section className="w-full">
            <h5 className="text-white text-sm uppercase opacity-70 mb-0.5">{PROFILES_LABEL}</h5>
            <h3 className="text-[var(--color-primary)] text-xl font-bold">{SOCIAL_MEDIA_LABEL}</h3>
          </section>
        </SummarySquare>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative" id="services">
      <h2 className="text-white text-3xl font-bold pt-24 text-center">{MY_SERVICES_LABEL}</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 relative">
        {servicesList.map(({ icon, label, description }, index) => (
          <SummarySquare key={index} className="glass-card rounded-3xl p-7 flex flex-col items-center justify-center min-h-[250px] relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt="icon" className="w-[75px] h-[75px] object-contain" />
            <h3 className="text-white text-center text-lg font-bold mt-3">{label}</h3>
            <p className="text-white/70 text-center mt-2">{description}</p>
          </SummarySquare>
        ))}
      </div>
    </section>
  );
}

function WorksSection() {
  const [counter, setCounter] = useState(0);

  const leftValue = counter * -370;

  const handleLeft = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const handleRight = () => {
    if (counter < workList.length - 1) setCounter(counter + 1);
  };

  const isDisabledLeft = counter === 0;
  const isDisabledRight = counter === workList.length - 1;

  return (
    <section className="py-12 relative" id="works">
      <h2 className="text-[var(--color-primary)] text-3xl font-bold pt-6 text-center">{WORKS_TITLE}</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 overflow-hidden p-0 relative">
        <div
          className="flex gap-5 relative transition-all duration-500"
          style={{ left: `${leftValue}px` }}
        >
          {workList.map((work, index) => {
            const isActive = index === counter;
            if (work.type === "video") {
              return (
                <video
                  key={index}
                  src={work.url}
                  controls={isActive}
                  muted
                  onClick={() => setCounter(index)}
                  className={`w-[348px] h-[710px] rounded-[40px] object-cover cursor-pointer transition-all duration-500 ${
                    isActive ? "grayscale-0 scale-100" : "grayscale scale-[0.8]"
                  }`}
                />
              );
            }
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={index}
                src={work.url}
                alt={`work_${index}`}
                onClick={() => setCounter(index)}
                className={`w-[348px] h-[710px] rounded-[40px] object-cover cursor-pointer transition-all duration-500 ${
                  isActive ? "grayscale-0 scale-100" : "grayscale scale-[0.8]"
                }`}
              />
            );
          })}
        </div>

        <ChevronLeft
          className={`absolute top-1/2 -translate-y-1/2 left-2.5 text-white text-[30px] z-10 cursor-pointer ${
            isDisabledLeft ? "opacity-20 cursor-not-allowed pointer-events-none" : ""
          }`}
          onClick={handleLeft}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={phoneFrame}
          alt="phone_frame"
          className="w-[350px] h-[710px] rounded-[40px] absolute top-0 left-0 pointer-events-none z-[5] scale-[1.01]"
        />
        <ChevronRight
          className={`absolute top-1/2 -translate-y-1/2 left-[310px] text-white text-[30px] z-10 cursor-pointer ${
            isDisabledRight ? "opacity-20 cursor-not-allowed pointer-events-none" : ""
          }`}
          onClick={handleRight}
        />
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section className="mt-12 pb-24 relative" id="brands">
      <h2 className="text-[var(--color-primary)] text-3xl font-bold text-center">{BRANDS_COLLABS}</h2>
      <InfiniteSlider data={brandListLeft} side="left" />
      <InfiniteSlider data={brandListRight} side="right" />
    </section>
  );
}

function ContactMeSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="py-12 relative" id="contactme">
      <h2 className="text-[var(--color-primary)] text-3xl font-bold pt-6 pb-12 text-center">{CONTACTME_LABEL}</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
        <section className="flex flex-col gap-5 items-start text-white justify-between">
          <h4 className="text-white text-lg font-bold">{CONTACT_INFO_LABEL}</h4>
          {contactInfoList.map(({ icon, name, label }) => (
            <section key={name} className="flex items-center gap-5 text-left mb-7">
              <div className="glass-card text-[30px] p-[18px] h-[68px] w-[68px] rounded-[10px] flex items-center justify-center overflow-visible">
                <ContactInfoIcon icon={icon} />
              </div>
              <section className="flex flex-col items-start gap-2 h-full">
                <h5 className="text-white/50 uppercase text-sm mb-0">{name}</h5>
                <p className="text-white text-base mb-0">{label}</p>
              </section>
            </section>
          ))}
          <h4 className="text-white text-lg font-bold">{CONTACT_SOCIAL_LABEL}</h4>
          <section className="flex gap-5">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-white">
              <div className="glass-card p-5 h-20 w-20 rounded-full flex items-center justify-center cursor-pointer transition-all hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
                <LinkedInIcon className="w-8 h-8" />
              </div>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white">
              <div className="glass-card p-5 h-20 w-20 rounded-full flex items-center justify-center cursor-pointer transition-all hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]">
                <Phone className="w-8 h-8" />
              </div>
            </a>
          </section>
        </section>

        <section className="relative">
          <SummarySquare className="glass-card rounded-3xl p-7 h-full">
            <WandSparkles className="absolute top-5 right-7 w-[50px] h-[150px] text-[var(--color-primary)] opacity-50 rotate-[135deg] transition-all duration-500 hover:opacity-100" />
            <h3 className="text-white text-[28px] w-full text-left mb-7">
              Trabajemos <span className="text-[var(--color-primary)]">Juntos</span>
            </h3>
            <section className="flex flex-col w-full gap-4">
              {formFields.map(({ label, type, name, placeholder }) => (
                <section key={name} className="flex flex-col w-full items-start">
                  <label className="text-white">
                    {label} <span className="text-xs text-[var(--color-primary)]">(requerido)</span>
                  </label>
                  <input
                    type={type}
                    value={formData[name as keyof typeof formData]}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    className="w-full border-none bg-gradient-to-r from-white/5 to-white/1 rounded-[10px] py-[17px] px-5 text-sm text-white"
                  />
                </section>
              ))}
              <section className="flex flex-col w-full items-start">
                <label className="text-white">
                  Mensaje <span className="text-xs text-[var(--color-primary)]">(requerido)</span>
                </label>
                <textarea
                  value={formData.message}
                  name="message"
                  placeholder="Mensaje"
                  onChange={handleChange}
                  className="w-full min-w-full max-w-full h-[145px] border-none bg-gradient-to-r from-white/5 to-white/1 rounded-[10px] py-[17px] px-5 text-sm text-white resize-none"
                />
              </section>
              <button
                onClick={handleSubmit}
                className="mt-2.5 w-full border-none rounded-[10px] text-sm py-4 px-[30px] bg-white/50 transition-all duration-500 font-semibold text-white hover:bg-[var(--color-primary)]"
              >
                {SEND_MESSAGE_LABEL}
              </button>
            </section>
          </SummarySquare>
        </section>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-center relative box-border w-full min-h-screen">
      <section className="h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),hsla(0,0%,100%,0))]">
        <Header />
        <HomeSection />
        <ServicesSection />
        <WorksSection />
        <BrandsSection />
        <ContactMeSection />
        <Footer />
      </section>
    </main>
  );
}
