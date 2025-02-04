#!/bin/sh
echo "window.env = {" > ./env-config.js
echo "'VITE_SKY_SCRAPPER_HOST':'$VITE_SKY_SCRAPPER_HOST'," >> ./env-config.js
echo "'VITE_SKY_SCRAPPER_API':'$VITE_SKY_SCRAPPER_API'" >> ./env-config.js
echo "'VITE_SKY_KEY':'$VITE_SKY_KEY'" >> ./env-config.js
echo "'VITE_MAP_JSON':'$VITE_MAP_JSON'" >> ./env-config.js
echo "}" >> ./env-config.js
