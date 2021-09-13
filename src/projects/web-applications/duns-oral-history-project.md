---
title: Duns Oral History Project
description: A web application for the management and presentation of audio recordings taken from interviews with the local residents of Duns in the Scottish Borders.
subhead: Oral History Web Application
image: /images/projects/web-application/duns-oral-history-project.jpg
imageAlt: Duns Oral History Project
url: https://dunsoralhistoryproject.co.uk
features: [HTML5, SCSS, Vue JS, Nuxt JS, Firebase, Babel, Webpack, PWA]
category: web-application
slug: duns-oral-history-project
order: 3
---

The Duns Oral History web application was written in order to manage and present audio recordings
of the residents of the Scottish Borders town of Duns.

The application was required to allow the administrator of the project to add the audio recording, images
relating to the recording, a description of the piece and a transcript of that particular
part of the interview.

The application was written using [Nuxt JS](https://nuxtjs.org/), a framework for
writing Vue JS applications, initially to take advantage of server side rendering
however ending up being used as a Static Site Generator to reduce hosting costs for the
client. The addition of hot-reloading and simple initial set-up made getting started
quick and easy.

All the data is stored in a [Firebase](https://firebase.google.com/) Database and files
stored in Google Cloud Storage.

I also created this as a Progressive Web App to improve performace.
