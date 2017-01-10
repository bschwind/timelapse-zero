#!/bin/bash
DATE=$(date +"%Y_%m_%d")
TIME=$(date +%s)
raspistill -o /home/pi/camera/$DATE/$TIME.png \
           -t 1 \
           -q 100 \
           -ISO 100 \
           -awb horizon \
           --metering spot
