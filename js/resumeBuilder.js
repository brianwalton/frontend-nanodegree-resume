/*
This is empty on purpose! Your code to build the resume will go here.
The HTMLx vars are defined in helper.js
 */
var bio = {
   "name": "Brian Walton",
   "role": "Front End Webber",
   "contacts": {
      "mobile": "777-777-7777",
      "email": "bdw@email.com",
      "github": "brianwalton",
      "twitter": "@noTweets",
      "location": "Alpharetta, GA"
   },
   "biopic": "images/Its-all-good.jpg",
   "welcomeMessage": "Welcome to my resume page and thanks for checking out my skills",
   "skills": ["Tester", "Web Developer", "Program Manager"],
   "skillsSummary": ["This is brief summary of the kind of things that I did as a tester. Welcome to my resume page and thanks for checking out my skills. Blah, blah, blah ....",
                     "",
                     "This is brief summary of the kind of things that I did as a developer.  Blah, blah, and even moe blah."]
};
bio.display = function() {
   $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
   $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
   $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
   $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
   $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
   $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
   $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
   $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
   $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
   if (bio.skills.length > 0) {
      var summarySkill;
      $("#header").append(HTMLskillsStart);
      for (var idx = 0; idx < bio.skills.length; idx++) {
         // Check for summary.  Only works on desktops.
         if (bio.skillsSummary[idx].length > 0) {
            summarySkill = HTMLskillsSummary.replace("%data%", bio.skills[idx]);
            $("#skills").append(summarySkill.replace("%summary%", bio.skillsSummary[idx]));
         }
         else {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[idx]));
         }
      }
   }
};

//
// Work Stuff
//

var work = {
   "jobs": [{
      "employer": "State of Ohio",
      "title": "Janitor",
      "dates": "1975 - 1978",
      "location": "Columbus, OH",
      "description": "Did various cleanning jobs.  Also did odd jobs as needed.",
      "url": "http://ohio.gov/"
   }, {
      "employer": "ATV",
      "title": "Software Engineer",
      "dates": "1982 - 2000",
      "location": "Atlanta, GA",
      "description": "Software testing, software development.  Also some project management work.",
      "url": "http://atlantatechvillage.com/"
   }, {
      "employer": "State of Georgia",
      "title": "Software Engineer",
      "dates": "2000 - Present",
      "location": "Atlanta, GA",
      "description": "Backend server software developer.",
      "url": "http://ga.gov/"

   }, ]
};
work.display = function() {
   work.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var employer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedEmployer = employer.replace("#", job.url);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      $(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
   });
};

//
// Education Stuff
//

var education = {
   "schools": [{
      "name": "Ohio University",
      "location": "Athens, OH",
      "dates": "1978 - 1982",
      "majors": ["Computer Science", "Spanish"],
      "degree": "BS",
      "url": "https://www.ohio.edu/"
   }, {
      "name": "The Ohio State University",
      "location": "Columbus, OH",
      "dates": "1987 - 1989",
      "majors": ["Computer Science"],
      "degree": "MS",
      "url": "https://www.osu.edu/"
   }],
   "onlineCourses": [{
      "title": "Front End Web Development",
      "school": "Udacity",
      "dates": "7/2016",
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   }, {
      "title": "Java Development",
      "school": "Udemy",
      "dates": "7/2016",
      "url": "https://www.udemy.com/java-the-complete-java-developer-course/"
   }]
};
education.display = function() {
   education.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var schoolName = HTMLschoolName.replace("%data%", school.name);
      var formattedSchool = schoolName.replace("#", school.url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      $(".education-entry:last").append(formattedSchool.concat(formattedDegree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      var majorList = school.majors.toString();
      majorList = majorList.replace(/,/g, ", ");
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", majorList));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
   });

   if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      education.onlineCourses.forEach(function(online) {
         $("#education").append(HTMLschoolStart);
         var formattedTitle = HTMLonlineTitle.replace("#", online.url);
         formattedTitle = formattedTitle.replace("%data%", online.title);
         var formattedSchool = HTMLonlineSchool.replace("%data%", online.school);
         $(".education-entry:last").append(formattedTitle + formattedSchool);
         $(".education-entry:last").append(HTMLonlineDates.replace("%data%", online.dates));
         // $(".education-entry:last").append(HTMLonlineURL.replace("%data%", online.url));
      });
   }
};

//
// Project Stuff
//

var projects = {
   "projects": [{
      "title": "News Breakpoints",
      "dates": "6/2016",
      "description": "This was the Responsive news page project. Responsive text sections, placements, and" +
         " the like. I like it the most because content actually moves to different position " +
         "based on window size. That's cool.",
      "images": ["images/dog.jpg"]
   }, {
      "title": "Portfolio",
      "dates": "7/2016",
      "description": "The Portfolio project highlighted some of the projects that I have done so far. " +
         "Learned some pretty cool stuff and learning more all the time.",
      "images": ["images/unsplashit_img0_1141-350.jpg",
         "images/Tursiops_truncatus_01.jpg"
      ]
   }]
};
projects.display = function() {
   projects.projects.forEach(function(projObj) {
      // Find the projects ID and append
      $("#projects").append(HTMLprojectStart);
      // HTMLprojectStart uses the project-entry class. Start appending after the :last one that was entered
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projObj.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projObj.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projObj.description));
      projObj.images.forEach(function(pic) {
         $(".project-entry:last").append(HTMLprojectImage.replace("%data%", pic));
      });
   });
};

//
// Add button to end of page that changes resume name to international format
//
$("#main").append(internationalizeButton);

function inName(myname) {
   var nameAry = myname.split(" ");
   nameAry[1] = nameAry[1].toUpperCase();
   var Iname = nameAry[0] + " " + nameAry[1];
   return (Iname);
}

$("#mapDiv").append(googleMap);

//
// Display the info for each section
//
var sections = [bio, work, projects, education];
sections.forEach(function(topic) {
   topic.display();
});

// This function executes after the page load completes
$(function() {
   // Have all anchors with urls open in a new window and others do nothing
   $("a[href!='#']").attr("target", "_blank");
   $("a[href='#']").removeAttr("href");
});
