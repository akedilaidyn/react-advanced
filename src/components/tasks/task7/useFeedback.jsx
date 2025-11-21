import { useReducer, useState } from "react";
import { feedbackReducer } from "./FeedbackReducer";
import { initialState } from "./const";

export const useFeedback = () => {
  const [state, dispatch] = useReducer(feedbackReducer, initialState);

  const [feedback, setFeedback] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [newFeedback, setNewFeedback] = useState("");

  const handleAddFeedback = () => {
    const trimmed = feedback.trim();
    if (!trimmed) return;
    dispatch({
      type: "ADD_FEEDBACK",
      payload: { id: Date.now(), feedback: trimmed },
    });
    setFeedback("");
  };

  const startEdit = (id, currentFeedback) => {
    setEditingId(id);
    setNewFeedback(currentFeedback ?? "");
  };

  const saveEdit = (id) => {
    const trimmed = newFeedback.trim();
    if (!trimmed) return;
    dispatch({ type: "EDIT_FEEDBACK", payload: { id, feedback: trimmed } });
    setNewFeedback("");
    setEditingId(null);
  };

  const cancelEdit = () => {
    setNewFeedback("");
    setEditingId(null);
  };

  const deleteFeedback = (id) => {
    dispatch({ type: "DELETE_FEEDBACK", payload: { id } });
  };

  return {
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
  };
};
