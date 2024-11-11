<h1>Rest API</h1>

<h2>Description</h2>
In this lab I have created a basic API using Node Js. I created this program to simulate a hospital's patient database and records. Within the code I created 2 patients and then utilized Postman to simulate changes made to this small database of the 2 created patients. The purpose of this lab was to get practice and understanding of Rest API. I wanted to grasp how it can be used in a real-world scenario. You may view the code in the index.js file that is attached.
<br />


<h2>Languages and Utilities Used</h2>

- <b>Javascript</b>
- <b>Visual Studio</b>
- <b>Postman</b>

<h2>Lab walk-through:</h2>

<p align="center">
Starting the program using Node: <br/>
<img src="https://i.imgur.com/KbbaSDw.png" height="80%" width="80%" alt="API"/>
<br />
<br />
Using a GET command in order to obtain a patient's medical records:  <br/>
<img src="https://i.imgur.com/p6aLxKI.png" height="80%" width="80%" alt="API"/>
<br />
<br />
If requested patient details do not match, it returns an Unauthorized error: <br/>
<img src="https://i.imgur.com/RWT6Dnl.png" height="80%" width="80%" alt="API"/>
<br />
<br />
Alternatively, if Patient details are correct, but the request reason is not a legitimate reason - a 501 error is returned:  <br/>
<img src="https://i.imgur.com/Rwoov7o.png" height="80%" width="80%" alt="API"/>
<br />
<br />
Using a POST command to create a new patient:  <br/>
<img src="https://i.imgur.com/7fm2EVE.png" height="80%" width="80%" alt="API"/>
<br />
<br />
Using the PUT command to update a patient's records, but the patient information is incorrect:  <br/>
<img src="https://i.imgur.com/a77Ani7.png" height="80%" width="80%" alt="API"/>
<br />
<br />
Updating a Patient's phone number using the PUT command:  <br/>
<img src="https://i.imgur.com/qqrksVR.png" height="80%" width="80%" alt="API"/>
 <br />
 <br />
Deleting a Patient using the DELETE command:  <br/>
<img src="https://i.imgur.com/eRHAbzf.png" height="80%" width="80%" alt="API"/>
<br />
</p>

<!--
 ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
--!>
