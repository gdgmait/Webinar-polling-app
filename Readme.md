# Webinar Polling

A Webinar Polling app made for Google Developer Group mait.

## Getting Started

This app requires you to have meteor and node installed. Then you can clone the repo and run the following from the command line.

```
meteor npm install
```

```
meteor
```
Open a new terminal and run the following command.

```
meteor mongo
```
Now add the documents in the webinar collection using the following command.
This happens as and when we need to add/change topics to be displayed to the user.

```
db.webinars.insert({title:"Any title",upvotes:0});
```

## Screenshot

![screenwebinar](https://user-images.githubusercontent.com/19841485/30339897-3ab309d8-980e-11e7-8715-da72e4cd6faf.png)

Contributing
==========
Any kind of contributions are welcome.

1. **Fork** the repo on GitHub.
2. **Clone** the project to your own machine.
3. **Commit** changes to **development** branch.
4. **Push** your work back up to your fork.
5. Submit a **Pull request** so that i can review your changes
