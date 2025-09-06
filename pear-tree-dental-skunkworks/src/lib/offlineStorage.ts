// Offline Storage Utilities for PWA
// Handles storing form submissions when offline and syncing when back online

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
}

interface MembershipData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  planName: string;
  planPrice: string;
}

interface StoredRequest {
  id: string;
  type: 'contact-form' | 'appointment' | 'membership';
  data: ContactFormData | AppointmentData | MembershipData;
  timestamp: number;
  retryCount: number;
}

interface OfflineDB {
  name: string;
  version: number;
  stores: {
    requests: {
      keyPath: 'id';
      indexes: ['timestamp', 'type'];
    };
  };
}

class OfflineStorageManager {
  private dbName = 'PearTreeDentalOffline';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDB();
  }

  private async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        console.warn('[OfflineStorage] IndexedDB not available');
        resolve();
        return;
      }

      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => {
        console.error('[OfflineStorage] Database error:', request.error);
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('[OfflineStorage] Database initialized successfully');
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create requests store
        if (!db.objectStoreNames.contains('requests')) {
          const store = db.createObjectStore('requests', { keyPath: 'id' });
          store.createIndex('timestamp', 'timestamp', { unique: false });
          store.createIndex('type', 'type', { unique: false });
          console.log('[OfflineStorage] Created requests store');
        }
      };
    });
  }

  async storeRequest(type: StoredRequest['type'], data: ContactFormData | AppointmentData | MembershipData): Promise<string> {
    if (!this.db) {
      await this.initDB();
    }

    const id = `${type}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const request: StoredRequest = {
      id,
      type,
      data,
      timestamp: Date.now(),
      retryCount: 0
    };

    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not available'));
        return;
      }

      const transaction = this.db.transaction(['requests'], 'readwrite');
      const store = transaction.objectStore('requests');
      const addRequest = store.add(request);

      addRequest.onsuccess = () => {
        console.log(`[OfflineStorage] Stored ${type} request:`, id);
        resolve(id);
      };

      addRequest.onerror = () => {
        console.error(`[OfflineStorage] Failed to store ${type} request:`, addRequest.error);
        reject(addRequest.error);
      };
    });
  }

  async getStoredRequests(type?: StoredRequest['type']): Promise<StoredRequest[]> {
    if (!this.db) {
      await this.initDB();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        resolve([]);
        return;
      }

      const transaction = this.db.transaction(['requests'], 'readonly');
      const store = transaction.objectStore('requests');

      let request: IDBRequest;
      if (type) {
        const index = store.index('type');
        request = index.getAll(type);
      } else {
        request = store.getAll();
      }

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        console.error('[OfflineStorage] Failed to get stored requests:', request.error);
        reject(request.error);
      };
    });
  }

  async removeRequest(id: string): Promise<void> {
    if (!this.db) {
      await this.initDB();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        resolve();
        return;
      }

      const transaction = this.db.transaction(['requests'], 'readwrite');
      const store = transaction.objectStore('requests');
      const deleteRequest = store.delete(id);

      deleteRequest.onsuccess = () => {
        console.log('[OfflineStorage] Removed request:', id);
        resolve();
      };

      deleteRequest.onerror = () => {
        console.error('[OfflineStorage] Failed to remove request:', deleteRequest.error);
        reject(deleteRequest.error);
      };
    });
  }

  async incrementRetryCount(id: string): Promise<void> {
    if (!this.db) {
      await this.initDB();
    }

    return new Promise((resolve, reject) => {
      if (!this.db) {
        resolve();
        return;
      }

      const transaction = this.db.transaction(['requests'], 'readwrite');
      const store = transaction.objectStore('requests');
      const getRequest = store.get(id);

      getRequest.onsuccess = () => {
        const request = getRequest.result;
        if (request) {
          request.retryCount += 1;
          const updateRequest = store.put(request);

          updateRequest.onsuccess = () => resolve();
          updateRequest.onerror = () => reject(updateRequest.error);
        } else {
          resolve();
        }
      };

      getRequest.onerror = () => {
        reject(getRequest.error);
      };
    });
  }

  async clearOldRequests(maxAge: number = 7 * 24 * 60 * 60 * 1000): Promise<void> {
    if (!this.db) {
      await this.initDB();
    }

    const cutoffTime = Date.now() - maxAge;
    const requests = await this.getStoredRequests();

    for (const request of requests) {
      if (request.timestamp < cutoffTime || request.retryCount > 5) {
        await this.removeRequest(request.id);
      }
    }
  }
}

// Singleton instance
export const offlineStorage = new OfflineStorageManager();

// Utility functions for common operations
export async function storeContactForm(formData: ContactFormData): Promise<string> {
  return offlineStorage.storeRequest('contact-form', formData);
}

export async function storeAppointmentRequest(appointmentData: AppointmentData): Promise<string> {
  return offlineStorage.storeRequest('appointment', appointmentData);
}

export async function storeMembershipSignup(membershipData: MembershipData): Promise<string> {
  return offlineStorage.storeRequest('membership', membershipData);
}

export async function syncOfflineRequests(): Promise<void> {
  if (!navigator.onLine) {
    console.log('[OfflineStorage] Device is offline, skipping sync');
    return;
  }

  try {
    const requests = await offlineStorage.getStoredRequests();
    console.log(`[OfflineStorage] Syncing ${requests.length} offline requests`);

    for (const request of requests) {
      try {
        let endpoint = '';
        switch (request.type) {
          case 'contact-form':
            endpoint = '/api/contact';
            break;
          case 'appointment':
            endpoint = '/api/appointments';
            break;
          case 'membership':
            endpoint = '/api/membership';
            break;
          default:
            continue;
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(request.data)
        });

        if (response.ok) {
          await offlineStorage.removeRequest(request.id);
          console.log(`[OfflineStorage] Successfully synced ${request.type} request`);
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`[OfflineStorage] Failed to sync ${request.type} request:`, error);
        await offlineStorage.incrementRetryCount(request.id);
      }
    }

    // Clean up old requests
    await offlineStorage.clearOldRequests();
  } catch (error) {
    console.error('[OfflineStorage] Sync failed:', error);
  }
}

// Hook for React components to use offline storage
export function useOfflineStorage() {
  const isOnline = typeof window !== 'undefined' ? navigator.onLine : true;

  const submitForm = async (type: StoredRequest['type'], data: ContactFormData | AppointmentData | MembershipData) => {
    if (isOnline) {
      // Try direct submission first
      try {
        let endpoint = '';
        switch (type) {
          case 'contact-form':
            endpoint = '/api/contact';
            break;
          case 'appointment':
            endpoint = '/api/appointments';
            break;
          case 'membership':
            endpoint = '/api/membership';
            break;
          default:
            throw new Error('Unknown form type');
        }

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          return { success: true, offline: false };
        }
        throw new Error(`HTTP ${response.status}`);
      } catch (error) {
        console.warn('[OfflineStorage] Direct submission failed, storing offline:', error);
      }
    }

    // Store offline if direct submission failed or if offline
    const id = await offlineStorage.storeRequest(type, data);

    // Try to register background sync
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      try {
        const registration = await navigator.serviceWorker.ready;
        // TypeScript doesn't have full sync API types, so we'll use any for this specific case
        await (registration as any).sync.register(`${type}-sync`);
        console.log(`[OfflineStorage] Background sync registered for ${type}`);
      } catch (error) {
        console.warn('[OfflineStorage] Background sync registration failed:', error);
      }
    }

    return { success: true, offline: true, id };
  };

  return {
    submitForm,
    syncOfflineRequests,
    isOnline
  };
}

// Auto-sync when coming back online
if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    console.log('[OfflineStorage] Device back online, syncing requests');
    syncOfflineRequests();
  });
}
