To host your Matrix-themed 3D web portal on GitHub Pages, you need to configure your GitHub repository correctly. Based on our previous conversations, you're familiar with GitHub (e.g., hosting a backend on Heroku and coordinating via GitHub under "pdragonlabs"), so I'll tailor this to your needs with clear, concise steps. Here’s how to set up the project to work on GitHub Pages, including the necessary settings:

### Steps to Host on GitHub Pages

1. **Prepare Your Repository**
   - Create a new repository on GitHub under your account (e.g., `pdragonlabs/3d-web-portal`).
   - Save the provided `MatrixThemedPortal.html` file as `index.html` in the root of your project directory. This is crucial because GitHub Pages looks for an `index.html` file by default to serve as the entry point.[](https://stackoverflow.com/questions/62850076/how-do-i-host-my-portfolio-website-on-github)

2. **Upload Files to GitHub**
   - Initialize a Git repository locally in your project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit: Matrix-themed 3D web portal"
     ```
   - Link to your GitHub repository and push the files:
     ```bash
     git remote add origin https://github.com/pdragonlabs/3d-web-portal.git
     git push -u origin main
     ```
     Replace `main` with `master` if your default branch is named differently. Ensure all files, including `index.html`, are uploaded.[](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages)

3. **Enable GitHub Pages in Repository Settings**
   - Go to your repository on GitHub (e.g., `https://github.com/pdragonlabs/3d-web-portal`).
   - Click the **Settings** tab.
   - Scroll to the **Pages** section (under **Code and automation**).
   - Under **Build and deployment**:
     - **Source**: Select **Deploy from a branch**.
     - **Branch**: Choose the `main` branch (or your default branch) and select `/ (root)` as the folder.
     - Click **Save**.
   - GitHub will provide a URL (e.g., `https://pdragonlabs.github.io/3d-web-portal`) once the site is published. It may take a few minutes to go live.[](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages)

4. **Verify the Setup**
   - Visit the provided GitHub Pages URL in a browser to ensure the 3D portal loads correctly.
   - The site should display the rotating 3D cube with iframes of the five websites and the Matrix-style digital rain background. If it doesn’t load, check the browser console for errors (e.g., CORS issues with iframes) and ensure `index.html` is in the root directory.

5. **Handle Potential Issues**
   - **CORS Restrictions**: Some websites (e.g., Reddit, Stack Overflow) may block being loaded in iframes due to security policies. If this happens, replace problematic URLs in the `sites` array with ones that allow embedding (e.g., `https://en.wikipedia.org/wiki/Main_Page` instead of `https://www.wikipedia.org`). You can test this locally before pushing changes.
   - **Three.js CDN**: The code uses a CDN for Three.js (`https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js`). Ensure your internet connection is active, as GitHub Pages doesn’t host this file. Alternatively, download `three.min.js` from the Three.js GitHub repository and include it in your project folder, updating the `<script>` tag to reference the local file.[](https://seanbutler.github.io/3DWebTechCourse/worksheets/S01-W01-ToolingUp/)
   - **File Structure**: Confirm the repository root contains `index.html` directly, not in a subfolder, as GitHub Pages serves files from the root or a specified directory (e.g., `/docs`).[](https://stackoverflow.com/questions/62850076/how-do-i-host-my-portfolio-website-on-github)

6. **Optional: Add a README**
   - Include a `README.md` file to describe your project, e.g.:
     ```markdown
     # Matrix-Themed 3D Web Portal
     A 3D web portal using Three.js to display five websites on a rotating cube with a Matrix-style digital rain background. Hosted on GitHub Pages.

     ## Setup
     - Clone the repository.
     - Open `index.html` locally or visit the live site at `https://pdragonlabs.github.io/3d-web-portal`.

     ## Features
     - 3D cube navigation with mouse drag.
     - Matrix digital rain effect.
     - Buttons to switch between pages.
     ```
   - Push the README to GitHub:
     ```bash
     git add README.md
     git commit -m "Add README"
     git push
     ```

### Additional Notes
- **GitHub Pages is Static**: GitHub Pages hosts static files (HTML, CSS, JS), which is perfect for this project since it’s a client-side Three.js application. No server-side processing is needed.[](https://medium.com/%40harshadwani/quickly-create-a-3-d-interactive-responsive-portfolio-website-c1c6ef6c715d)
- **Testing Locally**: Before pushing, open `index.html` in a browser locally to verify the 3D cube and Matrix effect work. You may need a local server (e.g., `python -m http.server 8000`) to avoid CORS issues with iframes when testing locally.
- **Custom Domain (Optional)**: If you want a custom domain, you can configure it in the **Pages** settings by adding a CNAME record and updating the repository’s **Custom domain** field.[](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages)
- **Relevant Memory**: Your past experience with GitHub (e.g., hosting a backend for Heroku) suggests you’re comfortable with repository management. If you need a refresher on Git commands or run into issues, let me know, and I can provide more detailed guidance tailored to your setup.

### Example Repository Structure
```
3d-web-portal/
├── index.html
├── README.md
└── (optional) js/three.min.js  # If hosting Three.js locally
```

Once set up, your portal will be live at `https://pdragonlabs.github.io/3d-web-portal` (replace with your actual username and repository name). If you hit any snags or want to tweak the code further (e.g., adjust the Matrix rain speed or cube size), let me know![](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Using_GitHub_pages)