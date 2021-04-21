**Link**: https://desolate-hamlet-22495.herokuapp.com/


Page Speed Insights Score:
1. ****Mobile****
![mob](https://user-images.githubusercontent.com/6795073/115614313-2d9a8080-a30b-11eb-8741-553df9c15d53.png)

2.****Desktop****
![Screenshot from 2021-04-22 01-35-44](https://user-images.githubusercontent.com/6795073/115614424-53278a00-a30b-11eb-81ef-b667ab82a455.png)
<hr/>
<b>What has been done?</b>
<br />
1.Scrips have been rendered asychronously and deffered.
<br />
<i><script  <b> async defer </b> src=""/></i> 
 <br />

2.**Hooks used**: Hooks don't directly impact performance, but they achieve the same goal as class based components with lesser lines of code. This, in turn helps in creating a smaller bundle

<br />

3.The functional Components have been binded with **React.memo()** to ensure less number of updates.

<br />

4.**Gzip** enabled for js files
<br /><br />
<hr/>
<b>What else can be done?</b><br />
1.The bundle can be made smaller by using **uglifyjs-plugin**. It will remove the white spaces.

<br />

2.**closure-webpack-plugin** to remove dead and unused code

<br />

3.Use **.svg** instead of .png wherever possible

<br />

4.**Purge CSS **to optimize css



