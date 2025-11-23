import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { TraingEducationEnum, CertificationEnum, RecongnitionEnum, ExperienceEnum } from "~/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely get image source URL, falling back to placeholder if invalid or empty
 * @param src - Image source URL (can be string, null, undefined, or empty)
 * @returns Valid image URL or placeholder path
 */
export const getSafeImageSrc = (src?: string | null): string => {
  if (!src) return "/placeholder.png";
  
  const trimmed = src.trim();
  if (trimmed.length === 0 || trimmed === "none") return "/placeholder.png";
  
  // Check if it's an absolute URL (http:// or https://)
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  
  // Check if it's a root-relative path
  if (trimmed.startsWith("/")) {
    return trimmed;
  }
  
  // Otherwise, return placeholder
  return "/placeholder.png";
}

export const getEducationString = (type: TraingEducationEnum): string => {
  const map = {
    FORMAL: 'Formal',
    NON_FORMAL: 'Non-Formal'
  }
  return map[type] || type
}

export const getTrainingString = (type: TraingEducationEnum): string => {
  const map = {
    FORMAL: 'Formal',
    NON_FORMAL: 'Non-Formal'
  }
  return map[type] || type
}

export const getCertificateString = (type: CertificationEnum): string => {
  const map = {
    NONE: 'None',
    PROFESSIONAL: 'Professional',
    TRADE: 'Trade',
    WORKSHOP: 'Workshop'
  }
  return map[type] || type
}

export const getRecognitionString = (type:RecongnitionEnum): string => {
  const map = {
    STATE: 'State Level',
    NATIONAL: 'National Level',
    INTERNATIONAL: 'International Level'
  }
  return map[type] || type
}

export const getExperienceString = (type: ExperienceEnum): string => {
  const map = {
    APPRENTICE: 'Apprentice',
    CRAFTMAN: 'Craftsman',
    MASTER: 'Master',
    GRANDMASTER: 'Grandmaster'
  }
  return map[type] || type
}