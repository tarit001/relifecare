import React from 'react';
//import { FaOtter } from 'react-icons/fa';

import Doctor_Footer from '../doctor-components/doctor_Footer';
import Doctor_Chatbot from '../doctor-components/doctor_Chatbot';
import Doctor_FloatingActionButtons from '../doctor-components/doctor_FloatingActionButtons';
import Doctor_Navbar from '../doctor-components/doctor_Navbar';



export default function Doctor_AboutUsPage() {
  return (
    
    <div className="text-gray-800">
      <Doctor_Navbar />
      {/* About Us Header & Content */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">About Us</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Text */}
          <div className="lg:col-span-2 space-y-5 text-sm leading-relaxed">
            <p>
              Dignity Health operates six hospitals in the Greater Sacramento Area—Mercy General Hospital, Mercy Hospital of Folsom,
              Mercy San Juan Medical Center, Methodist Hospital of Sacramento and Woodland Memorial Hospital. All five of our Sacramento area hospitals have a rich history within the communities we serve...
            </p>
            <p>
              Our hospitals’ support programs, services and initiatives are designed to increase access to care and improve the health of a community...
            </p>
            <p>
              In addition to our acute care hospitals, Dignity Health provides outpatient services through the Mercy Cancer Center, Mercy Home Health, Hospice & Palliative Care, and more...
            </p>
            <p>
              Dignity Health is dedicated to providing compassionate, high-quality and affordable patient-centered care. In 2023, Dignity Health provided over $213 million in charitable care...
            </p>
          </div>

          {/* Sidebar */}
          <aside className="bg-gray-100 p-6 rounded shadow-sm text-sm">
            <h3 className="font-semibold text-lg mb-4">More about Dignity Health in Greater Sacramento</h3>
            <ul className="space-y-2 text-blue-600">
              {[
                'Accreditation',
                'Diversity and Inclusion',
                'Hospital Fast Facts',
                'Our Mission, Vision and Values',
                'Press Center',
                'Sacramento Community Board',
                'Sacramento Value Report 2024',
                'Video Library',
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Info Boxes with Images */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        {[
          {
            title: 'End of Life Option Act',
            desc: 'At Dignity Health, we understand that death is a sacred part of life’s journey. As such, we will intentionally neither hasten nor delay it.',
            img: 'https://www.nzhpa.org/wp-content/uploads/2018/02/Nurses-20-1068x534.jpg',
            link: 'See Our Policy',
          },
          {
            title: 'Healthier Living Workshops',
            desc: 'Are you dealing with an ongoing health condition? Consider one of our Healthier Living Workshops.',
            img: 'https://www.kelsey-seybold.com/-/media/Project/KelseySeybold/KelseySeyboldClinic/Images/Your-Health-Resources/Healthy-Living-Workshop/hero-header-mobile.jpg',
            link: 'Learn More',
          },
          {
            title: 'Open Enrollment',
            desc: 'Dignity Health hospitals and outpatient centers provide nationally recognized personal care during enrollment seasons.',
            img: 'https://t4.ftcdn.net/jpg/04/06/61/09/360_F_406610987_JJyOSGIWFZFFopTgu3FfKabg1VZMhoVq.jpg',
            link: 'Learn More',
          },
          {
            title: 'Insurance Plans Accepted',
            desc: 'Dignity Health accepts a variety of plans including HMOs, PPOs, Covered CA and Medi-Cal plans.',
            img: 'https://www.renewbuy.com/sites/default/files/2023-04/whole%20life%20insurance.png',
            link: 'Learn More',
          },
        ].map((item, i) => (
          <div key={i} className="bg-white border rounded shadow-sm overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm mb-2">{item.desc}</p>
              <a href="#" className="text-blue-700 text-sm font-semibold">
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </section>


      <Doctor_Footer/>
      <Doctor_Chatbot/>
      <Doctor_FloatingActionButtons/>
    </div>
  );
}
