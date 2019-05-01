# Building Applications

Veritone puts the power of AI in developers’ hands with tools to create and integrate applications that build on the Veritone Platform.

Our app development framework is flexible and open, so you can easily add the cognitive power of Veritone to your solution and install it in our Platform. By extending the capabilities of Veritone through APIs, we do all the heavy lifting, which allows you to focus on what counts — building your application.

Our documentation resources cover everything you need to know for building and integrating your app in the Veritone Platform. You’ll find the basics here and can access more detailed instructions for the app development process in other sections. We’ve even provided a tutorial walkthrough and sample application to help kick-start your innovative journey.

## How does it work?

Veritone’s robust APIs provide a wide range of functions that your app can use to build creative and meaningful AI-based solutions. And because no two apps are alike, you have the flexibility of customizing your app by choosing the functionality that specifically meets your individual needs. Your app can use our API to take advantage of Veritone Platform features such as:

- Upload your own Media, or gain permission to Private Media from partners
- Cognitive Engine Processing across 11 categories (e.g., transcription, object detection)
- Search
- Metadata Storage
- Administration Tools

Veritone APIs are available via our GraphQL interface. Visit our [API section](/apis/) to learn more.

### Creating an Application

Before you start development, it's important to know how all the pieces fit together. Here’s a high-level overview of the process for developing and publishing your app in the Veritone Platform:

1. Create your app in Veritone Developer
2. Set up user authentication using OAuth 2.0
3. Use APIs to build Veritone functionality into your app
4. Submit your app for review and approval
5. Install your app in the Veritone Platform

You’ll find complete application development workflow details in our [Quick Start](/developer/applications/quick-start/) section.

### Integrating an existing Application

If you have an existing applications, you can easily integrate that onto our platform.

We recommend starting your integration at a high level starting with the UI, and working down the stack to the data level. The steps for integration will be similar to creating a new application:

1. Create your app in Veritone Developer
2. Set up user authentication using OAuth 2.0
3. Use APIs to build Veritone functionality into your app
4. Integrate the data to pull data from Veritone, process it on your application, and write the metadata to Veritone
5. Submit your app for review and approval

For more information, please refer to the [Application Integration](/developer/applications/integration/) section.

### Who can use my application?

Once your app is integrated in Veritone, it’s available to all users in your organization and can be launched directly from the app picker. In the coming months, the introduction of our new App Marketplace will give you the opportunity to make your application available to the global Veritone customer base.

### What are the application requirements?

The purpose of Veritone applications is to provide users with AI-based solutions. To help achieve this, your app must have an evident purpose that ties into Veritone’s core services and it must incorporate one or more of our cognitive processing workflow APIs.

Integrated Veritone apps use standard OAuth 2.0 protocol to authenticate, provide single sign on, and acquire access tokens for use with our APIs. Your app must support OAuth 2.0 integration for user login and authentication on both the front and back ends.

### Where can I get help?

If you need assistance at any point in the process, reach out to our support team on [Slack](https://chat.veritone.com/) for help.
