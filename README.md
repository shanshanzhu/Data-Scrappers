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


