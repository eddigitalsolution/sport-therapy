export const SOFEA_PHONE = "601119917397";
export const SOFEA_DISPLAY_PHONE = "011 1991 7397";

export interface BookingDetails {
  service?: string;
  price?: string;
  duration?: string;
  sport?: string;
  targetArea?: string;
}

/**
 * Builds direct WhatsApp click-to-chat URL with structured message
 */
export function getWhatsAppBookingUrl(details?: BookingDetails): string {
  let message = `Hi Sofea, I'd like to book a Sport Massage session.`;

  if (details?.service) {
    message += `\n\nService: ${details.service}`;
    if (details.price) {
      message += ` (${details.price})`;
    }
  }

  if (details?.sport) {
    message += `\nSport / Activity: ${details.sport}`;
  }

  if (details?.targetArea) {
    message += `\nFocus Area: ${details.targetArea}`;
  }

  message += `\n\nPreferred date:\nPreferred time:\n\nPlease let me know the available slot. Thank you!`;

  return `https://wa.me/${SOFEA_PHONE}?text=${encodeURIComponent(message)}`;
}
