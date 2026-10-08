# TravelIQ Admin Dashboard

Admin sign-in is available at `/admin/login/`. A valid session opens `/admin/dashboard/` and expires after eight hours. The session is a signed, HTTP-only, same-site cookie; credentials are checked on the server.

The dashboard opens on the Registration leads view, with separate Registration leads and Contact enquiries views in the sidebar and lead tabs. Each view has its own status totals and filters; All leads remains available from Overview. Registration records come from `Registration Leads`; contact records come from `Contact Leads`. Contact form submissions store name, subject, and message in columns F:H, while columns A:E keep their existing layout. The API adds the F:H headers when those columns are blank and accepts existing contact rows that only have A:E. Lead details are grouped by record type. Status, internal notes, and next follow-up dates are written to a separate `Admin Lead Metadata` sheet, leaving the submitted lead fields unchanged. The metadata sheet uses `Lead ID`, `Status`, `Note`, `Updated At`, `Updated By`, and `Follow Up Date` headers. Existing metadata sheets are extended with any missing metadata columns. Updates identify a source lead by its sheet row and a SHA-256 fingerprint of the row; if the row changes or moves after the details view loads, the update is rejected so another lead cannot be changed accidentally. The service account must have read/write access to the spreadsheet; the metadata tab is created on the first dashboard data load if it does not exist.

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
- `/api/admin/leads/` - reads leads and updates admin-only status, notes, and follow-up dates; requires a valid session
