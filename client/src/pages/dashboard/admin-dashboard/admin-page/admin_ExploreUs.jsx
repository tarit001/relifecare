import React, { useState } from 'react';
import { FaPhoneAlt, FaHospitalSymbol } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';


// Specialities list
const specialities = [
  "Allergic Medicine", "Anaesthesiology", "Anaesthesiology & Painmanagement", "Andrologist",
  "Anesthesia & Critical Care", "BRAIN & SPINE SURGEON", "Bariatrics", "Bariatrics Surgery", "Biochemistry",
  "Breast Surgery", "CARDIO VASCULAR & AORTIC SURGERY", "CARDIOLOGY (Advanced Echo services)",
  "Cardio Thoracic & Vascular Surgery", "Cardio Thoracic Surgery", "Cardiology",
  "Cardiothoracic & Vascular Surgery", "Clinical Genetics", "Clinical Psychologist", "Colorectal Surgery",
  "Cosmetic Surgery", "Critical Care", "Critical Care Medicine", "Dental", "Dentist", "Dentistry & Endodontics",
  "Dermatology", "Diabetology", "Dietetics", "ENDOCRINE & BREAST ONCO SURGERY", "ENT - Head and Neck Skull Base Surgery",
  "Emergency", "Emergency Medicine", "Emergency Medicine & Trauma", "Endocrine Surgery", "Endocrinology", "Ent",
  "Epilepsy Specialist", "Family Medicine", "Family Physician", "Fetal Medicine", "GENERAL SURGERY (Podiatry surgery)",
  "GI & General Surgery", "GI & HPB SURGERY", "Gastroenterology", "Gastroenterology/GI medicine",
  "General & Laparoscopic Surgeon", "General & Laparoscopic Surgery", "General Medicine",
  "General Physician/ Internal Medicine", "General Surgeries", "General Surgery", "General Surgery & Laproscopic Surgery",
  "Genetic Counseling", "Geriatric Internal Medicine", "Geriatric Medicine", "Geriatrics", "Gynaecology", "Gynec Oncology",
  "HAEMATO ONCOLOGY & BONE MARROW TRANSPLANT", "HEAD & NECK ONCOLOGY", "HEART & LUNG TRANSPLANT",
  "Haemato Oncology & BMT", "Haematology", "Haematooncology", "Head & Neck Oncosurgery",
  "Head & Neck Surgical Oncology", "Head & Neck Surgical Oncology & Skull Base Surgery", "Head and Neck Surgical Oncologist",
  "Hepatology", "IVF", "Infectious Diseases", "Infertility", "Intensive Care Unit", "Internal Medicine",
  "Internal Medicine/ Covid Consultation", "Interventional Cardiologist", "Interventional Neuroradiology",
  "Interventional Radiologist", "Interventional Radiology", "Lactation", "Liver Transplant", "Liver Transplant & Hpb Surgery",
  "Liver Transplant Specialist", "Maxillo Facial Surgeon", "Medical Gastroenterology", "Medical Genetics", "Medical Oncology",
  "Medical Oncology & Clinical Haematology", "Microbiology", "Minimal Access/Surgical Gastroenterology", "Neonatology",
  "Nephrology", "Neuro & Spine Surgery", "Neuro Surgery", "Neurology", "Neurosurgery", "Nuclear Medicine",
  "Nuclear Medicine Physician", "Nuclear Medicine Specialist Physician", "Nutrition & Dietetics",
  "ORTHOPAEDICS - SPINE SURGERY", "Obstetrics & Gynaecology", "Obstetrics & Gynecology", "Obstetrics and Gynecology",
  "Occuloplastic & Aesthetic Surgery", "Oncology", "Oncology Head & Neck Surgery", "Ophthalmology", "Opthalmologist",
  "Opthalmology", "Oral & Maxillofacial Surgery", "Oral & Maxilofacial Surgery", "Orthopaedic Surgeon", "Orthopaedics",
  "Orthopaedics & Joint Replacement Surgery", "Orthopaedics & Traumatology", "Orthopedics & Sports Medicine",
  "Orthopedics-Sports Medicine", "PAEDIATRIC OPTHALMOLOGY", "Paediatric Cardiology", "Paediatric Endocrinology",
  "Paediatric Gastroenterology", "Paediatric Nephrology", "Paediatric Neurology", "Paediatric Pulmonology",
  "Paediatric Surgery", "Paediatrics", "Paediatrics & Neonatology", "Pain Management", "Palliative Medicine",
  "Parkinsons & Movement Disorder Surgeon", "Pathology", "Pediatric Cardio Thoracic Surgery", "Pediatric Cardiology",
  "Pediatric Development", "Pediatric Nephrology", "Pediatric Neurosurgery", "Pediatric Orthopaedic Surgeon",
  "Pediatric Pulmonology", "Pediatrics", "Peripheral Vascular Surgery", "Physical Medicine & Rehabilitation",
  "Physiotherapy", "Physiotherapy and Rehabilitation", "Plastic & Cosmetic Surgery", "Plastic & Reconstructive Surgery",
  "Plastic Surgery", "Podiatry", "Preventive Medicine", "Psychiatry", "Psychology", "Pulmonology",
  "Pulmonology/ Respiratory Medicine", "Radiation Oncologist", "Radiation Oncology", "Radiodiagnosis", "Radiology",
  "Renal Transplant Surgeon", "Respiratory Medicine", "Retina Specilaist", "Rheumatology", "Sexual Medicine",
  "Speech Therapy", "Spine Surgery", "Surgical Gastroenterology", "Surgical Gastroenterology & Laparoscopy",
  "Surgical Oncology", "Thoracic Surgery", "Transplant Surgery", "Transplant Surgery & Surgical Gastro",
  "UROLOGY (ANDROLOGY)", "Uro Oncology", "Urogynaecology", "Urology", "Vascular & Endovascular Surgery", "Vascular Surgery"
];

