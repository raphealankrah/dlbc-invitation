"use client";
import React, { useEffect, useState } from "react";

const getNextSundayString = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilSunday = (7 - dayOfWeek) % 7 || 7;
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);

  return nextSunday.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default function NextSundayDate() {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(getNextSundayString());
  }, []);

  return <>{date}</>;
}
