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

::if distribution-id is setup we create an invalidation
call aws cloudfront create-invalidation --distribution-id %_cf_distribution_id% --paths /*

start "" "%_url%"

echo All done, uploaded to %_s3_bucket%

if "%_isPause%" equ "true" pause