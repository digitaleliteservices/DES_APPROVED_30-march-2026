import React, { useState } from 'react';
import { motion } from 'motion/react';
import MotionWrapper from './ContactMotionWrapper';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //  Professional social structure
  const socials = [
    { icon: FaTwitter, link: "https://x.com/_DigitalElite_", color: "hover:text-sky-500" },
    { icon: FaFacebook, link: "https://www.facebook.com/people/Digital-Elite-Service/61578403771896/", color: "hover:text-blue-600" },
    { icon: FaInstagram, link: "https://www.instagram.com/digital_elite_services", color: "hover:text-pink-500" },
    { icon: FaYoutube, link: "https://www.youtube.com/@DigitalEliteServices/shorts", color: "hover:text-red-500" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, ""); // Only numbers
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Phone number must be exactly 10 digits");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(
        "https://server.plumeriaresort.in/digitaleliteservice/sendMail",
        formData
      );
      toast.success("Message Sent Successfully");
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        website: "",
        service: ""
      });
    } catch (error) {
      toast.error("Failed to send the message!");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          {/* LEFT SIDE */}
          <div>
            <MotionWrapper>
              <h2 className="text-gold-600 font-bold uppercase tracking-[0.4em] text-[8px] mb-6">
                Connect With Excellence
              </h2>

              <h3 className="text-3xl md:text-4xl font-display font-black text-zinc-900 mb-10 leading-[0.9] tracking-tighter uppercase">
                Let's Build <br />
                Something <span className="text-gold-500">Remarkable</span>
              </h3>

              <p className="text-md text-zinc-500 mb-16 max-w-md leading-relaxed font-medium">
                Ready to take your digital presence to the next level? Drop us a line and we'll get back to you within 24 hours.
              </p>

              {/* Contact Info */}
              <div className="space-y-12 mb-16">

                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 bg-zinc-50 text-gold-500 rounded-2xl flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">
                      Secure Email
                    </p>
                    <p className="text-lg text-zinc-900">
                      info@digitaleliteservices.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 bg-zinc-50 text-gold-500 rounded-2xl flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">
                      Hotline
                    </p>
                    <p className="text-lg text-zinc-900">
                      +91 6366930178
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-14 h-14 bg-zinc-50 text-gold-500 rounded-2xl flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 shadow-sm">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-2">
                      HQ Nexus
                    </p>
                    <p className="text-sm text-zinc-900 leading-relaxed max-w-sm">
                      35 4th A cross, Dasarahalli Main Rd, Bhuvaneswari Nagar,
                      Hebbal Kempapura, Bengaluru, Karnataka 560024
                    </p>
                  </div>
                </div>

              </div>

              {/* Social Icons */}
              <div className="flex gap-6">
                {socials.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 transition-all shadow-sm ${social.color}`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>

            </MotionWrapper>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div>
            <MotionWrapper direction="left">
              <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-zinc-100 relative overflow-hidden">

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] ml-4 font-black text-zinc-500 uppercase tracking-[0.2em]">
                        Identity
                      </label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 focus:ring-1 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-zinc-900"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] ml-4 font-black text-zinc-500 uppercase tracking-[0.2em]">
                        Contact Node
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 focus:ring-1 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-zinc-900"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] ml-4 font-black text-zinc-500 uppercase tracking-[0.2em]">
                        Phone
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 focus:ring-1 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-zinc-900"
                        placeholder="10 Digit Number"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] ml-4 font-black text-zinc-500 uppercase tracking-[0.2em]">
                        Company
                      </label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 focus:ring-1 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-zinc-900"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] ml-4 font-black text-zinc-500 uppercase tracking-[0.2em]">
                      Website
                    </label>
                    <input
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 focus:ring-1 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-zinc-900"
                      placeholder="Company Website URL"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] ml-4 font-black text-zinc-500 uppercase tracking-[0.2em]">
                      Selection
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      required
                      className="w-full bg-white border border-zinc-200 rounded-xl px-6 py-4 focus:ring-1 focus:ring-gold-500 focus:border-transparent transition-all outline-none text-zinc-900"
                    >
                      <option value="">Choose Preferred Service</option>
                      <option value="SEO">SEO</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <button
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-6 rounded-xl font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center gap-4 transition-all ${
                      isSuccess
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gold-500 hover:bg-gold-600 text-white shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : isSuccess ? (
                      'Transmission Successful'
                    ) : (
                      <>
                        Initialize Connection
                        <Send size={16} strokeWidth={3} />
                      </>
                    )}
                  </button>

                </form>
              </div>
            </MotionWrapper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
