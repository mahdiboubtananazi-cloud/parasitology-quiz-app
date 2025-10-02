// استبدل محتوى الـ file بالكامل بهذا:
const tintColorLight = '#3B82F6';
const tintColorDark = '#60A5FA';

export const COLORS = {
  // Primary colors
  primary: '#3B82F6',
  primaryLight: '#60A5FA',
  primaryDark: '#1D4ED8',
  
  // Background gradients
  gradientStart: '#EBF4FF',
  gradientEnd: '#C3DAFE',
  
  // Text colors
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  textLight: '#9CA3AF',
  textWhite: '#FFFFFF',
  
  // Background colors
  white: '#FFFFFF',
  bgLight: '#F9FAFB',
  bgGray: '#F3F4F6',
  
  // Status colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // Difficulty colors
  beginner: '#10B981',
  intermediate: '#F59E0B',
  advanced: '#EF4444',
  
  // Border colors
  border: '#E5E7EB',
  borderLight: '#F3F4F6',
};

export default {
  light: {
    text: '#1F2937',
    background: '#FFFFFF',
    tint: tintColorLight,
    tabIconDefault: '#9CA3AF',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#F9FAFB',
    background: '#111827',
    tint: tintColorDark,
    tabIconDefault: '#6B7280',
    tabIconSelected: tintColorDark,
  },
};