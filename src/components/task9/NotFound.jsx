import { Link } from "react-router";
import { Button } from "../shared";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  );
}