// Cities list
const cities = [
  "Ahmedabad", "Aragonda", "Bangalore", "Bhopal", "Bhubaneswar", "Bilaspur", "Chennai", "Cochin", "Delhi",
  "Gandhinagar", "Guwahati", "Hyderabad", "Indore", "Kakinada", "Karaikudi", "Karim Nagar", "Karur", "Kolkata",
  "Lucknow", "Madurai", "Mumbai", "Mysore", "Nashik", "Nellore", "Noida", "Rourkela", "Trichy", "Visakhapatnam", "Warangal"
];

// Languages list
const languages = [
  "Albanian", "Arabic", "Assamese", "Aymara", "Bengali", "Bhili/Bhilodi", "Bhojpuri", "Croatian", "Dogri", "Dutch",
  "English", "French", "German", "Gujarati", "Hindi", "Italian", "Japanese", "Kannada", "Kashmiri", "Konkani",
  "Malayalam", "Manipuri", "Marathi", "Nepal", "Nepali", "Odia", "Oriya", "Persian", "Punjabi", "Rajasthani",
  "Russian", "Sindhi", "Spanish", "Swahili", "Tamil", "Telugu", "Tulu", "Urdu"
];

const doctors = [
  {
    name: 'Dr Danny Daniels',
    experience: '16+ Years Experience',
    specialization: 'MBBS, DNB (General Medicine), DNB (Nephrology) | Nephrology',
    languages: ['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam'],
    hospital: 'Relife Speciality Hospital, Jayanagar',
    time: '14:00 - 16:00',
    days: 'Mon - Sat',
    image: 'https://pbs.twimg.com/media/FU6psGDUsAAj7hM?format=jpg&name=4096x4096',
  },
  {
    name: 'Dr Mia Khalifa',
    experience: '17+ Years Experience',
    specialization: 'MBBS ,MD Medicine, DM Nephrology,DNB Nephrology | Nephrology',
    languages: ['English', 'Hindi'],
    hospital: 'Relife Sage Hospitals',
    time: '10:00 - 17:30',
    days: 'Mon - Sat',
    image: 'https://d.newsweek.com/en/full/2346398/mia-khalifa-hits-out-gen-z.png',
  },
  {
    name: 'Dr Johnny da',
    experience: '16+ Years Experience',
    specialization: 'MBBS, DNB (General Medicine), DNB (Nephrology) | Nephrology',
    languages: ['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam'],
    hospital: 'Relife Speciality Hospital, Jayanagar',
    time: '14:00 - 16:00',
    days: 'Mon - Sat',
    image: 'https://i.pinimg.com/736x/53/6c/15/536c1520e31c2bc39f1e802acb0dc510.jpg',
  },
  {
    name: 'Dr Sunny Leone',
    experience: '16+ Years Experience',
    specialization: 'MBBS, DNB (General Medicine), DNB (Nephrology) | Nephrology',
    languages: ['English', 'Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam'],
    hospital: 'Relife Speciality Hospital, Jayanagar',
    time: '14:00 - 16:00',
    days: 'Mon - Sat',
    image: 'https://images.radiocity.in/Radiocity-images/images/uploads/dr-sunny-leone1482510749.jpg',
  }
];

