
import { useState } from "react";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DeviceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
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
  const [temperature, setTemperature] = useState("72");
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async (checked: boolean) => {
    setIsLoading(true);
    setIsOn(checked);
    
    try {
      // In a real app, this would be an API call
      console.log(`Setting ${title} to ${checked ? 'ON' : 'OFF'}`);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      toast.success(`${title} turned ${checked ? 'ON' : 'OFF'}`);
    } catch (error) {
      console.error(`Failed to toggle ${title}:`, error);
      toast.error(`Failed to toggle ${title}`);
      setIsOn(!checked); // Revert on error
    } finally {
      setIsLoading(false);
    }
  };

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d+$/.test(value)) {
      setTemperature(value);
    }
  };

  const handleTemperatureSubmit = async () => {
    setIsLoading(true);
    
    try {
      // In a real app, this would be an API call
      console.log(`Setting ${title} temperature to ${temperature}°F`);
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      toast.success(`${title} temperature set to ${temperature}°F`);
    } catch (error) {
      console.error(`Failed to set ${title} temperature:`, error);
      toast.error(`Failed to set ${title} temperature`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewHistory = () => {
    onViewHistory(title, historyEndpoint);
  };

  return (
    <div className="device-card">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="mr-3 text-health-primary">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
        
        {!hasSlider && (
          <div className="flex items-center">
            <span className="text-xs mr-2 text-foreground/70">
              {isOn ? "ON" : "OFF"}
            </span>
            <Switch 
              checked={isOn} 
              onCheckedChange={handleToggle} 
              disabled={isLoading}
            />
          </div>
        )}
      </div>
      
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      
      {hasSlider && (
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={temperature}
              onChange={handleTemperatureChange}
              className="w-20 text-right"
              disabled={isLoading}
              aria-label="Temperature"
            />
            <span className="text-foreground/70">°F</span>
            <Button 
              size="sm" 
              onClick={handleTemperatureSubmit} 
              disabled={isLoading}
            >
              Set
            </Button>
          </div>
        </div>
      )}
      
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleViewHistory}
          disabled={isLoading}
        >
          View History
        </Button>
      </div>
    </div>
  );
};

export default DeviceCard;
