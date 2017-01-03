#!/bin/bash
DATE=$(date +%s)
raspistill -o /home/pi/camera/$DATE.png -t 1
