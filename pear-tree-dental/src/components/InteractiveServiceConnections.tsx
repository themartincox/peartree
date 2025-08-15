"use client";

import { Brain, Target, TrendingUp, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ServiceNode {
  id: string;
  title: string;
  icon: React.ReactNode;
  x: number;
  y: number;
  connections: string[];
}

const services: ServiceNode[] = [
  {
    id: "growth-marketing",
    title: "Growth Marketing",
    icon: <TrendingUp className="h-8 w-8" />,
    x: 20,
    y: 30,
    connections: ["ai-automation", "strategy", "analytics"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    icon: <Brain className="h-8 w-8" />,
    x: 80,
    y: 30,
    connections: ["growth-marketing", "strategy", "analytics"],
  },
  {
    id: "strategy",
    title: "Strategic Planning",
    icon: <Target className="h-8 w-8" />,
    x: 20,
    y: 70,
    connections: ["growth-marketing", "ai-automation", "analytics"],
  },
  {
    id: "analytics",
    title: "Performance Analytics",
    icon: <Zap className="h-8 w-8" />,
    x: 80,
    y: 70,
    connections: ["growth-marketing", "ai-automation", "strategy"],
  },
];

export default function InteractiveServiceConnections() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 300 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getConnectionPath = (from: ServiceNode, to: ServiceNode) => {
    const fromX = (from.x / 100) * dimensions.width;
    const fromY = (from.y / 100) * dimensions.height;
    const toX = (to.x / 100) * dimensions.width;
    const toY = (to.y / 100) * dimensions.height;

     Create a curved path for more organic feel
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    const controlX = midX + (Math.random() - 0.5) * 50;
    const controlY = midY + (Math.random() - 0.5) * 50;

    return `M ${fromX} ${fromY} Q ${controlX} ${controlY} ${toX} ${toY}`;
  };

  const isConnectionActive = (fromId: string, toId: string) => {
    return hoveredService === fromId || hoveredService === toId;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 bg-gradient-to-br from-midnight-blue to-forest-green rounded-2xl overflow-hidden"
    >
      {/* SVG Connections */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {services.map((service) =>
          service.connections.map((connectionId) => {
            const connectedService = services.find(
              (s) => s.id === connectionId,
            );
            if (!connectedService) return null;

            const isActive = isConnectionActive(service.id, connectionId);

            return (
              <path
                key={`${service.id}-${connectionId}`}
                d={getConnectionPath(service, connectedService)}
                stroke="url(#connectionGradient)"
                strokeWidth={isActive ? "3" : "1"}
                fill="none"
                opacity={isActive ? 1 : 0.3}
                filter={isActive ? "url(#glow)" : "none"}
                className={`transition-all duration-300 ${
                  isActive ? "animate-pulse" : ""
                }`}
                strokeDasharray={isActive ? "0" : "5,5"}
                style={{
                  animationDuration: isActive ? "2s" : "0s",
                }}
              />
            );
          }),
        )}
      </svg>

      {/* Service Nodes */}
      {services.map((service) => (
        <div
          key={service.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
            hoveredService === service.id
              ? "scale-110 z-10"
              : hoveredService && hoveredService !== service.id
                ? "scale-95 opacity-60"
                : "scale-100"
          }`}
          style={{
            left: `${service.x}%`,
            top: `${service.y}%`,
          }}
          onMouseEnter={() => setHoveredService(service.id)}
          onMouseLeave={() => setHoveredService(null)}
        >
          <div
            className={`
            w-20 h-20 rounded-full flex items-center justify-center text-white transition-all duration-300
            ${
              hoveredService === service.id
                ? "bg-gradient-to-r from-blue-600 to-forest-green shadow-2xl"
                : "bg-gradient-to-r from-midnight-blue to-blue-600 shadow-lg hover:shadow-xl"
            }
          `}
          >
            {service.icon}
          </div>
          <div
            className={`
            mt-2 text-center text-sm font-semibold transition-all duration-300
            ${hoveredService === service.id ? "text-midnight-blue" : "text-gray-600"}
          `}
          >
            {service.title}
          </div>
        </div>
      ))}

      {/* Floating Particles */}
      {hoveredService && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
