Timelapse-Zero
========

Documentation and files for setting up timelapse photography on a Raspberry Pi Zero.


Dependencies
------------

- Enabled Pi Camera
- NodeJS
- AWS CLI (through pip, not apt-get)
- AWS IAM credentials configured on the Pi with access to an S3 bucket


Timelapse Timing
----------------

Configured to take a picture every 5 minutes (see cronCommand.txt), so:

12 pictures an hour
60 pictures = 5 hours
1 second at 60FPS = 5 hours of real time
