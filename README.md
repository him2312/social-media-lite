## Welcome to Social Media Lite

This is a tool designed to help you **break free from your social media addiction** by blocking social media features on your web browser. 

With this extension, you can focus on your work or studies without the constant distractions from social media.

Origin of the idea: https://twitter.com/ui_tutor/status/1619691940899078145

### Supports all major platforms
- Youtube
- Twitter
- LinkedIn
- Instagram
- Google Mail

### Screenshots
- On Twitter
![On Twitter](/screenshots/use-on-twitter.png)

- On LinkedIn
![On LinkedIn](/screenshots/use-on-linkedin.png)


### How to contribute
- Fork a branch from `master`
- Work on exciting enhancements
- Raise a PR to `master` 
- Feel good about helping people do their life's best work

### How to run locally
- npm i
- npm start

### How to test locally
- npm run build
- Go to `chrome://extensions/`
- Turn on `Developer mode` on top-right.
![Developer mode](/screenshots/developer-mode.png)
- Select `Load unpacked` from top-left.
![Load unpacked](/screenshots/load-unpacked.png)
- Choose the `build` folder.
![Upload build](/screenshots/load-build.png)
- It should show up in `Extensions` 
- You can pin it and see the changes
- After every change you will have to `npm run build` and refresh the changes on `chrome://extensions`.
![Refresh extension](/screenshots/refresh-extension.png)

### Architecture
<img src="/screenshots/architecture.jpeg"  width="500" height="500" alt="Architecture">

### How to add new platform
- Add the new platform to [PLATFORM_METADATA](src/platform/index.js)
- Create a new CONFIG and import in [PLATFORM_CONFIG](src/platform/manage-config/index.js)
- Create the CSS styling in [element_css.js](src/chrome/element_css.js)
- [content.ts](src/chrome/content.ts) will detect the changes in `chrome.storage` and trigger changes
- Make sure your `id` in Config is similar to `key` in CSS styles. (For reference - [Twitter Config](src/platform/manage-config/twitter-config.ts) and [Twitter CSS](src/chrome/element_css.js))

## Support

If you have any questions, comments, or issues while using the Chrome Extension, please feel free to contact us at [himanshu23work@gmail.com](mailto:himanshu23work@gmail.com).