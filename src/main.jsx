import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/task9/RootLayout.jsx";
import NotFoundPage from "./components/task9/NotFound.jsx";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./components/task4/ErrorBoundary.jsx";

const MentorPage = lazy(() => import("./components/task9/MentorPage.jsx"));
const MenteePage = lazy(() => import("./components/task9/MenteePage.jsx"));
const FeedbackPage = lazy(() => import("./components/task9/Feedback.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<App />} />
            <Route
              path="/mentor"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MentorPage />
                </Suspense>
              }
            />
            <Route
              path="/mentee"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MenteePage />
                </Suspense>
              }
            />
            <Route
              path="/feedback"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FeedbackPage />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
