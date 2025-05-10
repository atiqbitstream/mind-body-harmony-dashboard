
import { useState } from "react";
import Navbar from "@/components/Navbar";
import DeviceCard from "@/components/DeviceCard";
import DataForm from "@/components/DataForm";
import HistoryModal from "@/components/HistoryModal";
import { Volume2, Lightbulb, CloudFog, Award, Thermometer, Waves, Heart, Brain } from "lucide-react";

const Dashboard = () => {
  const [modalData, setModalData] = useState({ isOpen: false, title: "", endpoint: "" });

  const handleViewHistory = (title: string, endpoint: string) => {
    setModalData({
      isOpen: true,
      title,
      endpoint
    });
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: "", endpoint: "" });
  };

  // Device control definitions
  const deviceControls = [
    {
      title: "Sound System",
      description: "Control ambient sound therapy settings",
      icon: <Volume2 className="h-5 w-5" />,
      endpoint: "/sounds",
      historyEndpoint: "/sound-history"
    },
    {
      title: "LED Light Therapy",
      description: "Adjust LED light intensity and patterns",
      icon: <Lightbulb className="h-5 w-5" />,
      endpoint: "/ledcolors",
      historyEndpoint: "/led-history"
    },
    {
      title: "Steam Generator",
      description: "Manage steam output and duration",
      icon: <CloudFog className="h-5 w-5" />,
      endpoint: "/steams",
      historyEndpoint: "/steam-history"
    },
    {
      title: "Nanoflicker",
      description: "Control nanoflicker frequency and intensity",
      icon: <Award className="h-5 w-5" />,
      endpoint: "/nanoflickers",
      historyEndpoint: "/nanoflicker-history"
    },
    {
      title: "Temperature Tank",
      description: "Adjust temperature levels for therapy",
      icon: <Thermometer className="h-5 w-5" />,
      hasSlider: true,
      endpoint: "/temptanks",
      historyEndpoint: "/temperature-tank-history"
    },
    {
      title: "Water Pump",
      description: "Control water circulation system",
      icon: <Waves className="h-5 w-5" />,
      endpoint: "/water-pumps",
      historyEndpoint: "/water-pump-history"
    }
  ];

  // Data form definitions
  const dataForms = [
    {
      title: "Biofeedback",
      description: "Enter patient biofeedback measurements",
      endpoint: "/biofeedback",
      fields: [
        { name: "heart_rate", label: "Heart Rate (BPM)" },
        { name: "heart_rate_variability", label: "Heart Rate Variability (ms)" },
        { name: "electromyography", label: "Electromyography (μV)" },
        { name: "electrodermal_activity", label: "Electrodermal Activity (μS)" },
        { name: "respiration_rate", label: "Respiration Rate (BPM)" }
      ]
    },
    {
      title: "Burn Progress",
      description: "Document burn wound healing measurements",
      endpoint: "/burn-progress",
      fields: [
        { name: "wound_size", label: "Wound Size (cm²)" },
        { name: "epithelialization", label: "Epithelialization (%)" },
        { name: "exudate_amount", label: "Exudate Amount (ml)" },
        { name: "pain_level", label: "Pain Level (0-10)" },
        { name: "swelling", label: "Swelling (0-10)" }
      ]
    },
    {
      title: "Brain Monitoring",
      description: "Record EEG and brain activity metrics",
      endpoint: "/brain-monitoring",
      fields: [
        { name: "alpha_waves", label: "Alpha Waves (Hz)" },
        { name: "theta_waves", label: "Theta Waves (Hz)" },
        { name: "beta_waves", label: "Beta Waves (Hz)" },
        { name: "gamma_waves", label: "Gamma Waves (Hz)" },
        { name: "heart_rate", label: "Heart Rate (BPM)" }
      ]
    },
    {
      title: "Heart-Brain Synchronicity",
      description: "Measure heart and brain coherence data",
      endpoint: "/heart-brain-synchronicity",
      fields: [
        { name: "heart_rate_variability", label: "Heart Rate Variability (ms)" },
        { name: "alpha_waves", label: "Alpha Waves (Hz)" },
        { name: "respiratory_sinus_arrhythmia", label: "RSA (ms)" },
        { name: "coherence_ratio", label: "Coherence Ratio" },
        { name: "brainwave_coherence", label: "Brainwave Coherence (%)" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-health-secondary">Health Monitoring Dashboard</h1>
          <p className="text-gray-600">Control devices and monitor patient data</p>
        </header>
        
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-health-light p-2 rounded-md text-health-primary mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sliders"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>
            </div>
            <h2 className="text-xl font-semibold">Device Controls</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {deviceControls.map((device) => (
              <DeviceCard
                key={device.title}
                title={device.title}
                description={device.description}
                icon={device.icon}
                hasSlider={device.hasSlider}
                endpoint={device.endpoint}
                historyEndpoint={device.historyEndpoint}
                onViewHistory={handleViewHistory}
              />
            ))}
          </div>
        </section>
        
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-health-light p-2 rounded-md text-health-primary mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
            </div>
            <h2 className="text-xl font-semibold">Health Data Forms</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataForms.map((form) => (
              <DataForm
                key={form.title}
                title={form.title}
                description={form.description}
                fields={form.fields}
                endpoint={form.endpoint}
              />
            ))}
          </div>
        </section>
      </div>
      
      <HistoryModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        endpoint={modalData.endpoint}
      />
    </div>
  );
};

export default Dashboard;
