
---

![Image main title](./public/img/title_readme.png)

---

Exercise website for React course in Skill Factory - Avalith

![Image landing page](./public/img/print_readme.jpg)

![Icon status project](http://img.shields.io/static/v1?label=STATUS&message=In%20development&color=RED&style=for-the-badge)

## Technologies used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)  	![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)


## Team

|![Image Fran](https://github.com/fyunes.png) Fran| ![Image Mel](https://github.com/MelinaLencina.png) Mel | ![Image Will](https://github.com/hernandw.png)Will |![Image Fabri](https://github.com/saveasfabri.png) Fabri|
| :---: | :---: | :---: | :---: |

---

## Welcome to our project

|![Logo React](https://miro.medium.com/max/464/1*LxtdsVO0UnRDlrale42riQ.png)|This project was created with [Create React App](https://github.com/facebook/create-react-app)|
| :---: | :---: |
  


## How to run our site

For this tutorial on how to set up and run our project we recommend using Visual Studio Code with its integrated terminal.

##### One of the easiest ways to do this, is to do as follows:

First copy the repository HTTPS address.

|![HTTPS Address](https://cdn.discordapp.com/attachments/854123718753779762/1019062599503065139/unknown.png)

Then we should position ourselves in the directory we want our folder to be downloaded

Next, clone our repository using git clone + the HTTPS address.
Type in the Git terminal:

```
git clone https://github.com/fyunes/skillfactory-second-project.git 
```

A folder will be created, access it by typing the following line in the terminal:

```
cd skillfactory-second-project
```

After that, you should install all dependencies for it to work properly running the following command:

```
npm install
```

If you do not wish to install them globally and to reduce long time issues you may also run:

```
npx install
```

###### Now you simply must enter

```
npm start
```

Then the app should start running smoothly without any issues.

### Happy hacking!

* * *

The science behind our site!
----------------------------

We are a team of four members. We decided to use an Agile methodology (SCRUM) for the development of this project. 

![Agile methodology](https://cdn.discordapp.com/attachments/854123718753779762/1019067397623255150/unknown.png) 

#### Our method consisted in:

* Having a daily meeting on Discord, where we talked about what we wanted to develop and how we could achieve our goals for the site. 

* Using live coding and pair programming as our tools for fixing bugs and helping each others when difficulties arrived. 

* Using text-channels on Discord to discuss changes and errors on our code. One of our most important tools was constant feedback among the team.

# Project structure

#### Navbar and footer:

Our responsive navbar uses React-Router for navigation, instead of the regular HTML `<a>` tags. Using the navbar, you can go to Home, Form, Table, and Characters. 

Our footer shows you who developed the project, and uses `<a>` tags that allow you to check out the team members' GitHub profiles without leaving our page.

###### Special thanks to Mel and Fabri! 


#### Home page:

We designed a responsive landing page for the user to navigate the site. 
On this page, you can see 3 clickable buttons (cards, table, form), and it's Rick and Morty themed!  

###### Special thanks to Mel and Fabri! 

#### Form page:

Our form allows you to send a message which is printed on the site (DOM) when you press the send button. It includes styled validation on each input field (Name, Phone, Email). 
Try sending something and check out how cool our form is!

###### Special thanks to Fabri! 

#### Table page:

This table shows you info from the `jsonplaceholder.typicode.com/users` API; it simulates a group of users and their data: Name, Email, City, Phone, Website, and ID. It was developed using Axios! 

###### Special thanks to Williams! 

#### Characters page:

This is our characters page! Every creature from the Rick and Morty series is here, thanks to the `rickandmortyapi.com` API. 
You can use the search bar to look for something in particular! You can also use filters if you're being very specific. 
###### Try writing "Rick" and check out how many Ricks you can find! Isn't that awesome? 
 
Check out all the characters using the navigation buttons below the cards. Don't worry if it takes some time to load, you'll know when that happens, we got you covered with our loader animation! 

###### Special thanks to Fran, our Team Lead and SCRUM Master! 

----------------------------

### Thank you for visiting our project!  
###### Try not to fall into a portal when leaving 

![Good Bye gif](https://media3.giphy.com/media/vhhRM3XldbbQA/giphy.gif?cid=790b7611d799f70583b2be3506395516af88760da255f5a5&rid=giphy.gif&ct=g)
