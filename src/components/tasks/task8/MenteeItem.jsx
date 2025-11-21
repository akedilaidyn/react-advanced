import { memo } from "react";
import { heavyComputation } from "./utils/heavyComputation";
import { Button } from "../../shared";

const MenteeItem = memo(({ mentee, onRemove, onSelect }) => {
  console.log("render ", mentee.id);
  const score = heavyComputation(mentee.id);

  return (
    <li
      className="p-3 border border-gray-300 rounded mb-2 shadow-md"
      key={mentee.id}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{mentee.name}</h3>
          <p>Computed score: {score}</p>
          <ul className="mt-2">
            {mentee.feedbacks.map((feedback, index) => (
              <li key={index}>-{feedback}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <Button color="red" onClick={() => onRemove(mentee.id)}>
            Remove
          </Button>
          <Button onClick={() => onSelect(mentee.id)}>Select</Button>
        </div>
      </div>
    </li>
  );
});

export default MenteeItem;
