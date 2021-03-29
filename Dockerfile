FROM	nginx

ADD		https://github.com/kyubisation/angular-server-side-configuration/releases/download/v11.0.2/ngssc_64bit /usr/sbin/ngssc
RUN		rm -rf /usr/share/nginx/html
COPY	nginx  /etc/nginx
ADD		dist   /usr/share/nginx/html
COPY	docker-entrypoint.sh /

WORKDIR	/usr/share/nginx/html
