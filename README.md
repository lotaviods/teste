# Project to handle queue messages using amqplib

this app send them to whatsapp using venom whatsapp lib



----
Using docker:

- Production:
        
        docker-compose -f docker-compose.yml up -d --build 
        
- See logs: 
        
        docker logs --follow ts-consumer-wa-amqplib
        
- For develpment:

        docker-compose -f docker-compose-dev.yml up -d --build

        docker exec -it ts-consumer-wa-amqplib-dev /bin/bash

        npm install

        npm run start:dev

To run use:

        npm run start:dev

----


Message format: 

        {"to":"xxxxxxxxxxxxx", "message": ""}


Formatting (using 44 country code):
✅  447123456789