#!/bin/bash
if [ -z "$1" ] then 
    echo "repo url required"
    return 1
fi
if [ -z "$3" ] then 
    echo "clone folder"
    return 1
fi
if [ -z "$3" ] then 
    echo "az PAT token required"
    return 1
fi

repo_url=$1
folder=$2
az_pat=$3


B64_PAT=$(printf ":%s" "${az_pat}" | base64) || true
if [ ! -d "$folder" ] ; then
    git -c http.extraHeader="Authorization: Basic ${B64_PAT}" clone "${repo_url}" "$folder" || true
else
    cd "$folder"
    git pull $URL
    cd ..
fi


