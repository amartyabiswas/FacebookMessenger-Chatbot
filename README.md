# FacebookMessenger-Chatbot
#### A chatbot for learning experience, made using DialogFlow (Api.ai), facebook developers tool and Node.js for backend.
## Steps for making an Awesome chatbot:
1. Make a facebook page, with desired features.
2. Integrate your facebook page with the [Facebook Developers tool.](https://developers.facebook.com/)
3. Link the developers tool with Api.ai
4. Make simple chatbots (without databases and Api's), using the intents, entities and integrations in DialogFlow.
5. This segment involves no backend.
## Chatbot with Node.js in backend:
1. Every communication with DialogFlow occurs with Node.js App in between.
2. People makes request in facebook page which is sent to Api.ai through Node App.
3. Api.ai analyses and produces results, which is sent to FB page through Node app.
4. As information flows through an online hosted web app, the information from Api.ai
   could be stored and manipulated as per wish.
5. We can use various Api's in the Web App. I have used the [Open Weather Api](https://openweathermap.org/)
6. I have used MLabs (mongo database) to store the information from DialogFlow.
7. SendGrid Api for mailing has been used to send mails to the job-applicants.

#### Conversation starts with pressing 'Get Started', and it's a chatbot to take job-applications:
   ![screenshot 146](https://user-images.githubusercontent.com/31181068/37614187-1481f99e-2bd0-11e8-9978-ba6c9fcb2bd6.png)
   
#### A typical job application is handled as:
     - Gives various available vacancies through Quick replies.
     - Asks for Name, Previous Job, Years of Experence, Contact.
     - Stores the information in Mlabs.
     - Sends email to Manager through Sendgrid, sending all info of the applicant.
   ![screenshot 140](https://user-images.githubusercontent.com/31181068/37614199-1a7abeee-2bd0-11e8-82e0-1a039f13bbaa.png)
   
#### Automatically identifies the location, place through Natural Language Processing and shows weather.It alutomatically identifies any global city, and marks as geo-location. Sends the info back to Node App, where we use Open Weather to get the weather info of that particular location.
![screenshot 139](https://user-images.githubusercontent.com/31181068/37672386-da29bcc2-2c93-11e8-8b18-139a1dce0a02.png)

#### Can remember your favourite color, each time! Favourite color is updated every time, and stored in MLabs.
![screenshot 138](https://user-images.githubusercontent.com/31181068/37614192-1615e6e4-2bd0-11e8-87fa-613d001bb35f.png)

#### Simple talk made using the various integrations avaiilable in DialogFlow.
![screenshot 141](https://user-images.githubusercontent.com/31181068/37614212-25eac616-2bd0-11e8-8c80-d3c51cf6d7b6.png)

#### Glimpse of how chatbot replies without coding...
![screenshot 142](https://user-images.githubusercontent.com/31181068/37614218-2abbae76-2bd0-11e8-9e02-99ce95b755ee.png)
![screenshot 143](https://user-images.githubusercontent.com/31181068/37614226-3072becc-2bd0-11e8-8405-127f236bf5f3.png)
![screenshot 144](https://user-images.githubusercontent.com/31181068/37614229-329d2d72-2bd0-11e8-9168-5c1c517f7022.png)
![screenshot 145](https://user-images.githubusercontent.com/31181068/37614235-35c15442-2bd0-11e8-80f9-3fea30dfbbf0.png)

# Installation
```
1. Download the code.
2. Fill in various Tokens, webhooks, api keys etc.
3. Integrate Mlabs.
4. Host in heroku.
5. Start chatting from FB page.
```
### Made by Amartya Biswas. All rights reserved 2018 @ Amartya. 
