# About

A modern application that renders Pizza receipes from APIs using Netlify. The application allows users to add receipes, bookmark receipes and search a receipe from a search menu.

# User Interface

1. Receipes are rendered on the left showing the ingridients, their quantity and instructions to prepare the dish
2. A scroll menu appears on the right where the user chooses a particular receipe by clicking on it

# User stories

1. Search for receipes to find new ideas for meals
2. As a user update the number of servings, so that I can cook a meal for different number of people
3. Bookmark receipes to review them later
4. Create own receipes to have them all organized in the same app
5. See bookmarks and own receipes when leaving the app and come back later to close the app safely after cooking

# Features
1. **Search functionality** 
    * An input field sends request to API with searched keywords 
    * Displays receipe with cooking time, servings and ingredients; results with indentation display

2. **Change servings functionality** 
    * Update ingredients according to number of servings

3. **Bookmarking functionality** 
    * Display list of all bookmarked recipes
    * User receipes are automatically bookmarked
    * Store bookmark data in the browser using local storage, on a page load read saved bookmarked data from local storage and display

4. User can upload own recipes and can see only his own recipes (not those from other users)

# Architecture

![](https://github.com/singhdivyank/JavaScript-projects/blob/main/Project6/forkify-architecture-recipe-loading.png)

# Flowchart

![](https://github.com/singhdivyank/JavaScript-projects/blob/main/Project6/forkify-flowchart-part-3.png)

# Pre requisites

1. Nodejs
2. Parcel
3. Babel
4. Netlify
