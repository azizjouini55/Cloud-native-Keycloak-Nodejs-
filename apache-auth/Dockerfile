FROM debian:buster

RUN apt-get update 
RUN apt-get -y install apache2 libapache2-mod-auth-openidc

# Enable apache module mod_auth_openidc

RUN a2enmod auth_openidc

COPY index.html /var/www/html/
COPY 000-default.conf /etc/apache2/sites-available/

RUN service apache2 restart

EXPOSE 8000


CMD ["apache2ctl", "-D" ,"FOREGROUND"]