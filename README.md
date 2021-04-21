# Getting Started with Create React App

Page Speed Insights Score:
1. Mobile
![mob](https://user-images.githubusercontent.com/6795073/115614313-2d9a8080-a30b-11eb-8741-553df9c15d53.png)

2.Desktop
![Screenshot from 2021-04-22 01-35-44](https://user-images.githubusercontent.com/6795073/115614424-53278a00-a30b-11eb-81ef-b667ab82a455.png)

What has been done?
<br />
<br />
1.Scrips have been rendered asychronously and deffered.<br />
 <script async defer src=""/>
 
 <br />

2.Hooks used: Hooks don't directly impact performance, but they can help achieve the same goal with lesser lines of code. This, in turn helps in creating a smaller bundle

<br />

3.The functional Components have been binded with React.memo() to ensure less number of updates.

<br />

4.Gzip enabled for js files
<br /><br />

What else can be done?<br />
1.The bundle can be made smaller by using uglifyjs-plugin. It will remove the white spaces.

<br />

2. Purge CSS to optimize css

<br />

3. closure webpack plugin to remove dead and unused code

<br />

4. Use .svg instead of .png wherever possible



