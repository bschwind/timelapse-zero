#!/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games

aws s3 sync /home/pi/camera s3://timelapse-zero-1/meiji-dori-winter
nodejs /home/pi/timelapse-zero/deleteOld.js
