#!/bin/bash
wait-for-it $MONGO_HOST:$MONGO_PORT
if [ $? == 0 ]; then
  exec yarn $@
else
  echo Services not ready
  exit 1
fi
