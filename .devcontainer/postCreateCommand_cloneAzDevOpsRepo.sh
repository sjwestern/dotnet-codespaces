#!/bin/bash
if [ -z "$1" ] then 
    echo "repo url required"
    return 1
fi
if [ -z "$2" ] then 
    echo "az PAT token required"
    return 1
fi

repo_url=$1
az_pat=$2

B64_PAT=$(printf ":%s" "${az_pat}" | base64) || true
git -c http.extraHeader="Authorization: Basic ${B64_PAT}" clone "${repo_url}" || true

