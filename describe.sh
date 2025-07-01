echo "СТРУКТУРА\n" > ./README.md
tree ./src/ >> ./README.md
tree -L 1 ./server >> ./README.md