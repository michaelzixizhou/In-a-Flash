import React from "react";

function FlashCard({ term, definition, author, school, course }) {
  return (
    <div className="cue-card">
      <div className="cue-card-term">{term}</div>
      <div className="cue-card-definition">{definition}</div>
      <div className="author">{author}</div>
      <div className="school">{school}</div>
      <div className="course">{course}</div>
    </div>
  );
}

export default FlashCard;
