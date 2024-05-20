# Web Application Development 2  

## Introduction  

This project is based on converting monolithic application into microservices. A microservices architecture is aimed to improve scalability, maintainability, and flexibility of the existing system with contrast to a monolithic application . This architecture aims to break down the monolithic structure into smaller, independent services, assisting easier development, deployment, and management. The IWTSC container has been decomposed into front-end react app, API for Auth server and Question server and PostgresSQL and MongoDB database. The Authentication system has been kept in postgresDB and the question section has been moved to MongoDB and delivered from there. The alevelcomputing site has been unchanged. It has been integrated into IWTSC, where the record of correct answers has been applied. When accessed from IWTSC, the question and answers on the alevelcomputing site is shown in a single page.   
![image](https://github.com/18029450uhi/wad2Assignment118029450/assets/71414775/905363b2-0e70-4a96-871e-bad25ce3c90a)  
Figure 1: High Level Architectural Diagram  

## Getting Started

1. **Clone the Repository**:  

   git clone https://github.com/18029450uhi/wad2assignment18029450.git

2. **Start the alevelcomputing Server**:
   
    GO TO: cd\alevelcomputing  
    RUN: docker build -t aqc .  
    RUN: docker run -ti -d --name aqc1  -p 4000:4000 -p 4040:4040  aqc  
     
    Check in the port 4000 if alevel container is running and can be accessed using the mentioned port from web browser.  
    - **If the startup.sh file is not found when running the container, please use the alevelcomputing.zip folder**.

  4. **Start the project**:  
      GO TO: cd /root directory   
      Run the below instruction in the root directory :  
     
     -  For Linux/MAC: docker compose up    
     -  For windows  : docker-compose up    

   5. **Open the Application**:  
         Visit `http://localhost:3000` in the web browser.
## Methodology  

#### Technologies Used:  

The technologies used in this project are listed below :      
    
  - **React Font-end**: A JavaScript library for building user interfaces, utilized for the front-end development.
     
  - **Express Backend**: A web server for Node.js, employed for developing the backend server.
      
  - **Mongos**: For Working with MongoDB with Exoress
      
  - **Sequilize** : For Working with Postgresql
     
  - **MongoDB & PostgresSQL Database**:  
    Two types of databases used in the project:  
      -  MongoDB: A NoSQL document database, utilized for storing and retrieving dynamic data such as questions. 
      - PostgresSQL: A powerful, open-source Object relational database system, used for storing structured data such as authentication and credentials.  
        
   - **Docker & Docker Compose**: Containerization platforms used for packaging, distributing, and running applications within containers, ensuring consistency across development, testing, and production environments.
     
   - **Nginx as Reverse Proxy** : A high-performance web server and reverse proxy server used to handle client requests and distribute them to backend servers, such as Express, to improve performance, security, and scalability.


## Implementation Details    
   The first requirement of this project is to decompose the IWTSC container into Front end react app, the api and postgres.    
   
### IWTSC Container Decomposition:  

- **Front-end React App**:  
    Extracted into a separate container named client to ensure modularity and scalability. Utilizes Docker to containerize the React application for efficient deployment.
   
- **PostgreSQL** :  
  The PostgreSQL has been moved into its own container to maintain data integrity and isolation. PostgreSQL container retains authentication data.
  
 - **Api(Auth Server)** :  
    The APIs have been placed into different containers for decomposition purpose.  
   
### Integration with MongoDB for Question Delivery:  

For this part of the assignment , the main server has been allocated into two different servers auth server and question server.  
 A different server named question-server has been used for question delivery purposes. This server utilizes MongoDB to send questions. In the server.js file function initial() has  been called to create the questions.  

 
- **MongoDB Integration** :  
  Established a connection with MongoDB to deliver questions dynamically. Utilized additional APIs to fetch questions from MongoDB.
   
- **Migration** :     
   Migrated the existing questions to MongoDB, ensuring seamless integration without disrupting the functionality of the application. The stars are also moved to this server.
    
 - **API Enhancements** :    
   Modified the API to fetch questions from  MongoDB based on the request, ensuring compatibility with the existing system.
   
- **Nginx Server Deployed** :  
Nginx has been used to route requests to the servers based on addresses given. Nginx configuration file sets up a reverse proxy server that listens for incoming HTTP requests on port 80. It forwards requests to different backend servers based on the requested URL path. Requests to "/api/questions" and "/api/stars" are proxied to the "question"  server, while other requests are proxied to the "auth"  server  for authentication. Various HTTP headers are set to ensure proper handling and forwarding of the requests.    

### Integration with ALevelComputing :  

 - **Unaltered ALevelComputing Site** :  
   -Ensured that the ALevelComputing site remains unchanged to maintain its functionality and it can be accessed from the defined address locahost:4000 .  

 - **Accessing through IWTSC website**:  
   React and Iframe has been used to access the alevelcomputing site through iwtsc website. The alevelcomputing site has been declared as a component in the client folder. It uses iframe to display content form the URL http://localhost:4000 and occupies the entire available space within its container. In the Navbar.js component the alevlelcomputing site route has been added.  

 - **Integration**:    
   Integrated ALevelComputing within the microservices architecture, enabling continuous communication between services.  

- **Enhanced Functionality**:  
  Implemented mechanisms to display correct answers when accessing through the IWTSC container, without affecting the original functionality of ALevelComputing. Modified the interface to display questions and answers in the same page when coming through iwtsc site. The AQuesitonPage.js has been modified to check if the re
  uest is coming through iwtsc it shows the question and answer at the same page.  

## Clean-up and Optimization 

 - **Disaster management** :  
    Stars and questions model has been kept in the auth server only for backup purposes. If the question server is down, it can be used as initial routing point. Nginx server can be configured to set up a load balancer. If the question server is down, it can redirect all the requests to auth server.
   
 - **Code Refactoring** :  
     Conducted thorough clean-up of redundant code and pathways to improve the maintainability and readability of services.
     
- **Resource Optimization** :
  Removed unnecessary dependencies and queries, optimizing resource utilization, and enhancing overall system performance.    
 -There are some bugs encountered in development phase. It has been documented  in the Bugs.md file.

  
## Evaluation  

The implemented microservices architecture successfully decomposes the existing monolithic system into smaller, manageable services, improving scalability and maintainability.   

The IWTSC container has been divided into containers mainly the front end react app container, auth server, question server, proxy server.  The APIs have been containerized , ensuring that the site functions as it did previously. This separation into individual containers enhances the scalability and manageability of the system.
To meet the business requirement, authentication remains in PostgreSQL, while questions are fetched from MongoDB. A migration of the current questions to MongoDB has been completed, enabling their delivery from MongoDB through separate API. This ensures that the original API continues to provide questions in the required JSON format, but now retrieves them from MongoDB instead of PostgreSQL. Nginx has been used to route endpoints/APIs between auth server and ques server to minimize downtime and potential inconsistencies. In the event of question server experiencing downtime, the authentication server- the auth server has the functionality to provide services as same as the question server.  

Because of docker internal network complexity, the alevelcomputing was not included into the main compose file instead kept as it is. It can be done in future iterations as main focus of the project is to dockerize the IWTSC container and as this part was not in the scope of this assignment.  

The alevelcomputing website remains unchanged and continues to function independently at localhost:4000. However, if accessed through service  IWTSC, a system has been implemented to track correct answers to questions. The site's API, which provides a list of questions, remains accessible. Especially, the question-and-answer pages are separate, so modifications have been made to remove the answer link when accessed through IWTSC and replaced it with local answer buttons. These changes ensure that the original functionality of alevelcomputing remains intact for users who access it directly.  

The alevelcomputing site doesn’t have any authentication system, in future this can be added.  
IWTSC site can be modified to keep record of the answered questions for each user separately.   
At this moment when called from itwsc site the Alevel computing navbar shows as a separate navbar. There is an option for It can be integrated properly into the main itwsc site for better user experience. Also, the navigation system could be improved for the whole system.    

In summary, the technologies and methodologies applied in this project have achieved the desired result. Now, the focus remains on continuous refinement based on requirements. This iterative process will drive ongoing improvements, ensuring that the application remains responsive to user needs and preferences while maintaining its reliability and usability.  









