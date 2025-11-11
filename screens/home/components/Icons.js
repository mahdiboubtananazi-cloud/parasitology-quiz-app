// components/Icons.js
import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export const Microscope = ({ size = 24, color = '#000' }) => (
  <FontAwesome5 name="microscope" size={size} color={color} />
);

export const BookOpen = ({ size = 24, color = '#000' }) => (
  <Ionicons name="book" size={size} color={color} />
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