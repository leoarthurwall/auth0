# Basic Auth0 App  

This project I learn how to implenent  Auth0 authentication by creating an app that has a login & logout button, auth0 authentication, and displays profile information once logged in.

There is a basic login page with a login button. Notice this button conditionally renders when the user isn't logged in.

![coverImage](images/coverImage.png)

Upon clicking the login button, you'll be taken to the auth0 authenticationn page where you can fill in your login details
.
![authentication page](images/Auth0.png)

Once you've logged in, you'll be taken to your profile page.

Here you'll see your name, image and email address. These render dynamically to the user who's logged in.

Also on this page you'll see the log out button, which conditionally renders when the user is authenticated and logged in.

![profile page](images/profile.png)

As there is a slight delay between the login being actioned and the profile page rendering, there is a conditional 'loading...' notice, that you can see if you're on the ball.


## Skills Used & learned

- How to set up Auth0 authentication
- useAuth0( ) custom hook
- useAuth0( ) objects: {user, isAuthenticated, loginWithRedirect, logout, isLoading}
- Auth0Provider custom component 
- conditional rendering 
  - login/logout buttons for authentication status
  - 'loading...' text 
- .env file to safely store Auth0 clientId and domain
- src/components folder to seperate component moduels 
  - login button, logout button, profile page
- dynamic rendering of user data 
  - {JSON.stringify(user, null, 2)} enables you to see full user data object, and choose which data to pull.
    - NOTE: you must pull the { user } object from the useAuth0( ) custom hook to do this.
