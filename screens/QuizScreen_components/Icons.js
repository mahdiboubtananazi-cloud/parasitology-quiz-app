import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export const Icons = {
  CheckCircle2: ({ size, color }) => <Ionicons name="checkmark-circle" size={size} color={color} />,
  AlertCircle: ({ size, color }) => <Ionicons name="alert-circle" size={size} color={color} />,
  Filter: ({ size, color }) => <Ionicons name="filter" size={size} color={color} />,
  Clock: ({ size, color }) => <Ionicons name="time" size={size} color={color} />,
  RotateCcw: ({ size, color }) => <Ionicons name="refresh" size={size} color={color} />,
  Star: ({ size, color }) => <Ionicons name="star" size={size} color={color} />,
  Trophy: ({ size, color }) => <Ionicons name="trophy" size={size} color={color} />,
  Target: ({ size, color }) => <MaterialIcons name="track-changes" size={size} color={color} />,
  Home: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
  Close: ({ size, color }) => <Ionicons name="close" size={size} color={color} />
};