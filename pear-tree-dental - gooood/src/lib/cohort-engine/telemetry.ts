// src/lib/telemetry.ts
import fs from 'fs';
import path from 'path';

// Telemetry entry type
export interface TelemetryEntry {
  timestamp: string;
  service: string;
  originIp: string;
  userAgent: string;
  destination: string;
  geoCity?: string;
  geoRegion?: string;
  geoCountry?: string;
}

// In-memory telemetry store (would use a database in production)
let telemetryData: TelemetryEntry[] = [];
const MAX_IN_MEMORY_ENTRIES = 1000;

// File paths for telemetry data
const TELEMETRY_DIR = path.join(process.cwd(), 'data', 'telemetry');
const CURRENT_LOG_FILE = path.join(TELEMETRY_DIR, `redirect-log-${new Date().toISOString().split('T')[0]}.json`);

// Initialize telemetry
export function initTelemetry() {
  // Ensure telemetry directory exists
  if (!fs.existsSync(TELEMETRY_DIR)) {
    try {
      fs.mkdirSync(TELEMETRY_DIR, { recursive: true });
    } catch (error) {
      console.error('Error creating telemetry directory:', error);
    }
  }

  // Load today's log file if it exists
  try {
    if (fs.existsSync(CURRENT_LOG_FILE)) {
      const data = fs.readFileSync(CURRENT_LOG_FILE, 'utf8');
      telemetryData = JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading telemetry data:', error);
  }
}

// Save telemetry data to file
function saveTelemetryData() {
  try {
    fs.writeFileSync(CURRENT_LOG_FILE, JSON.stringify(telemetryData, null, 2));
  } catch (error) {
    console.error('Error saving telemetry data:', error);
  }
}

// Anonymize IP address (remove last octet)
function anonymizeIp(ip: string): string {
  return ip.split('.').slice(0, 3).join('.') + '.xxx';
}

// Log a redirect
export function logRedirect(entry: Omit<TelemetryEntry, 'timestamp'>) {
  // Add timestamp
  const telemetryEntry: TelemetryEntry = {
    ...entry,
    timestamp: new Date().toISOString(),
    // Anonymize IP for privacy
    originIp: anonymizeIp(entry.originIp),
  };

  // Add to in-memory store
  telemetryData.push(telemetryEntry);

  // If we have too many entries, save to file and clear memory
  if (telemetryData.length >= MAX_IN_MEMORY_ENTRIES) {
    saveTelemetryData();

    // Keep the last 100 entries in memory
    telemetryData = telemetryData.slice(-100);
  }
}

// Get all telemetry data
export function getTelemetryData(): TelemetryEntry[] {
  return [...telemetryData]; // Return a copy
}

// Get telemetry summary by service
export function getTelemetrySummaryByService(): Record<string, number> {
  const summary: Record<string, number> = {};

  for (const entry of telemetryData) {
    const service = entry.service;
    summary[service] = (summary[service] || 0) + 1;
  }

  return summary;
}

// Get telemetry summary by destination
export function getTelemetrySummaryByDestination(): Record<string, number> {
  const summary: Record<string, number> = {};

  for (const entry of telemetryData) {
    const destination = entry.destination;
    summary[destination] = (summary[destination] || 0) + 1;
  }

  return summary;
}

// Get telemetry summary by geo location
export function getTelemetrySummaryByGeo(): Record<string, number> {
  const summary: Record<string, number> = {};

  for (const entry of telemetryData) {
    if (entry.geoCity) {
      const geoLocation = entry.geoCity;
      summary[geoLocation] = (summary[geoLocation] || 0) + 1;
    }
  }

  return summary;
}

// Export telemetry data as CSV
export function exportTelemetryAsCSV(): string {
  const headers = [
    'timestamp',
    'service',
    'originIp',
    'userAgent',
    'destination',
    'geoCity',
    'geoRegion',
    'geoCountry',
  ].join(',');

  const rows = telemetryData.map(entry => {
    return [
      entry.timestamp,
      entry.service,
      entry.originIp,
      `"${(entry.userAgent || '').replace(/"/g, '""')}"`, // Escape quotes in CSV
      entry.destination,
      entry.geoCity || '',
      entry.geoRegion || '',
      entry.geoCountry || '',
    ].join(',');
  });

  return [headers, ...rows].join('\n');
}

// Initialize telemetry on module load (if not SSR)
if (typeof window === 'undefined') {
  // Server-side only
  initTelemetry();

  // Set up interval to save data every 5 minutes
  setInterval(saveTelemetryData, 5 * 60 * 1000);

  // Save data on process exit
  process.on('beforeExit', saveTelemetryData);
}
