type StorageType = "local" | "session";

class StorageService {
  private getStorage(type: StorageType): Storage {
    return type === "local" ? localStorage : sessionStorage;
  }

  set(key: string, value: unknown, type: StorageType = "local"): void {
    try {
      const storage = this.getStorage(type);
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to storage:", error);
    }
  }

  get<T>(key: string, type: StorageType = "local"): T | null {
    try {
      const storage = this.getStorage(type);
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading from storage:", error);
      return null;
    }
  }

  remove(key: string, type: StorageType = "local"): void {
    const storage = this.getStorage(type);
    storage.removeItem(key);
  }

  clear(type: StorageType = "local"): void {
    const storage = this.getStorage(type);
    storage.clear();
  }
}

export const storageService = new StorageService();
