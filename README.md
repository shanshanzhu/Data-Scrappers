Data-Scrapper
=============

This repo contains nodeJS and Python code used to scrap data.

###USstock

The source stock files (.csv) can be downloaded in this link
http://cs.brown.edu/~pavlo/stocks/history.tar.gz

The code is for clean these files so that they are ready to be converted into Postgres database.

######stockCleanerMultipleFiles.py 
convert multiple files. Please set your file location accordingly.
######stockcleanerOneFile.py 
clean data for one single file.

###sfGov

The datasource is:
https://data.sfgov.org/

######removeLastCol_cleanTimestamp.py
this Python file remove the last column from the csv file: Map__Crime_Incidents_-_Previous_Three_Months.csv, downloaded from 
https://data.sfgov.org/api/views/gxxq-x39z/rows.csv?accessType=DOWNLOAD
It also format the timestamp column as the same as the stock data time.

######urlScrapper.js
This script download all the 150 csv files from sfgov automatically. Please read this blog post for detailed explanation:
http://shanshanzhu.com/2013/12/08/datsy3-how-do-i-scrape-data-from-data-sfgov-org/

###helper
This folder contains several helper functions that can be used to transfer multiple csv files to postgres db set up in Microsoft Azure virtual machine. 

######cloudstorage.js
SetUp file for using azure blob

######csvtopostgres.js
Import 1 csv file into PSQL table

######csvtopostgresMultipleCSVMultiTables.js
Successfully import >8000 stock csv files into >8000 PSQL tables

######dataDownloader.js
A helper function used in urlScrapper.js to download a single csv from 1 url.

######phantomJSToGetPageImages.js
PhantomJS helper function to get screenshot of webpage.

######psgrDataTypes.js
a helper function to automatically determine the PSQL datatype from input data.

###factualGeopulse
http://www.factual.com/products/geopulse-context
NodeJS code to download geoPulase data from factual

######factualNode_centerOfUS_SouthWest.js
Parameter starting from center of US, going SouthWest, with 0.05 gap between steps of longitude or latitude.
######factualNode_centerOfUStoNW.js
Parameter starting from center of US, going NorthWest, with 0.05 gap between steps of longitude or latitude.
######factualNodeCal_SF.js
Parameter covering San Francisco, with 0.05 gap between steps of longitude or latitude.
