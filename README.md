<h2 align="center"><img src="https://raw.githubusercontent.com/Code-Institute-Milestone-Project-4v2/main/static/media/Wheelerdealer_logo.png"></h2>
<h1 align="center">WehhelerDealer online shop and content management application</h1>

<h3 align="center">Live Preview Landing Page</h3>
<h2 align="center"><img src="https://raw.githubusercontent.com/Code-Institute-Milestone-Project-4v2/main/static/media/LivePreviewIndex.png" width=800></h2>

<h3 align="center">Live Preview Products Page</h3>
<h2 align="center"><img src="https://raw.githubusercontent.com/Code-Institute-Milestone-Project-4v2/main/static/media/LivePreviewIndex.png" width=800></h2>

### Live project:
### [Public side](https://code-institute-milestone-p4-v2.herokuapp.com/)

Project, designed specifically for selling car tires online with option to implement car rims and used car tyre-rim sets.


## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the company and products they offer.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find product I'm interested in.
        3. As a First Time Visitor, I want to easily select, filter and search products I need
        4. As a First Time Visitor, I want to easily make account for faster checkout later and be able to see my order history.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want to find information about new offers.
        2. As a Returning Visitor, I want to easily find my order history and re-purchase the product that I'm happy with.
        3. As a Returning Visitor, I want to update my delivery and contact information in case it has been changed.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to check to see if there are any newly added tires that I'm interested in.
        2. As a Frequent User, I want to be able to review all my order history to better plan maintence of my cars and see when was the last time new tires was purchased.

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are WheelerdDealer main colors - orange ![#fa8100](https://via.placeholder.com/15/fa8100/000000?text=+) `#fa8100/rgb(250, 129, 0)` and dark-orange ![#703a00](https://via.placeholder.com/15/703a00/000000?text=+) `#703a00/rgb(112, 58, 0)` in combination with classic black for better contrast. These are main colors in WheelerDealer showroom as well as website.
    -   #### Typography
        -   The Domine font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Domine is a clean font with a small "twist" so it is both attractive and appropriate.
    -   #### Imagery
        -   Imagery is important. All products contains image with specific tyre on nicely chosen alloy rims.

*   ### Wireframes

    -   Landing page wireframe - Desktop and Mobile - [View](https://github.com/MarisKX/Code-Institute-Milestone-Project-3/blob/main/static/other/wireframes%20public/Home%20page.pdf)

    -   Main Product Page and Product Details Page (uses the same structure) - Desktop and Mobile - [View](https://github.com/MarisKX/Code-Institute-Milestone-Project-3/blob/main/static/other/wireframes%20public/Cars%20for%20sale%20%26%20rent.pdf)
    -   User Profile Page (all other pages uses the same layout and styles) - Desktop and Mobile - [View](https://github.com/MarisKX/Code-Institute-Milestone-Project-3/blob/main/static/other/wireframes%20public/Contact.pdf)

## Features

-   Responsive on all device sizes

-   Interactive elements and overall features

    - Wide variety of searching and filtering options
        - By keyword in free search field
        - By parameters like season, tire size and brands (can select one or more or all)
    - By clicking on tyre image (or name) opens window, where user can see more details by clicking 'show details' button)
    - Possibility to add product to shopping cart is from both main product view and detailed product view.
    - In shopping cart customer can view, update and delete product from it's cart.
    - On adding product, etiting or deleting from shopping cart as well as performing login/logout and other actions, cutomer gets small notification window with short description of actions he/she just performed.
    - Option to make personalized profile to keep track of previously made orders, see their details and re-purchase item, if needed.


### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the company.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to account settings as well and big 'call-to-action' button.
        2. Website offers variety of search, filter and sort options in left sidebar as well as on top of selected products like sorting by price (up/down), size and brand.
        3. The user has option to by products with or without registration. The registration process is made easy and simple.

    2. As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, as well as side bar (or slidebar for mobiles). back buttons are used all over the ssite and they are consistent in style.


-   #### Returning Visitor Goals

    1. As a Returning Visitor, I want to find information about new offers.

        1. Main product page contains ALL offers that company have.

    2. As a Returning Visitor, I want to easily find my order history and re-purchase the product that I'm happy with.

        1. After login to user account there are list of all orders, that user has been made.
        2. By clicking of order button that contains order number and date, opens dropdown with more info like product details, total price.
        3. Orders are put nucely in dropdowns, so it can have better overview and can review only orders they are interested in, especially if customer has made a lot of orders.

    3. As a Returning Visitor, I want to update my delivery and contact information in case it has been changed.
        1. On Users profile page, by clicking 'default delivery information' user can edit details, if they has been change. These details are used to automatically populate delivery information to speed up checkout process.

-   #### Frequent User Goals

    1. As a Frequent User, I want to check to see if there are any newly added tires that I'm interested in.

        1. The user would already be comfortable with the website layout and can easily click the navigation button of their choice as well as search and filtering options.


# Technologies Used

-   Initial development was made using [Atom IDE](https://atom.io/). 
-   Python-specific functions was tested and modeled in [PyCharm IDE](https://www.jetbrains.com/pycharm/)

## Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [javaScript](https://en.wikipedia.org/wiki/JavaScript)
-   [Python](https://en.wikipedia.org/wiki/Python_(programming_language))

## Frameworks, Libraries & Programs Used

1. [Bootstrap 5.0:](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Material Design for Bootstrap v5 & v4:](https://mdbootstrap.com/)
    - Material Design was used for some advanced features (like carousel) that has limited options in other used frameworks
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the main menu items in header to add the float transition while being hovered over.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.
1. [Heroku:](https://heroku.com/)
    - Heroku pages was used to deploy project
1. [Django:](https://www.djangoproject.com/)
    - Python web-framework

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/)
    1.  [Results Index-home]() 
    2.  [Results All Products]()
    3.  [Product Details]()
    4.  [Results Shopping Cart](link)
    5.  [Results Profile Page]()


## Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Firefox browsers.
-   The website was viewed on a variety of devices such as Desktop (32" and 24"), Laptop (17"), iPhone7, Samsung S20 and Samsung S20+
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   All logical steps from creating account, making test purchase, recover forgotten password, simulating errors during checkout.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## Known Bugs

-   In some cases, receiving verification email after creating account, can take up to 10 minutes, reason is still unknow as in most cases email gets received within 1 minute.

## Deployment

### Heroku

The project was deployed to Heroku pages using following steps:

1. Log in to [Heroku](https://heroku.com/) 
2. From dashboard locate "New" > "Create new app"
3. Giving app name and select region (Europe or USA)
4. Before deployment, navigate to "Settings" > "Reveal Config Vars"
5. Fill in key - value pairs neccessary for project
6. Navigate to "Deploy" > "GitHub - Connect to Github"
7. Select repository You want to deploy and press "Connect"
8. After Heroku performs setup, Your page is available online.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/MarisKX)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/MarisKX)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Content

-   All content was written by the developer with few exceptions:
    - .js was taken from Django ecomerce walkthrough project:
        - quantityAdjustingScript
        - countryField
        - stripeElements
        - toasts
    - .py was taken from Django ecomerce walkthrough project:
        - webhooks and webhook_handler with minor updates to better serve this website needs.
    - as well as few smaller python code snippets, blended in perfect harmony with my own.
### Media

-    All pictures of cars was taken from official tyre manufacturer websites

### Acknowledgements

-   My friends and family for testing this app and UX feedback

-   And, of course, biggest thanks to my wife, without her moral support this project would not gonna be possible!!!
