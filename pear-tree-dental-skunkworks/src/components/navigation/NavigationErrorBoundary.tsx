"use client";

import React from 'react';

interface NavigationErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface NavigationErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class NavigationErrorBoundary extends React.Component<
  NavigationErrorBoundaryProps,
  NavigationErrorBoundaryState
> {
  constructor(props: NavigationErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): NavigationErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[Navigation Error]:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="pt-4 border-t border-gray-200">
          <div className="text-center p-4 text-gray-500">
            <div className="text-sm text-red-600">Navigation temporarily unavailable</div>
            <div className="text-xs mt-1 opacity-75">Please refresh the page</div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default NavigationErrorBoundary;
