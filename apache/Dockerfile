FROM debian:buster
RUN apt-get update && apt-get install -y apache2 apache2-utils  curl && apt-get clean 


RUN curl -O https://www.mod-auth-openidc.org/downloads/libapache2-mod-auth-openidc_2.4.11.2rc2-1~buster+1_amd64.deb  
RUN  dpkg -i libapache2-mod-auth-openidc_2.4.11.2rc2-1~buster+1_amd64.deb 
RUN  apt-get install -fy 
COPY ./000-default.conf /usr/local/apache2/conf/000-default.conf
COPY ./index.html /var/www/html/index.html



EXPOSE 80


