export interface Appliance {
  id: string;
  name: string;
  wattage: number;
  surge: number;
  category: string;
  icon: string;
  isHeavyDuty: boolean;
}

export interface ApplianceWithQuantity extends Appliance {
  quantity: number;
}

export const applianceCategories = [
  { id: 'lighting', name: 'Lighting', icon: 'Lightbulb' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Tv' },
  { id: 'kitchen', name: 'Kitchen', icon: 'UtensilsCrossed' },
  { id: 'cooling', name: 'Cooling', icon: 'Fan' },
  { id: 'office', name: 'Office & Work', icon: 'Monitor' },
  { id: 'heavy-duty', name: 'Heavy Duty (Select One Only)', icon: 'Zap' },
];

export const appliances: Appliance[] = [
  // Lighting (under 500W)
  { id: 'led_bulb', name: 'LED Bulb (9W)', wattage: 9, surge: 1, category: 'lighting', icon: 'Lightbulb', isHeavyDuty: false },
  { id: 'fluorescent', name: 'Fluorescent Tube', wattage: 40, surge: 1.2, category: 'lighting', icon: 'Lightbulb', isHeavyDuty: false },
  { id: 'outdoor_light', name: 'Outdoor Light', wattage: 60, surge: 1, category: 'lighting', icon: 'Sun', isHeavyDuty: false },

  // Entertainment (under 500W)
  { id: 'tv_32', name: 'LED TV 32"', wattage: 50, surge: 1, category: 'entertainment', icon: 'Tv', isHeavyDuty: false },
  { id: 'tv_55', name: 'LED TV 55"', wattage: 120, surge: 1, category: 'entertainment', icon: 'Tv', isHeavyDuty: false },
  { id: 'sound_system', name: 'Sound System', wattage: 100, surge: 1.5, category: 'entertainment', icon: 'Speaker', isHeavyDuty: false },
  { id: 'gaming_console', name: 'Gaming Console', wattage: 200, surge: 1, category: 'entertainment', icon: 'Gamepad2', isHeavyDuty: false },
  { id: 'decoder', name: 'Cable/Satellite Decoder', wattage: 25, surge: 1, category: 'entertainment', icon: 'Radio', isHeavyDuty: false },

  // Kitchen (under 500W)
  { id: 'blender', name: 'Blender', wattage: 400, surge: 3, category: 'kitchen', icon: 'Blend', isHeavyDuty: false },

  // Cooling (under 500W)
  { id: 'ceiling_fan', name: 'Ceiling Fan', wattage: 75, surge: 1.5, category: 'cooling', icon: 'Fan', isHeavyDuty: false },
  { id: 'standing_fan', name: 'Standing Fan', wattage: 55, surge: 1.5, category: 'cooling', icon: 'Fan', isHeavyDuty: false },

  // Office (under 500W)
  { id: 'laptop', name: 'Laptop', wattage: 65, surge: 1, category: 'office', icon: 'Laptop', isHeavyDuty: false },
  { id: 'desktop', name: 'Desktop Computer', wattage: 250, surge: 1.5, category: 'office', icon: 'Monitor', isHeavyDuty: false },
  { id: 'printer', name: 'Printer', wattage: 150, surge: 2, category: 'office', icon: 'Printer', isHeavyDuty: false },
  { id: 'router', name: 'WiFi Router', wattage: 15, surge: 1, category: 'office', icon: 'Wifi', isHeavyDuty: false },
  { id: 'phone_charger', name: 'Phone Charger', wattage: 10, surge: 1, category: 'office', icon: 'Smartphone', isHeavyDuty: false },

  // Heavy Duty (500W and above - only one allowed)
  { id: 'ac_1hp', name: 'Air Conditioner 1 HP', wattage: 900, surge: 3, category: 'heavy-duty', icon: 'AirVent', isHeavyDuty: true },
  { id: 'ac_15hp', name: 'Air Conditioner 1.5 HP', wattage: 1200, surge: 3, category: 'heavy-duty', icon: 'AirVent', isHeavyDuty: true },
  { id: 'ac_2hp', name: 'Air Conditioner 2 HP', wattage: 1800, surge: 3, category: 'heavy-duty', icon: 'AirVent', isHeavyDuty: true },
  { id: 'refrigerator', name: 'Refrigerator', wattage: 500, surge: 3, category: 'heavy-duty', icon: 'Refrigerator', isHeavyDuty: true },
  { id: 'freezer', name: 'Deep Freezer', wattage: 600, surge: 3, category: 'heavy-duty', icon: 'Snowflake', isHeavyDuty: true },
  { id: 'microwave', name: 'Microwave Oven', wattage: 1200, surge: 2, category: 'heavy-duty', icon: 'Microwave', isHeavyDuty: true },
  { id: 'electric_kettle', name: 'Electric Kettle', wattage: 1500, surge: 1, category: 'heavy-duty', icon: 'Coffee', isHeavyDuty: true },
  { id: 'washing_machine', name: 'Washing Machine', wattage: 700, surge: 3, category: 'heavy-duty', icon: 'WashingMachine', isHeavyDuty: true },
  { id: 'iron', name: 'Electric Iron', wattage: 1200, surge: 1, category: 'heavy-duty', icon: 'Shirt', isHeavyDuty: true },
  { id: 'water_pump', name: 'Water Pump (1HP)', wattage: 750, surge: 3, category: 'heavy-duty', icon: 'Droplets', isHeavyDuty: true },
  { id: 'space_heater', name: 'Space Heater', wattage: 1500, surge: 1, category: 'heavy-duty', icon: 'Flame', isHeavyDuty: true },
  { id: 'toaster', name: 'Toaster', wattage: 800, surge: 1, category: 'heavy-duty', icon: 'Cookie', isHeavyDuty: true },
  { id: 'vacuum', name: 'Vacuum Cleaner', wattage: 1000, surge: 2, category: 'heavy-duty', icon: 'Wind', isHeavyDuty: true },
];

export const inverterSizes = [1.5, 2.5, 3.5, 5, 7.5, 10, 15, 20];
