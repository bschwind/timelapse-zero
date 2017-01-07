#!/bin/bash
DATE=$(date +%s)
raspistill -o /home/pi/camera/$DATE.png \
           -t 1 \
           -q 100 \
           -ISO 100 \
           -awb horizon \
           --metering spot
