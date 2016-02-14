# cookie_stand
Calculate Daily Sales Projections
We're going to assemble this web application bit by bit.

First, create a separate JS object for each shop location that does the following:

Stores the min/max hourly customers, and the average cookies per customer, in object properties
Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate simulated amounts of cookies purchased for each hour using average cookies purchased and the random number of customers generated
Store the results for each location in a separate array
Display the values of each array as unordered lists in the browser
Calculating the sum of these hourly totals; your output for each location should look like this:

Pike Place Market

10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
Total: 657 cookies
Display the lists on index.html. We will be adding features to this application and working with its layout throughout the week.

Here are the starting numbers that you'll need to build these objects:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Pike Place	17	88	5.2
SeaTac Airport	6	24	1.2
Southcenter	11	38	1.9
Bellevue Square	20	48	3.3
Alki	3	24	2.6
These numbers are simply Pat's estimates for now, but eventually, we'll want the ability to update these numbers for each location, and to add/remove locations. But we'll not build all of that today. Each location is its own object.

Style Guide
Look at some example style guides on the internet. You will be making a basic style guide that will be on the page styleguide.html.

You do not need to get as fancy as those, but at the least, we'd like to see these pieces in your style guide:

A custom Google font for highlights
A specified standard san-serif web font for data (such as Arial, Verdana, or Helvetica)
A specified standard serif web font for text (such as Georgia, Times, etc.)
Specified different font colors for all three font usages
A background color for the default page background (make sure font colors have good contrast and are readable on this background)
A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!)
Anything else you'd like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.
