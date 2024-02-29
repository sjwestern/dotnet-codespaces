#!/bin/bash
sqlfiles="false"
SApassword=$1
sqlpath=$2

echo "SELECT * FROM SYS.DATABASES" | dd of=testsqlconnection.sql
for i in {1..60};
do
    sqlcmd -S localhost -U sa -P $SApassword -d master -i testsqlconnection.sql > /dev/null || true
    if [ $? -eq 0 ]
    then
        echo "SQL server ready"
        break
    else
        echo "Not ready yet..."
        sleep 1
    fi
done
rm testsqlconnection.sql || true

for f in $sqlpath/*
do
    if [ $f == $sqlpath/*".sql" ]
    then
        sqlfiles="true"
        echo "Found SQL file $f"
    fi
done

if [ $sqlfiles == "true" ]
then
    for f in $sqlpath/*
    do
        if [ $f == $sqlpath/*".sql" ]
        then
            echo "Executing $f"
            sqlcmd -S localhost -U sa -P $SApassword -d master -i $f || true
        fi
    done
fi

if [ $SApassword == "P@ssw0rd" ]
then
    echo "$(tput setaf 1)WARNING$(tput sgr0): you are using the default sample password. If you want to change it, execute the following command"
    echo "/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $SApassword -d master -Q \"ALTER LOGIN sa WITH PASSWORD = '<enterStrongPasswordHere>' \""
fi

npm i -g azure-functions-core-tools@4 --unsafe-perm true || true
dotnet tool install --global dotnet-ef || true


B64_PAT=$(printf ":%s" "$AZ_DEVOPS_PAT" | base64) || true
git -c http.extraHeader="Authorization: Basic ${B64_PAT}" clone https://sjwestern@dev.azure.com/sjwestern/sjwestern/_git/sjwestern || true

cd ./SampleApp && dotnet restore || true

cd ./frontend-apps && npm i || true
