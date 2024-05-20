# Web Application Development 2  

## Introduction  

This project is based on converting monolithic application into microservices. A microservices architecture is aimed to improve scalability, maintainability, and flexibility of the existing system with contrast to a monolithic application . This architecture aims to break down the monolithic structure into smaller, independent services, assisting easier development, deployment, and management. The IWTSC container has been decomposed into front-end react app, API for Auth server and Question server and PostgresSQL and MongoDB database. The Authentication system has been kept in postgresDB and the question section has been moved to MongoDB and delivered from there. The alevelcomputing site has been unchanged. It has been integrated into IWTSC, where the record of correct answers has been applied. When accessed from IWTSC, the question and answers on the alevelcomputing site is shown in a single page.   
![image](https://github.com/18029450uhi/wad2Assignment118029450/assets/71414775/905363b2-0e70-4a96-871e-bad25ce3c90a)  
Figure 1: High Level Architectural Diagram  

## Getting Started

1. **Clone the Repository**:  

git clone https://github.com/18029450uhi/wad2assignment18029450.git

2. **Start the alevelcomputing Server**:
   
GOTO: cd\alevelcomputing  
RUN: docker build -t aqc .  
RUN: docker run -ti -d --name aqc1  -p 4000:4000 -p 4040:4040  aqc  
GOTO: cd /root directory  
Check in the port 4000 if alevel container is running and can be accessed using the mentioned port from web browser.  

3.**Start the project**:    
Run the below instruction in the root directory  
RUN: for Linux/MAC-  docker compose up  
For windows :docker-compose up  

4 . **Open the Application**:
 Visit `http://localhost:3000` in the web browser.  

