import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <span className="text-7xl font-bold gradient-text">404</span>
      <h1 className="text-2xl font-semibold text-white mt-4">Page not found</h1>
      <p className="text-muted mt-2 max-w-sm">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button href="/" className="mt-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Button>
    </div>
  );
}
