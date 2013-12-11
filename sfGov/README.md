
###sfGov

The datasource is:
https://data.sfgov.org/

######removeLastCol_cleanTimestamp.py

this Python file remove the last column from the csv file: Map__Crime_Incidents_-_Previous_Three_Months.csv, downloaded from 
https://data.sfgov.org/api/views/gxxq-x39z/rows.csv?accessType=DOWNLOAD

and also format the timestamp column as the same as the stock data time.

######urlScrapper.js

This script download all the 150 csv files from sfgov automatically. Please read this blog post for detailed explanation:
http://shanshanzhu.com/2013/12/08/datsy3-how-do-i-scrape-data-from-data-sfgov-org/

