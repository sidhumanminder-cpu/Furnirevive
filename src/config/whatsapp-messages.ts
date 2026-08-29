/**
 * Centralized WhatsApp messaging configuration.
 *
 * To add a new service (wardrobe, tv-unit, etc.):
 * 1. Add its key to WhatsAppService
 * 2. Add a config entry below
 * No changes to FloatingWhatsApp are needed.
 */

export type WhatsAppService =
  | "default"
  | "modular-kitchen"
  | "wardrobe"
  | "tv-unit";

export type WhatsAppContext = {
  locality?: string;
  city?: string;
};

export type WhatsAppServiceConfig = {
  /** Builds the pre-filled text sent when the user opens WhatsApp */
  getInitialText: (ctx: WhatsAppContext) => string;
  /** Short headline shown in the floating tooltip */
  tooltipHeading: string;
};

const CONFIGS: Record<WhatsAppService, WhatsAppServiceConfig> = {
  default: {
    getInitialText: () =>
      "Hi FurniRevive! I'd like to get a quotation for furniture repair.",
    tooltipHeading: "WhatsApp now to get the quotation",
  },

  "modular-kitchen": {
    getInitialText: ({ locality, city }) => {
      if (locality) {
        return `Hi FurniRevive! I'm interested in a modular kitchen in ${locality}. I'd like a free consultation and quotation.`;
      }
      if (city) {
        return `Hi FurniRevive! I'm looking for a modular kitchen in ${city}. Please share design options and pricing.`;
      }
      return "Hi FurniRevive! I'm interested in a modular kitchen for my home. I'd like a free consultation and quotation.";
    },
    tooltipHeading: "Chat to design your kitchen",
  },

  wardrobe: {
    getInitialText: ({ locality, city }) => {
      const place = locality ?? city;
      return place
        ? `Hi FurniRevive! I'm interested in a modular wardrobe in ${place}. I'd like a free consultation and quotation.`
        : "Hi FurniRevive! I'm interested in a modular wardrobe. I'd like a free consultation and quotation.";
    },
    tooltipHeading: "Chat to design your wardrobe",
  },

  "tv-unit": {
    getInitialText: ({ locality, city }) => {
      const place = locality ?? city;
      return place
        ? `Hi FurniRevive! I'm interested in a TV unit in ${place}. I'd like a free consultation and quotation.`
        : "Hi FurniRevive! I'm interested in a TV unit. I'd like a free consultation and quotation.";
    },
    tooltipHeading: "Chat about your TV unit",
  },
};

export function getWhatsAppConfig(service: WhatsAppService): WhatsAppServiceConfig {
  return CONFIGS[service] ?? CONFIGS.default;
}
