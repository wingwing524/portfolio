# CV Setup Instructions

## How to Add Your CV to the Portfolio

1. **Prepare your CV:**
   - Export your CV as a PDF file
   - Name it exactly: `Yam_Ho_Wing_CV.pdf`
   - Ensure the file size is reasonable (under 5MB for web)

2. **Add the file:**
   - Place your PDF file in: `/public/cv/Yam_Ho_Wing_CV.pdf`
   - Replace the README.txt file currently in that folder

3. **File structure should be:**
   ```
   public/
   ├── cv/
   │   └── Yam_Ho_Wing_CV.pdf  (your actual CV file)
   ├── favicon.svg
   ├── manifest.json
   └── ...
   ```

4. **Test the download:**
   - Build and run your portfolio
   - Click the "Download CV" button on the homepage
   - Your CV should download automatically

## Current Behavior

Until you add your actual CV file:
- The download button will show a message asking users to contact you directly
- Users will be directed to the contact section if the file is missing

## Alternative Options

If you prefer not to host your CV directly, you can:

1. **Link to Google Drive/OneDrive:**
   - Upload your CV to cloud storage
   - Update the `cvPath` in `Hero.tsx` to point to the shareable link

2. **Link to LinkedIn:**
   - Update the button to redirect to your LinkedIn profile

3. **Email redirect:**
   - Change the button to open an email client with a pre-filled message requesting your CV

## Security Note

- CV files in the `/public` folder are publicly accessible
- Anyone with the direct link can download your CV
- This is normal behavior for portfolio websites
- Make sure your CV doesn't contain sensitive personal information you don't want public
