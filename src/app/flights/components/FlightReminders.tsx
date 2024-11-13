import React, { useEffect, useState } from "react";
import { flightReminders } from "@/data/remindersData";

import { Icon } from "@iconify/react";

const getRandomReminder = () => {
  const randomIndex = Math.floor(Math.random() * flightReminders.length);
  return flightReminders[randomIndex];
};

const FlightReminders = () => {
  const [reminder, setReminder] = useState<string>("");

  useEffect(() => {
    setReminder(getRandomReminder());
  }, []);

  return (
    <div className="flight-reminders">
      <div className="flight-reminders-icon">
        <Icon icon="mdi:alert-octagon-outline" />
      </div>
      <div className="flight-reminders-content">
        <span className="flight-reminders-label">Reminder</span>
        <p className="flight-reminders-text">{reminder}</p>
      </div>
    </div>
  );
};

export default FlightReminders;
