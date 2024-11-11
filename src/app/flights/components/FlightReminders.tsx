import React, { useEffect, useState } from "react";
import { flightReminders } from "@/data/remindersData";

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
      <h4>Travel Reminder</h4>
      <p>{reminder}</p>
    </div>
  );
};

export default FlightReminders;
