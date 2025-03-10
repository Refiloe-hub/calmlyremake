import { useState } from "react";

const TrackProgress = () => {
  const [entries, setEntries] = useState([]);
  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const moods = ["Happy", "Sad", "Anxious", "Excited", "Stressed", "Calm","Depressed","Feeling Better","Worried",];

  const handleAddEntry = () => {
    if (!mood) return;
    setEntries([...entries, { mood, notes, date: new Date().toLocaleDateString() }]);
    setMood("");
    setNotes("");
  };

  const filteredEntries = filterDate
    ? entries.filter(entry => entry.date === filterDate)
    : entries;

  const moodCounts = entries.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="track-progress">
      <h3>Step 3: Track Progress</h3>
      <p>Monitor your mental health journey with our easy-to-use tools.</p>
      
      {/* Mood Selection */}
      <select value={mood} onChange={(e) => setMood(e.target.value)} className="mood-select">
        <option value="">Select your mood</option>
        {moods.map((m, index) => (
          <option key={index} value={m}>{m}</option>
        ))}
      </select>
      
      {/* Notes Input */}
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write notes about your day..."
        className="notes-input"
      ></textarea>
      
      {/* Log Button */}
      <button onClick={handleAddEntry} className="log-button">Log Mood</button>
      
      {/* Filter by Date */}
      <input
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        className="date-filter"
      />
      
      {/* Mood Entries */}
      <ul className="entries-list">
        {filteredEntries.map((entry, index) => (
          <li key={index} className="entry-item">
            <strong>{entry.date}</strong>: {entry.mood} {entry.notes && `- ${entry.notes}`}
          </li>
        ))}
      </ul>
      
      {/* Mood Analytics */}
      <div className="mood-summary">
        <h4>Mood Summary</h4>
        {Object.entries(moodCounts).map(([mood, count]) => (
          <p key={mood}>{mood}: {count} times</p>
        ))}
      </div>
      
      {/* Styling */}
      <style>
        {`
          .track-progress {
            background-color: #40ADA8;
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            margin: auto;
            margin-top: 50px; /* Adds space below the header */
          }
          .mood-select, .notes-input, .date-filter {
            width: 100%;
            padding: 8px;
            margin: 20px 0;
            border-radius: 5px;
            border: none;
          }
          .log-button {
            background-color: #007bff;
            color: white;
            padding: 8px 12px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .entries-list {
            list-style-type: none;
            padding: 0;
          }
          .entry-item {
            background: white;
            color: black;
            padding: 5px;
            border-radius: 5px;
            margin-top: 5px;
          }
          .mood-summary {
            margin-top: 20px;
            background: white;
            color: black;
            padding: 10px;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default TrackProgress;
