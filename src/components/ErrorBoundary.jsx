import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log details for debugging in production
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-bg-primary text-text-primary p-6 font-mono text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h1 className="text-xl font-bold text-accent mb-2">Something went wrong.</h1>
          <p className="text-xs text-text-muted-dark max-w-md mb-6 leading-relaxed">
            An unexpected client-side error occurred. Please try reloading the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-accent text-white font-mono text-[11px] font-bold uppercase tracking-[0.15em] hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
          >
            Reload Portfolio
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
