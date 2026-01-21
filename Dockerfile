#Indica la imagen base
FROM nginx:1.27

# Copiar mi proyecto a la imagen
COPY . /usr/share/nginx/html
