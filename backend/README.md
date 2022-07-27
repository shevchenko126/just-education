# Project - Just Education

Just Education - is an online learning and teaching marketplace.


# API Root

## Method 'api/v1/courses'

Type: GET 
Authorization required: No

Description: Courses endpoint. Used to get courses. Filtration by category_id and featured is possible.

HTTP 200 OK

Request params:

Atribute | Object type | Descriptions | Comments 
:--------| :-----------:| :------------:| :--------:
category_id | str | course category id | optional 
featured | boolean | course featured | optional 

## Method 'api/v1/notifications'

Type: GET 
Authorization required: No

Description: Notifications endpoint. Used to get notifications. Filtration by user.

HTTP 403 Forbidden

Request params:

Atribute | Object type | Descriptions | Comments 
:--------| :-----------:| :------------:| :--------:
user | str | registration user | except (IndexError, Token.DoesNotExist) 


## Method 'api/v1/registration/'

Type: GET 

Authorization required: No

Description: Registration endpoint. Used to get registration. Filtration - empty   

HTTP 200 OK

Atribute | Object type | Descriptions | Comments 
:--------| :-----------:| :------------:| :--------:
null | null | null | null | 


## Method '/api/v1/reviews/'

Type: GET 

Authorization required: No

Description: Reviews endpoint. Used to get Reviews. Filtration by 

HTTP 200 OK

Description: Reviews endpoint. Used to get Reviews. 

Filtration by course_id

Atribute | Object type | Descriptions | Comments 
:--------| :-----------:| :------------:| :--------:
course_id | str | course course_id | optional 

