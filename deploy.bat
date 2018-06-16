REM ********************************************************************************
REM								UploadToS3.bat
REM This file uploads to an S3 bucket
REM
REM ********************************************************************************

::defaults
:defaults
set _s3_bucket=anideaforanapp.com
set _cf_distribution_id=%idea_cf_distribution_id%
set _url=http://anideaforanapp.com

::operations
cd public
call aws s3 cp . s3://%_s3_bucket% --recursive

::upload each page individually to set filetype
call aws s3 cp collectmore s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp consulting s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp emovey s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp gimble s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp index s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp mywork s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp slack s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp speaking s3://%_s3_bucket% --content-type "text/html"
call aws s3 cp tooltracker s3://%_s3_bucket% --content-type "text/html"

::if distribution-id is setup we create an invalidation
call aws cloudfront create-invalidation --distribution-id %_cf_distribution_id% --paths /*

start "" "%_url%"

echo All done, uploaded to %_s3_bucket%

if "%_isPause%" equ "true" pause