FROM php:8.1.21-apache
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer &&   apt update -y && apt install -y libpng-dev zlib1g-dev libzip-dev unzip && docker-php-ext-install zip gd
WORKDIR /var/www/html
RUN composer require mpdf/mpdf
RUN chmod 777 /var/www/html/vendor/mpdf/mpdf/tmp

# sudo docker build -t php-mpdf:0.3 .
# sudo docker tag php-mpdf:0.2 adomargon/php-mpdf:0.2
# sudo docker push adomargon/php-mpdf:0.2
# sudo docker exec -it phpserver /bin/sh