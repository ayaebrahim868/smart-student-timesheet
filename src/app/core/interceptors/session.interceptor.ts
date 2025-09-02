import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const sessionInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith(environment.apiBaseUrl)) return next(req);

    if (req.method === 'POST') {
    const body = req.body as { id?: string };
    const studentId = body?.id ?? '';
    const timestamp = Date.now().toString();

    const sessionID = btoa(`${timestamp}:${studentId}`);

    return next(req.clone({
      setHeaders: { sessionID }
    }));
  }

  return next(req);
};
