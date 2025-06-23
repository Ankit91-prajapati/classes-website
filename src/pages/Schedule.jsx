import React from "react";

const scheduleData = [
  {
    day: "Monday",
    schedule: [
      { time: "8:00 AM - 9:00 AM", subject: "Maths", batch: "NEET-11" },
      { time: "9:15 AM - 10:15 AM", subject: "Physics", batch: "IIT-12" },
      { time: "10:30 AM - 11:30 AM", subject: "Biology", batch: "NEET-10" },
    ],
  },
  {
    day: "Tuesday",
    schedule: [
      { time: "8:00 AM - 9:00 AM", subject: "Chemistry", batch: "IIT-11" },
      { time: "9:15 AM - 10:15 AM", subject: "Maths", batch: "NEET-12" },
    ],
  },
  {
    day: "Wednesday",
    schedule: [
      { time: "8:00 AM - 9:00 AM", subject: "Biology", batch: "NEET-10" },
      { time: "9:15 AM - 10:15 AM", subject: "Physics", batch: "IIT-11" },
    ],
  },
  {
    day: "Thursday",
    schedule: [
      { time: "9:15 AM - 10:15 AM", subject: "Maths", batch: "NEET-11" },
    ],
  },
  {
    day: "Friday",
    schedule: [
      { time: "8:00 AM - 9:00 AM", subject: "Chemistry", batch: "IIT-12" },
      { time: "10:30 AM - 11:30 AM", subject: "Biology", batch: "NEET-12" },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">Class Schedule</h1>

      <div className="max-w-5xl mx-auto space-y-6">
        {scheduleData.map((day) => (
          <div key={day.day}>
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">{day.day}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-indigo-100 text-left text-sm text-indigo-800">
                    <th className="p-3">Time</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {day.schedule.map((slot, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-3">{slot.time}</td>
                      <td className="p-3">{slot.subject}</td>
                      <td className="p-3">{slot.batch}</td>
                    </tr>
                  ))}
                  {day.schedule.length === 0 && (
                    <tr>
                      <td className="p-3 text-gray-500" colSpan="3">
                        No classes scheduled
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
