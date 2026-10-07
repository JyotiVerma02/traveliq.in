# TravelIQ Admin Dashboard

Admin sign-in is available at `/admin/login/`. A valid session opens `/admin/dashboard/` and expires after eight hours. The session is a signed, HTTP-only, same-site cookie; credentials are checked on the server.

The dashboard is dark-only and reads registration leads from the `Registration Leads` sheet and contact enquiries from `Contact Leads`. Search, status filtering, and date filtering run against loaded lead data. Lead details show the available source fields. Status and internal notes are written to a separate `Admin Lead Metadata` sheet, leaving the public lead sheet columns unchanged. The service account must have read/write access to the spreadsheet; the metadata tab is created on the first dashboard data load if it does not exist.

CSV export is shown as a disabled placeholder while export support is pending. Google Sheets access is kept in server-only code so it can later be replaced behind the same dashboard and API contract.

## Configure local sign-in

Set these server-only variables in `.env.local`:

```text
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD_HASH=scrypt$<salt-hex>$<hash-hex>
AUTH_SECRET=<at-least-32-random-bytes>
```

Generate the password hash in an interactive terminal. Input is hidden:

```bash
node scripts/hash-admin-password.mjs
```

The script prints a raw hash for Vercel and an escaped hash for `.env.local`. Use the matching version: Next.js expands unescaped `$` characters in local env files, which can corrupt the scrypt hash.

Generate a signing secret:

```bash
node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"
```

Use a unique admin password and signing secret in Vercel. Do not prefix these values with `NEXT_PUBLIC_`. Restart the development server after changing `.env.local`.

If a required value is missing or malformed, the login page still loads, but the sign-in API returns a generic temporary-unavailable message.

## Routes

- `/admin/login/` - public login page
- `/admin/dashboard/` - dark lead-management dashboard; requires a valid admin session
- `/api/admin/login/` - validates credentials and creates the session cookie
- `/api/admin/logout/` - expires the session cookie
- `/api/admin/leads/` - reads leads and updates admin-only status and notes; requires a valid session
