jsqs
====

Javascript Query String Library

This small library adds five new methods to the Window object

+  **window.loadParams()** - Parses the query string and builds the params object
+  **window.getParam(parameter_name)** - Gets a parameter from the params object, returns null if it does not exist
+  **window.setParam(parameter_name, parameter_value)** - Set a param value, overrides the old value if it already exists
+  **window.paramsString()** - Returns the parameters as a query string
+  **window.sendParams(url)** - Sets the window location to a provided url (optional) with a query string based on new params


Known issues, future enhancements

+  Passing a url with a query string to sendParams will not produce desired results. For example passing it http://google.ca?a=1 where the current params look like this: {'a' : 2, 'b' : 3} would produce something like this: http://google.ca?a=1?a=2&amp;b=c
+  The query string parsing is fairly quick and dirty for the time being, it doesn't do any encoding/decoding, so if the query string consisted of something like ?a=1&amp;b=1+1=2&amp;c=3 there are going to be issues and it will not produce the desired results.
+  Will probably add an additional parameter to sendParams to allow for opening in a new/specified window/tab.
+  Not tested in anything other than Chrome Dev 22<

You can play around with the api here in the javascript console.