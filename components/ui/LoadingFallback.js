// components/ui/LoadingFallback.jsx
export default function LoadingFallback() {
    return (
      <div className="flex min-h-[200px] w-full items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }