import { useCallback, useState } from "react";
import MenteeItem from "./MenteeItem";
import { initialMenteesData } from "./const";

export default function MentorDashboard() {
  const [mentees, setMentees] = useState(initialMenteesData);
  const [selectedId, setSelectedId] = useState(null);

  const handleRemove = useCallback((id) => {
    setMentees((prev) => prev.filter((mentee) => mentee.id !== id));
  }, []);

  const handleSelect = useCallback((id) => {
    setSelectedId((selected) => (selected === id ? null : id));
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mentor Dashboard (Optimized)</h1>

      <ul>
        {mentees.map((mentee) => (
          <MenteeItem
            key={mentee.id}
            mentee={mentee}
            onRemove={handleRemove}
            onSelect={handleSelect}
          />
        ))}
      </ul>

      <div className="mt-6">
        <p>Selected ID: {selectedId ?? "none"}</p>
      </div>
    </section>
  );
}
