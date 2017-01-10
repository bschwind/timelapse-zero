#!/bin/bash
DATE=$(date +"%Y_%m_%d")
TIME=$(date +%s)
mkdir -p /home/pi/camera/$DATE
raspistill -o /home/pi/camera/$DATE/$TIME.jpg \
           -t 1 \
           -q 100 \
           -ISO 100 \
           -awb horizon \
           --metering spot
