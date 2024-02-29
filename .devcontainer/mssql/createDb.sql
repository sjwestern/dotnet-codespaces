-- Create a new database called 'IdentityDB'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'IdentityDB'
)
CREATE DATABASE IdentityDB
GO

-- Create a new database called 'logdb'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'logdb'
)
CREATE DATABASE logdb
GO

-- Create a new database called 'hangfire'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'hangfire'
)
CREATE DATABASE hangfire
GO

-- Create a new database called 'AU'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'AU'
)
CREATE DATABASE AU
GO

-- Create a new database called 'UK'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'UK'
)
CREATE DATABASE UK
GO

-- Create a new database called 'US'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
FROM sys.databases
WHERE name = N'US'
)
CREATE DATABASE US
GO