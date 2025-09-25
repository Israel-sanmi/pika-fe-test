"use client";
import React, { useState } from "react";

type Day =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type Hours = {
  open: string;
  close: string;
  selected: boolean;
};

type Props = {
  onChange: (val: Record<Day, Hours>) => void;
};

const days: Day[] = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

// ✅ Convert "14:30" → "2:30 PM"
const formatTime = (time: string) => {
  if (!time) return "";
  const [h, m] = time.split(":").map(Number);
  const hour = h % 12 || 12;
  const ampm = h < 12 ? "AM" : "PM";
  return `${hour}:${m.toString().padStart(2, "0")} ${ampm}`;
};

const OperatingHoursSelector: React.FC<Props> = ({ onChange }) => {
  const [hours, setHours] = useState<Record<Day, Hours>>({} as any);

  const toggleDay = (day: Day) => {
    const updated = {
      ...hours,
      [day]: hours[day]
        ? { ...hours[day], selected: !hours[day].selected }
        : { open: "", close: "", selected: true },
    };
    setHours(updated);
    onChange(updated);
  };

  const setTime = (day: Day, type: "open" | "close", value: string) => {
    const updated = {
      ...hours,
      [day]: {
        ...hours[day],
        [type]: formatTime(value),
        selected: true,
      },
    };
    setHours(updated);
    onChange(updated);
  };

  return (
    <div className="space-y-1  font-inter">
      {days.map((day) => (
        <div key={day} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hours[day]?.selected || false}
            onChange={() => toggleDay(day)}
          />
          <span className="capitalize w-24">{day}</span>
          {hours[day]?.selected && (
            <>
              <input
                type="time"
                className="border rounded p-1 text-sm"
                onChange={(e) => setTime(day, "open", e.target.value)}
              />
              <span>-</span>
              <input
                type="time"
                className="border rounded p-1 text-sm"
                onChange={(e) => setTime(day, "close", e.target.value)}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default OperatingHoursSelector;
