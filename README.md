# 4th-sem
HTML notes 

Level 1
HTML
Hyper Text Markup Language
HTML is the code that is used to structure a web page and its content.
The component used to design the structure of websites are called HTML tags.
 

First HTML File
index.html

It is the default name for a website's homepage
 

HTML Tag
A container for some content or other HTML tags


 
<p>
 
This is a paragraph

 


Element
 
</p>
 

Basic HTML Page



 
<!DOCTYPE html>
<html>
<head>
 
tells browser you are using HTML5 root of an html document container for metadata
 
<title>My First Page</title>
</head>
 
page title
 


 
<body>
<p>hello world</p>
</body>
</html>
 
contains all data rendered by the browser paragraph tag
 

Quick Points

Html tag is parent of head & body tag

Most of html elements have opening & closing tags with content in between

Some tags have no content in between, eg - <br>

We can use inspect element/view page source to edit html
 

Comments in HTML




This is part of code that should not be parsed.











<!-- This is an HTML Comment -->
 

HTML is NOT case sensitive

<html> = <HTML>
<p> = <P>
<head> = <HEAD>
<body> = <BODY>
 



Level 2



 

Basic HTML Tags
HTML Attributes



Attributes are used to add more information to the tag



<html lang="en">
 

Heading Tag
Used to display headings in HTML

h1	(most important)
h2 h3 h4 h5
h6	(least important)
 

Paragraph Tag
Used to add paragraphs in HTML



<p> This is a sample paragraph </p>
 

Anchor Tag
Used to add links to your page


<a href="https://google.com"> Google </a>
 

Image Tag
Used to add images to your page


<img src="/image.png" alt="Random Image">



relative url
 

Br Tag
Used to add next line(line breaks) to your page


<br>
 

Bold, Italic & Underline Tags
Used to highlight text in your page


<b> Bold </b>

<i> Italic </i>

<u> Underline </u>
 

Big & Small Tags
Used to display big & small text on your page


<big> Big </big>

<small> Small </small>
 

Hr Tag
Used to display a horizontal ruler, used to separate content


<hr>
 

Subscript & Superscript Tag
Used to display a horizontal ruler, used to separate content


<sub> subscript </sub>
H O

<sup> superscript </sup>

n
A + B
 

Pre Tag
Used to display text as it is (without ignoring spaces & next line)

<pre> This
is a sample text.
</pre>
 

Level 3

 

Page Layout Techniques
using Semantic tags for layout


using the Right Tags


<header>
<main>
<footer>
 

Inside Main Tag



 
Section Tag
<section>
 
For a section on your page
 



 
Article Tag
<article>
 
For an article on your page
 




 
Aside Tag
<aside>
 
For content aside main content(ads)
 

Revisiting Anchor Tag

<a href="https://google.com" target="_main"> Google </a>

for new tab









<a href="https://google.com"> <img src="link"> </a>


clickable pic
 

Revisiting Image Tag




<img src="link" height=50px >


set height







<img src="link" width=50px >


set width
 

Div Tag
Div is a container used for other HTML elements Block Element (takes full width)
 

 
List : Div Tags
<address>
<article>
<aside>
<blockquote>
<canvas>
<dd>
<div>
<dl>
<dt>
 


<fieldset>
<figcaption>
<figure>
<footer>
<form>
<h1>-<h6>
<header>
<hr>
<li>
<main>
 


<video>
 

Span Tag
Span is also a container used for other HTML elements Inline Element (takes width as per size)
 
List : Span Tags
<a>
<abbr>
<acronym>
<b>
<bdo>
<big>
<br>
<button>
<cite>
 
<code>
<dfn>
<em>
<i>
<img>
<input>
<kbd>
<label>
<map>
<object>
<tt>
<var>
 

<time>
 


Level Pro

 

List in HTML
Lists are used to represent real life list data.


unordered	ordered


 
<ul>
<li> Apple </li>
<li> Mango </li>
 
<ol>
<li> Apple </li>
<li> Mango </li>
 


</ul>	</ol>
 

Tables in HTML
Tables are used to represent real life table data.
<tr>	used to display table row


 
<td>
<th>
 
used to display table data used to display table header
 

Tables in HTML
<table>
<tr>
<th> Name </th>
<th> Roll No </th>
</tr>
<tr>
<td> Purva </th>
<th> 1664 </th>
</tr>
</table>
 

Caption in Tables

<caption> Student Data </caption>











Student Data
 

thead & tbody in Tables

<thead> to wrap table head
<tbody> to wrap table body
 

colspan attribute
colspan="n"
used to create cells which spans over multiple columns













 
 

Form in HTML
Forms are used to collect data from the user Eg- sign up/login/help requests/contact me

<form>




form content



</form>
 

Action in Form



Action attribute is used to define what action needs to be
performed when a form is submitted





<form action="/action.php" >
 

Form Element : Input
<input type="text" placeholder="Enter Name">
 

Label




<label for="id1">


<input type="radio" value="class X" name="class"  id="id1">


</label>







<label for="id2">


<input type="radio" value="class X" name="class"  id="id2">


</label>
 

Class & Id
<div id="id1" class="group1">

</div>



<div id="id2"> class="group1">

</div>
 

Checkbox





<label for="id1">


<input type="checkbox" value="class X" name="class"  id="id1">


</label>







<label for="id2">


<input type="checkbox" value="class X" name="class"  id="id2">


</label>
 

Textarea

<textarea name="feedback" id="feedback" placeholder="Please add Feedback">

</textarea>
 

Select





<select name="city" id="city">


<option value="Delhi"> Delhi </option>


<option value="Mumbai">   Delhi </option>
<option value="Banglore">   Delhi </option>



</select>
 

iframe Tag
website inside website

<iframe src="link"> Link </option>
 

Video Tag
<video src="myVid.mp4">  My Video </video>

Attributes



-	controls
-	height
-	width
-	loop
-	autoplay
 










