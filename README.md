# js-register-regexs
Regular expressions for register inputs in JavaScript

# How
All functions returns error message string if there is error. If not, return true.

## nameRegEx(name)
There is two condition for name string:
* Name must contain at least one letter!
* Name's min length can be 1 and max length can be 10!

## usernameRegEx(username)
There is two condition for username string:
* This function return fail string if there is error. If not, return true.
* Username must not contain special characters!

## mailRegEx(mail)
All of conditions combined in one regular expression. This function can return just one error message (invalid mail). There is no specific error messages according to failure case.
* Will be updated.

## passwordRegEx(password)
There is four conditions for password string:
* Password must contain at least one lower case character!
* Password must contain at least one upper case character!
* Password must contain at least one number!
* Password's min length can be 6 and max length can be 25!

# What's next?
* First, i will add two regular expressions for password(weak and strong).