const SearchableCheckboxList = ({ title, items, maxHeight = "160px" }) => {
  const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{title}</h4>
      <input
        type="text"
        placeholder={`Search ${title}...`}
        className="w-full mb-2 p-2 border rounded text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="overflow-y-auto border rounded p-2 text-sm space-y-1 dark:bg-gray-800 dark:border-gray-600" style={{ maxHeight }}>
        {filteredItems.map((item, index) => (
          <label key={index} className="flex items-center gap-2 text-gray-900 dark:text-white">
            <input type="checkbox" className="form-checkbox" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const Admin_FindDoctor = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8 text-gray-900 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">Find A Doctor</h2>
      <p className="text-gray-600 mb-6 dark:text-gray-400">Connect with Trusted Healthcare Experts for Personalized Care</p>

      <div className="relative w-full max-w-3xl mb-8 flex gap-4">
        <input
          type="text"
          placeholder="Search for Doctors & Specialities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-full px-6 py-3 shadow-md pr-12 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 rounded-full shadow-md">Search</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="col-span-1 bg-white p-4 rounded-xl shadow-sm h-[85vh] overflow-y-auto dark:bg-gray-800 dark:border-gray-600">
          <SearchableCheckboxList title="Specialities" items={specialities} maxHeight="300px" />
          <SearchableCheckboxList title="Select City" items={cities} maxHeight="200px" />
          <SearchableCheckboxList title="Languages" items={languages} maxHeight="200px" />
          <SearchableCheckboxList title="Gender" items={["Male", "Female"]} maxHeight="100px" />
        </aside>

        <main className="col-span-1 md:col-span-3 grid md:grid-cols-2 gap-6">
          {doctors.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 shadow-md flex gap-4 items-start dark:bg-gray-800 dark:border-gray-600">
              <img src={doc.image} alt={doc.name} className="w-28 h-28 object-cover rounded-lg border" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{doc.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{doc.experience}</p>
                <p className="text-sm mt-1 dark:text-gray-300">{doc.specialization}</p>
                <p className="text-sm mt-1 dark:text-gray-300">Languages: {doc.languages.join(', ')}</p>
                <p className="text-sm flex items-center gap-1 mt-1 dark:text-gray-300">
                  <FaHospitalSymbol className="text-blue-500" /> {doc.hospital}
                </p>
                <p className="text-sm mt-1 dark:text-gray-300">⏰ {doc.time} <span className="ml-2">📅 {doc.days}</span></p>
                <div className="mt-3 flex gap-3 flex-wrap">
                  <button className="px-4 py-2 rounded-full border hover:bg-blue-600 hover:text-white transition text-sm">Call</button>
                  <Link to="/appointment-form" className="hover:text-blue-600 font-medium text-lg"><button className="px-4 py-2 rounded-full bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold transition">Book Appointment →</button></Link>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Admin_FindDoctor;
