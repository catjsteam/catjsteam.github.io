Rest API
==========

## assert [GET]
  /assert [ id | testName | name | reports | status | message | type ]
  
### Test Start Example
  /assert?
    id=10bcf922-d74b-dbde-eb35-a49e0d8c86a8 
    testName=Start
    name=Start
    reports=console,junit
    status=Start
    message=Start
    type=test
    
### Test End Example
  /assert?
    id=10bcf922-d74b-dbde-eb35-a49e0d8c86a8 
    testName=End
    name=End
    reports=console,junit
    status=End
    message=End
    type=test
  
