import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import chatbotImage from '../doctor-assets/chatbot1.jpg';



import Doctor_Footer from '../doctor-components/doctor_Footer';
import Doctor_Chatbot from '../doctor-components/doctor_Chatbot';
import Doctor_FloatingActionButtons from '../doctor-components/doctor_FloatingActionButtons';
import Doctor_Navbar from '../doctor-components/doctor_Navbar';
import Doctor_hospitalVideo from '../doctor-assets/doctor_hospital.mp4';
import Doctor_yogaWoman from '../doctor-assets/doctor_yogawoman.png';



const Doctor_Home = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true); // Initially muted to allow autoplay
  const [isManualMute, setIsManualMute] = useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (video) {
      const newMute = !video.muted;
      video.muted = newMute;
      setIsMuted(newMute);
      setIsManualMute(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Try playing muted first
      video.muted = true;
      video.play()
        .then(() => {
          // After playing, unmute programmatically if user didn't interact
          setTimeout(() => {
            if (!isManualMute) {
              video.muted = false;
              setIsMuted(false);
            }
          }, 100); // slight delay to allow autoplay
        })
        .catch((err) => {
          console.log('Autoplay prevented:', err);
        });
    }

    const handleScroll = () => {
      if (!video || !heroRef.current || isManualMute) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRef.current.offsetHeight;
      const visibleHeight = Math.max(0, heroRect.bottom - Math.max(0, heroRect.top));

      if (visibleHeight < heroHeight * 0.5) {
        video.muted = true;
        setIsMuted(true);
      } else {
        video.muted = false;
        setIsMuted(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualMute]);
  

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100 scroll-smooth">
      <Doctor_Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={Doctor_hospitalVideo}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <div className="absolute inset-0 bg-black/0 z-10"></div>

        {/* Sound Toggle Button */}
        <button
          onClick={toggleSound}
          className="absolute bottom-6 left-6 z-30 bg-white dark:bg-slate-800 text-blue-600 dark:text-white p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition"
        >
          {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4">
          <div className="mt-[32rem] flex flex-wrap justify-center gap-4 animate-fade-in delay-700">
            <Link to="/doctor/doctor-Appoint" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-600 font-semibold px-5 py-2 rounded-full shadow transition">
              Book Appointment
            </Link>
            <Link to="/doctor/doctor-findhospital" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-600 font-semibold px-5 py-2 rounded-full shadow transition">
              Find Hospital
            </Link>
            <Link to="/doctor/doctor-exploreus" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-600 font-semibold px-5 py-2 rounded-full shadow transition">
              Explore Us
            </Link>
            <Link to="/doctor/doctor-contact" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-600 font-semibold px-5 py-2 rounded-full shadow transition">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Choose Relife Hospitals In Kolkata?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10">
            Relife Multispeciality Hospitals Kolkata stands as a leader in advanced healthcare in East India.
            We are the only hospital in Eastern India to be accredited with Joint Commission International (JCI),
            the international benchmark for quality. With cutting-edge medical technology and a comprehensive
            range of specialities, we offer world-class care tailored to the needs of every individual.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-hospital', title: '73+', label: 'Hospitals', desc: "India's Largest Private Hospital Network" },
              { icon: 'fa-stethoscope', title: '13,000+', label: 'Doctors', desc: 'Access to Top Specialists' },
              { icon: 'fa-heartbeat', title: '2,700+', label: 'Diagnostic Centers', desc: 'Advanced Diagnostics, Accurate Results' },
              { icon: 'fa-clinic-medical', title: '700+', label: 'Clinics', desc: 'Bringing Healthcare Closer to You' },
              { icon: 'fa-map-marker-alt', title: '19,000+', label: 'Pincodes', desc: 'Reaching Millions Across India' },
              { icon: 'fa-pills', title: '6,000+', label: 'Pharmacies', desc: 'Convenient Access to Medications' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg text-left flex items-start space-x-4 transition hover:scale-105 hover:shadow-xl duration-300">
                <div className="text-blue-600 text-3xl">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <div className="text-xl font-bold">{item.title} <span className="text-base font-semibold">{item.label}</span></div>
                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relife ProHealth Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div className="text-gray-800 dark:text-gray-100">
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Relife_ProHealth_Logo.svg/2560px-Relife_ProHealth_Logo.svg.png"
              alt="Relife ProHealth"
              className="h-12 mb-6"
            /> */}

            <h2 className="text-3xl font-bold mb-4">You Are Unique, Your Health Check Should Be Too!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Relife ProHealth is the world’s most advanced health check, crafted by expert doctors and AI.
              Answer a few questions so we can design an individualized health plan for you with free doctor
              and specialist consultations included!
            </p>

            <h3 className="text-lg font-medium mb-4">Customise Your Unique Health Check</h3>

            <button className="px-6 py-3 border-2 border-black dark:border-white font-semibold rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300">
              BOOK HEALTH CHECK-UP &rarr;
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={Doctor_yogaWoman}
              alt="Meditation Woman"
              className="max-w-md rounded-xl object-contain animate-float"
            />
          </div>
        </div>
      </section>

      {/* ProHealth Cards Section */}
<section className="py-16 px-6 bg-transparent">
  <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
    {[
      {
        title: 'ProHealth',
        subtitle: 'Standard Health Programs',
        description: 'We have designed ProHealth programs by age and gender profiles for you to choose from.',
        bg: 'bg-amber-50',
      },
      {
        title: 'My ProHealth',
        subtitle: 'Individualised Health Programs',
        description: 'You are unique. So, you can custom design your very own ProHealth program based on your unique health profile.',
        bg: 'bg-blue-50',
      },
      {
        title: 'ProHealth Zen',
        subtitle: 'Enabling Healthy Longevity',
        description: 'The most clinically advanced health check program with head-to-toe evaluation and a dedicated physician partner.',
        bg: 'bg-green-50',
      },
    ].map((card, idx) => (
      <div
        key={idx}
        className={`${card.bg} p-6 rounded-2xl shadow hover:shadow-xl transition duration-300`}
      >
        <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
        <h4 className="text-teal-700 font-semibold mb-4">{card.subtitle}</h4>
        <p className="text-slate-700 mb-6">{card.description}</p>
        <div className="w-9 h-9 bg-cyan-700 rounded-full flex items-center justify-center text-white hover:scale-110 transition">
          <i className="fas fa-arrow-right"></i>
          <span className="text-xl">➜</span>
        </div>
      </div>
    ))}
  </div>
</section>


<Doctor_Footer />
<Doctor_Chatbot />
<Doctor_FloatingActionButtons />
    </div>
  );
};

export default Doctor_Home;


