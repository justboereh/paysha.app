import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function intoArray<T>(value?: T): T[] {
  if (!value) return []
  if (Array.isArray(value)) return value
  return [value]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
