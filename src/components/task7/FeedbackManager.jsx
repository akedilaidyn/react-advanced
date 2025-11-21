import { Button, Field, Input } from "../shared";
import { useFeedback } from "./useFeedback";

export default function FeedbackManager() {
  const {
    state,
    feedback,
    setFeedback,
    handleAddFeedback,
    editingId,
    newFeedback,
    setNewFeedback,
    startEdit,
    saveEdit,
    cancelEdit,
    deleteFeedback,
  } = useFeedback();

  return (
    <div className="max-w-lg mx-auto">
      <h3 className="font-semibold">Feedback Manager</h3>
      <Field>
        <Input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button onClick={handleAddFeedback}>Add Feedback</Button>
      </Field>
      <ul className="mt-8">
        {state.feedbacks.map((fb) => (
          <li key={fb.id} className="flex justify-between items-center">
            {editingId === fb.id ? (
              <div className="w-full justify-between flex items-center ">
                <Input
                  type="text"
                  value={newFeedback}
                  onChange={(e) => setNewFeedback(e.target.value)}
                />
                <Button onClick={() => saveEdit(fb.id)}>Save</Button>
                <Button onClick={() => cancelEdit()}>Cancel</Button>
              </div>
            ) : (
              <div className="w-full justify-between flex items-center">
                <span className="mb-2">{fb.feedback}</span>
                <div className="flex gap-2">
                  <Button onClick={() => startEdit(fb.id, fb.feedback)}>
                    Edit
                  </Button>
                  <Button color="red" onClick={() => deleteFeedback(fb.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
