FROM tomcat:9.0
MAINTAINER puru_cr7
WORKDIR /usr/local/tomcat
COPY target/demo.war.original /usr/local/tomcat/webapps/demo.war
CMD ["catalina.sh", "run"]