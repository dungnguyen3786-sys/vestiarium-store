export const COLORS: Record<string, { hex: string; label: string }> = {
  white:  { hex: '#D8C9A0', label: 'White & Gold' },
  red:    { hex: '#7A1F2B', label: 'Red' },
  green:  { hex: '#2E4A3A', label: 'Green' },
  violet: { hex: '#4B2952', label: 'Violet' },
  rose:   { hex: '#C98DA0', label: 'Rose' },
  black:  { hex: '#2A2A2A', label: 'Black' },
  blue:   { hex: '#2E4060', label: 'Blue' },
};

export const SEASONS = [
  { key: 'advent',    name: 'Advent',             color: 'violet', note: 'A season of waiting' },
  { key: 'christmas', name: 'Christmas',           color: 'white',  note: 'The great feast' },
  { key: 'lent',      name: 'Lent',                color: 'violet', note: 'Fasting and penance' },
  { key: 'gaudete',   name: 'Gaudete & Laetare',   color: 'rose',   note: 'Worn twice a year' },
  { key: 'easter',    name: 'Easter',              color: 'white',  note: 'Fifty days of joy' },
  { key: 'pentecost', name: 'Pentecost',           color: 'red',    note: 'Tongues of fire' },
  { key: 'ordinary',  name: 'Ordinary Time',       color: 'green',  note: 'The long weeks of growth' },
  { key: 'requiem',   name: 'Requiem',             color: 'black',  note: 'The Mass of the Dead' },
  { key: 'marian',    name: 'Marian Feasts',       color: 'blue',   note: 'Customary in some dioceses' },
];

export interface Product {
  id: number;
  name: string;
  color: string;
  fabric: string;
  cut: string;
  price: number;
  desc: string;
}

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Gothic Chasuble — Paschal White & Gold', color: 'white',  fabric: 'Brocade',        cut: 'Gothic',    price: 480, desc: 'Woven brocade with a raised gold orphrey, cut full in the Gothic style.' },
  { id: 2, name: 'Roman Chasuble — Pentecost Red',         color: 'red',    fabric: 'Damask',          cut: 'Roman',     price: 420, desc: 'Fitted Roman cut in deep damask red, for feasts of martyrs and the Holy Spirit.' },
  { id: 3, name: 'Borromeon Chasuble — Ordinary Green',    color: 'green',  fabric: 'Gabardine',       cut: 'Borromeon', price: 360, desc: 'Light gabardine, semi-fitted, built for the long weeks of Ordinary Time.' },
  { id: 4, name: 'Gothic Chasuble — Advent Violet',        color: 'violet', fabric: 'Brocade',         cut: 'Gothic',    price: 440, desc: 'Heavier brocade in penitential violet, with a plain woven orphrey.' },
  { id: 5, name: 'Roman Chasuble — Lenten Violet',         color: 'violet', fabric: 'Wool-Silk Blend', cut: 'Roman',     price: 390, desc: 'Unadorned wool-silk, fitted close, for the quiet weeks of Lent.' },
  { id: 6, name: 'Gaudete Rose Chasuble',                  color: 'rose',   fabric: 'Silk Damask',     cut: 'Roman',     price: 460, desc: 'Rose silk damask reserved for the third Sunday of Advent and fourth of Lent.' },
  { id: 7, name: 'Requiem Chasuble — Solemn Black',        color: 'black',  fabric: 'Brocade',         cut: 'Gothic',    price: 410, desc: 'Traditional black brocade with silver orphrey, for the Mass of the Dead.' },
  { id: 8, name: 'Marian Blue Chasuble',                   color: 'blue',   fabric: 'Damask',          cut: 'Roman',     price: 430, desc: 'Marian blue damask, customary at shrines and dioceses with the privilege.' },
];

export const SHIPPING_FEE = 25;
