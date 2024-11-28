const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const firebaseAdminSdkCertificate = require("./firebase-adminsdk.json"); // firebase service account key json file

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(firebaseAdminSdkCertificate),
});

const verifyIdToken = async (idToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    return {
      uid: decodedToken.uid,
      email: decodedToken.email,
      displayName: decodedToken.name,
      photoURL: decodedToken.picture,
    };
  } catch (error) {
    console.error("Error verifying ID token:", error);
    throw error;
  }
};

app.post("/v1/user/verify", async (req, res) => {
  try {
    const accessToken = req.headers["x-access-token"];

    if (!accessToken) {
      throw new Error("Invalid params.");
    }

    const userDetails = await verifyIdToken(accessToken);

    return res.json({
      success: true,
      data: {
        displayName: userDetails.displayName,
        picture: userDetails.photoURL,
        email: userDetails.email,
      },
    });
  } catch (error) {
    res
      .status(401)
      .json({ success: false, error: "Invalid or expired token." });
  }
});

app.listen(7000, () => {
  console.log("Server running on port 7000");
});
