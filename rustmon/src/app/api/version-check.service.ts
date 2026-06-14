import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

export interface VersionInfo {
  hasUpdate: boolean;
  latestVersion: string | null;
  releaseUrl: string | null;
  currentVersion: string;
}

@Injectable({
  providedIn: 'root'
})
export class VersionCheckService {

  private readonly CURRENT_VERSION = '2.0.0';
  private readonly GITHUB_API = 'https://api.github.com/repos/downing-labs/RustMon/releases/latest';
  private readonly SESSION_KEY = 'rustmon_update_dismissed';

  constructor(private http: HttpClient) {}

  checkForUpdate(): Observable<VersionInfo> {
    return this.http.get<any>(this.GITHUB_API).pipe(
      timeout(5000),
      map(release => {
        const latest = (release.tag_name || '').replace(/^v/, '');
        const hasUpdate = latest ? this.isNewer(latest, this.CURRENT_VERSION) : false;
        return {
          hasUpdate,
          latestVersion: latest || null,
          releaseUrl: release.html_url || null,
          currentVersion: this.CURRENT_VERSION
        };
      }),
      catchError(() => of({
        hasUpdate: false,
        latestVersion: null,
        releaseUrl: null,
        currentVersion: this.CURRENT_VERSION
      }))
    );
  }

  getCurrentVersion(): string {
    return this.CURRENT_VERSION;
  }

  isDismissed(): boolean {
    return sessionStorage.getItem(this.SESSION_KEY) === 'true';
  }

  dismiss(): void {
    sessionStorage.setItem(this.SESSION_KEY, 'true');
  }

  private isNewer(remote: string, local: string): boolean {
    try {
      const r = remote.split('.').map(Number);
      const l = local.split('.').map(Number);
      for (let i = 0; i < 3; i++) {
        if ((r[i] || 0) > (l[i] || 0)) return true;
        if ((r[i] || 0) < (l[i] || 0)) return false;
      }
      return false;
    } catch {
      return false;
    }
  }
}
