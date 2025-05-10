
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import { Eye } from "lucide-react";

interface DeviceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  hasSlider?: boolean;
  endpoint: string;
  historyEndpoint: string;
  onViewHistory: (title: string, endpoint: string) => void;
}

const DeviceCard = ({
  title,
  description,
  icon,
  hasSlider = false,
  endpoint,
  historyEndpoint,
  onViewHistory
}: DeviceCardProps) => {
  const [isOn, setIsOn] = useState(false);
  const [value, setValue] = useState([50]);

  const handleToggle = (checked: boolean) => {
    setIsOn(checked);
    
    // In a real app, this would be an API call
    console.log(`Setting ${title} to ${checked ? 'ON' : 'OFF'}`);
    toast.success(`${title} turned ${checked ? 'ON' : 'OFF'}`);
    
    // Mock API call
    const mockPayload = {
      status: checked,
      value: hasSlider ? value[0] : null
    };
    
    console.log(`POST to ${endpoint}:`, mockPayload);
  };

  const handleSliderChange = (newValue: number[]) => {
    setValue(newValue);
    
    if (isOn) {
      // In a real app, this would be an API call
      console.log(`Adjusting ${title} to ${newValue[0]}%`);
      
      // Mock API call
      const mockPayload = {
        status: isOn,
        value: newValue[0]
      };
      
      console.log(`POST to ${endpoint}:`, mockPayload);
    }
  };

  const handleView = () => {
    onViewHistory(title, historyEndpoint);
  };

  return (
    <div className="device-card flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-3 bg-health-light p-2 rounded-md text-health-primary">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <Switch 
          checked={isOn} 
          onCheckedChange={handleToggle} 
          className="data-[state=checked]:bg-health-accent"
        />
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      {hasSlider && (
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>0%</span>
            <span>{value[0]}%</span>
            <span>100%</span>
          </div>
          <Slider
            disabled={!isOn}
            value={value}
            onValueChange={handleSliderChange}
            max={100}
            step={1}
            className={`${isOn ? 'bg-health-light' : 'bg-gray-100'}`}
          />
        </div>
      )}
      
      <div className="mt-auto pt-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex items-center justify-center gap-2 border-health-primary text-health-primary hover:bg-health-light hover:text-health-primary"
          onClick={handleView}
        >
          <Eye size={16} />
          View History
        </Button>
      </div>
    </div>
  );
};

export default DeviceCard;
