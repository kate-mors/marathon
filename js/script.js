/* global L:readonly */
"use strict";

const imageMap = document.querySelector(".contacts__map");
const MAIN_PIN = {
  size: 52,
  anchor: 26,
};
const BOTANICA_COORDINATES = {
  y: 30.3230779,
  x: 59.9360429,
};

imageMap.style.display = "none";

const map = L.map("map", {
  tap: false,
  scrollWheelZoom: false,
}).setView(
  {
    lat: BOTANICA_COORDINATES.x,
    lng: BOTANICA_COORDINATES.y,
  },
  16
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  touchZoom: false,
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl:
    "https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg",
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const marker = L.marker(
  {
    lat: BOTANICA_COORDINATES.x,
    lng: BOTANICA_COORDINATES.y,
  },
  {
    icon: mainPinIcon,
  }
);

marker.addTo(map);
