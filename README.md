# GitHub Repositories Listing Page
This is a website that displays the public GitHub repositories belonging to a specific user. It is built using pure HTML, CSS and Javascript only without any frameworks.

## Features
#### Searching User by username
#### Repositories Listing
#### Searching User Repositories
#### Pagination
#### Loaders
#### Theme Changing
#### Responsive
#### Error Handling

## Implementation

### Technologies Used
#### HTML
- div, a, img, button, class, id, input, form, select, etc.
#### CSS
- basic, display, position, CSS variables, keyframes, mediaquery, responsive, etc.
#### JavaScript (Vanilla)
- variables, functions, localStorage, eventListeners, DOM, fetch, errorHandling, async, etc.
#### GitHub REST API
#### Other
- Fontawesome for icons
- Github for repositing
- Netlify for hosting

## Usage
- Open the website in a web browser.
- Enter a valid GitHub username in the input field. If the username doesn't exist warning message is shown. For better usability a default username ('mojombo', id = 1) is used. 
- On clicking search, the user basic details like name, email, location, followers, following count and repositories are mapped.
- In the repository search input field, enter a valid repository name related to the user. If there are matching repositories they well be displayed, else no results wil be shown.
- Change the default number of results to be shown. Upto 100 results per page can be displayed.
- Click on repository names to redirect to actual github repository page. 
- Navigate through the paginated results using the page navigation buttons.
- Try toggling theme by clicking on toggling button at right.
  
## Code Structure

### index.html: 
Main HTML file. This is the only html page as it is a single page website.

### styles.css: 
Stylesheet for the website. It is the only .css file as it ensures faster loading.

### scripts folder: 
There are multiple script files each serving a specific purpose.

#### index.js:
Main javascript file.
#### searchUser.js:
It contains input field to search a user by username
#### FetchUserDetails.js:
It fetches data of the username provided in input field from the Github rest API.
#### mapUserDetails.js:
It maps the data of the user fetched from the API.
#### searchRepos.js:
It contains input field to search user's repositories. It also provides limit changing ability.
#### mapRepos.js:
It maps the data fetched from the api in a good looking responsive way.
#### fetchTopics.js:
It fetches the programming language and topics related to the repository. Since the topics is not available with the repository fetching, a separate call for each repository is to be made.
#### mapTopics.js:
It maps the topics fetched by fetchTopics.js
#### themeHandler.js:
It allows users to change theme of the website.
It uses localStorage to store the user preferences.
#### handleUserError.js:
It handles if there are any errors in fetching user details.
#### handleRepoError.js:
It handles if there are any errors in fetching user repositories.
#### handleLoading.js:
It displays the loaders when fetching data from API and hides at other times.
#### pagination.js, paginator.js:
They both adds pagination, allowing users to navigate to any page directly, ot next page, to previous page, to first page, to last page.

### Happy Coding
