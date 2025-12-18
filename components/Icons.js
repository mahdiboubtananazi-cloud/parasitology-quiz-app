// components/Icons.js
import React from 'react';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export const Microscope = ({ size = 24, color = '#000' }) => (
  <FontAwesome5 name="microscope" size={size} color={color} />
);

export const BookOpen = ({ size = 24, color = '#000' }) => (
  <Ionicons name="book-outline" size={size} color={color} />
);

export const Target = ({ size = 24, color = '#000' }) => (
  <MaterialIcons name="track-changes" size={size} color={color} />
);

export const TrendingUp = ({ size = 24, color = '#000' }) => (
  <Ionicons name="trending-up" size={size} color={color} />
);

export const Star = ({ size = 24, color = '#000' }) => (
  <Ionicons name="star" size={size} color={color} />
);

export const Award = ({ size = 24, color = '#000' }) => (
  <Ionicons name="trophy" size={size} color={color} />
);

export const X = ({ size = 24, color = '#000' }) => (
  <Ionicons name="close" size={size} color={color} />
);

export const CheckCircle = ({ size = 24, color = '#000' }) => (
  <Ionicons name="checkmark-circle" size={size} color={color} />
);

export const Zap = ({ size = 24, color = '#000' }) => (
  <Ionicons name="flash" size={size} color={color} />
);
