
Paws Allowed - Project 4
-------------------------

Idea
-----

The original idea of this project was an app for pet owners who can find somewhere they are allowed to take their pet to for example restaurants, pubs, general attractions and beaches.

From people I know this is quite a significant issue for pet owners, as it is a dilemma to know where you can take them.

As I got further involved with this project it soon became more apparent that the application would focus more on dogs as they are generally more likely to be taken out into public areas. No offence to cat lovers!

Structure
----------

The structure of the app would involve a user signing up, having their own login & searching through the app at reviews of potential places where they could take their dog.

The API is internally created meaning that it would obtain it's data from the users of the app providing the content data. I have hard-coded some data into the app so that it has some content.

The reviews would consist of restaurants, pubs and beaches. The user clicks on a review which then displays a photo of the destination and a review or list of reviews of that particular place.

As part of the user experience there is a Google Map which displays markers of the location of the reviews. The user can click on one of these map markers, which will then take them to that particular review page.

Another part of the site is the users section. This is like a social network community amongst the users on the site. A user has their own profile page which displays their personal information and also allows them to post relevant dog photos on the site.

Functionality which registered users can do is create, edit, update and delete their own reviews. They can also have their own profile page with their personal information. Unregistered users can only view reviews.

Brief timeline of the application build
----------------------------------------

- Planning started with thinking of ideas where I could incorporate an API as part of an app. Wireframing started with Adobe UX to create the potential design layout of the app looking particularly into navigation and colours.

- Research into different types of API once I had the idea for the app. I looked into the kinds of data being received from different API's.

- Start of build on the back-end with creating the API. Then adding the BCrypt authentication to the API with tokens using Insomnia.

- The front-end with Angular now begun to start creating the routes and view pages with CRUD.

- Once the structure of the front-end was complete then the authentication was added using tokens and the authinterceptor. Again at this stage checking that registering and logging in were working correctly.

- For front-end design Bootstrap was added using components and overall layout.

- Using the seeds.js file content was gradually added to populate the app with data and then designed and positioned.

- Google Maps API was now added to the app and then the markers were also created according to review locations. Autocomplete was now implemented from Places API for the location search.

- Final changes were made for images, fonts, colours according to the design.

- The app was then deployed with Heroku.

Challenges
-----------

- Authentication being implemented on the back-end and front-end of the app. Using BCrypt to put authentication on the API and using Angular on the front-end using JSON Web Token. Checking if authentication was working with Insomnia for registering and logging in.

- Using CRUD on the front-end to provide funtionality to the apps pages. As this was a new process I found it quite tricky to implement the update, delete functions without many errors.

- Unfortuately finding an API to provide data in regards to finding out dog friendly places was not easy. I researched hotel and travel API's available but they couldn't provide the necessary information. So I ended up creating my own API, which would then hypothetically collect it's own dog friendly data from the users.

- Using Angular was a first time on this project for me, getting familiar with using the syntax.

- I definitely found that working with Angular framework with JavaScript has a more detailed approach to building an app. There is more to code, to check, I found you need to be more thorough compared to using Ruby on Rails framework which is more efficient as a work process.

- Using Google Maps API, creating the markers on the map. Also using Google Maps Places API to create the autocomplete to allow prediction of locations in the inputs for users.

API's
-------

There are three API's used in this app, the Google Maps API for the locations of the reviews. Displaying markers on the British Isles map.

Google Maps Places API was used for the autocomplete on the create review and new forms. This feature autocompletes the location name suggestions for a user as they fill in a form. As the user fills in the 'name' and 'address' inputs this then autocompletes the users option.

As mentioned above the other API has been internally created meaning hypothetically as a site the data would be provided from the users input for the dog friendly locations.

Overall views
--------------

Overall I think the background dog images really represent well with the app's content. The fonts and colour work well as a design.

In terms of usability the app is clear and easy to navigate, add, edit and see reviews and navigate on the map to search for reviews.

It would have been nice to have added another feature or two like a chat functionality or oAuth login, however within the time frame of this project I couldn't quite add them in.

Areas to expand:

- The users section of the site where it displays the many users registered. This is where a social network chat facility could be created. Users could chat about various aspects of where to take dogs, dog training etc.

- Add categories in the reviews for example there's a category for restaurants, pubs, beaches etc. This would organise the reviews more clearly and provide more efficient usability to find a review.

- Another possibility to add to the app would be to have a category, area for dog training, facilities that could be provided on a separate reviews area and map.

Technology used
----------------

- JavaScript 
- Express.js 
- AngularJS 
- CSS 
- HTML 
- MVC 
- CRUD 
- RESTful Services 
- Bower 
- Mongoose 
- BCrypt 
- JSON Web Token 
- MongoDB 
- Node.js 
- Bootstrap 
- Google Maps / Places API's




