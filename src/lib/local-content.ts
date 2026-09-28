// Local content for the legacy page templates. Add migrated content here
// while the project is frontend-only; no network requests are made.
export interface LocalContent {
  id: number;
  slug: string;
  date: string;
  modified?: string;
  type: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
}

export const localContent: LocalContent[] = [
  {
    id: 20220606,
    slug: "if-your-irctc-user-id-is-linked-to-your-aadhaar-number-you-can-book-up-to-24-tickets-in-a-month",
    date: "2022-06-06T12:56:00",
    modified: "2026-09-25T00:00:00",
    type: "posts",
    title: {
      rendered: "IRCTC monthly ticket limit: Aadhaar-linked users can book up to 24 tickets",
    },
    excerpt: {
      rendered:
        "IRCTC allows eligible individual users to book up to 24 tickets per month after Aadhaar verification, with at least one Aadhaar-verified passenger on bookings above 12.",
    },
    content: {
      rendered: `
        <p>IRCTC's monthly booking limit depends on the account and passenger verification rules that apply to individual users. The IRCTC guidance states that an Aadhaar-authenticated user may book up to 24 tickets in a month when at least one passenger on each booking beyond the first 12 tickets is also Aadhaar-authenticated. Check IRCTC's current instructions before booking, as railway rules and platform workflows can change.</p>
        <h2>What the 24-ticket limit means</h2>
        <p>The 24-ticket facility is for a registered individual IRCTC user whose profile is Aadhaar-authenticated. For bookings beyond 12 tickets in a month, at least one passenger on the ticket must also meet the applicable Aadhaar verification requirement. The official process is described in the <a href="https://contents.irctc.co.in/en/BookUpto12ticketsinamonthbylinkingAadhaar.pdf" target="_blank" rel="noopener noreferrer">IRCTC guide to booking up to 24 tickets</a>.</p>
        <h2>How this differs from authorized agent bookings</h2>
        <p>This individual-user monthly ticket limit should not be treated as an authorized IRCTC agent quota. Authorized IRCTC agents operate under separate agent policies and commercial booking rules. Agents should follow the current instructions issued for their agent account and consult their Principal Service Provider when a policy question arises.</p>
        <p>TravelIQ provides agent onboarding information on its <a href="/irctc-agent-registration/">IRCTC agent registration page</a> and links to the <a href="/list-of-irctc-principal-service-providers/">IRCTC Principal Service Provider directory</a>.</p>
      `,
    },
  },
];

export function getPostBySlug(slug: string, postType = "posts") {
  return localContent.find((page) => page.slug === slug && page.type === postType) ?? null;
}

export function getContentBySlug(slug: string) {
  return localContent.find((page) => page.slug === slug) ?? null;
}
