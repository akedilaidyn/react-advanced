export function feedbackReducer(state, action) {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
      };
    case "EDIT_FEEDBACK":
      return {
        ...state,
        feedbacks: state.feedbacks.map((fb) =>
          fb.id === action.payload.id ? { ...fb, feedback: action.payload.feedback } : fb
        ),
      };
    case "DELETE_FEEDBACK":
      return {
        ...state,
        feedbacks: state.feedbacks.filter((fb) => fb.id !== action.payload.id),
      };
    default:
      return state;
  }
}
