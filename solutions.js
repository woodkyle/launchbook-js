// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];
// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('side-bar');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');
// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
var comments = document.getElementsByClassName('comments');
comments[comments.length -1];
// Exercise: Find the fourth comment on the page.
var panels = document.getElementsByClassName('panel');
panels[3];
// Exercise: Find one of the ads in the sidebar and hide them.
var ads = document.getElementsByClassName('ad-slot');
ads[1].style.visibility = 'hidden';
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
ads[1].styel.visibility = 'visible';
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
adTwo = document.getElementsByClassName('ad-slot')[1];
adTwoImage = adTwo.getElementsByTagName('img');
adTwoImage.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
var postMedia = document.getElementsByClassName('post media')[3];
var postText = postMedia.getElementsByTagName('p')[0];
postText.innerHTML = "OH GOD THEY FOUND ME";
// Exercise: Find the first post and add the .post-liked class to it.

// Exercise: Find the second post and remove the .post-liked class.
