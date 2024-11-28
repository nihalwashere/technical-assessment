## Backend

### Create a Firebase service account key JSON file

To get the Firebase service account key JSON file, follow these steps:

- Step 1: Go to Firebase Console

  Navigate to the Firebase Console.
  Select your project.

- Step 2: Access Project Settings

  Click the Gear Icon ⚙️ in the left sidebar.
  Select Project Settings.

- Step 3: Go to Service Accounts Tab

  In the Project Settings, click on the Service Accounts tab.
  Under the Firebase Admin SDK section, you’ll see the option to generate a service account key.

- Step 4: Generate a New Private Key

  Click the Generate new private key button.
  A dialog will appear confirming the action. Click Generate Key.
  The private key file (a .json file) will be downloaded automatically to your computer.

- Step 5: Store the JSON File Securely

  Save the .json file securely in your backend project directory and rename it to `firebase-adminsdk.json`
  Do not expose or commit the JSON file to version control systems like GitHub. Add it to your .gitignore file.
