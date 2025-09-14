import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const date = new Date(createdAt);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // in seconds

  if (diff < 60) {
    return `${diff} second${diff !== 1 ? "s" : ""} ago`;
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diff < 2592000) {
    const days = Math.floor(diff / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (diff < 31536000) {
    const months = Math.floor(diff / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diff / 31536000);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};

export const formatNumber = (num: number): string => {
  if (num === null || num === undefined) return "0";

  const absNum = Math.abs(num);

  if (absNum >= 1.0e12) {
    return (num / 1.0e12).toFixed(1).replace(/\.0$/, "") + "t"; // trillion
  } else if (absNum >= 1.0e9) {
    return (num / 1.0e9).toFixed(1).replace(/\.0$/, "") + "b"; // billion
  } else if (absNum >= 1.0e6) {
    return (num / 1.0e6).toFixed(1).replace(/\.0$/, "") + "m"; // million
  } else if (absNum >= 1.0e3) {
    return (num / 1.0e3).toFixed(1).replace(/\.0$/, "") + "k"; // thousand
  }

  return num.toString(); // less than 1000
};

